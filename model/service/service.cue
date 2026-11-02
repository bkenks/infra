package service

import (
	"github.com/bkenks/infra/model/schema/compose"
)

[string]: compose.#DockerCompose & {
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
