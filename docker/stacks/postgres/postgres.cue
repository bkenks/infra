package stack

import "github.com/bkenks/infra/store"

_postgres: version: "18"

stack: {
	name: "postgres"
	services: db: {
		image:   "postgres:\(_postgres.version)"
		restart: "always"
		environment: {
			POSTGRES_USER:     "${POSTGRES_USER:?err}"
			POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
		}
		volumes: ["\(stack.volumes.data._ref):/var/lib/postgresql"]
		networks: [
			stack.networks.default._ref,
			stack.networks.db_001._ref,
			stack.networks.tailscale_gw_001._ref,
		]
		healthcheck: {
			test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -h localhost -d postgres"]
			interval: "5s"
			timeout:  "5s"
			retries:  10
		}
	}
	volumes: data: name: "postgres-db_data"
	networks: {
		db_001:           store.shared.db_001
		tailscale_gw_001: store.shared.tailscale_gw_001
	}
}
