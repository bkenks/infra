package stacks

import s "github.com/bkenks/infra/docker/schema/stack"

stacks: [Name=string]: s.#Stack & {name: Name}
