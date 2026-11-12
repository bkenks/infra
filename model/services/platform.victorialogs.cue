package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_victorialogs: {
	version:  "v1.52.0"
	dataPath: "/victoria-logs-data"
}

victorialogs: {
	deploy: {
		manager: "komodo"
		targets: ["littlebuddy"]
	}

	notes: "Central log store for the fleet. See ADR 01-02-01 (fleet log aggregation)."

	compose: S={
		name: "victorialogs"
		volumes: data: name: "victorialogs-logs_data"
		networks: {ext.dockerNetworks.pangolinSite.asExternal}
		services: logs: {
			image: "docker.io/victoriametrics/victoria-logs:\(_victorialogs.version)"
			command: [
				"-storageDataPath=\(_victorialogs.dataPath)",
				"-retentionPeriod=90d",
			]
			ports: ["19428:9428"]
			volumes: ["\(S.volumes.data._ID):\(_victorialogs.dataPath)"]
			networks: [ext.dockerNetworks.pangolinSite.name]
			labels: snip.services.labels.komodoSkip
		}
	}
}
