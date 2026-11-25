---
title: "VS Code retires the Local harness in February 2027"
date: "2026-11-16"
summary: "The Local harness will be removed in February 2027. Move to the Copilot harness, review customization compatibility, and verify organization-managed workflows and controls before the transition ends."
category: copilot
source: "https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027/"
---

### Move to the Copilot harness

VS Code 1.146 deprecates the Local harness, which will be removed in February 2027. The Copilot harness has been the default for new sessions since VS Code 1.143. During the transition, the Local harness remains available where organization policy permits, but new features and improvements will focus on the Copilot harness.

Choosing the Copilot harness does not move your files to the cloud. It uses the same coding-agent runtime as Copilot CLI and the GitHub Copilot app, and you can continue a session between the editor and the Agents window while its Agent Host process is running. Editor-provided tools still require a connected editor.

### Prepare before February 2027

- **Users**: start a new VS Code session, select **Copilot** under **Session Target**, and [review customizations for compatibility](https://code.visualstudio.com/docs/agent-customization/migrate-customizations). Switching harnesses does not automatically convert every customization.
- **Administrators**: review any `vscode.temporaryDefaultToLocalHarness` exception, then verify required workflows, permission controls, and sandbox configuration with the Copilot harness. The temporary setting will be removed with the Local harness.

[Local harness transition guide](https://code.visualstudio.com/docs/agents/run/move-to-copilot)
