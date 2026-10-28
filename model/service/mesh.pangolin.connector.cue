package service

import inv "github.com/bkenks/infra/model/inventory"

pangolin_connector: stk={
	name: "pangolin-connector"
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

		container_name: pangolin_connector.name
		networks: [
			stk.networks.newt_gw_001._ref
		]
	}
}
