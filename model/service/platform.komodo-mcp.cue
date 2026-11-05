package service

import "github.com/bkenks/infra/model/common"

_komodo_mcp: {
	version: "1.5.0"
	host:    "\(komodo_mcp.compose.name).\(common.domain.ktbinternal_dotcom)"
	port:    8000
}

komodo_mcp: compose: {
	name: "komodo-mcp"
	networks: {#Networks.pangolinSite.asExternal}

	services: app: {
		// —————————————————————————
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_komodo_mcp.version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(_komodo_mcp.host)"
			MCP_ALLOWED_HOSTS: _komodo_mcp.host
			KOMODO_URL:        "http://host.docker.internal:\(_komodo.port)"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [_komodo_mcp.port]

		// —————————————————————————
		labels: #Snippet.services.labels.komodo_skip
		extra_hosts: [
			#Snippet.services.extra_hosts.host_gateway,
		]

		// —————————————————————————
		networks: [
			#Networks.pangolinSite.name,
		]
	}
}
