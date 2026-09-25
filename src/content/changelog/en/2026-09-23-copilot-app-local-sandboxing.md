---
title: "Local sandboxing in the Copilot app"
date: "2026-09-23"
summary: "Limit filesystem, network, and credential access per project for local repository and worktree sessions in the Copilot app."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/"
---

### Key takeaways

- **Off by default**: Settings → project → Sandbox → Sandbox new sessions enables new sessions. `/sandbox on` enables only the current session.
- **Policy changes**: filesystem, network, and credential changes apply to new or restarted sessions.
- **No unprotected fallback**: if the OS cannot enforce the policy, the shell fails with an error.
- **Local app sessions only**: cloud and remote-host sessions are excluded. Copilot CLI settings are separate.
