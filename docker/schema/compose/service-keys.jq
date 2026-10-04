."$defs"
| [.container_spec, .workload_spec, .service]
| map(.properties // {} | keys[])
| unique
| join("|")
| "package compose\n\n#serviceKeys: \"^(\(.))$\""