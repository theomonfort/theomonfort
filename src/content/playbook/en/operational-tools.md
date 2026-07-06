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
order: 19.5
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

## In a nutshell

<div class="hero-quote hero-quote-green">
  <p>
    Beyond the day-to-day flow, GitHub gives you <strong>more tools to run and scale</strong> your work.
  </p>
  <p>
    Let's take a quick tour of what else is at your disposal: <strong>Packages, the container registry, Apps, permissions, and policies</strong>.
  </p>
</div>

## Packages & Container Registry

A **package registry** is where you store and share what you build: libraries and Docker images. GitHub hosts them **next to your code**, public or private, with the same permissions.

| Type | Registry | Example |
| --- | --- | --- |
| 📦 Libraries | GitHub Packages (npm, Maven, NuGet…) | Share an internal SDK across repos |
| 🐳 Docker images | Container registry `ghcr.io` | `docker pull ghcr.io/org/app:1.2` |
| 🔒 Access | Both | Inherit repo/org permissions |

CI publishes with the built-in `GITHUB_TOKEN`, so no extra secrets to manage.

📘 <a class="retro-link" href="https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages" target="_blank" rel="noopener noreferrer">Introduction to GitHub Packages ↗</a>

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
