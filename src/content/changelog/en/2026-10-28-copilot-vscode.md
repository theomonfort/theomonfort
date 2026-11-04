---
title: "Copilot in VS Code: persistent agents and connected sessions"
date: "2026-10-28"
summary: "Keep the same session across clients, run agents on local or remote machines, compare approaches, and manage customizations from the Agents window."
category: copilot
event: universe-2026
status: "Universe release roundup"
source: "https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases"
---

### Keep work moving

- **Cloud continuity**: start a cloud session in VS Code and continue it in Copilot app, Mobile, github.com, or CLI.
- **Agent Host**: sessions are independent of individual editor windows. Remote SSH and dev tunnels let agents work on another machine, which must stay running with its Agent Host.
- **Editor and Agents window**: switch views without restarting the live session. Register your machine with `code agent host --github-environment` to steer its agents from GitHub Mobile.
- **Shared harness**: the Copilot harness, built on Microsoft Copilot SDK, is the default for new sessions in both views.

### Compare and customize

- **Model comparison (preview)**: run models and harnesses in parallel, ask a Judge to recommend a result, or synthesize the approaches.
- **Computer use (experimental)**: interact with desktop apps on macOS and Windows, with per-app approval and organizational controls.
- **Customization Marketplace and connectors (preview)**: discover skills, MCP servers, plugins, and service connections. Business and Enterprise require the Editor preview features policy.
- **Plugin controls**: administrators can require or block plugins and restrict marketplaces. Repository defaults remain recommendations unless enterprise policy enforces them.

[VS Code 1.144 release notes](https://code.visualstudio.com/updates/v1_144)
