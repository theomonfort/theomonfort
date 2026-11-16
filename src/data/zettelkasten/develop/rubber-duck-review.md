---
title: "Rubber Duck Review"
group: "cli"
tags: ["cli", "rubber-duck", "multi-model", "review"]
aliases: ["Rubber Duck"]
---

**Rubber Duck Review** (experimental in [[Copilot CLI]]) pairs the primary coding model with a **different model family** acting as an independent critic across planning, implementation, and testing.

## Why Cross-Model Review Works

1. **Main Model** (for example Claude) produces a plan, code diff, or test suite.
2. **Rubber Duck Critic** (for example GPT-5.4, one of the [[CLI Built-in Subagents]]) audits the artifact independently.
3. Because a different model family has distinct training priors, it catches hidden assumptions and logic blind spots that self-review by the same model misses.
4. Complements multi-model orchestration in [[Copilot Fusion]] and [[Fusion Effort & Execution Patterns]].
