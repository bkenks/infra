package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

// Based on github.com/librenms/docker examples/compose. The msmtpd mail relay
// sidecar is omitted; configure alert transports in the web UI instead.
_librenms: {
	host:          "librenms.\(ext.domains.ktbCloud)"
	port:          8000
	cachePort:     6379
	dbPort:        3306
	syslogPort:    514
	trapPort:      162
	version:       "26.10.2"
	dbVersion:     "12"
	valkeyVersion: "9.1-alpine"
	tz:            "America/New_York"
}

librenms: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	notes: "Network monitoring (SNMP polling, alerting) at https://\(_librenms.host). The first-run wizard creates the admin user; see ops/services/README.md. bill publishes syslog (514) and SNMP traps (162) for LAN devices."

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:      D.fnox.providers.onepassword._ID
			DB_PASSWORD: value: "librenms/DB_PASSWORD"
		}
	}

	// Environment shared by the app and every sidecar (the README requires
	// the REDIS_* settings on all containers once a dispatcher runs).
	_env: {
		TZ:                     _librenms.tz
		PUID:                   "1000"
		PGID:                   "1000"
		DB_HOST:                D.compose.services.db.container_name
		DB_NAME:                D.compose.name
		DB_USER:                D.compose.name
		DB_TIMEOUT:             "60"
		(_scr.DB_PASSWORD._ID): "${\(_scr.DB_PASSWORD._ID):?err}"
		CACHE_DRIVER:           "redis"
		SESSION_DRIVER:         "redis"
		REDIS_HOST:             D.compose.services.redis.container_name
		LIBRENMS_BASE_URL:      "https://\(_librenms.host)"
		// Pangolin's newt connector proxies in from the pangolin-site network.
		REAL_IP_FROM:        ext.dockerNetworks.pangolinSite.subnet
		REAL_IP_HEADER:      "X-Forwarded-For"
		APP_TRUSTED_PROXIES: ext.dockerNetworks.pangolinSite.subnet
	}

	// Sidecars share /data with the app, and they read the APP_KEY the app
	// writes there on first start. Upstream's compose uses plain depends_on:
	// released images (<= 26.10.2) ship no HEALTHCHECK, so service_healthy on
	// app fails the deploy.
	_sidecar: {
		image: "docker.io/librenms/librenms:\(_librenms.version)"
		cap_add: ["NET_ADMIN", "NET_RAW"]
		depends_on: {
			app: condition:   "service_started"
			redis: condition: "service_healthy"
		}
		volumes: ["\(D.compose.volumes.data._ID):/data"]
		networks: ["default"]
	}

	compose: S={
		name: "librenms"
		volumes: {for svcVol in ["data", "db_data", "redis_data"] {
			(svcVol): {}
		}}
		networks: {ext.dockerNetworks.pangolinSite.asExternal}

		services: {
			db: {
				image: "docker.io/library/mariadb:\(_librenms.dbVersion)"
				command: [
					"mariadbd",
					"--innodb-file-per-table=1",
					"--lower-case-table-names=0",
					"--character-set-server=utf8mb4",
					"--collation-server=utf8mb4_unicode_ci",
				]
				environment: {
					TZ:                           _librenms.tz
					MARIADB_RANDOM_ROOT_PASSWORD: "yes"
					MARIADB_DATABASE:             S.name
					MARIADB_USER:                 S.name
					MARIADB_PASSWORD:             "${\(_scr.DB_PASSWORD._ID):?err}"
				}
				expose: [_librenms.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/mysql"]
				networks: ["default"]
				healthcheck: {
					test: ["CMD", "healthcheck.sh", "--connect", "--innodb_initialized"]
					interval:     "10s"
					timeout:      "5s"
					retries:      5
					start_period: "30s"
				}
			}
			redis: {
				image: "docker.io/valkey/valkey:\(_librenms.valkeyVersion)"
				expose: [_librenms.cachePort]
				volumes: ["\(S.volumes.redis_data._ID):/data"]
				networks: ["default"]
				healthcheck: {
					test: ["CMD", "valkey-cli", "ping"]
					interval:     "5s"
					timeout:      "3s"
					retries:      5
					start_period: "5s"
				}
			}
			// Web UI.
			app: {
				image:    "docker.io/librenms/librenms:\(_librenms.version)"
				hostname: S.name
				cap_add: ["NET_ADMIN", "NET_RAW"]
				depends_on: {
					db: condition:    "service_healthy"
					redis: condition: "service_healthy"
				}
				environment: D._env
				expose: [_librenms.port]
				volumes: ["\(S.volumes.data._ID):/data"]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
			}
			// Runs the pollers; without it nothing gets polled.
			dispatcher: D._sidecar & {
				hostname: "\(S.name)-dispatcher"
				environment: D._env & {
					SIDECAR_DISPATCHER: "1"
					DISPATCHER_NODE_ID: "dispatcher1"
				}
			}
			// Receives device syslog. LibreNMS also needs enable_syslog=true.
			syslogng: D._sidecar & {
				hostname: "\(S.name)-syslogng"
				environment: D._env & {SIDECAR_SYSLOGNG: "1"}
				ports: [
					"\(_librenms.syslogPort):\(_librenms.syslogPort)/tcp",
					"\(_librenms.syslogPort):\(_librenms.syslogPort)/udp",
				]
			}
			// Receives SNMP traps.
			snmptrapd: D._sidecar & {
				hostname: "\(S.name)-snmptrapd"
				environment: D._env & {SIDECAR_SNMPTRAPD: "1"}
				ports: [
					"\(_librenms.trapPort):\(_librenms.trapPort)/tcp",
					"\(_librenms.trapPort):\(_librenms.trapPort)/udp",
				]
			}
		}
	}
}
