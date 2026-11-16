package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

// Based on github.com/netbox-community/netbox-docker (5.1.2). The image bakes
// in its env-driven configuration/ dir, so no config bind mount is needed.
_netbox: {
	host:          "netbox.\(ext.domains.ktbCloud)"
	port:          8080
	cachePort:     6379
	dbPort:        5432
	version:       "v4.7-5.1.2"
	dbVersion:     "18-alpine"
	valkeyVersion: "9.1-alpine"
}

netbox: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	notes: "Network source of truth / IPAM + DCIM (https://\(_netbox.host)). No superuser is auto-created (SKIP_SUPERUSER); see ops/services/README.md for creating one."

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:             D.fnox.providers.onepassword._ID
			SECRET_KEY: value:         "netbox/SECRET_KEY"
			API_TOKEN_PEPPER_1: value: "netbox/API_TOKEN_PEPPER_1"
			DB_PASSWORD: value:        "netbox/DB_PASSWORD"
		}
	}

	// Environment shared by the app and worker containers.
	_env: {
		DB_HOST:                       D.compose.services.db.container_name
		DB_NAME:                       D.compose.name
		DB_USER:                       D.compose.name
		REDIS_HOST:                    D.compose.services.redis.container_name
		REDIS_DATABASE:                "0"
		REDIS_CACHE_HOST:              D.compose.services["redis-cache"].container_name
		REDIS_CACHE_DATABASE:          "1"
		CSRF_TRUSTED_ORIGINS:          "https://\(_netbox.host)"
		SKIP_SUPERUSER:                "true"
		(_scr.SECRET_KEY._ID):         "${\(_scr.SECRET_KEY._ID):?err}"
		(_scr.API_TOKEN_PEPPER_1._ID): "${\(_scr.API_TOKEN_PEPPER_1._ID):?err}"
		(_scr.DB_PASSWORD._ID):        "${\(_scr.DB_PASSWORD._ID):?err}"
	}

	// Volumes shared by the app and worker containers.
	_appVolumes: [
		"\(D.compose.volumes.media._ID):/opt/netbox/netbox/media:rw",
		"\(D.compose.volumes.reports._ID):/opt/netbox/netbox/reports:rw",
		"\(D.compose.volumes.scripts._ID):/opt/netbox/netbox/scripts:rw",
	]

	_valkeyHealthcheck: {
		test: ["CMD", "valkey-cli", "ping"]
		interval:     "5s"
		timeout:      "3s"
		retries:      5
		start_period: "5s"
	}

	compose: S={
		name: "netbox"
		volumes: {for svcVol in ["media", "reports", "scripts", "db_data", "redis_data", "redis_cache_data"] {
			(svcVol): {}
		}}
		networks: {ext.dockerNetworks.pangolinSite.asExternal}

		services: {
			db: {
				image: "docker.io/library/postgres:\(_netbox.dbVersion)"
				environment: {
					POSTGRES_USER:     S.name
					POSTGRES_DB:       S.name
					POSTGRES_PASSWORD: "${\(_scr.DB_PASSWORD._ID):?err}"
				}
				expose: [_netbox.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/postgresql"]
				networks: ["default"]
				healthcheck: snip.services.healthcheck.pgIsReady & {#user: S.name}
			}
			// Task queue; persisted (appendonly) so queued jobs survive restarts.
			redis: {
				image: "docker.io/valkey/valkey:\(_netbox.valkeyVersion)"
				command: ["valkey-server", "--appendonly", "yes"]
				expose: [_netbox.cachePort]
				volumes: ["\(S.volumes.redis_data._ID):/data"]
				networks: ["default"]
				healthcheck: D._valkeyHealthcheck
			}
			// Cache only; safe to lose.
			"redis-cache": {
				image: "docker.io/valkey/valkey:\(_netbox.valkeyVersion)"
				expose: [_netbox.cachePort]
				volumes: ["\(S.volumes.redis_cache_data._ID):/data"]
				networks: ["default"]
				healthcheck: D._valkeyHealthcheck
			}
			app: {
				image: "docker.io/netboxcommunity/netbox:\(_netbox.version)"
				user:  "netbox:root"
				depends_on: {
					db: condition:            "service_healthy"
					redis: condition:         "service_healthy"
					"redis-cache": condition: "service_healthy"
				}
				environment: D._env
				expose: [_netbox.port]
				volumes: D._appVolumes
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				healthcheck: {
					test: ["CMD", "/opt/netbox/health.sh"]
					interval:     "15s"
					timeout:      "3s"
					start_period: "90s"
				}
			}
			worker: {
				image: "docker.io/netboxcommunity/netbox:\(_netbox.version)"
				user:  "netbox:root"
				command: ["/opt/netbox/venv/bin/python", "/opt/netbox/netbox/manage.py", "rqworker"]
				depends_on: app: condition: "service_healthy"
				environment: D._env
				volumes:     D._appVolumes
				networks: ["default"]
				healthcheck: {
					test: ["CMD-SHELL", "ps -aux | grep -v grep | grep -q rqworker || exit 1"]
					interval:     "15s"
					timeout:      "3s"
					start_period: "20s"
				}
			}
		}
	}
}
