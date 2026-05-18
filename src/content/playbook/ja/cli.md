---
title: Copilot CLI
titleEn: Copilot CLI
summary: ターミナルに住むCopilot。IDEを選ばず、計画→実装→レビューを Shift+Tab だけで往復する"端末の中の同僚"。
icon: 💻
color: cyan
order: 14
category: develop
related: ['agent-skills', 'mcp', 'custom-agent', 'cloud-agent']
links:
  - label: GitHub Copilot CLI — Docs
    url: https://docs.github.com/copilot/github-copilot-in-the-cli
  - label: GitHub Copilot CLI — Overview
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
  - label: Rubber Duck — cross-model second opinion
    url: https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/
  - label: Remote control CLI sessions (Public Preview)
    url: https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview/
  - label: BYOK & Local models 対応
    url: https://github.blog/changelog/2026-04-07-copilot-cli-now-supports-byok-and-local-models/
  - group: 🤖 非対話モード
    label: Running Copilot CLI programmatically
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically
  - group: 🤖 非対話モード
    label: Programmatic reference (full flag list)
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference
  - group: 🤖 非対話モード
    label: Automating tasks with Copilot CLI and GitHub Actions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot CLI</strong> は、ターミナルの中にいる Copilot。
  </p>
  <p>
    基本は VS Code の Copilot と同じように、質問・計画・編集・実行を手伝う。ただし CLI ならではの機能と Harness があるので、ここから一緒に見ていく。
  </p>
</div>

> IDE から離れずに使う Copilot ではなく、**シェルの作業文脈** の中で動く Copilot。

## 主要機能

ターミナル一枚に、フルスタックの AI 環境が乗る。

- **複数ファイルの文脈把握**：リポジトリ全体を一つのワークスペースとして扱う。
- **コード生成・編集**：ターミナルから修正し、差分を確認して承認できる。
- **コマンド実行**：ビルド・テスト・lint などを実行し、結果を読んで次に進む。
- **IDE を選ばない**：VS Code、Vim、SSH 先など、ターミナルがあれば使える。
- **Skills / MCP 対応**：必要な能力や外部ツールを追加できる。
- **非対話実行**：CI、cron、script から `copilot -p "..."` で実行できる。

## CLI と VS Code Chat の違い

| | Copilot CLI | VS Code Chat |
|---|---|---|
| **UI** | とても軽い。ターミナル中心なので、コマンドを覚える必要があり、エディタ UI は最小限。一方で CLI をすぐ開けるので、folder、PowerPoint、Excel など手元の computer resource に対して作業しやすい。 | 画面上で選択肢・設定・ファイル移動・inline diff・debugger を扱いやすい。 |
| **新機能の速さ** | `/chronicle`、`/fleet`、`/share`、Rubber Duck など、新しい実験が入りやすい。 | より安定志向。CLI で育った良いアイデアを取り込んでいくことが多い。 |
| **Sub-agent** | Explore、Task、Rubber Duck、Code Review など、built-in agent を多く持ち、native に起動できる。 | 現時点では限定的だが、少しずつ追いついている。 |
| **Session management** | `/context`、`/compact`、`/session` などで、session を細かく制御しやすい。 | 改善中だが、今は CLI ほど細かくはない。 |
| **Partner agent** | Copilot CLI は Copilot の Harness 内で動く。Codex / Claude の Harness は使えず、使えるのはそれらの **model**。 | VS Code 内では、Copilot、Codex、Claude などの agent / extension を切り替えやすい。 |
| **Index** | 主に `grep`、`rg`、workspace command などの terminal/search tool を使う。 | Blackbird など、エディタ側の richer index を使える。 |

## 強力なビルトインエージェント

Copilot CLI には、よくあるタスク向けの標準エージェントが用意されている。

| エージェント | 説明 |
|---|---|
| **Explore** | コードをメインの文脈に追加せず、素早くコードベースを分析し、コードについて質問できるようにする。 |
| **Task** | テストやビルドなどのコマンドを実行し、成功時は短い要約、失敗時は完全な出力を返す。 |
| **General purpose** | すべてのツールと高度な推論が必要な複雑な複数ステップのタスクを、メイン会話とは別の文脈で処理する。 |
| **Code review** | 本当に重要な問題だけを見つけることに集中してコード変更をレビューし、ノイズを最小化する。 |
| **Research** | コードベース、関連リポジトリ、Web を横断して深く調査し、引用付きの詳細レポートを作成する。 |
| **Rubber duck** | 複雑なタスクに対して建設的な批評役としてフィードバックを返す。Copilot CLI が自動的に使う。 |

