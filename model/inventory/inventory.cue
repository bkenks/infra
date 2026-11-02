package inventory

import (
	"net"
	scma "github.com/bkenks/infra/model/schema"
)

hosts: scma.#Hosts
hosts: {
	core01: _defaultHomeHost & {
		kind:  scma.#Kind.physical
		roles: scma.#Role.control_plane
		os:    scma.#OS.ubuntu
		arch:  scma.#Arch.amd64
	}

	apps01: _defaultHomeHost & {
		kind:  scma.#Kind.physical
		roles: scma.#Role.apps
		os:    scma.#OS.ubuntu
		arch:  scma.#Arch.amd64
	}

	media01: _defaultHomeHost & {
		kind:  scma.#Kind.physical
		roles: scma.#Role.media
		os:    scma.#OS.ubuntu
		arch:  scma.#Arch.amd64
	}

	edge01: scma.#Host & {
		kind:  scma.#Kind.vm
		roles: scma.#Role.edge
		os:    scma.#OS.ubuntu
		arch:  scma.#Arch.amd64
	}
}
