package service

import "github.com/bkenks/infra/model/common"

_grist: {
	port:         8484
	cachePort:    6379
	dbPort:       5432
	version:      "1.7"
	dbVersion:    "16"
	cacheVersion: "8"
}

grist: S={
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
				APP_HOME_URL:         "https://grist.\(common.domain.ktbcloud_dotcom)"
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
			volumes: ["\(S.volumes.app_data.name):/persist"]
			networks: ["default", S.networks.newt_gw_001.name]
			healthcheck: {
				test: [
					"CMD",
					"node",
					"-e",
					"fetch('http://localhost:\(_grist.port)/status').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))",
				]
				interval:     "30s"
				timeout:      "10s"
				retries:      5
				start_period: "30s"
			}
		}
		cache: {
			image: "docker.io/library/redis:\(_grist.cacheVersion)"

			expose: [_grist.cachePort]
			volumes: ["\(S.volumes.cache_data.name):/data"]
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
			volumes: ["\(S.volumes.db_data.name):/var/lib/postgresql/data"]
			networks: ["default"]
			healthcheck: #Snippet.services.healthcheck.pgIsReady & {#user: S.name}
		}
	}
}
