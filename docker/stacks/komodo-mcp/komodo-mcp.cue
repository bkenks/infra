package stack

import "github.com/bkenks/infra/store"

_komodoMcp: {
	version: "v1.7.1"
	port:    8000
}

stack: {
	name: "komodo-mcp"
	services: app: {
		image: "fj.\(_domain.ktbcloud)/bkenks/komodo-mcp-server:\(_komodoMcp.version)"
		environment: {
			MCP_TRANSPORT:              "http"
			MCP_ALLOWED_HOSTS:          "\(stack.name).\(_domain.ktbinternal)"
			KOMODO_URL:                 "http://host.docker.internal:9120"
			MCP_TRUST_PROXY:            "1"
			TZ:                         "America/Chicago"
			KOMODO_API_KEY:             "${KOMODO_API_KEY:?err}"
			KOMODO_API_SECRET:          "${KOMODO_API_SECRET:?err}"
			KOMODO_MCP_BASICAUTH_USERS: "${KOMODO_MCP_BASICAUTH_USERS:?err}"
		}
		expose: [_komodoMcp.port]
		networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
		extra_hosts: ["host.docker.internal:host-gateway"]
		labels: _label.komodoSkip
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
