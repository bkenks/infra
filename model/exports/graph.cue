package exports

import (
	"github.com/bkenks/infra/model/externals"
	"github.com/bkenks/infra/model/inventory"
	svc "github.com/bkenks/infra/model/services"
)

// Stacks that are deployed but not modeled in CUE (hand-written compose
// under ops/services/, deployed by Komodo). Listed here so store/graph.yml
// stays complete. Prefer modeling stacks in CUE over adding entries here.
unmanagedStacks: {
	frappe: {
		manager: "komodo"
		targets: ["bill"]
		run_directory: "ops/services/frappe"
	}
}

// Membership validation: `cue vet -c` fails if any stack's deploy target
// is not an inventory host. (Not part of the exported graph.)
_hostSet: close({for n, _ in inventory.hosts {(n): true}})

_checkDeployTargets: {
	for _, s in svc
	if s.deploy != _|_ {
		for t in s.deploy.targets {
			(t): true
		}
	}
} & _hostSet

_stacks: {
	for key, s in svc {
		(key): {
			if s.compose != _|_ {
				name:          s.compose.name
				run_directory: "ops/services/out/\(s.compose.name)"
			}
			if s.compose == _|_ {
				name: key
			}
			modeled: true
			if s.compose != _|_ if s.compose.services != _|_ {
				services: [for _, v in s.compose.services {v.container_name}]
			}
			if s.compose != _|_ if s.compose.networks != _|_ {
				networks: [for _, v in s.compose.networks {v.name}]
			}
			if s.deploy != _|_ {
				manager: s.deploy.manager
				hosts:   s.deploy.targets
				if s.deploy.per_host != _|_ {
					per_host: s.deploy.per_host
				}
				if s.deploy.per_host == _|_ {
					per_host: false
				}
			}
			if s.deploy == _|_ {
				manager: "none"
				hosts: []
			}
			if s.notes != _|_ {
				notes: s.notes
			}
		}
	}

	for key, u in unmanagedStacks {
		(key): {
			name:          key
			modeled:       false
			manager:       u.manager
			hosts:         u.targets
			run_directory: u.run_directory
		}
	}
}

graph: {
	version: 1

	meta: {
		description: "Machine-readable map of the infrastructure, generated from model/ (CUE). Read this first for any infra task. Never edit this file — edit the model and re-render."
		regenerate:  "mise run cue:render"
		legend:      "docs/legend.md"
	}

	hosts: {
		for n, h in inventory.hosts {
			(n): {
				fqdn: h.fqdn
				kind: h.kind
				os:   h.os
				arch: h.arch
				if h.roles != _|_ {
					roles: h.roles
				}
				if h.site != _|_ {
					site: h.site
				}
				if h.provider != _|_ {
					provider: h.provider
				}
			}
		}
	}

	networks: {
		for _, n in externals.dockerNetworks {
			(n.name): {subnet: n.subnet}
		}
	}

	stacks: _stacks

	// NOTE: flattened single comprehensions (multi-clause) are used here on
	// purpose — nesting a list-binding comprehension inside another
	// comprehension triggers a CUE evaluator conflict (0.17.1).
	relations: [
		for _, s in _stacks
		if s.manager != "none"
		for h in s.hosts {
			{
				type:  "deployed_on"
				stack: s.name
				host:  h
				if s.per_host != _|_ if s.per_host {
					per_instance: true
				}
			}
		},

		for _, s in _stacks
		if s.modeled
		if s.networks != _|_
		for n in s.networks
		if graph.networks[n] != _|_ {
			{
				type:    "on_network"
				stack:   s.name
				network: n
			}
		},
	]
}
