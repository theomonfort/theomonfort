---
title: ハーネスエンジニアリング
titleEn: Harness Engineering
summary: エージェントが安全かつ効果的に動ける足場の設計。ツール群、制約、権限、外部接続の設計術。
icon: 🛡️
color: green
order: 8
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
    <strong>Harness Engineering</strong> は、AI から最高の結果を引き出すための足場設計。
  </p>
  <p>
    ただ制限するだけではなく、目的・文脈・役割・検証方法を整えて、AI が迷わず安全に成果へ向かえる状態を作る。
  </p>
</div>

## The good old days

昔の LLM chat はシンプルだった。You が prompt を投げ、LLM が answer を返す。

```mermaid
flowchart LR
  You[You] -->|Prompt| LLM[The LLM]
  LLM -->|Answer| You

  classDef human fill:#102033,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px;
  classDef llm fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px;
  class You human;
  class LLM llm;
```

> この世界では、context はほぼ **prompt の中に人間が手で詰めるもの** だった。

## Current

現在は、project context と tools を持つ **agent / harness** が LLM の前に立つ。

```mermaid
flowchart LR
  Project[You + Project] -->|prompts / instructions / skills / MCP| Agent[The Agent<br/>aka Harness<br/><br/>Copilot Chat<br/>Copilot CLI<br/>Cloud Agent<br/>Claude Code<br/>Codex]
  Agent -->|answer / PR / edit| Project
  Agent -->|context| LLM[The LLM]
  LLM -->|next step| Agent
  Agent -->|tool call| Tools[Tools<br/>read / edit / run]
  Tools -->|result| Agent

  classDef human fill:#102033,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px;
  classDef llm fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px;
  classDef agent fill:#132812,stroke:#9bbc0f,color:#f4ffd8,stroke-width:2px;
  classDef context fill:#20242a,stroke:#8b949e,color:#d0d7de,stroke-width:2px;
  class Project human;
  class LLM llm;
  class Agent agent;
  class Tools context;
```

> No magic. Agent は、LLM を直接呼ぶ代わりに、**何を読ませるか・どの tool を使わせるか・結果をどう戻すか** を管理する layer。

## Agent / Harness の裏側（Simplified）

- **Execution Loop**：LLM が次の一手を決め、tool 実行 → 結果を context に戻す、を `done` まで繰り返す。
- **Context Management**：system prompt、available tools、user task、tool results を整理し、毎回の LLM call に必要な context として渡す。

```python
# --- Setup ---
system_prompt = "You are a helpful coding assistant..."
available_tools = [search_web, read_file, edit_file, run_terminal]

# --- Agent Loop ---
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

## 何でハーネスする？

AI を強くする技術ツールは 1 つではない。**常に読ませるもの** と **必要な時だけ呼ぶもの** を分ける。

| 技術ツール | 置き場所 / 設定 | 使いどころ |
| --- | --- | --- |
| Repository-wide custom instructions | `.github/copilot-instructions.md` | リポジトリ全体の規約・禁止事項・検証コマンド |
| Path-specific custom instructions | `.github/instructions/*.instructions.md` + `applyTo` | `tests/**`、`api/**` など領域別ルール |
| Agent skills | `.github/skills/*/SKILL.md` / `~/.copilot/skills/` | PR description、frontend design など専門手順 |
| Custom agents | `.github/agents/*.agent.md` / `~/.copilot/agents/` | 役割・モデル・使えるツールを切り替える |
| MCP servers | MCP 設定ファイル | GitHub、Figma、Playwright、Jira、Salesforce へ接続 |
| Tool permissions | agent host の権限設定 | `read/search` のみ、`edit` 可、コマンド実行可などを制御 |

> GitHub Docs の名称は **Repository-wide custom instructions** と **Path-specific custom instructions**。VS Code 側では後者を **file-based instructions** とも呼ぶ。

## エコシステム対応表

同じ「AI の足場」でも、置き場所やファイル名はエコシステムごとに少し違う。

| レイヤー | GitHub / Copilot | Open ecosystem |
| --- | --- | --- |
| 全体指示 | `.github/copilot-instructions.md` | `AGENTS.md` |
| パス別ルール | `.github/instructions/*.instructions.md` | nested `AGENTS.md` |
| Skills（project） | `.github/skills/*/SKILL.md` | `.agents/skills/*/SKILL.md` |
| Skills（personal） | `~/.copilot/skills/` | `~/.agents/skills/` |
| Custom agents | Copilot custom agents | agent definitions / plugins |
| MCP / tools | `mcp.config` | `mcp.config` |

> Copilot の強みは、主要ベンダーの形式を native にサポートできること。CLI では `/help` を入力すると、今使える形式やコマンドを確認できる。

## よく使う概念

良い harness はツールの寄せ集めではなく、**AI が迷わない進め方** を先に決める。

| 型 | 何をする？ | 何が良くなる？ |
| --- | --- | --- |
| Spec-to-code / Spec-driven | 先に **what / why** を spec にし、plan → tasks → implement へ落とす | 仕様が source of truth になり、vibe coding ではなく予測可能な実装になる |
| Multi-phase coding plan | orchestrator が実装を複数 phase に分解し、各 phase の目的・順序・完了条件を決める | 大きな変更でも、AI が一気に突っ込まず段階的に進められる |
| File assignment | Planner が触るファイルを明示し、orchestrator が file overlap を見て並列化する | 複数 agent が同じファイルを壊し合わず、Coder / Designer を並列に走らせられる |
| Prompt engineering | Skill / Agent を作る時に **role・objective・deliverable** を明確に書く | 何者として、何を達成し、何を出力すべきかがぶれない |
| Context engineering | タスクに必要な context だけを構造化して渡す | 余計な情報で迷わず、コードベース・仕様・制約に沿った回答になる |
| Approval gates | spec / plan / PR / release など重要な節目で人間が確認する | 自動化の速度を保ちながら、危険な判断だけ人間が止められる |

> 先に **spec・phase・file ownership・role/objective/deliverable・context・approval** を設計すると、AI は速くなるだけでなく、やり直しも減る。

## 例：Ultralight

[Ultralight](https://burkeholland.github.io/ultralight/) は Microsoft の Developer Advocate、Burke Holland さんの multi-agent orchestration 例。  
Multi-phase execution plan を作り、ファイルの重なりを検出し、Planner / Coder / Designer に並列で仕事を渡す harness になっている。

```mermaid
flowchart LR
  User[User prompt] --> O[Orchestrator<br/>Claude Sonnet 4.6<br/>multi-phase plan]

  O --> P[Planner<br/>Claude Opus 4.6<br/>research + docs]
  O --> C[Coder<br/>GPT-5.3-Codex<br/>scoped code changes]
  O --> D[Designer<br/>Claude Opus 4.6<br/>UI / UX owner]

  D -.-> S[Frontend Design Skill<br/>used by Designer<br/>brand / layout / CSS]
  C -.-> M[MCP Server<br/>used by Coder<br/>GitHub / Playwright<br/>docs]

  P --> O
  C --> O
  D --> O
  O --> R[Pull Request<br/>human review]

  classDef host fill:#102033,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px;
  classDef agent fill:#132812,stroke:#9bbc0f,color:#f4ffd8,stroke-width:2px;
  classDef harness fill:#2a1020,stroke:#ff2e88,color:#ffe8f4,stroke-width:2px;
  classDef ship fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px;
  class O host;
  class P,C,D agent;
  class S,M harness;
  class R ship;
```

> AI を信頼するな。**役割・モデル・ツール権限・スキル・MCP** で囲った harness を信頼せよ。
