# The Mona Monitor: #38

- **Source**: [Discussion #47](https://github.com/github/Business-Insights/discussions/47)
- **Author**: @fintanr
- **Date**: 2025-10-22
- **Labels**: 

---

The Mona Monitor is here for you with the latest from our competitors, industry, and activity on GitHub. This issue contains updates on OpenAI, Broadcom, Anthropic, AWS, Cursor, Windsurf/Cognition, Cline, Google, Snyk, Zed, LangChain, Harness, Moderne, Amp, cto.new, JetBrains, JFrog, GitLab, Semaphore, Sonar, Port, Checkmarx, Mend, Sonatype, Vercel, JellyFish, Allstacks, Meta, ARM, TSMC and ASML.

**Trending Repos** 
_Here is what is trending in our public and open source repos._

AI-related projects continue to have the most visits, contributions, and stars:
 * [spec-kit by GitHub](https://github.com/github/spec-kit) continues to top the list, +4K stars WoW
 * [codex by OpenAI](https://github.com/openai/codex), is second on the list, +1K stars WoW
 * [Claude Code](https://github.com/anthropics/claude-code) +3K stars WoW
 * [gemini-cli](https://github.com/google-gemini/gemini-cli), an open-source AI agent that brings the power of Gemini directly into your terminal, continues to grow, +1K stars WoW
 * [ollama](https://github.com/ollama/ollama), continues to grow, +500 stars WoW
 * [GitHub's CLI](https://github.com/cli/cli), GitHub’s official command line tool
  
Newly Emerged Trending Repos with the most visits and star growth in order:

 * [superpowers](https://github.com/obra/superpowers), core skills library for Claude Code, tops the list, +3K stars in the last week
  * [TinyRecursiveModels](https://github.com/SamsungSAILMontreal/TinyRecursiveModels) by [Samsung SAIT AI Lab Montreal](https://github.com/SamsungSAILMontreal), recursive reasoning with tiny networks , ~5K stars since creation (15 days ago)
  * [prompt-eng-interactive-tutorial by Anthropic](https://github.com/anthropics/prompt-eng-interactive-tutorial), Anthropic's interactive prompt engineering tutorial, ~6K stars in the last week
* [openai-apps-sdk-examples by OpenAI](https://github.com/openai/openai-apps-sdk-examples), example apps for the Apps SDK, ~1.5K stars since creation (15 days ago)
 
Overall OSS trends, as of Oct 19th, 2025:
  * The most OSS repo visits originated from the United States, India, and Germany, followed by Hong Kong, United Kingdom and Japan.
  * Countries with the most daily repo creations are India, United States, and Brazil, followed by   Indonesia, Vietnam and Russia.
 
**Macro Trends and Emerging (Relevant) Tech**
_There is a robust ecosystem around GitHub that impacts our positioning and traction. This section brings select developments and pertinent analysis of technologies in our sphere._ 

* **OpenAI** continued on their run of chip and data center related news by [announcing a new partnership with **Broadcom** to create XPUs](https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration/). These are more task specific chips vs GPUs. OpenAI is attempting to diversify its dependence on **Nvidia**. Separately OpenAI announced [a retail sales deal with **Walmart**](https://corporate.walmart.com/news/2025/10/14/walmart-partners-with-openai-to-create-ai-first-shopping-experiences) and [a new web browser](https://openai.com/index/introducing-chatgpt-atlas/).

* **Meta** and **Arm** [announced a strategic partnership](https://newsroom.arm.com/news/arm-meta-strategic-partnership). The primary focus here is improving inference performance. 

* **TSMC**, a chip foundry, announced [Q3FY25 revenues](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2025-10/ff1cf977182dad2178b6d158e61d375ac98ff517/3Q25EarningsRelease.pdf) of $33.1Bn (+40% YoY). **ASML**, a chip equipment maker focused on advanced lithography, announced [Q3FY25 revenues](https://www.asml.com/en/news/press-releases/2025/q3-2025-financial-results) of €7.5Bn (+15% YoY). Both vendors' growth is driven by AI demand. 

* **AWS** [had a massive outage in us-east,](https://www.aboutamazon.com/news/aws/aws-service-disruptions-outage-update) taking out a significant number of major services for several hours. The underlying cause was a DNS resolution issue. 

* Journalist Ed Zitron [published data on **Anthropic** and **Cursor** cloud spend](https://www.wheresyoured.at/costs/) with AWS. We cannot validate this information, but his previous reports have proved to be accurate. Anthropic is reported to have spent $2.66Bn on AWS in the twelve months to September. He highlights rate limit changes from Anthropic (see [Mona Monitor 32](https://github.com/github/Business-Insights/discussions/41)) and pricing changes from Cursor (see [Mona Monitor 33](https://github.com/github/Business-Insights/discussions/42)) as evidence of ongoing losses at both companies.

* We are noting an increase in the usage of **OpenAI** Codex, with smaller declines in **Anthropic** Claude Code and **Cursor**. 

**Competitor News**
_This section covers select updates and analysis from known and emerging competitors._  

**AI**

* **Anthropic** had a very busy fortnight:
  * **Anthropic** announced [Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5), billed as giving the same performance as Sonnet 4.0 at one third of the price. As is customary, everyone else added support, including [**Windsurf/Cognition**](https://x.com/windsurf/status/1978512184343662707), [**Cursor**](https://cursor.com/docs/models) (listed in models, no public announcement), [**ZenCoder**](https://zencoder.ai/blog/claude-haiku-4-5) and [**GitHub**](https://github.blog/changelog/2025-10-15-anthropics-claude-haiku-4-5-is-in-public-preview-for-github-copilot/).
  * **Anthropic** [announced Claude Skills](https://www.anthropic.com/news/skills), a mechanism for guiding agents. Most directly pertinent to GitHub is the support for [Claude Skills within Claude Code](https://docs.claude.com/en/docs/claude-code/skills). 
  * **Anthropic** [announced Claude Code on the web](https://www.anthropic.com/news/claude-code-on-the-web), which allows users to run multiple agentic tasks in parallel, each in their own isolated environment. This is very similar to the capabilities in the recent **OpenAI** Codex GA (see Mona Monitor [37](https://github.com/github/Business-Insights/discussions/46)).

* **Cognition/Windsurf** [announced two models](https://cognition.ai/blog/swe-grep) targeting agentic functionality SWE-grep and SWE-grep-mini which will be used within **Windsurf**. Windsurf also [quietly released a new feature called Codemaps](https://x.com/swyx/status/1977532545089798488) for large code base understanding. There is no documentation available yet for Codemaps.

* **Cursor** got a celebrity endorsement with Nvidia CEO Jensun Haung stating that all engineers at Nvidia are using Cursor on CNBC. They wasted no time in highlighting it on [social](https://x.com/leerob/status/1975955980224717309) [media](https://www.linkedin.com/posts/cursorai_were-proud-to-work-with-nvidia-to-support-activity-7381726894175690752-dgZd). 

* **Cline** [finally announced their enterprise tiers](https://cline.bot/blog/introducing-cline-for-enterprise), following their Series A in July  (see Mona Monitor [33](https://github.com/github/Business-Insights/discussions/42)). A basic team tier at $20 pu/pm is available, while standard enterprise features such as SSO, SCIM, fine grained permissions etc all need the enterprise tier. Pricing for the enterprise tier was not disclosed. 

* **Google**[ announced a public preview of full enterprise support for Gemini Code Assist](https://cloud.google.com/blog/products/ai-machine-learning/gemini-code-assist-in-github-for-enterprises/), targeting code reviews.

* **Google** [introduced Gemini Enterprise](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise/), a wider enterprise wrapper across their broad Gemini offering portfolio, with a focus on data integrations for context and predefined agents. Gemini Code Assist [falls under the wider enterprise license](https://cloud.google.com/gemini-enterprise). This should be viewed as a packaging mechanism attempting to bring clarity to a disparate portfolio. Said clarity has not exactly broken through yet.

* **Cognition** and **Snyk**, a developer security tools vendor, [announced a new partnership](https://snyk.io/blog/snyk-cognition-partner-integration/), introducing Snyk for Devin and Snyk for Windsurf components. Under the hood these are essentially MCP integrations (see [Snyk docs](https://docs.snyk.io/integrations/developer-guardrails-for-agentic-workflows)), with some extra context provided as either Devin or Windsurf rules respectively. 

* **Zed**, an AI IDE vendor, announced [support for **OpenAI** Codex](https://zed.dev/blog/codex-is-live-in-zed) and [support for Windows](https://zed.dev/blog/zed-for-windows-is-here). 

* **LangChain** [introduced the AgentAuth framework](https://blog.langchain.com/agent-authorization-explainer/) for agents. The[ MCP auth standard](https://modelcontextprotocol.io/specification/draft/basic/authorization?ref=blog.gitguardian.com), drafted in June, builds off Oauth 2.1, but various concerns remain and vendors such as [**GitGuardian** are pushing towards gateway based authorizations](https://blog.gitguardian.com/oauth-for-mcp-emerging-enterprise-patterns-for-agent-authorization/) with routing. API vendors such as **tetrate** [are also looking in this direction](https://tetrate.io/products/tetrate-agent-router-service). All of this is to say we don’t yet know what auth for agents is going to land on. 

* **LangChain** also [announced a $125M Series B](https://blog.langchain.com/series-b/), led by IVP. LangChain has raised $160M to date. 

* **Harness**, a devops vendor, [updated their Harness Code offering](https://www.harness.io/blog/new-harness-code-experience). It is not clear who is actually using this beyond their own engineers, but Harness placed as a visionary in the 2025 **Gartner** AI Coding Assistants Magic Quadrant (see [Mona Monitor 36](https://github.com/github/Business-Insights/discussions/45)). 

* **Moderne**, the vendor behind the popular OpenRewrite project used for various Java modernization tools, [announced support for JavaScript](https://www.moderne.ai/blog/automated-javascript-refactoring-at-enterprise-scale). 

* **Amp**, which is where **Sourcegraph** are now focusing their efforts, [announced an ad-supported and sharing of training data “free mode”](https://ampcode.com/news/amp-free). We should not expect to see significant enterprise take up of this new, innovative, offering. 

* **cto.new** [announced a $7.5M series A](https://cto.new/blog/why-we-raised-5-7m-to-launch-cto-new-completely-for-free) led by Kindred Ventures and free access to Claude Sonnet 4.5 and OpenAI GPT-5.0. If this sounds too good to be true it is, cto.new will anonymise all data sent to them for use in training. 

* **Google** increased the vibes with another vibe coding [update to the Google AI Studio](https://aistudio.google.com/apps). This is different to Firebase Studio (see [Mona Monitor 24](https://github.com/github/Business-Insights/discussions/32)), which also added some vibes. The vibes between the various internal product teams at Google remain unknown.

* **Vercel** [released a report on vibe coding](https://v0.app/vibecoding), which unsurprisingly found v0 is a good platform for vibe coding.

**DevOps**

* **JetBrains** [announced the EOL and sunsetting of CodeCanvas](https://blog.jetbrains.com/codecanvas/2025/10/jetbrains-is-sunsetting-codecanvas/), their cloud development environment. CodeCanvas is comparable to GitHub Codespaces. 

* **JFrog** [announced AppTrust](https://jfrog.com/blog/jfrog-apptrust-building-a-trusted-software-supply-chain/), a new application risk governance solution, which is packaging of existing products (including their SCA offering JFrog XRay) with an added layer above. JFrog is using a new marketing phrase “DevGovOps” to describe the tooling. We should probably be grateful they did not add an AI as well. 

* **GitLab** [announced GitLab 18.5](https://about.gitlab.com/releases/2025/10/16/gitlab-18-5-released/), including a new security analyst agent. 

* **GitLab** quietly [shipped an experimental release of a new observability feature](https://docs.gitlab.com/operations/observability/), attempting to close the DevSecOps loop. This is something GitLab has been working on for a long time, having acquired **Opstrace** in 2021. Former CEO Sid Sijbrandif [flagged the feature on Linkedin](https://www.linkedin.com/posts/sijbrandij_were-experimenting-with-something-ive-wanted-activity-7383570883010994176-4Jvx/). 

* **Semaphore**, a ci/cd vendor, [released Semaphore 1.5](https://semaphore.io/blog/semaphore-v1.5-release).

**Security**

* **Sonar**, a software quality and sometimes security vendor, [announced a partnership with **Port**](https://www.sonarsource.com/blog/sonarqube-and-port/), an internal developer platform that recently drank the agentic coolaid to become an agentic engineering platform, announced a partnership to bring Sonar metrics into Port. **Jellyfish**, a software engineering intelligence vendor, felt somewhat left out and [announced an integration](https://jellyfish.co/blog/sonarqube-cloud/) with Sonar.

* **Checkmarx** chose to use **Gartner** for their marketing and co-opted yet another acronym ACSA, standing for AI Code Security Assistance, in a [repositioning piece](https://checkmarx.com/blog/what-is-acsa-defining-ai-code-security-assistance-for-the-enterprise/). The underlying premise of ACSA seems reasonable however, with a prediction that “by 2027 80% of organizations will augment static code analysis with AI code security assistants”. 

* Continuing the recent trend of security vendors getting in on MCP, **Mend** has [released an MCP server](https://www.mend.io/blog/mend-io-expands-ai-native-appsec-to-ai-coding-tools/) that provides results from their SCA and SAST tools to AI Coding tools, including GitHub Copilot, while **Sonatype** [announced a dependency management MCP server](https://www.sonatype.com/blog/sonatype-dependency-management-mcp-server-now-live-in-oss-mcp-registry).

* **Vercel** [hired Talha Tariq as security leader.](https://vercel.com/blog/talha-tariq-joins-vercel-as-cto-security) Tariq comes from Hashicorp via IBM.

**Data Points & Other**

* **Sonatype** [released their Q3 2025 Open Source Malware Index](https://www.sonatype.com/blog/open-source-malware-index-q3-2025). They highlighted the ongoing attacks on the npm ecosystem, and used the post to draw attention once again to their recent npm post (see Mona Monitor [36](https://github.com/github/Business-Insights/discussions/45), [35](https://github.com/github/Business-Insights/discussions/44)). 

* **JetBrains** released two reports:
  * [The State of PHP 2025](https://blog.jetbrains.com/phpstorm/2025/10/state-of-php-2025/) which found that Laravel remains the top used PHP framework. PHP remains a leading language across multiple programming language rankings.
  * [The State of the Developer Ecosystem 2025](https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/) which, in what will be a shock to those sitting under a rock, but not to anyone else, found that AI proficiency is now considered a core skill by developers. They also found that AWS is the leading cloud, and Python and Typescript are the leading languages used by those surveyed. 

* **Jellyfish**, a software engineering intelligence vendor, [published data](https://jellyfish.co/blog/how-prevalent-is-autonomous-agent-use-heres-what-the-data-says/) from their customer base with their observations of autonomous agent usage. They currently see 44% of their user base experimenting with autonomous agents, and only 1.47% of PRs generated by autonomous agents.

* The [2025 State of AI report](https://www.stateof.ai/) from **air.capital** dropped. This is a huge report, grab a large cup of coffee before settling into reading it. 

* **AllStacks**, a software engineering intelligence vendor, produced the [Emoji Commit Index](https://www.allstacks.com/blog/the-emoji-commit-index), which correlates the use of emojis with the usage of AI. Generally humorous, and more correlation than anything else. 


/cc @kdaigle, @mariorod, @v-fedorov-gh, @ashashar,  @luisatlive,  @jaredpalmer, @martinwoodward , @jbjonesjr, @shanazcw, @KevinCrosby, @hollenberry, @Tala-K , @mekhatib22, @Muddaqureshi, @NickLiffen, @siminapasat, @aprilla, @maya-ross, @griffinashe @toddmanion @lukehoban, @emilyistoofunky
