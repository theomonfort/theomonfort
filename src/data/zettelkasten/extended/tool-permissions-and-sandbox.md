---
title: "Tool Permissions & Sandbox"
group: "plan"
tags: ["permissions", "sandbox", "yolo-mode", "computer-use", "security", "governance"]
aliases: ["disableBypassPermissionsMode", "Local Sandbox"]
---

**Tool Permissions & Sandbox** constrain what GitHub Copilot clients can read, edit, execute, or reach on the network via host settings and [[Copilot Managed Settings]] (Well-Architected Guardrails #19 and #20).

## Managed Permission Rules (`deny > ask > allow`)

- **No YOLO Mode**: `disableBypassPermissionsMode: true` blocks allow-all / bypass mode across enterprise clients.
- **Rule Priority**: Scoped matchers use `Shell()`, `Read()`, `Edit()`, and `Domain()`:
  - `deny`: Never runs, even if the user approves (for example `Shell(rm -rf *)`), reinforcing repo-level [[PreToolUse Guardrails]].
  - `ask`: Forces interactive user confirmation every time (for example `Shell(git push *)`).
  - `allow`: Runs without prompting (for example `Shell(npm test *)`); unlisted operations prompt first.

## Enforced Local Sandbox & Desktop Control

- **`sandbox` (`enabled: true`, `allowBypass: false`)**: Enforces local workspace confinement in Copilot CLI and Copilot App so the agent can work inside the repo and run `git`/`gh`, while blocking sensitive host paths like `~/.ssh` and macOS Keychain.
- **`features.computerUse: false` (`LOCKED`)**: Disables desktop GUI clicking and typing on managed machines, cannot be re-enabled locally.
