---
title: "Dependabot のアラートと更新"
---

[[Dependabot]] は、[[Dependency Graph|依存関係グラフ]]を基盤とする**3つの独立した設定**でサプライチェーンの保守を管理します。

## 1. Dependabot アラート（検出）

- 依存関係の一覧を **GitHub Advisory Database**（NVD の CVE、メンテナーによる GHSA アドバイザリ、エコシステムのフィード、オプトインの **`npm` マルウェアアラート**）と照合します。
- 各アラートに **EPSS**（Exploit Prediction Scoring System）の確率スコアを付与します。[[Reachability Analysis|到達可能性分析]]や [[Auto-Triage & Assign to Agent|自動トリアージとエージェントへの割り当て]]と併用して、実環境で悪用される脆弱性を優先できます。

## 2. Dependabot セキュリティ更新（検出後の修正）

- アラートが発生すると、脆弱なパッケージを**修正済みの最小バージョン**へ更新するプルリクエストを自動的に作成します。

## 3. Dependabot バージョン更新（予防的な保守）

- `.github/dependabot.yml` で設定し、各エコシステムをスケジュール（`daily`、`weekly`、`monthly`）に従って確認します。対象には [[GitHub Actions]] の [[Marketplace Actions|Marketplace アクション]]（同じ PR で [[Workflow Lockfiles|ワークフローロックファイル]]も更新）や Docker が含まれます。**グループ化した更新**に対応し、多数の PR ではなく、レビュー可能な1つの PR にアップグレードをまとめられます。
