package infra

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
		volumes: ["\(S.volumes.data._self):\(_victorialogs.dataPath)"]
		networks: [S.networks.default._self, S.networks.newt_gw_001._self]
		labels: #Label.komodoSkip
	}
	volumes: data: name: "victorialogs-logs_data"
	networks: #SharedNetworks.newt_gw_001
}
