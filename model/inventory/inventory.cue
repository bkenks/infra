package inventory

import (
	scma "github.com/bkenks/infra/model/schema"
)

hosts: scma.#Hosts
hosts: {
	"000-015": scma.#Host & {
		fqdn: "000-015.lan"
		kind: scma.#Kind.physical
		roles: [scma.#Role.control_plane]
		os:   scma.#OS.ubuntu
		arch: scma.#Arch.amd64
	}

	"000-02A": scma.#Host & {
		fqdn: "000-02A.lan"
		kind: scma.#Kind.physical
		roles: [scma.#Role.apps]
		os:   scma.#OS.ubuntu
		arch: scma.#Arch.amd64
	}

	"000-03F": scma.#Host & {
		fqdn: "000-03F.lan"
		kind: scma.#Kind.physical
		roles: [scma.#Role.media]
		os:   scma.#OS.ubuntu
		arch: scma.#Arch.amd64
	}

	pango: scma.#Host & {
		fqdn: "pango.lan"
		kind: scma.#Kind.vm
		roles: [scma.#Role.edge]
		os:   scma.#OS.ubuntu
		arch: scma.#Arch.amd64
	}
}
