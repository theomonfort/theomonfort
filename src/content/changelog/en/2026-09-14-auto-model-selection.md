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

**All three tiers use the same available models.** The selection priorities differ. Even Intelligence may choose a small, efficient model for a simple request such as adding a docstring.

Rolling out in VS Code, Copilot CLI, and GitHub Copilot app. Billing is based on the model Auto actually selects, not the chosen tier. Paid subscribers retain the 10% discount on usage billed through Auto.

### Do not confuse it with HydraFusion

This feature sets **model-selection priorities**. HydraFusion selects **models and execution patterns together**. Rather than claiming one is universally better, compare quality, cost, and time on the same task.

[Auto model selection (official documentation)](https://docs.github.com/copilot/concepts/models/auto-model-selection)
