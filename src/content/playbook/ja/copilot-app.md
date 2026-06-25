---
title: Copilot App
titleEn: Copilot App
summary: エージェント駆動開発のための専用デスクトップアプリ。複数のエージェントを並列で走らせ、Issue 探索から実装・レビュー・マージまでを IDE / ターミナル / ブラウザを行き来せず 1 か所で回す"司令塔"。
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 16.7
category: develop
related: ['cloud-agent', 'cli', 'partner-agent', 'agentic-workflow']
links:
  - group: 📖 公式ドキュメント
    label: About the GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/agents/github-copilot-app
  - group: 📖 公式ドキュメント
    label: Getting started with the Copilot app
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started
  - group: 📖 公式ドキュメント
    label: Cloud and local sandboxes
    url: https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes
  - group: 🎓 効率化
    label: Optimizing your AI usage
    url: https://docs.github.com/en/copilot/tutorials/optimize-ai-usage
  - group: ⬇️ ダウンロード
    label: GitHub Copilot app download
    url: https://gh.io/app
  - group: 📰 発表
    label: "GitHub Copilot app generally available (2026-06-17)"
    url: https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/
  - group: 📰 発表
    label: "The agent-native desktop experience"
    url: https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/
---

## 一言で

<div class="hero-quote hero-quote-stars">
  <p>
    <strong>Copilot App</strong> は、エージェント駆動開発のための<strong>専用デスクトップアプリ</strong>。
  </p>
  <p>
    複数のエージェントを並列で指揮し、Issue・PR・CI まで GitHub とネイティブに繋がる。あなたは"書く"のではなく<strong>"指揮する"</strong>側に回る。
  </p>
</div>

> 🎯 2026-06-17 に **一般提供（GA）** 開始。macOS / Windows / Linux 対応。
> 🆓 **すべての有料 Copilot プラン**（Pro / Pro+ / Business / Enterprise）で利用可能。

## できること

Copilot CLI の上に構築され、リポジトリ・ブランチ・Issue・PR が**追加設定なし**で動く。

- **並列ワークスペース**：複数のエージェントセッションを同時に実行。各セッションは専用の git worktree とブランチを持つ。
- **GitHub 統合**：Issue 探索・セッション起動・PR 作成 / レビュー / マージ・CI 結果確認まで、すべてアプリ内で完結。
- **モデル選択**：セッションごとに LLM を選び、reasoning effort を調整。**BYOK**（Bring Your Own Key）で自前プロバイダのモデルも使える。
- **Canvas**：人とエージェントが同じ面（プラン / PR / ターミナル / ブラウザ）で協働できるカスタム UI。
- **Automations**：繰り返しのエージェントタスクを保存し、スケジュール / オンデマンドで実行。
- **クイックチャット**：ブランチもワークスペースも作らずに会話モードで壁打ち。

## セッションモード

タスクの性質に応じて、**エージェントに渡す自律性**を 3 段階で切り替える。

| モード | 動き | 使いどころ |
| --- | --- | --- |
| 🤝 **Interactive** | 協働しながら逐次確認 | 仕様が曖昧・細かく舵を切りたい時 |
| 📝 **Plan** | エージェントが計画し、人が承認 | スコープと方針を先に固めたい時 |
| 🚀 **Autopilot** | 完全自律で実装まで | タスクが明確に定義済みの時 |

> 💡 早い段階の探索は **Quick chat** でスコープを詰めてから本セッションを開くと、手戻りと AI クレジット消費を抑えられる。

## 並列ワークスペースとサンドボックス

各セッションは**独立した git worktree**で動くため、複数タスクを進めてもファイルや文脈が衝突しない。

- 🌿 **worktree 分離**：セッションごとに専用ブランチ。1 件の完了を待たずに次へ進める。
- ☁️ **クラウドサンドボックス**（public preview）：GitHub ホストの環境で実行。手元のマシンを起動したままにする必要がない。
- 🖥️ **ローカルサンドボックス**：自分のマシン上で隔離実行。

> 📝 サンドボックスの詳細は <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes" target="_blank" rel="noopener noreferrer">Cloud and local sandboxes ↗</a> を参照。

## 自動化とカスタマイズ

繰り返す作業を**保存して再実行**でき、組織の文脈をエージェントに注入できる。

- 🤖 **Automations**：定型のエージェントタスクをスケジュール / オンデマンドで実行。
- 🔧 **カスタマイズ**：global instructions・MCP サーバー・agent skills を設定して使う。
- 🕰️ **セッション履歴**：`/chronicle` で過去セッションの知見を引き出す。`/chronicle cost tips` でコストの高いパターンを発見。

```text
/chronicle cost tips   # 過去セッションから無駄の多いパターンを洗い出す
```

> 🔑 BYOK や MCP・skills は <a class="retro-link" href="/theomonfort/playbook/mcp">MCP ↗</a> や <a class="retro-link" href="/theomonfort/playbook/agent-skills">Agent Skills ↗</a> と同じ拡張機構を共有する。

## ★ 使いどころ

**多数のエージェントを同時に指揮する** ── これが Copilot App の真価。

退社前に Issue を 5 件、それぞれ別ワークスペースで起動。Autopilot に任せられるものは任せ、判断が要るものは Plan で承認。CI が緑になった PR から順にレビューしてマージ。

人は **何を作るか / どれを通すか** を決め、機械は **書く / 直す / 検証する** を回す。境界を分けることで、レビュー待ちの PR がパイプラインのように流れる。

> 🎯 IDE は"1 本のタスクに集中"する道具。Copilot App は **"複数のタスクを並列に捌く"** ための司令塔。

## 既存ツールとの位置づけ

同じ Copilot エージェントでも、**どこで指揮するか**で役割が変わる。

| ツール | 居場所 | 強み |
| --- | --- | --- |
| 🖥️ **Copilot App** | デスクトップアプリ | **複数エージェントの並列指揮**・GitHub ネイティブ統合 |
| ⌨️ **Copilot CLI** | ターミナル | スクリプト / CI に組み込みやすい単一エージェント |
| ☁️ **Cloud Agent** | GitHub.com | Issue を assign するだけの非同期実行 |
| 🧩 **Partner Agent** | 各種 SDK / Harness | Claude / Codex など別ハーネスへ委譲 |

> 💡 Copilot App は Copilot CLI の上に作られている。ターミナルでの自動化は <a class="retro-link" href="/theomonfort/playbook/cli">Copilot CLI ↗</a>、GitHub 上の非同期実行は <a class="retro-link" href="/theomonfort/playbook/cloud-agent">Cloud Agent ↗</a> と使い分ける。
