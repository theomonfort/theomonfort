---
title: Copilot Code Review
titleEn: Copilot Code Review
summary: Copilot をレビュアーとして手動・自動でアサインできる機能。コードの意図を読み、コメント・概要・修正提案を返す ── 人間レビューの前段ノイズ取りから自動化まで。
icon: 🔍
color: green
order: 9
category: review
related: ['cloud-agent', 'instructions', 'agentic-workflow']
links:
  - label: 概要 — Code review (Docs)
    url: https://docs.github.com/en/copilot/concepts/code-review
  - label: 使い方 — Use Copilot code review
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review
  - label: 自動レビュー設定
    url: https://docs.github.com/en/copilot/how-tos/agents/copilot-code-review/automatic-code-review
  - label: 対象外ファイル
    url: https://docs.github.com/en/copilot/reference/review-excluded-files
  - label: カスタム指示（custom instructions）
    url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
  - label: 最適化 — Optimize code reviews
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/tutorials/optimize-code-reviews
  - label: Blog — 60M Copilot code reviews
    url: https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/
---

## 一言で

<div class="hero-quote hero-quote-stars">
  <p>
    <strong>Copilot Code Review</strong> は、Copilot を <strong>レビュアーとして手動・自動でアサインできる</strong> 機能。
  </p>
  <p>
    アサインされた Copilot がコードの意図を読み、インラインコメント・PR 概要・修正提案を返してくれる。
  </p>
</div>

> 💡 **アナロジー**：**24/7 で待機している新人レビュアー**。基礎的な指摘・スタイル・null 安全性は全部任せて、人間は **設計・ビジネスロジック・メンタリング** に集中できる。

## Copilot Code Review の強み

- 🧠 **文脈を理解** — コードの意図を把握し、インラインコメント・**PR 概要**・修正提案を返す
- ⚙️ **自動化** — Repo / Org / Enterprise レベルで自動実行
- 📜 **カスタマイズ** — `copilot-instructions.md` でレビュー基準を定義
- 🔧 **修正** — 指摘を 1 件ずつ、またはまとめて一括修正
- 🖥️ **快適な UI** — VS Code / GitHub.com 上で提案された変更を **diff ビュー** でスムーズに確認・適用
- 🔎 **透明性** — Actions のログ・エージェントセッションですべて追跡可能

## 実績データ

日本を代表する **自動車業界・製造業** の顧客（2025 年 9 月〜 2026 年 2 月、PR Open Duration の中央値）。

<div class="bar-chart">
  <div class="bar-chart-title">PR の オープン期間 (日)</div>
  <div class="bar-chart-legend">
    <span><span class="dot dot-pink"></span> Copilot Code Review なし</span>
    <span><span class="dot dot-purple"></span> Copilot Code Review あり</span>
  </div>
  <div class="bar-groups">
    <div class="bar-group">
      <div class="bars">
        <div class="bar bar-pink" style="height: 88.75%"><span class="bar-value">14.2 日</span></div>
        <div class="bar bar-purple" style="height: 72.5%"><span class="bar-value">11.6 日</span></div>
      </div>
      <div class="bar-label">自動車業界の顧客</div>
    </div>
    <div class="bar-group">
      <div class="bars">
        <div class="bar bar-pink" style="height: 85%"><span class="bar-value">13.6 日</span></div>
        <div class="bar bar-purple" style="height: 69.4%"><span class="bar-value">11.1 日</span></div>
      </div>
      <div class="bar-label">製造業界の顧客</div>
    </div>
  </div>
</div>

> 💰 **ビジネス価値**：PR 承認 → マージまでの期間が短縮 ── **開発リードタイム** が縮み、市場投入スピードが上がる。極めて高い ROI。

## 使い方

| 場所 | トリガー | 何が起きる |
| --- | --- | --- |
| **GitHub.com 手動レビュー** | PR の **Reviewers** に `Copilot` を追加 | 数分後にインラインコメント + PR Overview が返ってくる |
| **GitHub.com 自動レビュー** | Repo / Org / Enterprise 設定で「PR 作成時に自動レビュー」を ON | すべての新規 PR が自動でレビューされる（3 ステップで Org 全体に展開可） |
| **VS Code** | `Copilot: Review uncomitted changes` を Source Control パネルから実行 | コミット前の変更にその場でレビュー → push 前にセルフチェック完了 |
| **GitHub CLI** | ターミナルで `/review` を実行 | 現在の作業ツリー / ブランチ差分をその場でレビュー — エディタを開かずに確認可能 |
| **GitHub CLI (rubber duck)** | 設計や実装方針を相談 → `rubber-duck` エージェントに壁打ち | 実装前に盲点・ロジック欠陥・代替案を指摘 → 手戻りを未然に防ぐ |

## 自動レビューのセットアップ

**Ruleset** で「PR 作成時に自動でレビュー」を有効化。Repo / Org / Enterprise の 3 レベルで適用範囲を選べる。

| スコープ | 設定パス | 主なオプション |
| --- | --- | --- |
| **リポジトリ** | Repo → **Settings** → *Code and automation* → **Rules** → **Rulesets** → *New branch ruleset* | ✅ Automatically request Copilot code review<br/>✅ Review new pushes<br/>✅ Review draft pull requests |
| **Organization** | Org → **Settings** → *Repository* → **Rulesets** → *New branch ruleset* | リポジトリをパターンで一括対象（`*-feature` など） |
| **Enterprise** | Enterprise → **Policies** → **Rulesets** | 全 Org に強制適用 — ガバナンスを一元管理 |

> 📘 公式手順：<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review" target="_blank" rel="noopener noreferrer" class="retro-link">Configure automatic code review</a> — スクリーンショット付き

## カスタマイズ

レビュー基準は **`.github/copilot-instructions.md`** に書くだけ。

```markdown
# コードレビュー基準
## <セキュリティ>
- ...
## <命名規則>
- ...
## <ライブラリ方針>
- ...
```

ファイル種類ごとに分けたい時は **`NAME.instructions.md`** を併用：

```yaml
---
applyTo: "**/*.test.ts"
---
## <テスト規約>
- ...
```

## 限界と人間の役割

Copilot Code Review は **強力だが万能ではない**。次の領域は人間が引き続き担う：

- **ビジネスロジックの正しさ** ── 要件・仕様と照合する判断は AI には不可
- **深いセキュリティ分析** ── SAST / SCA は **CodeQL** など専用ツールと併用
- **設計レビュー** ── アーキテクチャ・モジュール境界・トレードオフの議論
- **メンタリング** ── なぜそう書くべきかをチームメンバーに伝える

> 🎯 **役割分担**：AI が **基礎指摘・スタイル・null 安全性・テスト不足** を全部拾ってくれる分、人間は **設計・要件・育成** という付加価値の高い仕事に時間を使える。
