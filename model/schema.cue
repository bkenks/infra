package model

import "cue.dev/x/dockercompose"

#Endpoint: {
	scheme?:
		// Web
		"http" | "https" | "ws" | "wss" |
		// Databases
		"postgresql" | "mysql" | "mongodb" | "redis" |
		// Mail
		"smtp" | "smtps" |
		// Storage
		"s3" |
		// SSH
		"ssh" | "sftp"
	userInfo?: {
		user!:     string
		password?: string
	}
	host!: string
	port?: string | int
	path?: =~"^/" // path must have leading forward slash

	_fmtdScheme:   *"\(scheme)://" | ""
	_fmtdPort:     *":\(port)" | ""
	_fmtdPath:     *path | ""
	_fmtdUserInfo: string | *""
	if userInfo != _|_ {
		_fmtdUserInfo: *"\(userInfo.user):\(userInfo.password)@" | "\(userInfo.user)@"
	}
	uri: "\(_fmtdScheme)\(_fmtdUserInfo)\(host)\(_fmtdPort)\(_fmtdPath)"
}

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
