package service

import "github.com/bkenks/infra/model/common"

_openseo: {
	port:    3001
	version: "0.1.13"
	host:    "seo.\(common.domain.ktbinternal_dotcom)"
}

openseo: S={
	name: "openseo"
	volumes: app_data: name: "openseo-app_data"
	networks: newt_gw_001: #Network.newt_gw_001

	services: app: {
		image:   "ghcr.io/every-app/open-seo:\(_openseo.version)"
		restart: "on-failure:5"
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
		healthcheck: {
			test: [
				"CMD",
				"node",
				"-e",
				"fetch('http://localhost:\(_openseo.port)/api/health').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))",
			]
			interval:     "30s"
			timeout:      "10s"
			retries:      3
			start_period: "300s"
		}
	}
}
