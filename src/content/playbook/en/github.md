---
title: GitHub
titleEn: GitHub
summary: The AI-native developer platform used by more than 225 million developers (as of September 2026). From Pull Requests to GitHub Copilot, GitHub continues to shape the history of software development.
icon: /theomonfort/github-white-icon.svg
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 1
category: introduction
related: ['copilot-chat', 'cloud-agent']
links:
  - group: 🔗 Official Resources
    label: About GitHub
    url: https://github.com/about
  - group: 🔗 Official Resources
    label: GitHub Copilot
    url: https://github.com/features/copilot
  - group: 🔗 Official Resources
    label: GitHub Enterprise
    url: https://github.com/enterprise
  - group: 🔗 Official Resources
    label: GitHub Well-Architected
    url: https://wellarchitected.github.com
  - group: 📰 News & Updates
    label: GitHub Octoverse 2026
    url: https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/
  - group: 📰 News & Updates
    label: GitHub Universe 2026
    url: https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/
  - group: 📰 News & Updates
    label: GitHub Blog
    url: https://github.blog
  - group: 📰 News & Updates
    label: GitHub Changelog
    url: https://github.blog/changelog
  - group: 📰 News & Updates
    label: GitHub YouTube
    url: https://www.youtube.com/@GitHub
  - group: 🇯🇵 Japan Community
    label: GitHub Japan X (Twitter)
    url: https://x.com/GitHubJapan
---

## At a Glance

<div class="hero-quote hero-quote-mona">
  <p>Hi, I'm <strong>Mona</strong> — the face of <strong>GitHub</strong>, watching over developers worldwide.</p>
  <p>Today's topic, <strong>GitHub</strong>, is the world's largest AI-native developer platform, home to <strong>225 million+</strong> developers (Octoverse, September 2026).</p>
</div>

## The Evolution of GitHub <a class="h2-doc" href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

From collaborating on code to coordinating work across agents.

