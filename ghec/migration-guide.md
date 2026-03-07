---
title: Migration Guide
layout: default
parent: GHEC
nav_order: 3
---

# Migration Guide

📖 **Official docs**: [Migrating to GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer)

## Planning Your Migration

A successful migration starts long before you run any commands. Plan in three phases:

### Phase 1: Assessment

| Question | Why It Matters |
|----------|---------------|
| How many repos, orgs, and users? | Determines timeline and tooling |
| What's your current platform? | Dictates migration path |
| Largest repo size? | Repos >1 GB need special handling |
| CI/CD platform? | Pipelines need reconfiguration |
| Secrets and credentials? | Must be rotated post-migration |
| Compliance requirements? | May dictate migration order and validation |
| Acceptable downtime window? | Drives cutover strategy |

### Phase 2: Inventory

```bash
# For GHES: export a repo inventory
gh api \
  --method GET \
  --hostname YOUR_GHES_HOST \
  /orgs/YOUR_ORG/repos \
  --jq '.[] | "\(.name),\(.size),\(.default_branch),\(.archived)"' \
  --paginate > repo-inventory.csv
```

### Phase 3: Timeline

| Activity | Duration (typical) |
|----------|-------------------|
| Assessment & planning | 2–4 weeks |
| Tooling setup & dry runs | 1–2 weeks |
| Pilot migration (5–10 repos) | 1 week |
| Full migration (batch) | 1–4 weeks |
| Post-migration validation | 1–2 weeks |
| Cutover & decommission source | 1 week |

> 💡 **Theo's Tip**: The biggest time sink isn't the migration itself — it's the **post-migration cleanup**. CI/CD pipelines, webhooks, integrations, and developer workflow changes will take longer than moving the code. Budget 2x what you think you need for this phase.

## Migration Paths

| Source | Tool | Complexity | Notes |
|--------|------|-----------|-------|
| GHES → GHEC | GitHub Enterprise Importer (GEI) | Low–Medium | Best supported path, highest fidelity |
| GitLab → GHEC | GEI | Medium | Migrates repos, PRs, issues |
| Bitbucket Server → GHEC | GEI | Medium | Migrates repos and PRs |
| Azure DevOps → GHEC | GEI | Medium | Migrates repos and PRs; boards require manual migration |
| Bitbucket Cloud → GHEC | `git clone` + `gh repo create` | Medium | No official importer; manual process |
| SVN → GHEC | `git svn` + push | High | Requires history conversion |

## GitHub Enterprise Importer (GEI)

GEI is GitHub's **official migration tool**. It handles the heavy lifting of moving repositories and their metadata between platforms.

### What GEI Migrates

| ✅ Migrated | ❌ Not Migrated |
|------------|----------------|
| Git source (all branches, tags) | GitHub Actions workflows (copied but need reconfiguration) |
| Pull requests (open and closed) | Secrets and encrypted variables |
| Issues and comments | Webhooks |
| Labels and milestones | GitHub Pages settings |
| Releases | Branch protection rules (recreate manually or via API) |
| Wiki (as a repo) | GitHub Apps installations |
| LFS objects | Packages (npm, Docker, etc.) |

> 💡 **Theo's Tip**: GEI is a **repo-level** tool, not an org-level tool. It migrates repositories one at a time (or in batches via scripts). Org-level settings — teams, roles, policies, SSO — must be configured separately in your destination GHEC enterprise.

## Step-by-Step: GHES to GHEC with GEI

### Prerequisites

```bash
# Install the GEI CLI extension
gh extension install github/gh-gei

# Verify installation
gh gei --version

# Set up authentication tokens
export GH_SOURCE_PAT=ghp_your_ghes_token    # GHES personal access token
export GH_PAT=ghp_your_ghec_token            # GHEC personal access token
```

Required token scopes:
- **Source (GHES)**: `repo`, `admin:org`, `workflow`
- **Destination (GHEC)**: `repo`, `admin:org`, `workflow`

### Step 1: Generate a Migration Script

```bash
# Generate a script for all repos in an org
gh gei generate-script \
  --github-source-org SOURCE_ORG \
  --github-target-org TARGET_ORG \
  --ghes-api-url https://YOUR_GHES_HOST/api/v3 \
  --output migrate.sh
```

This produces a shell script with one `gh gei migrate-repo` command per repository. Review it before running.

### Step 2: Dry Run

```bash
# Run a single repo migration as a test
gh gei migrate-repo \
  --github-source-org SOURCE_ORG \
  --source-repo test-repo \
  --github-target-org TARGET_ORG \
  --target-repo test-repo \
  --ghes-api-url https://YOUR_GHES_HOST/api/v3 \
  --verbose
```

After the dry run:
- Verify all branches and tags transferred
- Check that PRs and issues have correct authors and timestamps
- Confirm LFS objects are intact
- Validate that CI workflows are present (even if they need reconfiguration)

### Step 3: Full Migration

```bash
# Execute the generated script
chmod +x migrate.sh
./migrate.sh 2>&1 | tee migration-log.txt
```

> 💡 **Theo's Tip**: Run the full migration during a **low-activity window**. While GEI handles most things gracefully, PRs opened on the source during migration won't be captured. Communicate a code freeze window to your teams — even a few hours helps.

### Step 4: Check Migration Status

