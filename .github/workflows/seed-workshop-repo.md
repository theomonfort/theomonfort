---
description: |
  Seed the GitHub Copilot Workshop repo. Mirrors the latest Markdown content
  (playbook + hands-on) and the images they reference from this repository into
  theomonfort/Github-copilot-workshop, then opens a pull request there with the
  changes. Inspired by the cross-repository "hub-and-spoke" gh-aw pattern.

on:
  # Re-seed whenever content or images change on main.
  push:
    branches: [main]
    paths:
      - "src/content/**"
      - "public/**"
  # Weekly safety net (Tuesday 00:00 UTC / 09:00 JST) plus manual runs.
  schedule:
    - cron: "0 0 * * 2"
  workflow_dispatch:

permissions:
  contents: read

network: defaults
timeout-minutes: 20

# Check out the workshop repo alongside this repo. The workshop repo is the
# pull-request target, so it is marked `current: true` and placed in a
# subdirectory; this repository stays at the workspace root as the content
# source. A PAT with `contents: write` on the workshop repo is required.
checkout:
  - fetch-depth: 1
  - repository: theomonfort/Github-copilot-workshop
    path: workshop-repo
    github-token: ${{ secrets.GH_AW_SIDE_REPO_PAT }}
    current: true

tools:
  bash:
    - "ls *"
    - "find *"
    - "cat src/content/*"
    - "mkdir *"
    - "cp *"
    - "rsync *"
    - "git -C workshop-repo status *"
    - "git -C workshop-repo diff *"
    - "date:*"

safe-outputs:
  mentions: false
  github-token: ${{ secrets.GH_AW_SIDE_REPO_PAT }}
  create-pull-request:
    target-repo: "theomonfort/Github-copilot-workshop"
    title-prefix: "[content-sync] "
    labels: [content-sync, automation]
    draft: false
    if-no-changes: "ignore"
    # A full mirror touches every Markdown file and image, so raise the patch
    # guards well above the defaults (100 files / 4096 KB).
    max-patch-files: 600
    max-patch-size: 10240
---

# Seed the Copilot Workshop Repository

You keep [`theomonfort/Github-copilot-workshop`](https://github.com/theomonfort/Github-copilot-workshop)
in sync with the canonical Markdown content and images that live in this
repository (`${{ github.repository }}`).

Two repositories are checked out in the workspace:

- **Source** (this repo) — at the **workspace root**. Content lives in
  `src/content/` and images in `public/`.
- **Target** (the workshop) — at **`workshop-repo/`**. This is where you write
  changes; a pull request is opened against it automatically.

## Step 1 — Mirror the Markdown content

Copy every Markdown file under `src/content/` (playbook + hands-on, both `ja`
and `en` locales, `.md` and `.mdx`) into the workshop repo under `content/`,
preserving the directory structure. Use `rsync` so the mirror is exact and stale
files are removed:

```bash
mkdir -p workshop-repo/content
rsync -a --delete --include='*/' --include='*.md' --include='*.mdx' --exclude='*' src/content/ workshop-repo/content/
```

## Step 2 — Mirror the images

Copy the images and other static assets from `public/` (icons, screenshots,
diagrams referenced by the content) into the workshop repo under `public/`,
preserving structure:

```bash
mkdir -p workshop-repo/public
rsync -a --delete public/ workshop-repo/public/
```

## Step 3 — Review what changed

Inspect the resulting diff in the workshop checkout so the pull request body can
describe it:

```bash
git -C workshop-repo status --short
git -C workshop-repo diff --stat
```

## Step 4 — Open the pull request

Emit a single `create-pull-request` safe output targeting
`theomonfort/Github-copilot-workshop`. If nothing changed, emit nothing — the
workflow is configured to ignore empty diffs.

Write the PR with:

- **Title:** `Sync latest content and images (<YYYY-MM-DD>)`
- **Body:** a short summary that leads with the counts — how many Markdown files
  and how many image/asset files were added, updated, or removed — followed by a
  brief `git diff --stat` style list of the most significant changes. Include
  the run URL `${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}`
  so the sync is auditable.

## Guardrails

- **Never** delete or edit anything outside `workshop-repo/content/` and
  `workshop-repo/public/`. Files the workshop maintainers added elsewhere
  (README, exercises, scaffolding) must be left untouched.
- Only mirror Markdown content and images/assets — do not copy source code,
  build output, or configuration from this repository.
- Never @-mention users.
- Stay within the configured network allowlist.
