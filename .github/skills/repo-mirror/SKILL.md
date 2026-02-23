# Repo Mirror Skill

## Purpose

Mirror selected content from this repository (`theomonfort/cockpit`) to multiple target repos, excluding private folders. Performs a full sync — files removed from cockpit are also removed from targets.

### Target Repositories

| Repo | Purpose |
|------|---------|
| `github/JapanLab` | Shared team knowledge base |
| `theomonfort/theomonfort` | Public GitHub profile repo |

## When to Use

- You want to publish the latest knowledge base, news, and scripts to JapanLab
- After updating changelog decks or knowledge docs
- Periodic sync to keep JapanLab up to date

## How to Invoke

Ask Copilot:

```
Mirror the repo to JapanLab
```

Or run the script directly:

```bash
# Preview what would change (no push)
./scripts/mirror-to-targets.sh --dry-run

# Perform the sync
./scripts/mirror-to-targets.sh
```

## What Gets Mirrored

### To `github/JapanLab`

Everything **except**:

| Excluded | Reason |
|----------|--------|
| `20-notes/` | Personal daily notes |
| `30-meetings/` | Private meeting notes |
| `README.md` | Cockpit-specific README (targets have their own) |

### To `theomonfort/theomonfort`

Everything **except**:

| Excluded | Reason |
|----------|--------|
| `20-notes/` | Personal daily notes |
| `30-meetings/` | Private meeting notes |
| `50-security-checklists/` | Customer-specific security data |
| `README.md` | Cockpit-specific README (targets have their own) |

## How It Works

1. For each target repo (`github/JapanLab`, `theomonfort/theomonfort`):
   - Clones the target (shallow, `main` branch) into a temp directory
   - Removes all existing files from the clone (except `.git`)
   - Copies everything from cockpit using `rsync`, applying the exclude list
   - Commits and pushes changes directly to `main`
   - Cleans up the temp directory

## Requirements

- `gh` CLI authenticated with push access to all target repos
- `rsync` (pre-installed on macOS and most Linux)

## Script

`scripts/mirror-to-targets.sh`

## Dependencies

None (uses only `git`, `gh`, `rsync`).
