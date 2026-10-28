package infra

import (
	"encoding/yaml"
	"path"
	"strings"
	"tool/exec"
	"tool/file"

	inv "github.com/bkenks/infra/model/inventory"
	svc "github.com/bkenks/infra/model/service"
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
			docker_networks: [for name, _ in svc.#Network {name}]
		})
	}

	storeHosts: file.Create & {
		filename: path.Join([repoRoot.root, "store", "hosts.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			for host, detail in inv.hosts {
				(host): detail.fqdn
			}
		})
	}

	storePaths: file.Create & {
		let dir = inv.common.directory.server
		filename: path.Join([repoRoot.root, "store", "paths.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal(dir)
	}

	// Each stack renders to stack/<name>/. Stub stacks without services are not
	// valid Compose files yet.
	stacks: {
		for stackKey, stack in svc if len(stack.services) > 0 {
			let deployDir = path.Join([repoRoot.root, "ops", "services", "stack", stack.name])

			(stackKey): {
				mkdir: file.MkdirAll & {
					path: deployDir
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
