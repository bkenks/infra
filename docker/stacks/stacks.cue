package stack

import c "github.com/bkenks/infra/docker/schema/compose"

stack: c.#Compose
stack: {
	name!: string
	services: [Svc=string]: {
		container_name: *"\(stack.name)-\(Svc)" | string
		restart:        *"unless-stopped" | _
		logging: *{driver: "json-file", options: "max-size": "10m"} | _
	}
	networks: default: name: stack.name
	networks: [Net=string]: {
		name: *"\(stack.name)_\(Net)" | string
		_ref: Net
	}
	volumes?: [Vol=string]: {
		name: *"\(stack.name)_\(Vol)" | string
		_ref: Vol
	}
}
