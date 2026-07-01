---
title: Operational Tools
titleEn: Operational Tools
summary: GitHub's toolbox for putting collaboration into operation. A quick tour of private Packages and the container registry, Integrations (GitHub Apps), permissions (per-repo roles), and policies (repo/org/enterprise).
icon: 🛠️
color: green
accent:
  text: text-gameboy-green
  border: border-gameboy-green
  glow: hover:shadow-gameboy-green
  shadow: shadow-gameboy-green
  hex: "#9bbc0f"
order: 17.8
category: operate
related: ['collaboration-tools', 'github', 'enterprise-setup']
links:
  - group: 📖 Official docs
    label: GitHub Packages
    url: https://docs.github.com/en/packages
  - group: 📖 Official docs
    label: Container registry (GHCR)
    url: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry
  - group: 📖 Official docs
    label: About GitHub Apps
    url: https://docs.github.com/en/apps/overview
  - group: 📖 Official docs
    label: Repository roles
    url: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization
  - group: 📖 Official docs
    label: Organization policies
    url: https://docs.github.com/en/organizations/managing-organization-settings
  - group: 📖 Official docs
    label: Enterprise policies
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies
---

## In one line

<div class="hero-quote hero-quote-green">
  <p>
    <strong>Operational tools</strong> let you <strong>ship, connect, and delegate</strong> what you built, safely.
  </p>
  <p>
    The key point: <strong>distribution, integration, permissions, and governance</strong> all sit next to the repo, so you run ops without leaving GitHub.
  </p>
</div>

> 🎯 From shipping artifacts to org-wide governance, manage it where the code lives.
> 💡 Distribute with Packages, connect with Apps, then lock down with roles and policies.

## Packages & Container Registry

Distribute artifacts via private registries on GitHub: npm, Maven, NuGet, and containers via GHCR (`ghcr.io`).

| Type | Registry | Why it's good |
| --- | --- | --- |
| 📦 npm/Maven/NuGet | GitHub Packages | Tied to repo permissions |
| 🐳 Containers | GHCR (`ghcr.io`) | Native to Actions, free tier |
| 🔒 Private | Either | Fine public/private control |

> 💡 Push straight with the Actions `GITHUB_TOKEN` for painless CI/CD.

## Integrations (GitHub Apps)

GitHub Apps extend functionality with least-privilege, the official way to integrate. Safer than personal PATs and built for orgs.

- 🤖 Grant **fine-grained** per-repo permissions
- 🔑 Run on short-lived tokens (safer than PATs)
- 🏢 Install org-wide and share with everyone
- 🧩 Many ready-made apps on the Marketplace (e.g. Slack, Jira, Sentry, SonarCloud)

> 🎯 Lean on **Apps**, not PATs, for automation and external integrations.

## Permissions

Assign roles per repository to control who can do what.

| Role | Main rights |
| --- | --- |
| 👀 Read | View, clone |
| 🔺 Triage | Manage Issues/PRs |
| ✍️ Write | Push, merge |
| 🛠️ Maintain | Some settings |
| 👑 Admin | Full control |

> 💡 Grant roles to teams and swap members in/out for easy upkeep.

## Policies

Apply governance across the repo → org → enterprise hierarchy; the higher the level, the wider the reach.

- 🗂️ **Repo**: branch protection, required reviews
- 🏢 **Org**: creation limits, visibility, mandatory 2FA
- 🏛️ **Enterprise**: rules across all orgs
- 🔁 Higher settings inherit down

> 🎯 Don't tweak repos one by one. Top-down policy is the winning ops play.

📘 More:
- <a class="retro-link" href="https://docs.github.com/en/packages" target="_blank" rel="noopener noreferrer">Packages ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/apps" target="_blank" rel="noopener noreferrer">GitHub Apps ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies" target="_blank" rel="noopener noreferrer">Enterprise policies ↗</a>
