package service

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

victorialogs: compose: S={
	name: "victorialogs"
	volumes: data: name: "victorialogs-logs_data"
	networks: {#Networks.pangolinSite.asExternal}
	services: logs: {
		image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
		command: [
			"-storageDataPath=\(_victorialogs.dataPath)",
			"-retentionPeriod=90d",
		]
		ports: ["19428:9428"]
		volumes: ["\(S.volumes.data._ref):\(_victorialogs.dataPath)"]
		networks: [#Networks.pangolinSite.name]
		labels: #Snippet.services.labels.komodo_skip
	}
}
