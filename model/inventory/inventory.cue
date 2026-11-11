package inventory

import (
	"github.com/bkenks/infra/model/schema"
)

hosts: schema.#Hosts & {
	littlebuddy: schema.#Host & {
		kuid: "000-015"
		fqdn: "littlebuddy.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.control_plane]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	bill: schema.#Host & {
		kuid: "000-02A"
		fqdn: "bill.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	paiki: schema.#Host & {
		kuid: "000-03F"
		fqdn: "paiki.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.media]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	pango: schema.#Host & {
		kuid: "000-0CX"
		fqdn: "pango.lan"
		kind: schema.#Kind.vm
		roles: [schema.#Role.edge]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	blip: schema.#Host & {
		kuid: "000-0D3"
		fqdn: "blip.lan"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	chad: schema.#Host & {
		kuid: "000-0BR"
		fqdn: "chad.lan"
		kind: schema.#Kind.vm
		roles: [schema.#Role.edge, schema.#Role.mesh]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}
}
