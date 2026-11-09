package services

import (
	snip "github.com/bkenks/infra/model/services/snippets"
)

arcane: D={
	compose: C={
		name: "arcane"

		services: arcane: {
			_port:        3552
			_projectsDir: "/projects"

			image:          "ghcr.io/getarcaneapp/manager:latest"
			container_name: "arcane"
			ports: ["\(_port):\(_port)"]
			volumes: [
				snip.services.volumes.dockerSock,
				"\(C.volumes.data._ID):/app/data",
				"\(C.volumes.projects._ID):\(_projectsDir)",
			]
			environment: {
				APP_URL:            "http://localhost:\(_port)"
				PUID:               1000
				PGID:               1000
				ENCRYPTION_KEY:     "${\(D.fnox.secrets.ENCRYPTION_KEY._ID):?err}"
				PROJECTS_DIRECTORY: _projectsDir
			}
			cgroup: "host"
		}
		volumes: {
			data: name:     "arcane_data"
			projects: name: "arcane_projects"
		}
	}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:         D.fnox.providers.onepassword._ID
			ENCRYPTION_KEY: value: "arcane/ENCRYPTION_KEY"
		}
	}
}
