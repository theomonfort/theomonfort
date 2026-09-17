---
title: "シークレットを含む PR をマージ前にブロック"
date: "2026-09-09"
summary: "Rulesets にシークレット検出アラートの解決を必須にするルールが追加。Push protection に加え、マージ時にもチェックを設けられます。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-09-block-pull-requests-with-exposed-secrets-from-merging/"
demo:
  - "未紹介のデモ：Push protection は Provider パターンのみを対象にした構成を用意する。これはデモ用の設定で、製品の対応範囲を意味するものではない。"
  - "重要なリポジトリの Ruleset で「Require secret scanning alerts are resolved」を有効にし、Provider に加えて Custom と Generic もブロック対象にする。"
  - "安全なテスト用データを使い、Push 時には止まらないケースでも、PR のマージ時にはブロックされることを確認する。実際の認証情報は使わない。"
---

### 覚えておきたいこと

- **Push とマージで、守るタイミングが違う。** Push protection はリポジトリに届く前に止める仕組み。新しいルールは PR のマージ時に追加のチェックを行います。
- **スキャン完了とアラート解決を確認。** PR の先頭コミットのシークレットスキャンが完了し、PR のコミットで新たに持ち込まれたシークレットの未解決アラートがないことが条件です。バイパス権限のない開発者は、各アラートの解決が必要です。
- **対象を広げられる。** 既定は Provider パターン。Custom や Generic パターンもマージのブロック対象に設定できます。

### ここがポイント

たとえば、Push protection の対象を Provider のみにしつつ、重要なリポジトリではマージ時に **Provider / Custom / Generic** をチェックする構成が取れます。Push protection を置き換えるのではなく、補完する使い方です。

GitHub Secret Protection または GitHub Advanced Security の利用者向けパブリックプレビューです。リポジトリ、Organization、Enterprise の Rulesets 設定で **Require secret scanning alerts are resolved** を有効にします。
