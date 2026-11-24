# Builds the Backrest config Ansible wants from the one on disk.
#
# Input:  {config, seed, repos, plans, repos_absent, plans_absent}
#         config is the parsed config.json, or null when there is none yet.
# Output: {changed, drift, config}
#
# Ownership:
#   - seed keys are written only when the config lacks them.
#   - repos/plans listed by Ansible replace the entry with the same id, whole.
#   - ids in *_absent are removed.
#   - every other key, repo and plan is left exactly as Backrest wrote it.

# Backrest saves configs with protojson, which drops zero values: false, "",
# 0, int64 "0", empty lists and objects, and enum zero names. Strip them on
# both sides before comparing, so a config Backrest re-saved doesn't read as drift.
def prune:
  def zero:
    . == null or . == false or . == "" or . == 0 or . == "0" or . == [] or . == {}
    or IN("PERMISSION_UNKNOWN", "IO_DEFAULT", "CPU_DEFAULT", "CLOCK_DEFAULT",
          "CONDITION_UNKNOWN", "ON_ERROR_IGNORE", "UNKNOWN");
  walk(if type == "object" then with_entries(select(.value | zero | not)) else . end);

def upsert($items; $absent):
  map(select(.id | IN($absent[]) | not))
  | reduce $items[] as $item (.;
      if any(.[]; .id == $item.id)
      then map(if .id == $item.id then $item else . end)
      else . + [$item]
      end);

. as $in
| ($in.config // {}) as $have
| ($in.seed + $have
   | .repos = ((.repos // []) | upsert($in.repos; $in.repos_absent))
   | .plans = ((.plans // []) | upsert($in.plans; $in.plans_absent))
  ) as $want

| def drift($kind; $items; $absent):
    (($have[$kind] // []) | map({key: .id, value: prune}) | from_entries) as $on_disk
    | {
        add: [$items[] | select($on_disk[.id] == null) | .id],
        update: [$items[] | select($on_disk[.id] != null and $on_disk[.id] != prune) | .id],
        remove: [$absent[] | select($on_disk[.] != null)]
      };

{
  changed: (($have | del(.modno) | prune) != ($want | del(.modno) | prune)),
  drift: {
    seed: [$in.seed | keys[] | select($have[.] == null)],
    repos: drift("repos"; $in.repos; $in.repos_absent),
    plans: drift("plans"; $in.plans; $in.plans_absent)
  },
  # Bumping modno makes any browser tab still holding the old config get
  # "config modno mismatch" on save instead of silently overwriting this one.
  config: ($want | .modno = (($have.modno // 0) + 1))
}
