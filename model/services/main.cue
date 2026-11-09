package services

import (
	sch "github.com/bkenks/infra/model/schema"
)

_AssignIDs: [ID=_]: {_ID: ID}

[_]: S={
	compose?: sch.#DockerCompose & {
		services?: _AssignIDs
		services?: [Name=_]: {
			container_name: *"\(S.compose.name)-\(Name)" | _
			restart: *"unless-stopped" | _
		}

		volumes?: _AssignIDs
		volumes?: [Name=_]: {
			name: *"\(S.compose.name)_\(Name)" | _
		}

		networks?: _AssignIDs
		networks?: [Name=_]: {
			name: *"\(S.compose.name)_\(Name)" | _
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
