---
title: "サードパーティーの SARIF"
---

**SARIF**（Static Analysis Results Interchange Format）は、[[Code Scanning|コードスキャン]]を [[GitHub]] 上の開発者向け統合ハブとして使えるようにする、オープンな JSON 標準です。

## 統一されたセキュリティ体験

- 外部の SAST、IaC、コンテナ、DAST スキャナー（Semgrep、Snyk、Checkmarx、Trivy、ZAP）の `.sarif` 出力を、[[GitHub Actions]]（[[Marketplace Actions|Marketplace の Actions]]と [[Actions Cache & Artifacts|Actions のキャッシュと成果物]]）内の `github/codeql-action/upload-sarif` または REST API でアップロードします。
- 外部の指摘は [[CodeQL]] や [[AI Scan]] のアラートと並び、プルリクエストの差分注釈、[[Rulesets & Merge Protection|ルールセットとマージ保護]]のゲート、[[Security Campaigns|セキュリティキャンペーン]]、[[Security Overview|セキュリティ概要]]に表示されます。
