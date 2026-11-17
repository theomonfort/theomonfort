---
title: "セキュリティ概要"
---

**セキュリティ概要**は、[[GHAS]] を [[GitHub]] の Organization と Enterprise のレベルで管理する統合画面です。[[Secret Protection]]、[[Code Security]]、[[Code Scanning|コードスキャン]]、[[Dependabot]] の状況を集約します。

## 経営層と AppSec 向けの5つのビュー

- **概要とリスク**：未解決の Critical / High 脆弱性、EPSS の悪用可能性、[[Reachability Analysis|到達可能性分析]]、有効な漏えい認証情報に基づき、リポジトリとチームを順位付けします。
- **カバレッジ**：[[Push Protection|プッシュ保護]]、[[CodeQL]]、Dependabot の正確な有効化率を表示し、[[Security Configurations|セキュリティ構成]]で不足を埋めやすくします。
- **修復とキャンペーン**：MTTR（平均修復時間）、新規増加とクローズの推移、[[Security Campaigns|セキュリティキャンペーン]]の解消状況を追跡します。
- **[[Public Monitoring|パブリック監視]]**：自社の Organization 外のパブリックリポジトリに漏えいした認証情報を確認する、Enterprise 専用ビューです。
