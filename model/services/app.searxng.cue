package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_searxng: {
	host:         "search.\(ext.domains.ktbInternal)"
	port:         8080
	cachePort:    6379
	version:      "2026.11.6-ac11e14c5"
	cacheVersion: "9-alpine"
	opItem:       "searxng"
}

searxng: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:         D.fnox.providers.onepassword._ID
			SEARXNG_SECRET: value: "\(_searxng.opItem)/SECRET_KEY"
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
			ext.dockerNetworks.pangolinSite.asExternal
		}

		services: {
			app: {
				image: "docker.io/searxng/searxng:\(_searxng.version)"
				depends_on: cache: condition: "service_healthy"
				environment: {
					SEARXNG_BASE_URL:          "https://\(_searxng.host)/"
					(_scr.SEARXNG_SECRET._ID): "${\(_scr.SEARXNG_SECRET._ID):?err}"
					SEARXNG_VALKEY_URL:        "valkey://\(S.services.cache.container_name):\(_searxng.cachePort)/0"
					SEARXNG_LIMITER:           "false"
					SEARXNG_SEARCH_FORMATS:    "html,json"
				}
				expose: [_searxng.port]
				volumes: [
					// Entrypoint seeds settings.yml here on first start.
					"\(S.volumes.app_config._ID):/etc/searxng",
					"\(S.volumes.app_data._ID):/var/cache/searxng",
				]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
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
				volumes: ["\(S.volumes.cache_data._ID):/data"]
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
