---
title: Context Engineering
titleEn: Context Engineering
summary: The art of designing the context you pass to AI — not too little, not too much, just the information needed to complete the task.
icon: 🧠
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

## Context Window: Start

Start is nearly ideal. Only the always-needed system/tools are loaded, leaving plenty of working space.

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Free space": 75:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context Window: Custom Agent

Switching to a custom agent adds that agent's instruction to the context.

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

## Context Window: Prompt

You write a prompt. For example, asking to "add a test" may cause a relevant skill and the path instruction for tests to be loaded.

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

## Context Window: Sub-agent

Sub-agents for exploration, database, review, etc. can return a summary of their findings to the main agent.

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

## Context Window: Memory

As you keep working in the repo, memories are generated and may be dynamically loaded when needed.

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
