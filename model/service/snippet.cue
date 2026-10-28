package service

#Snippet: {
	services: {
		healthcheck: {
			redisPing: {test: ["CMD", "redis-cli", "ping"], interval: "10s", timeout: "5s", retries: 5}
			pgIsReady: {
				#user: string
				test: ["CMD-SHELL", "pg_isready --username=\(#user)"]
				interval: "5s"
				timeout:  "10s"
				retries:  10
			}
		}
		extra_hosts: {
			host_gateway: "host.docker.internal:host-gateway"
		}
		labels: {
			komodo_skip: "komodo.skip": ""
		}
		volumes: {
			docker_sock: "/var/run/docker.sock:/var/run/docker.sock"
		}
	}
}

// #Network lists the Docker networks that stacks share. Terraform creates them
// on every host from store/networks.yml, so each stack joins them as external.
#Network: [N=string]: {name: N, external: true}
#Network: {
	tailscale_gw_001: _
	pangolin_gw_001:  _
	newt_gw_001:      _
	db_001:           _
}
