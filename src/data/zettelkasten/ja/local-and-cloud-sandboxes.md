---
title: "ローカルとクラウドのサンドボックス"
---

**ローカルとクラウドのサンドボックス**は、[[Copilot CLI]]、[[Copilot in VS Code]]、[[GitHub Copilot App]] でのファイル書き込みと、ネットワーク / コマンドの実行を分離します。

## ローカルとクラウドのサンドボックスの比較

| 属性 | ローカルサンドボックス | クラウドサンドボックス |
| --- | --- | --- |
| **提供状況** | GA `2026-10-07` | GA `2026-10-28`（有料 Copilot プラン） |
| **有効化** | `/sandbox enable`（デフォルトは無効） | `copilot --cloud` または `Session Target -> Cloud` |
| **ホスト OS** | macOS、Linux、更新済み Windows 11 | スナップショットから再開できる GitHub ホストの Linux VM |
| **注意点** | ファイルポリシーチェックはベストエフォート。リモート MCP は対象外 | [[Connected Cloud Continuity]] によりクライアントをまたいで再開可能 |

## 分離する境界の違い

- Git ブランチを分離する [[Git Worktree Isolation]] や、完全なクラウド IDE コンテナーを提供する [[GitHub Codespaces]] とは異なり、サンドボックスは実行時のツールと OS の実行境界を強制します。
