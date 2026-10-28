package service

actual_budget: {
	name: "actual-budget"
	volumes: data: {}
	networks: {
		newt_gw_001:      #Network.newt_gw_001
		tailscale_gw_001: #Network.tailscale_gw_001
	}
	services: _
}
