# The Mona Monitor: #37

- **Source**: [Discussion #46](https://github.com/github/Business-Insights/discussions/46)
- **Author**: @fintanr
- **Date**: 2025-10-09
- **Labels**: 

---

The Mona Monitor is here for you with the latest from our competitors, industry, and activity on GitHub. This issue contains updates on OpenAI, Anthropic, GitLab, AWS, Google, Atlassian, Harness, Cursor, Windsurf, Greptile,  Replit, Lovable, bolt.new, AugmentCode, Sonar,  Sonatype, Mend, JetBrains, Qualcomm, Netlify, Salesforce, Mintlify, Octopus, OpenText, Docker, Meta and a recent report from Gartner. 

**Trending Repos** 
_Here is what is trending in our public and open source repos._

* AI-related projects continue to have the most visits, contributions, and stars:
   * [spec-kit by GitHub](https://github.com/github/spec-kit) continues to top the list, +3K stars WoW
   * [codex by OpenAI](https://github.com/openai/codex), is second on the list, +1K stars WoW
   * [immich](https://github.com/immich-app/immich), high performance self-hosted photo and video management solution, +2K stars WoW
   * [Claude Code](https://www.github.com/anthropics/claude-code) +1K stars WoW
   * [gemini-cli](https://github.com/google-gemini/gemini-cli), an open-source AI agent that brings the power of Gemini directly into your terminal, continues to grow, +1K stars WoW
   * [ollama](https://github.com/ollama/ollama), continues to grow and is second on the list, +500 stars WoW

* Newly Emerged Trending Repos with the most visits and star growth in order:
   * [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp), chrome devtools for coding agents, tops the list, ~10K stars since creation (25 days ago)
   * [Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni), cs a natively end-to-end, omni-modal LLM developed by the Qwen team at Alibaba Cloud,, ~2.5K stars since creation (15 days ago)
   * [vibesdk](https://github.com/cloudflare/vibesdk), an open-source vibe coding platform that helps you build your own vibe-coding platform, built entirely on Cloudflare stack, ~1K stars since creation (10 days ago)
   * [claude-agent-sdk-python by Anthropic](https://github.com/anthropics/claude-agent-sdk-python), python SDK for Claude Agent, ~1K stars in the last week
    * [folke](https://github.com/folke/sidekick.nvim), Neovim AI sidekick that integrates Copilot LSP's "Next Edit Suggestions" with a built-in terminal for any AI CLI, +1K stars in the last week

* Overall OSS trends, as of Oct 6th, 2025:
   * The most OSS repo visits originated from the United States, India, and Germany, followed by the United Kingdom, Brazil and France.
   * Countries with the most daily repo creations are India, United States, and Brazil, followed by Vietnam, Indonesia and the United Kingdom
 
**Macro Trends and Emerging (Relevant) Tech**
_There is a robust ecosystem around GitHub that impacts our positioning and traction. This section brings select developments and pertinent analysis of technologies in our sphere._ 

* **Gartner** released the 2025 Application Security Testing Magic Quadrant. **GitHub** placed as a challenger. Certain features Gartner looks for in solutions (for example IaC and Container scanning) are covered within the **Microsoft** Defender portfolio. A field alert will be posted next week.  

* **OpenAI** [announced an agreement with **AMD** to use their next generation GPUs](https://openai.com/index/openai-amd-strategic-partnership/) and took a stake in AMD. Strategically this makes sense for OpenAI, as it justifies investment in improving ROCm, AMDs equivalent of CUDA, potentially removing **NVidia**'s most significant moat. Some financial analysts provided [a sarcastic view on the funding circle](https://x.com/RichardMoglen/status/1975245087102964215). 

* **Qualcomm**, a chip manufacturer, [acquired **Arduino**](https://www.qualcomm.com/news/releases/2025/10/qualcomm-to-acquire-arduino-accelerating-developers--access-to-i), a firm focused on single board computers primarily used for IoT. Qualcomm wants to expand the Arduino offering to support edge AI.

**Competitor News**
_This section covers select updates and analysis from known and emerging competitors._  

**AI**

* **OpenAI** held their annual DevDay event. Key announcements relevant to GitHub  included the [GA of Codex](https://openai.com/index/codex-now-generally-available/) along  with various enterprise governance features. The combination of Codex going GA and the enterprise governance features announced will remove existing procurement barriers. We should expect to see significantly more direct OpenAI competition in enterprise accounts going forward. 

* **Anthropic** [introduced Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5). As is now customary every AI tools vendor that uses Claude Sonnet, including GitHub, announced they were supporting the new version. **Cognition** went a bit further and [explained why they re-architected Devin](https://cognition.ai/blog/devin-sonnet-4-5-lessons-and-challenges) to use the latest model version. Separately **Anthropic** announced that Rahul Patil [joined as CTO](https://www.anthropic.com/news/rahul-patil-joins-anthropic). 

* **Cursor** [announced a planning mode](https://cursor.com/blog/plan-mode) for breaking down larger tasks and tracking towards completion. Readers may spot some similarities to spec-kit.  Cursor also released[ version 1.7](https://cursor.com/changelog/1-7) including team rules, allowing enterprises to scale global settings and prompts. 

* **Atlassian** [announced](https://www.atlassian.com/blog/announcements/team25-europe-software-collection) a bundle of products for an “AI-Native SDLC” offering as a “software collection”. The products included are Rovo Dev, BitBucket, BitBucket Pipeline, Compass (their internal developer portal) and **DX**, a software engineering intelligence tool, they recently acquired (see Mona Monitor [36](https://github.com/github/Business-Insights/discussions/45)). 

* **Augment Code** [announced pricing changes](https://www.augmentcode.com/blog/augment-codes-pricing-is-changing), becoming the latest vendor to move to a token based model. Augment were far more transparent in their reasoning, stating that one $40 a month user was using $15K a month in capacity. The early stage Uber model of VC funding for AI Coding startups is coming to a close. 

* **Google** [released Gemini CLI Extensions](https://blog.google/technology/developers/gemini-cli-extensions/). Extensions are a packaging mechanism to pull together prompts, custom commands and, if applicable, MCP servers under a single format. Anthropic announced something very similar with [Claude Code Plugins](https://www.anthropic.com/news/claude-code-plugins)

* **Google** Deepmind [introduced CodeMender](https://deepmind.google/discover/blog/introducing-codemender-an-ai-agent-for-code-security/), a new AI agent for code security. Detailed discussion in [slack](https://github.slack.com/archives/C1YRT029W/p1759763679056059). This is not yet a product. 

* **JetBrains** [announced “claude agent”](https://blog.jetbrains.com/ai/2025/09/introducing-claude-agent-in-jetbrains-ides/), an integration into the IDE built on the Claude Agent SDK from Anthropic. 

* **Graphite**, a code review vendor, [merged their chat and code review products into a single offering called Graphite Agent](https://graphite.dev/blog/introducing-graphite-agent-and-pricing). Their tagline is create, review and merge all in one place. Their initial pricing is unlimited code reviews in their team offering. We assume this will change as their $52M series B funding round (see Mona Monitor [22](https://github.com/github/Business-Insights/discussions/30)) is not going to last long with the cost of current models. 

* **Netlify** [announced agent runners](https://www.netlify.com/blog/agent-runners-ai-development-meets-infrastructure/), a mechanism to run agentic CLI tools such as Claude Code in a sandbox environment. 

* **Vercel** [announced a $300M Series F,](https://vercel.com/blog/series-f) led by Accel and GIC. Vercel has raised a total of $863M. Vercel also announced a secondary sale of $300M, giving a liquidity event for past and current employees. 

* **Replit** [acquired OpenInt](https://blog.replit.com/replit-acquires-openint), an iPaaS vendor. This moves Replit much closer to a combination of Microsoft Power Apps and Azure Logic Apps vs Copilot. 

* **Salesforce**, whose earnings have been failing to have positive agentic vibes (see Mona Monitor [35](https://github.com/github/Business-Insights/discussions/44)), have now launched a vibe coding offering, [Agentforce Vibes.](https://developer.salesforce.com/blogs/2025/10/unleash-your-innovation-with-agentforce-vibes-vibe-coding-for-the-enterprise) **Heroku**, a PaaS platform owned by Salesforce also joined in with some [vibes](https://www.heroku.com/blog/turn-ideas-into-apps-heroku-vibes-pilot/). It remains to be seen if the vibes will improve. 

* **Mintlify**, a documentation tools vendor, [released an agent to write and maintain documentation](https://www.mintlify.com/blog/agents-launch). 

* **Lovable** [announced Lovable Cloud](https://lovable.dev/blog/lovable-cloud), a hosting solution for apps built on Lovable. **Bolt** announced [Bolt v2](https://bolt.new/blog/bolt-v2), which also features hosting. **Replit** offers something similar, built on Google. Reselling cloud services fits into the wider marketplace type approach of reselling access to LLMs. Marketplaces typically don't report all their revenue as ARR, unlike vibe coding vendors. 

**DevOps**

* **Harness**, a devops tooling vendor, [acquired **QwietAI**](https://www.harness.io/blog/harness-acquires-qwiet-ai). QwietAI is a vulnerability detection and reachability analysis vendor, formerly known as ShiftLeft, which acquired some AI branding before being actually acquired. QwietAI had raised $58M in funding. 

* **GitLab** are [positioning themselves as an alternative to Atlassian Data Center](https://about.gitlab.com/blog/atlassian-ending-data-center-as-gitlab-maintains-deployment-choice/) following **Atlassian**’s announcement of their plans to EOL DC in 2029 (see Mona Monitor [35](https://github.com/github/Business-Insights/discussions/44)).

* **AWS** [quietly announced](https://docs.aws.amazon.com/codecatalyst/latest/userguide/migration.html) that Amazon CodeCatalyst will no longer accept new customers from November 2025. They suggest migrating to **GitLab**, followed by other Git providers. AWS had already been dropped by **Gartner** from the recently published 2025 DevOps Magic Quadrant (see Mona Monitor [36](https://github.com/github/Business-Insights/discussions/45)). 

* **Octopus**, a continuous delivery vendor, [announced](https://octopus.com/blog/launching-octopus-mcp) an MCP Server.

**Security**

* **Sonar** [announced the GA of the SonarQube MCP server.](https://www.sonarsource.com/blog/announcing-sonarqube-mcp-server/) 

* SonaType [published guidance on meeting CMMC 2.0](https://www.sonatype.com/blog/modernizing-federal-devsecops-for-cmmc-and-beyond), which comes into effect from November 10th. **GitLab** published guidance earlier this year (see Mona Monitor [17](https://github.com/github/Business-Insights/discussions/24)). CMMC is a US Department of Defence (DoD) framework which DoD contractors must comply with.

* **OpenText**, never knowingly early to a party, [released an MCP server with the latest update of their Fortify CLI](https://community.opentext.com/cybersec/b/cybersecurity-blog/posts/fortify-cli-3-9-0-your-appsec-tools-meet-ai-agents). 

* **Docker** [announced “unlimited” hardened images](https://www.docker.com/blog/unlimited-access-to-docker-hardened-images-because-security-should-be-affordable-always/)for users on a Docker Teams or above subscription. Docker is responding to the growth of **ChainGuard**. 

* **Mend** [released](https://www.mend.io/blog/introducing-the-mend-io-ai-security-dashboard/) a security dashboard. 

* **JetBrains** [announced a public API to Qodana](https://blog.jetbrains.com/qodana/2025/10/qodana-public-api/), their code quality platform. 

* **FOSSA**, a software supply chain security vendor, acquired [EdgeBit](https://fossa.com/blog/fossa-acquires-edgebit/)

**Data Points & Other**

* **JetBrains** [released their State of CI/CD report](https://blog.jetbrains.com/teamcity/2025/10/the-state-of-cicd/), showing GitHub Actions is the most popular CI/CD product at 41% across their survey base. **GitLab** followed at 31%. 

* **Venture Beat** [released survey findings](https://venturebeat.com/ai/github-leads-the-enterprise-claude-leads-the-pack-cursors-speed-cant-close) showing GitHub Copilot as the most adopted AI Coding Assistant in enterprise. 

* Simon Willison published a piece on [vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/), arguing actual software engineering trumps vibe coding. We feel he may be onto something there.  

* **Meta** [announced the creation of the React Foundation](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/) and donated React and React Native to the foundation. 

/cc @kdaigle, @mariorod, @v-fedorov-gh, @ashashar,  @luisatlive,  @martinwoodward , @jbjonesjr, @shanazcw, @KevinCrosby, @hollenberry, @Tala-K , @mekhatib22, @Muddaqureshi, @NickLiffen, @siminapasat, @aprilla, @maya-ross, @griffinashe @toddmanion @lukehoban, @emilyistoofunky
