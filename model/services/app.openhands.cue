package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_openhands: {
	version: "1.37.0"
	port:    8000
	bindDir: "\(ext.dirs.host.dockerBindMounts)/apps/openhands"
}

openhands: D={
	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:                D.fnox.providers.onepassword._ID
			LOCAL_BACKEND_API_KEY: value: "openhands/LOCAL_BACKEND_API_KEY"
			OH_SECRET_KEY: value:         "openhands/OH_SECRET_KEY"
		}
	}

	compose: S={
		name: "openhands"
		volumes: app_state: name: "openhands-app_state"
		networks: {ext.dockerNetworks.pangolinSite.asExternal}

		services: app: {
			image: "ghcr.io/openhands/agent-canvas:\(_openhands.version)"
			environment: {
				// Public mode: the key is not injected into the frontend;
				// the gateway in front supplies access control.
				(_scr.OH_SECRET_KEY._ID):         "${\(_scr.OH_SECRET_KEY._ID):?err}"
				(_scr.LOCAL_BACKEND_API_KEY._ID): "${\(_scr.LOCAL_BACKEND_API_KEY._ID):?err}"
				TZ:                               "America/Chicago"
			}
			expose: [_openhands.port]
			volumes: [
				"\(S.volumes.app_state._ID):/home/openhands/.openhands",
				"\(_openhands.bindDir)/projects:/projects",
			]
			networks: [ext.dockerNetworks.pangolinSite.name]
			healthcheck: snip.services.healthcheck.nodeFetch & {#port: _openhands.port}
		}
	}
}
