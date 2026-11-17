---
title: "AGENTS.md"
---

**AGENTS.md** はオープンな Markdown 指示ファイルで、GitHub Copilot（Cloud Agent、CLI、VS Code）が [[Custom Instructions]] とともにネイティブに読み込みます。

## ルートへの配置とネストした配置

- **ルートの `AGENTS.md`**: [[Repository Instructions]] の `.github/copilot-instructions.md` とともに、リポジトリ全体のガイダンスとして機能します。
- **ネストした `AGENTS.md`**: サブディレクトリ内（例: `packages/api/AGENTS.md`）に配置し、そのディレクトリツリーにルールの適用範囲を限定します。[[Path Instructions]] の `applyTo` glob と同様に、選択的に適用する役割を担います。
