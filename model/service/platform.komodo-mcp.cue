package service

import "github.com/bkenks/infra/model/common"

_komodo_mcp: {
	port: 8000
}

komodo_mcp: S={
	name: "komodo-mcp"
	networks: newt_gw_001: #Network.newt_gw_001

	services: app: {
		_version: "1.5.0"

		// —————————————————————————
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(S.name).\(common.domain.ktbinternal_dotcom)"
			MCP_ALLOWED_HOSTS: "\(S.name).\(common.domain.ktbinternal_dotcom)"
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
			S.networks.newt_gw_001.name,
		]
	}

}
