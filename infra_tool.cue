package infra

import (
	"encoding/yaml"
	"list"
	"path"
	"strings"
	"tool/exec"
	"tool/file"

	m "github.com/bkenks/infra/model/stack:model"
)

command: render: {
	repoRoot: exec.Run & {
		cmd: ["git", "rev-parse", "--show-toplevel"]
		stdout: string
		root:   strings.TrimSpace(stdout)
	}

	stackFiles: file.Glob & {
		glob: path.Join([repoRoot.root, "model", "stack", "*.cue"])
	}

	storeNetworks: file.Create & {
		filename: path.Join([repoRoot.root, "store", "networks.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			docker_networks: [for name, _ in m.#SharedNetworks {name}]
		})
	}

	storePaths: file.Create & {
		filename: path.Join([repoRoot.root, "store", "paths.yml"])
		contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal({
			docker_root:        m.#Dir.docker.root
			docker_files:       m.#Dir.docker.files
			docker_stacks:      m.#Dir.docker.stacks
			docker_bind_mounts: m.#Dir.docker.bindMounts
		})
	}

	for stackFile in stackFiles.files {
		let segments = strings.Split(strings.TrimSuffix(path.Base(stackFile), ".cue"), ".")
		let stackName = segments[len(segments)-1]
		let deployDir = path.Join(list.Concat([[repoRoot.root, "ops", "services", "stack"], segments]))

		(stackName): {
			mkdir: file.MkdirAll & {
				path: deployDir
			}
			write: file.Create & {
				$after: mkdir
				filename: path.Join([deployDir, "compose.yaml"])
				contents: "# GENERATED from CUE — DO NOT EDIT.\n" + yaml.Marshal(m.stacks[stackName])
			}
		}
	}
}
