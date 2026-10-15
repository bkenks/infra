# Staged playbooks

## Context

The old layout had five playbooks: `ubuntu_host_configure`, `ubuntu_apps_install`, `onepassword_service_account_set`, `bootstrap_control-plane` and `bootstrap_node`.

- One playbook mixed one-time SSH hardening with routine OS state.
- Another mixed the container runtime, networking and secrets tooling.
- fnox ran before the 1Password token it needs was on the host.
- The tmpfs secret mounts were pulled in twice through a `_depends_on` shim role.

## Decision

Split provisioning into six numbered stages: access, system, network, secrets, runtime and platform. Each concern has exactly one stage that owns it. The order follows real dependencies:

- Access comes first because every later stage connects on the hardened port.
- Network comes before secrets and runtime because hosts are addressed as `*.internal`.
- Secrets come before runtime and platform because compose stacks read their secrets through fnox.
- Platform comes last because it needs Docker, GitHub access and secrets.

Role variables live in `inventory/group_vars`, not in the playbooks. This lets each stage run alone with the same values.

## Consequences

- The `_depends_on` role is gone: `30_secrets` is the only stage that mounts tmpfs.
- On an already-provisioned host, any single stage can run alone. On a fresh host, `00_access` must run first.
- The `github` role is now wired into `40_runtime`. Komodo Core clones the stacks repo over SSH and needs GitHub's host keys trusted.
