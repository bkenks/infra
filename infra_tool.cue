package infra

import (
	"encoding/yaml"
	"path"
	"strings"
	"tool/exec"
	"tool/file"

	"github.com/bkenks/infra/model/common"
	"github.com/bkenks/infra/model/service"
	"github.com/bkenks/infra/model/export"
)

command: render: {
	repoRoot: exec.Run & {
		cmd: ["git", "rev-parse", "--show-toplevel"]
		stdout: string
		root:   strings.TrimSpace(stdout)
	}

	storeNetworks: file.Create & {
		filename: path.Join([repoRoot.root, "store", "networks.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			docker_networks: [for name, _ in service.#Network {name}]
		})
	}

	storeHosts: file.Create & {
		filename: path.Join([repoRoot.root, "store", "hosts.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal(export.ansible)
	}

	storePaths: file.Create & {
		let dir = common.directory.server
		filename: path.Join([repoRoot.root, "store", "paths.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal(dir)
	}

	let outDir = path.Join([repoRoot.root, "ops", "services", "out"])

	// out/ holds only generated stacks; wipe it so stacks removed from CUE are pruned.
	clean: file.RemoveAll & {
		path: outDir
	}

	// Each stack renders to <name>/compose.yaml. Stub stacks without services are not
	// valid Compose files yet.
	stacks: {
		for stackKey, stack in service if len(stack.services) > 0 {
			let deployDir = path.Join([outDir, stack.name])

			(stackKey): {
				mkdir: file.MkdirAll & {
					$after: clean
					path:   deployDir
				}
				write: file.Create & {
					$after: mkdir
					filename: path.Join([deployDir, "compose.yaml"])
					contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal(stack)
				}
			}
		}
	}
}