## Rubber Duck — クロスモデルレビュー

> 🦆 **Experimental**：メインモデルとは **異なるモデルファミリー** が「セカンドオピニオン」として、計画・実装・テストの各段階で独立レビュー。

```mermaid
flowchart LR
  User([👤 開発者])
  Main["🧠 Main Model<br/>例: Claude"]
  Out["📝 計画 / 実装 / テスト"]
  Duck["🦆 Rubber Duck<br/>例: GPT-5.4"]
  Final([✅ 検証済み出力])
  User --> Main
  Main --> Out
  Out -->|"独立レビュー"| Duck
  Duck -->|"盲点 / 前提誤り"| Main
  Main --> Final

  classDef user fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef main fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef duck fill:#1a1500,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef out fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class User,Final user
  class Main main
  class Duck duck
  class Out out
```

**なぜ効く？** ── 同じモデルが自分の出力をチェックすると、**同じ前提・同じ盲点** に引っかかる。別ファミリーのモデルなら、訓練データも価値観も違うので **見えていなかったロジックエラー** を拾える。

## その他の便利コマンド

CLI は slash command で、モデル・共有・実験機能・環境情報などをすぐ確認できる。

| コマンド | 使いどころ |
|---|---|
| `/help` | 利用できるコマンドやショートカットを確認する。 |
| `/model` | 使用するモデルを確認・切り替える。 |
| `/ide` | VS Code などの IDE と接続する。 |
| `/share` | 現在のセッションを共有する。 |
| `/experimental` | 実験的な機能を確認・有効化する。 |
| `/chronicle` | セッションの流れや作業履歴を確認する。 |
| `/task` | background で動いている agent や task を確認する。 |
| `/ask` | 作業を進める前に、質問として Copilot に相談する。 |
| `/env` | CLI が見ている環境情報を確認する。 |

## 非対話モード(プログラマティック実行)★

<div class="hero-quote hero-quote-plain">
  <p>
    Copilot CLI は <strong>対話セッションを開かずに 1 コマンドで実行</strong> できる。<code>copilot -p "..."</code> でプロンプトを渡せばその場で 1 ターンだけ動いて exit する。
  </p>
  <p>
    シェルスクリプト・cron・<strong>バッチファイル</strong>・<strong>GitHub Actions</strong> から呼べるため、定型業務の自動化や PR の自動レビューなど「人がやらなくていい作業」を Copilot に任せられる。
  </p>
</div>

> 🎯 「対話 UI で毎日同じことを聞いている」と感じたら、それは **スクリプト化のサイン**。`-p` で `cron` に乗せて寝てる間にやらせる。

### 基本の使い方

```bash
# プロンプトを直接渡す
copilot -p "Explain this file: ./complex.ts"

# パイプから流す
echo "Explain this file: ./complex.ts" | copilot
```

| よく使うフラグ | 何をする |
| --- | --- |
| `-p "..."` / `--prompt "..."` | プロンプトを渡して 1 ターンで終了 |
| `-s` (silent) | メタデータを抑制し **応答テキストのみ** を stdout に出す(変数代入・パイプに最適) |
| `--no-ask-user` | clarifying question を出さず、不明点があれば自分で判断して進む |
| `--allow-tool='shell(npm:*), write'` | **必要なツールだけ** 許可(原則これ。`--allow-all` はサンドボックスのみ) |
| `--allow-url=...` | 取得を許可する URL を絞る |
| `--model gpt-5.5` | モデルを固定して結果のブレを抑える |
| `--share='./report.md'` | セッション全体を Markdown で保存 |
| `--share-gist` | セッションを Gist に上げる(EMU・data residency org は不可) |

