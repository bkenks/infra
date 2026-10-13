package stacks

import (
	"github.com/bkenks/infra/store"
	s "github.com/bkenks/infra/docker/schema/stack"
)

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
			"\(S.volumes.log_agent_buffer.#ref):/var/lib/vector",
			s.#Mount.dockerSock,
			"./config/vector.yaml:/etc/vector/vector.yaml:ro",
		]
		labels: s.#Label.komodoSkip
	}
	services: "tailscale-gw": {
		image: "tailscale/tailscale:\(_tailscale.version)"
		environment: {
			TS_HOSTNAME:  "tailscale-gw-${HOST:?err}"
			TS_STATE_DIR: _tailscale.stateDir
			TS_USERSPACE: "true"
			TS_AUTHKEY:   "${TS_AUTHKEY:?err}"
		}
		volumes: ["\(S.volumes.tailscale_gw_state.#ref):\(_tailscale.stateDir)"]
		networks: [S.networks.default.#ref, S.networks.tailscale_gw_001.#ref]
	}
	services: "pangolin-gw": {
		image: "docker.io/fosrl/pangolin-cli:\(_pangolinCli.version)"
		environment: {
			PANGOLIN_ENDPOINT: stacks.pangolin._endpoint
			INTERFACE:         "olm-${HOST:?err}"
			CLIENT_ID:         "${CLIENT_ID:?err}"
			CLIENT_SECRET:     "${CLIENT_SECRET:?err}"
		}
		volumes: ["\(S.volumes.pangolin_gw_state.#ref):/root/.config/olm-client"]
		networks: [S.networks.default.#ref, S.networks.pangolin_gw_001.#ref]
		cap_add: ["NET_ADMIN"]
		devices: ["/dev/net/tun:/dev/net/tun"]
	}
	services: "newt-gw": {
		image: "docker.io/fosrl/newt:\(_newt.version)"
		environment: {
			PANGOLIN_ENDPOINT: stacks.pangolin._endpoint
			NEWT_ID:           "${NEWT_ID:?err}"
			NEWT_SECRET:       "${NEWT_SECRET:?err}"
		}
		networks: [S.networks.default.#ref, S.networks.newt_gw_001.#ref]
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
