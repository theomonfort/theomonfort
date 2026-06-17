---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub のセキュリティ機能をまとめた有料製品。2025 年 4 月に GitHub Secret Protection ($19) と GitHub Code Security ($30) の 2 つに分割され、active committer 単位で課金される。Public repo は引き続き無料。
icon: /theomonfort/icons/ghas.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 19.8
category: secure
related: ['secret-scanning', 'code-scanning', 'dependabot']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Advanced Security ホーム
    url: https://github.com/security/advanced-security
  - group: 📖 公式ドキュメント
    label: About GitHub Advanced Security
    url: https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security
  - group: 📖 公式ドキュメント
    label: GitHub plans pricing
    url: https://docs.github.com/en/get-started/learning-about-github/githubs-plans
  - group: 📰 発表
    label: Introducing Secret Protection & Code Security (2025/03)
    url: https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/
  - group: 💰 課金の仕組み
    label: About billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Secret Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code Security Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code Security Risk Assessment GA (2026/04)
    url: https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/
  - group: 📰 Recent Changelog
    label: "Start a GitHub Advanced Security trial from a risk assessment (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-start-a-github-advanced-security-trial-from-a-risk-assessment
  - group: 📰 Recent Changelog
    label: "GitHub Advanced Security setup made simple (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-github-advanced-security-setup-made-simple
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>GitHub Advanced Security (GHAS)</strong> は、GitHub のセキュリティ機能をまとめた有料アドオン。Code scanning と Secret scanning を private repo でも有効化するためのライセンスだった。
  </p>
  <p>
    <strong>2025 年 4 月</strong> に <strong>GitHub Secret Protection</strong> と <strong>GitHub Code Security</strong> の 2 つに分割され、欲しい機能だけを選んで購入できるようになった。
  </p>
</div>

> 🌐 Public repo はすべて引き続き無料。GHAS / Secret Protection / Code Security のライセンスが必要になるのは **private / internal repo** で機能を有効化したい場合だけ。
> 🤖 **Dependabot 本体** (alerts / security updates / version updates / dependency graph) は <strong>どのプランでも完全無料</strong>・GHAS 不要。詳細は <a class="retro-link" href="/theomonfort/playbook/dependabot">Dependabot ↗</a>。

## 何が入っている?

| 製品 | 主な機能 | 詳細エントリー |
| --- | --- | --- |
| 🔑 **Secret Protection** | Secret scanning · Push protection (org/repo lvl) · Custom patterns · AI detection · Validity checks | <a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> |
| 🔍 **Code Security** | Code scanning (CodeQL) · Copilot Autofix · Security campaigns · Dependency review (PR enforcement) · Security overview | <a class="retro-link" href="/theomonfort/playbook/code-scanning">Code Scanning ↗</a> |

## 料金 (2025 年 4 月以降)

| 製品 | 価格 | 課金単位 |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / 月 | active committer |
| 🔍 **GitHub Code Security** | **$30** / 月 | active committer |
| 📦 両方セット | $49 / 月 | active committer |

- 👥 **active committer** = 過去 90 日間に、機能が ON になっているリポジトリへ push したユニークなコミッター。同じ人は何リポジトリに push しても 1 人とカウント
- 💳 **従量課金 (metered)** モデル。月初にライセンス本数を予約する必要はなく、実際に push した人数だけ請求される
- 🏷️ **GitHub Team プラン** からも購入可能 (以前は Enterprise 限定だった)
- 🆓 **Public repo は完全無料**。Open source プロジェクトはライセンス不要

> 💡 Secret scanning だけ欲しいなら **Secret Protection 単体 ($19)** で OK。CodeQL も使いたくなったら **Code Security ($30)** を追加、という段階的な購入ができるのが分割後の利点。

## ライセンスを考えるときの順番

1. 🌐 **Public repo だけなら何もしなくていい** — すべて無料で使える
2. 🆓 **Private repo でもまず無料機能を ON** — Dependabot (alerts / updates) ・ ユーザーレベルの push protection ・ Secret Risk Assessment (1 回限りの棚卸し)
3. 🔑 **シークレット漏洩を組織レベルで強制したい** → **Secret Protection** を購入
4. 🔍 **コード脆弱性 (CodeQL) や Autofix まで欲しい** → **Code Security** を追加

> 🎯 まずは Risk Assessment (下記) で「うちの組織にどれだけ secret や脆弱性が眠っているか」を可視化してから、Secret Protection / Code Security の費用対効果を判断するのが定石。

## 購入前の棚卸し — Risk Assessments

<div class="hero-quote hero-quote-plain">
  <p>
    GitHub には <strong>ライセンス不要・完全無料</strong> で組織のセキュリティ姿勢を可視化できる 2 つの <strong>Risk Assessment</strong> が用意されている。
  </p>
  <p>
    どちらも <strong>Org → Security → Assessments</strong> から 1 クリックで実行でき、結果を見てから Secret Protection / Code Security の購入を判断できる。
  </p>
</div>

| 棚卸し | 何を見る? | 対象 | 頻度 | 詳細 |
| --- | --- | --- | :---: | --- |
| 🔑 **Secret Risk Assessment** | Org 内のリポに眠る secret の種類・件数 | **すべての repo**(public / private / internal / archived) | 1 回限り | <a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> |
| 🔍 **Code Security Risk Assessment** | コード脆弱性を CodeQL で検出 (severity / 言語 / Autofix 可能件数) | **最もアクティブな最大 20 repo** | 90 日に 1 回 | <a class="retro-link" href="/theomonfort/playbook/code-scanning">Code Scanning ↗</a> |

- 🆓 **完全無料** — どちらも GHAS / Secret Protection / Code Security のライセンス不要
- 🛂 **権限** — Organization owner または security manager のみ実行可能
- 📊 **出力** — 集計レポート (個別 secret の値やコードはサーバーに保存されない)
- 🏷️ **対象プラン** — GitHub Team および GitHub Enterprise Cloud (Server は 3.22 で対応予定)
- ⚙️ **Actions 分** — Code Security Risk Assessment は専用の Actions 実行枠を消費しない

> 💡 「予算稟議のために数字が欲しい」「導入前に効果を見たい」というケースで真っ先に使う。両方を同じ日に走らせれば 1 日で組織全体のセキュリティ姿勢が可視化できる。

📘 Risk Assessment 関連:
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment(GitHub Docs)↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA(2026/04)↗</a>

📘 GHAS 全般:
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">About billing for GitHub Advanced Security ↗</a>
- <a class="retro-link" href="https://github.com/security/advanced-security" target="_blank" rel="noopener noreferrer">GitHub Advanced Security 製品ページ ↗</a>
