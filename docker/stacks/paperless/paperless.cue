package stack

import "github.com/bkenks/infra/store"

_paperless: {
	cacheVersion:     "8"
	dbVersion:        "18"
	converterVersion: "8.25"
	parserVersion:    "latest"
	version:          "latest"
	webPort:          8000
	dbUser:           stack.name
	dbName:           stack.name
	bindDir:          "\(store.paths.docker_bind_mounts)/apps/paperless"
}

stack: {
	name: "paperless"
	services: {
		cache: {
			image:   "docker.io/library/redis:\(_paperless.cacheVersion)"
			restart: "on-failure:5"
			environment: ALLOW_EMPTY_PASSWORD: "yes"
			expose: [6379]
			volumes: ["\(stack.volumes.cache_data._ref):/data"]
			healthcheck: _health.redisPing
		}
		db: {
			image:   "docker.io/library/postgres:\(_paperless.dbVersion)"
			restart: "on-failure:5"
			environment: {
				POSTGRES_USER:     _paperless.dbUser
				POSTGRES_DB:       _paperless.dbName
				POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
			}
			expose: [5432]
			volumes: ["\(stack.volumes.db_data._ref):/var/lib/postgresql"]
			networks: [stack.networks.default._ref, stack.networks.tailscale_gw_001._ref]
			healthcheck: _health.pgIsReady & {_user: _paperless.dbUser}
		}
		converter: {
			image:   "docker.io/gotenberg/gotenberg:\(_paperless.converterVersion)"
			restart: "on-failure:5"
			command: [
				"gotenberg",
				"--chromium-disable-javascript=true",
				"--chromium-allow-list=file:///tmp/.*",
			]
			expose: [3000]
		}
		parser: {
			image:   "docker.io/apache/tika:\(_paperless.parserVersion)"
			restart: "on-failure:5"
			expose: [9998]
		}
		app: {
			image:   "ghcr.io/paperless-ngx/paperless-ngx:\(_paperless.version)"
			restart: "on-failure:5"
			depends_on: {
				cache: condition:     "service_healthy"
				db: condition:        "service_healthy"
				converter: condition: "service_started"
				parser: condition:    "service_started"
			}
			environment: {
				PAPERLESS_TIKA_ENABLED:            "1"
				PAPERLESS_OCR_LANGUAGE:            "eng"
				PAPERLESS_URL:                     "https://paper.\(_domain.ktbinternal)"
				PAPERLESS_TIME_ZONE:               "America/New_York"
				PAPERLESS_DATE_ORDER:              "MDY"
				PAPERLESS_REDIS:                   "redis://cache:6379"
				PAPERLESS_TIKA_GOTENBERG_ENDPOINT: "http://converter:3000"
				PAPERLESS_TIKA_ENDPOINT:           "http://parser:9998"
				PAPERLESS_DBHOST:                  "db"
				PAPERLESS_DBUSER:                  _paperless.dbUser
				PAPERLESS_DBNAME:                  _paperless.dbName
				PAPERLESS_DBPASS:                  "${PAPERLESS_DBPASS:?err}"
				PAPERLESS_SECRET_KEY:              "${PAPERLESS_SECRET_KEY:?err}"
			}
			expose: [_paperless.webPort]
			volumes: [
				"\(stack.volumes.app_data._ref):/usr/src/paperless/data",
				"\(stack.volumes.app_media._ref):/usr/src/paperless/media",
				"\(_paperless.bindDir)/export:/usr/src/paperless/export",
				"\(_paperless.bindDir)/consume:/usr/src/paperless/consume",
			]
			networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
			healthcheck: {
				test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:\(_paperless.webPort)"]
				interval: "30s"
				timeout:  "10s"
				retries:  5
			}
		}
	}
	volumes: {for svcVol in ["cache_data", "db_data", "app_data", "app_media"] {
		(svcVol): name: "paperless-\(svcVol)"
	}}
	networks: {
		newt_gw_001:      store.shared.newt_gw_001
		tailscale_gw_001: store.shared.tailscale_gw_001
	}
}
