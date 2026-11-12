package infra

import (
	"path"
	"strings"
	"encoding/yaml"
	"encoding/toml"
	"tool/file"
	"tool/exec"

	ext "github.com/bkenks/infra/model/externals"
	svc "github.com/bkenks/infra/model/services"
	exp "github.com/bkenks/infra/model/exports"
)

cueHeader: "# GENERATED from CUE — DO NOT EDIT.\n"

command: render: {
	repoRoot: exec.Run & {
		cmd: ["git", "rev-parse", "--show-toplevel"]
		stdout:  string
		absPath: strings.TrimSpace(stdout)
	}

	out: {
		files: {
			networks: {name: "networks.yml", absPath: path.Join([store.absPath, name])}
			hosts: {name: "hosts.yml", absPath: path.Join([store.absPath, name])}
			paths: {name: "paths.yml", absPath: path.Join([store.absPath, name])}
			graph: {name: "graph.yml", absPath: path.Join([store.absPath, name])}
		}

		store: {name: "store", absPath: path.Join([repoRoot.absPath, name])}

		services: {absPath: path.Join([repoRoot.absPath, "ops", "services", "out"])}
	}

	storeNetworks: file.Create & {
		filename: out.files.networks.absPath
		contents: cueHeader + yaml.Marshal({
			docker_networks: [for _, n in ext.dockerNetworks {n.asNew}]
		})
	}

	storeHosts: file.Create & {
		filename: out.files.hosts.absPath
		contents: cueHeader + yaml.Marshal(exp.ansible)
	}

	storePaths: file.Create & {
		let dir = ext.dirs.host
		filename: out.files.paths.absPath
		contents: cueHeader + yaml.Marshal(dir)
	}

	// The machine-readable infra map AI agents read. Derived entirely from
	// the model — hosts from inventory, deploy info from each stack's
	// `deploy` field.
	storeGraph: file.Create & {
		filename: out.files.graph.absPath
		contents: cueHeader + yaml.Marshal(exp.graph)
	}

	// The same map as an explorable LikeC4 diagram for humans.
	diagrams: {name: "diagrams", absPath: path.Join([repoRoot.absPath, "docs", name])}

	diagramMkdir: file.MkdirAll & {
		path: diagrams.absPath
	}

	diagramLikec4: file.Create & {
		$after: diagramMkdir
		filename: path.Join([diagrams.absPath, "infra.likec4"])
		contents: exp.likec4
	}

	let outSvc = out.services.absPath

	// out/ holds only generated stacks; wipe it so stacks removed from CUE are pruned.
	clean: file.RemoveAll & {
		path: outSvc
	}

	// Each stack renders to <compose.name>/. Stub stacks without services are
	// not valid Compose files yet.
	stacks: {
		for stackKey, stack in svc {
			let outStk = path.Join([outSvc, stack.compose.name])

			(stackKey): {
				mkdir: file.MkdirAll & {
					$after: clean
					path:   outStk
				}
				if stack.compose.services != _|_ if len(stack.compose.services) > 0 {
					writeCompose: file.Create & {
						$after: mkdir
						filename: path.Join([outStk, "compose.yaml"])
						contents: cueHeader + yaml.Marshal(stack.compose)
					}
				}
				if stack.fnox != _|_ if len(stack.fnox) > 0 {
					writeFnox: file.Create & {
						$after: mkdir
						filename: path.Join([outStk, "fnox.toml"])
						contents: cueHeader + toml.Marshal(stack.fnox)
					}
				}

				// Each entry in stack.files is one generated file. Stacks own
				// their file list, so adding or dropping an output (fnox.toml,
				// configs, ...) is a model change, not a tool change.
				if stack.files != _|_ if len(stack.files) > 0 {
					for fpath, fv in stack.files {
						("write_" + fpath): file.Create & {
							$after: mkdir
							filename: path.Join([outStk, fpath])
							contents: cueHeader + [
								if fv.format == "toml" {toml.Marshal(fv.contents)},
								if fv.format != "toml" {yaml.Marshal(fv.contents)},
							][0]
						}
					}
				}
			}
		}
	}
}
