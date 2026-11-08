package service

import (
	"github.com/bkenks/infra/model/externals"
)

_actual_budget: {
	port:    5006
	version: "latest"
}

actual_budget: compose: S={
	name: "actual-budget"
	volumes: app_data: name: "actual-budget-app_data"
	networks: {
		externals.dockerNetworks.pangolinSite.asExternal
	}

	services: app: {
		image: "docker.io/actualbudget/actual-server:\(_actual_budget.version)"
		environment: ACTUAL_PORT: "\(_actual_budget.port)"
		expose: [_actual_budget.port]
		volumes: ["\(S.volumes.app_data._ref):/data"]
		networks: [externals.dockerNetworks.pangolinSite.name]
		healthcheck: {
			test: ["CMD-SHELL", "node scripts/health-check.js"]
			interval:     "60s"
			timeout:      "10s"
			retries:      3
			start_period: "20s"
		}
	}
}
