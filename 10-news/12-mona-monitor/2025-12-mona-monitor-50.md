# The Mona Monitor: #41

- **Source**: [Discussion #50](https://github.com/github/Business-Insights/discussions/50)
- **Author**: @fintanr
- **Date**: 2025-12-03
- **Labels**: 

---

The Mona Monitor is here for you with the latest from our competitors, industry, and activity on GitHub. This issue contains updates on AWS, GitLab, Anthropic, OpenAI, Cursor, Zed, Amp, Qodo, Greptile, Vercel, Lovable, Octopus Deploy, Endor Labs, Snyk, GitGuardian, SemGrep, Vercode, Mend, Google and Meta, 

**Trending Repos** 
_Here is what is trending in our public and open source repos._

_AI-related projects continue to have the most visits, contributions, and stars:_

* [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev), +2K stars WoW
* [gemini-cli](https://github.com/google-gemini/gemini-cli), +1K stars WoW
* [spec-kit by GitHub](https://github.com/github/spec-kit), +1K stars WoW
* [toon](https://github.com/toon-format/toon), token-oriented object notation: compact and human-readable serialization format designed for passing structured data to Large Language Models with significantly reduced token usage, ~864 stars WoW
* [Claude Code](https://www.github.com/anthropics/claude-code), +800 stars WoW
* [skills by Anthropics](https://github.com/anthropics/skills), +760 stars WoW
* [open-webui](https://github.com/open-webui/open-webui), ~600 stars WoW
 * [codex by OpenAI](https://github.com/openai/codex), +400 stars WoW
* [ollama](https://github.com/ollama/ollama), +400 stars WoW
* [GitHub's CLI](https://github.com/cli/cli), GitHub’s official command line tool

_Newly Emerged Trending Repos with the most visits and star growth in order:_

* [llm-council](https://github.com/karpathy/llm-council), coordinates multiple LLMs to collaboratively answer challenging questions and leverage the strengths of various LLMs working together, ~9K stars since creation (11 days ago)
* [Valdi by Snapchat](https://github.com/Snapchat/Valdi), cross-platform UI framework that delivers native performance without sacrificing developer velocity, ~15.3K stars since creation (55 days ago)
* [sam-3d-objects by Meta Research](https://github.com/facebookresearch/sam-3d-objects), a foundation model that reconstructs full 3D shape geometry, texture, and layout from a single image, excelling in real-world scenarios with occlusion and clutter by using progressive training and a data engine with human feedback , ~1K stars WoW
* [compounding-engineering-plugin](https://github.com/EveryInc/compounding-engineering-plugin), plugin that makes each unit of engineering work easier than the last. Transform how you plan, build, and review code using AI-powered tools that systematically improve your development workflow, ~1K stars WoW
* [misaka26](https://github.com/straight-tamago/misaka26), customization tool for iOS/iPadOS versions 16.0 to 26.1; It leverages a bug that enables [TrollRestore](https://github.com/JJTech0130/TrollRestore), allowing users to extensively customize their devices, ~2.9K stars since creation (17 days ago)

_Overall OSS trends, as of Dec 1st, 2025:_
 * The most OSS repo visits originated from the United States, India, and Germany, followed by Hong Kong, United Kingdom and Japan.
 * Countries with the most daily repo creations are India, United States, and Brazil, followed by  Indonesia, Germany and Japan

**Macro Trends and Emerging (Relevant) Tech**
_There is a robust ecosystem around GitHub that impacts our positioning and traction. This section brings select developments and pertinent analysis of technologies in our sphere._ 

* **GitLab** [announced Q3FY26 earnings of $244M](https://s204.q4cdn.com/984476563/files/doc_financials/2026/q3/GTLB-Q3-FY2026-Earnings-Press-Release-Final.pdf) (+25% YoY). GitLabs net new customer growth has slowed dramatically. We have provided [a detailed analysis of the results](https://docs.google.com/document/d/1gi1wBvhGpTOTKY_yrINZ8EIoHGAU8SXt1Zd7m89dQAM/edit?usp=sharing). 

* **Google** and **Meta** [are reported to be in discussions](https://www.reuters.com/business/meta-talks-spend-billions-googles-chips-information-reports-2025-11-25/) to give Meta access to Google TPUs. This has potentially significant ramifications for **Nvidia**.

**Competitor News**
_This section covers select updates and analysis from known and emerging competitors._  

**AI**

* **AWS** re:invent is on this week, and AWS have their usual plethora of announcements. Directly relevant to GitHub are:
  * Kiro, the spec driven development focused IDE from AWS is center stage, with two major announcements.: [Kiro Powers](https://kiro.dev/blog/introducing-powers/) - an approach to specifying guiding principles/frameworks and tools which can be dynamically loaded by an agent as needed and [Kiro autonomous agent](https://kiro.dev/blog/introducing-opus-45/), a continuously available agent that builds memory and context. 
  * AWS Transform custom](https://aws.amazon.com/blogs/aws/introducing-aws-transform-custom-crush-tech-debt-with-ai-powered-code-modernization/) - a modernization agent focused on legacy codebases written in Java, Node and Python

* **Anthropic** [acquired **Bun**](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone), a widely used JavaScript toolkit. Anthropic also stated they have hit a $1Bn run rate for Claude Code. The phrase run rate is important, as this is attributing an entire Claude subscription as Claude Code revenue if it is used for Claude Code in any way. 

* **Anthropic** [released Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5). As is customary, various vendors, including [**Cursor**](https://x.com/cursor_ai/status/1993031841901928829?s=20), [**Windsurf**](https://windsurf.com/blog/opus-4.5), [**Kiro**](https://kiro.dev/blog/introducing-opus-45/) and [**GitHub**](https://github.blog/changelog/2025-11-24-claude-opus-4-5-is-in-public-preview-for-github-copilot/), immediately announced support for the latest model release. 

* **Cursor** [released Cursor 2.1](https://cursor.com/changelog/2-1), including an in IDE AI Code Review tool and “instant grep” functionality. 

* **Zed**, an AI IDE vendor, also flagged an improved grep-like functionality called [project search](https://zed.dev/blog/nerd-sniped-project-search).

* **Amp**, an ad supported AI Coding Assistant developed by **Sourcegraph**, is being [spun out to a separate company](https://sourcegraph.com/blog/why-sourcegraph-and-amp-are-becoming-independent-companies). As part of the move Dan Adler is replacing Quinn Slack as CEO of Sourcegraph. 

* **Qodo**, an AI tools vendor, [announced an AI Code Review platform](https://www.qodo.ai/blog/qodo-ai-code-review-platform/). This builds on their existing tooling. Qodo was rated very highly by Gartner for code base understanding in the 2025 **Gartner** AI Coding Assistants MQ (see Mona Monitor [36](https://github.com/github/Business-Insights/discussions/45)). 

* **Greptile**, an AI code review vendor, [announced v3 of their code review tool](https://www.greptile.com/blog/greptile-v3-agentic-code-review). This version allows an agent to iterate in a loop using newer llms and specific tooling. It is unclear how this approach will work with their $30 pu/pm pricing.  

* **OpenAI** [introduced data residency features](https://openai.com/index/expanding-data-residency-access-to-business-customers-worldwide/). These do not yet extend to Codex.

* **Vercel** [acquired **Gel Data**](https://www.geldata.com/blog/gel-joins-vercel), a provider of a managed postgres offering and contributors to multiple python projects. Vercel plans to invest heavily in python support across their offering. As part of this investment Vercel  are sponsoring  the Python Software Foundation. 

* **Vercel** featured heavily during AWS re:Invent, including a discussion about AI-SDK during the day 2 keynote. Vercel [also announced a new offering](https://vercel.com/blog/aws-databases-coming-to-the-vercel-marketplace) bringing several AWS serverless database offerings directly into the Vercel marketplace. For those with longish memories, you may notice that the “self driving infrastructure” tagline is very similar to the 2017 “self driving database” marketing Oracle. 

* **Lovable**, a vibe coding vendor, [acquired **Molnett**](https://lovable.dev/blog/lovable-welcomes-molnett), an infrastructure focused startup. Molnett provides tooling to run containers in microVMs using Firecracker, an open source project from Amazon. This type of architecture is especially well suited to agents.

**DevOps**

* **Octopus Deploy** [announced support for ArgoCD](https://octopus.com/blog/argo-cd-in-octopus), a widely used tool for CD with Kubernetes. 

* **GitLab** [published guidance on Azure DevOps to GitLab migrations](https://about.gitlab.com/blog/migration-from-azure-devops-to-gitlab/). 

* **AWS** [resurrected CodeCommit](https://aws.amazon.com/blogs/devops/aws-codecommit-returns-to-general-availability/) following their previous attempt to EOL the offering (see [Mona Monitor 6](https://github.com/github/Business-Insights/discussions/11))

**Security**

* **Snyk** [announced an integration with **Amazon** Kiro](https://snyk.io/blog/snyk-kiro-partner-integration/). Like their other recent integrations, this is, in fact, a guide to enabling their MCP server. 

* **Endor Labs** [introduced an AI SAST tool](https://www.endorlabs.com/learn/introducing-ai-sast-that-thinks-like-a-security-engineer). 

* SHA1-Hulud, an npm supply chain attack, returned with a vengeance. Multiple vendors, including [**Snyk**](https://snyk.io/blog/sha1-hulud-npm-supply-chain-incident/), [**GitGuardian**](https://blog.gitguardian.com/shai-hulud-2/), [**Mend**](https://www.mend.io/blog/shai-hulud-the-second-coming/), [**SemGrep**](https://semgrep.dev/blog/2025/block-malicious-dependencies-with-semgrep-supply-chain/) and [**VeraCode**](https://www.veracode.com/blog/return-of-the-shai-hulud-worm/) put out guidance around it. ,


/cc @kdaigle, @mariorod, @v-fedorov-gh, @ashashar,  @luisatlive,  @jaredpalmer, @martinwoodward , @jbjonesjr, @shanazcw, @KevinCrosby, @hollenberry, @Tala-K , @mekhatib22, @Muddaqureshi, @NickLiffen, @siminapasat, @aprilla, @maya-ross, @griffinashe @toddmanion @lukehoban, @emilyistoofunky, @LaurenBuchman 
