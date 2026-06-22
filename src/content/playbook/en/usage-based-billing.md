---
title: Usage-based Billing (UBB)
titleEn: Usage-based Billing
summary: On June 1, 2026 GitHub Copilot moved to usage-based billing (UBB). Cost is tied to the tokens actually processed (input, output, cached), and usage is shown and budgeted in GitHub AI credits (1 credit = $0.01 USD). The core principles, aligned with the docs.
icon: /theomonfort/icons/ubb-coin.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 30.5
category: administration
related: ['license-management', 'copilot-metrics', 'token-optimization']
links:
  - group: 📰 Announcement
    label: "Updates to GitHub Copilot billing and plans (2026-06-01)"
    url: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/
  - group: 📰 Announcement
    label: GitHub Copilot is moving to usage-based billing
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - group: 📖 Official docs
    label: Usage-based billing for organizations and enterprises
    url: https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises
  - group: 📖 Official docs
    label: Budgets for usage-based billing
    url: https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing
  - group: 📖 Official docs
    label: Budgets and alerts
    url: https://docs.github.com/en/billing/concepts/budgets-and-alerts
  - group: 🎁 Promotional period
    label: Promotional amounts for existing customers (Jun 1 – Sep 1, 2026)
    url: https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers
  - group: 💰 How billing works
    label: Models and pricing for GitHub Copilot (model rates)
    url: https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing
  - group: 💰 How billing works
    label: GitHub Copilot billing
    url: https://docs.github.com/en/billing/concepts/product-billing/github-copilot-billing
---


## In one line

<div class="hero-quote hero-quote-admin">
  <p>
    On <strong>June 1, 2026</strong>, GitHub Copilot moved to <strong>usage-based billing (UBB)</strong>.
  </p>
  <p>
    Cost is tied to the <strong>tokens actually processed</strong>, and usage is shown in <strong>GitHub AI credits</strong> (1 credit = $0.01 USD).
  </p>
</div>

> 📰 Details: <a class="retro-link" href="https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/" target="_blank" rel="noopener noreferrer">Updates to GitHub Copilot billing and plans ↗</a> (Changelog).
> 💡 Code completions and Next Edit suggestions **don't consume AI credits** — they stay unlimited on all paid plans.

## How usage-based billing works

As GitHub Copilot supports more advanced AI workflows, usage-based billing ties cost to the **AI usage actually executed**.

- **AI usage** is measured by the **number of tokens** processed during each interaction
- Tokens include **the prompt, the response, and cached context**
- **Included usage**: it is **shared (pooled)** across Copilot licenses
- **Overage usage**: manageable with budgets and controls
  - Additional-usage budgets are **set in US dollars**, and usage is shown in **GitHub AI credits**
  - GitHub AI credits draw down the budget at a **fixed rate (1 AI credit = $0.01 USD)**. For example, a $10 budget equals **1,000 AI credits**

## Tokens explained

A token is the **unit of AI processing** (input, output, context).

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#9bbc0f;text-transform:uppercase;margin-bottom:0.6em;">👤 Input tokens</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">What you send:</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>The prompt and new context</li><li>Grows with large files or codebases</li></ul></div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#00f0ff;text-transform:uppercase;margin-bottom:0.6em;">🤖 Output tokens</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">What you receive:</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>The response the AI generates</li><li>Usually the highest compute cost</li></ul></div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(255,176,0,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#ffb000;text-transform:uppercase;margin-bottom:0.6em;">🔄 Cached tokens</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">What gets reused:</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>Context from past interactions</li><li>Improves speed and efficiency</li></ul></div>
</div>

> 🎯 **Takeaway**: every interaction consumes tokens based on **input, output, and context**.

## Usage-based charging (UBB)

<div style="border:1px solid rgba(155,188,15,0.55);background:rgba(5,6,15,0.45);padding:1.1em 1.3em;margin:0 0 1.4em;text-align:center;">
<div style="font-size:1.35em;font-weight:bold;color:#9bbc0f;line-height:1.4;">Billable tokens ＝ input ＋ output ＋ cached tokens</div>
</div>

**How charging works:**

- Copilot usage is measured by the **total tokens** processed in each interaction
- Tokens **consume AI credits** (based on <a class="retro-link" href="https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing" target="_blank" rel="noopener noreferrer">model rates ↗</a>)
- **AI credits are the unit of billing**

> 🎯 **Takeaway**: larger prompts, longer responses, and more context all increase the tokens processed and the credits consumed.

