---
title: "重要な操作の前に Proof of presence で本人確認"
date: "2026-09-24"
summary: "トークン作成、Webhook 編集、セキュリティ設定変更などの重要な操作の前に、IdP での再認証または MFA を必須にできます。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-24-require-proof-of-presence-for-high-impact-actions/"
---

### 覚えておきたいこと

- **対象**：Microsoft Entra ID を SSO の IdP（SAML / OIDC）として使う、github.com または GHEC-DR の EMU Enterprise。
- **確認後 2 時間は再確認不要**：同じブラウザーセッションでの重要な操作に適用。
- **PR マージはまだ対象外**：今後対応予定。

[設定方法（公式ドキュメント）](https://docs.github.com/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-proof-of-presence)
