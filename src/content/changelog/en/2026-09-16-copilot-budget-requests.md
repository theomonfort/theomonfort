---
title: "Copilot budget increase requests are generally available"
date: "2026-09-16"
summary: "Members who exhaust their Copilot AI credits can request a higher budget. Administrators can approve, adjust, or deny it directly in settings."
category: administration
status: "Generally available"
source: "https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available/"
---

### Key takeaways

- **Availability**: Copilot Business and Enterprise under usage-based billing. **Not available for enterprises with managed users (EMU).**
- **Who approves**: organization owners, enterprise owners, or billing managers. Requests go to the account that pays for the budget, not automatically to the enterprise.

### Settings

1. **Find requests**: open the paying organization's or enterprise's `Settings → Requests from members`.
2. **Approve or adjust**: enter the **new total budget**, select the requests, then click `Approve and increase`. The amount replaces the previous limit; it is not an amount added on top. The change applies immediately. Requests can also be denied.
3. **Configure budgets separately**: open `Billing & Licensing → Budgets and alerts`. To create a per-user budget, use `New budget → Bundled AI credits budget`, then select `Users` under `Budget scope`.

**Spending controls**: user-level budgets always stop usage at the limit. For other applicable budgets, `Stop usage when budget limit is reached` blocks further usage; leaving it unchecked does not. Increasing a user's budget does not bypass other exhausted budget caps.

[Managing budget requests](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-budget-requests) / [Budget settings](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets)
