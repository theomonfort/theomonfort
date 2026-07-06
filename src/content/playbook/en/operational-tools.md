---
title: Operational Tools
titleEn: Operational Tools
summary: GitHub's toolbox for putting collaboration into operation. A quick tour of private Packages and the container registry, and Integrations (GitHub Apps).
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
---

## In a nutshell

<div class="hero-quote hero-quote-green">
  <p>
    Beyond the day-to-day flow, GitHub gives you <strong>more tools to run and scale</strong> your work.
  </p>
  <p>
    Let's take a quick tour of what else is at your disposal: <strong>Packages, the container registry, and Apps</strong>.
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
