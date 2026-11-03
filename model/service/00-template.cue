package service

import (
	"github.com/bkenks/infra/model/schema"
)

[string]: schema.#Service & {
	fnox: schema.#Fnox & {
		providers: #Snippet.fnox.defaultProvider
	}

	compose: schema.#DockerCompose & {
		StackName=name: _

		networks: {
			[NetworkName=_]: {
				_ref: NetworkName
				name: *"\(StackName)_\(NetworkName)" | _
			}
		}

		volumes: {
			[VolumeName=_]: {
				_ref: VolumeName
				name: *"\(StackName)_\(VolumeName)" | _
			}
		}

		services: {
			[ServiceName=_]: {
				_ref: ServiceName
				container_name: *"\(StackName)-\(ServiceName)" | _
			}
		}
	}
}
