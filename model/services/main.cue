package services

import (
	sch "github.com/bkenks/infra/model/schema"
)

_AssignIDs: [ID=_]: {_ID: ID}

[_]: S={
	compose?: sch.#DockerCompose & {
		services?: _AssignIDs
		services?: [Name=string]: {
			container_name: *"\(S.compose.name)-\(Name)" | string
		}

		volumes?: _AssignIDs
		volumes?: [Name=string]: {
			name: *"\(S.compose.name)_\(Name)" | string
		}

		networks?: _AssignIDs
		networks?: [Name=string]: {
			name: *"\(S.compose.name)_\(Name)" | string
		}
	}

	fnox?: {
		providers?: _AssignIDs
		secrets?:   _AssignIDs

		profiles?: [_]: {
			providers?: _AssignIDs
			secrets?:   _AssignIDs
		}

	}
}