## Pricing model overview

**Plans and included value**

| Item | Copilot Business | Copilot Enterprise |
| --- | --- | --- |
| Monthly price (unchanged) | **$19** / user | **$39** / user |
| Included token value | **$19** worth (1,900 AI credits) | **$39** worth (3,900 AI credits) |

> 📦 The AI credits included with a Copilot plan are **shared across the whole enterprise** and consumed as tokens are processed.
> 🎁 Existing customers get a boost during the <strong>promotional period (Jun 1 – Sep 1, 2026)</strong>: <strong>CB 3,000 / CE 7,000</strong> credits. <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers" target="_blank" rel="noopener noreferrer">Details ↗</a>

**How it works:**

- Credits are shared at the **enterprise / billing-entity level**
- They are consumed **based on the tokens processed**
- They are **not tied to individual users**

> 🎯 **Takeaway**: customers pay for **actual usage** — not per user, but from **credits shared across the whole enterprise**.

## Shared AI credit pool

<div style="display:grid;grid-template-columns:240px 1fr;gap:2.2em;align-items:start;margin:1.2em 0;">
<div>
<div style="display:flex;flex-direction:column;height:320px;border:1px solid rgba(255,46,136,0.45);">
<div style="height:30%;background:#ff2e88;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;">Overage</div>
<div style="height:70%;background:rgba(255,46,136,0.28);display:flex;align-items:center;justify-content:center;text-align:center;color:#e8f4ff;font-weight:bold;padding:0 0.5em;line-height:1.4;">License-included<br/>AI credits</div>
</div>
<div style="text-align:center;font-size:0.78em;color:rgba(232,244,255,0.7);margin-top:0.55em;">Total AI credits</div>
</div>
<div style="display:flex;flex-direction:column;gap:1.35em;color:#e8f4ff;font-size:1.02em;line-height:1.75;">
<p style="margin:0;">The AI credits included with each GitHub Copilot license roll up into a <strong style="color:#ffb000;">single enterprise-wide shared pool</strong>.</p>
<p style="margin:0;"><strong style="color:#ffb000;">Every licensed user</strong> draws from this pool first.</p>
<p style="margin:0;">Any AI credit usage that occurs after the pool is fully exhausted becomes an <strong style="color:#ffb000;">additional cost</strong>.</p>
</div>
</div>

## Shared-pool usage distribution

**Usage distribution within the enterprise**

<div style="margin:1.4em 0;">
<div style="border:1px solid rgba(255, 46, 136,0.35);background:rgba(5,6,15,0.4);padding:1.1em 1.2em;display:grid;grid-template-columns:repeat(3,1fr);gap:1em;font-size:1em;color:#e8f4ff;text-align:center;">
<span>👤 Light user</span>
<span style="color:#ff2e88;">👥 Heavy users</span>
<span style="color:#ff2e88;">👥👥 Medium users</span>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);margin:0.15em 0;color:#ff2e88;line-height:1;text-align:center;align-items:center;">
<span style="font-size:1.1em;">⬇</span>
<span style="font-size:2.8em;">⬇</span>
<span style="font-size:1.8em;">⬇</span>
</div>
<div style="border:1px solid rgba(255, 46, 136,0.6);background:rgba(255, 46, 136,0.08);padding:1.1em;text-align:center;font-size:1.3em;font-weight:bold;color:#e8f4ff;">Shared pool</div>
</div>

> ✅ All users draw from the **same pool** — but at **different usage rates** (light / medium / heavy).

## PRU model vs AI credit model

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);">
<div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.85em;letter-spacing:0.12em;color:#00f0ff;text-transform:uppercase;margin-bottom:0.8em;">PRU model (old)</div>
<div style="color:#e8f4ff;line-height:1.6;font-size:0.95em;"><strong>✅ Pro</strong><br/>One user can't burn through another user's allotment<br/><br/><strong>⚠️ Con</strong><br/>Overage can occur even while other users still have budget left</div>
</div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.45);background:rgba(5,6,15,0.5);">
<div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.85em;letter-spacing:0.12em;color:#9bbc0f;text-transform:uppercase;margin-bottom:0.8em;">AI credit model (shared pool)</div>
<div style="color:#e8f4ff;line-height:1.6;font-size:0.95em;"><strong>✅ Pro</strong><br/>Less waste<br/><br/><strong>⚠️ Con</strong><br/>Consumption can skew toward certain users</div>
</div>
</div>

> 💡 The shared pool optimizes **globally** — heavy users can draw more, absorbed by lighter users' surplus.

