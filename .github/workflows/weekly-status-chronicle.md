---
description: |
  Weekly repo status chronicle. Aggregates the past 7 days of activity (commits,
  issues, PRs, deploys, content changes) for theomonfort/theomonfort and posts a
  single GitHub issue summarizing the week. The weekly companion to
  daily-repo-status.md.

on:
  schedule:
    # Every Sunday at 21:00 UTC (Monday 06:00 JST) — one hour before the daily run.
    - cron: "0 21 * * 0"
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
    title-prefix: "[weekly-status] "
    labels: [report, weekly-status]
    close-older-issues: true
---

# Weekly Repo Chronicle

Create a single, **upbeat** weekly status issue summarizing what happened in
`${{ github.repository }}` over the **last 7 days**. The repo is
`theomonfort/theomonfort` — a Japanese-language Astro site about AI-driven
development with GitHub Copilot, so keep the tone friendly and a little playful
🎮 (RPG vibes welcome). Think of this as the "weekly saga recap" that zooms out
from the daily chronicles.

## What to gather

Use the GitHub tools and `git` to collect activity for the last 7 days:

1. **Commits on `main`** — total count, plus the notable ones (hash, author,
   one-line message). Group trivial commits rather than listing every one.
2. **Pull requests** opened, merged, or closed during the week.
3. **Issues** opened, closed, or actively discussed during the week.
4. **Workflow runs** (Actions) — call out any recurring or notable failures on
   `main`, and confirm the agentic workflows (daily-status, freshness,
   link-check) ran.
5. **Content changes** under `src/content/playbook/` — which playbook entries
   ("lore entries") were added, edited, or removed across the week.
6. **Site deploy status** — the most recent `Deploy to GitHub Pages` run and
   whether deploys were healthy across the week.

If a category is empty for the week, **skip it** instead of writing "nothing happened."

## Issue body — required structure

```markdown
# 🗓️ Weekly Chronicle — <YYYY-MM-DD> → <YYYY-MM-DD JST>

> One-line summary of the week in 80 chars or fewer.

## 📊 Summary

A short 3–5 sentence recap that leads with **how much** was done, then **what**
was done. Open with the headline numbers for the week — e.g. "**14 commits**,
**5 PRs merged**, **3 issues closed**, **6 playbook entries updated**" — then a
few sentences narrating the week's biggest themes, accomplishments, and their
impact. Mention any trend versus a typical week if notable.

## ✨ Highlights
- The 2–4 most important things that shipped or changed this week.

## 🛠 Commits
- Total: <N>. Notable:
- `<sha7>` — <message> (<author>)

## 🔀 Pull requests
- #<num> <title> — <state> (<author>)

## 🐛 Issues
- #<num> <title> — <state>

## 📜 Playbook updates
- `<path>` — <what changed in 1 line>

## 🚀 Deploy & automation health
- ✅ / ❌ `Deploy to GitHub Pages`: <summary across the week>
- Agentic workflows: <which ran, any failures>

## 💡 Suggested next steps
- 1–3 short, actionable bullets for the maintainer.
```

## Style

- Tone: positive, encouraging, lightly playful. Emojis are fine but don't overdo it.
- Mostly English headings (matches the daily workflow) but you may write the
  summary line in Japanese if the week's activity was driven by Japanese-language
  content updates.
- Keep the issue **concise** — scale length to actual activity. A quiet week = a
  short issue. Don't pad or list every trivial commit; group and summarize.
- Never @-mention users (the workflow disables `mentions`).

## Process

1. Compute the 7-day window (UTC now → 7 days ago) and the JST date range for
   the title.
2. Query commits, PRs, issues, runs across the window.
3. Tally the headline counts (commits, PRs merged, issues closed, playbook
   entries touched) and write the **📊 Summary** and **✨ Highlights** sections
   first.
4. Summarize the rest per the template above, dropping empty sections and
   grouping trivial items.
5. Emit a single `create-issue` safe output. Older `[weekly-status]` issues will
   be auto-closed.
