package service

import inv "github.com/bkenks/infra/model/inventory"

_paseo: {
	version:       "0.11.4"
	claudeVersion: "2.1.302"
	host:          "paseo.\(inv.domain.public.ktbinternal_com)"
	bindDir:       "\(inv.common.directory.server.docker_bindmounts)/apps/paseo"
}

paseo: S={
	name: "paseo"
	networks: newt_gw_001: #Network.newt_gw_001

	services: app: Svc={
		_port: 6767
		// The published image bundles no agent CLIs, so the stack builds a child
		// image that adds Claude Code on top of the pinned daemon release.
		image: "paseo-agents:\(_paseo.version)"
		build: {
			context: "."
			args: {
				PASEO_VERSION:       _paseo.version
				CLAUDE_CODE_VERSION: _paseo.claudeVersion
			}
		}
		environment: {
			// Password guards the API and WebSocket; the static web UI is served
			// unauthenticated so its login screen can render.
			PASEO_PASSWORD:  "${PASEO_PASSWORD:?err}"
			PASEO_HOSTNAMES: _paseo.host
		}
		expose: [Svc._port]
		// Daemon state and the agents' own credentials both live under /home/paseo.
		volumes: [
			"\(_paseo.bindDir)/home:/home/paseo",
			"\(_paseo.bindDir)/workspace:/workspace",
		]
		// The daemon runs agents with write access to /workspace, so the gateway
		// in front of this stack supplies access control.
		networks: [S.networks.newt_gw_001._ref]
		// The image ships its own /api/health healthcheck.
	}
}
