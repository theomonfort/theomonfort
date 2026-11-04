---
title: "Copilot Fusion: model orchestration and local routing"
date: "2026-10-28"
summary: "Choose an effort level instead of a model. Copilot Fusion combines automatic model selection with multi-model orchestration, with experimental routing to supported local models."
category: copilot
event: universe-2026
status: "GA / local routing experimental"
source: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion"
---

### One choice, several execution patterns

- **Standard, High, Max**: choose the effort for everyday work, challenging tasks, or the most demanding reasoning.
- **Single, Cascade, Critique**: Fusion can use one model, escalate an initial answer to a stronger model, or have a second model review it before revision.
- **Administrator control**: Fusion respects enabled model policies. Administrators can restrict its model pool and set a default effort level.

Fusion is generally available on all Copilot plans in VS Code, Copilot app, CLI, and JetBrains. Usage is billed for the models it actually uses.

### Local models are a separate experimental preview

With **Fusion Standard**, opt in to routing between eligible local and cloud models. Supported Windows devices offer managed MAI Code 1.1 Flash setup through Windows ML. CLI also supports manually configured eligible models on Windows, macOS, and Linux; the app's intelligent local routing currently requires Windows ML.

**Local inference does not mean offline operation:** routing still happens in the cloud. Adding an arbitrary BYOK model does not automatically make it eligible for Fusion.

### Official announcements

- [Copilot Fusion: general availability and orchestration](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion)
- [Copilot Fusion: experimental local model routing](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models)
