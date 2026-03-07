---
title: Security Hardening
layout: default
parent: Actions
nav_order: 3
---

# Security Hardening

📖 **Official docs**: [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-for-github-actions)

## Why This Matters

Your CI/CD pipeline has access to secrets, cloud credentials, and deployment targets. A compromised workflow can exfiltrate secrets, inject malicious code into your builds, or deploy backdoored artifacts. Securing your workflows isn't optional — it's as important as securing your application code.

## Principle of Least Privilege: `permissions`

By default, the `GITHUB_TOKEN` has **broad read/write access**. Lock it down:

```yaml
# Set restrictive defaults at the workflow level
permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    # Inherits workflow-level permissions — read-only

  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write        # Only this job can create deployments
      id-token: write           # Only this job can request OIDC tokens
```

Start with **everything read-only** at the workflow level, then grant write permissions only to the specific jobs that need them.

> 💡 **Theo's Tip**: Set `permissions: read-all` (or even `permissions: {}` for no permissions) at the top of every workflow, then add back only what each job needs. It's tedious the first time, but it dramatically reduces blast radius if a step is compromised.

## OIDC for Cloud Providers

**Stop using long-lived cloud credentials as secrets.** OIDC (OpenID Connect) lets your workflow request **short-lived tokens** directly from your cloud provider — no stored secrets needed.

### How It Works

1. Your workflow requests an OIDC token from GitHub
2. The token contains claims about the workflow (repo, branch, actor, etc.)
3. Your cloud provider validates the token and issues temporary credentials
4. Credentials expire automatically after the job finishes

### AWS Example

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write       # Required for OIDC
      contents: read

    steps:
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/GitHubActionsRole
          aws-region: us-east-1
          # No access keys needed — OIDC handles authentication
```

### Azure Example

```yaml
      - uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
```

### GCP Example

```yaml
      - uses: google-github-actions/auth@v2
        with:
          workload_identity_provider: 'projects/123/locations/global/workloadIdentityPools/github/providers/my-repo'
          service_account: 'deploy@my-project.iam.gserviceaccount.com'
```

> 💡 **Theo's Tip**: OIDC is the single biggest security improvement you can make to your workflows. Long-lived secrets in repo settings are a ticking time bomb — if they leak, an attacker has persistent access. OIDC tokens are scoped, short-lived, and automatically rotated every run.

## Pin Actions to Commit SHAs

**Tags are mutable.** An attacker who compromises an action's repository can move a tag to point to malicious code. This is exactly what happened in the **`tj-actions/changed-files` incident** (March 2025) — a compromised tag caused thousands of workflows to execute malicious code that exfiltrated secrets.

```yaml
# ❌ Don't — tags can be moved
- uses: actions/checkout@v4

# ✅ Do — SHA is immutable
- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1
```

Add a comment with the version for readability. The SHA guarantees that the code you reviewed is the code that runs.

> 💡 **Theo's Tip**: Use [StepSecurity's `harden-runner`](https://github.com/step-security/harden-runner) or GitHub's own **Dependabot** to automatically update pinned SHAs when new versions are released. You get the safety of SHA pinning without the maintenance burden.

## Protecting Workflow Files with `CODEOWNERS`

Workflow files are code that controls your deployments. Protect them:

```
# .github/CODEOWNERS
.github/workflows/    @my-org/platform-team
.github/actions/      @my-org/platform-team
```

Combined with **branch protection rules** that require CODEOWNERS approval, this ensures that no one can modify your CI/CD pipeline without review from the platform team.

> 💡 **Theo's Tip**: Also enable **"Require approval for all outside collaborators"** in your Actions settings. This prevents forks from running workflows that could access your secrets — a common attack vector on public repositories.

## Secret Hygiene

### Avoiding Secret Exposure in Logs

GitHub masks secrets in logs automatically, but it can't catch everything:

```yaml
# ❌ Don't — secrets can leak through environment variable dumps
- run: env | sort

# ❌ Don't — base64 encoding bypasses masking
- run: echo "${{ secrets.TOKEN }}" | base64

# ✅ Do — use secrets only where needed, mask manually if derived
- run: |
    DERIVED_VALUE=$(echo "${{ secrets.TOKEN }}" | sha256sum | cut -d' ' -f1)
    echo "::add-mask::$DERIVED_VALUE"
    echo "Hash: $DERIVED_VALUE"
```

### Secret Scanning

Enable **secret scanning** and **push protection** in your repository settings — GitHub will block pushes containing known secret patterns before they reach your workflow files.

> ⚠️ **Theo's Tip**: Be especially careful with `pull_request_target` workflows. Unlike `pull_request`, `pull_request_target` runs in the **context of the base branch** — meaning it has access to secrets. If you checkout the PR's head ref in a `pull_request_target` workflow, a malicious PR can execute arbitrary code with access to your secrets.

## Artifact Attestation and SLSA

Use `actions/attest-build-provenance` to generate **signed attestations** for your build artifacts, meeting SLSA (Supply-chain Levels for Software Artifacts) compliance requirements:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      attestations: write

    steps:
      - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1

      - name: Build
        run: npm run build && tar -czf dist.tar.gz dist/

      - name: Attest build provenance
        uses: actions/attest-build-provenance@v2
        with:
          subject-path: 'dist.tar.gz'
```

This creates a cryptographically signed record of **what** was built, **where**, **when**, and **from which source code**. Anyone can verify the attestation:

```bash
gh attestation verify dist.tar.gz --repo my-org/my-repo
```

> 💡 **Theo's Tip**: Artifact attestation is not just for compliance checkboxes. It's your proof that a build artifact actually came from your CI pipeline and wasn't tampered with. If you publish packages or distribute binaries, this is table stakes.

## Security Best Practices Table

| ✅ Do | ❌ Don't |
|------|---------|
| Set `permissions: read-all` at workflow level | Leave default (broad) permissions |
| Pin actions to full commit SHAs | Pin to tags like `@v4` or `@main` |
| Use OIDC for cloud authentication | Store long-lived cloud keys as secrets |
| Protect `.github/workflows/` with CODEOWNERS | Let anyone push workflow changes |
| Use `pull_request` for untrusted code | Use `pull_request_target` with head checkout |
| Mask derived values with `::add-mask::` | Dump environment variables in logs |
| Enable secret scanning and push protection | Rely on post-commit scanning only |
| Audit third-party actions before using them | Blindly trust popular actions |
| Use `actions/attest-build-provenance` | Ship artifacts without provenance |
| Scope secrets to specific environments | Make all secrets available to all workflows |

## Putting It All Together

A hardened workflow combining all practices:

```yaml
name: Secure Build & Deploy

on:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      attestations: write
      id-token: write
    steps:
      - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1
      - uses: actions/setup-node@1e60f620b9541d16bece96c5465dc8ee9832be0b  # v4.0.3
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/attest-build-provenance@v2
        with:
          subject-path: 'dist/'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: production
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: us-east-1
      - run: echo "Deploying with short-lived OIDC credentials"
```

> 💡 **Theo's Tip**: Security hardening is a journey, not a destination. Start with the highest-impact changes — OIDC and permissions — then work your way through SHA pinning, CODEOWNERS, and attestation. Each layer you add makes a compromise significantly harder.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
