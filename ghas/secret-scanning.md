---
title: Secret Scanning
layout: default
parent: GHAS
nav_order: 2
---

# Secret Scanning

📖 **Official docs**: [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)

## What Secret Scanning Detects

Secret scanning identifies **200+ token patterns** from partner providers — API keys, access tokens, private keys, connection strings, and credentials that should never be in source code.

- **Commits** — scans the full Git history, not just the latest push
- **Issues & discussions** — catches secrets pasted into conversation threads
- **Wikis** — covers documentation pages within the repo
- **Pull request descriptions** — even draft PRs are scanned

When a match is found, GitHub creates an alert and (for partner patterns) **notifies the provider** so they can revoke the token automatically.

## How It Works

GitHub maintains a registry of **secret patterns** contributed by token issuers (AWS, Azure, Slack, Stripe, etc.). Each pattern defines:

1. A **regex** matching the token format
2. **Metadata** — the provider, token type, and whether validity checks are supported
3. An **automated response** — some providers instantly revoke leaked tokens

Scanning runs asynchronously after every push. For push protection, it runs **synchronously** — blocking the push before the commit lands on the remote.

## Push Protection

Push protection is the most impactful feature in secret scanning. It **prevents secrets from entering your repository** in the first place — instead of detecting them after the fact.

### What Happens When a Push Is Blocked

```
$ git push origin feature-branch
remote: error: GH013: Repository rule violations found for refs/heads/feature-branch
remote:
remote: -- push blocked by secret scanning --
remote:
remote: GitHub found the following secret in your code:
remote:   AWS Access Key ID (Amazon Web Services)
remote:   Location: config/settings.py:42
remote:
remote: To push, you must either:
remote:   - Remove the secret and amend the commit
remote:   - Bypass push protection (requires justification)
```

The developer sees exactly **what** was detected, **where** it is, and **what to do**.

### Bypass Options and Audit Trail

If a push is blocked but the match is a false positive or used in testing, the developer can bypass with a justification:

| Bypass Reason | Description |
|---------------|-------------|
| **False positive** | The pattern matched but it's not a real secret |
| **Used in tests** | The secret is a test fixture, not a real credential |
| **Will fix later** | Acknowledged, but proceeding now (generates alert) |

Every bypass is **logged and auditable** — visible in the security overview and audit log. Organization admins can review all bypasses and follow up.

> 💡 **Theo's Tip**: Don't disable push protection just because developers report false positives. Instead, use custom patterns with tighter regex to reduce noise, or mark known test values as allowed. The audit trail from bypasses is incredibly useful for compliance.

## Enabling Secret Scanning

### Repository Level

**Settings → Code security → Secret scanning** → Enable

### Organization Level

**Organization settings → Code security → Global settings** → Enable for all repositories (or a subset)

### Enterprise Level

Enterprise policies can **enforce** secret scanning and push protection across all organizations — individual repos cannot opt out.

> 💡 **Theo's Tip**: Roll out push protection in stages. Start by enabling it in **audit mode** at the org level — this logs what would have been blocked without disrupting developers. Review the data, then switch to enforcement once your team is comfortable.

## Custom Patterns

For internal secrets that GitHub's built-in patterns don't cover — internal API keys, proprietary tokens, database connection strings — define custom patterns using regex.

### Syntax and Examples

```regex
# Internal API key format: MYORG-KEY-[32 hex characters]
MYORG-KEY-[a-f0-9]{32}

# Internal service token: svc_[environment]_[base64 string]
svc_(prod|staging|dev)_[A-Za-z0-9+/]{40,}={0,2}

# Database connection string with password
(mysql|postgres):\/\/[^:]+:[^@]+@[^\/]+\/\w+
```

Custom patterns can be defined at the **repository** or **organization** level.

### Dry Run Before Enforcement

Before enforcing a custom pattern:

1. Go to **Code security → Secret scanning → Custom patterns**
2. Add your regex pattern with test strings
3. Click **Dry run** — GitHub scans the repo and shows matches without creating alerts
4. Review false positive rates
5. If satisfied, click **Publish** to start creating alerts (and optionally enable push protection for the pattern)

## Secret Scanning Alerts

When a secret is detected, an alert is created with:

- **Secret type** — which provider or custom pattern matched
- **Location** — file, line number, and commit SHA
- **Validity** — whether the secret is still active (for supported providers)
- **Exposed in** — commit, issue, PR description, wiki, etc.

### Triaging Alerts

| Action | When to Use |
|--------|------------|
| **Revoke and replace** | The secret is real and active — rotate immediately |
| **Close as revoked** | You've already rotated the credential |
| **Close as false positive** | The pattern matched but it's not a real secret |
| **Close as used in tests** | The value is a test fixture |

Closing an alert requires a **reason** — this creates the audit trail security teams need.

## Partner Program — Automatic Revocation

When GitHub detects a partner token (e.g., an AWS key, Slack webhook, or npm token), it **notifies the provider in real time**. Many partners automatically revoke the token and notify the token owner.

This happens **within seconds** of the push — often before the developer even realizes the mistake.

Supported partners include: AWS, Azure, GCP, Slack, Stripe, Twilio, npm, PyPI, NuGet, Mailgun, SendGrid, and [200+ more](https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

## Validity Checks

For supported providers, GitHub can verify whether a detected secret is **still active**:

- ✅ **Active** — the secret works and should be rotated immediately
- ❌ **Inactive** — the secret has been revoked or expired
- ❓ **Unknown** — validity could not be determined

This helps prioritize triage — active secrets need immediate attention, while inactive ones are lower urgency.

## Non-Provider Patterns

Beyond partner tokens, secret scanning can detect **generic secrets**:

- Passwords in connection strings
- Generic API keys (`api_key`, `apikey`, `API_KEY` patterns)
- Private keys (RSA, SSH, PGP)
- HTTP basic auth credentials in URLs
- Generic high-entropy strings that look like secrets

Non-provider patterns generate alerts but don't trigger automatic partner notification.

> 💡 **Theo's Tip**: Enable non-provider patterns even if they generate some false positives. A `postgres://user:password@host/db` connection string in your code is a real risk — and these patterns are the only way to catch it automatically.

## Metrics and Reporting

The **Security Overview** dashboard (available at the organization level) provides:

- Total open vs closed secret scanning alerts across all repos
- Mean time to remediation (MTTR)
- Most common secret types detected
- Push protection bypass trends
- Alerts by severity and age

Use this data to identify teams that need training and track your organization's security posture over time.

## Best Practices — Preventing Secrets in Code

| Practice | How |
|----------|-----|
| **Use environment variables** | Store secrets in `env` vars, not config files |
| **Use a secrets manager** | AWS Secrets Manager, Azure Key Vault, HashiCorp Vault |
| **Use `.gitignore`** | Exclude `.env`, `*.pem`, `credentials.json` |
| **Use `git-secrets` locally** | Pre-commit hook that scans for patterns before you commit |
| **Rotate on detection** | Don't just delete the secret — rotate it, since Git history persists |
| **Enable push protection** | The strongest preventive control available |
| **Audit bypass reasons** | Review bypass logs monthly to catch risky patterns |

> 💡 **Theo's Tip**: Even if you delete a secret from the latest commit, **it's still in Git history**. Always assume a leaked secret is compromised and rotate it. Use `git filter-repo` or BFG Repo-Cleaner to scrub history only after rotation — not instead of it.

> 💡 **Theo's Tip**: Set up a `.env.example` file with placeholder values and add `.env` to `.gitignore`. This gives developers the template they need without risking real credentials. It's simple, but it prevents the most common source of secret leaks.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
