package service

import (
	"github.com/bkenks/infra/model/schema"
)

// Every top-level value in this package is a service stack.
[string]: T=schema.#Service & {
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
				_ref:           ServiceName
				container_name: *"\(StackName)-\(ServiceName)" | _
			}
		}
	}

	// Derive fnox.toml data from the secrets spec. Stacks opt into
	// rendering it per-file:
	//
	//	files: "fnox.toml": {format: "toml", contents: D._fnox}
	//
	// Stacks that stop using fnox just drop that file entry.
	if T.secrets != _|_ {
		_fnox: #Fnox & {
			providers: #FnoxProviders
			secrets: {
				for k, s in T.secrets {
					let a = *s.as | k
					(a): {
						value:    s.source
						provider: #FnoxProviders._name
					}
				}
			}
		}
	}
}
