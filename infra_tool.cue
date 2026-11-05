package infra

import (
	"path"
	"strings"
	"encoding/yaml"
	"encoding/toml"
	"tool/file"
	"tool/exec"

	cmn "github.com/bkenks/infra/model/common"
	svc "github.com/bkenks/infra/model/service"
	exp "github.com/bkenks/infra/model/export"
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
		}

		store: {name: "store", absPath: path.Join([repoRoot.absPath, name])}

		services: {absPath: path.Join([repoRoot.absPath, "ops", "services", "out"])}
	}

	storeNetworks: file.Create & {
		filename: out.files.networks.absPath
		contents: cueHeader + yaml.Marshal({
			docker_networks: [for _, n in svc.#Networks {n.asNew}]
		})
	}

	storeHosts: file.Create & {
		filename: out.files.hosts.absPath
		contents: cueHeader + yaml.Marshal(exp.ansible)
	}

	storePaths: file.Create & {
		let dir = cmn.directory.server
		filename: out.files.paths.absPath
		contents: cueHeader + yaml.Marshal(dir)
	}

	let outSvc = out.services.absPath

	// out/ holds only generated stacks; wipe it so stacks removed from CUE are pruned.
	clean: file.RemoveAll & {
		path: outSvc
	}

	// Each stack renders to <name>/compose.yaml. Stub stacks without services are not
	// valid Compose files yet.
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
				let _fx = {secrets: *{} | _, profiles: *{} | _} & stack.fnox
				if len(_fx.secrets) > 0 || len(_fx.profiles) > 0 {
					writeFnox: file.Create & {
						$after: mkdir
						filename: path.Join([outStk, "fnox.toml"])
						contents: cueHeader + toml.Marshal(stack.fnox)
					}
				}
				if stack.files != _|_ if len(stack.files) > 0 {
					for _, fv in stack.files {
						("write" + fv.name): file.Create & {
							$after: mkdir
							filename: path.Join([outStk, fv.name])
							contents: cueHeader + fv.out
						}}
				}
			}
		}
	}
}
