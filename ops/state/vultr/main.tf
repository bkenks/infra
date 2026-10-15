provider "vultr" {}

locals {
  instances = {
    pango = {
      region   = "ord"
      plan     = "vhp-1c-1gb-amd"
      os_id    = 2760
      label    = "pango"
      hostname = "pango"
    }
  }
}

resource "vultr_instance" "this" {
  for_each = local.instances

  region      = each.value.region
  plan        = each.value.plan
  os_id       = each.value.os_id
  label       = try(each.value.label, null)
  hostname    = try(each.value.hostname, null)
  enable_ipv6 = true
  backups     = "enabled"

  backups_schedule {
    type = "weekly"
    dow  = 3
    hour = 3
  }
}

output "ipv6_addresses" {
  description = "Main IPv6 address per instance, for AAAA records."
  value       = { for k, i in vultr_instance.this : k => i.v6_main_ip }
}

output "ipv6_networks" {
  value = { for k, i in vultr_instance.this : k => "${i.v6_network}/${i.v6_network_size}" }
}
