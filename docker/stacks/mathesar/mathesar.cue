package stack

import "github.com/bkenks/infra/store"

_mathesar: {
	version: "latest"
	dbImage: "docker.io/pgautoupgrade/pgautoupgrade:17-bookworm"
	port:    8000
	dbPort:  5432
	dbUser:  stack.name
	dbName:  "mathesar_django"
	dbEnv: {
		POSTGRES_DB:       dbName
		POSTGRES_USER:     dbUser
		POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
		POSTGRES_HOST:     "db"
		POSTGRES_PORT:     "\(dbPort)"
	}
}

stack: {
	name: "mathesar"
	services: {
		app: {
			image: "docker.io/mathesar/mathesar:\(_mathesar.version)"
			depends_on: db: condition: "service_healthy"
			environment: _mathesar.dbEnv & {
				DJANGO_SETTINGS_MODULE: "config.settings.production"
				SECRET_KEY:             "${SECRET_KEY:?err}"
				ALLOWED_HOSTS:          "*"
				DEBUG:                  "false"
				WEB_CONCURRENCY:        "3"
			}
			expose: [_mathesar.port]
			volumes: ["\(stack.volumes.app_media._ref):/code/.media"]
			networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
			healthcheck: {
				test: ["CMD", "curl", "-f", "http://localhost:\(_mathesar.port)/healthz/ready/"]
				interval:     "10s"
				timeout:      "5s"
				retries:      30
				start_period: "5s"
			}
		}
		db: {
			image:       _mathesar.dbImage
			environment: _mathesar.dbEnv
			expose: [_mathesar.dbPort]
			volumes: ["\(stack.volumes.db_data._ref):/var/lib/postgresql/data"]
			healthcheck: _health.pgIsReady & {_user: _mathesar.dbUser}
		}
	}
	volumes: {for svcVol in ["app_media", "db_data"] {
		(svcVol): name: "mathesar-\(svcVol)"
	}}
	networks: newt_gw_001: store.shared.newt_gw_001
}
