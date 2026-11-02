package service

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

victorialogs: compose: S={
	name: "victorialogs"
	volumes: data: name: "victorialogs-logs_data"
	networks: newt_gw_001: #Network.newt_gw_001
	services: logs: {
		image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
		command: [
			"-storageDataPath=\(_victorialogs.dataPath)",
			"-retentionPeriod=90d",
		]
		ports: ["19428:9428"]
		volumes: ["\(S.volumes.data.name):\(_victorialogs.dataPath)"]
		networks: [S.networks.newt_gw_001.name]
		labels: #Snippet.services.labels.komodo_skip
	}
}
