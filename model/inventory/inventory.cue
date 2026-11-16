package inventory

import (
	"github.com/bkenks/infra/model/schema"
	ext "github.com/bkenks/infra/model/externals"
)

hosts: schema.#Hosts & {
	[_]: H={fqdn: "\(H.kuid).\(ext.domains.lanKtbInternal)"}

	littlebuddy: schema.#Host & {
		kuid: "000-015"
		kind: schema.#Kind.physical
		roles: [schema.#Role.control_plane]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	bill: schema.#Host & {
		kuid: "000-02a"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	paiki: schema.#Host & {
		kuid: "000-03f"
		kind: schema.#Kind.physical
		roles: [schema.#Role.media]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	pango: schema.#Host & {
		kuid: "000-0cx"
		kind: schema.#Kind.vm
		roles: [schema.#Role.edge]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}

	blip: schema.#Host & {
		kuid: "000-0d3"
		kind: schema.#Kind.physical
		roles: [schema.#Role.apps]
		os:   schema.#OS.ubuntu
		arch: schema.#Arch.amd64
	}
}