> 🔒 **権限は最小に**。CI で動かすなら `--allow-tool` でホワイトリスト指定が鉄則。`--allow-all` は危険なので使わない。
> 💰 1 コール = Copilot premium request を 1 つ消費。バッチで何百回叩く場合は <a class="retro-link" href="/theomonfort/playbook/copilot-metrics">Copilot Metrics ↗</a> で消費を見ておく。

### 業務効率化の具体例

| ユースケース | コマンド |
| --- | --- |
| 📝 **コミットメッセージ生成** | `copilot -p 'Write a commit message for the staged changes' -s --allow-tool='shell(git:*)'` |
| 📚 **README / JSDoc を一括生成** | `copilot -p 'Generate JSDoc for all exported fns in src/api/' --allow-tool=write` |
| 🐛 **lint エラーをまとめて修正** | `copilot -p 'Fix all ESLint errors' --allow-tool='write, shell(npm:*), shell(npx:*)'` |
| 🧪 **テスト未整備モジュールにテストを書く** | `copilot -p 'Write unit tests for src/utils/validators.ts' --allow-tool='write, shell(npm:*)'` |
| 🔍 **PR の AI レビュー** | `copilot -p '/review changes vs main. Focus on bugs & security' -s --allow-tool='shell(git:*)'` |
| 🔐 **依存ライブラリの脆弱性監査** | `copilot -p "Audit this project's deps for vulnerabilities" --allow-tool='shell(npm:*)' --share='./audit.md'` |
| 📰 **リリースノート作成** | `copilot -p 'Summarize commits since v1.2.0 as Japanese release notes' -s --allow-tool='shell(git:*)'` |
| 🌏 **ドキュメントの翻訳** | `for f in docs/en/*.md; do copilot -p "Translate $f to Japanese, preserve markdown" -s > "docs/ja/$(basename $f)"; done` |

### シェルスクリプトでよく使うパターン

**変数に取り込む**

```bash
node_version=$(copilot -p 'What Node.js version does this project require? Number only.' -s)
echo "Required: $node_version"
```

**条件分岐に使う**

```bash
if copilot -p 'Does this project have TypeScript errors? Reply only YES or NO.' -s | grep -qi "no"; then
  echo "✅ Clean"
else
  echo "❌ Type errors detected" && exit 1
fi
```

**複数ファイルを順に処理**

```bash
for file in src/api/*.ts; do
  echo "--- Reviewing $file ---" | tee -a review.md
  copilot -p "Review $file for error handling issues" -s \
    --allow-tool='shell(git:*)' | tee -a review.md
done
```

### GitHub Actions に乗せる

```yaml
- name: Generate test coverage report
  env:
    COPILOT_GITHUB_TOKEN: ${{ secrets.COPILOT_PAT }}
  run: |
    copilot -p "Run the test suite and produce a coverage summary" \
      -s --allow-tool='shell(npm:*), write' --no-ask-user
```

- 🔑 **認証は環境変数** で渡す。優先順は `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
- 🧾 **PAT は fine-grained (v2)** で **"Copilot Requests" 権限** を付ける(古い `ghp_` 形式は不可)
- 📦 cron / Jenkins / GitLab CI からも同じ要領で呼び出せる(認証だけ環境変数で渡す)

### 設計のコツ

- 🎯 **プロンプトは具体的に** — ファイル名・関数名・期待する形式を明示。「Number only.」「Reply YES or NO.」のように **出力フォーマットも指定** すると後段でパースしやすい
- 🛡️ **必要なツールだけ許可** — `--allow-tool='shell(git:*), write'` のように対象を絞る
- 🔁 **冪等性を意識** — Actions に乗せる場合、同じ入力で何度走っても安全な操作に限定する(commit/push は人間レビューを挟む)
- 📊 **ログを残す** — `--share='./session.md'` でセッション全体を保存しておくと、結果の根拠を後で追える
- 🧩 **対話モードで作って `-p` に移植** — まず interactive で動かしてプロンプトを煮詰め、固まったら `-p` でスクリプト化、が一番早い

📘 詳細:
- <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically" target="_blank" rel="noopener noreferrer">Running GitHub Copilot CLI programmatically ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference" target="_blank" rel="noopener noreferrer">Programmatic reference (full flag list) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions" target="_blank" rel="noopener noreferrer">Automating tasks with Copilot CLI and GitHub Actions ↗</a>
