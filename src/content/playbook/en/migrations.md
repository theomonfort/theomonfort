---
title: Migrations
titleEn: Migrations
summary: Compare non-EMU ↔ EMU and GHES → GHE.com (data residency) migrations. When to use GEI or ELM, prerequisites, data that is not migrated, limits, and follow-up tasks, in a foldable table.
icon: 🚚
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 31
category: administration
related: ['enterprise-setup', 'governance', 'license-management']
links:
  - group: 📖 Official Documentation
    label: Migration paths to GitHub
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/overview/migration-paths-to-github
  - group: 📖 Official Documentation
    label: Choosing an enterprise type (EMU or personal accounts)
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type
  - group: 🧰 GitHub Enterprise Importer
    label: About migrations between GitHub products (data and limits)
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products
  - group: 🧰 GitHub Enterprise Importer
    label: Migrating organizations from GitHub.com
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-organizations-from-githubcom-to-github-enterprise-cloud
  - group: 🧰 GitHub Enterprise Importer
    label: Migrating repositories from GHES
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud
  - group: 🧰 GitHub Enterprise Importer
    label: Reclaiming mannequins
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer
  - group: ⚡ Enterprise Live Migrations
    label: About live migrations
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/about-live-migrations
  - group: ⚡ Enterprise Live Migrations
    label: Migrated data for live migrations
    url: https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/migrated-data-reference
  - group: 📰 Announcements
    label: "ELM (GHES → GHE.com) is generally available (2026-09-01)"
    url: https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available/
---

## In a nutshell

<div class="hero-quote hero-quote-admin">
  <p>
    <strong>EMU ↔ non-EMU</strong> is not a setting. It is a <strong>migration to a new enterprise</strong>, done with <strong>GEI</strong>.
  </p>
  <p>
    <strong>GHES → GHE.com</strong>: move the repos that can't stop with <strong>ELM</strong> (live migration), and the rest with <strong>GEI</strong>.
  </p>
</div>

## Migration paths at a glance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/overview/migration-paths-to-github" target="_blank" rel="noopener noreferrer">📖 Docs</a>

The four cases are the columns. Press + to open the aspect you need.

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧰</span><span class="ctl-name">Tool</span><span class="ctl-when">GEI / ELM</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Tool</td><td colspan="2"><strong>GEI</strong> (GitHub Enterprise Importer)</td><td><strong>ELM</strong> (Enterprise Live Migrations, GA 2026-09)</td><td><strong>GEI</strong></td></tr>
<tr><td>Command</td><td colspan="2"><code>gh gei migrate-org</code> or <code>gh gei migrate-repo</code></td><td><code>gh elm</code></td><td><code>gh gei migrate-repo</code></td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Scope</span><span class="ctl-when">org or repo</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-organizations-from-githubcom-to-github-enterprise-cloud" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Unit</td><td colspan="2"><strong>Whole org</strong> (up to 5,000 repos) or one repo at a time</td><td>One repo per migration</td><td><strong>Repo by repo only</strong> (no org-level migration from GHES)</td></tr>
<tr><td>Teams</td><td colspan="2">An org migration moves teams and their repo access (not team membership)</td><td colspan="2">Not migrated. Recreate them on the target</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⏱️</span><span class="ctl-name">Downtime</span><span class="ctl-when">ELM: minutes</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/about-live-migrations" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Work freeze</td><td colspan="2">Freeze work during the migration (no delta sync)</td><td><strong>Cutover only</strong> (minutes). The source repo stays usable until then</td><td>Freeze each repo while it migrates</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">Prerequisites</span><span class="ctl-when">Enterprise / identity / PAT</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Target</td><td>New EMU enterprise</td><td>New enterprise with personal accounts</td><td colspan="2">Enterprise on GHE.com (<strong>EMU required</strong>)</td></tr>
<tr><td>Identity</td><td>IdP with SAML / OIDC + SCIM</td><td>Personal accounts (SAML optional)</td><td colspan="2">IdP with SAML / OIDC + SCIM</td></tr>
<tr><td>Operator</td><td colspan="2">Source org owner (or migrator role) + target enterprise owner</td><td>GHES site admin + GHE.com enterprise owner</td><td>Source org owner + target migrator role</td></tr>
<tr><td>Tokens</td><td colspan="4">Classic PATs on both source and target</td></tr>
<tr><td>Environment</td><td colspan="2">Avoid org name clashes (rename)</td><td>GHES 3.17+, HTTPS, outbound access, migrations on</td><td>GHES 3.4.1+, blob storage</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">❌</span><span class="ctl-name">Not migrated</span><span class="ctl-when">Reconfigure by hand</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Excluded</td><td colspan="2">Team membership, Actions secrets / variables / runners, Packages, Projects, GitHub Apps, rulesets, custom properties, security alerts, LFS objects, PATs / SSH keys, user-owned repos</td><td>Org settings, teams, Projects, org webhooks, rulesets, PRs from forks, pending reviews</td><td>Same as GEI on the left</td></tr>
<tr><td>Partial</td><td colspan="2">Some branch protection rules</td><td>Branch protection (allowed actors and bypasses are dropped)</td><td>Some branch protection rules</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📏</span><span class="ctl-name">Limits</span><span class="ctl-when">40 GiB / 2 GB</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Size</td><td colspan="2">Per repo: 40 GiB Git + 40 GiB metadata (public preview), 400 MiB per file</td><td>Built for large monorepos. Release assets up to 2 GB each</td><td>40 GiB on GHES 3.13+ (lower on older versions)</td></tr>
<tr><td>Other</td><td colspan="2">Org migrations: up to 5,000 repos</td><td>10 concurrent per GHES instance, 20 per target enterprise. Avoid force pushes while migrating</td><td>Complex repos over about 40 GB: Expert Services recommended</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧹</span><span class="ctl-name">After migration</span><span class="ctl-when">Reclaim mannequins</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>Users</td><td>Reclaim mannequins to managed users, sync teams from the IdP</td><td>Reclaim mannequins to personal accounts, add team members</td><td colspan="2">Reclaim mannequins to managed users, sync teams from the IdP</td></tr>
<tr><td>Settings</td><td colspan="2">Users recreate PATs / SSH keys, switch billing away from the old enterprise</td><td>Recreate org settings and teams, review branch protections</td><td>Recreate teams and repo access</td></tr>
</tbody>
</table>
</div>
</details>
</div>
</div>

