package service

_actual_budget: {
	port:    5006
	version: "latest"
}

actual_budget: compose: S={
	name: "actual-budget"
	volumes: app_data: name: "actual-budget-app_data"
	networks: {
		newt_gw_001: #Network.newt_gw_001
	}

	services: app: {
		image: "docker.io/actualbudget/actual-server:\(_actual_budget.version)"
		environment: ACTUAL_PORT: "\(_actual_budget.port)"
		expose: [_actual_budget.port]
		volumes: ["\(S.volumes.app_data._ref):/data"]
		networks: [S.networks.newt_gw_001._ref]
		healthcheck: {
			test: ["CMD-SHELL", "node scripts/health-check.js"]
			interval:     "60s"
			timeout:      "10s"
			retries:      3
			start_period: "20s"
		}
	}
}
