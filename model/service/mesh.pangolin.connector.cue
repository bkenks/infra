package service

import "github.com/bkenks/infra/model/common"

_pangolin_connector: {
	version: "1.16.0"
}

pangolin_connector: S={
	name: "pangolin-connector"
	networks: {
		newt_gw_001: #Network.newt_gw_001
	}

	services: connector: {
		image: "docker.io/fosrl/newt:\(_pangolin_connector.version)"
		environment: {
			PANGOLIN_ENDPOINT: common.route.pangolin.public.uri
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}

		container_name: S.name
		networks: [
			S.networks.newt_gw_001.name
		]
	}
}
