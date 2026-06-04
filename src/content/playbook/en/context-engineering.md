---
title: Context Engineering
titleEn: Context Engineering
summary: The art of designing the context you pass to AI — not too little, not too much, just the information needed to complete the task.
icon: /theomonfort/icons/context-engineering.png
color: green
order: 8.5
category: plan
related: ['harness-engineering', 'instructions', 'agent-skills', 'mcp']
links:
  - group: 📚 Context Engineering
    label: Context Engineering — interactive guide
    url: https://blog.cloud-eng.nl/context-engineering/
  - group: 📚 Context Engineering
    label: Context Rot — Product Talk
    url: https://www.producttalk.org/context-rot
  - group: 📚 Context Engineering
    label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

## At a Glance

<div class="hero-quote">
  <p>
    <strong>Context Engineering</strong> is the practice of designing the context passed to AI with "as little as possible, but as much as necessary."
  </p>
  <p>
    Rather than making AI read everything, you narrow down the goal, constraints, relevant files, and verification method so AI can pick its next move without hesitation.
  </p>
</div>

> Good context is not about quantity — it's about **selection**. Reduce what's unnecessary; never omit what's needed.

## Context Rot

A larger context window does not make an LLM smarter. Cramming in too much information causes **Lost in the Middle** — important details get buried in the center — or **Recency Bias** — recent information gets overweighted — blunting the model's judgment.

This is called **context rot**.

```mermaid
treemap-beta
"Context window"
  "Smart zone": 60:::smart
  "Dumb zone": 40:::dumb
classDef smart fill:#0891b2,stroke:#67e8f9,color:#ecfeff
classDef dumb fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
```

> The goal of Context Engineering is not to fill the context window, but to **keep the necessary information visible**.

## Context Window: Start (turn 1)

Start is nearly ideal. Only the always-on **System & tools** are loaded — skill descriptions, copilot-instructions, MCP server tool schemas, default tool definitions — leaving plenty of working space. On the very first turn, those are sent fresh, so they count as **input tokens**.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Free space": 75:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Custom Agent (turn 1)

Switching to a custom agent adds that agent's instruction to the context. Both system & tools and the custom agent are sent fresh — all **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Free space": 65:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Prompt (turn 1)

You write a prompt. For example, asking to "add a test" may cause a relevant skill and the path instruction for tests to be loaded. Everything in the window is fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Free space": 35:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Sub-agent (turn 1)

The agent might call **sub-agents** — for example to explore the codebase, query a database, or run a review — and merge their summary back into the main context. Everything in the window is fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Free space": 25:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Memory (turn 1)

As you keep working in the repo, memories are generated and may be dynamically loaded when needed. Everything in the window is still fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Memory": 10:::used
  "Free space": 15:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Output (turn 1)

The LLM responds. Its **Answer** is appended to the context — those are **output tokens**, charged at a different (typically higher) rate than input tokens.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#a16207;border:1px solid #fbbf24;vertical-align:middle;margin-right:0.3em"></span><strong>Output tokens</strong> (LLM response) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Memory": 10:::used
  "Answer": 10:::output
  "Free space": 5:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef output fill:#a16207,stroke:#fbbf24,color:#fef3c7
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Cache input (turn 2)

The user sends a new prompt to start the next turn. Everything from turn 1 — system, tools, custom agent, prompt, sub-agent data, memory, **even the LLM's answer** — is now reused from the **prompt cache** as cheaper **cache input tokens**. Only **Prompt #2** is fresh **input tokens** this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#475569;border:1px solid #cbd5e1;vertical-align:middle;margin-right:0.3em"></span><strong>Cache input tokens</strong> (not guaranteed) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (new this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::cache
  "Custom Agent": 10:::cache
  "Path instruction": 10:::cache
  "Skill": 10:::cache
  "Prompt": 10:::cache
  "Sub-agent data": 10:::cache
  "Memory": 10:::cache
  "Answer": 10:::cache
  "Prompt #2": 10:::used
  "Free space": 5:::free
  "Buffer": 5:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef cache fill:#475569,stroke:#cbd5e1,color:#f1f5f9
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```
