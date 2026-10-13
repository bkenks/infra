package stacks

import "github.com/bkenks/infra/store"

_komodoMcp: {
	version: "1.5.0"
	port:    8000
}

stacks: "komodo-mcp": S={
	services: app: {
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_komodoMcp.version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(S.name).\(_domain.ktbinternal)"
			MCP_ALLOWED_HOSTS: "\(S.name).\(_domain.ktbinternal)"
			KOMODO_URL:        "http://host.docker.internal:\(stacks.komodo.services.app._port)"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [_komodoMcp.port]
		networks: [S.networks.default._ref, S.networks.newt_gw_001._ref]
		extra_hosts: ["host.docker.internal:host-gateway"]
		labels: _label.komodoSkip
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
