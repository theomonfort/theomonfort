---
title: "Copilot Cloud Agent"
group: "cloud-agent"
tags: ["cloud-agent", "actions", "async", "pr"]
aliases: ["Cloud Agent", "Coding Agent"]
---

**Copilot Cloud Agent** is an asynchronous coding agent on [[GitHub]] that runs on ephemeral GitHub Actions runners, reads full repository context, executes builds and tests, and opens a verified pull request while your IDE is closed.

## Core Execution Architecture

- **Traceable Actions Runtime**: Every session runs on GitHub Actions infrastructure (customizable via [[copilot-setup-steps.yml]]) with team-visible session logs.
- **Multiple Harnesses**: Supports the standard Copilot harness as well as the OpenAI Codex SDK and Claude Agent SDK through [[Partner Agents]].
- **Self-Healing Pre-PR Gate**: Runs [[Cloud Agent Validation Tools]] and connects external context via [[Cloud Agent MCP Configuration]] before returning a PR from any of the [[Cloud Agent Entry Points]].
