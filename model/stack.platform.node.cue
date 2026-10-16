package infra

_logAgent: version: "0.58.0"

_tailscale: {
	version:  "v1.102.3"
	stateDir: "/var/lib/tailscale"
}

_pangolinCli: version: "latest"

_newt: version: "1.16.0"

stacks: node: S={
	services: [Svc=string]: profiles: [Svc, "all"]
	services: "log-agent": {
		image: "timberio/vector:\(_logAgent.version)-alpine"
		environment: HOST: "${HOST:?err}"
		volumes: [
			"\(S.volumes.log_agent_buffer._self):/var/lib/vector",
			"\(#Mount.dockerSock):ro",
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: #Label.komodoSkip
	}
	services: "tailscale-gw": {
		image: "tailscale/tailscale:\(_tailscale.version)"
		environment: {
			TS_HOSTNAME:  "tailscale-gw-${HOST:?err}"
			TS_STATE_DIR: _tailscale.stateDir
			TS_USERSPACE: "true"
			TS_AUTHKEY:   "${TS_AUTHKEY:?err}"
		}
		volumes: ["\(S.volumes.tailscale_gw_state._self):\(_tailscale.stateDir)"]
		networks: [S.networks.default._self, S.networks.tailscale_gw_001._self]
	}
	services: "pangolin-gw": {
		image: "docker.io/fosrl/pangolin-cli:\(_pangolinCli.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://\(#Domain.pangolin)"
			INTERFACE:         "olm-${HOST:?err}"
			CLIENT_ID:         "${CLIENT_ID:?err}"
			CLIENT_SECRET:     "${CLIENT_SECRET:?err}"
		}
		volumes: ["\(S.volumes.pangolin_gw_state._self):/root/.config/olm-client"]
		networks: [S.networks.default._self, S.networks.pangolin_gw_001._self]
		cap_add: ["NET_ADMIN"]
		devices: ["/dev/net/tun:/dev/net/tun"]
	}
	services: "newt-gw": {
		image: "docker.io/fosrl/newt:\(_newt.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://\(#Domain.pangolin)"
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}
		networks: [S.networks.default._self, S.networks.newt_gw_001._self]
	}
	volumes: {
		log_agent_buffer: name:   "log-agent-agent_buffer"
		tailscale_gw_state: name: "tailscale-gw-app_state"
		pangolin_gw_state: name:  "pangolin-gw-app_state"
	}
	networks: {
		#SharedNetworks.tailscale_gw_001
		#SharedNetworks.pangolin_gw_001
		#SharedNetworks.newt_gw_001
	}
}
