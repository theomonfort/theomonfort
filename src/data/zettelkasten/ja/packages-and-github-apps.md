---
title: "Packages と GitHub Apps"
---

**Packages と GitHub Apps** は、[[GitHub]] 全体で標準のアーティファクトホスティングと短命な自動化用 ID を提供し、[[SDLC Stage 05 Operate]] を支えます。

## 統合レジストリとキー不要のボット ID

- **GitHub Packages と GHCR（`ghcr.io`）**: [[GitHub Actions]] 内の標準 `GITHUB_TOKEN` 権限を使い、npm、Maven、NuGet、RubyGems、OCI コンテナーイメージをホストします（上流では [[Package Firewall]] が保護）。ストレージとデータ転送の予算は、[[Cost Centers]] と [[Budgets & Spending Limits]] の下で共有します。
- **固定 PAT ではなく GitHub Apps**: ユーザーにひも付く Personal Access Token を、詳細な権限を持つ**有効期間1時間のインストールトークン**に置き換えます。[[Enterprise Governance]] と [[GitHub Well-Architected Guardrails]] に基づいて制御し、[[GitHub Migrations]] の切り替え後には再登録します。
