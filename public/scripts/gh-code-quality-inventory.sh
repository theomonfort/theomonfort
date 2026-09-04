#!/usr/bin/env bash
#
# gh-code-quality-inventory.sh
#
# Inventory GitHub Code Quality enablement across an entire GitHub Enterprise
# Cloud enterprise: every organization, every repository, one row each.
#
# Why this exists
#   Code Quality enablement is only visible per organization in the UI
#   (Organization -> Settings -> Code quality -> Repository access, and the
#   organization Code Quality dashboard). The enterprise level only exposes
#   the policy allow-list and consumed licenses, not which repositories are
#   actually enabled. This script rebuilds that missing enterprise-wide view
#   from the GraphQL and REST APIs.
#
# Usage
#   ./gh-code-quality-inventory.sh <enterprise-slug> [options]
#   ./gh-code-quality-inventory.sh my-enterprise -f table
#   ./gh-code-quality-inventory.sh my-enterprise --enabled-only -o enabled.csv
#
# Options
#   -o, --output FILE     Write results to FILE instead of stdout
#   -f, --format FORMAT   csv (default) | tsv | json | table
#   -j, --jobs N          Parallel repository probes (default: 8)
#       --org ORG         Limit to this organization (repeatable)
#       --enabled-only    Only output repositories with Code Quality enabled
#       --include-archived  Also probe archived repositories (skipped by default)
#       --include-forks   Also probe forks (skipped by default)
#   -y, --yes             Do not ask for confirmation when the rate limit is tight
#   -q, --quiet           Suppress progress output on stderr
#   -h, --help            Show this help
#
# Requirements
#   gh   https://cli.github.com  (authenticated: gh auth login)
#   jq   https://jqlang.github.io/jq/
#
# Token scopes
#   read:enterprise  list the organizations in the enterprise
#   read:org, repo   list repositories and read their Code Quality setup
#
# Note
#   Repository listing is scoped to what your token can see. Run as an
#   enterprise owner who is also a member of the organizations, or use a
#   GitHub App installation token, otherwise private repositories in
#   organizations you do not belong to will be missing from the inventory.
#
# API cost
#   1 GraphQL call per 100 organizations, 1 REST call per 100 repositories,
#   plus 1 REST call per probed repository. Archived repositories and forks
#   are skipped by default to keep that number down.
#
# License: MIT
set -euo pipefail

VERSION="1.0.0"

ENTERPRISE=""
OUTPUT=""
FORMAT="csv"
JOBS=8
ENABLED_ONLY=0
INCLUDE_ARCHIVED=0
INCLUDE_FORKS=0
QUIET=0
ASSUME_YES=0
ONLY_ORGS=""

die() { printf 'error: %s\n' "$*" >&2; exit 1; }
info() { [ "$QUIET" -eq 1 ] || printf '%s\n' "$*" >&2; }
usage() { awk 'NR > 2 { if ($0 ~ /^#/) { sub(/^# ?/, ""); print } else { exit } }' "$0"; }

while [ $# -gt 0 ]; do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    -v|--version) printf '%s\n' "$VERSION"; exit 0 ;;
    -o|--output) OUTPUT="${2:?missing value for $1}"; shift 2 ;;
    -f|--format) FORMAT="${2:?missing value for $1}"; shift 2 ;;
    -j|--jobs) JOBS="${2:?missing value for $1}"; shift 2 ;;
    --org) ONLY_ORGS="${ONLY_ORGS}${2:?missing value for $1}"$'\n'; shift 2 ;;
    --enabled-only) ENABLED_ONLY=1; shift ;;
    --include-archived) INCLUDE_ARCHIVED=1; shift ;;
    --include-forks) INCLUDE_FORKS=1; shift ;;
    -y|--yes) ASSUME_YES=1; shift ;;
    -q|--quiet) QUIET=1; shift ;;
    -*) die "unknown option: $1 (try --help)" ;;
    *) [ -z "$ENTERPRISE" ] || die "unexpected argument: $1"; ENTERPRISE="$1"; shift ;;
  esac
done

[ -n "$ENTERPRISE" ] || { usage; exit 1; }
case "$FORMAT" in csv|tsv|json|table) ;; *) die "unsupported format: $FORMAT" ;; esac
case "$JOBS" in ''|*[!0-9]*) die "--jobs must be a number" ;; esac
[ "$JOBS" -ge 1 ] || die "--jobs must be >= 1"

command -v gh >/dev/null 2>&1 || die "gh is required: https://cli.github.com"
command -v jq >/dev/null 2>&1 || die "jq is required: https://jqlang.github.io/jq/"
gh auth status >/dev/null 2>&1 || die "not authenticated: run 'gh auth login'"

