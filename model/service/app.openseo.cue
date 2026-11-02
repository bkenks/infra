package service

import "github.com/bkenks/infra/model/common"

_openseo: {
	port:    3001
	version: "0.1.13"
	host:    "seo.\(common.domain.ktbinternal_dotcom)"
	secrets: {
		dataforseo_key: "DATAFORSEO_API_KEY"
		openrouter_key: "OPENROUTER_API_KEY"
		auth_secret:    "BETTER_AUTH_SECRET"
	}
}

openseo: {
	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_openseo.secrets.dataforseo_key): value: "openseo/DATAFORSEO_API_KEY"
			(_openseo.secrets.openrouter_key): value: "openrouter/credential"
			(_openseo.secrets.auth_secret): value:    "openseo/BETTER_AUTH_SECRET"
		}
	}

	compose: S={
		name: "openseo"
		volumes: app_data: name: "openseo-app_data"
		networks: newt_gw_001: #Network.newt_gw_001

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
			volumes: ["\(S.volumes.app_data.name):/app/.wrangler"]
			networks: [S.networks.newt_gw_001.name]
			healthcheck: #Snippet.services.healthcheck.nodeFetch & {#port: _openseo.port, #path: "/api/health", retries: 3, start_period: "300s"}
		}
	}
}
