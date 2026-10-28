package schema

import {
	"net"
	"strings"
}

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

// ——————————————————————————————————————————————————————————————————————————————————————————————————
// #Domain is a multi-label domain name such as "example.com" or
// "nas.home.arpa". It narrows net.FQDN, which also accepts single
// labels ("localhost") and IP addresses ("192.168.1.1").
//
// net.FQDN validates label syntax. The regex then requires the name
// to end in a letters-only TLD:
//
//      \.          a literal dot before the TLD
//      [A-Za-z]    one ASCII letter
//      {2,63}      2 to 63 letters (63 is the max DNS label length)
//      \.?         optional trailing dot, for root form "example.com."
//      $           end of string
//
// The regex has no ^ anchor, so it checks only the end of the name.
//
// Accepted: "example.com", "sub.example.com", "example.com."
// Rejected: "nas", "192.168.1.1", "example.c", "example.123"
#Domain: net.FQDN & =~#"\.[A-Za-z]{2,63}\.?$"#

// ——————————————————————————————————————————————————————————————————————————————————————————————————
// #URI is a network address built from its parts, such as
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
#URI: {
	scheme:    =~#"^[A-Za-z][A-Za-z0-9+.\-]*$"#
	host:      string
	port?:     int & >0 & <=65535
	path:      *"" | #AbsPath
	query?:    string
	fragment?: string

	uri: strings.Join([
		"\(scheme)://",
		host,
		if port != _|_ {":\(port)"},
		path,
		if query != _|_ {"?\(query)"},
		if fragment != _|_ {"#\(fragment)"},
	], "")
}

#Route: {
	// network: #Network // where the client is
	entry:   #URI     // what the client types/hits
	// via?: [...#Hop]

	// // —————————————————————————
	// #Network: "localhost" | "lan" | "vpn" | "internet"
	// #Hop: {
	// 	kind: "reverse-proxy" | "tunnel"
	// 	name: string
	// 	to:   #URI // where this hop forwards traffic
	// }
}

#Host: {
	name:  string
	fqdn?: net.FQDN
	addresses?: {
		lan?:    net.IPv4
		vpn?:    net.IP
		public?: net.IP
	}
	os:      "ubuntu" | "debian" | "truenas" | "proxmox" | string
	arch:    "amd64" | "arm64"
	// roles: [...string] // e.g. "docker", "storage", "proxy"
}