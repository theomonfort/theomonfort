---
title: インストラクション（Instructions）
titleEn: Instructions
summary: リポジトリやファイル単位でAIに常駐のルールを与える"指示書"。チーム全員のCopilotが同じ規約に従うようになる。
icon: 📜
color: amber
order: 5
category: plan
related: ['prompt-engineering', 'context-engineering', 'agent-skills']
links:
  - group: 👤 Personal インストラクション
    label: GitHub Docs — GitHub.com Personal instructions for Copilot Chat
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-personal-instructions
  - group: 👤 Personal インストラクション
    label: GitHub Docs — Copilot CLI custom instructions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
  - group: 👤 Personal インストラクション
    label: VS Code — Customize Copilot Chat with instructions
    url: https://code.visualstudio.com/docs/copilot/copilot-customization
  - group: 📦 Repository インストラクション
    label: GitHub Docs — Add repository custom instructions
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
  - group: 🏢 Organization インストラクション
    label: GitHub Docs — Add organization custom instructions
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/configure-custom-instructions/add-organization-instructions
  - group: 📚 もっと学ぶ
    label: GitHub Docs — Customize Copilot responses with custom instructions
    url: https://docs.github.com/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - group: 📚 もっと学ぶ
    label: GitHub Blog — Tips & best practices for Copilot
    url: https://github.blog/ai-and-ml/github-copilot/5-tips-and-tricks-when-using-github-copilot/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Instructions</strong> は、Copilot に常に守ってほしい開発ルールをあらかじめ渡すための指示書。
  </p>
  <p>
    Repository / Organization / Personal のスコープで読み込まれ、毎回プロンプトに書かなくてもチームの規約を適用できる。
  </p>
</div>


## 3 つのスコープ

| スコープ | 📁 場所 | 💡 用途 |
| --- | --- | --- |
| 👤 **Personal**（個人） | **CLI**：`~/.copilot/copilot-instructions.md`<br/>**VS Code**：User Settings（`github.copilot.chat.*.instructions`）<br/>**GitHub.com**：Copilot Chat → プロフィール画像 → Personal Instructions | スタイルの好み・回答言語・個人的な書き方 |
| 📦 **Repository**（リポジトリ） | `.github/copilot-instructions.md`（単一）<br/>または `.github/instructions/*.instructions.md`（`applyTo` 付き） | プロジェクト規約・フレームワーク固有ルール・「X ライブラリを必ず使う」 |
| 🏢 **Org / Enterprise**（組織） | GitHub.com → Organization Settings → Copilot -> Custom instructions | コンプライアンス・セキュリティ要件・全社共通ポリシー |

> 🎯 **マージ順**：Org → Repository → Personal の順に積み上がる。**Org のルールが最も強く**、ユーザーが上書きできない。

## 📦 Repository レベル

**チーム全員** に効くルール。`git clone` した瞬間にプロジェクト固有の規約が Copilot に伝わる。**2 つのファイル形式** がある：

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/copilot-instructions.md</code>
      <span class="setup-card-tag tag-cyan">🌍 グローバル</span>
    </div>
    <p>
      <strong>適用範囲</strong>：リポジトリ全体<br />
      <strong>読込</strong>：常に有効<br />
      <strong>用途</strong>：技術スタック・命名規則・使う / 使わないライブラリ・レビュー基準
    </p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/instructions/*.instructions.md</code>
      <span class="setup-card-tag tag-magenta">🎯 ファイル単位</span>
    </div>
    <p>
      <strong>適用範囲</strong>：<code>applyTo</code> グロブに一致するファイルのみ<br />
      <strong>読込</strong>：対象を操作する時だけ自動注入<br />
      <strong>用途</strong>：テスト専用・言語別・領域別ルール（フロント / API / DB など）
    </p>
  </div>
</div>

```yaml
---
applyTo: "server/tests/test_*.py"
---
このファイルは pytest の関数型テスト。
- fixture は `conftest.py` から読む
- assert は 1 関数に 1 つまで
- LLM call は必ず mock すること
```
