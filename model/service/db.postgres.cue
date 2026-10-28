package service

_postgres: version: "18"

postgres: S={
	name: "postgres"
	services: db: {
		image:   "postgres:\(_postgres.version)"
		restart: "always"
		environment: {
			POSTGRES_USER:     "${POSTGRES_USER:?err}"
			POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
		}
		volumes: ["\(S.volumes.data._ref):/var/lib/postgresql"]
		networks: [
			S.networks.db_001._ref,
			S.networks.tailscale_gw_001._ref,
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
		db_001:           #Network.db_001
		tailscale_gw_001: #Network.tailscale_gw_001
	}
}
