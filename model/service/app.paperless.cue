package service

import "github.com/bkenks/infra/model/common"

_paperless: {
	host:             "paper.\(common.domain.ktbinternal_dotcom)"
	cachePort:        6379
	dbPort:           5432
	converterPort:    3000
	parserPort:       9998
	port:             8000
	cacheVersion:     "8"
	dbVersion:        "18"
	converterVersion: "8.25"
	parserVersion:    "latest"
	version:          "latest"
	bindDir:          "\(common.directory.server.docker_bindmounts)/apps/paperless"
	secrets: {
		db_pass:    "PAPERLESS_DBPASS"
		secret_key: "PAPERLESS_SECRET_KEY"
		pg_pass:    "POSTGRES_PASSWORD"
	}
}

paperless: {
	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_paperless.secrets.db_pass): value:    "paperless/PAPERLESS_DBPASS"
			(_paperless.secrets.secret_key): value: "paperless/PAPERLESS_SECRET_KEY"
			(_paperless.secrets.pg_pass): value:    "paperless/POSTGRES_PASSWORD"
		}
	}

	compose: S={
		name: "paperless"
		volumes: {for svcVol in ["cache_data", "db_data", "app_data", "app_media"] {
			(svcVol): name: "paperless-\(svcVol)"
		}}
		networks: {
			newt_gw_001: #Network.newt_gw_001
		}
		services: {
			cache: {
				image: "docker.io/library/redis:\(_paperless.cacheVersion)"
				environment: ALLOW_EMPTY_PASSWORD: "yes"
				expose: [_paperless.cachePort]
				volumes: ["\(S.volumes.cache_data._ref):/data"]
				healthcheck: #Snippet.services.healthcheck.redisPing
			}
			db: {
				image: "docker.io/library/postgres:\(_paperless.dbVersion)"
				environment: {
					POSTGRES_USER:     S.name
					POSTGRES_DB:       S.name
					POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
				}
				expose: [_paperless.dbPort]
				volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql"]
				networks: ["default"]
				healthcheck: #Snippet.services.healthcheck.pgIsReady & {#user: S.name}
			}
			converter: {
				image: "docker.io/gotenberg/gotenberg:\(_paperless.converterVersion)"
				command: [
					"gotenberg",
					"--chromium-disable-javascript=true",
					"--chromium-allow-list=file:///tmp/.*",
				]
				expose: [_paperless.converterPort]
			}
			parser: {
				image: "docker.io/apache/tika:\(_paperless.parserVersion)"
				expose: [_paperless.parserPort]
			}
			app: {
				image: "ghcr.io/paperless-ngx/paperless-ngx:\(_paperless.version)"
				depends_on: {
					cache: condition:     "service_healthy"
					db: condition:        "service_healthy"
					converter: condition: "service_started"
					parser: condition:    "service_started"
				}
				environment: {
					PAPERLESS_TIKA_ENABLED:            "1"
					PAPERLESS_OCR_LANGUAGE:            "eng"
					PAPERLESS_URL:                     "https://\(_paperless.host)"
					PAPERLESS_TIME_ZONE:               "America/New_York"
					PAPERLESS_DATE_ORDER:              "MDY"
					PAPERLESS_REDIS:                   "redis://\(S.services.cache.container_name):\(_paperless.cachePort)"
					PAPERLESS_TIKA_GOTENBERG_ENDPOINT: "http://\(S.services.converter.container_name):\(_paperless.converterPort)"
					PAPERLESS_TIKA_ENDPOINT:           "http://\(S.services.parser.container_name):\(_paperless.parserPort)"
					PAPERLESS_DBHOST:                  S.services.db.container_name
					PAPERLESS_DBUSER:                  S.name
					PAPERLESS_DBNAME:                  S.name
					PAPERLESS_DBPASS:                  "${PAPERLESS_DBPASS:?err}"
					PAPERLESS_SECRET_KEY:              "${PAPERLESS_SECRET_KEY:?err}"
				}
				expose: [_paperless.port]
				volumes: [
					"\(S.volumes.app_data._ref):/usr/src/paperless/data",
					"\(S.volumes.app_media._ref):/usr/src/paperless/media",
					"\(_paperless.bindDir)/export:/usr/src/paperless/export",
					"\(_paperless.bindDir)/consume:/usr/src/paperless/consume",
				]
				networks: ["default", S.networks.newt_gw_001._ref]
				healthcheck: #Snippet.services.healthcheck.httpGet & {#port: _paperless.port}
			}
		}
	}
}
