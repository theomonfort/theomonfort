---
title: Agentic Workflows
layout: default
nav_order: 3
---

# Agentic Workflows

Autonomous AI workflows powered by [gh-aw](https://github.com/github/gh-aw). Install them with the `gh aw add-wizard` command.

```
gh extension install github/gh-aw
```

---

## 🔬 Research & Reporting

<div class="links-grid" markdown="0">

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🔍</span>
    <div class="link-body">
      <span class="link-name">Weekly Research <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Performs web research on any topic using Tavily search and creates a discussion with findings, relevant sources, and links.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard github/gh-aw/research</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/github/gh-aw/blob/main/.github/workflows/research.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">📊</span>
    <div class="link-body">
      <span class="link-name">Daily Repo Status <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Creates daily repository status reports by gathering recent activity — issues, PRs, discussions, releases — and generates GitHub issues with insights and recommendations.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard githubnext/agentics/daily-repo-status</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/githubnext/agentics/blob/main/workflows/daily-repo-status.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

</div>

---

## 🔧 Maintenance & Quality

<div class="links-grid" markdown="0">

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🔗</span>
    <div class="link-body">
      <span class="link-name">Link Checker <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Daily automated link checker that finds broken links in documentation, researches replacements, and creates PRs to fix them.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard githubnext/agentics/link-checker</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/githubnext/agentics/blob/main/workflows/link-checker.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">📖</span>
    <div class="link-body">
      <span class="link-name">Agentic Wiki Writer <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Generates and maintains GitHub wiki pages from source code. Runs daily after merges, intelligently updating documentation with incremental regeneration.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard githubnext/agentics/agentic-wiki-writer</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/githubnext/agentics/blob/main/workflows/agentic-wiki-writer.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

</div>

---

## 🚀 Code Improvement

<div class="links-grid" markdown="0">

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🧪</span>
    <div class="link-body">
      <span class="link-name">Daily Test Improver <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Runs daily to discover testing gaps, identify high-value test opportunities, and implement new tests. Also supports on-demand <code>/test-assist</code> slash command.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard githubnext/agentics/daily-test-improver</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/githubnext/agentics/blob/main/workflows/daily-test-improver.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">⚡</span>
    <div class="link-body">
      <span class="link-name">Daily Perf Improver <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Identifies and implements performance improvements daily with a measurement-driven approach. Also supports on-demand <code>/perf-assist</code> slash command.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Add to your repo:</span>
    <div class="install-code-wrap"><div class="install-code">gh aw add-wizard githubnext/agentics/daily-perf-improver</div><button class="copy-btn" onclick="event.stopPropagation();copyCmd(this)">Copy</button></div>
    <span class="install-label"><a href="https://github.com/githubnext/agentics/blob/main/workflows/daily-perf-improver.md" target="_blank" rel="noopener">View source →</a></span>
  </div>
</div>

</div>
