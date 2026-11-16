---
title: "Partner Agent Governance"
group: "develop"
tags: ["partner-agents", "governance", "policies", "enterprise", "models-partners"]
---

**Partner Agent Governance** controls [[Partner Agents]] (`OFF` by default) through a 3-tier policy hierarchy on GitHub.

## Three-Tier Policy Hierarchy

| Level | Administrator | Settings Path | Scope |
| --- | --- | --- | --- |
| **Enterprise** | Enterprise Owner | `Enterprise -> Policies -> Copilot` | Sets ceiling (`Allow` / `Block` / `No policy`) across all organizations |
| **Organization** | Org Owner | `Organization -> Settings -> Copilot -> Coding agent` | Individually toggles [[Claude Code on GitHub]] and [[OpenAI Codex on GitHub]] |
| **Personal (Pro / Pro+)** | Individual User | `Settings -> Copilot -> Cloud agent -> Partner agents` | Enables partner agents on personal repositories |

## Local IDE Scope Distinction

- Cloud policies above govern GitHub-hosted partner agents; local VS Code sessions are controlled separately via VS Code settings such as `github.copilot.chat.claudeAgent.enabled`.
