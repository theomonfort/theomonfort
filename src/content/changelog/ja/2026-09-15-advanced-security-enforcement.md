---
title: "Advanced Security の設定を Organization にも強制"
date: "2026-09-15"
summary: "Enterprise のセキュリティ構成を、Organization 管理者にも上書きさせない設定が追加。従来はリポジトリの owner だけが制限対象でした。"
category: security
source: "https://github.blog/changelog/2026-09-15-enforce-github-advanced-security-configurations/"
---

### Enforcement の選択肢

Enterprise のセキュリティ構成で、`Enforcement` ドロップダウンから選びます。

- **`Don't enforce`**：権限のある管理者が設定を変更できます。
- **`Enforce for repository owners`**：リポジトリの owner は上書きできませんが、Organization owner は変更できます。
- **`Enforce for repository and organization owners`**：今回追加された選択肢。Organization owner による上書きも防ぎ、Enterprise 全体でセキュリティポリシーを統一できます。

[セキュリティ構成（公式ドキュメント）](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage)
