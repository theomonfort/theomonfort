# The Mona Monitor: #39

- **Source**: [Discussion #48](https://github.com/github/Business-Insights/discussions/48)
- **Author**: @fintanr
- **Date**: 2025-11-05
- **Labels**: 

---

The Mona Monitor is here for you with the latest from our competitors, industry, and activity on GitHub. This issue contains updates on OpenAI, Google, AWS, Atlassian, Substrate, Qualcomm, Cursor, Windsurf/Cognition, Minimax, Anthropic, Corestory, Tabine, Mistral, JetBrains, Warp, Sourcegraph, Mintlify, Cloudbees, Snyk, Checkmarx, Endor Labs and Veracode. 

**Trending Repos** 
_Here is what is trending in our public and open source repos._

AI-related projects continue to have the most visits, contributions, and stars:
* [spec-kit by GitHub](https://github.com/github/spec-kit), +2K stars WoW
* [gemini-cli](https://github.com/google-gemini/gemini-cli), +800 stars WoW
* [Claude Code](https://www.github.com/anthropics/claude-code), +700 stars WoW
 * [codex by OpenAI](https://github.com/openai/codex), +650 stars WoW
* [ollama](https://github.com/ollama/ollama), +500 stars WoW
* [GitHub's CLI](https://github.com/cli/cli), GitHub’s official command line tool

 _Newly Emerged Trending Repos with the most visits and star growth in order:_

 * [AI-Trader](https://github.com/HKUDS/AI-Trader), AI-powered trading system, tops the list, +8.5K stars creation (13 days ago)
  * [DeepSeek-OCR by DeepSeek](https://github.com/deepseek-ai/DeepSeek-OCR), contexts optical compression , ~19.3K stars since creation (19 days ago)
  * [toon](https://github.com/toon-format/toon), token-oriented object notation: compact and human-readable serialization format designed for passing structured data to Large Language Models with significantly reduced token usage, ~8.9K stars since creation (14 days ago)
* [kimi-cli](https://github.com/MoonshotAI/kimi-cli), CLI Agent by Moonshot AI, ~2.3K stars since creation (21 days ago)
 
_Overall OSS trends, as of November 1st, 2025:_
  * The most OSS repo visits originated from the United States, India, and Germany, followed by Hong Kong, United Kingdom and Japan.
  * Countries with the most daily repo creations are India, United States, and Brazil, followed by   Indonesia, Vietnam and Japan.

**Macro Trends and Emerging (Relevant) Tech**
_There is a robust ecosystem around GitHub that impacts our positioning and traction. This section brings select developments and pertinent analysis of technologies in our sphere._ 

* AI continued to provide growth for hyperscalers: 
  * **Alphabet**, the holding company for **Google**, [announced Q3FY25 earnings](https://s206.q4cdn.com/479360582/files/doc_financials/2025/q3/2025q3-alphabet-earnings-release.pdf) of $102.3Bn (+15% YoY). Google Cloud accounted for $15.2Bn (+34% YoY). 
  * **Amazon** [announced Q3FY25 earnings](https://ir.aboutamazon.com/news-release/news-release-details/2025/Amazon-com-Announces-Third-Quarter-Results/) of $180.2Bn (+13% YoY). AWS accounted for $33Bn (+20% YoY). 
  * **Microsoft** announced Q1FY26 earnings of $77.7Bn (+18% YoY). Azure and other cloud services grew 40% YoY. 

* **Atlassian** announced Q1FY26 earnings of $1.43Bn. Atlassian highlighted accelerated migrations to cloud following their DC EOL announcement as a driver. Atlassian also announced that Tamar Yehoshua is joining as Chief Product and AI Officer. Yehoshua joins from **Glean**, having previously been CPO at **Slack**. Atlassian also announced that CFO Joe Binz will step down at the end of this fiscal year (June 2026). 

* **Substrate**, a startup focused on advanced lithography machines, [announced a $100M Series A.](https://www.reuters.com/world/asia-pacific/us-startup-substrate-announces-chipmaking-tool-that-it-says-will-rival-asml-2025-10-28/)  Substrate is targeting the same market as ASML. **Qualcomm**, a chip manufacturer, [announced new AI chips for inference](https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent). 
 
* **OpenAI** announced an agreement with **Microsoft** which allows them to create a formal for profit entity. Please [refer to the corporate blog post ](https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/)for more details. OpenAI also continued to expand their commitments to future cloud spend, with a [$33Bn commitment with **AWS**](https://openai.com/index/aws-and-openai-partnership/) and [$250Bn with **Microsoft**.](https://openai.com/index/next-chapter-of-microsoft-openai-partnership/) As of Nov 5th 2025 [OpenAI has committed $1.15 trillion](https://tomtunguz.com/openai-hardware-spending-2025-2035/) in spending to 2035.

**Competitor News**
_This section covers select updates and analysis from known and emerging competitors._  

**AI**

* **Cursor** announced Cursor 2.0 (full [changelog](https://cursor.com/changelog/2-0)) with a number of significant changes:
  * [Composer-1](https://cursor.com/blog/composer): A custom frontier model optimized for agentic workloads. Cursor has not disclosed the underlying model they used or if they trained from scratch. Both questions raise interesting commercial questions. Various commentators suggest Cursor used [QLM from z.ai](https://z.ai/blog/glm-4.5). The underlying research builds on IP acquired in the Supermaven acquisition (see Mona Monitor [16](https://github.com/github/Business-Insights/discussions/23)) and hiring of leading AI researchers (see Mona Monitor [23](https://github.com/github/Business-Insights/discussions/31)). Sasha Rush, who was among the AI researchers hired, was actively answering questions on [Hacker News.](https://news.ycombinator.com/item?id=45748725) 
  * [Cursor for Enterprise](https://cursor.com/blog/enterprise): A wide ranging release including improvements for [analytics](https://cursor.com/docs/account/teams/analytics#analytics) (including the ability to filter on active directory groups and an [analytics api](https://cursor.com/docs/account/teams/analytics-api), restricted to enterprise users), the GA of team rules (see Mona Monitor [37](https://github.com/github/Business-Insights/discussions/46)), and hooks to extend their agentic offering with custom scripts. 
  * [Cloud Agents](https://cursor.com/blog/cloud-agents): an environment for agentic execution in the cloud. 


* **Cognition**/**Windsurf**, feeling a bit overshadowed, also had multiple announcements:
  * [SWE-1.5](https://cognition.ai/blog/swe-1-5): a new model optimized for agentic workloads. As with Cursor, Cognition did not disclose the underlying model used. Commentators again pointed to QLM from [z.ai](http://z.ai/).   
  * [CodeMaps](https://cognition.ai/blog/codemaps): build as an AI annotated structured map of your code. This builds on the previous work with DeepWiki (see Mona Monitor [25](https://github.com/github/Business-Insights/discussions/33), [27](https://github.com/github/Business-Insights/discussions/35), [34](https://github.com/github/Business-Insights/discussions/43)). 

* **MiniMax**, a Chinese frontier model lab, [released MiniMax 2](https://www.minimax.io/news/minimax-m2), a model optimized for agentic workflows. 

* **Anthropic** [announced an extended partnership](https://www.anthropic.com/news/expanding-our-use-of-google-cloud-tpus-and-services) with **Google** to use more TPUs. It is not really clear what this is beyond a press release timed for Google's earnings as Anthropic already uses a lot of capacity on Google. 

* Google Cloud [announced](https://www.linkedin.com/feed/update/urn:li:activity:7386139312981073920/) Karthik Narain as their new **Chief** Product and Business Officer. Narain was previously CTO of **Accenture** and sat on the board of [**Avanade**](https://www.avanade.com/). In his new role he will lead product and engineering for all of Google Cloud. 

* **CoreStory**, a startup focused on modernizing legacy code bases, who recently renamed from CrowdBotics (see [Mona Monitor 36](https://github.com/github/Business-Insights/discussions/45)) [announced a $32M Series A](https://corestory.ai/post/corestory-raises-32-million-series-a-to-modernize-legacy-software-with-agentic-ai) led by Tribeca Ventures and NEA. On closer inspection Series A would seem to be Series C as prior to the rebrand Crowdbotics had raised $68M including a $40M Series B. NEA was the lead investor in the previous Series B. 

* **OpenAI** [acquired Software Applications Inc](https://openai.com/index/openai-acquires-software-applications-incorporated/), a company developing a natural language interface for mac desktops. 

* **Amazon** added [a feature to generate a “memory bank”](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-memory-bank.html) in Amazon Q. This is essentially a set of project rules and guidelines. 

* **Tabnine** joined the agentic era with the release of [Tabnine agents](https://www.tabnine.com/blog/introducing-the-tabnine-agentic-platform/)

* **Mistral** released [Mistral AI Studio](https://mistral.ai/news/ai-studio), which includes an agent runtime component.

* **JetBrains** [announced](https://blog.jetbrains.com/blog/2025/10/28/the-launch-of-developer-productivity-ai-arena-an-open-platform-for-benchmarking-ai-coding-agents/) the [Developer Productivity AI Arena](https://dpaia.dev/) (DPAIA), the aim to contribute the project to the **Linux Foundation**. JetBrains also published a more detailed [introduction post](https://blog.jetbrains.com/blog/2025/10/28/introducing-developer-productivity-ai-arena-an-open-platform-for-ai-coding-agents-benchmarks/). DPAIA states that it is an “open, multi-language, multi-framework, and multi-workflow benchmarking platform designed to measure the effectiveness of AI coding agents for real-world software engineering tasks”. OpenAI Codex currently leads. No results exist for Copilot CLI at this point. 

* **Warp**, an AI IDE vendor, announced [a set of pricing changes](https://www.warp.dev/blog/warp-new-pricing-flexibility-byok), moving to a consumption based plan with a BYOK option. 

* **Sourcegraph** [GA’ed Deep Search](https://sourcegraph.com/deep-search). 

* **Amp Code**, the replacement for Sourcegraph Cody, [announced functionality](https://ampcode.com/news/workspace-entitlements) for per user spending limits in their enterprise version. This comes hot on the heels of updating Amp Free to be ad based only vs using your data as training data (see Mona Monitor 38) so [enterprises](https://ampcode.com/news/workspace-entitlements) can use it.

* **Mintlify**, an AI documentation vendor, [announced a CLI](https://www.mintlify.com/blog/mintlify-for-terminal-agents) for use in agentic workflows.

**DevOps**

* **Atlassian** [announced a new billing view](https://www.atlassian.com/blog/bitbucket/manage-your-pipelines-usage-with-the-new-billing-panel) for Pipelines. 

* **Cloudbees** is [repositioning as a DevSecOps control plane](https://www.cloudbees.com/blog/why-every-enterprise-needs-a-devsecops-control-plane) using the Cloudbees Unify product. The level of control they will manage is yet to be determined.

**Security**

* **OpenAI** announced [Aardvark](https://openai.com/index/introducing-aardvark/), an agentic security researcher. This is similar to the recent announcement about CodeMender from **Google** Deepmind (see Mona Monitor [37](https://github.com/github/Business-Insights/discussions/46))
 
* **Snyk** continued to use MCP as a marketing mechanism, this time [announcing “support”](https://snyk.io/blog/snyk-factory-partner-integration/) for **Factory**, which is, in fact, [documentation](https://docs.snyk.io/integrations/snyk-studio-agentic-integrations/quickstart-guides-for-snyk-studio/factory-guide). Snyk also [announced Evo](https://snyk.io/blog/introducing-evo-by-snyk/), an agentic security orchestration layer. 

* **Checkmarx** continued on their Gartner inspired ACSA (see Mona Monitor 38) [marketing push](https://checkmarx.com/ai-llm-tools-in-application-security/the-productivity-security-paradox-of-ai-coding-assistants/), positioning improved developer velocity as an overall negative, which unsurprisingly Checkmarx can solve. **Endor Labs** adopted a similar position, [citing a research paper on AI generated code becoming less secure with every prompt](https://www.endorlabs.com/learn/ai-code-gets-less-secure-with-every-prompt). This reiteration of negative security positioning represents an opportunity for GitHub to position our recent and future security and code quality announcements as a mechanism to rapidly improve your security posture within a single platform.

**Data Points & Other**

* **Veracode** released [a report on The State of Application Security in Financial Services](https://www.veracode.com/blog/application-security-in-financial-services/), including data points blaming open source for the 82% of critical security debt.


/cc @kdaigle, @mariorod, @v-fedorov-gh, @ashashar,  @luisatlive,  @jaredpalmer, @martinwoodward , @jbjonesjr, @shanazcw, @KevinCrosby, @hollenberry, @Tala-K , @mekhatib22, @Muddaqureshi, @NickLiffen, @siminapasat, @aprilla, @maya-ross, @griffinashe @toddmanion @lukehoban, @emilyistoofunky, @LaurenBuchman 

---

## Comments

### @Jeffrey-Luszcz — 2025-11-05

The stat "Over 82% of critical security debt stems from flaws in open-source components." really rubs me the wrong way (though I get why they are pushing that narative) I'd love to burst open a "lines of codes" view of that stat, since my gut is basically telling me this is the [XKCD Density](https://xkcd.com/1138/) problem just pointed at who actually is writing code that's used by products. 82% of your security problems are occurring in basically the 82% of your product's code written by others if weighed by pound of code.

