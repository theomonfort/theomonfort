---
title: "Git Infrastructure & Scale"
group: "platform"
tags: ["infrastructure", "git", "azure", "monorepo", "scale"]
---

**Git Infrastructure & Scale** covers [[GitHub]]'s 2026 compute, storage, network, and core Git engine investments designed to sustain thousands of concurrent coding agents operating on shared repositories.

## Capacity Added in 2026

| Infrastructure Layer | 2026 Expansion | Purpose |
| --- | --- | --- |
| **Compute** | **+4M CPU cores** | Powering Actions runners, cloud sandboxes, and agent workloads |
| **Storage** | **+160 PB** high-speed storage | Low-latency Git object stores, caches, and package registries |
| **Network** | **+50 Tb/s** network capacity | High-throughput clone, fetch, push, and artifact transfer |

## Rearchitecting Git for "Angry Agents"

- **Monorepo Stress Benchmark**: GitHub rearchitected core Git write paths to handle **5,000 concurrent "angry agents"** sustaining **7,200 writes per second** against a single monorepo, matching the exponential growth recorded in [[Octoverse & Agent Era Metrics]].
- **Azure Migration Roadmap**: Under the Universe 2026 [[Scale Pillar]], GitHub's full Git infrastructure migration to Azure is actively underway, targeting completion in **early 2027** alongside [[Agent HQ & Agent Teams]].
