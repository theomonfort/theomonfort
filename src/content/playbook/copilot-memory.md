---
title: Copilot Memory（エージェント記憶）
titleEn: Copilot Memory
summary: Copilotがリポジトリで作業しながら学んだ知識を記憶し、未来の自分・チーム全員に引き継ぐ仕組み。使うほど賢くなる。
icon: 🧠
color: magenta
order: 19
category: operate
related: ['cloud-agent', 'copilot-code-review', 'cli', 'instructions']
links:
  - label: Blog — Building an agentic memory system
    url: https://github.blog/ai-and-ml/github-copilot/building-an-agentic-memory-system-for-github-copilot/
  - label: Docs — Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-memory
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Copilot Memory</strong> は <strong>Code Review / Cloud Agent / CLI</strong> がリポジトリで学んだ知識を <strong>記憶し再利用</strong> する仕組み。
  </p>
  <p>
    毎回同じ前置きを書く必要がなくなり、<strong>使うほど Copilot が賢くなる</strong>。
  </p>
</div>

## スコープと仕組み

### スコープ

- 📦 **リポジトリ単位** — 記憶はリポジトリに紐づき、そのリポジトリ内でのみ使用される
- 👥 **全ユーザー共有** — リポジトリにアクセスできる全ユーザーの Copilot 操作で利用可能
- 🔀 **クロスフィーチャー** — Cloud Agent が学んだ知識を Code Review が活用（逆も同様）

### 仕組み

- 🔍 記憶には **コードの引用 (citations)** が付与され、使用時に現在のコードベースと **照合・検証** される
- ⏳ **28 日後に自動削除** — 使用されれば更新・延長される

### なぜ重要か

プロンプトで毎回同じ説明をする必要がなくなり、**使うほど Copilot がリポジトリを深く理解する**。

## 設定する場所

| スコープ | 設定パス | できること |
| --- | --- | --- |
| **リポジトリ** | Repo → **Settings** → *Code and automation* → **Copilot** → **Memory** | 保存された記憶の **一覧確認・個別削除** |
| **Organization** | Org → **Settings** → *Code, planning, and automation* → **Copilot** → **Policies** → *Copilot Memory* | Org 全体で **Enabled / Disabled** |
| **Enterprise** | Enterprise → **AI controls** → **Copilot** → *Copilot Memory* | 全 Org に対して **Enabled / Disabled / Let orgs decide** |

> 📘 公式手順：[Managing and curating Copilot Memory](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory)
