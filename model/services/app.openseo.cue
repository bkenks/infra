package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_openseo: {
	port:    3001
	version: "0.1.13"
	host:    "seo.\(ext.domains.ktbInternal)"
}

openseo: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:             D.fnox.providers.onepassword._ID
			DATAFORSEO_API_KEY: value: "openseo/DATAFORSEO_API_KEY"
			OPENROUTER_API_KEY: value: "openrouter/credential"
			BETTER_AUTH_SECRET: value: "openseo/BETTER_AUTH_SECRET"
		}
	}

	compose: S={
		name: "openseo"
		volumes: app_data: name: "openseo-app_data"
		networks: {ext.dockerNetworks.pangolinSite.asExternal}

		services: app: {
			image: "ghcr.io/every-app/open-seo:\(_openseo.version)"
			environment: {
				// Required so the cloudflare:workers bindings see Compose env vars.
				CLOUDFLARE_INCLUDE_PROCESS_ENV: "true"
				PORT:                           "\(_openseo.port)"
				ALLOWED_HOST:                   _openseo.host
				// Docker mode ships no app auth; the gateway in front supplies it.
				AUTH_MODE:                  "local_noauth"
				OPENSEO_TELEMETRY_DISABLED: "1"
				DO_NOT_TRACK:               "1"
				VITE_SHOW_DEVTOOLS:         "false"
				OPENROUTER_MODEL:           "${OPENROUTER_MODEL:-}"
				CRAWLER_ACCESS_SECRET:      "${CRAWLER_ACCESS_SECRET:-}"

				(_scr.DATAFORSEO_API_KEY._ID): "${\(_scr.DATAFORSEO_API_KEY._ID):?err}"
				(_scr.OPENROUTER_API_KEY._ID): "${\(_scr.OPENROUTER_API_KEY._ID):-}"
				(_scr.BETTER_AUTH_SECRET._ID): "${\(_scr.BETTER_AUTH_SECRET._ID):-}"
			}
			expose: [_openseo.port]
			volumes: ["\(S.volumes.app_data._ID):/app/.wrangler"]
			networks: [ext.dockerNetworks.pangolinSite.name]
			healthcheck: snip.services.healthcheck.nodeFetch & {#port: _openseo.port, #path: "/api/health", retries: 3, start_period: "300s"}
		}
	}
}
