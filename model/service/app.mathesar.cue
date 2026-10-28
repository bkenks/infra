package service

_mathesar: {
	version: "latest"
	dbImage: "docker.io/pgautoupgrade/pgautoupgrade:17-bookworm"
}

mathesar: S={
	_dbEnv: {
		POSTGRES_DB:       "mathesar_django"
		POSTGRES_USER:     S.name
		POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
		POSTGRES_HOST:     S.services.db._ref
		POSTGRES_PORT:     "\(S.services.db._port)"
	}
	services: {
		app: Svc={
			_port: 8000
			image: "docker.io/mathesar/mathesar:\(_mathesar.version)"
			depends_on: db: condition: "service_healthy"
			environment: S._dbEnv & {
				DJANGO_SETTINGS_MODULE: "config.settings.production"
				SECRET_KEY:             "${SECRET_KEY:?err}"
				ALLOWED_HOSTS:          "*"
				DEBUG:                  "false"
				WEB_CONCURRENCY:        "3"
			}
			expose: [Svc._port]
			volumes: ["\(S.volumes.app_media._ref):/code/.media"]
			networks: [S.networks.default._ref, S.networks.newt_gw_001._ref]
			healthcheck: {
				test: ["CMD", "curl", "-f", "http://localhost:\(Svc._port)/healthz/ready/"]
				interval:     "10s"
				timeout:      "5s"
				retries:      30
				start_period: "5s"
			}
		}
		db: Svc={
			_port:       5432
			image:       _mathesar.dbImage
			environment: S._dbEnv
			expose: [Svc._port]
			volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql/data"]
			healthcheck: #Snippet.services.healthcheck.pgIsReady & {#user: S.name}
		}
	}
	volumes: {for svcVol in ["app_media", "db_data"] {
		(svcVol): name: "mathesar-\(svcVol)"
	}}
	networks: newt_gw_001: #Network.newt_gw_001
}
