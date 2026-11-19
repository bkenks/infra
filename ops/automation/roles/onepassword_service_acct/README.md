# onepassword_service_acct

The stored token wins when it is live, then the host's; with neither live, a
new service account is minted. The winner replaces whatever 1Password or the
host holds, and a replaced item is archived, not deleted.

Minting needs a user, not a service account, so `op` runs on the controller as
the signed-in user of `onepassword_service_acct__account`. Inputs are in
`meta/argument_specs.yml`.

```yaml
- ansible.builtin.import_role:
    name: onepassword_service_acct
  vars:
    onepassword_service_acct__account: ktbsoft.1password.com
    onepassword_service_acct__dest: "{{ path_file__op_creds }}"
    onepassword_service_acct__vaults: ["secrets:read_items"]
```
