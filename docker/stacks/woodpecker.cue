package stacks

import (
	"github.com/bkenks/infra/store"
	s "github.com/bkenks/infra/docker/schema/stack"
)

_woodpecker: {
	version:      "v3.15.0"
	maxWorkflows: 2
	stepMemBytes: 4 * 1024 * 1024 * 1024
	stepCpuQuota: 200000
	agentSecret: WOODPECKER_AGENT_SECRET: "${WOODPECKER_AGENT_SECRET:?err}"
}

stacks: woodpecker: S={
	services: {
		server: Svc={
			_port: {http: 8000, grpc: 9000}
			image:   "docker.io/woodpeckerci/woodpecker-server:\(_woodpecker.version)"
			restart: "on-failure:5"
			environment: {
				WOODPECKER_HOST:               "https://peck.\(s.#Domain.ktbcloud)"
				WOODPECKER_OPEN:               "true"
				WOODPECKER_FORGEJO:            "true"
				WOODPECKER_FORGEJO_URL:        "https://fj.\(s.#Domain.ktbcloud)"
				WOODPECKER_FORGEJO_CLIENT:     "${WOODPECKER_FORGEJO_CLIENT:?err}"
				WOODPECKER_FORGEJO_SECRET:     "${WOODPECKER_FORGEJO_SECRET:?err}"
				WOODPECKER_PLUGINS_PRIVILEGED: "woodpeckerci/plugin-docker-buildx:6.1.0"
				WOODPECKER_ADMIN:              "bkenks"
				_woodpecker.agentSecret
			}
			expose: [Svc._port.http, Svc._port.grpc]
			volumes: ["\(S.volumes.server_data.#ref):/var/lib/woodpecker"]
			networks: [S.networks.default.#ref, S.networks.newt_gw_001.#ref]
			deploy: resources: limits: memory: "1g"
		}
		agent: {
			image:   "docker.io/woodpeckerci/woodpecker-agent:\(_woodpecker.version)"
			restart: "on-failure:5"
			command: ["agent"]
			depends_on: server: condition: "service_started"
			environment: {
				WOODPECKER_SERVER:                         "\(S.services.server.#ref):\(S.services.server._port.grpc)"
				WOODPECKER_MAX_WORKFLOWS:                  "\(_woodpecker.maxWorkflows)"
				WOODPECKER_BACKEND_DOCKER_LIMIT_MEM:       "\(_woodpecker.stepMemBytes)"
				WOODPECKER_BACKEND_DOCKER_LIMIT_MEM_SWAP:  "\(_woodpecker.stepMemBytes)"
				WOODPECKER_BACKEND_DOCKER_LIMIT_CPU_QUOTA: "\(_woodpecker.stepCpuQuota)"
				_woodpecker.agentSecret
			}
			volumes: [
				"\(S.volumes.agent_data.#ref):/etc/woodpecker",
				s.#Mount.dockerSockRW,
			]
			deploy: resources: limits: memory: "512m"
		}
	}
	volumes: {
		server_data: name: "woodpecker-server_data"
		agent_data: name:  "woodpecker-agent_data"
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
