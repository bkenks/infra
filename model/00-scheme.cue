package infra

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
