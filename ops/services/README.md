# Services

Manual steps for stacks that can't be fully automated from the model. Stack
definitions live in `model/services/`; `out/` is regenerated (and wiped) on
every `mise run cue:render`, so don't put docs there.

## Post-deploy setup

### NetBox

Runs on `littlebuddy` and is served at <https://netbox.ktbcloud.com>.

The stack sets `SKIP_SUPERUSER=true`, so no admin account exists after the
first deploy. After `netbox-app` reports healthy, create one on `bill`:

```shell
docker exec -it netbox-app /opt/netbox/netbox/manage.py createsuperuser
```

The command asks for a username, an email address and a password. Save the
password in the `netbox` item in the `infra` 1Password vault.
