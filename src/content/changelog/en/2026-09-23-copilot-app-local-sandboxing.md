---
title: "Local sandboxing in the Copilot app"
date: "2026-09-23"
summary: "Limit filesystem, network, and credential access per project for local repository and worktree sessions in the Copilot app."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/"
---

### Key takeaways

- **Off by default**: in the desktop app, use `Settings → [project name] → Sandbox → Sandbox new sessions` for new local sessions. Replace `[project name]` with your project’s name. In an already-running local session, `/sandbox on` enables sandboxing for that session only.
- **Policy changes**: filesystem, network, and credential changes apply to new or restarted sessions.
- **No unprotected fallback**: if the OS cannot enforce the policy, the shell fails with an error.
- **Local app sessions only**: cloud and remote-host sessions are excluded. Copilot CLI settings are separate.

[Setup instructions (official documentation)](https://docs.github.com/en/copilot/how-tos/github-copilot-app/configure-local-sandboxing#enabling-local-sandboxing-in-a-project)
