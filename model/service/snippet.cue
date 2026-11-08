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
			// httpGet curls #path on #port; for images that ship curl.
			httpGet: {
				#port: int
				#path: *"/" | string
				test: ["CMD-SHELL", "curl -fsS http://localhost:\(#port)\(#path) || exit 1"]
				interval:     "30s"
				timeout:      "10s"
				retries:      *5 | int
				start_period: *"30s" | string
			}
			// nodeFetch fetches #path on #port; for Node images without curl.
			nodeFetch: {
				#port: int
				#path: *"/" | string
				test: [
					"CMD",
					"node",
					"-e",
					"fetch('http://localhost:\(#port)\(#path)').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))",
				]
				interval:     "30s"
				timeout:      "10s"
				retries:      *5 | int
				start_period: *"30s" | string
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
