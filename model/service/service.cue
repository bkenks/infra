package service

import (
	cmps "github.com/bkenks/infra/model/schema/compose"
)

[string]: cmps.#DockerCompose & {
	StackName=name: _

	networks: {
		[NetworkName=_]: {
			name: *"\(StackName)_\(NetworkName)" | _
		}
	}

	volumes: {
		[VolumeName=_]: {
			name: *"\(StackName)_\(VolumeName)" | _
		}
	}

	services: {
		[ServiceName=_]: {
			container_name: *"\(StackName)-\(ServiceName)" | _
		}
	}
}

// [stack=string]: compose.#Schema & {
// 	_ref: stack

// 	stackName=name!: =~"^[a-z]+(-[a-z]+)*$"

// 	// Hand-written files mounted into the stack, relative to out/<name>/compose.yaml.
// 	_configs: "../../configs/\(stackName)"

// 	networks: {
// 		[net=_]: {
// 			_ref: net
// 			name: *"\(stackName)_\(net)" | string
// 		}
// 	}
// 	volumes: {
// 		[vol=_]: {
// 			_ref: vol
// 			name: *"\(stackName)_\(vol)" | string
// 		}
// 	}
// 	services: {
// 		[svc=_]: {
// 			_ref: svc

// 			container_name: *"\(name)-\(svc)" | string // removes default incrementing suffix ("container-1", "container-2")
// 			restart:        *"unless-stopped" | string

// 			logging: *{
// 				driver: "json-file"
// 				options: "max-size": "10m"
// 			} | {...}
// 		}
// 	}

// }