## What isn't possible <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-existing-organization" target="_blank" rel="noopener noreferrer">📖 Docs</a>

None of these shortcuts work, whatever the case.

<div class="tbl-compact">

| ❌ Not possible | ✅ Do this instead |
| --- | --- |
| Switch an enterprise between EMU and non-EMU in place | Create a new enterprise and migrate with GEI |
| "Transfer organization" into or out of an EMU enterprise | GEI `migrate-org` |
| Use `ghe-migrator` to reach the cloud (GHES → GHES only) | GEI or ELM |
| Use ELM to reach GitHub.com (no data residency) | GEI (ELM only targets GHE.com) |
| Move GHE.com → GitHub.com with official tools | GitHub Expert Services |
| Push a repo over GEI's limits through GEI as is | Push Git history only, Expert Services, or ELM from GHES |

</div>

## GHES → GHE.com: ELM vs GEI <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/about-live-migrations" target="_blank" rel="noopener noreferrer">📖 Docs</a>

You can use both in the same migration. Pick per repo.

<div class="tbl-compact">

| | **ELM** | GEI |
| --- | --- | --- |
| ⏱️ Downtime | **Cutover only** (minutes) | Repo frozen while it migrates |
| 🎯 Best for | Large monorepos, critical repos that can't stop | Typical repos that can take a short freeze |
| 🔀 Concurrency | 10 per GHES instance, 20 per target | Higher than ELM |
| 🗂️ Git LFS | Migrated | Not migrated (push afterwards) |
| 🧩 GHES version | Supported 3.17+ patches | 3.4.1+ |
| 💾 Staging storage | Not needed | Blob storage (GHES 3.8+) |
| 🌐 Target | GHE.com only | GitHub.com / GHE.com |

</div>

> ⚠️ Avoid force pushes during the migration (ELM can't reconcile the rewritten history). Public repos can't exist on GHE.com, so make them private or internal first.

## Switching EMU type: step by step <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Non-EMU → EMU and EMU → non-EMU follow the same flow.

1. 🏢 **Create a new enterprise** (a trial works). An existing enterprise can't be converted
2. 🔐 **Prepare identities**: for EMU, SAML / OIDC and SCIM from the IdP; for non-EMU, each user's personal account
3. 🏷️ **Decide org names**: org names are unique across github.com. Use a new name on the target, or rename the source to free the name
4. 🧪 **Dry run, then production**: test GEI `migrate-org`, then run production with work frozen. Add "Repository migrations" to the ruleset bypass list
5. 👤 **Bring users back**: reclaim mannequins and sync team members. Users recreate PATs / SSH keys
6. 💳 **Switch billing**: once migrated, work with GitHub Sales to retire the old enterprise
