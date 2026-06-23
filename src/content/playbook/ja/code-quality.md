---
title: Code Quality
titleEn: Code Quality
summary: コードの「脆弱性」ではなく「信頼性・保守性」を CodeQL + AI で解析し、PR でコメント＆Copilot Autofix、ダッシュボードでスコア化、ルールセットで品質ゲートまでかける GitHub の機能。Public Preview は無料、2026-07-20 GA で有料化。
icon: 🩺
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 19.5
category: secure
related: ['code-scanning', 'github-advanced-security', 'copilot-code-review']
links:
  - group: 📖 公式ドキュメント
    label: About GitHub Code Quality
    url: https://docs.github.com/en/code-security/concepts/about-code-quality
  - group: 📖 公式ドキュメント
    label: Fixing code quality findings before merging your PR
    url: https://docs.github.com/en/code-security/code-quality/tutorials/fix-findings-in-prs
  - group: 📖 公式ドキュメント
    label: Interpreting the code quality results for your repository
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results
  - group: 📖 公式ドキュメント
    label: Disabling GitHub Code Quality
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/disable-code-quality
  - group: 💰 料金
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/billing/concepts/product-billing/github-code-quality
  - group: 📰 Recent Changelog
    label: "GitHub Code Quality generally available July 20, 2026 (2026-06-16)"
    url: https://github.blog/changelog/2026-06-16-github-code-quality-generally-available-july-20-2026/
  - group: 📰 Recent Changelog
    label: "GitHub Code Quality in public preview (2025-10-28)"
    url: https://github.blog/changelog/2025-10-28-github-code-quality-in-public-preview/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Code Quality</strong> は、コードの <strong>脆弱性</strong> ではなく <strong>信頼性 (reliability)・保守性 (maintainability)</strong> の問題を見つける GitHub の機能。
  </p>
  <p>
    解析は <strong>CodeQL</strong>（ルールベース）＋ <strong>AI</strong> で、見つかった問題は PR に <code>github-code-quality[bot]</code> がコメントし、<strong>Copilot Autofix</strong> がワンクリック修正を提案。<strong>ダッシュボードでスコア化</strong>し、<strong>ルールセットで品質ゲート</strong> までかけられる。
  </p>
</div>

## Code Scanning との違い

同じ CodeQL エンジンでも「探すもの」が違う。**Code Scanning = セキュリティ**、**Code Quality = 健全性**。

| 観点 | 🛡️ Code Scanning | 🩺 Code Quality |
| --- | --- | --- |
| 探すもの | 脆弱性（SQLi / XSS / SSRF…） | 信頼性・保守性の問題（バグの温床・複雑度・重複・デッドコード…） |
| 出力先 | Security タブ / アラート | **Code quality** ページ + **スコア**（reliability / maintainability） |
| PR | code scanning アラート | <code>github-code-quality[bot]</code> のコメント + カバレッジ要約 |
| ライセンス | Public 無料 / Private は GHAS・Code Security | **Copilot も Code Security も不要**（preview 無料 → GA 有料） |
| 強制 | ブランチ保護 / 必須チェック | **ルールセット**で品質ゲート（基準未達の PR をブロック） |

> 🔑 セキュリティの穴は Code Scanning、コードの「借金（技術的負債）」は Code Quality。2 つで攻めと守りが揃う。

## 何が見つかる

- 🧱 **信頼性 (reliability)** — 実行時に壊れやすいパターン、null 参照、リソースリーク、誤った API 利用など
- 🧹 **保守性 (maintainability)** — 過度な複雑度、重複コード、デッドコード、読みにくい構造など “直しておくと後が楽” な箇所
- 🤖 **AI findings（別枠）** — CodeQL のルールベースに加え、**default ブランチへの最近の push** を AI が解析。対応言語の枠を超えた指摘が **「AI findings」ダッシュボード** に別表示される
- 📊 **スコア化** — repo ごとに reliability / maintainability スコアを算出し、優先度づけに使える

## どこに出る

- 💬 **PR コメント** — default ブランチ向けの PR で <code>github-code-quality[bot]</code> が指摘。可能なら **Copilot Autofix** の修正提案つき
- 🌳 **default ブランチ** — リポジトリ全体のスキャン結果を **Code quality** ページに集約
- 🧪 **コードカバレッジ** — カバレッジレポートをアップロードすると、PR にカバレッジ要約（default ブランチとの差分）が表示され、未テスト箇所が見える
- 🗂️ **ダッシュボード** — **repo ダッシュボード**でスコアと要改善箇所、**org ダッシュボード**で全リポの健全性を俯瞰
- 🛫 **Copilot へのアサイン** — Copilot ライセンスがあれば、修正作業を **Copilot cloud agent** にそのまま委譲できる

## ルールセットで品質ゲート

PR 用の **ルールセット**で品質基準を強制し、**基準を満たさない変更をブロック**できる。カバレッジ要件もルールセットで課せる（例：「新規コードのカバレッジが落ちる PR は止める」）。

> 🚦 「見える化」で終わらせず、**マージの条件**にするのがポイント。負債の流入を入口で止められる。

## 対応言語

CodeQL によるルールベース解析の対象：

- **C# / Go / Java / JavaScript / Python / Ruby / TypeScript**

> 🤖 AI findings は上記の枠を超えた言語でも指摘が出ることがある（default ブランチへの最近の push が対象、結果は別ダッシュボード）。

## 始め方

```
Org 所有のリポジトリ → Settings → Code quality（または Code security）
  → Code Quality を Enable
```

- 有効化後、**新規 PR**・**更新された既存 PR**・**default ブランチ全体**で CodeQL スキャンが走る
- 修正は PR の Autofix 提案をクリック。大きめの修正は **Copilot cloud agent** にアサイン
- 仕上げに **ルールセット**で品質ゲートを設定

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/code-quality/tutorials/fix-findings-in-prs" target="_blank" rel="noopener noreferrer">Fixing code quality findings before merging your PR ↗</a>

## 利用条件と料金

| 項目 | 内容 |
| --- | --- |
| 対象 | **Organization 所有**のリポジトリ（GitHub **Team** / **Enterprise Cloud**）。Enterprise **Server** は非対応 |
| ライセンス | **Copilot も Code Security も不要**（Autofix の適用も込み） |
| Public Preview | **無料**。ただしスキャンは **GitHub Actions 分** を消費 |
| GA（2026-07-20〜） | **有料化**：有効リポの **アクティブコミッター 1 人あたり月 $10** + AI 機能（Copilot code review / AI 検出 / Autofix）の従量課金。CodeQL 解析は引き続き Actions 分を消費 |
| 課金回避 | 課金前に **2026-07-20 までに無効化** すれば請求されない |

> 💰 Preview の今は実質 Actions 分のみ。**2026-07-20 GA** で $10/committer/月 + AI 従量に切り替わるので、本番採用前にコストを試算しておく。

📘 詳細:
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/about-code-quality" target="_blank" rel="noopener noreferrer">About GitHub Code Quality ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-code-quality" target="_blank" rel="noopener noreferrer">GitHub Code Quality billing ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-06-16-github-code-quality-generally-available-july-20-2026/" target="_blank" rel="noopener noreferrer">GA on July 20, 2026（changelog）↗</a>
