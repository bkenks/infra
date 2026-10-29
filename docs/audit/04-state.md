# Terraform / OpenTofu (`ops/state`)

Re-verified against `7479b64`. Since the audit, the `docker` root has been deleted. Docker networks are
now created by Ansible (`ops/automation/playbooks/45_docker_resources.yml:9-11`). The R2 state
credentials have moved to the `infra` 1Password vault.

## High

1. **`ops/state/vultr/main.tf:5-10`: the Vultr host is named `pango`, not `edge01`.** STILL PRESENT.
   The instance key, label and hostname are all `pango`. The CUE model, `store/hosts.yml` and the Ansible
   inventory all call the VPS `edge01` (`edge01.vultr-ord.internal`). A host built by tofu will not match
   the name Ansible and DNS expect.

2. **`ops/state/vultr/main.tf:15-31`: no firewall group and no SSH key.** STILL PRESENT.
   `vultr_instance.this` sets neither `firewall_group_id` nor `ssh_key_ids`. The VPS is fully open to the
   internet until Ansible hardens it. Bootstrap logs in as `root` and has no key to do that with. Add a
   `vultr_firewall_group` with rules matching `access__firewall_group_ports`, plus an SSH key.

3. **`ops/state/fnox.toml:7-10`: no Cloudflare credential.** STILL PRESENT.
   `cloudflare/main.tf:3` declares an empty `provider "cloudflare" {}`, which needs `CLOUDFLARE_API_TOKEN`
   from the environment. fnox supplies only the R2 keys and `VULTR_API_KEY`, so `tofu -chdir=cloudflare plan`
   fails. The README says fnox supplies the provider credentials.

## Medium

4. **`ops/state/.config/mise/config.toml:1-8`: secrets are never loaded into the environment.** STILL PRESENT.
   fnox is not declared as a tool, nothing exports its secrets, and the README commands do not wrap with
   `fnox exec`. As written, `tofu init` runs with no R2 credentials. Only the `sync-secrets` task touches fnox.

5. **`ops/state/fnox.toml:4-5`: the 1Password provider has no account or vault pinned.** STILL PRESENT.
   `[providers.onepass_tf]` sets only `type`, whereas `ops/automation/fnox.toml` pins an account. With more
   than one 1Password account signed in, it is ambiguous which account resolves the secrets.

6. **`ops/state/fnox.toml:10`: secrets come from two different vaults.** CHANGED.
   The R2 keys now come from `op://infra/...` and the README (line 10) was updated to say the `infra` vault.
   `VULTR_API_KEY` still reads from `op://credentials/...` and has a TODO, so the README is still incomplete.

7. **`ops/state/vultr/main.tf:15-31`: nothing stops tofu from destroying the server.** STILL PRESENT.
   There is no `lifecycle { prevent_destroy = true }` and no `ignore_changes` on `os_id`. If the hardcoded
   image (`os_id = 2760`) or the plan changes, the next apply replaces the VPS.

8. **`ops/state/cloudflare/main.tf:1-3`: the root is empty.** STILL PRESENT.
   It defines no DNS records. Nothing uses the `ipv6_addresses` output (`vultr/main.tf:33-36`, described as
   "for AAAA records"), and no record exists for `pangolin.ktbcloud.com` from the inventory.

9. **Orphaned `docker/terraform.tfstate` in R2.** NEW.
   The `docker` root was deleted from git, and nothing shows a `tofu destroy` or `tofu state rm` ran first.
   If the state object is still in the bucket, it tracks `docker_network` resources that Ansible now owns.
   Confirm it is empty, then delete the object.

## Low

10. **`ops/state/README.md:15-20`: the usage example uses the deleted root.** NEW.
    The Usage block runs `tofu -chdir=docker ...` and says "swap `docker` for `vultr` or `cloudflare`". The
    `docker` root no longer exists. The block also passes `-backend-config=../r2.s3.tfbackend`, which mise's
    `TF_CLI_ARGS_init` (`.config/mise/config.toml:5`) already adds.

11. **`ops/state/README.md:1,3`: old repository names.** STILL PRESENT.
    It still says `infra.terraform` and `infra.ansible`. These now live in the monorepo as `ops/state` and
    `ops/automation`.

12. **`ops/state/r2.s3.tfbackend:5`: account ID committed in the endpoint.** STILL PRESENT.
    It is not a secret, but it identifies the Cloudflare account. The backend flags are otherwise correct for R2.

13. **`ops/state/vultr/main.tf:33-40`: the outputs cover IPv6 only.** STILL PRESENT.
    There is no IPv4 (`main_ip`) output, and `ipv6_networks` has no description.

14. **`ops/state/.gitignore:13`: `*secret*` is too broad.** STILL PRESENT.
    A legitimate file such as `secrets.tf` or `secret_rotation.md` would be silently left out of git. The rest
    of the file is fine.

15. **`ops/state/*/versions.tf:2`: `required_version = ">= 1.10"` does not say OpenTofu.** CHANGED.
    This used to matter because of the `docker` root's provider `for_each`, which is OpenTofu-only. With that
    root gone, the remaining roots work on either tool. The mise file pins `opentofu = "1.13"`, so this is now
    only a documentation nit.

## Resolved since audit

- `docker/main.tf:24` read `.all.hosts` from a flat `store/hosts.yml` and failed validation. N/A: the root
  is deleted, and `store/hosts.yml` is a grouped `all.hosts` inventory again.
- `docker/main.tf:37-42`: provider `for_each` blocked destroys when a host was removed. N/A (root deleted).
- `docker/main.tf:40`: SSH used short names and relied on `~/.ssh/config`. N/A (root deleted).
- `docker/main.tf:27-34`: created every network on every host. N/A here; that logic moved to Ansible
  `45_docker_resources.yml`.
- `docker/main.tf:41`: `StrictHostKeyChecking=accept-new`. N/A (root deleted).
- The `docker` root had no `versions.tf`. N/A (root deleted).
- Lock files still match their constraints: cloudflare `~> 5.24` and vultr `~> 2.32`.
