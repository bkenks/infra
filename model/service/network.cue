package service

// #Network lists the Docker networks that stacks share. Terraform creates them
// on every host from store/networks.yml, so each stack joins them as external.
#Network: [N=string]: {name: N, external: true}
#Network: {
	tailscale_gw_001: _
	pangolin_gw_001:  _
	newt_gw_001:      _
	db_001:           _
}
