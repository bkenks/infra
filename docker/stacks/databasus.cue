package stacks

_databasus: version: "latest"

stacks: databasus: S={
	services: app: {
		image:        "databasus/databasus:\(_databasus.version)"
		network_mode: "host"
		environment: SECRET_KEY: "${SECRET_KEY:?err}"
		pre_start: [{
			image: "alpine:3.20"
			command: ["sh", "-c", "umask 077; printf %s \"$$SECRET_KEY\" > /databasus-data/secret.key"]
		}]
		ports: ["4005:4005"]
		volumes: ["\(S.volumes.data._ref):/databasus-data"]
	}
	volumes: data: name: "databasus-app_data"
}
