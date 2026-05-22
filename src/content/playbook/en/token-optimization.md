---
title: Token Optimization
titleEn: Token Optimization
summary: Tokens get cheaper by raising agent quality, not by shaving prompts. Use model choice, context engineering, deterministic guardrails, and the right agent configs to make every token count.
icon: 🎯
color: green
order: 16.5
category: operate
related: ['context-engineering', 'agentic-workflow', 'instructions', 'custom-agent', 'agent-skills', 'cli', 'copilot-memory']
links:
  - label: Context Rot — Product Talk
    url: https://www.producttalk.org/context-rot
  - label: GitHub Well-Architected
    url: https://wellarchitected.github.com/
  - label: githubnext/agentics (sample agentic workflows)
    url: https://github.com/githubnext/agentics
  - group: 🛠️ Power-user tooling
    label: rtk-ai/rtk — trim shell output for agents
    url: https://github.com/rtk-ai/rtk
  - group: 🛠️ Power-user tooling
    label: jsturtevant/copilot-codeact-plugin — collapse tool calls
    url: https://github.com/jsturtevant/copilot-codeact-plugin
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Don't count tokens — make every token count.</strong>
  </p>
  <p>
    The biggest token savings come from <strong>agent quality</strong>: fewer failed loops, fewer wrong files touched, fewer debugging cycles.
  </p>
</div>

> ⚠️ Optimizing prompts for fewer characters when the agent is still going down the wrong path is pure waste. **Raise quality first; cost falls as a side effect.**

## Why quality is the better lever

### Agent ROI

```
Agent ROI = (Value of agent output − Token cost) / Token cost
```

When the value is **zero** — wrong file, wrong fix, hallucinated change — no amount of token shaving creates ROI. Quality is the only input that moves the numerator.

### The compound-error problem

LLMs are non-deterministic. Even small per-step error rates compound across a multi-step workflow.

| Per-step accuracy | After 10 steps | After 50 steps |
| --- | --- | --- |
| 99% | 90% | **60%** |
| 95% | 60% | **8%** |
| 90% | 35% | **0.5%** |

Each failed loop costs **the loop itself + the recovery loops + the human time to clean up**. The fastest way to spend fewer tokens is to stop wasting them on retries.

> 🚀 *Imagine NASA aiming 20 rockets roughly at the moon and hoping one lands. That's how a lot of agent usage looks today. When tokens were cheap, gambling was fine. Now it isn't.*

## The mental model

### LLM — a stateless probability machine

Text in, text out. Under the hood it predicts the most probable next token given the input. **No memory between calls.** Everything the model "knows" about your session must be re-sent every time.

> 💰 **Input vs output tokens** — output costs more than input (the generation side burns GPU compute). A single "be concise" instruction trims output tokens with no quality hit.

### Agent (harness) — the stateful loop

The agent (VS Code chat, Copilot CLI, Cloud Agent, Claude Code, Codex…) talks to the LLM **many times on your behalf**. On every loop it ships:

- the **system prompt + tool descriptions** (always)
- your **persistent instructions** (always)
- the **prompt and prior responses** (growing)
- any **files** the agent read this session

> 🧠 No magic — just text. The harness is text-in, text-out too; it just stitches together what the LLM sees on each turn.

> 🗂️ **Caching is not guaranteed.** LLMs may reuse a matching prefix, but TTLs are short (a few minutes on some models) — your cached tokens can vanish while you grab a coffee. **Don't design around caching.** It's a power-user concern, not your first lever.

### Context rot

Cramming the context window doesn't make the model smarter. Two well-documented failure modes appear:

- **Lost in the Middle** — when the context is more than half-full, content in the center gets ignored. Switch tasks mid-session and the agent often drifts back to the earlier bug fix.
- **Recency Bias** — content near the end gets overweighted regardless of importance. The agent forgets the system prompt and non-negotiables, then goes off the rails.

> 🎯 **Rule of thumb: 60–70% full is your warning sign.** Not the end of the world, but the cue to **`/clear` and start fresh**, or **extract the plan into a new session**. Always start a new session when the task changes.

> 📘 Deep dive in <a class="retro-link" href="/theomonfort/playbook/context-engineering">Context Engineering ↗</a> (treemaps, what fills the window, mitigation). Reference: <a href="https://www.producttalk.org/context-rot" target="_blank" rel="noopener noreferrer" class="retro-link">Context Rot — Product Talk</a>.

## Why this lives under Operate

<div class="hero-quote">
  <p>
    These controls matter more as you move from <strong>one synchronous agent</strong> to <strong>orchestrating many async agents</strong>.
  </p>
</div>

