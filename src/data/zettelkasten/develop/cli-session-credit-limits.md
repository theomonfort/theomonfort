---
title: "CLI Session Credit Limits"
group: "cli"
tags: ["cli", "ai-credits", "limits", "budget"]
---

**CLI Session Credit Limits** put a soft AI Credit ceiling on interactive [[Copilot CLI]] sessions and automated [[CLI Programmatic Mode]] runs.

## Setting & Runtime Behavior

- **Interactive**: Run `/limits set max-ai-credits N` via [[CLI Slash Commands & Fleet]].
- **Non-Interactive**: Pass `--max-ai-credits N` on the command line.
- **Model-Aware Pacing**: Used, remaining, and maximum credits are injected to the model as `<session_limits_status>`, prompting the agent to skip optional exploration when budget runs low.
- **Graceful Stop**: On its final turn at the limit, the agent calls no tools, summarizes completed work and remaining items, and exits cleanly. Parallel `/fleet` subagents share the same session pool.
