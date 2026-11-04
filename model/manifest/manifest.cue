package manifest

import (
	"path"
	"tool/exec"
)

Paths: {
	repo_root: {
		_cmd: exec.Run & {
			cmd: ["git", "rev-parse", "--show-toplevel"]
			stdout: string
		}

		absPath: strings.TrimSpace(_cmd.stdout)
	}

	out: {
		files: {
			networks: {name: "networks.yml", absPath: path.Join([store.absPath, name])}
			hosts: {name: "hosts.yml", absPath: path.Join([store.absPath, name])}
			paths: {name: "paths.yml", absPath: path.Join([store.absPath, name])}
		}

		store: {name: "store", absPath: path.Join([repo_root.absPath, name])}

		services: {absPath: path.Join([repo_root.absPath, "ops", "services", "out"])}
	}
}