A handful of agents a day forgives a lot of waste. Once you run dozens of Cloud Agent tasks, agentic workflows, and CLI sessions in parallel, **every inefficiency multiplies**. That's why token optimization belongs in the same bucket as metrics and memory — it's an operational practice, not a one-off prompt tweak.

## The two biggest levers

### 1 — Model choice

| Tier | Examples | Use for |
| --- | --- | --- |
| 🧠 **Reasoning** | Claude Opus 4.7, GPT-5.5 | Sync planning, architecture, debugging, hard reviews |
| ⚡ **Mid** | Claude Sonnet, GPT-5.4 | Async implementation, most Cloud Agent tasks |
| 🪶 **Low** | Claude Haiku, GPT-5 mini | Small refactors, repetitive edits, doc updates |
| 🤖 **Auto** | — | The lazy default — let the platform pick |

> 💡 In the source deck's examples, picking the wrong tier produced up to a **~24× cost difference** for the same task. Defaulting Opus for typo fixes is the most common waste.

### 2 — Context engineering

> *"As much as required, as little as necessary."*

- **`/clear` often** — start a fresh session for each new task instead of letting context bleed across.
- **Provide only relevant context** — link a specific file, not the whole directory.
- **Compacting** can help — but it can also lose important detail. Use it cautiously.
- See <a class="retro-link" href="/theomonfort/playbook/context-engineering">Context Engineering ↗</a> for the full mental model.

### Your prompt is always-on

Prompts, system messages, and tool descriptions sit at the bottom of the context window **for every loop**. That means:

- Don't optimize the prompt for **fewer tokens** — optimize it to **steer the agent correctly from the start**.
- A 50-token vague prompt that triggers a 30-loop debugging spiral costs orders of magnitude more than a 200-token precise one that lands in 3 loops.

### Write stop signals

Left to its own devices, the agent will keep finding "the next thing it could do." Tell it **when to stop**.

| Don't | Do |
| --- | --- |
| "Fix the bug" | "Fix the bug in issue #45. **Stop when the failing test goes green.** Don't commit or push." |

> 💡 Without stop signals, the agent will happily commit → push → wait for CI → then start fixing whatever else failed. A single "stop when X" line removes a lot of wasted loops.

## Divide and conquer: Research → Plan → Implement

Doing research, planning, and implementation in one session pollutes the context window. Split them.

| Phase | Goal | Best model | Output |
| --- | --- | --- | --- |
| 🔍 **Research** | "What files are relevant?" | Reasoning (e.g. Gemini 2.5 Pro, Opus 4.7) | A short list of files & assumptions |
| 📋 **Plan** | Turn research into a precise spec | Reasoning (Opus 4.7) | A markdown plan |
| 🛠️ **Implement** | Execute the spec | Mid-tier (Sonnet, GPT-5.4) — or a fleet | Code + tests |

> 💡 In <a class="retro-link" href="/theomonfort/playbook/cli">Copilot CLI ↗</a>, `/research`, `/plan`, and `/fleet` map directly onto these phases. Each phase runs in its own context window, so the bloated research session never reaches the implementer.

> ⚠️ **Don't use a reasoning model for implementation.** Even with an airtight spec, a reasoning model may second-guess the plan ("I have a better idea") and walk away from it. For the execution phase, a mid-tier model is **faster, cheaper, and actually follows the spec**.

## Deterministic guardrails prevent expensive retries

Tests, linters, type checkers, and security scans are **token-saving tools**.

| Without guardrails | With guardrails |
| --- | --- |
| Buggy change → buggy change 2 → buggy change 3 → debugging session → incident | Buggy change → **failing test caught immediately** → one correction → green |

Without them, the agent compounds bad changes silently and you pay in CI minutes, code-review cycles, and human triage time. With them, errors are caught **on the same loop they were introduced**.

> 📊 **Evidence:** the Copilot CLI team's own codebase is **over half tests**. Deterministic guardrails aren't a philosophy — they're the concrete equipment that lets you run agents fast without letting them quietly go wrong.

> 📘 Pair this with <a class="retro-link" href="/theomonfort/playbook/hooks">Hooks ↗</a> to enforce a `pre-write → run-tests` discipline automatically.

## Agent configs at a glance

The configs you choose decide **what enters the context window and when**. Each has a quality and token signature:

