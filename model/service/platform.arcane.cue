package service

import "github.com/bkenks/infra/model/schema"

arcane: {
	volumes: {
		data: {
			source: "arcane-data"
			mount: "/app/data"
		}
	}

	compose: {
		services: arcane: {
			image:          "ghcr.io/getarcaneapp/manager:latest"
			container_name: "arcane"
			ports: ["3552:3552"]
			volumes: [
				"/var/run/docker.sock:/var/run/docker.sock",
				"arcane-data:/app/data",
				"/opt/docker:/opt/docker",
			]
			environment: [
				"APP_URL=http://localhost:3552",
				"PUID=1000",
				"PGID=1000",
				"ENCRYPTION_KEY=<your-encryption-key>",
				"PROJECTS_DIRECTORY=/opt/docker",
			]
			cgroup:  "host"
			restart: "unless-stopped"
		}

		volumes: "arcane-data": null
	}
}