TMPDIR_RUN="$(mktemp -d)"
trap 'rm -rf "$TMPDIR_RUN"' EXIT
REPOS_FILE="$TMPDIR_RUN/repos.tsv"
RESULTS_FILE="$TMPDIR_RUN/results.tsv"
: >"$REPOS_FILE"
: >"$RESULTS_FILE"

# ---------------------------------------------------------------- organizations

info "==> Resolving organizations in enterprise '$ENTERPRISE'"

ORGS_FILE="$TMPDIR_RUN/orgs.txt"
: >"$ORGS_FILE"
cursor="null"
while :; do
  if [ "$cursor" = "null" ]; then
    page=$(gh api graphql -F cursor=null -f slug="$ENTERPRISE" -f query='
      query($slug: String!, $cursor: String) {
        enterprise(slug: $slug) {
          organizations(first: 100, after: $cursor) {
            pageInfo { hasNextPage endCursor }
            nodes { login }
          }
        }
      }') || die "cannot read enterprise '$ENTERPRISE' (needs the read:enterprise scope and enterprise owner access)"
  else
    page=$(gh api graphql -f cursor="$cursor" -f slug="$ENTERPRISE" -f query='
      query($slug: String!, $cursor: String) {
        enterprise(slug: $slug) {
          organizations(first: 100, after: $cursor) {
            pageInfo { hasNextPage endCursor }
            nodes { login }
          }
        }
      }') || die "failed to page through organizations"
  fi

  printf '%s' "$page" | jq -e '.data.enterprise != null' >/dev/null 2>&1 \
    || die "enterprise '$ENTERPRISE' not found or not visible to this token"

  printf '%s' "$page" | jq -r '.data.enterprise.organizations.nodes[].login' >>"$ORGS_FILE"

  [ "$(printf '%s' "$page" | jq -r '.data.enterprise.organizations.pageInfo.hasNextPage')" = "true" ] || break
  cursor=$(printf '%s' "$page" | jq -r '.data.enterprise.organizations.pageInfo.endCursor')
done

if [ -n "$ONLY_ORGS" ]; then
  printf '%s' "$ONLY_ORGS" | grep -v '^$' | sort -fu >"$TMPDIR_RUN/filter.txt"
  grep -Fxi -f "$TMPDIR_RUN/filter.txt" "$ORGS_FILE" >"$TMPDIR_RUN/orgs.filtered" || true
  mv "$TMPDIR_RUN/orgs.filtered" "$ORGS_FILE"
fi

ORG_COUNT=$(grep -c . "$ORGS_FILE" || true)
[ "$ORG_COUNT" -gt 0 ] || die "no organizations to inventory"
info "    $ORG_COUNT organization(s)"

# ------------------------------------------------------------------ repositories

info "==> Listing repositories"
while IFS= read -r org; do
  [ -n "$org" ] || continue
  gh api --paginate "/orgs/$org/repos?per_page=100&type=all" \
    --jq '.[] | [.name, .visibility, (.archived|tostring), (.fork|tostring)] | @tsv' 2>/dev/null \
    | while IFS=$'\t' read -r name visibility archived fork; do
        [ -n "$name" ] || continue
        [ "$INCLUDE_ARCHIVED" -eq 1 ] || [ "$archived" != "true" ] || continue
        [ "$INCLUDE_FORKS" -eq 1 ] || [ "$fork" != "true" ] || continue
        printf '%s\t%s\t%s\t%s\t%s\n' "$org" "$name" "$visibility" "$archived" "$fork"
      done >>"$REPOS_FILE" \
    || info "    ! cannot list repositories for '$org' (skipped)"
done <"$ORGS_FILE"

REPO_COUNT=$(grep -c . "$REPOS_FILE" || true)
[ "$REPO_COUNT" -gt 0 ] || die "no repositories found (check your token's organization access)"

REMAINING=$(gh api /rate_limit --jq '.resources.core.remaining' 2>/dev/null || printf '')
if [ -n "$REMAINING" ] && [ "$REPO_COUNT" -gt "$REMAINING" ]; then
  RESET_AT=$(gh api /rate_limit --jq '.resources.core.reset | todate' 2>/dev/null || printf 'unknown')
  info "    ! $REPO_COUNT repositories to probe but only $REMAINING REST calls left this hour"
  info "    ! the quota resets at $RESET_AT; narrow the run with --org, or resume after the reset"
  if [ "$ASSUME_YES" -eq 0 ] && [ -t 0 ]; then
    printf 'Continue anyway? [y/N] ' >&2
    read -r answer
    case "$answer" in [yY]*) ;; *) die "aborted" ;; esac
  fi
fi

info "    $REPO_COUNT repositories to probe (${JOBS} in parallel)"

# ------------------------------------------------------------------------ probe

