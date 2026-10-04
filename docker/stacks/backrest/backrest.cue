package stack

_backrest: version: "v1.14.1"

stack: {
	name: "backrest"
	services: app: {
		hostname: stack.name
		image:    "ghcr.io/garethgeorge/backrest:\(_backrest.version)"
		environment: {
			BACKREST_DATA:   "/data"
			BACKREST_CONFIG: "/config/config.json"
			XDG_CACHE_HOME:  "/cache"
			TMPDIR:          "/tmp"
			TZ:              "America/New_York"
		}
		volumes: [
			"\(stack.volumes.data._ref):/data",
			"\(stack.volumes.config._ref):/config",
			"\(stack.volumes.cache._ref):/cache",
			"\(stack.volumes.tmp._ref):/tmp",
			"\(stack.volumes.rclone._ref):/root/.config/rclone",
			"/var/lib/docker/volumes:/userdata",
		]
	}
	volumes: {for vol in ["data", "config", "cache", "tmp", "rclone"] {
		(vol): name: "backrest-app_\(vol)"
	}}
}
