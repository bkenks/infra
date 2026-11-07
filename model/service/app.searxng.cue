package service

import "github.com/bkenks/infra/model/common"

_searxng: {
	host:         "search.\(common.domain.ktbinternal_dotcom)"
	port:         8080
	cachePort:    6379
	version:      "2026.11.6-ac11e14c5"
	cacheVersion: "9-alpine"
	secrets: {
		secret_key: "SEARXNG_SECRET"
	}
	opItem: "searxng"
}

searxng: {
	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_searxng.secrets.secret_key): value: "\(_searxng.opItem)/SECRET_KEY"
		}
	}

	compose: S={
		name: "searxng"

		volumes: {
			for svcVol in ["app_config", "app_data", "cache_data"] {
				(svcVol): name: "searxng-\(svcVol)"
			}
		}

		networks: {
			#Networks.pangolinSite.asExternal
		}

		services: {
			app: {
				image: "docker.io/searxng/searxng:\(_searxng.version)"
				depends_on: cache: condition: "service_healthy"
				environment: {
					SEARXNG_BASE_URL:   "https://\(_searxng.host)/"
					SEARXNG_SECRET:     "${\(_searxng.secrets.secret_key):?err}"
					SEARXNG_VALKEY_URL: "valkey://\(S.services.cache.container_name):\(_searxng.cachePort)/0"
					SEARXNG_LIMITER:    "false"
				}
				expose: [_searxng.port]
				volumes: [
					// Entrypoint seeds settings.yml here on first start.
					"\(S.volumes.app_config._ref):/etc/searxng",
					"\(S.volumes.app_data._ref):/var/cache/searxng",
				]
				networks: ["default", #Networks.pangolinSite.name]
				// Image ships no curl; use the app's venv Python.
				healthcheck: {
					test: [
						"CMD",
						"/usr/local/searxng/.venv/bin/python",
						"-c",
						"import urllib.request; urllib.request.urlopen('http://localhost:\(_searxng.port)/healthz')",
					]
					interval:     "30s"
					timeout:      "10s"
					retries:      5
					start_period: "30s"
				}
			}
			cache: {
				image: "docker.io/valkey/valkey:\(_searxng.cacheVersion)"
				command: ["valkey-server", "--save", "300", "1", "--save", "60", "1000", "--loglevel", "warning"]
				expose: [_searxng.cachePort]
				volumes: ["\(S.volumes.cache_data._ref):/data"]
				healthcheck: {
					test: ["CMD", "valkey-cli", "ping"]
					interval: "10s"
					timeout:  "5s"
					retries:  5
				}
			}
		}
	}
}
