package service

import inv "github.com/bkenks/infra/model/inventory"

pangolin_client: S={
	volumes: {
		pangolin_gw_state: name: "pangolin-gw-app_state"
	}
	networks: {
		pangolin_gw_001: #Network.pangolin_gw_001
	}

	services: client: {
		_version: "latest"

		image: "docker.io/fosrl/pangolin-cli:\(_version)"
		environment: {
			PANGOLIN_ENDPOINT: inv.route.pangolin.public.entry.uri
			INTERFACE:         "olm-${HOST:?err}"
			CLIENT_ID:         "${CLIENT_ID:?err}"
			CLIENT_SECRET:     "${CLIENT_SECRET:?err}"
		}

		cap_add: ["NET_ADMIN"]
		devices: [
			"/dev/net/tun:/dev/net/tun",
		]

		volumes: ["\(S.volumes.pangolin_gw_state._ref):/root/.config/olm-client"]
		networks: [
			S.networks.default._ref,
			S.networks.pangolin_gw_001._ref,
		]
	}
}