# Reads one "org<TAB>repo<TAB>visibility<TAB>archived<TAB>fork" line and emits
# the same line enriched with the repository's Code Quality setup state.
cq_probe() {
  local line="$1" org repo visibility archived fork
  IFS=$'\t' read -r org repo visibility archived fork <<EOF
$line
EOF

  local body state status cq langs runner updated
  body=$(gh api -H "Accept: application/vnd.github+json" \
    "/repos/$org/$repo/code-quality/setup" 2>/dev/null || true)

  if [ -z "$body" ]; then
    cq="error"; langs=""; runner=""; updated=""
  else
    state=$(printf '%s' "$body" | jq -r '.state // ""' 2>/dev/null || printf '')
    status=$(printf '%s' "$body" | jq -r '.status // ""' 2>/dev/null || printf '')
    case "$state" in
      configured)     cq="enabled" ;;
      not-configured) cq="disabled" ;;
      *)
        case "$status" in
          404) cq="unavailable" ;;
          403) cq="no-access" ;;
          5*)  cq="api-error" ;;
          *)   cq="error" ;;
        esac
        ;;
    esac
    langs=$(printf '%s' "$body" | jq -r '(.languages // []) | join(";")' 2>/dev/null || printf '')
    runner=$(printf '%s' "$body" | jq -r '.runner_type // ""' 2>/dev/null || printf '')
    updated=$(printf '%s' "$body" | jq -r '.updated_at // ""' 2>/dev/null || printf '')
  fi

  printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n' \
    "$org" "$repo" "$cq" "$visibility" "$archived" "$fork" "$langs" "$runner" "$updated"
}
export -f cq_probe

# shellcheck disable=SC2016
tr '\n' '\0' <"$REPOS_FILE" \
  | xargs -0 -P "$JOBS" -I{} bash -c 'cq_probe "$@"' _ {} \
  >"$RESULTS_FILE"

sort -f -t$'\t' -k1,1 -k2,2 -o "$RESULTS_FILE" "$RESULTS_FILE"

if [ "$ENABLED_ONLY" -eq 1 ]; then
  awk -F'\t' '$3 == "enabled"' "$RESULTS_FILE" >"$TMPDIR_RUN/filtered.tsv"
  mv "$TMPDIR_RUN/filtered.tsv" "$RESULTS_FILE"
fi

# ----------------------------------------------------------------------- render

HEADER="organization	repository	code_quality	visibility	archived	fork	languages	runner_type	updated_at"

render() {
  case "$FORMAT" in
    tsv)
      printf '%s\n' "$HEADER"
      cat "$RESULTS_FILE"
      ;;
    csv)
      { printf '%s\n' "$HEADER"; cat "$RESULTS_FILE"; } \
        | awk -F'\t' '{
            out = "";
            for (i = 1; i <= NF; i++) {
              f = $i;
              gsub(/"/, "\"\"", f);
              out = out (i > 1 ? "," : "") "\"" f "\"";
            }
            print out;
          }'
      ;;
    json)
      jq -R -s --arg enterprise "$ENTERPRISE" '
        split("\n") | map(select(length > 0)) | map(split("\t")) |
        map({
          organization: .[0], repository: .[1], code_quality: .[2],
          visibility: .[3], archived: (.[4] == "true"), fork: (.[5] == "true"),
          languages: (if .[6] == "" then [] else (.[6] | split(";")) end),
          runner_type: .[7], updated_at: .[8],
          html_url: ("https://github.com/" + .[0] + "/" + .[1])
        }) | { enterprise: $enterprise, generated_at: (now | todate), repositories: . }
      ' "$RESULTS_FILE"
      ;;
    table)
      { printf '%s\n' "$HEADER"; cat "$RESULTS_FILE"; } \
        | awk -F'\t' '{ printf "%-28s %-40s %-12s %-10s %s\n", $1, $2, $3, $4, $7 }'
      ;;
  esac
}

if [ -n "$OUTPUT" ]; then
  render >"$OUTPUT"
  info "==> Wrote $OUTPUT"
else
  render
fi

# ---------------------------------------------------------------------- summary

if [ "$QUIET" -eq 0 ]; then
  {
    printf '\n==> Summary for enterprise: %s\n' "$ENTERPRISE"
    awk -F'\t' '
      { total++; state[$3]++; if ($3 == "enabled") org[$1]++ }
      END {
        printf "    repositories probed : %d\n", total;
        printf "    enabled             : %d\n", state["enabled"] + 0;
        printf "    disabled            : %d\n", state["disabled"] + 0;
        printf "    unavailable         : %d  (policy off, plan, or unsupported repo)\n", state["unavailable"] + 0;
        if (state["no-access"] + state["error"] + state["api-error"] > 0)
          printf "    not readable        : %d\n", state["no-access"] + state["error"] + state["api-error"];
        n = 0;
        for (o in org) n++;
        if (n > 0) {
          printf "\n    enabled repositories per organization\n";
          for (o in org) printf "      %-30s %d\n", o, org[o];
        }
      }
    ' "$RESULTS_FILE"
  } >&2
fi
