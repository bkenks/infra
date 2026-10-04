# bootstrap

Run first in `pre_tasks` with `tags: [always]` on a play with `gather_facts: false`.

```yaml
pre_tasks:
  - name: Settle the connection on whichever SSH port and user answer
    tags: [always]
    ansible.builtin.import_role:
      name: bootstrap
    vars:
      bootstrap__hardened_ssh_port: "{{ hardened_ssh_port }}"
      bootstrap__admin_user: "{{ user_admin }}"
```

Inputs are documented in `meta/argument_specs.yml`.
