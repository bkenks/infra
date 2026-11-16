# Services

Manual steps for stacks that can't be fully automated from the model. Stack
definitions live in `model/services/`; `out/` is regenerated (and wiped) on
every `mise run cue:render`, so don't put docs there.

## Post-deploy setup

### NetBox

Runs on `bill` and is served at <https://netbox.ktbcloud.com>.

The stack sets `SKIP_SUPERUSER=true`, so no admin account exists after the
first deploy. After `netbox-app` reports healthy, create one on `bill`:

```shell
docker exec -it netbox-app /opt/netbox/netbox/manage.py createsuperuser
```

The command asks for a username, an email address and a password. Save the
password in the `netbox` item in the `infra` 1Password vault.

### LibreNMS

Runs on `bill` and is served at <https://librenms.ktbcloud.com>.

Before the first deploy, add a `DB_PASSWORD` field to a `librenms` item in
the `infra` 1Password vault.

On first start, LibreNMS opens a setup wizard that lets anyone who reaches
the page create the admin user. Create the admin before exposing the site in
Pangolin. You can also skip the wizard by creating the user on `bill`:

```shell
docker exec -it --user librenms librenms-app lnms user:add --role=admin <username>
```

Save the password in the `librenms` item.

To check the install:

```shell
docker exec -it --user librenms librenms-app php validate.php
```

`librenms-syslogng` and `librenms-snmptrapd` listen on `bill` ports 514 and
162 (TCP and UDP). Point device syslog and SNMP traps at `bill`. LibreNMS
only stores syslog messages once syslog is enabled:

```shell
docker exec -it --user librenms librenms-app lnms config:set enable_syslog true
```
