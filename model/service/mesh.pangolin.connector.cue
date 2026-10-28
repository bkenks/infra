package service

import inv "github.com/bkenks/infra/model/inventory"

pangolin_connector: S={
	networks: {
		newt_gw_001: #Network.newt_gw_001
	}

	services: connector: {
		_version: "1.16.0"

		image: "docker.io/fosrl/newt:\(_version)"
		environment: {
			PANGOLIN_ENDPOINT: inv.route.pangolin.public.entry.uri
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}

		networks: [
			S.networks.default._ref,
			S.networks.newt_gw_001._ref,
		]
	}
}
