---
title: "HydraFusion updates and the new HydraFusion Max"
date: "2026-10-14"
summary: "HydraFusion's model pool now includes the latest frontier models, with per-step reasoning effort and improved Cascade / Critique workflows. HydraFusion Max adds higher reasoning effort for more demanding tasks."
category: copilot
status: "Research preview"
source: "https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/"
demo:
  - "Setup: in Copilot CLI, start with copilot --experimental and use /model. In VS Code, enable chat.copilot.hydraFusion.enabled and use the model picker. In the Copilot app, turn on HydraFusion in Settings → Experimental and use the model picker. Select HydraFusion Max."
  - "In a demo repository, give one demanding, well-scoped task in a single prompt, such as a bug fix that needs root-cause analysis, with the goal and acceptance criteria. Show the chosen execution pattern (Single / Cascade / Critique) and each step in the progress display."
  - "Run the same task with HydraFusion and compare quality, elapsed time, and usage. In Copilot CLI, /usage shows the AI credits each model consumed."
---

### What's new in HydraFusion

- **Latest frontier models**: the model pool now includes Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol, and GPT-6 Luna. The models used for each task depend on the workflow.
- **Per-step reasoning effort**: previously each model ran at its default effort. Now drafts use medium effort and reviews use high effort, keeping drafting efficient while spending deeper reasoning on checking and improving the work.
- **Cascade**: can now include a judging step that inspects the initial work and requests a repair only when needed.
- **Critique**: relies less on text summaries and more on tools that inspect the workspace directly, with parallel critic models.

### What is HydraFusion Max?

It uses the same architecture and workflows as HydraFusion, but is tuned for frontier capability on more demanding tasks. It applies higher reasoning effort (extra high) where depth matters most, while orchestration still considers token efficiency.

- **HydraFusion**: balances speed, cost, and performance, with moderate token savings. For general agentic tasks.
- **HydraFusion Max**: for tasks that need the deepest reasoning and most thorough analysis.

### Before rolling it out

- **Clients**: both options are available in VS Code, the Copilot app, and Copilot CLI.
- **Plans**: Copilot Pro, Pro+, Business, and Enterprise, with experimental or preview features enabled. Organization model policies apply.
- **Billing**: as before, each model used is billed at its standard rate, and the Auto discount does not apply. No usage guidance has been published for Max, so compare it with HydraFusion on the same task.
- **Research preview**: no SLA, and not intended for production workloads.

For the three workflows and how HydraFusion differs from Auto, see [HydraFusion on Sept 10 (CLI)](#2026-09-10-hydrafusion). For enabling it in VS Code and the Copilot app, see [HydraFusion on Sept 30](#2026-09-30-hydrafusion-vscode-app).

[Using HydraFusion (official documentation)](https://docs.github.com/en/early-access/copilot/hydrafusion) / [Feedback (GitHub Community)](https://github.com/orgs/community/discussions/206492)