## User-level Budget (new)

Controls the **total AI credits** a user can consume during a billing cycle (covering both pool usage and additional spend).

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.45);background:rgba(5,6,15,0.5);">
<div style="font-size:1.5em;margin-bottom:0.35em;">👥</div>
<div style="font-weight:bold;color:#e8f4ff;font-size:1.05em;margin-bottom:0.7em;">Universal user-level budget</div>
<div style="color:#9bbc0f;font-size:0.95em;margin-bottom:0.5em;line-height:1.5;">A default budget applied to every Copilot-licensed user in your enterprise</div>
<div style="color:rgba(232,244,255,0.7);font-size:0.92em;line-height:1.55;">Giving new users a baseline spending limit prevents unintended overspend</div>
</div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);">
<div style="font-size:1.5em;margin-bottom:0.35em;">👤</div>
<div style="font-weight:bold;color:#e8f4ff;font-size:1.05em;margin-bottom:0.7em;">Individual user-level budget</div>
<div style="color:#9bbc0f;font-size:0.95em;margin-bottom:0.5em;line-height:1.5;">Power-user override</div>
<div style="color:rgba(232,244,255,0.7);font-size:0.92em;line-height:1.55;">A per-user AI credit budget that overrides the universal default.</div>
</div>
</div>

> 🎯 **Takeaway**: a $0 user-level budget blocks that user immediately — you can cap per user even while the pool still has credits.

## Budget options

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.9em;margin:1.2em 0 0;font-size:0.82em;">

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">[New] User-level budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="display:grid;grid-template-columns:1fr 1fr;text-align:center;color:#e8f4ff;font-weight:bold;font-size:0.92em;height:2.8em;align-items:start;margin-bottom:1.1em;"><span>Universal</span><span>Individual*</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;height:200px;">
<div style="display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">Overage</div>
<div style="flex:1;background:rgba(255, 46, 136,0.3);color:#e8f4ff;display:flex;align-items:center;justify-content:center;">Shared pool</div>
</div>
<div style="display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">Overage</div>
<div style="flex:1;background:rgba(255, 46, 136,0.3);color:#e8f4ff;display:flex;align-items:center;justify-content:center;">Shared pool</div>
</div>
</div>
<div style="color:rgba(232,244,255,0.6);font-size:0.82em;margin-top:0.5em;">*Overrides the universal default</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">Organization-level budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">Caps the organization's overage</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">Overage only</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">Cost center-level budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">Caps the cost center's total overage</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">Overage only</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">Enterprise-level budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">Caps the enterprise's total overage</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">Overage only</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

</div>

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.9em;font-size:0.82em;margin-top:0;">
<div></div>
<div></div>
<div style="grid-column:3 / span 2;position:relative;height:4em;">
<div style="position:absolute;left:25%;top:0;transform:translateX(-50%);color:#ff2e88;font-size:1.05em;line-height:1;">▲</div>
<div style="position:absolute;left:25%;top:1.05em;bottom:1.9em;border-left:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:75%;top:0;bottom:1.9em;border-left:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:25%;right:25%;bottom:1.9em;border-top:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:0;right:0;bottom:0;text-align:center;color:#ff2e88;font-weight:bold;font-size:0.95em;">Cost center usage can be excluded</div>
</div>
</div>

## Budget hierarchy

<div style="background:rgba(255,46,136,0.1);border:1px solid rgba(255,46,136,0.4);color:#e8f4ff;padding:0.5em 0.8em;font-size:0.85em;margin:0.4em 0 1em;"><strong style="color:#ff2e88;">Key rule:</strong> if any budget hits <strong>$0</strong>, usage stops</div>

<div style="background:rgba(10,14,39,0.55);border:1px solid rgba(255, 46, 136,0.25);padding:0.9em 1.2em;margin-bottom:0.9em;">
<div style="color:#ff2e88;font-weight:bold;">Phase 1. Shared AI credit pool</div>
<div style="color:rgba(232,244,255,0.75);font-size:0.82em;margin:0.25em 0 1em;">Everyone spends from the shared pool; only the user's <strong style="color:#ff2e88;">ULB</strong> is checked</div>
<div style="display:flex;align-items:center;gap:0;font-size:0.9em;">
<div style="flex:none;width:12em;background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.7em 0.5em;">User-level budget</div>
<div style="flex:1;height:0;border-top:2px solid #ff2e88;position:relative;"><span style="position:absolute;right:-0.35em;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:11px solid #ff2e88;"></span></div>
<div style="position:relative;width:2.8em;height:2.8em;flex:none;"><div style="position:absolute;inset:0.35em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="flex:1;height:0;border-top:2px solid #ff2e88;position:relative;"><span style="position:absolute;left:50%;top:-1.7em;transform:translateX(-50%);color:rgba(232,244,255,0.8);font-size:0.85em;white-space:nowrap;">is zero</span><span style="position:absolute;right:-2px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:11px solid #ff2e88;"></span></div>
<div style="width:2.8em;height:2.8em;border-radius:50%;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;flex:none;">X</div>
</div>
</div>

