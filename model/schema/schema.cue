package schema

import (
	"net"
	"strings"
)

// ——————————————————————————————————————————————————————————————————————————————————————————————————
// #Path is a Unix file or directory path, absolute or relative,
// such as "/srv/app data/config.yml" or "./data". Unix allows any
// character except NUL, so only empty strings and NUL are rejected.
#Path: string & !="" & !~"\u0000"

// #AbsPath is a #Path that starts at the root ("/").
//
// Accepted: "/", "/opt/immich/", "/home/brian/.config"
// Rejected: "data/x", "./data"
#AbsPath: #Path & =~"^/"

#URIScheme: Sch={
	#enum: or([for v in Sch {v}])

	// web
	http:  "http://"
	https: "https://"
	ws:    "ws://"
	wss:   "wss://"
	// file transfer
	ftp:  "ftp://"
	sftp: "sftp://"
	file: "file://"
	s3:   "s3://"
	// remote access
	ssh: "ssh://"
	git: "git://"
	// databases
	postgres:    "postgres://"
	postgresql:  "postgresql://"
	mysql:       "mysql://"
	mongodb:     "mongodb://"
	mongodb_srv: "mongodb+srv://"
	redis:       "redis://"
	rediss:      "rediss://"
	// messaging
	amqp:  "amqp://"
	amqps: "amqps://"
	mqtt:  "mqtt://"
	kafka: "kafka://"
	// no authority
	mailto: "mailto:"
	tel:    "tel:"
	urn:    "urn:"
	data:   "data:"
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————
// #URIComponents is a network address built from its parts, such as
// "https://example.com:8443/api?x=1#top". Set the parts and read the
// assembled string from uri.
//
// scheme must start with a letter, followed by letters, digits, "+",
// "." or "-" (RFC 3986):
//
//      ^           start of string
//      [A-Za-z]    one ASCII letter
//      [A-Za-z0-9+.\-]*  any number of letters, digits, "+", "." or "-"
//      $           end of string
//
// Fields:
//
//      scheme     protocol, e.g. "https", "postgres"
//      host       domain or IP the client connects to
//      port       optional, 1 to 65535; omitted means the scheme default
//      path       defaults to ""; otherwise must start with "/"
//      query      optional, without the leading "?"
//      fragment   optional, without the leading "#"
//
// uri joins the parts in order. Optional parts that are not set add
// nothing, along with their separator.
//
// Example:
//
//      {scheme: "https", host: "example.com"}
//        uri: "https://example.com"
//
//      {scheme: "https", host: "example.com", port: 8443, path: "/api", query: "x=1", fragment: "top"}
//        uri: "https://example.com:8443/api?x=1#top"
#URIComponents: {
	scheme?:   #URIScheme.#enum
	host!:     string
	port?:     int & >0 & <=65535
	path?:     string
	query?:    string
	fragment?: string

	uri: strings.Join([
		if scheme != _|_ {"\(scheme)"},
		host,
		if port != _|_ {":\(port)"},
		if path != _|_ {"/\(path)"},
		if query != _|_ {"?\(query)"},
		if fragment != _|_ {"#\(fragment)"},
	], "")
}

#URL: #URIComponents & {
	scheme!: _
	uri:     net.AbsURL
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————
#Route: {
	public?:    #URL
	private?:   #URL
	internal?:  #URL
	localhost?: #URL
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————
#Host: {
	name:      string
	site?:     #Site.#enum
	provider?: #Provider.#enum
	fqdn:      net.FQDN
	addresses?: {
		lan?:    net.IPv4
		vpn?:    net.IP
		public?: net.IP
	}
	os:   #OS.#enum
	kind: #Kind.#enum
	arch: #Arch.#enum
	roles?: [...#Role.#enum]
}

#Hosts: [Name=string]: #Host & {name: Name}

// —————————————————————————
#Arch: A={
	#enum: or([for v in A {v}])
	amd64: "amd64"
	arm64: "arm64"
}

#Kind: K={
	#enum: or([for v in K {v}])
	physical: "physical"
	vm:       "vm"
}

#OS: OS={
	#enum: or([for v in OS {v}])
	ubuntu:  "ubuntu"
	debian:  "debian"
	proxmox: "proxmox"
}

#Provider: P={
	#enum: or([for v in P {v}])
	home:  "home"
	vultr: "vultr"
}

#Site: S={
	#enum: or([for v in S {v}])
	cvg: "cvg"
	ord: "ord"
}

#Role: R={
	#enum: or([for v in R {v}])
	control_plane: "control_plane"
	nas:           "nas"
	media:         "media"
	edge:          "edge"
	apps:          "apps"
}
