package service

import inv "github.com/bkenks/infra/model/inventory"

komodo_mcp: S={
	name: "komodo-mcp"
	services: app: Svc={
		_version: "1.5.0"
		_port:    8000

		// —————————————————————————
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(S.name).\(inv.domain.public.ktbinternal_com)"
			MCP_ALLOWED_HOSTS: "\(S.name).\(inv.domain.public.ktbinternal_com)"
			KOMODO_URL:        "http://host.docker.internal:\(komodo.services.app._listeners.web.port)"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [Svc._port]

		// —————————————————————————
		labels: #Snippet.services.labels.komodo_skip
		extra_hosts: [
			#Snippet.services.extra_hosts.host_gateway,
		]

		// —————————————————————————
		networks: [
			S.networks.newt_gw_001._ref,
		]
	}

	networks: newt_gw_001: #Network.newt_gw_001
}
