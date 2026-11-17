---
title: "フックの設定と利用環境"
---

**フックの設定と利用環境**は、`.github/hooks/*.json` ファイルで、ローカルおよびクラウドの実行環境における [[Hooks|フック]]（[[PreToolUse Guardrails|ツール実行前のガードレール]]と [[Observation & Audit Hooks|監視と監査のフック]]）を設定する方法を定めます。

## `.github/hooks/*.json` のスキーマ

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/guard.sh",
        "powershell": "./scripts/guard.ps1",
        "cwd": ".",
        "timeoutSec": 30,
        "env": { "LOG_LEVEL": "INFO" }
      }
    ]
  }
}
```

- 複数 OS を使うチームでは `bash` と `powershell` の両方を指定します。イベント配列内の複数エントリーは**上から順に**実行されます。デフォルトのタイムアウトは**30秒**で、ペイロードは JSON の `stdin` / `stdout` で受け渡します。
- Copilot 固有のフックは、[[Plugin Manifest & Namespace|プラグインのマニフェストと名前空間]]の `com.github.copilot/` にまとめることもできます。

## 利用環境による読み込み元とスキーマの違い

| 利用環境 | 読み込み元 | 適用範囲 | JSON キーの違い |
| --- | --- | --- | --- |
| **Copilot CLI** | 現在のディレクトリの `.github/hooks/*.json` | 自分の CLI セッション | `timeoutSec` + `toolName` / `toolArgs` / `permissionDecision` |
| **VS Code Agent** | 開いているワークスペースの `.github/hooks/*.json` | 自分の VS Code セッション | `timeout` + `tool_name` / `tool_input` / `hookSpecificOutput` |
| **Copilot Cloud Agent** | **デフォルトブランチ**の `.github/hooks/*.json` | そのリポジトリの**すべての Cloud Agent セッション** | `timeoutSec` + `toolName` / `toolArgs` / `permissionDecision` |
