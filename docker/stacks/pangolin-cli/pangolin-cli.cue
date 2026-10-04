package stack

import "github.com/bkenks/infra/store"

_pangolinCli: version: "latest"

stack: {
	name: "pangolin-gw"
	services: app: {
		image: "docker.io/fosrl/pangolin-cli:\(_pangolinCli.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://pangolin.\(_domain.ktbcloud)"
			INTERFACE:         "olm-${HOST:?err}"
			CLIENT_ID:         "${CLIENT_ID:?err}"
			CLIENT_SECRET:     "${CLIENT_SECRET:?err}"
		}
		volumes: ["\(stack.volumes.state._ref):/root/.config/olm-client"]
		networks: [stack.networks.default._ref, stack.networks.pangolin_gw_001._ref]
		cap_add: ["NET_ADMIN"]
		devices: ["/dev/net/tun:/dev/net/tun"]
	}
	volumes: state: name: "pangolin-gw-app_state"
	networks: pangolin_gw_001: store.shared.pangolin_gw_001
}
