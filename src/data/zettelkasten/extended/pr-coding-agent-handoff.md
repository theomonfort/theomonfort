---
title: "PR Coding Agent Handoff"
group: "review"
tags: ["cloud-agent", "partner-agents", "claude", "codex", "handoff", "copilot-review"]
aliases: ["@copilot in PRs", "@claude and @codex", "Implement Review Suggestions"]
---

**PR Coding Agent Handoff** closes the loop between code review and implementation on [[Pull Requests]], delegating [[Inline Review Comments & Threads]], CI failures, or merge conflicts to asynchronous coding agents that push commits back to the PR branch.

## Ways to Delegate Fixes on a Pull Request

| Trigger | Release / Mechanism | What Happens on the PR Branch |
| --- | --- | --- |
| **Apply Copilot Review Feedback** | One-click handoff from [[Copilot Code Review]] comments (`2026-05-19`) | Spawns Copilot Cloud Agent on an Actions runner to implement multi-file fixes beyond simple [[Suggested Changes]] |
| **`@copilot` Comment Mention** | Comment `@copilot <instructions>` in a review thread or PR body | Reads the PR diff, review thread context, and repo instructions, then pushes tested commits (or opens follow-up [[Draft Pull Requests]]) |
| **Partner Agents (`@claude`, `@codex`)** | Mention `@claude` (Anthropic Claude Agent SDK) or `@codex` (OpenAI Codex SDK) | Runs partner cloud agents billed through existing GitHub Copilot credits (**off by default**; enabled at Enterprise, Org, or Personal Copilot settings) |
| **CI & Conflict Quick-Fixes** | One-click failing Actions fix (`2026-05-18`) & 3-click conflict resolution (`2026-04-13`) | Repairs broken [[Required Status Checks]] or rebases conflicted hunks directly from the PR page (or continuously via [[Agent Merge]]) |

## Built-In Pre-Push Self-Validation

- Before pushing commits, Copilot Cloud Agent validates its own work with **4 built-in checks** (`Settings -> Copilot -> Cloud agent -> Validation tools`, no GHAS license required): **CodeQL**, **Copilot Code Review**, **Secret Scanning**, and **Dependency Vulnerability checks**.

## Connected Cloud Agent Execution

- Launches [[Copilot Cloud Agent]] via [[Cloud Agent Entry Points]] using [[copilot-setup-steps.yml]] and [[Cloud Agent Validation Tools]].
