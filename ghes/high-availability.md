---
title: High Availability
layout: default
parent: GHES
nav_order: 2
---

# GHES High Availability

📖 **Official docs**: [About high availability configuration](https://docs.github.com/en/enterprise-server@latest/admin/monitoring-and-managing-your-instance/configuring-high-availability)

## Why HA Matters

A single GHES appliance is a **single point of failure**. If it goes down — hardware failure, storage corruption, datacenter outage — your entire development organization stops. High Availability ensures that a warm standby is always ready to take over.

### RPO and RTO — The Numbers That Matter

| Metric | Definition | GHES HA Target |
|--------|-----------|---------------|
| **RPO** (Recovery Point Objective) | How much data can you afford to lose | Near-zero — replication is continuous |
| **RTO** (Recovery Time Objective) | How fast must you be back online | Minutes (planned) to under an hour (unplanned) |

Without HA, your RPO depends on your backup frequency (hours), and your RTO depends on how fast you can provision and restore (hours to days). HA collapses both to minutes.

> 💡 **Theo's Tip**: When pitching HA to leadership, translate RTO into developer-hours lost. If you have 500 developers and GHES is down for 4 hours, that's 2,000 developer-hours of disrupted productivity. The cost of a replica pays for itself fast.

## Architecture Overview

GHES HA uses an **active-passive** model:

```
┌─────────────────┐         Continuous          ┌─────────────────┐
│                 │        Replication           │                 │
│  Primary Node   │ ──────────────────────────▶  │  Replica Node   │
│  (active)       │   MySQL, Redis, Git repos   │  (passive)      │
│                 │   Pages, Actions, Packages   │                 │
└─────────────────┘                              └─────────────────┘
        │                                                │
   Serves all                                     Standby — does
   read/write                                     not serve traffic
   traffic                                        until promoted
```

**What gets replicated**:
- Git repositories (via `rsync` and native Git replication)
- MySQL databases (issues, PRs, users, settings)
- Redis (caching, background jobs)
- Pages, Packages, and Actions data
- Elasticsearch indices

## Setting Up a Replica

### Prerequisites

- A **second GHES appliance** with identical specs to the primary
- The replica must be on the **same GHES version** as the primary
- Network connectivity between primary and replica on ports **122** (SSH) and **1194** (OpenVPN)

### Network Requirements

| Port | Protocol | Direction | Purpose |
|------|----------|-----------|---------|
| 122 | TCP | Primary ↔ Replica | Administrative SSH |
| 1194 | UDP | Primary ↔ Replica | Encrypted replication tunnel (OpenVPN) |
| 443 | TCP | Replica → Primary | HTTPS replication |
| 8443 | TCP | Admin → Replica | Management Console access |

> 💡 **Theo's Tip**: The replication tunnel uses OpenVPN over UDP 1194. If your network team is strict about UDP, you'll need to fight for this one — there's no TCP-only alternative. Get the firewall rule approved before you start the setup.

### Step-by-Step Setup

**1. On the replica**, configure it to point at the primary:

```bash
# SSH into the replica appliance
ssh -p 122 admin@<replica-hostname>

# Initialize replication — this connects to the primary
ghe-repl-setup <primary-hostname>
```

This command downloads the primary's configuration, establishes the VPN tunnel, and prepares the replica to receive data.

**2. Start replication**:

```bash
# Begin replicating all data from the primary
ghe-repl-start
```

Initial synchronization can take **hours** depending on your data volume. Subsequent replication is incremental.

**3. Verify replication status**:

```bash
ghe-repl-status
```

Expected output when healthy:

```
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster health is green with all indices in sync
OK: git replication is in sync
OK: pages replication is in sync
OK: actions replication is in sync
```

> 💡 **Theo's Tip**: Run `ghe-repl-status` immediately after setup, then again 30 minutes later. Some replication streams (especially Elasticsearch) take time to fully sync. Don't declare victory until every line says "OK" or "in sync."

## Geo-Replication

For organizations with **multiple data centers or regions**, geo-replication extends the HA model to serve **read traffic from geographically distributed replicas**.

```bash
# On the primary, enable geo-replication
ssh -p 122 admin@<primary> -- 'ghe-config cluster.geo-replication true'
ssh -p 122 admin@<primary> -- 'ghe-config-apply'

# On each geo-replica, set up with the --geo flag
ssh -p 122 admin@<geo-replica> -- 'ghe-repl-setup --geo <primary-hostname>'
ssh -p 122 admin@<geo-replica> -- 'ghe-repl-start'
```

Geo-replicas handle `git clone`, `git fetch`, and API read requests — reducing latency for distributed teams. All writes still route to the primary.

## Failover Procedures

### Planned Failover (Maintenance)

Use this when you need to take the primary offline for **maintenance or upgrades**:

```bash
# 1. Enable maintenance mode on the primary
ssh -p 122 admin@<primary> -- 'ghe-maintenance -s'

# 2. Wait for replication to fully catch up
ssh -p 122 admin@<replica> -- 'ghe-repl-status'
# Ensure ALL streams show "in sync"

# 3. Promote the replica to primary
ssh -p 122 admin@<replica> -- 'ghe-repl-promote'

# 4. Update DNS to point to the new primary
# (or update your load balancer target)

# 5. Verify the new primary is serving traffic
curl -sI https://<hostname> | head -5
```

### Unplanned Failover (Disaster)

When the primary is **unreachable** and you need to recover immediately:

```bash
# 1. Confirm the primary is truly down (not a network blip)
# Try SSH, ping, and console access

# 2. Force-promote the replica
ssh -p 122 admin@<replica> -- 'ghe-repl-promote'

# 3. Update DNS to point to the promoted replica
# Lower your DNS TTL ahead of time (ideally 60s) to speed this up

# 4. Notify your team — some data from in-flight operations may be lost
```

> 💡 **Theo's Tip**: The difference between a 5-minute recovery and a 2-hour recovery is **preparation**. Write a runbook. Print it out. Make sure at least three people know where it is. During an actual outage, your brain will not be at its best.

## Monitoring Replication Health

### Automated Health Checks

```bash
# Quick status check (run from replica)
ssh -p 122 admin@<replica> -- 'ghe-repl-status'

# Verbose output with replication lag details
ssh -p 122 admin@<replica> -- 'ghe-repl-status -v'
```

### Key Lag Metrics

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| MySQL replication lag | < 1 second | 1–10 seconds | > 10 seconds |
| Redis replication lag | < 1 second | 1–5 seconds | > 5 seconds |
| Git replication lag | < 5 minutes | 5–30 minutes | > 30 minutes |
| Elasticsearch sync | Green | Yellow | Red |

> 💡 **Theo's Tip**: Don't just monitor "is replication running" — monitor **lag**. Replication can be "running" but 6 hours behind due to a network bottleneck. That means 6 hours of data loss in a failover. Set up a cron job or monitoring integration to poll `ghe-repl-status` and alert when any stream falls behind.

## Testing Your DR Plan

Run a **failover drill** at least twice a year. Here's a checklist:

| Step | Action | Verified |
|------|--------|----------|
| 1 | Notify stakeholders of the drill window | ☐ |
| 2 | Enable maintenance mode on primary | ☐ |
| 3 | Verify all replication streams are in sync | ☐ |
| 4 | Promote the replica | ☐ |
| 5 | Update DNS / load balancer | ☐ |
| 6 | Verify login, git push, git pull, CI triggers | ☐ |
| 7 | Test Actions workflows run successfully | ☐ |
| 8 | Fail back: set up old primary as new replica | ☐ |
| 9 | Promote original primary back | ☐ |
| 10 | Document issues found and time taken | ☐ |

## Comparison: HA vs Backup-Only vs Geo-Replication

| Capability | Backup Only | HA (Primary + Replica) | Geo-Replication |
|-----------|-------------|----------------------|-----------------|
| **RPO** | Hours (last backup) | Near-zero | Near-zero |
| **RTO** | Hours (restore time) | Minutes | Minutes |
| **Read scaling** | No | No | Yes |
| **Geographic distribution** | No | No | Yes |
| **Infrastructure cost** | Low (1 appliance + backup host) | Medium (2 appliances) | High (3+ appliances) |
| **Complexity** | Low | Medium | High |
| **Still need backups?** | — | **Yes** | **Yes** |

> 💡 **Theo's Tip**: HA does **not** replace backups. Replication faithfully copies everything — including accidental deletions and data corruption. You need backups for point-in-time recovery. Always run both.

## Cluster Mode vs HA

**Cluster mode** distributes services across multiple nodes for horizontal scaling. It's a **legacy architecture** — GitHub no longer recommends it for new deployments.

| Aspect | HA (Recommended) | Cluster (Legacy) |
|--------|-------------------|-------------------|
| **Architecture** | Active-passive (2 nodes) | Active-active (3+ nodes) |
| **Scaling** | Vertical (bigger instance) | Horizontal (more nodes) |
| **Complexity** | Low | Very high |
| **Failover** | Simple promotion | Complex orchestration |
| **GitHub's recommendation** | ✅ Default for all new deployments | ⚠️ Only for 10,000+ user orgs with specific needs |
| **Migration path** | — | Migrate to HA when possible |

For the vast majority of organizations, **HA is the right choice**. Cluster mode adds significant operational complexity with diminishing returns unless you're at massive scale.

## Load Balancers and DNS Failover

### Load Balancer Configuration

Place a **Layer 4 (TCP) load balancer** in front of your GHES nodes. Configure health checks against `https://<hostname>/status` — the primary returns `200 OK`, the replica returns `503` until promoted.

### DNS-Based Failover

If you don't use a load balancer, use **DNS failover** with a low TTL:

```bash
# Pre-configure your DNS with a low TTL (60 seconds)
ghes.yourcompany.com  A  10.0.1.100  TTL=60

# During failover, update the A record to the replica's IP
ghes.yourcompany.com  A  10.0.2.100  TTL=60
```

> 💡 **Theo's Tip**: Set your DNS TTL to 60 seconds **now**, not during the outage. If your TTL is currently 3600 (1 hour) and you change the record during a failover, clients will still point to the dead primary for up to an hour. Pre-stage the low TTL and you'll recover in minutes.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
