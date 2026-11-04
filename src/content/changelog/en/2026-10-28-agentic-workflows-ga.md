---
title: "GitHub Agentic Workflows is generally available"
date: "2026-10-28"
summary: "Write an automation in natural-language Markdown and compile it into GitHub Actions. Use coding agents for triage, CI investigation, documentation, and tests within your existing runner and policy setup."
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available"
---

### Agents inside GitHub Actions

Unlike Copilot Automations managed through Copilot's interface, **Agentic Workflows are Markdown files compiled into standard Actions YAML**. They reuse runner groups and policy constraints, with Copilot or another supported coding agent as the engine.

### What GA adds

- **Runner support**: self-hosted Actions Runner Controller runners with Docker-in-Docker.
- **Budget forecasting**: `gh aw forecast` includes threat detection credits and monthly ranges.
- **Engine and model choices**: refreshed models, providers selected per workflow, task-aware model routing, and templates through `gh aw add-wizard`.
- **Isolation**: additional micro-VM options and enclaves for cross-repository workflows.

### Layered safeguards

Read-only permissions by default, sandboxed execution behind the Agent Workflow Firewall, integrity filtering, validated safe outputs, and threat detection before proposed changes are applied.

Available on github.com for GitHub Free, Team, and Enterprise. **The default Copilot CLI engine requires a Copilot license.**

[Quickstart](https://github.github.com/gh-aw/setup/quick-start/) / [Workflow examples](https://github.com/githubnext/agentics)
