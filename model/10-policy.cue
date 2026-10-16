package infra

import "cue.dev/x/dockercompose"

#Compose: dockercompose.#Schema & {
	let validNetworks = [
		for name, _ in Networks {name}
	]

	appName=name!: string

	services: [s=_]: {
		_self: s

		container_name: *"\(appName)-\(s)" | string
		restart:        *"unless-stopped" | string
		logging: *{driver: "json-file", options: "max-size": "10m"} | {...}
		networks?: [...or(validNetworks)]
	}
	Networks=networks: [n=_]: {
		_self: n
		name:  *"\(appName)_\(n)" | string
	}
	networks: default: name: appName
	volumes: [v=_]: {
		_self: v
		name:  *"\(appName)_\(v)" | string
	}

}

stacks: [stackName=_]: #Compose & {name: stackName}
