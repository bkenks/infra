package infra

#Mount: {
	dockerSock: "/var/run/docker.sock:/var/run/docker.sock"
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

#SharedNetwork: [N=string]: {(N): {name: N, external: true}, ...}

#SharedNetworks: #SharedNetwork & {
	tailscale_gw_001: _
	pangolin_gw_001:  _
	newt_gw_001:      _
	db_001:           _
}

#Domain: {
	ktbDev:         "ktb.dev"
	ktbinternalCom: "ktbinternal.com"
	ktbcloudCom:    "ktbcloud.com"
	pangolin:       "pangolin.\(ktbcloudCom)"
}

#Dir: {
	docker: {
		root:       "/srv/docker"
		files:      "\(root)/files"
		stacks:     "\(root)/stacks"
		bindMounts: "\(root)/bind-mounts"
	}
}
