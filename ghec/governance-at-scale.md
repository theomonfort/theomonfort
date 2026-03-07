---
title: Governance at Scale
layout: default
parent: GHEC
nav_order: 2
---

# Governance at Scale

📖 **Official docs**: [Managing policies for your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/policies)

## Repository Rulesets

Rulesets are the **evolution of branch protection rules**. They let you define protection policies at the repository, organization, or enterprise level — and apply them to branches and tags using pattern matching.

### Creating a Ruleset

```
Repository → Settings → Rules → Rulesets → New ruleset
```

A ruleset consists of:
1. **Target** — which branches/tags the rules apply to (e.g., `refs/heads/main`, `refs/heads/release/*`)
2. **Rules** — what's enforced (require PR, require status checks, block force pushes, etc.)
3. **Bypass list** — who can bypass the rules (emergency break-glass)
4. **Enforcement** — active, evaluate (dry-run), or disabled

### Example: Enterprise-Wide Main Branch Protection

```json
{
  "name": "Protect main across all repos",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/main"],
      "exclude": []
    }
  },
  "rules": [
    { "type": "pull_request", "parameters": { "required_approving_review_count": 1 } },
    { "type": "required_status_checks", "parameters": { "strict_required_status_checks_policy": true } },
    { "type": "non_fast_forward" },
    { "type": "deletion" }
  ],
  "bypass_actors": [
    { "actor_type": "RepositoryRole", "actor_id": 5, "bypass_mode": "always" }
  ]
}
```

> 💡 **Theo's Tip**: Use the **evaluate** enforcement mode to dry-run a new ruleset before activating it. This logs what _would_ have been blocked without actually blocking anyone — invaluable when rolling out policies to a large enterprise.

### Branch Protection Rules vs Rulesets

| Feature | Branch Protection Rules | Rulesets |
|---------|------------------------|----------|
| Scope | Single repo | Repo, org, or enterprise |
| Applies to | Specific branch name | Branch/tag patterns with wildcards |
| API support | REST only | REST + GraphQL |
| Bypass controls | Limited (admin override) | Fine-grained bypass list with audit trail |
| Layering | One rule set per branch | Multiple rulesets can stack |
| Dry-run mode | ❌ | ✅ (evaluate mode) |
| Tag protection | Separate feature | Built-in |
| Status | Legacy (still supported) | Recommended going forward |

> 💡 **Theo's Tip**: Branch protection rules and rulesets can coexist, but this gets confusing fast. If you're starting fresh on GHEC, go all-in on rulesets. If migrating, plan a transition period where you audit existing branch protections and convert them to rulesets systematically.

## Organization Custom Properties

Custom properties let you **tag organizations with structured metadata** — enabling policy targeting, reporting, and automation based on org attributes.

### Example Properties

| Property | Type | Values | Purpose |
|----------|------|--------|---------|
| `compliance-tier` | Single select | `sox`, `hipaa`, `pci`, `none` | Target rulesets by compliance need |
| `business-unit` | String | `engineering`, `data`, `platform` | Cost allocation and reporting |
| `environment` | Single select | `production`, `staging`, `sandbox` | Risk-based policy enforcement |
| `data-classification` | Single select | `public`, `internal`, `confidential` | Data handling policies |

### Setting Properties via API

```bash
# Define a custom property at the enterprise level
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /orgs/YOUR_ORG/properties/schema/compliance-tier \
  -f value_type="single_select" \
  -f description="Compliance framework applicable to this org" \
  --input - <<EOF
{
  "allowed_values": ["sox", "hipaa", "pci", "none"],
  "default_value": "none"
}
EOF
```

> 💡 **Theo's Tip**: Design your custom properties taxonomy _before_ you start assigning values. Changing property names or allowed values after they're wired into rulesets and automation is painful. Start with 3–5 properties that map directly to real governance decisions.

## Custom Repository Roles

Out-of-the-box, GitHub offers five roles: **Read, Triage, Write, Maintain, Admin**. Custom repository roles let you create fine-grained roles that sit between these defaults.

### Example Custom Roles

| Role Name | Base Role | Added Permissions | Use Case |
|-----------|-----------|-------------------|----------|
| `Security Reviewer` | Read | View secret scanning alerts, view code scanning alerts | Security team read-only access |
| `Release Manager` | Write | Manage releases, bypass branch protections | Release engineering |
| `CI Admin` | Write | Manage Actions workflows, manage self-hosted runners | Platform team |
| `Docs Contributor` | Write | Edit wiki, manage Pages | Documentation team |

```bash
# Create a custom role via API
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /orgs/YOUR_ORG/custom-repository-roles \
  -f name="Security Reviewer" \
  -f description="Read-only access with security alert visibility" \
  -f base_role="read" \
  -f permissions[]="security_events"
```

