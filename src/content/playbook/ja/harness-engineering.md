---
title: ハーネスエンジニアリング
titleEn: Harness Engineering
summary: AI エージェントが安全かつ効果的にタスクを進めるために、コンテキスト、ツール、ガードレール、検証方法を整える。
icon: /theomonfort/icons/harness-engineering.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
order: 3.5
category: plan
related: ['agentic-workflow', 'agent-skills', 'mcp']
links:
  - group: 🛡️ Harness examples
    label: Ultralight — multi-agent orchestration
    url: https://burkeholland.github.io/ultralight/#install
  - group: 🛡️ Harness examples
    label: AI Hero — agent-friendly engineering
    url: https://www.aihero.dev/
  - group: 🛡️ Harness examples
    label: HumanLayer CodeLayer — AI coding workflows
    url: https://www.humanlayer.dev/
  - group: 🛡️ Harness examples
    label: Agent Config
    url: https://agentconfig.org/
  - group: 🛡️ Harness examples
    label: Copilot Panorama — complete Copilot architecture
    url: https://gh.io/copilot-panorama
  - group: 🧩 Spec-driven
    label: GitHub Spec Kit — spec-driven development
    url: https://github.com/github/spec-kit
  - group: 🧩 Spec-driven
    label: Kiro Specs
    url: https://kiro.dev/docs/specs/
  - group: 📚 Context Engineering
    label: Context Engineering — interactive guide
    url: https://blog.cloud-eng.nl/context-engineering/
  - group: 📚 Context Engineering
    label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Harness Engineering</strong> は、AI エージェントが作業する環境を整えること。
  </p>
  <p>
    目的と役割を決め、コンテキストとツールを用意し、ガードレールを設け、結果を検証する。
  </p>
</div>

## 古き良き時代（2021 〜 2024）

昔の LLM chat はシンプルだった。ユーザーがプロンプトを投げ、LLM が回答を返す。

```mermaid
flowchart LR
  You[ユーザー] -->|プロンプト| LLM[LLM]
  LLM -->|回答| You

  classDef human fill:#0b1826,stroke:#5eead4,color:#ecf7fb,stroke-width:2px;
  classDef llm fill:#1d1a10,stroke:#fcd34d,color:#fef3c7,stroke-width:2px;
  class You human;
  class LLM llm;
```

> この世界では、context はほぼ **プロンプトの中に人間が手で詰めるもの** だった。

## 現在（2025 〜）

現在は、**プロジェクトのコンテキスト** と **ツール群** を備えた **エージェント／ハーネス** が LLM の前に立つ。

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel .llm-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 6px !important; margin-top: 4px !important; }
    .nodeLabel .llm-row img { width: 22px !important; height: 22px !important; object-fit: contain !important; }
    .nodeLabel .llm-row img.ms-ico { width: 17px !important; height: 17px !important; }
---
flowchart LR
  Project[ユーザー] -->|プロンプト / 指示書 / スキル / MCP| Agent[Copilot<br/>Claude Code<br/>Codex]
  Agent -->|回答 / PR / 編集| Project
  Agent -->|コンテキスト| LLM["<b>LLM</b><div class='llm-row'><img src='/theomonfort/llm-openai.png' alt=''/><img src='/theomonfort/llm-anthropic.svg' alt=''/><img src='/theomonfort/llm-gemini.png' alt=''/><img src='/theomonfort/llm-grok.png' alt=''/><img class='ms-ico' src='/theomonfort/llm-microsoft.svg' alt=''/></div>"]
  LLM -->|次の一手| Agent
  Agent -->|ツール呼び出し| Tools[ツール群<br/>読む / 編集 / 実行]
  Tools -->|結果| Agent

  classDef human fill:#0b1826,stroke:#5eead4,color:#ecf7fb,stroke-width:2px;
  classDef llm fill:#1d1a10,stroke:#fcd34d,color:#fef3c7,stroke-width:2px;
  classDef agent fill:#0d1e18,stroke:#86efac,color:#dcfce7,stroke-width:2px;
  classDef tools fill:#11162c,stroke:#93a8ff,color:#e0e7ff,stroke-width:2px;
  class Project human;
  class LLM llm;
  class Agent agent;
  class Tools tools;
```

エージェントは **何を読むか、どのツールを使うか、結果をどう返すか** を管理する。

## Agent / Harness の裏側（簡略版） <input type="checkbox" id="code-harness-loop" class="demo-toggle" /><label class="h2-demo h2-info" for="code-harness-loop">&lt;/&gt; CODE</label>

<div class="demo-panel is-info">
<label class="demo-scrim" for="code-harness-loop" aria-label="コード例を閉じる"></label>
<div class="demo-window" role="group" aria-label="エージェントの実行ループ（簡略版）">
<div class="demo-head"><span class="demo-tag">CODE</span><span class="demo-name">エージェントの実行ループ（簡略版）</span><label class="demo-close" for="code-harness-loop" aria-label="閉じる">&#10005;</label></div>
<div class="info-body">
<p>コンテキストの準備と実行ループを示す Python 風の疑似コード。</p>

```python
# Setup
system_prompt = "You are a helpful coding assistant..."
available_tools = [search_web, read_file, edit_file, run_terminal]

