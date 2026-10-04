package stack

_logAgent: version: "0.58.0"

stack: {
	name: "log-agent"
	services: agent: {
		image: "timberio/vector:\(_logAgent.version)-alpine"
		environment: HOST: "${HOST:?err}"
		volumes: [
			"\(stack.volumes.buffer._ref):/var/lib/vector",
			_mount.dockerSock,
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: _label.komodoSkip
	}
	volumes: buffer: name: "log-agent-agent_buffer"
}
