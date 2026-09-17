---
title: "Set cost and quality priorities for Auto model selection"
date: "2026-09-14"
summary: "Copilot Auto adds Efficiency, Balance, and Intelligence tiers so you can choose what automatic model selection should prioritize."
category: copilot
status: "Rolling out"
source: "https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/"
---

### Key takeaways

- **Efficiency**: prioritize low cost for quick, straightforward tasks.
- **Balance**: weigh cost, quality, and latency together for everyday work.
- **Intelligence**: prioritize quality for complex tasks.

### Not three separate model pools

**All three tiers use the same model pool**, with different selection priorities.

Rolling out in VS Code, Copilot CLI, and GitHub Copilot app. Billing is based on the model Auto actually selects, not the chosen tier. Paid subscribers retain the 10% discount on usage billed through Auto.

### Hydra and HydraFusion

**Auto uses HyDRA for model routing.** HydraFusion extends this approach to workflow selection: a single model, escalation to a stronger model, or review by another model. It is available as an experimental research preview in Copilot CLI.

### When models switch

Previously, Auto reevaluated at session start and after compaction to preserve the cache. **CLI and Copilot App now periodically reassess the model during a conversation**, using the latest prompt and recent context, rather than on every turn.

[Auto model selection (official documentation)](https://docs.github.com/copilot/concepts/models/auto-model-selection)

[HydraFusion: from model selection to workflow orchestration (official blog)](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)

[Playbook: model choice and Auto mode (slide 9)](https://theomonfort.github.io/theomonfort/en/playbook/token-optimization/?present=1&slide=9)
