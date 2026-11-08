package inventory

import (
	"github.com/bkenks/infra/model/schema"
)

hosts: schema.#Hosts
hosts: {
	"000-015": schema.#Host & {
		fqdn: "000-015.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.control_plane]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	"000-02A": schema.#Host & {
		fqdn: "000-02A.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	"000-03F": schema.#Host & {
		fqdn: "000-03F.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.media]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	pango: schema.#Host & {
		fqdn: "pango.lan"
		kind: schema.#Kind.vm
		roles: [schema.#Role.edge]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	blip: schema.#Host & {
		fqdn: "blip.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}
}
