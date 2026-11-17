---
title: "Actions ランナー"
---

**Actions ランナー**は、[[GitHub Actions]] の [[Workflows & Triggers]] でジョブを実行するマシンです。

## 一時的なライフサイクル

ホスト型ランナーでは、各ジョブは**クローン → 実行 → 破棄**の順に進みます。`actions/checkout` がクリーンな `$GITHUB_WORKSPACE` にリポジトリをクローンし、ステップを実行し、ログとチェック結果を [[GitHub]] に送信してから VM を破棄します。これにより、古い状態が次の実行に持ち越されません（ファイルを保持する場合は [[Actions Cache & Artifacts]] を使用します）。

## ランナーの選択肢

- **GitHub ホスト型の標準ランナー**: GitHub が管理、パッチ適用する Linux、Windows、macOS の VM です。パブリックリポジトリでは無料、プライベートリポジトリでは [[Actions Compute & Budgets]] に基づく従量課金です。
- **Larger Runners**: より多くの CPU やメモリ、GPU、または固定 IP を備えたホスト型マシンで、Team と Enterprise Cloud で利用できます。
- **セルフホストランナーと ARC**: 自社ネットワークで管理するマシン、または **Actions Runner Controller（ARC）**で Kubernetes 上に自動スケールするマシンです。Actions のコンピューティング料金なしで、[[CodeQL]] のビルドや [[Third-Party SARIF]] のスキャンに必要なプライベートインフラへアクセスできます。
