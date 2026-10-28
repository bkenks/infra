package service

agent: stk={
	services: "log-agent": {
		_version: "0.58.0"
		_variant: "alpine"

		image: "timberio/vector:\(_version)-\(_variant)"
		environment: HOST: "${HOST:?err}"
		volumes: [
			"\(S.volumes.log_agent_buffer._ref):/var/lib/vector",
			"\(#Mount.dockerSock):ro",
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: #Label.komodoSkip
	}

	volumes: {
		log_agent_buffer: name: "log-agent-agent_buffer"
	}

	networks: {
		[_]: {external: true}
		_gateway.newt.networks.newt_gw_001
		_gateway.pangolin.networks.pangolin_gw_001
		_gateway.tailscale.networks.tailscale_gw_001
	}
}