# Agent loop
user_task = input("How can I help you?")
context = [system_prompt, available_tools, user_task]

while True:
    next_step = await llm.determine_next_step(context)
    context.append(next_step)

    if next_step.intent == "done":
        return next_step.final_answer

    result = await execute_tool(next_step.tool, next_step.args)
    context.append(result)
```

</div>
</div>
</div>

- **実行ループ**：LLM が次の一手を決める。ハーネスがツールを実行し、結果をコンテキストに追加して、`done` まで繰り返す。
- **コンテキスト管理**：システムプロンプト、利用可能なツール、ユーザーのタスク、これまでの結果を、毎回の LLM 呼び出しに渡す。

## 何でハーネスする？

<div class="ctl-widget ctl-compact">
<div class="ctl-list">
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📋</span><span class="ctl-name">リポジトリ全体のInstructions</span><span class="ctl-when"><code>copilot-instructions.md</code></span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v"><code>.github/copilot-instructions.md</code></span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">Repository-wide custom instructions で、リポジトリ全体の規約、ガードレール、検証コマンドを定義する。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📂</span><span class="ctl-name">パス別のInstructions</span><span class="ctl-when"><code>*.instructions.md</code></span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v"><code>.github/instructions/*.instructions.md</code> + <code>applyTo</code></span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">Path-specific custom instructions で <code>tests/**</code> や <code>api/**</code> など領域別のルールを設定する。VS Code では file-based instructions とも呼ぶ。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧩</span><span class="ctl-name">Agent skills</span><span class="ctl-when"><code>SKILL.md</code></span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v"><code>.github/skills/*/SKILL.md</code> または <code>~/.copilot/skills/</code></span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">PR 説明の作成やフロントエンド設計など、専門的な手順を必要な時に読み込む。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Custom agents</span><span class="ctl-when"><code>*.agent.md</code></span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v"><code>.github/agents/*.agent.md</code> または <code>~/.copilot/agents/</code></span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">タスクに応じて役割、モデル、使えるツールを切り替える。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🪝</span><span class="ctl-name">Hooks</span><span class="ctl-when"><code>*.json</code></span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v"><code>.github/hooks/*.json</code></span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">ツール実行の前後にスクリプトを動かし、操作の拒否、ログ記録、通知を行う。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔌</span><span class="ctl-name">MCP servers</span><span class="ctl-when">MCP 設定</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v">エージェントの MCP 設定ファイル。</span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">GitHub、Figma、Playwright、Jira、Salesforce などのツールやサービスに接続する。</span></p>
</div>
</details>
<details class="ctl-item" name="harness-tools">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔐</span><span class="ctl-name">Tool permissions</span><span class="ctl-when">ホスト設定</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">置き場所</span><span class="ctl-v">エージェントホストの権限設定。</span></p>
<p class="ctl-row"><span class="ctl-k">用途</span><span class="ctl-v">読み取りと検索、ファイル編集、コマンド実行のどこまで許可するかを制御する。</span></p>
</div>
</details>
</div>
</div>

## エコシステム対応表 <a class="h2-doc" href="https://agents.md/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

ツール間で共通の形式もあるが、パス別ルールや Custom agents に統一形式はない。

| Layer | GitHub / Copilot | Open ecosystem |
| --- | --- | --- |
| Global instructions | `.github/copilot-instructions.md` | `AGENTS.md` |
| Path-specific rules | `.github/instructions/*.instructions.md` | 共通の glob 形式なし。`src/AGENTS.md` はディレクトリ単位。 |
| Skills（project） | `.github/skills/*/SKILL.md` | `.agents/skills/*/SKILL.md` |
| Skills（personal） | `~/.copilot/skills/` | `~/.agents/skills/` |
| Custom agents | <a href="https://docs.github.com/en/copilot/reference/custom-agents-configuration" target="_blank" rel="noopener noreferrer"><code>.github/agents/*.agent.md</code></a> | 例：Claude Code の <a href="https://code.claude.com/docs/en/sub-agents#choose-the-subagent-scope" target="_blank" rel="noopener noreferrer"><code>.claude/agents/*.md</code></a> |
| MCP / tools | `mcp.config` | `mcp.config` |

## このサイトを作るハーネス

<div class="harness-map">
  <svg viewBox="0 0 940 566" role="img" aria-label="このサイトを作るハーネスの構成図" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>html[data-theme='retro'] .harness-map svg text{font-family:'DotGothic16',monospace}</style>
      <marker id="hm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--c-gb-green)"/>
      </marker>
    </defs>
    <path d="M310,290 H340 V175 H374" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M310,290 H374" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M499,140 V98" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M499,325 V367" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M374,303 H356 V520 H374" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M624,175 H652 V80 H688" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M624,290 H652 V195 H688" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M624,290 H688" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M624,290 H678 V390 H688" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <path d="M624,405 H668 V505 H688" fill="none" stroke="var(--c-gb-green)" stroke-width="2.5" marker-end="url(#hm-arrow)"/>
    <rect x="24" y="249" width="290" height="90" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="20" y="245" width="290" height="90" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
    <text x="165" y="284" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-cyan)">Orchestrator：Theo</text>
    <text x="165" y="306" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">+ 指示書 / プロンプト</text>
    <rect x="378" y="29" width="250" height="70" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="374" y="25" width="250" height="70" rx="2" fill="var(--c-midnight)" stroke="#8b949e" stroke-width="2"/>
    <text x="499" y="54" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="#d0d7de">Explore / Research</text>
    <text x="499" y="76" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">CLI Built-in Agents</text>
    <rect x="378" y="144" width="250" height="70" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="374" y="140" width="250" height="70" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
    <text x="499" y="169" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-cyan)">planner</text>
    <text x="499" y="191" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">Custom agent</text>
    <text x="616" y="201" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-gb-green)">LOCAL</text>
    <text x="382" y="201" text-anchor="start" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="0.5" fill="var(--c-crt-amber)">Opus 4.8</text>
    <rect x="378" y="259" width="250" height="70" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="374" y="255" width="250" height="70" rx="2" fill="var(--c-midnight)" stroke="#8b949e" stroke-width="2"/>
    <text x="499" y="284" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="#d0d7de">Coding</text>
    <text x="499" y="306" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">CLI Built-in Agents</text>
    <text x="382" y="316" text-anchor="start" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="0.5" fill="var(--c-crt-amber)">Opus 4.8</text>
    <rect x="378" y="374" width="250" height="70" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="374" y="370" width="250" height="70" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
    <text x="499" y="399" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-cyan)">Tester</text>
    <text x="499" y="421" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">Custom agent</text>
    <text x="616" y="431" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-gb-green)">LOCAL</text>
    <text x="382" y="431" text-anchor="start" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="0.5" fill="var(--c-crt-amber)">GPT-5.5</text>
    <rect x="378" y="489" width="250" height="70" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="374" y="485" width="250" height="70" rx="2" fill="var(--c-midnight)" stroke="#8b949e" stroke-width="2"/>
    <text x="499" y="514" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="#d0d7de">Review</text>
    <text x="499" y="536" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">CLI Built-in · Rubber Duck</text>
    <text x="382" y="546" text-anchor="start" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="0.5" fill="var(--c-crt-amber)">GPT系</text>
    <rect x="692" y="51" width="240" height="66" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="688" y="47" width="240" height="66" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
    <text x="808" y="74" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-magenta)">Grill-me</text>
    <text x="808" y="96" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">Skill</text>
    <text x="920" y="104" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-gb-green)">LOCAL</text>
    <rect x="692" y="166" width="240" height="66" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="688" y="162" width="240" height="66" rx="2" fill="var(--c-midnight)" stroke="var(--c-gb-green)" stroke-width="2"/>
    <text x="808" y="189" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-gb-green)">MCP Context7</text>
    <text x="808" y="211" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">MCP server</text>
    <text x="920" y="219" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-gb-green)">LOCAL</text>
    <rect x="692" y="261" width="240" height="66" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="688" y="257" width="240" height="66" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
    <text x="808" y="284" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-magenta)">Slide Creator</text>
    <text x="808" y="306" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">Skill</text>
    <text x="920" y="314" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-crt-amber)">REPO</text>
    <rect x="692" y="361" width="240" height="66" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="688" y="357" width="240" height="66" rx="2" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
    <text x="808" y="384" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-neon-magenta)">Prototyper</text>
    <text x="808" y="406" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">Skill</text>
    <text x="920" y="414" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-crt-amber)">REPO</text>
    <rect x="692" y="476" width="240" height="66" rx="2" fill="var(--c-shadow-ink)"/>
    <rect x="688" y="472" width="240" height="66" rx="2" fill="var(--c-midnight)" stroke="var(--c-gb-green)" stroke-width="2"/>
    <text x="808" y="499" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="19" font-weight="700" fill="var(--c-gb-green)">MCP Playwright</text>
    <text x="808" y="521" text-anchor="middle" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="13" fill="#aeb6c2">MCP server</text>
    <text x="920" y="529" text-anchor="end" font-family="'IBM Plex Mono', 'IBM Plex Sans JP', monospace" font-size="11.5" letter-spacing="1" fill="var(--c-gb-green)">LOCAL</text>
  </svg>
</div>
