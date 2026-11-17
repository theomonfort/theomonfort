---
title: "パブリック監視"
---

**パブリック監視**は [[Secret Protection]] の Enterprise 全体を対象とする機能です（GitHub Enterprise Cloud の [[Security Overview|セキュリティ概要]]内で表示）。`github.com` 全体で、**自社リポジトリ外の公開コンテンツ**に漏えいしたシークレットをリアルタイムに検出します。

**必要なライセンス：** Enterprise で **GitHub Advanced Security（GHAS）または GitHub Secret Protection が有効**である必要があります。GitHub Enterprise Cloud だけでは利用できません。[公式の要件](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring#requirements)。

## 帰属の判定と対象範囲

- **外部への公開漏えい**：個人のフォーク、オープンソースリポジトリ、公開 Issue、PR コメント、ディスカッションに誤って公開された認証情報を検出します。
- **プライベートリポジトリはスキャンしない**：GitHub の公開コンテンツだけを調べます。
- **帰属を判断する2つのシグナル**：
  1. **Enterprise メンバー**：コミッターのアカウントが Enterprise に所属している。
  2. **検証済みドメイン**：コミット作者のメールが Enterprise 所有の検証済みドメインと一致する（仕事用メールを設定した個人アカウントも検出）。
- **リポジトリごとの設定は不要**：Enterprise レベルの Security and quality で一度有効にすると、既存の公開漏えいがすぐに表示されます。
