---
title: "エージェント型 Autofix"
---

[[Copilot Autofix]] がプルリクエスト内のインライン提案を扱うのに対し、**エージェント型 Autofix**（「Assign to Copilot」）は、[[Code Scanning]] と [[Code Quality]] の両方で**デフォルトブランチに蓄積した未対応項目**を解消します。

## 自律的な修正と検証のループ

1. **一括割り当て**: デフォルトブランチのアラートを **1～25 件**選択し（Security タブ、Code Quality タブ、または [[Security Campaigns]] ビューから）、必要に応じて指示を追加して **Assign to Copilot** をクリックします。
2. **検証済みのドラフト PR**: Copilot cloud agent が分離された GitHub Actions サンドボックスを起動し、コードベースを探索してファイルを編集します。**その環境内で [[CodeQL]] を再実行し、新しいアラートを発生させずに対象アラートが解消したことを確認**して、人間のレビュー用にドラフト PR を作成します。
3. **Copilot Memory**: リポジトリの規約を読み取り、記録します。後続の修正 PR もプロジェクトの慣例に従います。
4. **使用量の計測**: Code Security / Code Quality の AI クレジットと Actions の実行分数を消費します。[[Code Scanning]] では、開発者に別途 GitHub Copilot シートは**不要**です。
