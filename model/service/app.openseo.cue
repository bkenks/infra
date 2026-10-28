package service

import inv "github.com/bkenks/infra/model/inventory"

_openseo: {
	version: "0.1.13"
	host:    "seo.\(inv.domain.public.ktbinternal_com)"
}

openseo: S={
	services: app: Svc={
		_port:   3001
		image:   "ghcr.io/every-app/open-seo:\(_openseo.version)"
		restart: "on-failure:5"
		environment: {
			// Required so the cloudflare:workers bindings see Compose env vars.
			CLOUDFLARE_INCLUDE_PROCESS_ENV: "true"
			PORT:                           "\(Svc._port)"
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
		expose: [Svc._port]
		volumes: ["\(S.volumes.app_data._ref):/app/.wrangler"]
		networks: [S.networks.default._ref, S.networks.newt_gw_001._ref]
		healthcheck: {
			test: [
				"CMD",
				"node",
				"-e",
				"fetch('http://localhost:\(Svc._port)/api/health').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))",
			]
			interval:     "30s"
			timeout:      "10s"
			retries:      3
			start_period: "300s"
		}
	}
	volumes: app_data: name: "openseo-app_data"
	networks: newt_gw_001: #Network.newt_gw_001
}
