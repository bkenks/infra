package stack

import "github.com/bkenks/infra/store"

_komodoMcp: {
	version: "1.5.0"
	port:    8000
}

stack: {
	name: "komodo-mcp"
	services: app: {
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_komodoMcp.version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(stack.name).\(_domain.ktbinternal)"
			MCP_ALLOWED_HOSTS: "\(stack.name).\(_domain.ktbinternal)"
			KOMODO_URL:        "http://host.docker.internal:9120"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [_komodoMcp.port]
		networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
		extra_hosts: ["host.docker.internal:host-gateway"]
		labels: _label.komodoSkip
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
