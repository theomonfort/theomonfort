---
title: カスタムエージェント
titleEn: Custom Agent
summary: 役割・モデル・ツール・指示・スキルを束ねた専用エージェント。"フロントエンド職人"や"レビュー番長"を作れる。
icon: 🥷
color: green
order: 7
category: plan
related: ['agent-skills', 'cli']
links:
  - group: 📖 リファレンス（共通）
    label: GitHub Docs — Custom agents configuration
    url: https://docs.github.com/en/copilot/reference/custom-agents-configuration
  - group: ☁️ Cloud Agent
    label: GitHub Docs — Creating custom agents for Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — About Copilot CLI custom agents
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — Create custom agents for Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
  - group: 🆚 VS Code
    label: VS Code Docs — Custom agents
    url: https://code.visualstudio.com/docs/copilot/customization/custom-agents
  - group: 🌟 コミュニティ例
    label: github/awesome-copilot — Custom agents
    url: https://github.com/github/awesome-copilot/tree/main/agents
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Custom Agent</strong> は、Copilot に <strong>役割・道具・振る舞い</strong> をセットで渡す専門家プロファイル。
  </p>
  <p>
    「同じ AI」でも、Planner / Reviewer / Tester のように人格と権限を切り替えられる。
  </p>
</div>

## 何を固定する？

Custom Agent は **プロンプトだけ** ではなく、エージェントの「働き方」をまとめて固定する。

| 要素 | 何を決める？ | 例 |
| --- | --- | --- |
| Identity | 何者として振る舞うか | `Planner`, `Security Reviewer`, `Test Specialist` |
| Description | いつ呼ぶべきか | 「実装前に計画を作る時」 |
| Tools | どの道具を使えるか | `read`, `search`, `edit`, `github/*` |
| Model | どのモデルで動くか | 設計は強いモデル、探索は速いモデル |
| Target | どの実行環境で使うか | `github-copilot`, `vscode` |
| MCP | 専用の外部ツール | Jira, Figma, Playwright, internal API |
| Prompt | 判断基準・出力形式 | 成功条件、禁止事項、レビュー観点 |

## 2 つのスコープ

|  | 👥 チーム共有 | 👤 個人用 |
| --- | --- | --- |
| 📁 場所 | `.github/agents/*.agent.md` | `~/.copilot/agents/` |
| 🎯 適用範囲 | その repository / workspace | 自分の全 workspace |
| 🤝 共有性 | Git 管理してチームで共有 | ローカル専用 |
| 💡 用途 | チーム標準の Planner / Reviewer / Tester | 個人の作業スタイル・好み |

## `.agent.md` の中身

Custom Agent は Markdown ファイル。上の YAML frontmatter が設定、下の本文がエージェントへの指示になる。設定可能な全フィールドは <a href="https://docs.github.com/en/copilot/reference/custom-agents-configuration" target="_blank" rel="noopener noreferrer" class="retro-link">Custom agents configuration リファレンス</a> を参照。

```yaml
---
name: design-reviewer
description: Figma と実装を照合して UI 差分をレビューする
target: github-copilot
model: Claude Sonnet 4.5
tools:
  - read
  - search
  - github/pull-request-read
  - figma/*
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---

# Role

あなたは UI 実装の design reviewer。
Figma の仕様と Pull Request の差分を比較し、見た目・余白・色・状態差分だけをレビューする。

# Rules

- コードは編集しない
- blocking / non-blocking を分けて指摘する
- 再現手順と確認すべき画面幅を必ず書く
- 推測で断定せず、Figma または diff に根拠があるものだけ指摘する
```

> 良い Custom Agent は「誰か」ではなく、**どの判断を任せるか** が明確。

## 組み込みエージェント例

Copilot Chat や CLI にも、最初から目的別の agent が入っている。  
Custom Agent は、この考え方を **自分のチーム用に増やす仕組み**。

