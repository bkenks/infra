package service

import compose "cue.dev/x/dockercompose"

[stack=string]: compose.#Schema & {
	_ref: stack

	name!: =~"^[a-z]+(-[a-z]+)*$"

	services: {
		[svc=_]: {
			_ref: svc

			container_name: *"\(name)-\(svc)" | string // removes default incrementing suffix ("container-1", "container-2")
			restart:        *"unless-stopped" | string

			logging: *{
				driver: "json-file"
				options: "max-size": "10m"
			} | {...}
		}
	}

	networks: {
		[net=_]: {
			_ref: net
		}
	}

	volumes: {
		[vol=_]: {
			_ref: vol
		}
	}
}
