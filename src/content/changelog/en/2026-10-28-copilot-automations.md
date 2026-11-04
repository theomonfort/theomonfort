---
title: "Copilot Automations: shared, connected, and self-improving"
date: "2026-10-28"
summary: "Four announcements in one: shared team automations, cloud management from VS Code, improvements based on outcomes, and new triggers, tools, and AI credit limits."
category: copilot
event: universe-2026
status: "Paid plans / shared rollout"
source: "https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations"
---

### Shared workflows that belong to the repository

Readers can view shared automations; writers can edit them. They act as Copilot, bill AI credits to the repository owner, and keep running when their creator leaves. Organization repositories require the policy allowing Copilot cloud agent usage billed to the organization. Choose personal or shared at creation; the type cannot be changed later.

### Cloud execution from VS Code

Create and manage cloud automations from the Agents window, including schedules and GitHub events. They keep running while your computer is off. In VS Code 1.144, enable `chat.automations.cloud.enabled`.

### Learn from real outcomes

Automations can use signals such as corrected labels, accepted review comments, and merged PRs to propose improvements. **Changes to prompts, tools, or triggers require your review and acceptance**, rather than silently updating themselves.

### More triggers, tools, and cost controls

- **Triggers**: REST API calls from external systems, additional GitHub events, and success/failure of other automation runs.
- **Tools**: more GitHub actions, plus explicitly selected tools from repository-configured MCP servers.
- **AI credit limits**: a per-run limit stops that run; daily, weekly, or monthly limits prevent new runs until the period resets.

Available with Copilot Pro, Pro+, Max, Business, and Enterprise. Shared automations are rolling out gradually.

### All four official announcements

- [Shared workflows for teams](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations)
- [Cloud automations in VS Code](https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code)
- [Learning from outcomes and self-improvement](https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve)
- [New tools, triggers, and cost controls](https://github.blog/changelog/2026-10-28-new-tools-triggers-and-cost-controls-for-copilot-automations)
