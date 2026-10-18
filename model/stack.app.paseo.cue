package infra

_paseo: {
	version:       "0.11.4"
	claudeVersion: "2.1.302"
	host:          "paseo.\(#Domain.ktbinternalCom)"
	bindDir:       "\(#Dir.docker.bindMounts)/apps/paseo"
}

stacks: paseo: S={
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
			// The gateway reaches the daemon across a Docker network rather than
			// loopback, so trust its Host and X-Forwarded-Proto headers: without
			// them the web UI cannot work out the origin to connect back on.
			PASEO_TRUSTED_PROXIES: "loopback,172.16.0.0/12"
		}
		expose: [Svc._port]
		// Daemon state and the agents' own credentials both live under /home/paseo.
		volumes: [
			"\(_paseo.bindDir)/home:/home/paseo",
			"\(_paseo.bindDir)/workspace:/workspace",
		]
		// The daemon runs agents with write access to /workspace, so the gateway
		// in front of this stack supplies access control.
		networks: [S.networks.default._self, S.networks.newt_gw_001._self]
		// The image ships its own /api/health healthcheck.
	}
	networks: #SharedNetworks.newt_gw_001
}
