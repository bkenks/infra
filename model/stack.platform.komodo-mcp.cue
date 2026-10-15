package infra

_komodoMcp: {
	version: "1.5.0"
	port:    8000
}

stacks: "komodo-mcp": S={
	services: app: {
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_komodoMcp.version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(S.name).\(#Domain.ktbinternalCom)"
			MCP_ALLOWED_HOSTS: "\(S.name).\(#Domain.ktbinternalCom)"
			KOMODO_URL:        "http://host.docker.internal:\(stacks.komodo.services.app._listeners.web.port)"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [_komodoMcp.port]
		networks: [S.networks.default._self, S.networks.newt_gw_001._self]
		extra_hosts: ["host.docker.internal:host-gateway"]
		labels: #Label.komodoSkip
	}
	networks: #SharedNetworks.newt_gw_001
}
