---
title: "Cloud Agent Entry Points"
group: "develop"
tags: ["cloud-agent", "issues", "delegate", "rest-api"]
---

**Cloud Agent Entry Points** let developers trigger asynchronous [[Copilot Cloud Agent]] tasks from wherever work originates.

## Ways to Launch Cloud Agent

- **GitHub Issues**: Assign an Issue directly to `Copilot`; the issue title and body become the task specification.
- **GitHub.com Agents Panel & PRs**: Start from the repository **Agents** tab, apply Copilot Code Review feedback in one click (`2026-05-19`), fix failing Actions workflows (`2026-05-18`), or resolve merge conflicts in three clicks (`2026-04-13`).
- **VS Code**: Switch to `Cloud` in [[VS Code Session Targets]] or the [[VS Code Agents Window]].
- **Copilot CLI**: Run `/delegate` via [[CLI Slash Commands & Fleet]] (delegates exclusively to the Copilot harness).
- **REST API**: Trigger Cloud Agent tasks programmatically (`2026-05-13`).
