---
description: |
  Daily repo status report. Gathers recent activity (commits, issues, PRs,
  deploys, content changes) for the past 24 hours and posts a single GitHub
  issue summarizing what happened. Adapted from
  githubnext/agentics/workflows/repo-status.md.

on:
  schedule:
    # Every day at 22:00 UTC (07:00 JST next morning)
    - cron: "0 22 * * *"
  workflow_dispatch:

permissions:
  contents: read
  issues: read
  pull-requests: read
  actions: read

network: defaults
timeout-minutes: 20

tools:
  github:
    toolsets: [default]
    # Public repo: allow reading 3rd-party comments on issues/PRs.
    lockdown: false
    min-integrity: none
  bash:
    - "git log:*"
    - "git diff --stat:*"
    - "git --no-pager log:*"

safe-outputs:
  mentions: false
  allowed-github-references: []
  create-issue:
    title-prefix: "[daily-status] "
    labels: [report, daily-status]
    close-older-issues: true
---

# Daily Repo Chronicle — `${{ github.repository }}`

Create a single, **upbeat** daily status issue summarizing what happened in this
repository over the **last 24 hours**. The repo is `theomonfort/theomonfort` — a
Japanese-language Astro site about AI-driven development with GitHub Copilot, so
keep the tone friendly and a little playful 🎮 (RPG vibes welcome).

## What to gather

Use the GitHub tools and `git` to collect:

1. **Commits on `main`** in the last 24h — hash, author, one-line message,
   files-touched count.
2. **Pull requests** opened, updated, merged, or closed in the last 24h.
3. **Issues** opened, closed, or with new comments in the last 24h.
4. **Workflow runs** (Actions) — note any failed runs on `main`.
5. **Content changes** under `src/content/playbook/` — call out which playbook
   entries were added or edited (these are the "lore entries" of the site).
6. **Site deploy status** — check the most recent `Deploy to GitHub Pages` run
   and report success/failure.

If a category is empty for the day, **skip it** instead of writing "nothing happened."

## Issue body — required structure

```markdown
# 🌅 Daily Chronicle — <YYYY-MM-DD JST>

> One-line summary of the day in 80 chars or fewer.

## 🛠 Commits
- `<sha7>` — <message> (<author>)

## 🔀 Pull requests
- #<num> <title> — <state> (<author>)

## 🐛 Issues
- #<num> <title> — <state>

## 📜 Playbook updates
- `<path>` — <what changed in 1 line>

## 🚀 Deploy
- ✅ / ❌ Last `Deploy to GitHub Pages` run: <conclusion> (<run_url>)

## 💡 Suggested next steps
- 1–3 short, actionable bullets for the maintainer.
```

## Style

- Tone: positive, encouraging, lightly playful. Emojis are fine but don't overdo it.
- Mostly English headings (matches the workflow source) but you may write the
  summary line in Japanese if the day's activity was driven by Japanese-language
  content updates.
- Keep the issue **concise** — scale length to actual activity. A quiet day = a
  short issue. Don't pad.
- Never @-mention users (the workflow disables `mentions`).

## Process

1. Compute the 24h window (UTC now → 24h ago) and JST date for the title.
2. Query commits, PRs, issues, runs.
3. Summarize per the template above, dropping empty sections.
4. Emit a single `create-issue` safe output. Older `[daily-status]` issues will be
   auto-closed.