```bash
# List all migrations and their status
gh gei wait-for-migration \
  --migration-id MIGRATION_ID

# View migration log for troubleshooting
gh gei migration-logs \
  --migration-id MIGRATION_ID \
  --github-target-org TARGET_ORG
```

## Handling Large Repos

### LFS-Heavy Repositories

GEI migrates LFS objects, but large LFS stores can slow things down significantly.

```bash
# Check LFS usage before migration
git lfs ls-files | wc -l           # Number of LFS-tracked files
du -sh .git/lfs/                    # Total LFS storage
```

If LFS storage exceeds **5 GB**, consider:
1. Cleaning up unused LFS objects before migration
2. Migrating LFS objects separately using `git lfs fetch --all` + `git lfs push --all`
3. Running the migration during off-hours to avoid timeout issues

### Monorepos

For repos exceeding **5 GB** of Git history:

| Strategy | When to Use |
|----------|-------------|
| Migrate as-is | Repo < 10 GB, acceptable transfer time |
| Shallow clone + full push | Need faster initial migration, can backfill history |
| Split into smaller repos | Monorepo is already causing problems |
| Use `git filter-repo` | Need to remove large files from history before migration |

> 💡 **Theo's Tip**: If a monorepo is over 10 GB, it's often faster to do a **shallow migration** first (recent history only), verify everything works, then backfill the full history incrementally. This gets teams productive on GHEC faster while the full history transfer completes in the background.

## Post-Migration Checklist

| Task | Details | Priority |
|------|---------|----------|
| Reconfigure CI/CD | Update remote URLs, secrets, runner references | 🔴 Critical |
| Rotate all secrets | Source tokens, deploy keys, webhook secrets | 🔴 Critical |
| Update webhook endpoints | Point to new GHEC org URLs | 🔴 Critical |
| Recreate branch protections | Use rulesets (recommended) or branch protection API | 🟡 High |
| Configure GitHub Apps | Reinstall and authorize on the target org | 🟡 High |
| Update DNS / documentation | Internal wikis, onboarding docs, bookmarks | 🟡 High |
| Verify GitHub Actions | Test all workflows in the new environment | 🟡 High |
| Set up audit log streaming | Connect to SIEM in the new enterprise | 🟢 Medium |
| Archive source repos | Make read-only to prevent accidental use | 🟢 Medium |
| Notify developers | New clone URLs, updated access instructions | 🟢 Medium |

## User Mapping & Identity Reconciliation

When migrating, GEI maps source users to destination users by **email address**. Mismatches result in contributions attributed to a placeholder (`ghost`) user.

### Best Practices

```bash
# Generate a mannequin (placeholder) report after migration
gh gei generate-mannequin-csv \
  --github-target-org TARGET_ORG \
  --output mannequins.csv

# Reclaim mannequins by mapping to real users
gh gei reclaim-mannequin \
  --github-target-org TARGET_ORG \
  --csv mannequins.csv
```

| Scenario | Resolution |
|----------|-----------|
| Email matches | Automatic attribution — no action needed |
| Email mismatch | Appears as mannequin — use `reclaim-mannequin` to fix |
| User doesn't exist on GHEC | Invite user first, then reclaim |
| Service account | Map to a dedicated service account on GHEC |

> 💡 **Theo's Tip**: Run the mannequin report on your **dry run** migration, not after the real one. This gives you time to resolve email mismatches, invite missing users, and prepare the CSV mapping file — so the production migration is clean on the first pass.

## GEI vs Manual Migration vs Third-Party Tools

| Criteria | GEI | Manual (`git clone` + push) | Third-Party (e.g., OX Security, Incredibuild) |
|----------|-----|---------------------------|----------------------------------------------|
| Cost | Free (included with GHEC) | Free | Paid |
| PR/issue migration | ✅ | ❌ | Varies |
| Author attribution | ✅ (email-based) | ✅ (Git history preserved) | Varies |
| Branch protections | ❌ (manual) | ❌ (manual) | Some tools support this |
| CI/CD migration | ❌ | ❌ | Some tools offer CI conversion |
| Multi-platform support | GHES, GitLab, Bitbucket, ADO | Any Git host | Varies by vendor |
| Complexity | Low | Medium | Low–Medium |
| Best for | Most migrations | Simple repo moves, no metadata needed | Complex multi-platform migrations |

## Rollback Strategy

Always have a rollback plan before starting migration.

### Before Migration

1. **Keep the source running** — do not decommission until the new environment is validated
2. **Set source repos to read-only** after migration, not deleted
3. **Document the cutover criteria** — what must be true before declaring success

### If Rollback Is Needed

```bash
# On the source (GHES), remove read-only restrictions
# Re-enable write access to source repos

# Update CI/CD to point back to source
# Revert DNS changes if any were made

# Communicate to developers: "We're rolling back to [source]"
```

| Rollback Trigger | Action |
|-----------------|--------|
| Data integrity issues | Pause, investigate, re-run migration |
| CI/CD failures | Fix in GHEC if possible; rollback if blocking |
| Performance problems | Investigate GHEC configuration; contact GitHub support |
| User access issues | Fix IdP/SAML mapping; usually not a rollback trigger |

> 💡 **Theo's Tip**: Define a **point of no return** in your migration plan — the moment after which rollback becomes more costly than fixing forward. Typically this is when developers have pushed new commits to GHEC that don't exist on the source. Once that happens, you're committed.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
