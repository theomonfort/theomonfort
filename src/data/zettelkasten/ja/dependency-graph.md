---
title: "依存関係グラフ"
---

**依存関係グラフ**は、[[Dependabot]] を [[GitHub]] 上で支える基盤です。リポジトリのマニフェストとロックファイル（`package-lock.json`、`pnpm-lock.yaml`、`requirements.txt`、`pom.xml`、`go.mod`、`Cargo.lock`、[[GitHub Actions]] の `.github/workflows/*.yml` にある [[Marketplace Actions|Marketplace アクション]]の参照など）を解析し、**直接依存と推移的依存**の完全な一覧を作成します。

## この基盤を利用する機能

- GitHub Advisory Database に新しい CVE やマルウェアアドバイザリが追加されると、[[Dependabot Alerts & Updates|Dependabot のアラートと更新]]に情報を提供します。
- [[Dependency Review|依存関係レビュー]]と [[Open Source License Compliance|オープンソースライセンスのコンプライアンス]]向けに、差分単位でパッケージとライセンスの変更を算出します。
- **ワンクリックで SBOM をエクスポート**: Insights > Dependency graph > Export SBOM（または REST API）から **SPDX JSON 形式のソフトウェア部品表**を生成し、顧客監査やサプライチェーンのコンプライアンスに利用できます。
