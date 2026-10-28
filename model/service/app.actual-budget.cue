package service

actual_budget: {
	services: _
	volumes: data: {}
	networks: {
		newt_gw_001:      #Network.newt_gw_001
		tailscale_gw_001: #Network.tailscale_gw_001
	}
}
