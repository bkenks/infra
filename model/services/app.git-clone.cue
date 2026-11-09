package services

import (
	"strings"
)

_git_clone: {
	version:  "v2.49.1"
	repoName: "infra"
	repoUrl:  "https://github.com/bkenks/\(repoName).git"

	volumes: {
		repos: {
			type:   "bind"
			source: "/volume1/repos"
			target: "/repos"
		}
	}

	_dest: "\(volumes.repos.target)/\(repoName)"
	_tmp:  "\(volumes.repos.target)/.\(repoName).tmp"

	// Clone into a temp dir first; the old repo is only removed after
	// the clone succeeds. tmp sits on the same mount so mv is a rename.
	script: strings.Join([
		"set -e",
		"rm -rf \(_tmp)",
		"git clone --depth 1 \(repoUrl) \(_tmp)",
		"rm -rf \(_dest)",
		"mv \(_tmp) \(_dest)",
	], " && ")
}

git_clone: {
	compose: S={
		name: "git-clone"

		services: git: {
			image:          "docker.io/alpine/git:\(_git_clone.version)"
			container_name: S.name
			restart:        "no"
			entrypoint: ["/bin/sh", "-c"]
			command: [_git_clone.script]
			volumes: [_git_clone.volumes.repos]
		}
	}
}
