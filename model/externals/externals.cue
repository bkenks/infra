package externals

dirs: {
	host: {
		share:            "/srv"
		dockerShare:      share + "/docker"
		dockerFiles:      dockerShare + "/files"
		dockerStacks:     dockerShare + "/stacks"
		dockerBindMounts: dockerShare + "/bind-mounts"
		syncthingSync:    share + "/sync"
	}

	repo: configs: "../../configs"
}

domains: {
	ktbInternal:    "ktbinternal.com"
	lanKtbInternal: "lan.\(ktbInternal)"
	ktbCloud:       "ktbcloud.com"
}

dockerNetworks: {
	pangolinSite: N={
		name:   "pangolin-site"
		subnet: "10.250.0.0/24"
		asNew: {
			name: N.name
			ipam: config: [{subnet: N.subnet}]
		}
		asExternal: {
			(N.name): {
				name:     N.name
				external: true
			}
		}
	}
}

routes: {
	pangolin: "https://pangolin." + domains.ktbCloud
}
