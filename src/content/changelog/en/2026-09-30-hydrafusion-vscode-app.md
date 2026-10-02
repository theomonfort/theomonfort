---
title: "HydraFusion comes to VS Code and the Copilot app"
date: "2026-09-30"
summary: "After Copilot CLI, HydraFusion is now in the VS Code and Copilot app model pickers. It shows more clearly what happens at each step and reports progress in real time, even on long tasks."
category: copilot
status: "Research preview"
source: "https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/"
demoUrl: "https://docs.github.com/early-access/copilot/hydrafusion"
demo:
  - "Setup (VS Code): in 1.140 or later, or Insiders, enable chat.copilot.hydraFusion.enabled, then select HydraFusion below Auto in the Copilot Chat model picker."
  - "Setup (Copilot app): update to the latest version, turn on HydraFusion in Settings → Experimental, and select it in the model picker. For Business / Enterprise, an administrator must allow preview features."
  - "In a demo repository, give one well-scoped task in a single prompt, such as a fix across several files, with the goal and acceptance criteria. Show the step-by-step progress, then hover over the response to see which models were used."
  - "Compare against Auto on the same task, checking quality, elapsed time, and usage. Do not assume it is always cheaper or always better."
---

### What's new

- **VS Code and the Copilot app**: previously only in Copilot CLI through `/experimental`. This was the top request from early feedback.
- **More transparency**: see more clearly what HydraFusion is doing at each step of a workflow.
- **Real-time progress**: more frequent updates make it clear that HydraFusion is still working, even on long tasks.

### Before rolling it out

- **Plans**: Copilot Pro, Pro+, Business, and Enterprise. For Business / Enterprise, preview features must be allowed in organization or enterprise settings.
- **Billing**: each model used is billed at its standard rate. The Auto discount does not apply, and a task that uses several models can consume more AI credits.
- **Respects model policies**: only uses models available in your plan and allowed by organization / enterprise policies. You cannot choose which models it uses.
- **Research preview**: no SLA, and not intended for production workloads.

For the Single / Cascade / Critique workflows and how HydraFusion differs from Auto, see [HydraFusion on Sept 10 (CLI)](#2026-09-10-hydrafusion).

[Using HydraFusion (official documentation)](https://docs.github.com/early-access/copilot/hydrafusion) / [Feedback (GitHub Community)](https://github.com/orgs/community/discussions/206492)
