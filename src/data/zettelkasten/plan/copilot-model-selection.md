---
title: "Copilot Model Selection"
group: "agents"
tags: ["models", "auto-tier", "copilot", "governance"]
aliases: ["Auto Model Selection", "Model Picker"]
---

**Copilot Model Selection** lets developers and administrators run Anthropic, OpenAI, Google, and Microsoft models inside one governed GitHub Copilot platform rather than managing separate vendor accounts.

## How Models Are Assigned Across Surfaces

- **Interactive Model Picker & `Auto`**: Choose a specific provider model in VS Code, Copilot CLI, Copilot App, or GitHub.com, or select **`Auto`** routing to balance reasoning depth, speed, and multiplier cost.
- **Pinned Per Custom Agent (`model:`)**: Lock a specialist persona to a target model in [[Agent Markdown Config]] for [[Custom Agents]].
- **Per-Subagent Override (`/subagents`)**: Assign distinct model families to built-in workers such as `Rubber-duck` in [[Copilot CLI Subagents]] for independent cross-model critique.
- **Feature Prerequisites**: Background capabilities such as [[Copilot Dreaming]] require enabling specific models (`GPT-6.1 Sol`).
- **Enterprise Policy**: Governed centrally via `model` default (`2026-09-02`), `autoTier`, and organization/enterprise model policies in [[Copilot Managed Settings]].
