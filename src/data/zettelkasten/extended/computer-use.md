---
title: "Computer Use"
group: "develop"
tags: ["computer-use", "desktop", "gui-automation", "permissions", "copilot-app"]
---

**Computer Use** (Public preview on local macOS and Windows sessions in the [[GitHub Copilot App]]) enables Copilot to inspect windows, click UI controls, and type into desktop applications that lack an API, CLI, or MCP server.

## Safety & Permission Controls

- **OS Permissions**: On macOS, requires explicit **Accessibility** and **Screen Recording** grants under `Settings -> Computer Use -> Enable Computer Use`.
- **Approval Gates**: Keep `Tool permissions -> Ask every time` enabled, state explicit read/write boundaries in the prompt, and press **Stop** or **`Esc`** anytime to halt an active action. Enterprise admins can disable Computer Use centrally.
- **Local Only**: Runs exclusively on local desktop sessions, never inside [[Local & Cloud Sandboxes]] cloud VMs, and is distinct from [[Native Office Canvases]].
