package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_activepieces: {
	host:      "activepieces.\(ext.domains.ktbCloud)"
	port:      80
	cachePort: 6379
	dbPort:    5432
	version:   "0.93.0"
	dbVersion: "0.8.0-pg14"
}

activepieces: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	notes: "Automation/workflow builder (n8n alternative). Webhooks and app triggers need AP_FRONTEND_URL (https://\(_activepieces.host)) reachable by third parties."

	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:                 D.fnox.providers.onepassword._ID
			AP_ENCRYPTION_KEY: value:      "activepieces/AP_ENCRYPTION_KEY"
			AP_JWT_SECRET: value:          "activepieces/AP_JWT_SECRET"
			AP_POSTGRES_PASSWORD: value:   "activepieces/AP_POSTGRES_PASSWORD"
		}
	}

	// Environment shared by the app and worker containers.
	_env: {
		AP_FRONTEND_URL:        "https://\(_activepieces.host)"
		AP_POSTGRES_HOST:       D.compose.services.db.container_name
		AP_POSTGRES_PORT:       "\(_activepieces.dbPort)"
		AP_POSTGRES_DATABASE:   D.compose.name
		AP_POSTGRES_USERNAME:   D.compose.name
		AP_REDIS_HOST:          D.compose.services.cache.container_name
		AP_REDIS_PORT:          "\(_activepieces.cachePort)"
		(_scr.AP_ENCRYPTION_KEY._ID):    "${\(_scr.AP_ENCRYPTION_KEY._ID):?err}"
		(_scr.AP_JWT_SECRET._ID):        "${\(_scr.AP_JWT_SECRET._ID):?err}"
		(_scr.AP_POSTGRES_PASSWORD._ID): "${\(_scr.AP_POSTGRES_PASSWORD._ID):?err}"
	}

	compose: S={
		name: "activepieces"
		volumes: {for svcVol in ["app_cache", "db_data", "cache_data"] {
			(svcVol): name: "activepieces-\(svcVol)"
		}}
		networks: {ext.dockerNetworks.pangolinSite.asExternal}

		services: {
			cache: {
				image: "docker.io/library/redis:7.0.7"
				expose: [_activepieces.cachePort]
				volumes: ["\(S.volumes.cache_data._ID):/data"]
				networks: ["default"]
				healthcheck: snip.services.healthcheck.redisPing
			}
			db: {
				// pgvector is required by Activepieces; plain postgres is not supported.
				image: "docker.io/pgvector/pgvector:\(_activepieces.dbVersion)"
				environment: {
					POSTGRES_USER:                S.name
					POSTGRES_DB:                  S.name
					(_scr.AP_POSTGRES_PASSWORD._ID): "${\(_scr.AP_POSTGRES_PASSWORD._ID):?err}"
				}
				expose: [_activepieces.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/postgresql"]
				networks: ["default"]
				healthcheck: snip.services.healthcheck.pgIsReady & {#user: S.name}
			}
			app: {
				image: "ghcr.io/activepieces/activepieces:\(_activepieces.version)"
				depends_on: {
					db: condition:    "service_healthy"
					cache: condition: "service_healthy"
				}
				environment: D._env & {
					AP_CONTAINER_TYPE: "APP"
				}
				expose: [_activepieces.port]
				volumes: ["\(S.volumes.app_cache._ID):/usr/src/app/cache"]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				healthcheck: snip.services.healthcheck.nodeFetch & {#port: _activepieces.port, #path: "/api/v1/health"}
			}
			worker: {
				image: "ghcr.io/activepieces/activepieces:\(_activepieces.version)"
				depends_on: {
					db: condition:    "service_healthy"
					cache: condition: "service_healthy"
					app: condition:   "service_started"
				}
				environment: D._env & {
					AP_CONTAINER_TYPE: "WORKER"
				}
				volumes: ["\(S.volumes.app_cache._ID):/usr/src/app/cache"]
				networks: ["default"]
			}
		}
	}
}
