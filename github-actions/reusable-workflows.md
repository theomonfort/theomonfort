---
title: Reusable Workflows
layout: default
parent: Actions
nav_order: 2
---

# Reusable Workflows

📖 **Official docs**: [Reusing workflows](https://docs.github.com/en/actions/sharing-automations/reusing-workflows)

## The Problem

You have 15 repositories with near-identical CI workflows. Updating the Node.js version means opening 15 PRs. Reusable workflows and composite actions solve this — **define once, call everywhere**.

## Reusable Workflows with `workflow_call`

A reusable workflow is a normal workflow file that can be **called by other workflows** using the `workflow_call` trigger.

### Defining a Reusable Workflow

```yaml
# .github/workflows/ci-reusable.yml (in your shared repo)
name: Reusable CI

on:
  workflow_call:
    inputs:
      node-version:
        type: string
        default: '20'
      run-e2e:
        type: boolean
        default: false
    secrets:
      NPM_TOKEN:
        required: false
    outputs:
      build-version:
        value: ${{ jobs.build.outputs.version }}

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.version.outputs.value }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
          cache: npm
      - run: npm ci
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      - run: npm run lint
      - run: npm test
      - name: E2E Tests
        if: ${{ inputs.run-e2e }}
        run: npm run test:e2e
      - run: npm run build
      - name: Output version
        id: version
        run: echo "value=$(node -p 'require(\"./package.json\").version')" >> "$GITHUB_OUTPUT"
```

### Calling It from Another Repo

```yaml
# .github/workflows/ci.yml (in any consuming repo)
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  ci:
    uses: my-org/shared-workflows/.github/workflows/ci-reusable.yml@main
    with:
      node-version: '20'
      run-e2e: true
    secrets:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

  deploy:
    needs: ci
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying version ${{ needs.ci.outputs.build-version }}"
```

> 💡 **Theo's Tip**: Always reference reusable workflows with a **specific ref** — a tag like `@v1` or a commit SHA. Using `@main` means any push to the shared repo instantly changes CI behavior in every consuming repo, which can break things at the worst possible time.

## Composite Actions vs Reusable Workflows

Both let you share logic, but they work at different levels:

| Feature | Composite Action | Reusable Workflow |
|---------|-----------------|-------------------|
| **Scope** | A set of steps within a job | An entire job (or multiple jobs) |
| **Defined in** | `action.yml` in any repo or directory | A workflow file with `workflow_call` trigger |
| **Can define jobs** | No — steps only | Yes — full job definitions |
| **Supports `if` conditions** | Per-step only | Per-job and per-step |
| **Supports secrets** | No — passed via inputs | Yes — dedicated `secrets` block |
| **Supports matrix** | No | Yes |
| **Called with** | `uses:` in a step | `uses:` in a job |
| **Best for** | Small, reusable step sequences | Full CI/CD pipelines shared across repos |

> 💡 **Theo's Tip**: Use **composite actions** when you're wrapping 3-5 steps into a convenient package (e.g., "setup my toolchain"). Use **reusable workflows** when you're sharing an entire CI/CD pipeline. They're complementary — a reusable workflow can call composite actions inside its steps.

## Creating Custom Actions

### JavaScript Action

Define an `action.yml` and an entry point — GitHub handles the rest:

```yaml
# my-action/action.yml
name: 'Notify Slack'
description: 'Send a notification to Slack'
inputs:
  webhook-url:
    required: true
  message:
    required: true
runs:
  using: 'node20'
  main: 'index.js'
```

```javascript
// my-action/index.js
const core = require('@actions/core');
const webhookUrl = core.getInput('webhook-url', { required: true });
const message = core.getInput('message', { required: true });

const payload = JSON.stringify({ text: message });
const url = new URL(webhookUrl);
const req = require('https').request({
  hostname: url.hostname, path: url.pathname, method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}, (res) => { if (res.statusCode !== 200) core.setFailed(`Slack: ${res.statusCode}`); });
req.write(payload);
req.end();
```

### Docker Action

```yaml
# docker-action/action.yml
name: 'Security Scan'
inputs:
  target:
    required: true
    default: '.'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args: [${{ inputs.target }}]
```

> 💡 **Theo's Tip**: Docker actions are portable but **slow** — they build the image on every run. For frequently-used actions, publish the image to GHCR and reference it with `image: 'docker://ghcr.io/my-org/my-action:v1'` instead.

## Sharing Across an Organization

Create a dedicated repo (e.g., `my-org/shared-workflows`) with **internal** visibility. Store reusable workflows in `.github/workflows/` and composite actions in subdirectories. Tag releases with semantic versions (`v1`, `v1.2.0`).

```yaml
# Any repo in the org can call:
jobs:
  ci:
    uses: my-org/shared-workflows/.github/workflows/ci.yml@v1
  deploy:
    uses: my-org/shared-workflows/.github/workflows/deploy.yml@v1

# Composite actions in the same repo:
steps:
  - uses: my-org/shared-workflows/actions/setup-toolchain@v1
```

> 💡 **Theo's Tip**: Use **major version tags** (`v1`, `v2`) that you move forward with each compatible release. Consumers pin to `@v1` and get improvements automatically. When you make a breaking change, create `v2`. This is the same pattern the official `actions/*` repos use.

## Practical Example: Reusable Deploy Workflow

A deploy workflow called from multiple service repos:

```yaml
# my-org/shared-workflows/.github/workflows/deploy.yml
name: Deploy

on:
  workflow_call:
    inputs:
      service-name:
        required: true
        type: string
      environment:
        required: true
        type: string
      aws-region:
        type: string
        default: 'us-east-1'
    secrets:
      AWS_ROLE_ARN:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ inputs.environment }}
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: ${{ inputs.aws-region }}
      - name: Deploy to ECS
        run: |
          aws ecs update-service --cluster production \
            --service ${{ inputs.service-name }} --force-new-deployment
          echo "### Deployed ${{ inputs.service-name }} to ${{ inputs.environment }} 🚀" >> "$GITHUB_STEP_SUMMARY"
```

Called from each service repo:

```yaml
jobs:
  deploy:
    uses: my-org/shared-workflows/.github/workflows/deploy.yml@v1
    with:
      service-name: user-api
      environment: production
    secrets:
      AWS_ROLE_ARN: ${{ secrets.AWS_DEPLOY_ROLE }}
```

> ⚠️ **Theo's Tip**: When using `secrets: inherit`, **all** repository secrets are passed to the reusable workflow — including ones it doesn't need. Prefer explicitly passing only the secrets the workflow requires. It's more verbose but follows the principle of least privilege.

## Next Steps

- **[Security Hardening](security-hardening.html)** — secure your workflows with OIDC, permissions, and SHA pinning

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
