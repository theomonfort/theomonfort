---
title: "Copilot の security review で secret scanning をオンデマンド実行"
date: "2026-11-17"
summary: "Copilot の security review が、オプトイン後にコード変更を GitHub secret scanning の検出器でスキャンできるようになりました。追加プランは不要です。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-17-secret-scanning-on-demand-for-developers-and-agents/"
---

### 覚えておきたいこと

- **できること**：Copilot の security review が、従来の LLM によるレビューと GitHub secret scanning の検出器を併用します。provider パターンに加え、パスワードや接続文字列内の認証情報などを検出する fine-tuned model も使います。スキャン対象はコード変更で、リポジトリの履歴は対象外です。
- **利用できる場所**：Copilot CLI、Copilot app のセッション、Copilot SDK integrations、Copilot code review でパブリックプレビューとして利用できます。このリリースでは VS Code は対象外です。
- **有効化方法**：secret scanning は既定で無効です。Copilot CLI では対話セッション内で `/settings aiSecretDetection on` を実行します。Copilot app では **Settings → Experimental** の **AI secret detection** を有効にします。SDK integrations では `SECURITY_REVIEW_FINE_TUNED_MODEL` feature flag と GitHub 認証が必要です。Copilot code review では **Settings → Copilot → Code review → Security** の **Secret scanning** を有効にします。
- **利用条件と課金**：これらの Copilot 機能に追加プランは不要です。スキャンには Secret Protection AI Credit SKU の AI credits が消費されます。

有効化した後、`/security-review` を実行するか、`security-review` specialist に変更内容のレビューを依頼します。
