---
title: "Content exclusions now cover Copilot app and CLI"
date: "2026-09-02"
summary: "Copilot app and CLI now respect enterprise, organization, and repository content exclusion policies, keeping excluded files out of context in their agentic workflows."
category: security
status: "Generally available"
source: "https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/"
---

### Does this include agent mode?

- **Yes, for Copilot app and CLI workflows**: this extends content exclusion support beyond the existing supported completion and chat experiences to these agentic tools.
- **Not VS Code's Agent or Edit mode**: the documentation still lists these modes in VS Code and other editors as unsupported. This is not blanket support for every Copilot agent experience.

### Key takeaways

- **Business and Enterprise**: the app and CLI respect the exclusion policies configured by your administrators.
- **Not a filesystem sandbox**: content exclusions control what Copilot uses as context. The documented limitations still include symlinks, remote filesystems, and semantic information supplied indirectly by an IDE.

[Supported experiences and limitations](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion) / [Configure content exclusions](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