<figure class="gh-timeline">
<style>
.prose-akq .gh-timeline{margin:0;font-family:var(--font-prose),sans-serif;font-size:clamp(17px,1.35vw,21px)}
.prose-akq .gh-timeline ol{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8em;margin:0;padding:0;list-style:none}
.prose-akq .gh-timeline li{position:relative;margin:0;padding:.85em 1em;border:1px solid #00f0ff55;background:#0a0e27;line-height:1.45}
.prose-akq .gh-timeline time{display:block;color:#00f0ff;font-size:1.6em;font-weight:700;line-height:1.1;margin-bottom:.3em}
.prose-akq .gh-timeline strong{display:block;color:#e8f4ff;font-size:1.05em}
.prose-akq .gh-timeline span{display:block;color:#a8bed2;font-size:.8em;margin-top:.3em}
.prose-akq .gh-timeline .gh-timeline-now{border:2px solid #ff2e88;box-shadow:0 0 15px #ff2e8822}
.prose-akq .gh-timeline-now time{color:#ff2e88}
@media(max-width:700px){.prose-akq .gh-timeline ol{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:420px){.prose-akq .gh-timeline ol{grid-template-columns:1fr}}
</style>
<ol>
<li><time>2008</time><strong>Pull requests</strong><span>Make collaboration the default.</span></li>
<li><time>2012</time><strong>GitHub Enterprise</strong><span>Bring governance to team development.</span></li>
<li><time>2019</time><strong>Actions / GHAS</strong><span>Automate delivery and security.</span></li>
<li><time>2021</time><strong>GitHub Copilot</strong><span>Build with an AI coding assistant.</span></li>
<li><time>2025</time><strong>Agent HQ</strong><span>Delegate tasks and track sessions.</span></li>
<li class="gh-timeline-now"><time>2026</time><strong>Projects / Agent groups</strong><span>One goal. Shared context. Parallel work.</span></li>
</ol>
</figure>


## AI Developer Platform

From **Plan → Code → Review → Test & Security → Operate**, AI on GitHub supports the entire SDLC end-to-end.

<figure class="rpi-pipeline" style="margin:2em 0;">
<div class="plat-toggle">
  <button type="button" data-f="all" class="on">All</button>
  <button type="button" data-f="cop">🤖 Copilot</button>
  <button type="button" data-f="nat">Other</button>
</div>
<style>
.plat-toggle{display:flex;gap:.6em;justify-content:center;margin-bottom:1em;flex-wrap:wrap}
.plat-toggle button{font-family: 'Noto Sans JP', sans-serif;background:#0a0e27;color:#e8f4ff;border:2px solid #2a3050;padding:.35em 1em;cursor:pointer;font-size:.95em}
.plat-toggle button.on{border-color:#9bbc0f;color:#9bbc0f;box-shadow:0 0 8px #9bbc0f}
.rpi-pipeline .plat-item{transition:opacity .25s}
.rpi-pipeline.f-cop .plat-item[data-cop="0"]{opacity:.1}
.rpi-pipeline.f-nat .plat-item[data-cop="1"]{opacity:.1}
</style>
<svg viewBox="0 0 1080 510" xmlns="http://www.w3.org/2000/svg"
     shape-rendering="crispEdges"
     style="width:100%;height:auto;display:block;font-family: 'Noto Sans JP', sans-serif;">
  <rect x="0" y="0" width="1080" height="510" fill="none"/>
  <!-- ── Card 1: PLAN ── green ─────────────────────────────────── -->
  <g>
    <rect x="16" y="64" width="200" height="400" fill="#0f1604"/>
    <rect x="12" y="60" width="200" height="400" fill="#0a0e27" stroke="#9bbc0f" stroke-width="3"/>
    <path d="M 18 66 h 12 M 18 66 v 12 M 206 66 h -12 M 206 66 v 12 M 18 454 h 12 M 18 454 v -12 M 206 454 h -12 M 206 454 v -12" stroke="#9bbc0f" stroke-width="2" fill="none"/>
    <rect x="32" y="38" width="160" height="44" fill="#05060f" stroke="#9bbc0f" stroke-width="3"/>
    <text x="112" y="67" text-anchor="middle" fill="#9bbc0f" font-size="18" font-weight="bold">▮ PLAN</text>
    <line x1="22" y1="100" x2="202" y2="100" stroke="#9bbc0f" stroke-width="1" stroke-dasharray="4 4" opacity="0.55"/>
    <g>
      <g class="plat-item" data-cop="0"><rect x="22" y="118" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="112" y="143" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ GitHub Projects</text></g>
      <g class="plat-item" data-cop="0"><rect x="22" y="166" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="112" y="191" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Issues/Discussions</text></g>
      <g class="plat-item" data-cop="1"><rect x="22" y="214" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="112" y="239" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Plan mode</text></g>
      <g class="plat-item" data-cop="1"><rect x="22" y="262" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="112" y="287" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ MCP</text></g>
      <g class="plat-item" data-cop="1"><rect x="22" y="310" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="112" y="335" text-anchor="middle" fill="#e8f4ff" font-size="12">▶ Skills/Instructions ...</text></g>
    </g>
  </g>
  <!-- ── Card 2: CODE ── magenta ────────────────────────────────────── -->
  <g>
    <rect x="230" y="64" width="200" height="400" fill="#1a0610"/>
    <rect x="226" y="60" width="200" height="400" fill="#0a0e27" stroke="#ff2e88" stroke-width="3"/>
    <path d="M 232 66 h 12 M 232 66 v 12 M 420 66 h -12 M 420 66 v 12 M 232 454 h 12 M 232 454 v -12 M 420 454 h -12 M 420 454 v -12" stroke="#ff2e88" stroke-width="2" fill="none"/>
    <rect x="246" y="38" width="160" height="44" fill="#05060f" stroke="#ff2e88" stroke-width="3"/>
    <text x="326" y="67" text-anchor="middle" fill="#ff2e88" font-size="18" font-weight="bold">▮ CODE</text>
    <line x1="236" y1="100" x2="416" y2="100" stroke="#ff2e88" stroke-width="1" stroke-dasharray="4 4" opacity="0.55"/>
    <g>
      <g class="plat-item" data-cop="1"><rect x="236" y="118" width="180" height="38" fill="#0e1430" stroke="#ff2e88" stroke-width="2"/>
      <text x="326" y="143" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Copilot Chat</text></g>
      <g class="plat-item" data-cop="1"><rect x="236" y="166" width="180" height="38" fill="#0e1430" stroke="#ff2e88" stroke-width="2"/>
      <text x="326" y="191" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Cloud Agent</text></g>
      <g class="plat-item" data-cop="1"><rect x="236" y="214" width="180" height="38" fill="#0e1430" stroke="#ff2e88" stroke-width="2"/>
      <text x="326" y="239" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ CLI</text></g>
      <g class="plat-item" data-cop="1"><rect x="236" y="262" width="180" height="38" fill="#0e1430" stroke="#ff2e88" stroke-width="2"/>
      <text x="326" y="287" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Copilot App</text></g>
      <g class="plat-item" data-cop="0"><rect x="236" y="310" width="180" height="38" fill="#0e1430" stroke="#ff2e88" stroke-width="2"/>
      <text x="326" y="335" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Codespaces</text></g>
    </g>
  </g>
  <!-- ── Card 3: REVIEW ── amber ─────────────────────────────────── -->
  <g>
    <rect x="444" y="64" width="200" height="400" fill="#1f1404"/>
    <rect x="440" y="60" width="200" height="400" fill="#0a0e27" stroke="#ffb000" stroke-width="3"/>
    <path d="M 446 66 h 12 M 446 66 v 12 M 634 66 h -12 M 634 66 v 12 M 446 454 h 12 M 446 454 v -12 M 634 454 h -12 M 634 454 v -12" stroke="#ffb000" stroke-width="2" fill="none"/>
    <rect x="460" y="38" width="160" height="44" fill="#05060f" stroke="#ffb000" stroke-width="3"/>
    <text x="540" y="67" text-anchor="middle" fill="#ffb000" font-size="18" font-weight="bold">▮ REVIEW</text>
    <line x1="450" y1="100" x2="630" y2="100" stroke="#ffb000" stroke-width="1" stroke-dasharray="4 4" opacity="0.55"/>
    <g>
      <g class="plat-item" data-cop="0"><rect x="450" y="118" width="180" height="44" fill="#0e1430" stroke="#ffb000" stroke-width="2"/>
      <text x="540" y="146" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Pull Requests</text></g>
      <g class="plat-item" data-cop="1"><rect x="450" y="178" width="180" height="44" fill="#0e1430" stroke="#ffb000" stroke-width="2"/>
      <text x="540" y="206" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Code Review</text></g>
      <g class="plat-item" data-cop="1"><rect x="450" y="238" width="180" height="44" fill="#0e1430" stroke="#ffb000" stroke-width="2"/>
      <text x="540" y="266" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Playwright</text></g>
      <g class="plat-item" data-cop="1"><rect x="450" y="298" width="180" height="44" fill="#0e1430" stroke="#ffb000" stroke-width="2"/>
      <text x="540" y="326" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Rubber Duck</text></g>
    </g>
  </g>
  <!-- ── Card 4: TEST &amp; SECURE ── cyan ──────────────────────── -->
  <g>
    <rect x="658" y="64" width="200" height="400" fill="#02181c"/>
    <rect x="654" y="60" width="200" height="400" fill="#0a0e27" stroke="#00f0ff" stroke-width="3"/>
    <path d="M 660 66 h 12 M 660 66 v 12 M 848 66 h -12 M 848 66 v 12 M 660 454 h 12 M 660 454 v -12 M 848 454 h -12 M 848 454 v -12" stroke="#00f0ff" stroke-width="2" fill="none"/>
    <rect x="668" y="38" width="172" height="44" fill="#05060f" stroke="#00f0ff" stroke-width="3"/>
    <text x="754" y="67" text-anchor="middle" fill="#00f0ff" font-size="15" font-weight="bold">▮ TEST &amp; SECURE</text>
    <line x1="664" y1="100" x2="844" y2="100" stroke="#00f0ff" stroke-width="1" stroke-dasharray="4 4" opacity="0.55"/>
    <g>
      <g class="plat-item" data-cop="0"><rect x="664" y="118" width="180" height="38" fill="#0e1430" stroke="#00f0ff" stroke-width="2"/>
      <text x="754" y="143" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Actions</text></g>
      <g class="plat-item" data-cop="1"><rect x="664" y="166" width="180" height="38" fill="#0e1430" stroke="#00f0ff" stroke-width="2"/>
      <text x="754" y="191" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Autofix</text></g>
      <g class="plat-item" data-cop="0"><rect x="664" y="214" width="180" height="38" fill="#0e1430" stroke="#00f0ff" stroke-width="2"/>
      <text x="754" y="239" text-anchor="middle" fill="#e8f4ff" font-size="14">▶ Code Quality</text></g>
      <g class="plat-item" data-cop="0"><rect x="664" y="262" width="180" height="38" fill="#0e1430" stroke="#00f0ff" stroke-width="2"/>
      <text x="754" y="287" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Code Scanning</text></g>
      <g class="plat-item" data-cop="0"><rect x="664" y="310" width="180" height="38" fill="#0e1430" stroke="#00f0ff" stroke-width="2"/>
      <text x="754" y="335" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Secret Protection</text></g>
    </g>
  </g>
  <!-- ── Card 5: OPERATE ── green ──────────────────────────────── -->
  <g>
    <rect x="872" y="64" width="200" height="400" fill="#0f1604"/>
    <rect x="868" y="60" width="200" height="400" fill="#0a0e27" stroke="#9bbc0f" stroke-width="3"/>
    <path d="M 874 66 h 12 M 874 66 v 12 M 1062 66 h -12 M 1062 66 v 12 M 874 454 h 12 M 874 454 v -12 M 1062 454 h -12 M 1062 454 v -12" stroke="#9bbc0f" stroke-width="2" fill="none"/>
    <rect x="888" y="38" width="160" height="44" fill="#05060f" stroke="#9bbc0f" stroke-width="3"/>
    <text x="968" y="67" text-anchor="middle" fill="#9bbc0f" font-size="18" font-weight="bold">▮ OPERATE</text>
    <line x1="878" y1="100" x2="1058" y2="100" stroke="#9bbc0f" stroke-width="1" stroke-dasharray="4 4" opacity="0.55"/>
    <g>
      <g class="plat-item" data-cop="1"><rect x="878" y="118" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="968" y="143" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Agentic Workflows</text></g>
      <g class="plat-item" data-cop="1"><rect x="878" y="166" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="968" y="191" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Copilot Memory</text></g>
      <g class="plat-item" data-cop="1"><rect x="878" y="214" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="968" y="239" text-anchor="middle" fill="#e8f4ff" font-size="13">▶ Copilot Metrics</text></g>
      <g class="plat-item" data-cop="0"><rect x="878" y="262" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="968" y="287" text-anchor="middle" fill="#e8f4ff" font-size="12">▶ REST/GraphQL API</text></g>
      <g class="plat-item" data-cop="0"><rect x="878" y="310" width="180" height="38" fill="#0e1430" stroke="#9bbc0f" stroke-width="2"/>
      <text x="968" y="335" text-anchor="middle" fill="#e8f4ff" font-size="11">▶ Packages/Registry</text></g>
    </g>
  </g>
  <!-- ── scanline overlay (subtle CRT vibe) ──────────────────────── -->
  <g opacity="0.08">
    <line x1="0" y1="80"  x2="1080" y2="80"  stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="140" x2="1080" y2="140" stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="200" x2="1080" y2="200" stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="260" x2="1080" y2="260" stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="320" x2="1080" y2="320" stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="380" x2="1080" y2="380" stroke="#e8f4ff" stroke-width="1"/>
    <line x1="0" y1="440" x2="1080" y2="440" stroke="#e8f4ff" stroke-width="1"/>
  </g>
</svg>
</figure>
<script>
(function(){
  function initPlatToggles(){
    document.querySelectorAll('.rpi-pipeline').forEach(function(fig){
      var toggle=fig.querySelector('.plat-toggle');
      if(!toggle||fig.dataset.platBound==='1')return;
      fig.dataset.platBound='1';
      var btns=toggle.querySelectorAll('button');
      btns.forEach(function(b){b.addEventListener('click',function(){
        fig.classList.remove('f-cop','f-nat');
        if(b.dataset.f==='cop')fig.classList.add('f-cop');
        if(b.dataset.f==='nat')fig.classList.add('f-nat');
        btns.forEach(function(x){x.classList.remove('on');});
        b.classList.add('on');
      });});
    });
  }
  initPlatToggles();
  document.addEventListener('astro:page-load',initPlatToggles);
})();
</script>

## GitHub by the Numbers

- GitHub developers: **225 million+** worldwide (as of September 2026, <a class="retro-link" href="https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/" target="_blank" rel="noopener noreferrer">Octoverse 2026 ↗</a>)
- **More than one new developer joined every second**, on average, in 2025 (<a class="retro-link" href="https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/" target="_blank" rel="noopener noreferrer">Octoverse 2025 ↗</a>)
- Public contributions: **2.5 billion** (October 2025 to September 2026, <a class="retro-link" href="https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/" target="_blank" rel="noopener noreferrer">Octoverse 2026 ↗</a>)
- **~90%** of the Fortune 100 have adopted Copilot ([2025](https://www.microsoft.com/en-us/investor/events/fy-2025/earnings-fy-2025-q4.aspx))
- **~42%** market share in paid AI coding tools ([2025](https://www.secondtalent.com/resources/github-copilot-statistics/))

## The agent era, in numbers <a class="h2-doc" href="https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<figure class="gh-octoverse">
<style>
.prose-akq .gh-octoverse{margin:0;font-family:var(--font-prose),sans-serif;font-size:clamp(16px,1.35vw,20px);line-height:1.45;color:#e8f4ff}
.prose-akq .gh-octoverse p{margin:0}
.prose-akq .gh-octo-top{display:flex;justify-content:space-between;gap:1em;padding-bottom:.6em;color:#00f0ff;font-size:.75em;letter-spacing:.1em}
.prose-akq .gh-octo-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-block:2px solid #00f0ff;background:#0a0e27}
.prose-akq .gh-octo-metric{padding:.75em 1.15em}
.prose-akq .gh-octo-metric+.gh-octo-metric{border-left:1px dashed #00f0ff55}
.prose-akq .gh-octo-number{display:block;color:#00f0ff;font-size:3.3em;font-weight:700;letter-spacing:-.06em;line-height:1.1;font-variant-numeric:tabular-nums}
.prose-akq .gh-octo-label{display:block;margin-top:.35em;font-size:.92em}
.prose-akq .gh-octo-period{display:block;color:#a8bed2;font-size:.76em;margin-top:.2em}
.prose-akq .gh-octo-body{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(0,1fr);gap:1.7em;padding:1em 0}
.prose-akq .gh-octo-chart-title{display:flex;justify-content:space-between;gap:1em;font-size:.8em;margin-bottom:.6em}
.prose-akq .gh-octo-chart-title span{color:#a8bed2}
.prose-akq .gh-octo-row{display:grid;grid-template-columns:8em minmax(0,1fr) 4em;align-items:center;gap:.65em;margin:.55em 0;font-size:.85em}
.prose-akq .gh-octo-track{position:relative;height:1.4em;background:#e8f4ff09}
.prose-akq .gh-octo-track::after{content:"";position:absolute;inset:0 auto 0 28.5714%;border-left:1px dashed #e8f4ff99}
.prose-akq .gh-octo-bar{display:flex;align-items:center;justify-content:flex-end;height:100%;width:var(--bar);background:var(--bar-color);color:#05060f;padding-right:.3em;font-size:.85em;font-weight:700}
.prose-akq .gh-octo-total{text-align:right;font-size:1.15em;font-weight:700;font-variant-numeric:tabular-nums}
.prose-akq .gh-octo-baseline{font-size:.7em;color:#a8bed2}
.prose-akq .gh-octo-signals{display:grid;align-content:center;gap:1em;padding-left:1.4em;border-left:1px dashed #e8f4ff40}
.prose-akq .gh-octo-signal{display:grid;grid-template-columns:6em minmax(0,1fr);align-items:center;gap:.6em}
.prose-akq .gh-octo-signal strong{font-size:1.65em;line-height:1.15;color:#ffb000}
.prose-akq .gh-octo-signal span{font-size:.78em}
.prose-akq .gh-octo-signal small{display:block;color:#a8bed2;font-size:.9em;margin-top:.2em}
.prose-akq .gh-octo-takeaway{display:flex;gap:1em;align-items:center;border-top:1px solid #ffb000;padding:.75em 0 .45em}
.prose-akq .gh-octo-takeaway span{color:#ffb000;font-size:.65em;letter-spacing:.08em}
.prose-akq .gh-octo-takeaway strong{font-size:1.05em;line-height:1.4}
.prose-akq .gh-octoverse figcaption{font-size:.66em;line-height:1.5;color:#a8bed2;margin-top:.5em}
@media(max-width:700px){.prose-akq .gh-octo-metric{padding:.75em .5em}.prose-akq .gh-octo-number{font-size:2.4em}.prose-akq .gh-octo-body{grid-template-columns:1fr;gap:1em}.prose-akq .gh-octo-signals{padding:1em 0 0;border-left:0;border-top:1px dashed #e8f4ff40;grid-template-columns:1fr 1fr}.prose-akq .gh-octo-signal{grid-template-columns:1fr;gap:.3em}.prose-akq .gh-octo-top{letter-spacing:0}.prose-akq .gh-octo-takeaway{align-items:flex-start}}
.prose-akq .gh-growth{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin:1.2em 0;font-family:var(--font-prose),sans-serif}
.prose-akq .gh-growth svg{display:block;width:100%;height:auto;color:#9bbc0f;font-family:inherit}
.prose-akq .gh-growth .gh-frame{fill:#0a0e27;stroke:currentColor;stroke-width:2}
.prose-akq .gh-growth .gh-corners{fill:none;stroke:currentColor;stroke-width:2}
.prose-akq .gh-growth .gh-grid{fill:none;stroke:#2a3050;stroke-width:1;stroke-dasharray:4 4}
.prose-akq .gh-growth text{fill:#e8f4ff;text-anchor:middle;font-size:20px}
.prose-akq .gh-growth .gh-axis{font-size:14px}
.prose-akq .gh-growth .gh-label{fill:currentColor;font-size:18px;font-weight:700}
.prose-akq .gh-growth .gh-peak{fill:currentColor;font-size:30px;font-weight:700}
.prose-akq .gh-growth .gh-line{fill:none;stroke:currentColor;stroke-width:3}
.prose-akq .gh-growth .gh-point{fill:#0a0e27;stroke:currentColor;stroke-width:3}
.prose-akq .gh-growth .gh-glow{filter:drop-shadow(0 0 5px currentColor)}
.prose-akq .gh-growth figcaption{grid-column:1/-1;font-size:.72em;line-height:1.5;color:#e8f4ff}
@media(max-width:700px){.prose-akq .gh-growth{grid-template-columns:1fr}}
@media(min-width:701px) and (max-height:800px){body.present-mode .prose-akq .gh-growth svg{max-height:280px}}
</style>
<div class="gh-octo-top"><span>OCTOVERSE 2026</span><span>THE FIRST DRAFT HAS CHANGED</span></div>
<div class="gh-octo-metrics">
<div class="gh-octo-metric"><strong class="gh-octo-number">&gt;40%</strong><span class="gh-octo-label">of PRs start with an agent</span><span class="gh-octo-period">September 2026</span></div>
<div class="gh-octo-metric"><strong class="gh-octo-number">110M</strong><span class="gh-octo-label">agent-started PRs</span><span class="gh-octo-period">September 2026 alone</span></div>
<div class="gh-octo-metric"><strong class="gh-octo-number">~6×</strong><span class="gh-octo-label">agent-started PR volume</span><span class="gh-octo-period">March → September 2026</span></div>
</div>
<div class="gh-octo-body">
<div>
<div class="gh-octo-chart-title"><strong>ANNUAL ACTIVITY</strong><span>2026 totals / growth vs. 2025</span></div>
<div class="gh-octo-row"><span>Pushes</span><div class="gh-octo-track"><span class="gh-octo-bar" style="--bar:76.33%;--bar-color:#ffb000">2.7×</span></div><strong class="gh-octo-total">17.9B</strong></div>
<div class="gh-octo-row"><span>Commits</span><div class="gh-octo-track"><span class="gh-octo-bar" style="--bar:75.97%;--bar-color:#ff2e88">2.7×</span></div><strong class="gh-octo-total">34.3B</strong></div>
<div class="gh-octo-row"><span>Actions jobs</span><div class="gh-octo-track"><span class="gh-octo-bar" style="--bar:92.65%;--bar-color:#00f0ff">3.2×</span></div><strong class="gh-octo-total">45.4B</strong></div>
<div class="gh-octo-row"><span>Merged PRs</span><div class="gh-octo-track"><span class="gh-octo-bar" style="--bar:69.04%;--bar-color:#9bbc0f">2.4×</span></div><strong class="gh-octo-total">1.3B</strong></div>
<p class="gh-octo-baseline">Dashed line: 2025 = 1×. Shared scale: 0–3.5×. B = billion.</p>
</div>
<div class="gh-octo-signals">
<div class="gh-octo-signal"><strong>&gt;90%</strong><span>YoY usage growth in both AI code review and GitHub Advanced Security</span></div>
<div class="gh-octo-signal"><strong>7.15M</strong><span>developers in Japan<small>#5 worldwide / September 2026</small></span></div>
</div>
</div>
<div class="gh-octo-takeaway"><span>IMPLICATION</span><strong>As agents write more, review, verification and governance become the bottleneck.</strong></div>
<figcaption>Source: Octoverse 2026. Public + private repositories. Annual totals: Oct. 2025–Sept. 2026; comparison: Oct. 2024–Sept. 2025. Multipliers calculated from rounded totals. Implication is our interpretation.</figcaption>
</figure>

## Monthly Activity Is Surging

More software is being built every month.

<figure class="rpi-pipeline gh-growth gh-monthly">
<style>
.prose-akq .gh-growth.gh-monthly{grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}
.prose-akq .gh-monthly .gh-peak{text-anchor:start;font-size:38px}
.prose-akq .gh-monthly .gh-label{text-anchor:start;font-size:16px}
.prose-akq .gh-monthly .gh-axis{font-size:15px}
.prose-akq .gh-monthly .gh-scale{text-anchor:start;dominant-baseline:middle;font-size:16px}
@media(max-width:700px){.prose-akq .gh-growth.gh-monthly{grid-template-columns:1fr}}
</style>
<!-- Curves visually traced from the supplied Universe keynote chart, not a reconstructed monthly dataset. -->
<svg viewBox="0 0 420 360" role="img" aria-labelledby="gh-monthly-prs-title gh-monthly-prs-desc">
<title id="gh-monthly-prs-title">220 million merged pull requests per month</title>
<desc id="gh-monthly-prs-desc">Monthly growth from 2023 to 2026, reproduced from the GitHub Universe 2026 keynote chart. Merged pull requests rise sharply in 2026, reaching 220 million per month.</desc>
<rect class="gh-frame" x="4" y="4" width="412" height="352"/>
<text class="gh-peak" x="26" y="52">220M</text><text class="gh-label" x="26" y="82">MERGED PRs / MONTH</text>
<path class="gh-grid" d="M 35 133.18 H 343 M 35 224.09 H 343"/><path d="M 35 315 H 343 V 105" fill="none" stroke="#2a3050" stroke-width="2"/>
<text class="gh-scale" x="350" y="133.18">200M</text><text class="gh-scale" x="350" y="224.09">100M</text><text class="gh-scale" x="350" y="315">0</text>
<polyline class="gh-line" points="35,289.4 42.5,288.4 50,289.2 57.5,289.7 65,290.6 72.5,289.3 80,288.3 87.5,288.0 95,289.1 102.5,289.3 110,288.0 117.5,285.9 125,285.8 132.5,286.3 140,286.2 147.5,284.4 155,281.9 162.5,281.8 170,281.8 177.5,280.5 185,278.6 192.5,275.0 200,273.7 207.5,273.3 215,272.1 222.5,268.1 230,263.6 237.5,260.5 245,259.3 252.5,257.1 260,254.0 267.5,247.1 275,244.1 282.5,231.8 290,221.6 297.5,217.9 305,205.3 312.5,190.6 320,173.9 327.5,158.0 335,115.0"/>
<circle class="gh-point gh-glow" cx="335" cy="115" r="6"/>
<text class="gh-axis" x="35" y="340">2023</text><text class="gh-axis" x="120" y="340">2024</text><text class="gh-axis" x="205" y="340">2025</text><text class="gh-axis" x="290" y="340">2026</text>
</svg>
<svg viewBox="0 0 420 360" role="img" aria-labelledby="gh-monthly-commits-title gh-monthly-commits-desc" style="color:#ff2e88">
<title id="gh-monthly-commits-title">7.38 billion commits per month</title>
<desc id="gh-monthly-commits-desc">Monthly growth from 2023 to 2026, reproduced from the GitHub Universe 2026 keynote chart. Commits accelerate sharply in 2026, reaching 7.38 billion per month.</desc>
<rect class="gh-frame" x="4" y="4" width="412" height="352"/>
<text class="gh-peak" x="26" y="52">7.38B</text><text class="gh-label" x="26" y="82">COMMITS / MONTH</text>
<path class="gh-grid" d="M 35 152.40 H 343 M 35 206.60 H 343 M 35 260.80 H 343"/><path d="M 35 315 H 343 V 105" fill="none" stroke="#2a3050" stroke-width="2"/>
<text class="gh-scale" x="350" y="152.40">6B</text><text class="gh-scale" x="350" y="206.60">4B</text><text class="gh-scale" x="350" y="260.80">2B</text><text class="gh-scale" x="350" y="315">0</text>
<polyline class="gh-line" points="35,302.8 42.5,302.5 50,302.7 57.5,303.2 65,303.7 72.5,302.8 80,302.5 87.5,302.5 95,303.0 102.5,302.9 110,302.3 117.5,301.7 125,301.9 132.5,301.6 140,301.5 147.5,300.4 155,299.8 162.5,299.1 170,299.1 177.5,298.5 185,297.0 192.5,295.6 200,295.0 207.5,294.4 215,291.6 222.5,288.2 230,287.0 237.5,285.3 245,282.5 252.5,279.4 260,276.9 267.5,274.1 275,271.2 282.5,268.4 290,263.7 297.5,258.4 305,253.1 312.5,247.5 320,236.9 327.5,188.5 335,115.0"/>
<circle class="gh-point gh-glow" cx="335" cy="115" r="6"/>
<text class="gh-axis" x="35" y="340">2023</text><text class="gh-axis" x="120" y="340">2024</text><text class="gh-axis" x="205" y="340">2025</text><text class="gh-axis" x="290" y="340">2026</text>
</svg>
<svg viewBox="0 0 420 360" role="img" aria-labelledby="gh-monthly-repos-title gh-monthly-repos-desc" style="color:#ffb000">
<title id="gh-monthly-repos-title">30.3 million new repositories per month</title>
<desc id="gh-monthly-repos-desc">Monthly growth from 2023 to 2026, reproduced from the GitHub Universe 2026 keynote chart. New repositories rise sharply in 2026, reaching 30.3 million per month.</desc>
<rect class="gh-frame" x="4" y="4" width="412" height="352"/>
<text class="gh-peak" x="26" y="52">30.3M</text><text class="gh-label" x="26" y="82">NEW REPOSITORIES / MONTH</text>
<path class="gh-grid" d="M 35 116.98 H 343 M 35 182.99 H 343 M 35 248.99 H 343"/><path d="M 35 315 H 343 V 105" fill="none" stroke="#2a3050" stroke-width="2"/>
<text class="gh-scale" x="350" y="116.98">30M</text><text class="gh-scale" x="350" y="182.99">20M</text><text class="gh-scale" x="350" y="248.99">10M</text><text class="gh-scale" x="350" y="315">0</text>
<polyline class="gh-line" points="35,281.7 42.5,279.6 50,281.4 57.5,284.6 65,283.8 72.5,280.0 80,278.5 87.5,280.5 95,282.5 102.5,281.2 110,277.5 117.5,275.7 125,277.4 132.5,279.0 140,276.9 147.5,272.0 155,270.2 162.5,271.3 170,272.3 177.5,270.0 185,265.6 192.5,261.4 200,261.5 207.5,262.1 215,259.8 222.5,252.9 230,246.8 237.5,245.0 245,244.9 252.5,242.8 260,235.0 267.5,226.0 275,221.1 282.5,220.0 290,217.5 297.5,209.4 305,195.9 312.5,184.2 320,172.6 327.5,164.3 335,115.0"/>
<circle class="gh-point gh-glow" cx="335" cy="115" r="6"/>
<text class="gh-axis" x="35" y="340">2023</text><text class="gh-axis" x="120" y="340">2024</text><text class="gh-axis" x="205" y="340">2025</text><text class="gh-axis" x="290" y="340">2026</text>
</svg>
<figcaption>Monthly activity, 2023 to 2026. Source: <a class="retro-link" href="https://github.com/events/universe/recap" target="_blank" rel="noopener noreferrer">GitHub Universe 2026 ↗</a></figcaption>
</figure>

## Investing in AI <a class="h2-doc" href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="gh-investment">
<style>
.prose-akq .gh-investment{max-width:60rem;margin:0 auto;text-align:center;font-family:var(--font-prose),sans-serif}
.prose-akq h2:has(+ .gh-investment){width:fit-content;margin-inline:auto;text-align:center}
.prose-akq .gh-investment .gh-invest-lead{margin:0 auto 1.4em;max-width:38em;text-wrap:balance}
.prose-akq .gh-invest-kicker{color:#a8bed2;font-size:.65em;letter-spacing:.12em;margin:0 0 .6em}
.prose-akq .gh-invest-resources{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding:1.1em 0;border-block:1px solid #00f0ff;background:#0a0e2799}
.prose-akq .gh-invest-resource{padding:.35em .6em}
.prose-akq .gh-invest-resource+.gh-invest-resource{border-left:1px dashed #00f0ff55}
.prose-akq .gh-invest-resource strong{display:block;color:#00f0ff;font-size:clamp(1.7rem,3.8vw,3.6rem);line-height:1.2;letter-spacing:-.04em;white-space:nowrap}
.prose-akq .gh-invest-resource span{display:block;margin-top:.5em;font-size:.8em}
.prose-akq .gh-investment .gh-invest-test{margin:1.5em auto 0;max-width:44em;font-size:.75em;line-height:1.65;text-wrap:balance}
.prose-akq .gh-invest-test strong{color:#ffb000}
@media(max-width:600px){.prose-akq .gh-invest-resources{grid-template-columns:1fr;padding:0 1em}.prose-akq .gh-invest-resource{padding:1em 0}.prose-akq .gh-invest-resource+.gh-invest-resource{border-left:0;border-top:1px dashed #00f0ff55}}
</style>
<p class="gh-invest-lead">GitHub is <strong>investing heavily</strong> in the infrastructure behind AI development.</p>
<p class="gh-invest-kicker">CAPACITY ADDED IN 2026</p>
<div class="gh-invest-resources">
<div class="gh-invest-resource"><strong>+4M</strong><span>CPU cores</span></div>
<div class="gh-invest-resource"><strong>+160 PB</strong><span>High-speed storage</span></div>
<div class="gh-invest-resource"><strong>+50 Tb/s</strong><span>Network capacity</span></div>
</div>
<p class="gh-invest-test">Rearchitecting Git: <strong>5,000 “angry agents” → 7,200 writes/second</strong> on one monorepo in a stress test. Work continues to increase throughput. <a class="retro-link" href="https://www.youtube.com/watch?v=MZfqId_rrB0" target="_blank" rel="noopener noreferrer">Universe session ↗</a></p>
</div>

## Industry Recognition

Third-party analysts also recognize GitHub as **the leader in AI coding**.

- **IDC**: Named a **Leader** in AI Coding and Software Engineering Technologies
- **Gartner**: Named a **Leader** in the [2026 Magic Quadrant for **Enterprise AI Coding Agents**](https://github.com/resources/whitepapers/gartner-magic-quadrant-for-enterprise-ai-coding-agents) for the **third consecutive year**, placing **highest in Ability to Execute** ([Gartner report](https://www.gartner.com/doc/reprints?id=1-2NEACZCW&ct=260520&st=sb))

<div class="quadrant-small">

```mermaid
%%{init: {"theme":"base","themeVariables":{"quadrant1Fill":"#0a1a2e","quadrant2Fill":"#1a0e1f","quadrant3Fill":"#0f0a1f","quadrant4Fill":"#0a1f1a","quadrant1TextFill":"#00f0ff","quadrant2TextFill":"#ff7ab2","quadrant3TextFill":"#c9a5ff","quadrant4TextFill":"#9bbc0f","quadrantTitleFill":"#e8f4ff","quadrantPointFill":"#ffb000","quadrantPointTextFill":"#e8f4ff","quadrantXAxisTextFill":"#e8f4ff","quadrantYAxisTextFill":"#e8f4ff","quadrantInternalBorderStrokeFill":"#2a3050","quadrantExternalBorderStrokeFill":"#00f0ff"}}}%%
quadrantChart
    title Magic Quadrant for Enterprise AI Coding Agents (2026)
    x-axis Low Vision --> Completeness of Vision
    y-axis Low Execution --> Ability to Execute
    quadrant-1 Leaders
    quadrant-2 Challengers
    quadrant-3 Niche Players
    quadrant-4 Visionaries
    GitHub: [0.65, 0.77]
    Cursor: [0.71, 0.75]
    Anthropic: [0.66, 0.73]
    OpenAI: [0.71, 0.71]
    Cognition: [0.47, 0.61]
    Google: [0.42, 0.58]
    Amazon Web Services: [0.48, 0.55]
    Alibaba Cloud: [0.45, 0.54]
    Atlassian: [0.45, 0.45]
    Tabnine: [0.51, 0.42]
    BytePlus: [0.18, 0.32]
    JetBrains: [0.21, 0.27]
```

</div>

## From tasks to agent teams <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<figure class="gh-agent-teams">
<style>
.prose-akq .gh-agent-teams{margin:0;font:clamp(17px,1.4vw,22px)/1.45 var(--font-prose),sans-serif}
.prose-akq .gh-agent-teams p{margin:0}
.prose-akq .gh-work-eras{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.6em;margin-bottom:1.6em}
.prose-akq .gh-work-era{padding:.75em;border-top:2px solid #e8f4ff40;background:#0a0e27}
.prose-akq .gh-work-era span{display:block;color:#a8bed2;font-size:.7em;margin-bottom:.3em}
.prose-akq .gh-work-era strong{color:#e8f4ff;font-size:.85em}
.prose-akq .gh-work-era:last-child{border-color:#ff2e88}
.prose-akq .gh-work-era:last-child strong{color:#ff2e88}
.prose-akq .gh-team-flow{display:grid;grid-template-columns:1fr 1.8em 2.5fr 1.8em 1fr;align-items:center}
.prose-akq .gh-team-person,.prose-akq .gh-team-tools{text-align:center;padding:.5em;line-height:1.5}
.prose-akq .gh-team-person strong,.prose-akq .gh-team-tools strong{display:block;color:#e8f4ff;font-size:1.1em}
.prose-akq .gh-team-person span{display:block;color:#00f0ff;font-size:.7em;letter-spacing:.15em;margin-bottom:.5em}
.prose-akq .gh-team-person p,.prose-akq .gh-team-tools p{font-size:.8em;margin-top:.4em}
.prose-akq .gh-team-tools small{display:block;color:#ffb000;font-size:.65em;margin-top:.5em}
.prose-akq .gh-team-arrow{text-align:center;color:#ff2e88;font-size:1.5em}
.prose-akq .gh-team-project{padding:1em;border:1px solid #ff2e88;background:#0a0e27}
.prose-akq .gh-team-context{color:#a8bed2;font-size:.65em;letter-spacing:.08em;text-align:center;margin-bottom:1em}
.prose-akq .gh-team-coordinator{border:1px solid #ff2e88;padding:.65em .5em;text-align:center;color:#ff2e88;font-weight:700}
.prose-akq .gh-team-roles{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.45em;padding-top:1.5em}
.prose-akq .gh-team-roles::before{content:"";position:absolute;top:.75em;left:16.66%;right:16.66%;height:1px;background:#ff2e8888}
.prose-akq .gh-team-coordinator::after{content:"";display:block;width:1px;height:.75em;background:#ff2e8888;position:absolute;left:50%;bottom:-.75em}
.prose-akq .gh-team-coordinator{position:relative}
.prose-akq .gh-team-roles span{position:relative;border:1px solid #ff2e8855;padding:.6em .2em;text-align:center;font-size:.8em}
.prose-akq .gh-team-roles span::before{content:"";position:absolute;left:50%;top:-.75em;width:1px;height:.75em;background:#ff2e8888}
.prose-akq .gh-agent-teams .gh-team-return{margin:1em 0 .7em;border-bottom:1px dashed #00f0ff77;padding:.5em 0;color:#00f0ff;text-align:center;font-size:.9em}
.prose-akq .gh-agent-teams figcaption{font-size:.65em;color:#a8bed2;line-height:1.5}
@media(max-width:700px){.prose-akq .gh-work-eras{grid-template-columns:repeat(2,minmax(0,1fr))}.prose-akq .gh-team-flow{grid-template-columns:1fr}.prose-akq .gh-team-arrow{transform:rotate(90deg)}.prose-akq .gh-team-project{margin:.5em 0}}
</style>
<div class="gh-work-eras">
<div class="gh-work-era"><span>THROUGH 2020</span><strong>Files / execution</strong></div>
<div class="gh-work-era"><span>2021–2024</span><strong>Suggestions / diffs</strong></div>
<div class="gh-work-era"><span>2025</span><strong>Tasks / sessions</strong></div>
<div class="gh-work-era"><span>2026</span><strong>Projects / agent groups</strong></div>
</div>
<div class="gh-team-flow">
<div class="gh-team-person"><span>YOU</span><strong>Set the goal</strong><p>Choose priorities.<br>Judge the results.</p></div>
<span class="gh-team-arrow" aria-hidden="true">→</span>
<div class="gh-team-project">
<div class="gh-team-context">PROJECT / SHARED CONTEXT + MEMORY</div>
<div class="gh-team-coordinator">Coordinating agent</div>
<div class="gh-team-roles"><span>Implement</span><span>Review</span><span>Research</span></div>
</div>
<span class="gh-team-arrow" aria-hidden="true">↔</span>
<div class="gh-team-tools"><strong>Tools + apps</strong><p>Browser<br>Computer use</p><small>Access requires approval</small></div>
</div>
<p class="gh-team-return">← Progress, artifacts and decisions come back to you.</p>
<figcaption>Conceptual roles, not a fixed architecture. Projects + computer use: public preview (2026-11-11). <a class="retro-link" href="https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases" target="_blank" rel="noopener noreferrer">Announcement ↗</a></figcaption>
</figure>

## Innovate. Scale. Trust. <a class="h2-doc" href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

A practical lens for the agentic developer platform.

<div class="gh-pillars">
<style>
.prose-akq .gh-pillars{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1em;font-family:var(--font-prose),sans-serif}
.prose-akq .gh-pillar{position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;padding:1em;border:1px solid var(--pillar);background:#0a0e27;min-width:0}
.prose-akq .gh-pillar::after{content:attr(data-step);position:absolute;right:.05em;bottom:-.15em;font-size:6em;font-weight:700;color:var(--pillar);opacity:.08;z-index:-1}
.prose-akq .gh-pillar-kicker{display:block;font-size:.65em;letter-spacing:.13em;color:var(--pillar);margin-bottom:.6em}
.prose-akq .gh-pillar h3{margin:0;color:var(--pillar);font-size:1.25em;line-height:1.2;letter-spacing:.06em}
.prose-akq .gh-pillar .gh-pillar-promise{font-size:.9em;line-height:1.5;margin:.75em 0;min-height:4.5em;text-wrap:balance}
.prose-akq .gh-pillar .gh-pillar-examples{font-size:.65em;line-height:1.7;color:#a8bed2;margin:auto 0 0;padding-top:.8em;border-top:1px dashed color-mix(in srgb,var(--pillar) 40%,transparent)}
@media(max-width:700px){.prose-akq .gh-pillars{grid-template-columns:1fr}.prose-akq .gh-pillar .gh-pillar-promise{min-height:0}}
</style>
<div class="gh-pillar" data-step="01" style="--pillar:#00f0ff"><span class="gh-pillar-kicker">01 / CAPABILITY</span><h3>INNOVATE</h3><p class="gh-pillar-promise">Make AI useful from idea to delivery.</p><p class="gh-pillar-examples">Copilot app + Projects<br>Fusion + automations<br>Memory + deeper reviews</p></div>
<div class="gh-pillar" data-step="02" style="--pillar:#9bbc0f"><span class="gh-pillar-kicker">02 / REACH</span><h3>SCALE</h3><p class="gh-pillar-promise">Bring AI workflows to more teams on a growing platform.</p><p class="gh-pillar-examples">Enterprise + Copilot<br>Agentic Workflows + Actions<br>Git infrastructure + policies</p></div>
<div class="gh-pillar" data-step="03" style="--pillar:#ffb000"><span class="gh-pillar-kicker">03 / CONFIDENCE</span><h3>TRUST</h3><p class="gh-pillar-promise">Keep visibility and control as agents ship more software.</p><p class="gh-pillar-examples">AI Scan + agentic autofix<br>Reachability analysis<br>Package firewall</p></div>
</div>

## Universe 2026: availability <a class="h2-doc" href="https://github.blog/changelog/type/new-releases/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="gh-release-map">
<style>
.prose-akq .gh-release-map{font:clamp(16px,1.25vw,19px)/1.4 var(--font-prose),sans-serif}
.prose-akq .gh-release-map .gh-release-date{margin:0 0 .8em;color:#a8bed2;font-size:.8em}
.prose-akq .gh-release-columns{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1em}
.prose-akq .gh-release-column{min-width:0;border-top:2px solid var(--pillar);background:#0a0e27cc;padding:.7em .8em}
.prose-akq .gh-release-column h3{font-size:1em;color:var(--pillar);letter-spacing:.1em;margin:0 0 .4em}
.prose-akq .gh-release-item{padding:.65em 0;border-top:1px solid #e8f4ff22}
.prose-akq .gh-release-line{display:flex;align-items:baseline;justify-content:space-between;gap:.45em}
.prose-akq .gh-release-line a{color:#e8f4ff;font-weight:600;text-decoration:none;line-height:1.3}
.prose-akq .gh-release-line a:hover,.prose-akq .gh-release-line a:focus-visible{color:#00f0ff;text-decoration:underline}
.prose-akq .gh-release-status{flex-shrink:0;padding:.1em .3em;border:1px solid currentColor;font-size:.6em;font-weight:700;color:#a8bed2;white-space:nowrap}
.prose-akq .gh-release-status.is-ga{color:#9bbc0f}
.prose-akq .gh-release-status.is-preview{color:#ffb000}
.prose-akq .gh-release-item small{display:block;color:#a8bed2;font-size:.76em;line-height:1.45;margin-top:.25em}
.prose-akq .gh-release-map .gh-release-note{font-size:.7em;color:#a8bed2;margin:.8em 0 0;line-height:1.5}
@media(max-width:700px){.prose-akq .gh-release-columns{grid-template-columns:1fr}}
</style>
<p class="gh-release-date">Public-source status checked 2026-11-11. Select a feature to open its announcement.</p>
<div class="gh-release-columns">
<div class="gh-release-column" style="--pillar:#00f0ff">
<h3>INNOVATE</h3>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases" target="_blank" rel="noopener noreferrer">Copilot app</a><span class="gh-release-status">Available</span></div><small>Projects + computer use: public preview</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion" target="_blank" rel="noopener noreferrer">Copilot Fusion</a><span class="gh-release-status is-ga">GA</span></div><small>Multi-model routing and orchestration</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations" target="_blank" rel="noopener noreferrer">Copilot Automations</a><span class="gh-release-status">Available</span></div><small>Shared workflows rolling out</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-copilot-code-review-merge-with-confidence-with-max-and-approvals" target="_blank" rel="noopener noreferrer">Code review Max</a><span class="gh-release-status is-preview">Preview</span></div><small>Deeper review; approvals are GA</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work" target="_blank" rel="noopener noreferrer">Memory / Dreaming</a><span class="gh-release-status">Mixed</span></div><small>Memory: GA. Dreaming: public preview.</small></div>
</div>
<div class="gh-release-column" style="--pillar:#9bbc0f">
<h3>SCALE</h3>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot" target="_blank" rel="noopener noreferrer">Enterprise + Copilot</a><span class="gh-release-status">Sales</span></div><small>GHEC via sales; self-serve pending</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">Git infrastructure</a><span class="gh-release-status">Underway</span></div><small>Azure migration targets early 2027</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available" target="_blank" rel="noopener noreferrer">Agentic Workflows</a><span class="gh-release-status is-ga">GA</span></div><small>Agents running in GitHub Actions</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available" target="_blank" rel="noopener noreferrer">Actions lockfiles</a><span class="gh-release-status is-ga">GA</span></div><small>Pin workflow action dependencies</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available" target="_blank" rel="noopener noreferrer">Copilot governance</a><span class="gh-release-status is-ga">GA</span></div><small>Plugin defaults + enterprise controls</small></div>
</div>
<div class="gh-release-column" style="--pillar:#ffb000">
<h3>TRUST</h3>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview" target="_blank" rel="noopener noreferrer">AI Scan: repositories</a><span class="gh-release-status is-preview">Preview</span></div><small><a class="retro-link" href="https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available" target="_blank" rel="noopener noreferrer">AI Scan for pull requests: GA ↗</a></small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis" target="_blank" rel="noopener noreferrer">Reachability analysis</a><span class="gh-release-status is-preview">Preview</span></div><small>JavaScript / TypeScript on GHEC</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability" target="_blank" rel="noopener noreferrer">Agentic autofix</a><span class="gh-release-status is-ga">GA</span></div><small>Generally available since October 15</small></div>
<div class="gh-release-item"><div class="gh-release-line"><a href="https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview" target="_blank" rel="noopener noreferrer">Package firewall</a><span class="gh-release-status is-preview">Preview</span></div><small>npm / GHEC; free during preview</small></div>
</div>
</div>
<p class="gh-release-note">GA = generally available. Preview = public preview. Availability still depends on plan, policy and rollout. “Available” does not assert GA for every subfeature.</p>
</div>