<div style="position:relative;background:rgba(10,14,39,0.55);border:1px solid rgba(255, 46, 136,0.25);padding:0.9em 1.2em;">
<div style="color:#ff2e88;font-weight:bold;">Phase 2. Shared AI credit pool exhausted</div>
<div style="color:rgba(232,244,255,0.75);font-size:0.82em;margin:0.25em 0 1em;">For overage spend, the following budgets are checked</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1em;font-size:0.82em;justify-items:center;align-items:start;">
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">User-level budget</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">Org-level budget</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">Cost center-level budget</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">Enterprise-level budget</div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="color:rgba(232,244,255,0.8);">is zero</div>
<div style="color:rgba(232,244,255,0.8);">is zero</div>
<div style="color:rgba(232,244,255,0.8);">is zero</div>
<div style="color:rgba(232,244,255,0.8);">is zero</div>
</div>
<div style="position:relative;height:6em;margin-top:0.3em;">
<div style="position:absolute;left:12.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:37.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:62.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:87.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:12.5%;right:12.5%;top:2.2em;border-top:2px solid #ff2e88;"></div>
<div style="position:absolute;left:50%;top:2.2em;height:1em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:50%;top:3.2em;transform:translateX(-0.55em);color:#ff2e88;">▼</div>
<div style="position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:2.6em;height:2.6em;border-radius:50%;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">X</div>
</div>
</div>

<div style="background:rgba(232,244,255,0.08);border:1px solid rgba(232,244,255,0.2);padding:0.6em 0.9em;font-size:0.78em;color:rgba(232,244,255,0.85);line-height:1.55;margin-top:0.9em;"><strong style="color:#ff2e88;">Optional policy:</strong> By excluding a cost center from the enterprise budget, its users keep working even when the enterprise budget hits $0.</div>

## How alerts work

When you enable **alerts** on a budget, GitHub sends **email notifications** as spending reaches each threshold.

<div style="display:flex;align-items:center;justify-content:center;gap:0.6em;margin:1.6em 0;flex-wrap:wrap;">
<div style="min-width:6em;text-align:center;border:2px solid rgba(255,46,136,0.6);border-radius:6px;padding:0.8em 1em;background:rgba(255,46,136,0.08);">
<div style="font-size:1.7em;font-weight:bold;color:#ff2e88;line-height:1;">75%</div>
<div style="font-size:0.78em;color:#e8f4ff;margin-top:0.45em;">📧 Email</div>
</div>
<span style="color:#ff2e88;font-size:1.3em;">▶</span>
<div style="min-width:6em;text-align:center;border:2px solid rgba(255,46,136,0.6);border-radius:6px;padding:0.8em 1em;background:rgba(255,46,136,0.08);">
<div style="font-size:1.7em;font-weight:bold;color:#ff2e88;line-height:1;">90%</div>
<div style="font-size:0.78em;color:#e8f4ff;margin-top:0.45em;">📧 Email</div>
</div>
<span style="color:#ff2e88;font-size:1.3em;">▶</span>
<div style="min-width:6em;text-align:center;border:2px solid #ff2e88;border-radius:6px;padding:0.8em 1em;background:#ff2e88;">
<div style="font-size:1.7em;font-weight:bold;color:#fff;line-height:1;">100%</div>
<div style="font-size:0.78em;color:#fff;margin-top:0.45em;">📧 Limit hit</div>
</div>
</div>

| Product type | When the budget is exceeded |
| --- | --- |
| 🎫 **License-based** (Copilot license, etc.) | **Alerts only** — usage does not stop |
| ⚡ **Metered** (AI credits, Actions, etc.) | Budget can **stop usage** at the threshold |

> 📧 Emails go to **account owners** and **billing managers** by default (additional recipients can be added).
> 📝 The first billing cycle only counts usage **from the budget's creation date** — so you may exceed it that first cycle.
