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
| `hero-quote-plain` | **none** | rare: first content slide with no mascot — never on a later slide |

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

## Section-title doc badge

One canonical doc link per slide, inline on the `##` line:

```markdown
## 有効化と展開 <a class="h2-doc" href="https://docs.github.com/..." target="_blank" rel="noopener noreferrer">📖 Docs</a>
```

Label stays `📖 Docs` in both locales. Max one per slide. Everything else goes in frontmatter `links[]`.

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

## Collapsible widgets

All four are native `<details name="...">` — exclusive open, no JavaScript. Full markup in `SKILL.md` §4h.

| Widget | Row classes | Use for |
| --- | --- | --- |
| `risk-widget` | `risk-hint` `risk-list` `risk-item` `risk-btn` `risk-num` `risk-icon` `risk-label` `risk-gauge` `risk-toggle` `risk-why` | ranked risks — number + severity gauge |
| `spec-widget` | `spec-hint` `spec-list` `spec-item` `spec-btn` `spec-icon` `spec-key` `spec-since` `spec-toggle` `spec-what` | spec / setting keys with a dated changelog link |
| `ctl-widget` | `ctl-hint` `ctl-list` `ctl-item` `ctl-btn` `ctl-icon` `ctl-name` `ctl-when` `ctl-doc` `ctl-toggle` `ctl-body` `ctl-row` `ctl-k` `ctl-v` | feature list, each row handing off to docs |
| `det-widget` | `det-hint` `det-split` `det-list` `det-pick` `det-btn` `det-icon` `det-name` `det-dot` `det-screen` `det-empty` `det-pane` `det-head` `det-title` `det-tier` `det-why` `det-scope` `det-scope-k` `det-scope-v` | long descriptions — fixed-height reading pane, slide can't grow |

Tier variants on `det-dot` / `det-tier`: `is-free` (gb-green) · `is-paid` (crt-amber).

> ⚠️ `det-title` and `det-tier` use `VT323`, which has **no Japanese glyphs**. Keep them Latin in both locales.

## `DEMO` overlay

Presenter run-book pinned to an H2. Classes: `demo-toggle` (the `<input>`) · `h2-demo` (the button label) · `demo-panel` `demo-scrim` `demo-window` `demo-head` `demo-tag` `demo-name` `demo-close` `demo-steps` `demo-step-title` `demo-cmd` `demo-path` `demo-out`.

The `id` must be unique per page (`demo-<slug>`). `Esc` closes it; `←` / `→` still change slides. Full markup in `SKILL.md` §4i.

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
