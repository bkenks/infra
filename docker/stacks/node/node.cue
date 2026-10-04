package stack

import "github.com/bkenks/infra/store"

_logAgent: version: "0.58.0"

_tailscale: {
	version:  "v1.102.3"
	stateDir: "/var/lib/tailscale"
}

_pangolinCli: version: "latest"

_newt: version: "1.16.0"

stack: {
	name: "node"
	services: "log-agent": {
		profiles: ["log-agent"]
		image: "timberio/vector:\(_logAgent.version)-alpine"
		environment: HOST: "${HOST:?err}"
		volumes: [
			"\(stack.volumes.log_agent_buffer._ref):/var/lib/vector",
			_mount.dockerSock,
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: _label.komodoSkip
	}
	services: "tailscale-gw": {
		profiles: ["tailscale-gw"]
		image: "tailscale/tailscale:\(_tailscale.version)"
		environment: {
			TS_HOSTNAME:  "tailscale-gw-${HOST:?err}"
			TS_STATE_DIR: _tailscale.stateDir
			TS_USERSPACE: "true"
			TS_AUTHKEY:   "${TS_AUTHKEY:?err}"
		}
		volumes: ["\(stack.volumes.tailscale_gw_state._ref):\(_tailscale.stateDir)"]
		networks: [stack.networks.default._ref, stack.networks.tailscale_gw_001._ref]
	}
	services: "pangolin-gw": {
		profiles: ["pangolin-gw"]
		image: "docker.io/fosrl/pangolin-cli:\(_pangolinCli.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://pangolin.\(_domain.ktbcloud)"
			INTERFACE:         "olm-${HOST:?err}"
			CLIENT_ID:         "${CLIENT_ID:?err}"
			CLIENT_SECRET:     "${CLIENT_SECRET:?err}"
		}
		volumes: ["\(stack.volumes.pangolin_gw_state._ref):/root/.config/olm-client"]
		networks: [stack.networks.default._ref, stack.networks.pangolin_gw_001._ref]
		cap_add: ["NET_ADMIN"]
		devices: ["/dev/net/tun:/dev/net/tun"]
	}
	services: "newt-gw": {
		profiles: ["newt-gw"]
		image: "docker.io/fosrl/newt:\(_newt.version)"
		environment: {
			PANGOLIN_ENDPOINT: "https://pangolin.\(_domain.ktbcloud)"
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}
		networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
	}
	volumes: {
		log_agent_buffer: name:   "log-agent-agent_buffer"
		tailscale_gw_state: name: "tailscale-gw-app_state"
		pangolin_gw_state: name:  "pangolin-gw-app_state"
	}
	networks: {
		tailscale_gw_001: store.shared.tailscale_gw_001
		pangolin_gw_001:  store.shared.pangolin_gw_001
		newt_gw_001:      store.shared.newt_gw_001
	}
}
