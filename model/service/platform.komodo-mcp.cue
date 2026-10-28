package service

komodo_mcp: stack={
	services: app: {
		_version: "1.5.0"
		_port:    8000

		// —————————————————————————
		image: "ghcr.io/mp-tool/komodo-mcp-server:\(_version)"
		environment: {
			MCP_TRANSPORT:     "http"
			MCP_BASE_URL:      "https://\(stack.name).\(#Domain.ktbinternalCom)"
			MCP_ALLOWED_HOSTS: "\(stack.name).\(#Domain.ktbinternalCom)"
			KOMODO_URL:        "http://host.docker.internal:\(stacks.komodo.services.app._listeners.web._port)"
			MCP_TRUST_PROXY:   "1"
			TZ:                "America/Chicago"
		}
		expose: [_komodoMcp._port]

		// —————————————————————————
		labels: #Label.komodoSkip
		extra_hosts: [
			#Snippet.services.extra_hosts.host_gateway
		]

		// —————————————————————————
		networks: [
			stack.networks.newt_gw_001._ref
		]
	}

	networks: {
		pc: {
			name:     pangolin_connector.networks.newt_gw_001.name
			external: true
		}
	}
}
