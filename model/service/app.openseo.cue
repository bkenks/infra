package service

import (
	"github.com/bkenks/infra/model/externals"
)

_openseo: {
	port:    3001
	version: "0.1.13"
	host:    "seo.\(externals.domains.ktbinternal_dotcom)"
}

openseo: D={
	secrets: {
		DATAFORSEO_API_KEY: source: "openseo/DATAFORSEO_API_KEY"
		OPENROUTER_API_KEY: source: "openrouter/credential"
		BETTER_AUTH_SECRET: source: "openseo/BETTER_AUTH_SECRET"
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: S={
		name: "openseo"
		volumes: app_data: name: "openseo-app_data"
		networks: {externals.dockerNetworks.pangolinSite.asExternal}

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
				DATAFORSEO_API_KEY:         "${DATAFORSEO_API_KEY:?err}"
				OPENROUTER_API_KEY:         "${OPENROUTER_API_KEY:-}"
				OPENROUTER_MODEL:           "${OPENROUTER_MODEL:-}"
				BETTER_AUTH_SECRET:         "${BETTER_AUTH_SECRET:-}"
				CRAWLER_ACCESS_SECRET:      "${CRAWLER_ACCESS_SECRET:-}"
			}
			expose: [_openseo.port]
			volumes: ["\(S.volumes.app_data._ref):/app/.wrangler"]
			networks: [externals.dockerNetworks.pangolinSite.name]
			healthcheck: #Snippet.services.healthcheck.nodeFetch & {#port: _openseo.port, #path: "/api/health", retries: 3, start_period: "300s"}
		}
	}
}
