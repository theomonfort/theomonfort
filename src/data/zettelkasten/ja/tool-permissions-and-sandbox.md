---
title: "ツール権限とサンドボックス"
---

**ツール権限とサンドボックス**は、ホスト設定と [[Copilot Managed Settings|Copilot の管理対象設定]]を通じて、GitHub Copilot クライアントによる読み取り、編集、実行、ネットワーク接続先を制限します（Well-Architected のガードレール #19、#20）。

## 管理対象の権限ルール（`deny > ask > allow`）

- **YOLO モードを禁止**：`disableBypassPermissionsMode: true` は、企業内のクライアントで全許可 / バイパスモードをブロックします。
- **ルールの優先順位**：範囲を限定するマッチャーとして `Shell()`、`Read()`、`Edit()`、`Domain()` を使います。
  - `deny`：ユーザーが承認しても実行しません（例：`Shell(rm -rf *)`）。リポジトリレベルの [[PreToolUse Guardrails|PreToolUse のガードレール]]を補強します。
  - `ask`：毎回、対話的なユーザー確認を必須にします（例：`Shell(git push *)`）。
  - `allow`：確認なしで実行します（例：`Shell(npm test *)`）。リストにない操作は先に確認します。

## ローカルサンドボックスの強制とデスクトップ制御

- **`sandbox`（`enabled: true`、`allowBypass: false`）**：Copilot CLI と Copilot App をローカルワークスペース内に制限します。エージェントはリポジトリ内で作業し、`git` / `gh` を実行できますが、`~/.ssh` や macOS Keychain などホストの機密領域へのアクセスはブロックされます。
- **`features.computerUse: false`（`LOCKED`）**：管理対象マシンでデスクトップ GUI のクリックと入力を無効にします。ローカルでは再有効化できません。