> 💡 **Theo's Tip**: Resist the urge to create a custom role for every team. Each role is another thing to maintain and document. Start with the defaults, identify concrete gaps where developers have too much or too little access, and only then create a custom role to fill that gap.

## Enterprise Policies

Enterprise policies let you **enforce settings across every organization** in your enterprise. Once set at the enterprise level, org admins cannot override them.

### Key Policies to Configure

| Policy | Recommended Setting | Why |
|--------|-------------------|-----|
| Base repository permissions | `Read` or `None` | Principle of least privilege |
| Repository creation | Members can create `private` only | Prevent accidental public repos |
| Repository forking | `Disabled` (or private forks only) | Control code distribution |
| Two-factor authentication | `Required` | Baseline security |
| Outside collaborators | `Enterprise owners only` | Control third-party access |
| Actions permissions | Org-selected or enterprise-selected | Limit to trusted actions |
| Copilot policies | Configure per org or enterprise-wide | Control AI code suggestions |

```bash
# Enforce 2FA requirement at the enterprise level
gh api \
  --method PATCH \
  -H "Accept: application/vnd.github+json" \
  /enterprises/YOUR_ENTERPRISE \
  -F two_factor_requirement_enabled=true
```

> 💡 **Theo's Tip**: Set enterprise policies **before** onboarding organizations. It's much harder to tighten controls after teams are already working — especially 2FA enforcement, which immediately locks out non-compliant users.

## Enterprise-Scoped Budgets

Enterprise-scoped budgets let you set **spending limits on metered products** (Actions, Packages, Copilot seats, LFS) at the enterprise or organization level.

### Budget Configuration

| Scope | What You Control |
|-------|-----------------|
| Enterprise-wide | Total spend ceiling across all orgs |
| Per-organization | Individual org spend limits |
| Per-product | Limits on Actions, Packages, Copilot, etc. |

Configure in: Enterprise Settings → Billing → Budgets.

Set alert thresholds at 50%, 75%, and 90% so you're never surprised by a bill. Alerts go to enterprise owners by email.

## Inner Source Patterns

GHEC enables **inner source** — applying open source collaboration patterns within your enterprise. The key enabler is the `internal` repository visibility.

| Visibility | Who Can See | Who Can Contribute | Use Case |
|-----------|-------------|-------------------|----------|
| `private` | Explicit collaborators | Explicit collaborators | Confidential projects |
| `internal` | All enterprise members | All enterprise members (via fork/PR) | Inner source, shared libraries |
| `public` | Everyone on the internet | Anyone | Open source |

### Enabling Inner Source

1. Set repository visibility to **Internal** for shared libraries and platform code
2. Enable **repository forking** for internal repos (Enterprise Policy)
3. Use **code search** — enterprise members can search across all internal repos
4. Create an **inner source program** with `CONTRIBUTING.md` templates and discoverability

```bash
# Make a repo internal
gh api \
  --method PATCH \
  -H "Accept: application/vnd.github+json" \
  /repos/YOUR_ORG/shared-library \
  -f visibility="internal"
```

> 💡 **Theo's Tip**: Inner source only works if people can _find_ the code. Use GitHub Topics, README standards, and an internal catalog (even a simple pinned repo with links) to make discoverable what's available. Code search helps, but curation helps more.

## Compliance: Audit Log API & Streaming

For regulated environments, GHEC's audit log is your compliance backbone. It captures every significant action across the enterprise.

### High-Value Events to Monitor

| Event | What It Captures |
|-------|-----------------|
| `org.add_member` | User added to organization |
| `repo.destroy` | Repository deleted |
| `protected_branch.policy_override` | Branch protection bypassed |
| `org.remove_outside_collaborator` | External user removed |
| `enterprise.config` | Enterprise setting changed |
| `team.add_repository` | Repo access granted to team |

### Streaming to Your SIEM

```bash
# Set up Splunk streaming
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /enterprises/YOUR_ENTERPRISE/audit-log/streams \
  -f stream_type="splunk" \
  -f endpoint="https://your-splunk-hec.example.com:8088" \
  -f token="YOUR_HEC_TOKEN"
```

### Building Compliance Dashboards

Once logs are streaming, build dashboards for:
- **Access changes** — who got access to what, when
- **Policy violations** — branch protection overrides, force pushes
- **User lifecycle** — onboarding/offboarding timing vs IdP events
- **Repository creation** — new repos, visibility changes

> 💡 **Theo's Tip**: Don't just stream logs — set up **alerts**. A dashboard nobody watches is useless. Configure real-time alerts for critical events: repo visibility changed to public, branch protection disabled, enterprise owner added. These are the events where minutes matter.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
