package stack

import "github.com/bkenks/infra/store"

_newt: version: "1.16.0"

stack: {
	name: "newt-gw"
	services: app: {
		image: "docker.io/fosrl/newt:\(_newt.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://pangolin.\(_domain.ktbcloud)"
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}
		networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
