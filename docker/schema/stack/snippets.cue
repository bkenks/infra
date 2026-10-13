package stack

#Domain: {
	ktbdev:      "ktb.dev"
	ktbinternal: "ktbinternal.com"
	ktbcloud:    "ktbcloud.com"
}

#Mount: {
	dockerSock:   "/var/run/docker.sock:/var/run/docker.sock:ro"
	dockerSockRW: "/var/run/docker.sock:/var/run/docker.sock"
}

#Label: komodoSkip: "komodo.skip": ""

#Health: {
	redisPing: {test: ["CMD", "redis-cli", "ping"], interval: "10s", timeout: "5s", retries: 5}
	pgIsReady: {
		#user: string
		test: ["CMD-SHELL", "pg_isready --username=\(#user)"]
		interval: "5s"
		timeout:  "10s"
		retries:  10
	}
}
