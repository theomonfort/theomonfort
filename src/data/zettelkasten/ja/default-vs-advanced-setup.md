---
title: "デフォルト設定と高度な設定"
---

[[Code Scanning|コードスキャン]]には [[CodeQL]] を実行する方法が2つあります。組織は [[Security Configurations|セキュリティ構成]]ですぐに導入し、必要な場合だけカスタムパイプラインへ移行できます。

## デフォルト設定（導入時に推奨）

- **ワンクリック、ワークフロー不要**: GitHub が言語を自動検出し、プッシュ、PR、スケジュールに応じてスキャンを実行します。`.yml` を保守することなく、設定も最新に保たれます。
- **組織単位のカスタマイズ**: カスタムリポジトリプロパティ（`github-codeql-config-file` と `github-codeql-extra-queries`）により、管理者はデフォルト設定を無効にせずに、パスを除外したり、組織共通の CodeQL パックや `models-as-data` を追加したりできます。

## 高度な設定

- [[GitHub Actions]]（[[Workflows & Triggers|ワークフローとトリガー]]）に明示的な `.github/workflows/codeql.yml` パイプラインを生成します。
- コンパイル型の C/C++ や Java プロジェクトで、カスタムビルド手順、マトリックス構成の [[Actions Runners|Actions ランナー]]、サードパーティのコーディング規約（MISRA、CERT、AUTOSAR）、または [[Third-Party SARIF|サードパーティ SARIF]] の並行アップロードが必要な場合に使用します。
