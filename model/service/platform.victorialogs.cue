package service

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

victorialogs: S={
	name: "victorialogs"
	services: logs: {
		image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
		command: [
			"-storageDataPath=\(_victorialogs.dataPath)",
			"-retentionPeriod=90d",
		]
		ports: ["19428:9428"]
		volumes: ["\(S.volumes.data._ref):\(_victorialogs.dataPath)"]
		networks: [S.networks.newt_gw_001._ref]
		labels: #Snippet.services.labels.komodo_skip
	}
	volumes: data: name: "victorialogs-logs_data"
	networks: newt_gw_001: #Network.newt_gw_001
}
