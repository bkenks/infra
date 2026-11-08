package service

import (
	"github.com/bkenks/infra/model/externals"
)

_openhands: {
	version: "1.37.0"
	port:    8000
	bindDir: "\(externals.dirs.host.docker_bindmounts)/apps/openhands"
}

openhands: D={
	secrets: {
		LOCAL_BACKEND_API_KEY: source: "openhands/LOCAL_BACKEND_API_KEY"
		OH_SECRET_KEY: {
			source: "openhands/OH_SECRET_KEY"
			as: "OH_SECRET_KEY"
		}
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: S={
		name: "openhands"
		volumes: app_state: name: "openhands-app_state"
		networks: {externals.dockerNetworks.pangolinSite.asExternal}

		services: app: {
			image: "ghcr.io/openhands/agent-canvas:\(_openhands.version)"
			environment: {
				// Public mode: the key is not injected into the frontend;
				// the gateway in front supplies access control.
				(secrets.OH_SECRET_KEY.as): "${\(secrets.OH_SECRET_KEY.as):?err}"
				LOCAL_BACKEND_API_KEY: "${LOCAL_BACKEND_API_KEY:?err}"
				TZ:                    "America/Chicago"
			}
			expose: [_openhands.port]
			volumes: [
				"\(S.volumes.app_state._ref):/home/openhands/.openhands",
				"\(_openhands.bindDir)/projects:/projects",
			]
			networks: [externals.dockerNetworks.pangolinSite.name]
			healthcheck: #Snippet.services.healthcheck.nodeFetch & {#port: _openhands.port}
		}
	}
}
