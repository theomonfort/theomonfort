---
title: Context Engineering
titleEn: Context Engineering
summary: The art of designing the context you pass to AI — not too little, not too much, just the information needed to complete the task.
icon: /theomonfort/icons/context-engineering.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
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
    <strong>Context Engineering</strong> designs AI context with <strong>as little as possible, as much as necessary</strong>.
  </p>
  <p>
    Select the <strong>goal, constraints, relevant files and verification method</strong> so the agent can choose its next action.
  </p>
</div>

> Good context is not about quantity — it's about **selection**. Reduce what's unnecessary; never omit what's needed.

## Context Rot

A larger window does not guarantee better judgment. Too much context buries important details (**Lost in the Middle**) or overweights recent information (**Recency Bias**).

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-block context-smart" style="--context-size:60">Smart zone</div>
<div class="context-block context-dumb" style="--context-size:40">Dumb zone</div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

> The goal of Context Engineering is not to fill the context window, but to **keep the necessary information visible**.

## Input, Cached Input & Output Tokens

Every turn, what sits in the context window is billed as **three kinds of tokens**. Knowing them explains why long sessions cost what they do.

| Token type | What it is | Relative cost |
| --- | --- | --- |
| 🟥 Input | New text sent this turn — prompt, files, tool results | Standard |
| 🟦 Cached input | Context resent from earlier turns, served from cache | Cheapest (big discount) |
| 🟩 Output | Text the model generates back to you | Most expensive |

Across a long chat, most of the window is **cached input** (the history is re-sent every turn), so caching is what keeps cost sane. You save most by trimming **output** and the **input** you add.

> 💡 The turn-by-turn slides that follow color each block by these token types.

## Context Window: Start (turn 1)

Start is nearly ideal. Only the always-on **System & tools** are loaded — skill descriptions, copilot-instructions, MCP server tool schemas, default tool definitions — leaving plenty of working space. On the very first turn, those are sent fresh, so they count as **input tokens**.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:10"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div></div>
<div class="context-available" style="--context-share:90"><div class="context-block context-free" style="--context-size:75">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Custom Agent (turn 1)

Switching to a custom agent adds that agent's instruction to the context. Both system & tools and the custom agent are sent fresh — all **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:20"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div></div>
<div class="context-available" style="--context-share:80"><div class="context-block context-free" style="--context-size:65">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Prompt (turn 1)

You write a prompt. For example, asking to "add a test" may cause a relevant skill and the path instruction for tests to be loaded. Everything in the window is fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:50"><div class="context-part" style="--context-size:50;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Path instruction</div>
<div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div></div></div></div>
<div class="context-available" style="--context-share:50"><div class="context-block context-free" style="--context-size:35">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Sub-agent (turn 1)

The agent might call **sub-agents** — for example to explore the codebase, query a database, or run a review — and merge their summary back into the main context. Everything in the window is fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:60"><div class="context-part" style="--context-size:60;--context-direction:row"><div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div>
<div class="context-block context-input" style="--context-size:10">Path instruction</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div>
<div class="context-block context-input" style="--context-size:10">Sub-agent data</div></div></div></div>
<div class="context-available" style="--context-share:40"><div class="context-block context-free" style="--context-size:25">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Memory (turn 1)

As you keep working in the repo, memories are generated and may be dynamically loaded when needed. Everything in the window is still fresh **input tokens** on this turn.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:70"><div class="context-part" style="--context-size:70;--context-direction:row"><div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div>
<div class="context-block context-input" style="--context-size:10">Path instruction</div></div>
<div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Sub-agent data</div>
<div class="context-block context-input" style="--context-size:10">Memory</div></div></div></div></div>
<div class="context-available" style="--context-share:30"><div class="context-block context-free" style="--context-size:15">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Output (turn 1)

The LLM responds. Its **Answer** is appended to the context — those are **output tokens**, charged at a different (typically higher) rate than input tokens.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (sent this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#a16207;border:1px solid #fbbf24;vertical-align:middle;margin-right:0.3em"></span><strong>Output tokens</strong> (LLM response) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:80"><div class="context-part" style="--context-size:80;--context-direction:row"><div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Path instruction</div>
<div class="context-block context-input" style="--context-size:10">Skill</div></div></div>
<div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Prompt</div>
<div class="context-block context-input" style="--context-size:10">Sub-agent data</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Memory</div>
<div class="context-block context-output" style="--context-size:10">Answer</div></div></div></div></div>
<div class="context-available" style="--context-share:20"><div class="context-block context-free" style="--context-size:5">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>

## Context Window: Cache input (turn 2)

Turn 1, **including the answer**, can be reused as **cached input**. Only **Prompt #2** is new input. Cache hits are not guaranteed.

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#475569;border:1px solid #cbd5e1;vertical-align:middle;margin-right:0.3em"></span><strong>Cache input tokens</strong> (not guaranteed) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input tokens</strong> (new this turn) &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="Illustrative context window"><div class="context-occupied" style="--context-share:90"><div class="context-part" style="--context-size:90;--context-direction:row"><div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-cache" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Path instruction</div>
<div class="context-block context-cache" style="--context-size:10">Skill</div></div></div>
<div class="context-part" style="--context-size:50;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Prompt</div>
<div class="context-block context-cache" style="--context-size:10">Sub-agent data</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Memory</div>
<div class="context-block context-cache" style="--context-size:10">Answer</div>
<div class="context-block context-input" style="--context-size:10">Prompt #2</div></div></div></div></div>
<div class="context-available" style="--context-share:10"><div class="context-block context-free" style="--context-size:5">Free space</div>
<div class="context-block context-buffer" style="--context-size:5">Buffer</div></div></div>
<figcaption>Illustrative proportions, not measured token usage.</figcaption>
</figure>
