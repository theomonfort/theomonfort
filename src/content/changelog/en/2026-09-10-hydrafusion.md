---
title: "HydraFusion chooses the workflow, not just the model"
date: "2026-09-10"
summary: "Project HydraFusion is available through /experimental in Copilot CLI. It selects models and execution patterns to balance quality, cost, and latency for each task."
category: copilot
status: "Research preview"
source: "https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/"
demo:
  - "Enable HydraFusion through /experimental in Copilot CLI, then select HydraFusion in the model picker."
  - "Start with a substantial, well-scoped coding task in one prompt, including the goal and acceptance criteria. This preview recommends single-prompt tasks rather than long iterative conversations."
  - "Compare against ordinary Auto on the same task, checking completion quality, elapsed time, and usage. Do not assume it is always cheaper or always better."
---

### Key takeaways

- **Single**: one selected model solves the task directly.
- **Cascade**: an efficient model drafts a result; a quality gate can escalate to a stronger model.
- **Critique**: a read-only critic from another model family reviews the draft, then the original model revises once.

### How it differs from Auto

HydraFusion is an **evolution beyond Auto's model selection**: Auto chooses a model for the task; HydraFusion also chooses the workflow, including escalation or a second model's review. It is a separate research preview today, not an announced replacement for Auto. Not every request uses multiple models.

This pick focuses on HydraFusion from the weekly release roundup. Published quality and cost results come from controlled offline evaluations, not a guarantee for real-world tasks. Features and naming may change during the research preview.

[Architecture and evaluation results (official HydraFusion blog)](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)

[Playbook: model choice and Auto mode (slide 9)](https://theomonfort.github.io/theomonfort/en/playbook/token-optimization/?present=1&slide=9)
