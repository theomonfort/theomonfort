# Style cheatsheet

Quick lookup for the playbook slide style. Use this as a reference when filling in frontmatter or picking a visual block.

## Categories (`category`)

| id | JA label | EN label | Default actor | Typical color |
| --- | --- | --- | --- | --- |
| `introduction` | はじめに | Introduction | Author / Theo | cyan |
| `plan` | 企画 | Plan | Team Manager | green |
| `develop` | 開発 | Develop | Junior Developer | magenta |
| `review` | レビュー | Review | Senior Developer | amber |
| `secure` | テスト & 品質保証 | Test & Secure | DevSecOps Engineer | cyan |
| `operate` | 監視 | Operate | Whole Team | green |

## Colors (`color`)

| value | accent | reads as |
| --- | --- | --- |
| `magenta` | hot pink (#ff2e88) | active / hands-on |
| `cyan` | electric blue (#00f0ff) | informational / safe |
| `amber` | CRT amber (#ffb000) | review / caution |
| `green` | game-boy green (#9bbc0f) | planning / steady |

## Hero-quote variants (`<div class="hero-quote ...">`)

| Class to add | Mascot | Use when |
| --- | --- | --- |
| (default, no extra class) | octocat-mascot | first slide, generic intro |
| `hero-quote-chat` | octocat-chat | conversational / Q&A |
| `hero-quote-soon` | octocat-monocle | "coming soon" / preview |
| `hero-quote-green` | octocat-green | plan / operate intro |
| `hero-quote-red` | octocat-red | warning / dangerous topic |
| `hero-quote-stars` | octocat-stars | celebration / launch |
| `hero-quote-plain` | **none** | mid-deck section header (no character framing) |

> 🛡️ The `secure` category auto-applies the monocle octocat to every `hero-quote`. Add `hero-quote-plain` to opt out per-slide.

## Link groups (frontmatter `links[].group`)

Use the same string across links to bucket them on the final slide. Conventions used across existing entries:

| Group label | Use for |
| --- | --- |
| `📖 公式ドキュメント` | docs.github.com / official reference |
| `🎓 チュートリアル` | tutorials, guides |
| `📰 発表` | blog posts, changelog announcements |
| `💰 課金の仕組み` | pricing / billing pages |
| `🆓 無料の棚卸し` | free assessments, free tier guides |
| `🤖 非対話モード` | scripting / CI / automation |
| `🛠️ 設定リファレンス` | config schemas |
| `🧪 サンプル` | example repos / demos |

(In English entries use the same emoji + an English label, e.g. `📖 Official docs`.)

## Callout emoji palette

| emoji | meaning |
| --- | --- |
| 🎯 | takeaway / north star |
| 🔑 | key fact / auth |
| ⚠️ | warning |
| 💡 | tip |
| 📝 | note |
| 🤖 | automation |
| 🔧 | configuration |
| 🌐 | public / network |
| 🆓 | free |
| 💰 | paid |
| 📦 | module / package |
| ✅ | do this |
| ❌ | don't do this |
| ★ | featured / killer feature |

## Common slide skeleton

```markdown
## ★ 特定コマンドのブロック (PreToolUse)

これが Hooks の **キラー機能**。⋯

```bash
#!/bin/bash
INPUT=$(cat)
# ⋯
```

| 出力フィールド | 値 | 意味 |
| --- | --- | --- |
| `permissionDecision` | `"deny"` | 実行をブロック |

> 🎯 ブロック対象としてよくある実例:
> - 破壊系シェル — `rm -rf /`, `dd if=`
> - 特権昇格 — `sudo`, `chmod 777`
```

That single H2 = 1 slide containing: prose paragraph → code block → table → callout list. All four blocks fit on one screen at present-mode font size.

## Build commands (playbook repo only)

```bash
pnpm install
pnpm build                       # produces 32+ pages, fails on schema errors
pnpm dev --host 127.0.0.1        # http://127.0.0.1:4321/theomonfort/
```

In present mode: `P` toggle · `←` `→` slides · `Esc` exit.
