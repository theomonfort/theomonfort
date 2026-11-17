---
title: "カスタム指示"
---

[[GitHub]] の**カスタム指示**は、常時適用される Markdown ファイルと設定です。プロンプトごとに規約を繰り返さずに、Copilot へ継続的なコーディングガイドラインを与えます。

## 3 つのスコープと優先順位

**優先順位**: [[Personal Instructions]] → [[Repository Instructions]]（[[Path Instructions]] を含む）→ [[Organization Instructions]]。

- **個人がリポジトリより優先され、リポジトリが Organization より優先される**: ユーザー単位の設定が、Organization のカスタム指示より優先されます。
- リポジトリでは [[AGENTS.md]] で全体およびサブツリーのルールを表すこともできます。

## ガイダンスと強制適用

- 状況に応じて利用する事実を保存し、遵守を保証できない [[Copilot Memory]] とは異なり、カスタム指示はスコープに応じて決定論的に読み込まれます。
- ただし、カスタム指示はモデルが解釈する自然言語のガイダンスであるため、迂回できない実行ポリシーには [[Hooks]] または [[Copilot Managed Settings]] を使う必要があります。
