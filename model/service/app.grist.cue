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
		session_secret:   "GRIST_SESSION_SECRET"
		default_email:    "GRIST_DEFAULT_EMAIL"
		db_pass:          "POSTGRES_PASSWORD"
		oidcClientID:     "GRIST_OIDC_IDP_CLIENT_ID"
		oidcClientSecret: "GRIST_OIDC_IDP_CLIENT_SECRET"
	}
	opItem: "grist"
}

grist: {
	_pocket_id_oidc: {
		fnox: {
			(_grist.secrets.oidcClientID): value:     "\(_grist.opItem)/OIDC_CLIENT_ID"
			(_grist.secrets.oidcClientSecret): value: "\(_grist.opItem)/OIDC_CLIENT_SECRET"
		}
		environment: {
			GRIST_OIDC_IDP_ISSUER:             "https://id.\(common.domain.ktbcloud_dotcom)"
			(_grist.secrets.oidcClientID):     "${\(_grist.secrets.oidcClientID):?err}"
			(_grist.secrets.oidcClientSecret): "${\(_grist.secrets.oidcClientSecret):?err}"
			GRIST_OIDC_IDP_SCOPES:             "openid email profile groups"
		}
	}

	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_grist.secrets.session_secret): value: "\(_grist.opItem)/SESSION_SECRET"
			(_grist.secrets.default_email): value:  "\(_grist.opItem)/DEFAULT_EMAIL"
			(_grist.secrets.db_pass): value:        "\(_grist.opItem)/POSTGRES_PASSWORD"
			_pocket_id_oidc.fnox
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
			#Networks.pangolinSite.asExternal
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
					_pocket_id_oidc.environment
				}
				expose: [_grist.port]
				volumes: ["\(S.volumes.app_data._ref):/persist"]
				networks: ["default", #Networks.pangolinSite.name]
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
