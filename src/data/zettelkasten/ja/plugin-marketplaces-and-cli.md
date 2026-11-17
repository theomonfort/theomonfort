---
title: "プラグインマーケットプレースと CLI"
---

**プラグインマーケットプレースと CLI**は、[[Agent Plugins|エージェントプラグイン]]のインストール、ローカルテスト、エンタープライズのマーケットプレースポリシーを管理します。

## 組み込みマーケットプレースと CLI コマンド

**`copilot-plugins`**（GitHub 公式）と **`awesome-copilot`**（コミュニティ提供、[[Skill Registries & CLI|スキルレジストリと CLI]]と共通）の2つのマーケットプレースが標準で付属します。

| コマンド | 操作 |
| --- | --- |
| `copilot plugin marketplace browse awesome-copilot` | マーケットプレースで利用可能なプラグインを閲覧 |
| `copilot plugin install <name>@awesome-copilot` | マーケットプレースからインストール（`owner/repo`、`owner/repo:path`、Git URL も指定可能） |
| `copilot plugin list` | インストール済みプラグインと有効状態を表示 |
| `copilot plugin uninstall <name>` | インストール済みプラグインを削除 |
| `copilot --plugin-dir ./my-plugin` | 開発中にインストールせず、ディスクからプラグインを直接読み込む |

## ユーザー単位のインストール範囲とエンタープライズポリシー

- **ユーザー単位のみ**：インストール先は `~/.copilot/installed-plugins/` で、リポジトリ単位ではなく**マシン上のすべてのプロジェクト**に適用されます。
- **エンタープライズのガバナンス**：[[Copilot Managed Settings|Copilot の管理対象設定]]で、`extraKnownMarketplaces`（`autoUpdate` 対応）、`enabledPlugins`（`true` は自動インストールを強制、`false` は無効化）、`strictKnownMarketplaces`（`[]` はすべてのマーケットプレースをブロック）を使って制御します。
