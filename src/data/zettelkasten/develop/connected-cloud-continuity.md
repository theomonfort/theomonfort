---
title: "Connected Cloud Continuity"
group: "copilot-app"
tags: ["cloud-sandbox", "continuity", "mobile", "slack"]
aliases: ["Session Continuity"]
---

**Connected Cloud Continuity** (GA `2026-10-28` on paid plans) keeps a single GitHub-hosted Linux cloud sandbox session live and resumable across the [[GitHub Copilot App]], GitHub Mobile, GitHub.com, [[Copilot in VS Code]], [[Copilot CLI]], Slack, and Microsoft Teams.

## How Cloud Sandbox Sessions Behave

- **Laptop-Closed Execution**: Runs on isolated GitHub-hosted Linux compute from [[Local & Cloud Sandboxes]] so work continues when your laptop disconnects.
- **Snapshot Persistence**: Stopped sessions save state snapshots with **no one-hour total runtime cap** (compute and storage remain metered under cloud policy).
- **Start-Time Selection**: Select `Cloud` when creating the session (for example via [[VS Code Session Targets]] or `copilot --cloud`); local sessions do not migrate mid-flight, unlike host-bound [[Remote Agent Control]].
