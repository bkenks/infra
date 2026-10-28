package service

agent: S={
	name: "agent"
	volumes: {
		log_agent_buffer: name: "log-agent-agent_buffer"
	}
	services: "log-agent": {
		_version: "0.58.0"
		_variant: "alpine"

		image: "timberio/vector:\(_version)-\(_variant)"
		environment: HOST: "${HOST:?err}"
		volumes: [
			"\(S.volumes.log_agent_buffer._ref):/var/lib/vector",
			"\(#Snippet.services.volumes.docker_sock):ro",
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: #Snippet.services.labels.komodo_skip
	}

}
