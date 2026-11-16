---
title: "Gemini 4 in Copilot: Argon, Carbon, and Hydrogen"
date: "2026-11-13"
summary: "A roundup of Google's recent Copilot models: Argon for complex tasks, Carbon with a security focus, and Hydrogen for fast agentic workflows. Plan migration from Argon and Gemini 3.8 Flash before December 14."
category: copilot
source: "https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot"
---

### Three releases, different strengths

| Model | Announcement | What it is designed for |
| --- | --- | --- |
| **Gemini 4 Argon** | October 13 | Complex coding, agentic tasks, and reasoning. GitHub's early testing highlighted gains in Copilot CLI and thorough checks of edge cases. |
| **Gemini 4 Carbon** | November 10 | Complex coding, agentic tasks, and reasoning, with a focus on secure code generation and security work. |
| **Gemini 4 Hydrogen** | November 13 | Google's latest Flash model, designed for fast, efficient agentic coding, tool use, and multistep workflows, with better instruction following than Gemini 3.8 Flash. |

### Which one should you try?

- **Complex or security-focused changes**: Try Carbon for tasks such as a substantial refactor or security-focused implementation.
- **Fast agent workflows**: Try Hydrogen for iterative changes and workflows that call tools across multiple steps.
- **Already using Argon or Gemini 3.8 Flash**: Test their suggested replacements now. Both models will be retired from Copilot on **December 14, 2026**: **Argon → Carbon**, **Gemini 3.8 Flash → Hydrogen**.

These are starting points for evaluation, not a universal model ranking. Compare results on your own tasks.

### Availability and administration

As of **November 16, 2026**, Carbon and Argon are available to **Pro+, Max, Business, and Enterprise** users. Hydrogen also supports **Pro**. All three are generally available with gradual rollout.

The announcements list VS Code, Visual Studio, Copilot CLI, coding agent, Copilot app, JetBrains IDEs, Xcode, and Eclipse. Carbon and Hydrogen additionally list github.com and GitHub Mobile; Hydrogen also lists the Copilot SDK.

Business and Enterprise administrators can control access through model policies. Under default model enablement, new models are enabled unless the global default is off or the model is explicitly disabled. Update workflows and integrations that select retiring models explicitly.

The releases specify provider list pricing under usage-based billing. Check current pricing before choosing a model for recurring tasks.

### Official announcements

- [October 13: Gemini 4 Argon](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/)
- [November 10: Gemini 4 Carbon](https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/)
- [November 13: Gemini 4 Hydrogen](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/)
- [November 13: Upcoming model retirements in December](https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/)

### Documentation

- [Supported models in GitHub Copilot](https://docs.github.com/copilot/reference/ai-models/supported-models)
- [Models and pricing for GitHub Copilot](https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing)
