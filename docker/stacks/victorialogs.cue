package stacks

import (
	"github.com/bkenks/infra/store"
	s "github.com/bkenks/infra/docker/schema/stack"
)

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

stacks: victorialogs: S={
	services: logs: {
		image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
		command: [
			"-storageDataPath=\(_victorialogs.dataPath)",
			"-retentionPeriod=90d",
		]
		ports: ["19428:9428"]
		volumes: ["\(S.volumes.data.#ref):\(_victorialogs.dataPath)"]
		networks: [S.networks.default.#ref, S.networks.newt_gw_001.#ref]
		labels: s.#Label.komodoSkip
	}
	volumes: data: name: "victorialogs-logs_data"
	networks: newt_gw_001: store.shared.newt_gw_001
}
