package stack

import "github.com/bkenks/infra/store"

_tailscale: {
	version:  "v1.102.3"
	stateDir: "/var/lib/tailscale"
}

stack: {
	name: "tailscale-gw"
	services: app: {
		image: "tailscale/tailscale:\(_tailscale.version)"
		environment: {
			TS_HOSTNAME:  "\(stack.name)-${HOST:?err}"
			TS_STATE_DIR: _tailscale.stateDir
			TS_USERSPACE: "true"
			TS_AUTHKEY:   "${TS_AUTHKEY:?err}"
		}
		volumes: ["\(stack.volumes.state._ref):\(_tailscale.stateDir)"]
		networks: [stack.networks.default._ref, stack.networks.tailscale_gw_001._ref]
	}
	volumes: state: name: "tailscale-gw-app_state"
	networks: tailscale_gw_001: store.shared.tailscale_gw_001
}
