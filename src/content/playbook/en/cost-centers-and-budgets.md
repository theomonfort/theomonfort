---
title: Cost centers & budgets
titleEn: Cost centers & budgets
summary: Group metered spending with cost centers, then manage budgets, alerts, usage limits, and included AI credit pools.
icon: 💰
color: magenta
order: 30.9
category: administration
related: ['governance', 'license-management', 'usage-based-billing']
links:
  - group: 📖 Official docs
    label: Cost centers
    url: https://docs.github.com/en/billing/concepts/cost-centers
  - group: 📖 Official docs
    label: Using cost centers
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/products/use-cost-centers
  - group: 📖 Official docs
    label: Cost center allocation
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation
  - group: 📖 Official docs
    label: Budgets and alerts
    url: https://docs.github.com/en/billing/concepts/budgets-and-alerts
  - group: 📖 Official docs
    label: Setting up budgets
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets
  - group: 📖 Official docs
    label: Copilot budgets and included usage controls
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets
  - group: 📖 Official docs
    label: Controlling and tracking costs at scale
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/tutorials/control-costs-at-scale
  - group: 📰 Recent Changelog
    label: "Cost centers now support enterprise teams (2026-06-25)"
    url: https://github.blog/changelog/2026-06-25-assign-enterprise-teams-to-cost-centers/
---

## In one line

<div class="hero-quote">
  <p>
    A <strong>cost center</strong> groups metered usage and spending, optionally billing it to a specific Azure subscription.
  </p>
  <p>
    A <strong>budget</strong> monitors spending and sends alerts, with the option to stop additional usage where supported and configured.
  </p>
</div>

## Cost centers: what can you assign? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/products/use-cost-centers" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Group spending by department or project without creating another org or changing access.

<div class="tbl-compact">

| Assignable resource | Spending attributed to it |
| --- | --- |
| 👤 User | Metered Copilot / GHE / Advanced Security licenses, plus Copilot AI usage |
| 👥 Enterprise team | Its members' user-based costs; membership updates automatically |
| 📦 Repository | Actions, Codespaces, Packages, Git LFS usage |
| 🏢 Organization | Repository-based usage and fallback for licenses billed to that org |

</div>

One center can mix many resources, including resources from several orgs. **Org teams are not assignable**; enterprise teams are.

Cost centers are an **enterprise billing** feature for metered charges, including metered licenses, not prepaid volume or subscription billing. With Azure billing, a center can use a different Azure subscription.

## Can you belong to several cost centers? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**One direct assignment per resource.** Adding it to another center **moves** it. Multiple team/org memberships do not split the same charge across centers.

For **user-based license and Copilot costs**, the first applicable destination wins:

<div class="tbl-compact">

| Priority | Billing destination |
| --- | --- |
| 1 | User's **directly assigned** cost center |
| 2 | Enterprise team's center; if several qualify, the **team created first** wins |
| 3 | Center of the **organization billed for the license**, not every org the user joins |
| 4 | Enterprise, shown as **Enterprise Only** |

</div>

**Example:** Alice is directly in center A and belongs to a team in B. Her Copilot costs go to **A**. Actions she runs in a repo assigned to B go to **B**, because Actions follows the repository, not the person.

Reassignment affects **future usage**, not historical charges.

## Budget options <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Choose **what to measure**, then **whose usage counts**. Budgets are monthly; spending amounts are in USD. Options below are current as of **2026-10-20**.

