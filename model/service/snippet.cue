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
