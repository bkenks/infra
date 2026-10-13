package stacks

import c "github.com/bkenks/infra/docker/schema/compose"

#Stack: c.#Compose & {
	P=name!: string
	services: [Svc=string]: {
		[K=!~c.#serviceKeys & !~"^x-"]: error("\(K) is not a Compose service key")
		_ref:                           Svc
		container_name:                 *"\(P)-\(Svc)" | string
		restart:                        *"unless-stopped" | _
		logging: *{driver: "json-file", options: "max-size": "10m"} | _
		environment?: {...}
		depends_on?: {...}
		networks?: [...or([for net, _ in Networks {net}]) | error("service network must be a key of the stack networks")]
	}
	Networks=networks: default: name: P
	networks: [Net=string]: {
		name: *"\(P)_\(Net)" | string
		_ref: Net
	}
	volumes?: [Vol=string]: {
		name: *"\(P)_\(Vol)" | string
		_ref: Vol
	}
}

stacks: [Name=string]: #Stack & {name: Name}
