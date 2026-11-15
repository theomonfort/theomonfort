---
title: "Custom Agents in Code Review"
group: "copilot-review"
tags: ["custom-agents", "agent-md", "subagents", "specialist-review"]
aliases: [".agent.md Reviewers", "Specialist Review Agents"]
---

**Custom Agents in Code Review** package domain-specific reviewer personas, tool allowlists, and blocking vs non-blocking severity rubrics inside `.agent.md` profiles for [[Copilot Code Review]], VS Code, and Copilot CLI.

## Four Scopes for `.agent.md` Profiles

| Scope | Storage Location | Typical Review Persona |
| --- | --- | --- |
| **Enterprise** | `.github-private` -> `agents/*.agent.md` | Enterprise security, compliance, or accessibility auditor |
| **Organization** | `.github` or `.github-private` -> `agents/*.agent.md` | Design-system reviewer (`design-reviewer`), API contract checker |
| **Repository** | `.github/agents/*.agent.md` | Database migration, performance, or domain-model reviewer |
| **Personal** | `~/.copilot/agents/*.agent.md` | Individual pre-PR critic used in [[IDE Local Copilot Review]] |

## Anatomy of a Read-Only Reviewer Agent

```yaml
---
name: security-api-reviewer
description: Audits auth boundaries, input validation, and SQL safety on API PRs.
target: github-copilot
tools: ["read", "search", "github/pull-request-read"]
---
Classify findings into Blocking Defects vs Non-Blocking Suggestions.
Never flag formatting already covered by CI linters.
```

- Restricting `tools` to read-only inspection (`read`, `search`, `github/pull-request-read`) ensures the agent investigates context via [[Agentic Review Tool-Calling]] without mutating files, complementing path rules in [[Review Custom Instructions]] and built-in CLI subagents (`code-review`, `security-review`, `rubber-duck`).