| Config | Loaded when? | Token / quality risk | Best use | Avoid when |
| --- | --- | --- | --- | --- |
| 📌 **Persistent instructions** (<a class="retro-link" href="/theomonfort/playbook/instructions">Instructions ↗</a>) | Always-on, every loop | Bloats every loop if too long | Project non-negotiables, agent-miss log, "be concise" trims (use `copilot-instructions.md` **OR** `AGENT.md` — pick one, not both) | Pasting docs or AI-generated walls of text |
| 🎭 **Custom Agents** (<a class="retro-link" href="/theomonfort/playbook/custom-agent">Custom Agent ↗</a>) | When you invoke them | Mostly a quality lever; can also trim toolset | **Bias** a role/workflow (e.g. `/tdd-red`), prevent wrong tool paths | A behavior that's already easy to prompt one-shot |
| 🧩 **Skills** (<a class="retro-link" href="/theomonfort/playbook/agent-skills">Agent Skills ↗</a>) | Lazy-loaded by the LLM on demand | Descriptions still cost tokens; redundant skills crowd the menu | Capabilities the model wouldn't otherwise have | Re-teaching what the model already knows (e.g. "a React skill") |
| 🔌 **MCPs** (<a class="retro-link" href="/theomonfort/playbook/mcp">MCP ↗</a>) | Tool descriptions always-on once registered | Bloats system prompt; can trigger undesired calls | External APIs you genuinely need always available | Heavy/situational ones (Playwright) — wrap them in a Custom Agent instead |
| 🪞 **Sub-agents** | When the main agent (or you) spawns one | Spends extra tokens, but isolates noise from the main session | Research, codebase scans — return a summary, keep the main window clean | Trivial questions; the orchestration overhead isn't worth it |
| 📂 **Scoped instructions** | Conditional on file paths | Same as persistent, just narrower | Monoliths with distinct sections (frontend vs backend) | Small repos — keep them in one persistent file |
| 📝 **Prompt files** | Manually invoked | Helpful for trimming toolset + invoking Custom Agents | Reusable "starting points" for known workflows | Copilot CLI (not supported) — use Skills or Custom Agents |
| 🧠 **Copilot Memory** (<a class="retro-link" href="/theomonfort/playbook/copilot-memory">Copilot Memory ↗</a>) | Auto, small, always-on | Generally minor — but stale memories can mislead | Letting Copilot accumulate repo knowledge over time | When you haven't reviewed recent memories in a while |

> ⚠️ Treat every always-on config as a tax on every single loop. Be aggressive about trimming, deactivating, or scoping them.

> 🧪 **Persistent instructions are a living document.** The Copilot CLI team **wipes `copilot-instructions.md` clean every quarter** as a discipline. The codebase and the models evolve, so yesterday's agent-miss log becomes today's overbearing rules. **Write → run → expire → rewrite.** Don't generate them with AI (the file is a human-to-agent contract). And skip "Caveman skill"-style output-trim skills — a single "be concise" line in `copilot-instructions.md` does the same job.

## Advanced — power-user tips

These are conditional and come with trade-offs. Reach for them once the basics above are in place.

- 🧮 **Think in code** — for big API responses or long files, write a script that filters first, then hand the result to the agent.
- 🖥️ **CLI vs MCP** — leaning on `gh`, `kubectl`, `npm` etc. is often leaner than the equivalent MCP because the model already knows these tools.
- ✂️ **Trim shell output** — tools like <a href="https://github.com/rtk-ai/rtk" target="_blank" rel="noopener noreferrer" class="retro-link">rtk-ai/rtk</a> compress noisy command output before it hits the context window.
- 📊 **Run `/chronicle tip` regularly** — analyze your Copilot CLI sessions to surface concrete improvement areas.
- 🔁 **Collapse tool calls** — <a href="https://github.com/jsturtevant/copilot-codeact-plugin" target="_blank" rel="noopener noreferrer" class="retro-link">copilot-codeact-plugin</a> batches multiple tool calls into one round-trip.
- 🎚️ **Model-specific tuning** — possible, but models change fast; only worthwhile at very high scale.

## The long-term mindset

- 🧭 **Build analytical skills.** Coding was never the true value of developers — analytical skills and domain fluency were. Telling an agent precisely what to do, in the speak of the domain, becomes the most valuable craft.
- 🏛️ **Apply good architecture.** Domain-Driven Design, Hexagonal, CQRS, Event-Driven — clean boundaries give agents stronger guard rails and prevent them from putting code in the wrong place. Debates about 5-line functions matter less than ever; architecture matters more.
- 🔧 **Iterate on prompts & configs.** You're a context engineer now. Treat agent misses like incidents, keep configs fresh, and use `/chronicle` to spot patterns.

## 5 things to start doing today

1. ✅ **Choose the right model** for the task — stop defaulting to Opus for typos.
2. ✅ **Provide clear guidance in your prompts** — steer first, trim later.
3. ✅ **Research → Plan → Implement** — split sessions, switch models per phase.
4. ✅ **Provide deterministic guardrails** — tests, linters, security scans.
5. ✅ **Maintain a concise, human-written `copilot-instructions.md`** — use it as an agent-miss log and to trim output ("be concise").

> 🎯 **If you remember one thing:** write **as little context as required, and as much as necessary** — and let quality do the cost-cutting.
