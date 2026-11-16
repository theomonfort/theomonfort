---
title: "CLI Programmatic Mode"
group: "develop"
tags: ["cli", "automation", "ci", "non-interactive"]
aliases: ["Non-Interactive Mode"]
---

**CLI Programmatic Mode** runs [[Copilot CLI]] for a single prompt and exits, enabling shell pipelines, cron jobs, and GitHub Actions automation.

## Key Flags & Token Priority

| Aspect | Flags / Configuration |
| --- | --- |
| **Run & Pipe** | `copilot -p 'Summarize README.md' -s` (`-s` prints response text only; `--no-ask-user` disables questions) |
| **Scoped Permissions** | `--allow-tool='shell(npm:*), write'` (never pass `--allow-all` outside [[Local & Cloud Sandboxes]]) |
| **Authentication** | `COPILOT_GITHUB_TOKEN` -> `GH_TOKEN` -> `GITHUB_TOKEN` using a **Fine-grained PAT** with `Copilot Requests` (classic `ghp_` tokens unsupported) |
| **Repeatability & Caps** | `--model MODEL`, `--share='./session.md'`, and `--max-ai-credits N` via [[CLI Session Credit Limits]] |