| Surface | Agent | 何をする？ |
| --- | --- | --- |
| Copilot Chat / VS Code | Agent | 複雑な coding task に対して、自律的に計画・編集・コマンド実行・tool 呼び出しを行う |
| Copilot Chat / VS Code | Plan | コードを書く前に、構造化された step-by-step implementation plan を作る |
| Copilot Chat / VS Code | Ask | コードベース・coding concept・VS Code について、ファイル変更なしで質問に答える |
| Copilot CLI | Explore | Quick codebase analysis。main context に追加せず、コードについて質問できる |
| Copilot CLI | Task | tests / builds などのコマンドを実行し、成功時は短い要約、失敗時は full output を返す |
| Copilot CLI | General-purpose | Full toolset と高品質 reasoning が必要な complex multi-step task を別 context で処理する |
| Copilot CLI | Code-review | 変更をレビューし、本当に重要な issue だけを低ノイズで指摘する |

> 画面上では preview / UI によって表示名が短く見えることがあるが、CLI docs の正式名は `General-purpose` と `Code-review`。CLI で独自エージェントを作る方法は <a href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents" target="_blank" rel="noopener noreferrer" class="retro-link">About Copilot CLI custom agents</a> ／ <a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli" target="_blank" rel="noopener noreferrer" class="retro-link">Create custom agents for CLI</a> を参照。

## ハーネスの中で何が起きる？

ユーザーが Custom Agent を呼ぶと、ハーネスは `.agent.md` を取得し、利用可能なツールを絞り込み、エージェント定義を差し込み、最後にプロンプトを追加する。最終的にモデルに渡るコンテキストは **SYSTEM & TOOLS / INSTRUCTIONS / CUSTOM AGENT / PROMPT** の 4 層。

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 470" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'JetBrains Mono','Courier New',monospace;">
  <text x="20" y="50" fill="#e8f4ff" font-size="13" font-weight="bold">USER</text>
  <rect x="110" y="25" width="340" height="50" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="280" y="56" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">"/TDD-RED ADD API ENDPOINT"</text>
  <path d="M 450 50 L 510 50" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <rect x="510" y="25" width="150" height="50" rx="12" fill="#ffb000"/>
  <text x="585" y="56" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">CUSTOM AGENT</text>
  <rect x="665" y="25" width="110" height="50" rx="12" fill="#ff2e88"/>
  <text x="720" y="56" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <path d="M 585 75 L 585 115" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="585" cy="115" r="4" fill="#ffb000"/>
  <rect x="380" y="115" width="400" height="65" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="580" y="139" fill="#ffb000" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="580" y="162" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="middle">RETRIEVES .agent.md FILE</text>
  <path d="M 580 180 L 580 215 L 245 215 L 245 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 580 215 L 580 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 580 215 L 815 215 L 815 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="245" cy="245" r="4" fill="#9bbc0f"/>
  <circle cx="580" cy="245" r="4" fill="#ffb000"/>
  <circle cx="815" cy="245" r="4" fill="#ff2e88"/>
  <rect x="155" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#9bbc0f" stroke-width="2"/>
  <text x="245" y="268" fill="#9bbc0f" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="245" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">ADJUSTS</text>
  <text x="245" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">AVAILABLE TOOLS</text>
  <rect x="490" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="580" y="268" fill="#ffb000" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="580" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">INJECTS AGENT</text>
  <text x="580" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">DEFINITION</text>
  <rect x="725" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="815" y="268" fill="#ff2e88" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="815" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">APPENDS</text>
  <text x="815" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">PROMPT</text>
  <path d="M 245 325 L 245 395" fill="none" stroke="#9bbc0f" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 580 325 L 580 395 L 620 395" fill="none" stroke="#ffb000" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 815 325 L 815 395" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="20" y="417" fill="#e8f4ff" font-size="13" font-weight="bold">MODEL</text>
  <text x="20" y="435" fill="#e8f4ff" font-size="13" font-weight="bold">CONTEXT</text>
  <rect x="155" y="395" width="180" height="55" rx="12" fill="#9bbc0f"/>
  <text x="245" y="420" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="245" y="436" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="345" y="395" width="170" height="55" rx="12" fill="#3b82f6"/>
  <text x="430" y="428" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="525" y="395" width="190" height="55" rx="12" fill="#ffb000"/>
  <text x="620" y="428" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">CUSTOM AGENT</text>
  <rect x="725" y="395" width="180" height="55" rx="12" fill="#ff2e88"/>
  <text x="815" y="428" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
