---
title: "One Copilot cloud session, wherever you work"
date: "2026-10-28"
summary: "Start work on your phone, continue on the web, and finish in the editor or CLI. Connected cloud sessions and resumable sandboxes are generally available on paid Copilot plans."
category: copilot
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience"
---

### Keep the same session

- **Across clients**: github.com, Mobile, CLI, Copilot app, and VS Code share cloud sessions. Work started in Slack or Teams can continue in these clients.
- **Resumable sandboxes**: isolated GitHub-managed environments save snapshots on shutdown and resume later, without the previous one-hour total running-session limit.
- **Tools and context**: use Bash, GitHub CLI, skills, slash commands, connectors, and custom MCP servers, subject to permissions and enterprise policies.

### Compute and access

The included Actions compute entitlement becomes a **shared dollar-based pool** for standard hosted runners and cloud sandboxes, plus larger hosted runners on Team and Enterprise Cloud. Each product keeps its own rate. The announcement schedules sandbox billing to begin in **November 2026**.

The connected experience is rolling out on paid Copilot plans under the **Copilot in the cloud** policy. Copilot Free retains its existing web and mobile chat.

**Existing setup caveat:** sessions using Actions-based self-hosted runners or `copilot-setup-steps.yml` still need the Actions environment. A cloud sandbox does not automatically replace that setup.