<div class="det-widget det-compact">
<p class="det-hint">▸ Choose a budget type</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">Product / SKU</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📦</span><span class="det-title">Product / SKU</span></p>
<p class="det-why"><b>Product-level:</b> a whole product, such as Actions or Codespaces.<br /><b>SKU-level:</b> one billing item, such as Codespaces storage or Code Security AI Credits.<br /><b>Metered-product scopes:</b> enterprise, organization, repository, or cost center. Org owners can budget their org or its repos.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">Bundled AI credits</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">Bundled AI credits</span></p>
<p class="det-why"><b>One paid-usage budget:</b> Copilot, cloud agent, Spark, and Advanced Security AI SKUs.<br /><b>Scopes:</b> enterprise, org, cost center, or Users.<br />Copilot spending budgets cap <b>overage</b>, not included pool usage or license fees. Paid usage must be allowed.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">👤</span><span class="det-name">Copilot per-user</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">👤</span><span class="det-title">User-level budget</span></p>
<p class="det-why"><b>Bundled AI credits → Users:</b> each person's <b>included + paid</b> consumption.<br /><b>Individual → cost center per-user → universal:</b> most specific wins.<br />The cost center default is <b>per person</b>, not a shared pot. Individual overrides can expire, then fall back to the default.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎫</span><span class="det-name">Metered licenses</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🎫</span><span class="det-title">License budgets</span></p>
<p class="det-why">Track metered license spending, with a license-count threshold where offered. <b>Metered GHE license scopes:</b> enterprise or cost center.<br />No budgets for <b>prepaid volume licenses</b>. A license budget is not the same as an AI-credit budget, and most license budgets <b>alert without blocking</b>.</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A BUDGET ▸</p></div>
</div>
</div>

## Alerts or a hard stop? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/budgets-and-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Enable budget alerts at **75 / 90 / 100%** (as of **2026-10-20**). Owners, billing managers, and added recipients are notified.

<div class="tbl-compact">

| Control | At the limit |
| --- | --- |
| Alert-only | Usage and charges **continue** |
| Metered usage (hard) | Enable **Stop usage when budget limit is reached** |
| Copilot user-level | **Always hard**; $0 blocks even with pool credits left |
| Copilot / GHE licenses | Alerts, **not** a license-purchase cap |
| GHAS licenses (hard) | Code Security / Secret Protection: blocks **new repo enablement**, not existing protection |

</div>

**Hard budgets do not add together.** Any exhausted applicable limit can block usage. A broad Actions/AI limit can also stop CI or security workflows.

> ⚠️ New budgets count **only usage after creation**. User-level alerts are not always available; also monitor cost center or enterprise usage.

## Department setup: costs, budgets, pools <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/tutorials/control-costs-at-scale" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Example, not recommended amounts:** Engineering needs separate Copilot and CI controls. An enterprise owner or billing manager starts in **Billing and licensing**.

<div class="det-widget det-compact">
<p class="det-hint">▸ Follow the setup</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-name">1. Allocate</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-title">Allocate costs</span></p>
<p class="det-why"><b>Cost centers → New cost center:</b> create <b>Engineering AI</b> with its enterprise team, and <b>Engineering CI</b> with its repositories.<br />In a shared org, assign repos to their departments and leave the org unassigned. If teams need separate shared budgets, use separate centers; budgets cannot target teams inside one center.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💰</span><span class="det-name">2. Budget</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💰</span><span class="det-title">Set monthly budgets</span></p>
<p class="det-why"><b>Budgets and alerts → New budget:</b> set a <b>$200 bundled AI</b> paid-usage budget for Engineering AI and a <b>$300 Actions</b> budget for Engineering CI. Choose hard stops or alerts deliberately.<br />Add a <b>$20 per-user</b> Copilot budget for Engineering AI members: this counts <b>included + paid</b> consumption. License fees remain separate.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏊</span><span class="det-name">3. Included pool</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏊</span><span class="det-title">Included AI credits</span></p>
<p class="det-why">Edit Engineering AI → <b>AI credit pool</b>. GitHub calculates the cap from members' Copilot licenses; <b>no manual amount</b>.<br />At the cap: <b>block</b> or <b>paid overage</b> if policy permits. This is separate from the $200 budget; neither control overrides an exhausted per-user limit.</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔎</span><span class="det-name">4. Verify</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔎</span><span class="det-title">Verify attribution</span></p>
<p class="det-why">Group <b>Usage</b> by cost center; check <code>cost_center_name</code> in the detailed report and investigate <b>Enterprise Only</b>.<br />Enterprise budgets include cost center usage by default. Explicit <b>cost center exclusion</b> allows independent overage, but user-level caps remain. Budget consumption resets each billing cycle.</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A STEP ▸</p></div>
</div>
</div>
