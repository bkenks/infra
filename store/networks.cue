@extern(embed)

package store

_networks: _ @embed(file=networks.yml)
_networks: docker_networks: [...string]

shared: {for net in _networks.docker_networks {(net): {name: net, external: true}}}
