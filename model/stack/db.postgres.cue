package model

_postgres: version: "18"

stacks: postgres: S={
	services: db: {
		image:   "postgres:\(_postgres.version)"
		restart: "always"
		environment: {
			POSTGRES_USER:     "${POSTGRES_USER:?err}"
			POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
		}
		volumes: ["\(S.volumes.data._self):/var/lib/postgresql"]
		networks: [
			S.networks.default._self,
			S.networks.db_001._self,
			S.networks.tailscale_gw_001._self,
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
		#SharedNetworks.db_001
		#SharedNetworks.tailscale_gw_001
	}
}
