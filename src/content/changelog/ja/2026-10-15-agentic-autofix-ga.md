---
title: "コードスキャンアラートの Agentic Autofix が一般提供"
date: "2026-10-15"
summary: "コードスキャンアラートを Copilot に割り当てると、コードベースを調査して修正案を作成し、CodeQL で検証したうえでレビュー用のドラフト PR を開きます。"
category: security
status: "GA"
source: "https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability/"
demoLinks:
  - label: "octodemo → Advanced Security の Global settings"
    url: "https://github.com/organizations/octodemo/settings/security_analysis"
demo:
  - "octodemo の Settings → Advanced Security → Global settings を開き、Code scanning にある Agentic Autofix を見せる。設定は変更しない。"
  - "導入の流れを説明する。まず Enterprise の Policies → Advanced Security で Agentic Autofix を許可する。その後 Organization で対象リポジトリ向けに有効化でき、リポジトリ管理者は個別にオプトアウトできる。"
  - "成果物とコストを説明する。Copilot は CodeQL で修正を検証してドラフト PR を作成する。セッションを開始すると Code Security AI Credits と GitHub Actions の実行時間を消費する。"
---

### 何が変わる？

- **修正から検証まで**：Copilot が関連ファイルを調査し、修正案を作成して CodeQL を再実行。必要に応じて修正を繰り返し、ドラフト PR を開きます。PR には修正内容と検証手順の説明が含まれます。
- **個別でも一括でも割り当て可能**：アラートの **Assign to Copilot** を使うか、リポジトリのアラート一覧や Security campaign で最大 **25 件**を選択し、1 つの PR でまとめて修正できます。
- **デフォルトブランチが対象**：PR や他のブランチでのみ検出されたアラートは Copilot に割り当てられません。
- **REST API**：Update a Code Scanning Alert エンドポイントで `assignees: ["copilot-swe-agent[bot]"]` を指定して割り当てられます。

### 利用条件と課金

GitHub Enterprise Cloud（データ所在地を含む）の GitHub Code Security または GitHub Advanced Security 利用者が対象です。Enterprise 管理者が **Agentic Autofix** ポリシーを許可し、その後 Organization またはリポジトリの管理者が機能を有効化します。Copilot の支払い方法の設定が必要です。

有効化すると、個別アラートの無料の **Generate Fix** が **Assign to Copilot** に置き換わります。Agentic Autofix は **Code Security AI Credits** と **GitHub Actions の実行時間**を消費します。AI Credits の使用量は Enterprise の課金画面の **AI usage** に **Advanced Security** として表示されます。

パブリックプレビューを利用していた Organization も再度有効化する必要があります。提案された変更は、必ずレビューとテストを行ってからマージします。

[Autofix の公式ドキュメント](https://docs.github.com/enterprise-cloud@latest/code-security/concepts/code-scanning/autofix-for-code-scanning) / [アクセスの管理](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning)
