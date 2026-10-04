package stack

import "github.com/bkenks/infra/store"

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

stack: {
	name: "victorialogs"
	services: logs: {
		image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
		command: [
			"-storageDataPath=\(_victorialogs.dataPath)",
			"-retentionPeriod=90d",
		]
		ports: ["19428:9428"]
		volumes: ["\(stack.volumes.data._ref):\(_victorialogs.dataPath)"]
		networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
		labels: _label.komodoSkip
	}
	volumes: data: name: "victorialogs-logs_data"
	networks: newt_gw_001: store.shared.newt_gw_001
}
