---
title: "SKILL.md の構成要素"
---

**SKILL.md の構成要素**は、[[Agent Skills|エージェントスキル]]の各スキルを構成する YAML フロントマター、Markdown 本文、任意の補助フォルダーを定義します（[[Plugin Manifest & Namespace|プラグインのマニフェストと名前空間]]の `skills/` 内で移植可能）。

## フロントマターとルーティングの例

```yaml
---
name: api-endpoint
description: >
  Generate REST API endpoints for the OctoCAT Supply Chain application
  following established patterns. Use this skill when creating new CRUD
  endpoints, adding routes, or implementing JPA repositories.
---

# API Endpoint Development
## Architecture Overview
```

## 作成時のルール

- **`description` がステージ1のルーティングを決める**：スキルが**何を**生成し、**いつ**起動すべきかを記載する必要があります。[[Agent Skills|エージェントスキル]]はファイル全体を読み込む前に、これを使って正確に選択します。
- **本文を構造化する**：役割、目的、成果物、アーキテクチャの不変条件、検証コマンドを指定します。
- **補助フォルダー**：ヘルパースクリプトを `scripts/`、詳細ドキュメントを `references/`、テンプレートを `assets/` に置き、ステージ3で必要な場合だけ読み込むようにします。
