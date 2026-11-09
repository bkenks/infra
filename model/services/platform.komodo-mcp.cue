package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_komodo_mcp: {
	version: "1.5.0"
	host:    "\(komodo_mcp.compose.name).\(ext.domains.ktbInternal)"
	port:    8000
}

komodo_mcp: compose: {
	name: "komodo-mcp"
	networks: {ext.dockerNetworks.pangolinSite.asExternal}

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
		labels: snip.services.labels.komodoSkip
		extra_hosts: [
			snip.services.extraHosts.hostGateway,
		]

		// —————————————————————————
		networks: [
			ext.dockerNetworks.pangolinSite.name,
		]
	}
}
