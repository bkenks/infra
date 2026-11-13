package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_grist: {
	host:         "grist.\(ext.domains.ktbCloud)"
	port:         8484
	cachePort:    6379
	dbPort:       5432
	version:      "1.7"
	dbVersion:    "16"
	cacheVersion: "8"
	opItem:       "grist"
}

grist: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:                       D.fnox.providers.onepassword._ID
			GRIST_SESSION_SECRET: value:         "\(_grist.opItem)/SESSION_SECRET"
			GRIST_DEFAULT_EMAIL: value:          "\(_grist.opItem)/DEFAULT_EMAIL"
			POSTGRES_PASSWORD: value:            "\(_grist.opItem)/POSTGRES_PASSWORD"
			GRIST_OIDC_IDP_CLIENT_ID: value:     "\(_grist.opItem)/OIDC_CLIENT_ID"
			GRIST_OIDC_IDP_CLIENT_SECRET: value: "\(_grist.opItem)/OIDC_CLIENT_SECRET"
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
			ext.dockerNetworks.pangolinSite.asExternal
		}

		services: {
			app: {
				image: "docker.io/gristlabs/grist:\(_grist.version)"
				depends_on: {
					cache: condition: "service_healthy"
					db: condition:    "service_healthy"
				}
				environment: {
					REDIS_URL:             "redis://\(S.services.cache.container_name):\(_grist.cachePort)"
					APP_HOME_URL:          "https://\(_grist.host)"
					GRIST_FORCE_LOGIN:     "true"
					GRIST_SERVER_EDITION:  "full"
					TYPEORM_TYPE:          "postgres"
					TYPEORM_HOST:          S.services.db.container_name
					TYPEORM_PORT:          "\(_grist.dbPort)"
					TYPEORM_DATABASE:      S.name
					TYPEORM_USERNAME:      S.name
					TYPEORM_PASSWORD:      "${\(_scr.POSTGRES_PASSWORD._ID):?err}"
					GRIST_OIDC_IDP_ISSUER: "https://id.\(ext.domains.ktbCloud)"
					GRIST_OIDC_IDP_SCOPES: "openid email profile groups"

					(_scr.GRIST_SESSION_SECRET._ID):         "${\(_scr.GRIST_SESSION_SECRET._ID):?err}"
					(_scr.GRIST_DEFAULT_EMAIL._ID):          "${\(_scr.GRIST_DEFAULT_EMAIL._ID):?err}"
					(_scr.GRIST_OIDC_IDP_CLIENT_ID._ID):     "${\(_scr.GRIST_OIDC_IDP_CLIENT_ID._ID):?err}"
					(_scr.GRIST_OIDC_IDP_CLIENT_SECRET._ID): "${\(_scr.GRIST_OIDC_IDP_CLIENT_SECRET._ID):?err}"
				}
				expose: [_grist.port]
				volumes: ["\(S.volumes.app_data._ID):/persist"]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				healthcheck: snip.services.healthcheck.nodeFetch & {#port: _grist.port, #path: "/status"}
			}
			cache: {
				image: "docker.io/library/redis:\(_grist.cacheVersion)"

				expose: [_grist.cachePort]
				volumes: ["\(S.volumes.cache_data._ID):/data"]
				healthcheck: snip.services.healthcheck.redisPing
			}
			db: {
				image: "docker.io/library/postgres:\(_grist.dbVersion)"

				environment: {
					POSTGRES_USER:                S.name
					POSTGRES_DB:                  S.name
					(_scr.POSTGRES_PASSWORD._ID): "${\(_scr.POSTGRES_PASSWORD._ID):?err}"
				}
				expose: [_grist.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/postgresql/data"]
				networks: ["default"]
				healthcheck: snip.services.healthcheck.pgIsReady & {#user: S.name}
			}
		}
	}
}
