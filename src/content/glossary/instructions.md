---
title: インストラクション
titleEn: Instructions
summary: リポジトリ単位でAIの挙動を方向づける常駐ルール。`.github/copilot-instructions.md` がチームの "AIへの社是" になる。
icon: 📜
color: amber
order: 6
related: ['prompt-engineering', 'context-engineering']
links:
  - label: Custom instructions for Copilot
    url: https://docs.github.com/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
---

毎回同じ前置きを書きたくない——そういう"常識"はリポジトリの instruction に置く。

**よく入れる項目:**
- スタックとバージョン（"Python 3.12 / FastAPI / pytest"）
- コーディング規約（命名、ディレクトリ、型ヒント）
- やってほしいこと（テスト先行、小さな PR、コミット形式）
- やってほしくないこと（無断で依存を増やさない、本番DBに触らない）
- ドメイン用語（チーム独自の名詞）

> instruction は "AIに毎日言いたい一言" のスクリプト化だ。
