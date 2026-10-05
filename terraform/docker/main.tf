# Dependencies
# ————————————————————————————————————————————————————————————————
terraform {
  required_version = ">= 1.10"

  backend "s3" {
    key = "docker/terraform.tfstate"
  }

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.6"
    }
  }
}


# Definitions
# ———————————————————————————————————————————————————————————————
locals {
  store = "${path.module}/../../store"

  hosts    = yamldecode(file("${local.store}/hosts.yml")).all.hosts
  networks = yamldecode(file("${local.store}/networks.yml"))

  host_networks = merge([
    for host_name, host in local.hosts : {
      for network_name, network in local.networks : "${host_name}/${network_name}" => {
        host     = host_name
        name     = network_name
        subnet   = try(network.subnet, null)
        internal = try(network.internal, false)
      }
    }
  ]...)
}

provider "docker" {
  alias    = "host"
  for_each = local.hosts
  host     = "ssh://${each.key}"
  ssh_opts = ["-o", "StrictHostKeyChecking=accept-new"]
}

resource "docker_network" "this" {
  for_each = local.host_networks
  provider = docker.host[each.value.host]

  name     = each.value.name
  driver   = "bridge"
  internal = each.value.internal

  dynamic "ipam_config" {
    for_each = each.value.subnet == null ? [] : [each.value.subnet]
    content { subnet = ipam_config.value }
  }
}
