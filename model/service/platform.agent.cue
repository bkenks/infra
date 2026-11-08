package service

import (
	"github.com/bkenks/infra/model/externals"
)

_agent: {
	version: "0.58.0"
	variant: "alpine"
}

agent: {
	compose: S={
		name: "agent"

		volumes: {
			log_agent_buffer: name: "log-agent-agent_buffer"
		}

		services: "log-agent": {
			image: "docker.io/timberio/vector:\(_agent.version)-\(_agent.variant)"
			environment: HOST: "${HOST:?err}"
			volumes: [
				"\(S.volumes.log_agent_buffer._ref):/var/lib/vector",
				"\(#Snippet.services.volumes.docker_sock):ro",
				"\(externals.dirs.repo.configs)/\(S.name)/vector.yaml:/etc/vector/vector.yaml:ro",
			]
			labels: #Snippet.services.labels.komodo_skip
		}
	}
}
