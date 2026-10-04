@extern(embed)

package store

#Network: {
	subnet?:   string
	internal?: bool
}

networks: _ @embed(file=networks.yml)
networks: [string]: #Network

shared: {for net, _ in networks {(net): {name: net, external: true}}}
