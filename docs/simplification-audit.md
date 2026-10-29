# Simplification audit

Audit date: 2026-10-28. Scope: the whole repository. Goal: find what could be simplified to reduce cognitive load for developers.

Findings are ranked by payoff. Each one names the files involved and a suggested fix.

## Stale documentation — misleads every reader

5. **`ops/services/docs/index.md` describes a design that no longer exists.** It mentions `#Stack`, `stacks.<name>`, `schema/stack`, `vendor/`, `cue:update`, and a pre-commit hook that renders stacks. In fact, stacks are top-level fields matched by `[stack=string]` in `model/service/service.cue`, and `lefthook.yml` runs only `ansible-lint`. Rewrite the page to match the code.

6. **Old repo names remain.** `infra.ansible`, `infra.terraform`, and `infra.stacks` appear in `ops/state/README.md`, `ops/automation/docs/index.md`, `ops/automation/collections/ansible_collections/ktb/ubuntu/galaxy.yml`, and `ops/services/docs/components/`. Replace them with paths in this monorepo.

7. **`ops/automation/docs/index.md` documents config that does not exist.**
   - The firewall table lists the groups `smb`, `fileshare`, and `stream`, and Infisical ports. `access__firewall_group_ports` in `group_vars/all/main.yml` has only `all` and `control_plane`.
   - It mentions `hawser` and `infisical_secrets` roles. Neither exists in `roles/`.

8. **Superseded Pkl-era records sit beside current ones.** `ops/services/docs/adr/01-01-01-stacks-in-pkl.md` and the `ops/services/docs/log/*pkl-cutover*` files describe a retired toolchain. Move them to an archive directory so current docs stand out.

9. **The root `README.md` has one line.** Add a short map:
   - `model/` — CUE source of truth (schema, inventory, services).
   - `store/` — YAML generated from CUE, read by Ansible and Terraform.
   - `ops/automation/` — Ansible host configuration.
   - `ops/services/` — rendered Compose stacks deployed by Komodo.
   - `ops/state/` — OpenTofu roots.
   - The flow: edit CUE, run `mise run cue:render`, commit, Komodo deploys.

## Dead weight

10. **Unused Python dependencies.** `infisicalsdk`, `boto3`, and `botocore` in `ops/automation/pyproject.toml` have no users in the Ansible content. Remove them.

11. **Two C4 models and a committed build.**
    - There are separate models in `docs/c4/cue/` and `ops/services/docs/c4/diagram/`. Keep one.
    - The root `mise.toml` sets `PATHDIR_C4 = "docs/c4"`, but the c4 tasks in `ops/services/.config/mise/tasks/c4/` read `$PATHDIR_C4/diagram`. That path does not exist from the root.
    - `ops/services/docs/c4/dist/` (9.5 MB of build output) is committed. Add it to `.gitignore` and build it in the deploy task.

## Tooling sprawl

12. **Python wrappers around single commands.** `.config/mise/tasks/cue/format.py`, `cue/vet.py`, and `ops/services/.config/mise/tasks/c4/*.py` each run one command through `uv`. Replace them with inline `run = "..."` tasks in `mise.toml`. `cue:format` also duplicates the `cue` formatter in `treefmt.toml`.

13. **Three mise configs with conflicting pins.** The root pins `uv = "0.13.0"`, while `ops/automation/.config/mise/config.toml` uses `uv = "latest"`. `treefmt`, `taplo`, and `prettier` are referenced but not installed through mise. Pin each tool once, at the root where possible.

14. **Inconsistent fnox conventions.** `ops/automation/fnox.toml` uses provider `op_ansible` with an account ID and `item/field` references. `ops/state/fnox.toml` uses provider `onepass_tf` with no account and `op://` references. Use one provider name pattern and one reference style.

15. **Duplicate wrapper scripts.** `ops/services/stack/wrap` and `ops/services/stack/platform/node/wrap` are nearly identical. Merge them into one script with an optional host argument.

## Single-source-of-truth gaps

16. **Values repeated across tools.**
    - The Komodo version `2.1.2` is pinned in `model/service/platform.komodo.cue` and in `ops/automation/inventory/group_vars/all/main.yml`.
    - SSH port `3204` is hardcoded in `access__firewall_group_ports`, although `hardened_ssh_port` exists.
    - Ports `9120` and `8120` repeat across CUE, Ansible, and docs.

    Export these from CUE into `store/` and read them from there.

17. **Deploy category comes from filename parsing.** `infra_tool.cue` derives each stack's category by splitting the filename (`app.paperless.cue`) and converting `-` and `.` to `_` to match keys. This is hidden behavior. Give each stack an explicit `category` field instead.

18. **Mixed port conventions.** Some stacks use `_port` (`app.paperless.cue`). Others use `_listeners.web.port` (`platform.komodo.cue`). Pick one.

19. **Abstractions with too few users.** `#Provider` and `#Site` in `model/inventory/inventory.cue` wrap two values each. `schema.#Route` has one user (`route.pangolin`). Inline them until a second use appears.

## Process

20. **Commit history does not explain changes.** 13 of 48 commits are titled "WIP" or "stuff". The `git:ship` task runs `git add .`, commits, and pushes in one step. Use descriptive (for example, conventional) commit messages so history explains why things changed.
