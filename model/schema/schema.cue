package schema

import (
	"net"
	dc "cue.dev/x/dockercompose"
	"github.com/bkenks/infra/model/schema/encoding"
)

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

// ——————————————————————————————————————————————————————————————————————————————————————————————————
_AssignIDs: [ID=_]: {_ID: ID}

#DockerCompose: dc.#Schema & {
	name!: encoding.#Kebab

	networks: {
		[string]: {
			name!: string
		}
	}

	volumes: {
		[string]: {
			name!: string
		}
	}

	services: {
		[string]: {
			container_name!: encoding.#Kebab
			restart:         *"unless-stopped" | string
		}
	}
}
