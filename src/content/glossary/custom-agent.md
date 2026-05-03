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
  - group: 📖 公式ドキュメント
    label: GitHub Docs — Creating custom agents for Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents
  - group: 📖 公式ドキュメント
    label: GitHub Docs — Custom agents configuration
    url: https://docs.github.com/en/copilot/reference/custom-agents-configuration
  - group: 📖 公式ドキュメント
    label: VS Code — Custom agents
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

Custom Agent は Markdown ファイル。上の YAML frontmatter が設定、下の本文がエージェントへの指示になる。

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

> 画面上では preview / UI によって表示名が短く見えることがあるが、CLI docs の正式名は `General-purpose` と `Code-review`。
