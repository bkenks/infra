package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_paperless: {
	host:             "paper.\(ext.domains.ktbInternal)"
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
	bindDir:          "\(ext.dirs.host.dockerBindMounts)/apps/paperless"
}

paperless: D={
	deploy: {
		manager: "komodo"
		targets: ["bill", "littlebuddy"]
	}

	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:               D.fnox.providers.onepassword._ID
			PAPERLESS_DBPASS: value:     "paperless/PAPERLESS_DBPASS"
			PAPERLESS_SECRET_KEY: value: "paperless/PAPERLESS_SECRET_KEY"
			POSTGRES_PASSWORD: value:    "paperless/POSTGRES_PASSWORD"
		}
	}

	compose: S={
		name: "paperless"
		volumes: {for svcVol in ["cache_data", "db_data", "app_data", "app_media"] {
			(svcVol): name: "paperless-\(svcVol)"
		}}
		networks: {
			ext.dockerNetworks.pangolinSite.asExternal
		}
		services: {
			cache: {
				image: "docker.io/library/redis:\(_paperless.cacheVersion)"
				environment: ALLOW_EMPTY_PASSWORD: "yes"
				expose: [_paperless.cachePort]
				volumes: ["\(S.volumes.cache_data._ID):/data"]
				healthcheck: snip.services.healthcheck.redisPing
			}
			db: {
				image: "docker.io/library/postgres:\(_paperless.dbVersion)"
				environment: {
					POSTGRES_USER:                S.name
					POSTGRES_DB:                  S.name
					(_scr.POSTGRES_PASSWORD._ID): "${\(_scr.POSTGRES_PASSWORD._ID):?err}"
				}
				expose: [_paperless.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/postgresql"]
				networks: ["default"]
				healthcheck: snip.services.healthcheck.pgIsReady & {#user: S.name}
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
					(_scr.PAPERLESS_DBPASS._ID):       "${\(_scr.PAPERLESS_DBPASS._ID):?err}"
					(_scr.PAPERLESS_SECRET_KEY._ID):   "${\(_scr.PAPERLESS_SECRET_KEY._ID):?err}"
				}
				expose: [_paperless.port]
				volumes: [
					"\(S.volumes.app_data._ID):/usr/src/paperless/data",
					"\(S.volumes.app_media._ID):/usr/src/paperless/media",
					"\(_paperless.bindDir)/export:/usr/src/paperless/export",
					"\(_paperless.bindDir)/consume:/usr/src/paperless/consume",
				]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				healthcheck: snip.services.healthcheck.httpGet & {#port: _paperless.port}
			}
		}
	}
}
