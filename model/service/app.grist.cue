package service

import inv "github.com/bkenks/infra/model/inventory"

_grist: {
	version:      "1.7"
	dbVersion:    "16"
	cacheVersion: "8"
}

grist: S={
	services: {
		app: Svc={
			_port: 8484
			image: "docker.io/gristlabs/grist:\(_grist.version)"
			depends_on: {
				cache: condition: "service_healthy"
				db: condition:    "service_healthy"
			}
			environment: {
				REDIS_URL:            "redis://\(S.services.cache._ref):\(S.services.cache._port)"
				APP_HOME_URL:         "https://grist.\(inv.domain.public.ktbcloud_com)"
				GRIST_SESSION_SECRET: "${GRIST_SESSION_SECRET:?err}"
				GRIST_DEFAULT_EMAIL:  "${GRIST_DEFAULT_EMAIL:?err}"
				GRIST_FORCE_LOGIN:    "true"
				GRIST_SERVER_EDITION: "full"
				TYPEORM_TYPE:         "postgres"
				TYPEORM_HOST:         S.services.db._ref
				TYPEORM_PORT:         "\(S.services.db._port)"
				TYPEORM_DATABASE:     S.name
				TYPEORM_USERNAME:     S.name
				TYPEORM_PASSWORD:     "${POSTGRES_PASSWORD:?err}"
			}
			expose: [Svc._port]
			volumes: ["\(S.volumes.app_data._ref):/persist"]
			networks: [S.networks.default._ref, S.networks.newt_gw_001._ref]
			healthcheck: {
				test: [
					"CMD",
					"node",
					"-e",
					"fetch('http://localhost:\(Svc._port)/status').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))",
				]
				interval:     "30s"
				timeout:      "10s"
				retries:      5
				start_period: "30s"
			}
		}
		cache: Svc={
			_port:   6379
			image:   "docker.io/library/redis:\(_grist.cacheVersion)"
			restart: "on-failure:5"
			expose: [Svc._port]
			volumes: ["\(S.volumes.cache_data._ref):/data"]
			healthcheck: #Snippet.services.healthcheck.redisPing
		}
		db: Svc={
			_port:   5432
			image:   "docker.io/library/postgres:\(_grist.dbVersion)"
			restart: "on-failure:5"
			environment: {
				POSTGRES_USER:     S.name
				POSTGRES_DB:       S.name
				POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
			}
			expose: [Svc._port]
			volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql/data"]
			networks: [S.networks.default._ref, S.networks.tailscale_gw_001._ref]
			healthcheck: #Snippet.services.healthcheck.pgIsReady & {#user: S.name}
		}
	}
	volumes: {for svcVol in ["app_data", "cache_data", "db_data"] {
		(svcVol): name: "grist-\(svcVol)"
	}}
	networks: {
		newt_gw_001:      #Network.newt_gw_001
		tailscale_gw_001: #Network.tailscale_gw_001
	}
}
