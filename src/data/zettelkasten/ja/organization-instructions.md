---
title: "組織の指示"
---

**組織の指示**（GA `2026-04-02`）により、組織管理者は個々のリポジトリを編集せずに、[[Custom Instructions]] 内で全社共通の常設ルールを公開できます。

## 設定と優先順位の注意点

- **場所**: `GitHub.com -> Organization Settings -> Copilot -> Custom instructions`。
- **主な用途**: セキュリティの基準、規制遵守に関する注意事項、社内ライブラリの使い方、共通のエンジニアリング標準。
- **優先順位の注意**: [[Custom Instructions]] は `Personal -> Repository -> Organization` の順で解決されるため、[[Personal Instructions]] と [[Repository Instructions]] は組織の文章による指示を上書きできます。必須の技術的ガードレールは、[[Hooks]]（[[PreToolUse Guardrails]]）と [[Copilot Managed Settings]] で強制します。
