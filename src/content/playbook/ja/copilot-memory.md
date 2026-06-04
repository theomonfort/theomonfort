---
title: Copilot Memory（エージェント記憶）
titleEn: Copilot Memory
summary: Copilotがリポジトリで作業しながら学んだ知識を記憶し、未来の自分・チーム全員に引き継ぐ仕組み。使うほど賢くなる。
icon: /theomonfort/icons/copilot-memory.png
color: magenta
order: 19
category: operate
related: ['cloud-agent', 'copilot-code-review', 'cli', 'instructions']
links:
  - label: Blog — Building an agentic memory system
    url: https://github.blog/ai-and-ml/github-copilot/building-an-agentic-memory-system-for-github-copilot/
  - label: Docs — Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-memory
  - group: 📰 Recent Changelog
    label: "User preferences for Pro / Pro+ (2026-05-15)"
    url: https://github.blog/changelog/2026-05-15-copilot-memory-supports-user-preferences-for-pro-pro-users
  - group: 📰 Recent Changelog
    label: "On by default for Pro / Pro+ (public preview) (2026-03-04)"
    url: https://github.blog/changelog/2026-03-04-copilot-memory-now-on-by-default-for-pro-and-pro-users-in-public-preview
---

## 一言で

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Copilot Memory</strong> は <strong>Code Review / Cloud Agent / CLI</strong> がリポジトリで学んだ知識を <strong>記憶し再利用</strong> する仕組み。
  </p>
  <p>
    毎回同じ前置きを書く必要がなくなり、<strong>使うほど Copilot が賢くなる</strong>。
  </p>
</div>

## スコープと仕組み

### スコープ

- 📦 **リポジトリ単位** — 記憶はリポジトリに紐づき、アクセスできる **全ユーザーで共有** される
- 👤 **ユーザー単位**（Pro / Pro+、Early Access） — 個人の好みが **全リポジトリ・全 Copilot エージェント** に追従し、**他のユーザーには影響しない**。例：コミットスタイル、PR の構成、トーン。管理は<a href="https://github.com/settings/copilot/memory" target="_blank" rel="noopener noreferrer">個人の Copilot Memory 設定 ↗</a>から
- 🔀 **クロスフィーチャー** — Cloud Agent が学んだ知識を Code Review・CLI も活用（逆も同様）

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
