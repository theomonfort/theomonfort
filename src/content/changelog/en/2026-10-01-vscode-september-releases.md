---
title: "VS Code September releases: from scheduled tasks to PR merge"
date: "2026-10-01"
summary: "Roundup of VS Code 1.136 to 1.140. Automations and agent merge arrive in the Agents window, making it easier to hand agents the work from implementation through pull request merge."
category: copilot
status: "VS Code 1.136-1.140"
source: "https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases/"
demoUrl: "https://code.visualstudio.com/docs/agents/run/automations"
demo:
  - "Setup: update VS Code to the latest version and open the Agents window. If Automations is not in the sidebar, enable chat.automations.enabled."
  - "Select Automations → Create Automation and choose a demo repository as the workspace. Keep Schedule on Manual for the first run and use the prompt below."
  - "Summarize commits on the current branch from the last 24 hours. Group the summary by feature, fix, and maintenance work. Include commit references and flag changes that might need documentation. Do not modify files."
  - "Select Run now, then open the run from History to show the result. Next, show that Schedule can be changed to Daily. Scheduled runs need the machine awake with VS Code or the Agent Host running, and each run consumes usage."
---

### Agents window

- **Automations (preview)**: run routine tasks hourly, daily, weekly, or on demand. Start from a template or your own prompt, and share them with your team as `.automation.md` files.
- **Agent merge (preview)**: the agent handles review feedback, failed checks, merge conflicts, and workflow reruns, repeating until the pull request is ready to merge. Enable `chat.agentMerge.enabled` and start it from a session in the Agents window.
- **Pull request form**: from a Copilot, Claude, or Codex session, review and edit the title and description, choose draft and merge options, and create the pull request.
- **Dev Container sessions**: agents work with your project's configured tools and dependencies, including on SSH, Tunnel, and WSL hosts.
- **Session cleanup**: Mark as Done suggestions after pull requests merge, automatic cleanup, and an app badge for sessions that need attention (all in preview).

### Chat and GitHub integration

- **Attach issues and pull requests**: add them from Add Context, or paste a URL into the new-session input. No more copying descriptions or comments.
- **Move quick chats into a project**: attach a local folder to a chat started without a workspace, keeping the conversation.
- **HydraFusion in VS Code**: eligible users can enable preview features and select it in the model picker (research preview). See [HydraFusion on Sept 30](#2026-09-30-hydrafusion-vscode-app).

These are the main agent-related highlights from VS Code 1.136 to 1.140. Preview features are rolling out gradually, so some settings may not be on by default yet.

[VS Code release notes](https://code.visualstudio.com/updates) / [Using agent merge](https://code.visualstudio.com/docs/agents/run/agents-window#_finish-a-pull-request-with-agent-merge)
