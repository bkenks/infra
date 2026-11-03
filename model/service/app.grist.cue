package service

import "github.com/bkenks/infra/model/common"

_grist: {
	host:         "grist.\(common.domain.ktbcloud_dotcom)"
	port:         8484
	cachePort:    6379
	dbPort:       5432
	version:      "1.7"
	dbVersion:    "16"
	cacheVersion: "8"
	secrets: {
		session_secret: "GRIST_SESSION_SECRET"
		default_email:  "GRIST_DEFAULT_EMAIL"
		db_pass:        "POSTGRES_PASSWORD"
	}
}

grist: {
	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_grist.secrets.session_secret): value: "grist/session_secret"
			(_grist.secrets.default_email): value:  "grist/default_email"
			(_grist.secrets.db_pass): value:        "grist/postgres_password"
		}
	}

	compose: S={
		name: "grist"

		volumes: {
			for svcVol in ["app_data", "cache_data", "db_data"] {
				(svcVol): name: "grist-\(svcVol)"
			}
		}

		networks: {
			newt_gw_001: #Network.newt_gw_001
		}

		services: {
			app: {
				image: "docker.io/gristlabs/grist:\(_grist.version)"
				depends_on: {
					cache: condition: "service_healthy"
					db: condition:    "service_healthy"
				}
				environment: {
					REDIS_URL:            "redis://\(S.services.cache.container_name):\(_grist.cachePort)"
					APP_HOME_URL:         "https://\(_grist.host)"
					GRIST_SESSION_SECRET: "${GRIST_SESSION_SECRET:?err}"
					GRIST_DEFAULT_EMAIL:  "${GRIST_DEFAULT_EMAIL:?err}"
					GRIST_FORCE_LOGIN:    "true"
					GRIST_SERVER_EDITION: "full"
					TYPEORM_TYPE:         "postgres"
					TYPEORM_HOST:         S.services.db.container_name
					TYPEORM_PORT:         "\(_grist.dbPort)"
					TYPEORM_DATABASE:     S.name
					TYPEORM_USERNAME:     S.name
					TYPEORM_PASSWORD:     "${POSTGRES_PASSWORD:?err}"
				}
				expose: [_grist.port]
				volumes: ["\(S.volumes.app_data._ref):/persist"]
				networks: ["default", S.networks.newt_gw_001._ref]
				healthcheck: #Snippet.services.healthcheck.nodeFetch & {#port: _grist.port, #path: "/status"}
			}
			cache: {
				image: "docker.io/library/redis:\(_grist.cacheVersion)"

				expose: [_grist.cachePort]
				volumes: ["\(S.volumes.cache_data._ref):/data"]
				healthcheck: #Snippet.services.healthcheck.redisPing
			}
			db: {
				image: "docker.io/library/postgres:\(_grist.dbVersion)"

				environment: {
					POSTGRES_USER:     S.name
					POSTGRES_DB:       S.name
					POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
				}
				expose: [_grist.dbPort]
				volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql/data"]
				networks: ["default"]
				healthcheck: #Snippet.services.healthcheck.pgIsReady & {#user: S.name}
			}
		}
	}
}
