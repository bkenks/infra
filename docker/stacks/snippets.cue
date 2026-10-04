package stack

_domain: {
	ktbdev:      "ktb.dev"
	ktbinternal: "ktbinternal.com"
	ktbcloud:    "ktbcloud.com"
}

_mount: {
	dockerSock:   "/var/run/docker.sock:/var/run/docker.sock:ro"
	dockerSockRW: "/var/run/docker.sock:/var/run/docker.sock"
}

_label: komodoSkip: "komodo.skip": ""

_health: {
	redisPing: {test: ["CMD", "redis-cli", "ping"], interval: "10s", timeout: "5s", retries: 5}
	pgIsReady: {
		_user: string
		test: ["CMD-SHELL", "pg_isready --username=\(_user)"]
		interval: "5s"
		timeout:  "10s"
		retries:  10
	}
}
