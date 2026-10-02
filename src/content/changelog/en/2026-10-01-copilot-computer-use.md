---
title: "Copilot can now interact with desktop apps"
date: "2026-10-01"
summary: "With computer use in Copilot CLI and the Copilot app, Copilot can click, type, scroll, and navigate apps for you, including GUI-only software with no API, CLI, or MCP integration."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/"
demoUrl: "https://docs.github.com/copilot/how-tos/github-copilot-app/computer-use"
demo:
  - "Setup: in the Copilot app, open Settings → Computer Use and turn on Enable Computer Use (in the CLI, run /computer on and check status with /computer show). On macOS, grant Accessibility and Screen Recording permissions."
  - "Open a demo app with no sensitive content, then describe the outcome, the app involved, and any constraints. Replace APP_NAME in the prompt below with an installed application."
  - "Open APP_NAME and summarize the status information shown in the main window. Do not change any values or submit any forms."
  - "At the approval prompt, check that the app and action match the request, then choose Allow (avoid Always allow for the demo). Show the tool activity in the session. Click Stop or press Esc to interrupt."
---

### Key takeaways

- **Off by default**: must be enabled explicitly. Available for local sessions on macOS and Windows.
- **Approval before control**: whether Copilot asks before controlling an app follows the tool permission settings of the app or CLI. Always allow is shared between the app and CLI on the same computer and can be removed per app in the app settings. Deny rules always take precedence.
- **Admins can turn it off**: setting `features.computerUse` to `false` in enterprise managed settings blocks it, and local settings cannot override that.
- **When to use it**: if an API, MCP server, terminal command, or browser tool can do the job, it gives more predictable results. Computer use is for tasks that only a visual interface can complete. It can pick the wrong control when UIs change, so review actions that modify data. Anything visible on screen becomes context for Copilot.

[How computer use works and its limits (official documentation)](https://docs.github.com/en/copilot/concepts/agents/computer-use) / [Using computer use in Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use)
