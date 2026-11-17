---
title: "プラグインのマニフェストと名前空間"
---

**プラグインのマニフェストと名前空間**は [[Agent Plugins|エージェントプラグイン]]の4要素からなるディレクトリ構成を定義し、ベンダー間で移植可能な資産と Copilot 固有の拡張機能を明確に分離します。

## Agent Plugins 1.0 のディレクトリ仕様

| パス | 内容 | すべてのクライアントで移植可能か |
| --- | --- | --- |
| `plugin.json` | ルートマニフェスト（`$schema` は Agent Plugins 1.0 仕様を参照） | はい（全クライアント） |
| `skills/` | スキルごとにサブフォルダーを配置し、それぞれに [[SKILL.md Anatomy|SKILL.md の構成要素]]を格納 | はい（全クライアント） |
| `mcp.json` | [[MCP Configuration|MCP 設定]]に準拠するローカルおよびリモートサーバー定義 | はい（全クライアント） |
| `com.github.copilot/` | [[Custom Agents|カスタムエージェント]]、スラッシュコマンド、ルール、[[Hooks|フック]]、キャンバス | Copilot のみ（他のクライアントは読み飛ばす） |

Copilot 固有の構成要素を `com.github.copilot/` 内に分離することで、プラグイン作者は標準の Agent Plugins 1.0 ホストを壊すことなく、豊富な Copilot 機能を提供できます。
