---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub のセキュリティ機能をまとめた有料製品。2025 年 4 月に GitHub Secret Protection ($19) と GitHub Code Security ($30) の 2 つに分割され、active committer 単位で課金される。Public repo は引き続き無料。
icon: /theomonfort/github-white-icon.svg
color: amber
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
    url: https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-advanced-security
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>GitHub Advanced Security (GHAS)</strong> は、GitHub のセキュリティ機能をまとめた有料アドオン。Code scanning・Secret scanning・Dependabot の高度機能を private repo でも有効化するためのライセンスだった。
  </p>
  <p>
    <strong>2025 年 4 月</strong> に <strong>GitHub Secret Protection</strong> と <strong>GitHub Code Security</strong> の 2 つに分割され、欲しい機能だけを選んで購入できるようになった。
  </p>
</div>

> 🌐 Public repo はすべて引き続き無料。GHAS / Secret Protection / Code Security のライセンスが必要になるのは **private / internal repo** で機能を有効化したい場合だけ。

## 何が入っている?

| 製品 | 主な機能 | 詳細エントリー |
| --- | --- | --- |
| 🔑 **Secret Protection** | Secret scanning · Push protection (org/repo lvl) · Custom patterns · AI detection · Validity checks | <a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> |
| 🔍 **Code Security** | Code scanning (CodeQL) · Copilot Autofix · Security campaigns · Dependabot の高度機能 · Dependency review · Security overview | <a class="retro-link" href="/theomonfort/playbook/code-scanning">Code Scanning ↗</a> · <a class="retro-link" href="/theomonfort/playbook/dependabot">Dependabot ↗</a> |

> 📦 **Dependabot 本体** (alerts / security updates / version updates) は GHAS 不要・完全無料。Code Security に含まれるのは「より細かい制御や Security overview などの高度機能」だけ。

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

> 🎯 まずは Secret Risk Assessment で「うちの組織にどれだけ secret が眠っているか」を可視化してから、Secret Protection の費用対効果を判断するのが定石。詳細は <a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> を参照。

📘 詳細:
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-advanced-security" target="_blank" rel="noopener noreferrer">About billing for GitHub Advanced Security ↗</a>
- <a class="retro-link" href="https://github.com/security/advanced-security" target="_blank" rel="noopener noreferrer">GitHub Advanced Security 製品ページ ↗</a>
