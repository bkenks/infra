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

	serviceFiles: file.Glob & {
		glob: path.Join([repoRoot.root, "model", "service", "*.*.cue"])
	}

	storeNetworks: file.Create & {
		filename: path.Join([repoRoot.root, "store", "networks.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			docker_networks: [for name, _ in svc.#Network {name}]
		})
	}

	storePaths: file.Create & {
		let dir = inv.common.directory.server
		filename: path.Join([repoRoot.root, "store", "paths.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			docker_root:        dir.docker_share
			docker_files:       dir.docker_files
			docker_stacks:      dir.docker_stacks
			docker_bind_mounts: dir.docker_bindmounts
		})
	}

	// "<category>.<part>[.<part>...].cue" holds the stack keyed by the parts
	// joined with "_" ("-" as "_"). It renders to stack/<category>/<name>/.
	let categories = {
		for serviceFile in serviceFiles.files {
			let segments = strings.SplitN(strings.TrimSuffix(path.Base(serviceFile), ".cue"), ".", 2)
			(strings.Replace(strings.Replace(segments[1], ".", "_", -1), "-", "_", -1)): segments[0]
		}
	}

	// Stub stacks without services are not valid Compose files yet.
	stacks: {
		for stackKey, stack in svc if len(stack.services) > 0 {
			let deployDir = path.Join([repoRoot.root, "ops", "services", "stack", categories[stackKey], stack.name])

			(stackKey): {
				mkdir: file.MkdirAll & {
					$after: serviceFiles
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
