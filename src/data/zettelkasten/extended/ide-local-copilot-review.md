---
title: "IDE Local Copilot Review"
group: "review"
tags: ["vscode", "copilot-cli", "shift-left", "local-review", "copilot-review"]
aliases: ["Local Diff Review", "Copilot CLI /review", "Review Uncommitted Changes"]
---

**IDE Local Copilot Review** runs [[Copilot Code Review]] directly against uncommitted working-tree or branch diffs in **VS Code** and **GitHub Copilot CLI** before `git push` or opening [[Pull Requests]].

## Local Pre-PR Surfaces

| Surface | Command / Entry Point | Workflow |
| --- | --- | --- |
| **VS Code Source Control** | **Source Control** panel -> **Copilot: Review uncommitted changes** (sparkle review button) | Inspects staged or unstaged edits, highlights bugs inline in the editor diff view, and applies suggested patches with one click |
| **Copilot CLI `/review`** | Run `/review` inside an interactive `copilot` terminal session | Analyzes working-tree or branch diffs in the terminal without opening an IDE |
| **CLI `rubber-duck` Subagent** | Configure a distinct model via `/subagents` and invoke `rubber-duck` | Cross-model critique (for example reviewing code written by one model family with a second model family) prior to PR creation |

## Shared Repo Standards

- Local reviews automatically honor `.github/copilot-instructions.md`, path-scoped `.instructions.md`, `AGENTS.md` ([[Review Custom Instructions]]), and personal or repo `.agent.md` profiles ([[Custom Agents in Code Review]]), eliminating obvious defects before [[Automatic Copilot Review]] or human reviewers see the PR.
