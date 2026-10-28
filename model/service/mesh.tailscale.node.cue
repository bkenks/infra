package service

tailscale_node: stk={
	name: "tailscale_node"
	volumes: tailscale_gw_state: name: "tailscale-gw-app_state"
	networks: tailscale_gw_001: name:  "tailscale_gw_001"

	services: node: {
		_version: "v1.102.3"
		_dir: state: "/var/lib/tailscale"

		// —————————————————————————
		image: "tailscale/tailscale:\(_version)"
		environment: {
			TS_HOSTNAME:  "tailscale-gw-${HOST:?err}"
			TS_STATE_DIR: _dir.state
			TS_USERSPACE: "true"
			TS_AUTHKEY:   "${TS_AUTHKEY:?err}"
		}

		// —————————————————————————
		container_name: tailscale_node.name
		volumes: [
			"\(stk.volumes.tailscale_gw_state._ref):\(_dir.state)"
		]
		networks: [
			stk.networks.tailscale_gw_001._ref
		]
	}
}
