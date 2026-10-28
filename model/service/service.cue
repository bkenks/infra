package service

import (
	"strings"

	compose "cue.dev/x/dockercompose"
)

// Every regular top-level field is a Compose stack. The field label is the
// stack's reference; its project name defaults to the label with "_" as "-".
[stack=_]: S={
	compose.#Schema

	let validNetworks = [for n, _ in S.networks {n}]

	_ref: stack

	name: *strings.Replace(stack, "_", "-", -1) | string
	name: =~"^[a-z0-9][a-z0-9_-]*$"

	services: {
		[svc=_]: {
			_ref: svc

			container_name: *"\(S.name)-\(svc)" | string // removes default incrementing suffix ("container-1", "container-2")
			restart:        *"unless-stopped" | string

			logging: *{
				driver: "json-file"
				options: "max-size": "10m"
			} | {...}

			networks?: [...or(validNetworks)]
		}
	}

	networks: {
		[net=_]: {
			_ref: net
			name: *"\(S.name)_\(net)" | string
		}
		default: name: "\(S.name)"
	}

	volumes: {
		[vol=_]: {
			_ref: vol
			name: *"\(S.name)_\(vol)" | string
		}
	}
}
