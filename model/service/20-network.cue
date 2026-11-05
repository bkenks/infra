package service

#Networks: {
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
