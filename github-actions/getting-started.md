---
title: Getting Started
layout: default
parent: Actions
nav_order: 1
---

# Getting Started with GitHub Actions

📖 **Official docs**: [GitHub Actions Documentation](https://docs.github.com/en/actions)

## What Is GitHub Actions

GitHub Actions is a **CI/CD platform built directly into GitHub**. Instead of configuring an external service, you define workflows as YAML files inside your repository — they run automatically in response to events like pushes, pull requests, or schedules.

### Core Concepts

| Concept | What It Is |
|---------|-----------|
| **Workflow** | A YAML file in `.github/workflows/` that defines an automated process |
| **Job** | A set of steps that execute on the same runner. Jobs run in parallel by default |
| **Step** | A single task inside a job — either a shell command or a reusable action |
| **Runner** | The machine (virtual or physical) that executes your job |
| **Action** | A reusable unit of code you can reference in a step (e.g., `actions/checkout@v4`) |

> 💡 **Theo's Tip**: Think of it as **Workflow → Job → Step** — a workflow contains jobs, jobs contain steps. Jobs are parallel by default; steps within a job are always sequential.

## Your First Workflow

Create `.github/workflows/ci.yml` in your repository:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Build
        run: npm run build
```

That's it. Push this file and GitHub will run it automatically on every push to `main` and on every pull request targeting `main`.

> 💡 **Theo's Tip**: Always use `npm ci` instead of `npm install` in CI. It's faster, stricter (respects your lockfile exactly), and avoids surprises where CI installs different versions than your local machine.

## Trigger Types

Workflows start when an **event** fires. Here are the ones you'll use most:

```yaml
on:
  # Run on push to specific branches
  push:
    branches: [main, develop]
    paths: ['src/**', 'package.json']     # Only when these files change

  # Run on pull requests
  pull_request:
    types: [opened, synchronize, reopened]

  # Manual trigger from the GitHub UI
  workflow_dispatch:
    inputs:
      environment:
        description: 'Target environment'
        required: true
        type: choice
        options: [staging, production]

  # Cron schedule (UTC)
  schedule:
    - cron: '0 6 * * 1'    # Every Monday at 6:00 AM UTC

  # API-triggered via webhook
  repository_dispatch:
    types: [deploy]
```

> 💡 **Theo's Tip**: `paths` filters are incredibly useful for monorepos. If your frontend code is in `web/` and your backend in `api/`, you can have separate workflows that only trigger when their respective directories change — no wasted CI minutes.

## Matrix Builds

Test your code across **multiple OS and language versions** in one workflow:

```yaml
jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [18, 20, 22]
      fail-fast: false      # Don't cancel other jobs if one fails

    runs-on: ${{ matrix.os }}

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
```

This creates **9 parallel jobs** (3 OS × 3 Node versions). The `fail-fast: false` flag ensures all combinations run to completion even if one fails — essential for understanding the full compatibility picture.

> 💡 **Theo's Tip**: Matrix builds burn through your Actions minutes fast. For open-source repos, GitHub gives you unlimited minutes on public repos. For private repos, use `paths` filters and branch restrictions to avoid running the full matrix on every single push.

## Caching and Artifacts

### Caching Dependencies

Speed up your workflows by caching `node_modules`, pip packages, or any directory:

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-
```

Most `setup-*` actions (like `actions/setup-node@v4`) have a built-in `cache` option — use it when available, it's simpler.

### Uploading Artifacts

Save build outputs, test reports, or coverage data:

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: coverage-report
    path: coverage/
    retention-days: 14

# In a downstream job:
- uses: actions/download-artifact@v4
  with:
    name: coverage-report
```

> 💡 **Theo's Tip**: Artifacts are the best way to pass data between jobs. Since each job runs on a fresh runner, you can't just write to disk in one job and read it in another — upload it as an artifact, then download it in the next job.

## Environment Variables and Secrets

```yaml
env:
  NODE_ENV: production            # Available to all jobs

jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      API_URL: https://api.example.com   # Available to all steps in this job

    steps:
      - name: Deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}   # Injected from repo settings
        run: |
          echo "Deploying to $API_URL"
          curl -H "Authorization: Bearer $DEPLOY_TOKEN" ...
```

**Where to store secrets**: Go to **Settings → Secrets and variables → Actions** in your repo. Secrets are encrypted, never printed in logs, and can be scoped to specific environments.

> 💡 **Theo's Tip**: Never hardcode secrets in workflow files. Even for "harmless" things like API endpoints — use variables instead. It keeps your workflows portable and makes it trivial to change values without modifying code.

## GitHub-Hosted vs Self-Hosted Runners

| Feature | GitHub-Hosted | Self-Hosted |
|---------|--------------|-------------|
| **Setup** | Zero — just use `runs-on: ubuntu-latest` | You install and maintain the runner |
| **Cost** | Free tier included; pay per minute after | Free (your own hardware) |
| **OS options** | Ubuntu, Windows, macOS | Anything you can install the runner on |
| **Clean environment** | Fresh VM every run | Persistent — state carries over |
| **Hardware** | Standard specs (2-core, 7GB RAM) | Whatever you provision |
| **Network** | Public internet only | Access to private networks and resources |
| **Maintenance** | GitHub handles updates | You handle updates, security patches |
| **Best for** | Most projects, open source | Private infra access, GPU workloads, compliance |

> 💡 **Theo's Tip**: Start with GitHub-hosted runners. Switch to self-hosted only when you need something specific — access to an internal network, a GPU, or custom hardware. The maintenance overhead of self-hosted runners is real and often underestimated.

## Next Steps

Once you're comfortable with the basics:
- **[Reusable Workflows](reusable-workflows.html)** — stop copy-pasting workflows across repos
- **[Security Hardening](security-hardening.html)** — lock down your CI/CD pipeline

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
