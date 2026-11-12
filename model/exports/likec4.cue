package exports

import (
	"strings"

	"github.com/bkenks/infra/model/inventory"
)

// LikeC4 diagram generated from the same model data as store/graph.yml.
// Humans explore this in the LikeC4 UI (`mise run likec4`); agents read
// store/graph.yml instead. DSL reference:
// node_modules/likec4/skills/likec4-dsl/references/
//
// CUE gotcha: only flattened comprehensions here — nested list-binding
// comprehensions break the evaluator (see model/AGENTS.md).

// Stacks deployed on each host, derived from the relation edges.
_byHost: {
	for n, _ in inventory.hosts {
		(n): {}
	}
	for r in graph.relations if r.type == "deployed_on" {
		(r.host): (r.stack): true
	}
}

likec4: strings.Join([
	"// GENERATED from CUE — DO NOT EDIT."
	"// Rendered from the same model as store/graph.yml."
	"specification {"
	"\telement host"
	"\telement stack"
	"\telement network"
	"}"
	""
	"model {"
	for n, h in inventory.hosts {
		"\(n) = host \"\(n)\" {\n\ttechnology \"\(h.os) · \(h.kind)\"\n}"
	}
	for _, s in _stacks {
		"\(s.name) = stack \"\(s.name)\" {\n\ttechnology \"\(s.manager)\"\n}"
	}
	for key, n in graph.networks {
		"\(key) = network \"\(key)\" {\n\ttechnology \"\(n.subnet)\"\n}"
	}
	for r in graph.relations if r.type == "deployed_on" {
		"\(r.stack) -> \(r.host) \"runs on\""
	}
	for r in graph.relations if r.type == "on_network" {
		"\(r.stack) -> \(r.network) \"attached\""
	}
	"}"
	""
	"views {"
	"view index {"
	"\ttitle \"Infrastructure\""
	"\tinclude *"
	"\tautoLayout LeftRight"
	"}"
	for n, _ in inventory.hosts {
		let inc = strings.Join([for k, _ in _byHost[n] {k}], ", ")
		let prefix = [if inc == "" {""}, if inc != "" {", \(inc)"}][0]
		"view host-\(n) {\n\ttitle \"\(n)\"\n\tinclude \(n)\(prefix)\n\tautoLayout TopBottom\n}"
	}
	"}"
], "\n")
