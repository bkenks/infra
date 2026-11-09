package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
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
				"\(S.volumes.log_agent_buffer._ID):/var/lib/vector",
				"\(snip.services.volumes.dockerSock):ro",
				"\(ext.dirs.repo.configs)/\(S.name)/vector.yaml:/etc/vector/vector.yaml:ro",
			]
			labels: snip.services.labels.komodoSkip
		}
	}
}
