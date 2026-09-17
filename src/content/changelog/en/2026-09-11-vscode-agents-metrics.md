---
title: "Measure VS Code Agents-window usage through the Metrics API"
date: "2026-09-11"
summary: "Copilot usage metrics now include users, sessions, and user messages from the dedicated VS Code Agents window, helping organizations and enterprises track adoption."
category: administration
status: "Generally available"
source: "https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics/"
demo:
  - "Compare the dedicated Agents window with Agent Mode in the ordinary editor. These new metrics cover only the former."
  - "In an authorized test environment, retrieve 1-day and 28-day reports and compare aggregate and per-user fields. Do not expose real user data in a public demo."
  - "Check missing and null fields. Unavailable data must not be interpreted as zero users."
---

### What does “VS Code Agents” mean?

It means the **dedicated VS Code Agents window**, an agent-first interface for managing sessions and work across projects. This is **not Agent Mode in the editor's Chat view**. The new metrics remain separate from editor-window Agent Mode and generic usage rollups.

### What can you measure?

- **Enterprise / organization aggregate reports**: `daily_active_vscode_agent_users` counts unique active users each day. `totals_by_vscode_agent` includes `session_count` and `total_user_messages`.
- **Per-user reports**: `used_vscode_agent` indicates usage, while `totals_by_vscode_agent` provides that user's session and message counts.
- **Both 1-day and 28-day reports are supported.** New fields are optional and remain absent or `null` when corresponding data is unavailable.

### Who is it for, and how should it be read?

These metrics help administrators track adoption and engagement. Enterprise owners and billing managers, organization owners, and custom roles with `View Copilot Metrics` can access them. The Copilot usage metrics policy must be enabled. Session and message counts indicate activity, not a direct measure of productivity or outcomes.

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics) / [Agent experiences in VS Code](https://code.visualstudio.com/docs/agents/overview)