</svg>
</figure>

> 💡 INSTRUCTIONS は元から常に入っている層。Custom Agent が増やすのは **TOOLS の絞り込み・AGENT 定義・PROMPT** の 3 つだけ。

## サブエージェント — タスク用コンテキストを切り出す

調査が必要なときは、ハーネスに **サブエージェント** を作らせる。サブエージェントは別の context window で重い読み込みをこなし、**サマリだけ** をメインに返す。

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 460" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'JetBrains Mono','Courier New',monospace;">
  <rect x="385" y="15" width="240" height="48" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="505" y="45" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="middle">"FIND MY FEATURE"</text>
  <path d="M 505 63 L 505 93" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <circle cx="505" cy="93" r="4" fill="#ff2e88"/>
  <text x="20" y="123" fill="#e8f4ff" font-size="13" font-weight="bold">MAIN</text>
  <text x="20" y="141" fill="#e8f4ff" font-size="13" font-weight="bold">SESSION</text>
  <rect x="160" y="98" width="135" height="55" rx="12" fill="#9bbc0f"/>
  <text x="227" y="123" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="227" y="139" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="300" y="98" width="135" height="55" rx="12" fill="#3b82f6"/>
  <text x="367" y="131" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="440" y="98" width="130" height="55" rx="12" fill="#ff2e88"/>
  <text x="505" y="131" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="575" y="98" width="135" height="55" rx="12" fill="#dc2626"/>
  <text x="642" y="131" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">SUMMARY</text>
  <path d="M 505 153 L 505 183" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <circle cx="505" cy="183" r="4" fill="#ff2e88"/>
  <rect x="305" y="183" width="400" height="60" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="505" y="205" fill="#ffb000" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">LLM → HARNESS</text>
  <text x="505" y="228" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="middle">"CREATE SUBAGENT"</text>
  <path d="M 505 243 L 505 273" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="505" cy="273" r="4" fill="#ffb000"/>
  <text x="20" y="303" fill="#e8f4ff" font-size="13" font-weight="bold">SUBAGENT</text>
  <rect x="160" y="278" width="115" height="55" rx="12" fill="#9bbc0f"/>
  <text x="217" y="303" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="217" y="319" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="280" y="278" width="125" height="55" rx="12" fill="#3b82f6"/>
  <text x="342" y="311" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="410" y="278" width="100" height="55" rx="12" fill="#ff2e88"/>
  <text x="460" y="311" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="515" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="557" y="311" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOC 1</text>
  <rect x="605" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="647" y="311" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOC 2</text>
  <rect x="695" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="737" y="311" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOC 3</text>
  <rect x="785" y="278" width="115" height="55" rx="12" fill="#dc2626"/>
  <text x="842" y="311" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">SUMMARY</text>
  <path d="M 900 305 L 985 305 L 985 125 L 720 125" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="710,125 720,120 720,130" fill="#dc2626"/>
  <text x="1060" y="200" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="end" letter-spacing="1">HARNESS</text>
  <text x="1060" y="218" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="end">PUTS SUMMARY</text>
  <text x="1060" y="234" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="end">BACK INTO MAIN</text>
</svg>
</figure>

> 💡 メインの context budget を汚さずに巨大なドキュメント群を読み解ける。<a class="retro-link" href="/theomonfort/playbook/token-optimization">Token Optimization ↗</a> でも `/research` → `/plan` → `/fleet` の分割が同じ考え方。
