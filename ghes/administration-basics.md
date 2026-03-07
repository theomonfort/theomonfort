---
title: Administration Basics
layout: default
parent: GHES
nav_order: 1
---

# GHES Administration Basics

📖 **Official docs**: [GitHub Enterprise Server Administration](https://docs.github.com/en/enterprise-server@latest/admin)

## What Is GHES

GitHub Enterprise Server (GHES) is a **self-hosted instance of GitHub** that runs entirely within your infrastructure. It gives your organization the full GitHub experience — repositories, Actions, Packages, Copilot, security features — while keeping all code and data behind your firewall.

- **Complete data sovereignty** — your code never leaves your network
- **Compliance-friendly** — meets regulatory requirements for air-gapped or restricted environments
- **Customizable** — configure authentication, storage, networking, and policies to match your org's needs
- **Same GitHub experience** — developers use the same workflows, UI, and tooling they already know

## Supported Platforms

GHES runs as a virtual appliance. You deploy a pre-built OVA/VHD/AMI — no OS-level package management required.

| Platform | Format | Notes |
|----------|--------|-------|
| **AWS** | AMI | Most common cloud deployment. Use `r5` or `r6i` instances. |
| **Azure** | VHD | Deploy via Azure Resource Manager templates. Premium SSD recommended. |
| **GCP** | GCE image | Use `n1-highmem` or `n2-highmem` machine types. |
| **VMware ESXi** | OVA | On-prem standard. Requires ESXi 6.7+. |
| **Hyper-V** | VHD | Windows Server 2016+ or Windows 10+ with Hyper-V role. |
| **Bare metal** | ISO | KVM-based. For teams that need maximum control. |

> 💡 **Theo's Tip**: AWS is the most battle-tested platform for GHES. If you're starting fresh and don't have a strong reason to go elsewhere, start with AWS — the documentation is the deepest, and troubleshooting resources are the most plentiful.

## System Requirements

Scale your hardware to your user count. These are GitHub's minimum recommendations:

| User Count | vCPUs | Memory | Root Storage | Data Storage |
|-----------|-------|--------|-------------|-------------|
| Up to 500 | 4 | 32 GB | 200 GB | 150 GB |
| 500–3,000 | 8 | 48 GB | 200 GB | 300 GB |
| 3,000–5,000 | 12 | 64 GB | 200 GB | 500 GB |
| 5,000+ | 16+ | 96+ GB | 200 GB | 1+ TB |

**Storage matters most.** Git repositories, Actions artifacts, and Packages can consume disk fast. Always over-provision data storage — expanding later is possible but more disruptive than starting with headroom.

> 💡 **Theo's Tip**: Monitor disk usage from day one. Running out of storage on a GHES appliance can corrupt data and is the #1 preventable outage I've seen. Set alerts at 70% and 85% capacity.

## Installation Walkthrough

### AWS

1. **Subscribe** to the GitHub Enterprise Server listing in AWS Marketplace
2. **Launch** the AMI in your target VPC — assign it to a private subnet with a security group that allows ports 22, 25, 80, 122, 443, 8080, 8443, 9418
3. **Attach an EBS volume** for data storage (gp3 recommended, sized per the table above)
4. **Assign an Elastic IP** or configure your internal DNS to point to the instance
5. **Navigate to** `https://<your-hostname>:8443/setup` to begin initial configuration

### Azure

1. **Upload the VHD** to a storage account or use the Azure Marketplace image
2. **Create a VM** using the uploaded VHD — use `Standard_E8s_v3` or larger
3. **Attach a Premium SSD** managed disk for data storage
4. **Configure the NSG** to allow the same ports as above
5. **Access** `https://<your-hostname>:8443/setup`

> 💡 **Theo's Tip**: Resist the temptation to open port 8443 to the internet. Restrict Management Console access to your admin network or VPN. It's the keys to the kingdom.

## Initial Configuration

The **Management Console** at `https://<hostname>:8443/setup` walks you through first-time setup:

1. **Upload your license** — the `.ghl` file from your GitHub Enterprise agreement
2. **Set the admin password** — this is the Management Console password, separate from any GitHub user account
3. **Configure hostname** — must match your DNS record exactly
4. **Choose authentication** — SAML, LDAP, CAS, or built-in. SAML (Entra ID, Okta) is the most common enterprise choice
5. **Configure email** — SMTP settings for notifications
6. **Enable/disable features** — Actions, Packages, Pages, Dependabot, etc.
7. **Save and apply** — the appliance restarts services with your configuration

After the first configuration run, create your **site admin** account by visiting `https://<hostname>/join` — the first user to sign up automatically becomes a site admin.

## Upgrading GHES

### Upgrade Types

| Type | What It Is | Downtime | Use Case |
|------|-----------|----------|----------|
| **Hotpatch** | Incremental patch applied live | Minimal (seconds) | Security fixes, minor patches |
| **Upgrade package** | Full version upgrade | Yes (minutes to hours) | Feature releases, major versions |

### Upgrade Path Planning

You **cannot skip major versions**. To go from 3.8 → 3.12, you must upgrade through each intermediate version:

```
3.8 → 3.9 → 3.10 → 3.11 → 3.12
```

Always check the [upgrade path tool](https://docs.github.com/en/enterprise-server@latest/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process) before planning.

```bash
# Apply a hotpatch (no package upload needed)
ssh -p 122 admin@<hostname> -- 'ghe-upgrade --hotpatch'

# Upload and apply an upgrade package
scp -P 122 github-enterprise-3.12.0.pkg admin@<hostname>:/home/admin/
ssh -p 122 admin@<hostname> -- 'ghe-upgrade /home/admin/github-enterprise-3.12.0.pkg'
```

> 💡 **Theo's Tip**: Always run a backup immediately before upgrading. Always. Even if you just ran one yesterday. Upgrades are the single most common cause of "I wish I had a backup."

## Backup and Restore

### Setting Up `ghe-backup-utils`

[`backup-utils`](https://github.com/github/backup-utils) is the official backup tool. Install it on a **separate host** — never on the GHES appliance itself.

```bash
# Clone the backup-utils repo
git clone https://github.com/github/backup-utils.git
cd backup-utils

# Configure your backup host
cp backup.config-example backup.config
```

Edit `backup.config`:

```bash
GHE_HOSTNAME="ghes.yourcompany.com"
GHE_DATA_DIR="/data/ghes-backups"
GHE_NUM_SNAPSHOTS=10          # Keep 10 rotating snapshots
GHE_EXTRA_SSH_OPTS="-p 122"
```

### Scheduled Backups

```bash
# Add to crontab — run every 6 hours
0 */6 * * * /opt/backup-utils/bin/ghe-backup -v >> /var/log/ghes-backup.log 2>&1
```

### What's Included vs Excluded

| Included | Excluded |
|----------|----------|
| Git repositories | Management Console settings |
| MySQL databases (issues, PRs, users) | TLS/SSL certificates |
| Redis data | Custom firewall rules |
| Actions workflows & secrets | OS-level customizations |
| Audit logs | Attached storage device config |
| Webhook configurations | Cluster/HA node configuration |

### Restore Procedure

```bash
# 1. Put the NEW appliance in maintenance mode
ssh -p 122 admin@<new-hostname> -- 'ghe-maintenance -s'

# 2. Restore from the latest snapshot
ghe-restore <new-hostname>

# 3. Disable maintenance mode
ssh -p 122 admin@<new-hostname> -- 'ghe-maintenance -u'

# 4. Reconfigure and validate
ssh -p 122 admin@<new-hostname> -- 'ghe-config-apply'
```

> 💡 **Theo's Tip**: Test your restore procedure at least once a quarter. A backup you've never tested is not a backup — it's a hope. Spin up a temporary appliance, restore to it, and verify data integrity.

## Maintenance Mode

Maintenance mode takes GHES offline for users while allowing admin operations.

```bash
# Enable maintenance mode (shows a friendly page to users)
ssh -p 122 admin@<hostname> -- 'ghe-maintenance -s'

# Add a custom message
ssh -p 122 admin@<hostname> -- 'ghe-maintenance -s -m "Scheduled upgrade in progress. Back by 6:00 AM UTC."'

# Disable maintenance mode
ssh -p 122 admin@<hostname> -- 'ghe-maintenance -u'

# Check current status
ssh -p 122 admin@<hostname> -- 'ghe-maintenance -q'
```

**Use maintenance mode for**: upgrades, restores, storage migrations, and any operation that modifies the data partition.

## Monitoring

### Built-in Metrics

GHES ships with a **collectd** daemon that tracks CPU, memory, disk, and application-level metrics. Access the built-in monitoring dashboard at:

```
https://<hostname>/setup/monitor
```

### External Monitoring Integration

Forward metrics to your existing monitoring stack:

```bash
# Enable collectd forwarding to Graphite/Grafana
ssh -p 122 admin@<hostname> -- 'ghe-config collectd.destination "graphite.yourcompany.com:2003"'
ssh -p 122 admin@<hostname> -- 'ghe-config-apply'
```

GHES also exposes a **Prometheus-compatible endpoint** at `/metrics` for scraping.

**Key metrics to alert on**:
- Disk usage > 70% (warning), > 85% (critical)
- CPU sustained > 80% for 10+ minutes
- Memory usage > 90%
- Git RPC response time > 5 seconds
- Background job queue depth growing

## License Management

```bash
# Check current license status
ssh -p 122 admin@<hostname> -- 'ghe-license-check'

# Upload a new license
# Navigate to https://<hostname>:8443/setup → License
```

Your license defines the maximum seat count. GHES will warn you as you approach the limit but won't hard-block new users — it trusts you to stay compliant.

> 💡 **Theo's Tip**: Set a calendar reminder 60 days before license expiration. Renewal conversations with procurement always take longer than you think.

## Support Bundles

When opening a GitHub Support ticket, attach a **support bundle** — it gives the support team everything they need to diagnose your issue:

```bash
# Generate a support bundle
ssh -p 122 admin@<hostname> -- 'ghe-support-bundle -o /tmp/support-bundle.tgz'

# Generate with extended diagnostics (takes longer, more detail)
ssh -p 122 admin@<hostname> -- 'ghe-support-bundle -x -o /tmp/support-bundle.tgz'

# SCP the bundle to your local machine
scp -P 122 admin@<hostname>:/tmp/support-bundle.tgz ./
```

> 💡 **Theo's Tip**: Always generate the support bundle **before** making changes to fix the problem. Once you restart services or apply config changes, the evidence of the original issue may be gone.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
