---
title: "エージェントスキル"
---

**エージェントスキル**（`agentskills.io` のオープン仕様）は、[[GitHub]] Copilot に専門的なワークフローを教える、再利用可能な指示とアセットのパックです。ユーザーの依頼が説明に一致した場合にのみ自動で読み込まれます。

## 2 つのスコープ

| 属性 | チーム共有 | 個人 |
| --- | --- | --- |
| **ディレクトリ** | `.github/skills/<name>/SKILL.md`（または `.agents/skills/`） | `~/.copilot/skills/<name>/SKILL.md`（または `~/.agents/skills/`） |
| **適用範囲** | そのリポジトリのみ。Git でバージョン管理し、チーム全員で共有 | そのユーザーのマシン上の全セッション |

## 3 段階のオンデマンド読み込み

1. **段階 1（`name` + `description`）**: セッション開始時に軽量なスキルカタログとして読み込みます。
2. **段階 2（`SKILL.md` の本文全体）**: ユーザーのプロンプトが `description` に一致した場合にのみ注入します。
3. **段階 3（`scripts/`、`references/`、`assets/`）**: `SKILL.md` が要求したものだけを、必要なときに読み込みます。

## エコシステムとパッケージ化

- [[SKILL.md Anatomy]] に従って構成し、[[Skill Registries & CLI]] または [[GitHub Agent Finder]] でコミュニティカタログからインストールします。[[Agent Plugins]] で MCP とまとめ、[[Copilot Dreaming]] がリポジトリの PR を通じて改善します。
