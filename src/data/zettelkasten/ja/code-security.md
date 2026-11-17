---
title: "Code Security"
---

**Code Security** は [[GHAS]] を構成する 2 製品の 1 つです（アクティブコミッター 1 人あたり月額 $30、[[Secret Protection]] と並行して提供）。チームが書くコードと、プロジェクトが取り込むオープンソースパッケージの両方を保護します。

## 主な機能

- [[Code Scanning]]（SAST）: [[CodeQL]]、[[AI Scan]]、[[Third-Party SARIF]] による静的解析で、マージ前に悪用可能な欠陥を検出します。[[Copilot Autofix]] と [[Agentic Autofix]] を併用します。
- [[Dependabot]]（SCA）: [[Dependency Graph]] を基盤としたサプライチェーンの監視と依存関係の自動修正です。[[Dependency Review]]、[[Open Source License Compliance]]、[[Reachability Analysis]]、[[Package Firewall]] を含みます。

## 大規模な管理

- [[Security Campaigns]]: 大量の未対応アラートを、担当者と期限を持つ完了可能なスプリントに分割します。
- [[Risk Assessments]]: ライセンス購入前に、最大 20 のアクティブなリポジトリで無料の Code Security Risk Assessment を実行します。
- [[Security Overview]]: Organization 全体の脆弱性リスクとスキャンの適用範囲を監視します。
