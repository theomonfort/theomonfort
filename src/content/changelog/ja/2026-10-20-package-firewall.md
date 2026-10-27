---
title: "Package firewall：危険な npm パッケージをインストール前にブロック"
date: "2026-10-20"
summary: "Enterprise のポリシーで危険な npm パッケージのダウンロードをブロックし、開発者、コーディングエージェント、CI を保護します。"
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/"
demoUrl: "https://github.com/enterprises/octodemo/settings/policies/package_firewall"
---

**Package firewall は、インストール前にダウンロードをブロックします。** Dependabot のアラートや PR チェックを補完するもので、置き換えるものではありません。

### 何をブロックできる？

- **公開直後のバージョン**：最低経過日数を設定し、既知のアドバイザリがなくてもブロック。
- **既知のマルウェアと脆弱性**：GitHub Advisory Database と照合。脆弱性の重要度のしきい値を設定可能。
- **アテステーションの後退**：以前あった SLSA アテステーションが欠落したバージョンをブロック。
- **新たなインストールスクリプト**：新しく追加された `postinstall` などをブロック。

### 導入方法

**Enterprise → Policies → Package firewall** でルールを設定し、接続方法を選びます。

- **Artifactory がある場合**：公開 npm パッケージの取得を、共通レジストリ側で firewall 経由にします。同じ仮想リポジトリを使う端末や CI の設定変更は不要です。**実験的な対応です。** [設定手順](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-artifactory)。
- **共通レジストリがない場合**：開発端末、エージェント環境、CI ランナーの `~/.npmrc` で接続先を firewall に変更します。端末管理、初期設定スクリプト、共通 CI ワークフローで配布でき、一台ずつ手作業で設定する必要はありません。[設定手順](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-npm)。

どちらも Enterprise メンバーのトークンが必要です。シークレットとして安全に管理します。

**ポリシーを有効にするだけでは、通信経路は変わりません。** firewall を通るダウンロードだけが対象で、公開レジストリへの直接接続は迂回できます。

ブロック時は例外申請用リンクが表示され、Enterprise 管理者またはセキュリティマネージャーが審査します。

### 利用条件

**2026-10-22 時点**：npm のみ、GitHub Enterprise Cloud（データ所在地を含む）向けのパブリックプレビュー。**プレビュー中は無料**、一般提供時は従量課金の予定です。

[ポリシーと例外申請](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall)
