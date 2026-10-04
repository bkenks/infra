# onepass_service_account

The stored token wins when it is live, then the host's; with neither live, a
new service account is minted. The winner replaces whatever 1Password or the
host holds, and a replaced item is archived, not deleted.

Minting needs a user, not a service account, so `op` runs on the controller as
the signed-in user of `onepass_service_account__account`. Inputs are in
`meta/argument_specs.yml`.

```yaml
- ansible.builtin.import_role:
    name: onepass_service_account
  vars:
    onepass_service_account__account: ktbsoft.1password.com
    onepass_service_account__dest: "{{ path_file__op_creds }}"
    onepass_service_account__vaults: ["secrets:read_items"]
```
