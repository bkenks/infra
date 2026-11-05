package service

// #Network lists the Docker networks that stacks share. Terraform creates them
// on every host from store/networks.yml, so each stack joins them as external.
#Network: [N=string]: {name: N, external: true}
#Network: {
	newt_gw_001: _
}

Networks: {
	pangolinSite: {
		name: "pangolin-site"
		ipam: config: [{subnet: "172.30.0.0/24"}]
	}
}
