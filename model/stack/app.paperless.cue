package model

_paperless: {
	cacheVersion:     "8"
	dbVersion:        "18"
	converterVersion: "8.25"
	parserVersion:    "latest"
	version:          "latest"
	bindDir:          "\(#Dir.docker.bindMounts)/apps/paperless"
}

stacks: paperless: S={
	services: {
		cache: Svc={
			_port:   6379
			image:   "docker.io/library/redis:\(_paperless.cacheVersion)"
			restart: "on-failure:5"
			environment: ALLOW_EMPTY_PASSWORD: "yes"
			expose: [Svc._port]
			volumes: ["\(S.volumes.cache_data._self):/data"]
			healthcheck: #Health.redisPing
		}
		db: Svc={
			_port:   5432
			image:   "docker.io/library/postgres:\(_paperless.dbVersion)"
			restart: "on-failure:5"
			environment: {
				POSTGRES_USER:     S.name
				POSTGRES_DB:       S.name
				POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
			}
			expose: [Svc._port]
			volumes: ["\(S.volumes.db_data._self):/var/lib/postgresql"]
			networks: [S.networks.default._self, S.networks.tailscale_gw_001._self]
			healthcheck: #Health.pgIsReady & {#user: S.name}
		}
		converter: Svc={
			_port:   3000
			image:   "docker.io/gotenberg/gotenberg:\(_paperless.converterVersion)"
			restart: "on-failure:5"
			command: [
				"gotenberg",
				"--chromium-disable-javascript=true",
				"--chromium-allow-list=file:///tmp/.*",
			]
			expose: [Svc._port]
		}
		parser: Svc={
			_port:   9998
			image:   "docker.io/apache/tika:\(_paperless.parserVersion)"
			restart: "on-failure:5"
			expose: [Svc._port]
		}
		app: Svc={
			_port:   8000
			image:   "ghcr.io/paperless-ngx/paperless-ngx:\(_paperless.version)"
			restart: "on-failure:5"
			depends_on: {
				cache: condition:     "service_healthy"
				db: condition:        "service_healthy"
				converter: condition: "service_started"
				parser: condition:    "service_started"
			}
			environment: {
				PAPERLESS_TIKA_ENABLED:            "1"
				PAPERLESS_OCR_LANGUAGE:            "eng"
				PAPERLESS_URL:                     "https://paper.\(#Domain.ktbinternalCom)"
				PAPERLESS_TIME_ZONE:               "America/New_York"
				PAPERLESS_DATE_ORDER:              "MDY"
				PAPERLESS_REDIS:                   "redis://\(S.services.cache._self):\(S.services.cache._port)"
				PAPERLESS_TIKA_GOTENBERG_ENDPOINT: "http://\(S.services.converter._self):\(S.services.converter._port)"
				PAPERLESS_TIKA_ENDPOINT:           "http://\(S.services.parser._self):\(S.services.parser._port)"
				PAPERLESS_DBHOST:                  S.services.db._self
				PAPERLESS_DBUSER:                  S.name
				PAPERLESS_DBNAME:                  S.name
				PAPERLESS_DBPASS:                  "${PAPERLESS_DBPASS:?err}"
				PAPERLESS_SECRET_KEY:              "${PAPERLESS_SECRET_KEY:?err}"
			}
			expose: [Svc._port]
			volumes: [
				"\(S.volumes.app_data._self):/usr/src/paperless/data",
				"\(S.volumes.app_media._self):/usr/src/paperless/media",
				"\(_paperless.bindDir)/export:/usr/src/paperless/export",
				"\(_paperless.bindDir)/consume:/usr/src/paperless/consume",
			]
			networks: [S.networks.default._self, S.networks.newt_gw_001._self]
			healthcheck: {
				test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:\(Svc._port)"]
				interval: "30s"
				timeout:  "10s"
				retries:  5
			}
		}
	}
	volumes: {for svcVol in ["cache_data", "db_data", "app_data", "app_media"] {
		(svcVol): name: "paperless-\(svcVol)"
	}}
	networks: {
		#SharedNetworks.newt_gw_001
		#SharedNetworks.tailscale_gw_001
	}
}
