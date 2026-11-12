package services

import (
	sch "github.com/bkenks/infra/model/schema"
)

_AssignIDs: [ID=_]: {_ID: ID}

// Validation that deploy targets are real inventory hosts lives in
// model/exports/graph.cue (_checkDeployTargets) — an or()-over-data
// disjunction here breaks value binding in nested comprehensions (known
// CUE limitation), so targets stay plain strings with a `close()` check.

[_]: S={
	compose?: sch.#DockerCompose & {
		services?: _AssignIDs
		services?: [Name=_]: {
			container_name: *"\(S.compose.name)-\(Name)" | _
			restart:        *"unless-stopped" | _
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

	// Deployment intent: where and how this stack runs. This feeds
	// store/graph.yml, the machine-readable map read by AI agents.
	// Keep it correct here — not in Komodo's UI.
	deploy?: {
		manager!: *"komodo" | "ansible"

		// Hosts this stack runs on. Must be names from model/inventory.
		targets!: [...string]

		// true: one instance per target host (log agents, mesh connectors).
		per_host?: *false | true
	}

	// Free-form context for humans and AI agents: purpose, links, quirks.
	notes?: string
}
