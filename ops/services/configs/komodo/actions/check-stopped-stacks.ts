// Komodo Action: check-stopped-stacks
//
// The nightly 02:00 backup stops every stack, backs up, then starts them
// again. Alerters are muted 01:59–02:59 by a maintenance window, so a stack
// that fails to come back would go unnoticed. This Action runs after the
// window and sends a Custom alert (via SendAlert) listing any stack that is
// not running. Komodo routes it through the configured Alerters.
//
// Paste into a Komodo Action and schedule it for after the window, e.g.
// cron `0 5 3 * * *` (Komodo cron includes seconds). Set the Action's
// schedule timezone explicitly: core runs with TZ=Etc/UTC.
//
// Alerters only receive SendAlert if their alert_types filter is empty or
// includes "Custom".

/** Stack names that are allowed to be not running. */
const IGNORE_STACKS: string[] = [];
/** Stacks carrying this tag are skipped. */
const IGNORE_TAG = "no-backup-check";
/** States considered healthy. "unknown" means the server is unreachable,
 *  which Komodo already alerts on separately. */
const OK_STATES = ["running", "deploying", "unknown"];
/** Alerter names/ids to send to. Empty = every alerter accepting Custom. */
const ALERTERS: string[] = [];
const LEVEL = Types.SeverityLevel.Critical; // Ok | Warning | Critical

const [stacks, servers, tags] = await Promise.all([
  komodo.read("ListStacks", {}),
  komodo.read("ListServers", {}),
  komodo.read("ListTags", {}),
]);

const serverName = new Map(servers.map((s) => [s.id, s.name]));
const ignoreTagId = tags.find((t) => t.name === IGNORE_TAG)?._id?.$oid;

const bad = stacks.filter(
  (s) =>
    !s.template &&
    !IGNORE_STACKS.includes(s.name) &&
    !(ignoreTagId && s.tags.includes(ignoreTagId)) &&
    !OK_STATES.includes(s.info.state),
);

if (bad.length === 0) {
  console.log(`All ${stacks.length} stacks are running.`);
} else {
  const lines = bad.map(
    (s) =>
      `- ${s.name} on ${serverName.get(s.info.server_id) ?? s.info.server_id}: ${s.info.state}` +
      (s.info.status ? ` (${s.info.status})` : ""),
  );
  const details = lines.join("\n");
  console.log(`${bad.length} stack(s) not running after backup:\n${details}`);

  const update = await komodo.execute("SendAlert", {
    level: LEVEL,
    message: `${bad.length} stack(s) not running after nightly backup`,
    details,
    alerters: ALERTERS,
  });
  if (!update.success) {
    throw new Error(`SendAlert failed: ${JSON.stringify(update.logs)}`);
  }
}
