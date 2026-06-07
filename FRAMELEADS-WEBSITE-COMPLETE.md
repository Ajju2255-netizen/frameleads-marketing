# Frameleads Website — Complete Documentation
### One consolidated reference: the ideal blueprint, the as-built record, and the full master structure

> Compiled: 2026-06-07 · Domain: `frameleads.com`
>
> This single document contains three parts:
> - **Part I — The Ideal Website Blueprint** — the generic, best-practice playbook for building any website end-to-end (SEO + AIO + GEO), excluding the app layer.
> - **Part II — Frameleads As-Built Record** — a narrative of what has actually been built for Frameleads.
> - **Part III — Frameleads Master Structure** — the full structured anatomy of every layer, with Done vs To-Do status and a critical path.
>
> **Status legend used throughout:** ✅ Done/Live · 🟡 Partial · ⏳ Next / In progress · 📋 Planned · ❌ Not started

---
---

# PART I — THE IDEAL WEBSITE BLUEPRINT

### An end-to-end playbook for architecting, building, and optimizing any website for humans, search engines, and AI answer engines

> This document is the master reference for how a website is conceived, structured, written, linked, optimized, and grown. It deliberately excludes application/product engineering and focuses on the **website, content, discovery, and authority layer** — the part that makes a site findable, trustworthy, rankable, and citable by both classic search and generative AI.

---

## Table of Contents

1. [Foundation & Strategy](#1-foundation--strategy)
2. [Audience, Intent & Keyword Research](#2-audience-intent--keyword-research)
3. [Information Architecture & Site Structure](#3-information-architecture--site-structure)
4. [URL Architecture & Taxonomy](#4-url-architecture--taxonomy)
5. [Content Types & Their Roles](#5-content-types--their-roles)
6. [Topic Clusters & The Pillar Model](#6-topic-clusters--the-pillar-model)
7. [Content Strategy, Briefs & Production](#7-content-strategy-briefs--production)
8. [E-E-A-T, Authority & Trust Signals](#8-e-e-a-t-authority--trust-signals)
9. [Internal Linking Architecture](#9-internal-linking-architecture)
10. [On-Page SEO](#10-on-page-seo)
11. [Structured Data, Schema & Entity SEO](#11-structured-data-schema--entity-seo)
12. [Technical SEO & Crawl Infrastructure](#12-technical-seo--crawl-infrastructure)
13. [Performance, Core Web Vitals & UX Signals](#13-performance-core-web-vitals--ux-signals)
14. [LLMs, AIO, AEO & GEO — The AI Discovery Layer](#14-llms-aio-aeo--geo--the-ai-discovery-layer)
15. [Off-Page Authority, Digital PR & Brand Signals](#15-off-page-authority-digital-pr--brand-signals)
16. [Conversion, CRO & User Journeys](#16-conversion-cro--user-journeys)
17. [Analytics, Measurement & Attribution](#17-analytics-measurement--attribution)
18. [Governance, Maintenance & Content Refresh](#18-governance-maintenance--content-refresh)
19. [The Build Sequence — Putting It All Together](#19-the-build-sequence--putting-it-all-together)
20. [Master Launch & Optimization Checklist](#20-master-launch--optimization-checklist)

---

## 1. Foundation & Strategy

Everything downstream inherits from this layer. Skip it and you build a beautiful site nobody finds or trusts.

### 1.1 Define the business objective
Before a single page exists, answer:
- **What is the website's job?** (Generate leads, sell products, build authority, capture email, drive demos, inform, monetize via ads/affiliate.)
- **What is the primary conversion event?** Everything on the site should ladder up to it.
- **What is the business model?** This dictates page priorities (e.g., marketplace = supply + demand pages; SaaS = feature + use-case + comparison pages; media = volume + ad density).

### 1.2 Set measurable goals (KPIs)
Translate the objective into numbers with timeframes:
- **North-star metric** (e.g., qualified conversions/month).
- **Leading indicators**: organic sessions, indexed pages, keyword rankings, share of voice, AI citations, branded search volume, email signups.
- **Lagging indicators**: revenue, CAC, LTV, conversion rate.
- Set 30/60/90-day and 6/12-month targets. SEO and content compound — plan for 6–12 month horizons, not weeks.

### 1.3 Positioning & messaging
- **Unique value proposition (UVP):** one sentence on why this site/brand vs. alternatives.
- **Messaging hierarchy:** primary message → supporting pillars → proof points.
- **Brand voice & tone guide:** vocabulary, reading level, formality, point of view (we/you), do's and don'ts. This must be codified so 50 articles read like one author.
- **Entity definition:** decide exactly *what your brand is* as an entity (a company, a person, a product category) — this matters enormously for knowledge graphs and AI (see §11 and §14).

### 1.4 Competitive & market analysis
- Identify 5–10 direct competitors and 5–10 *search competitors* (whoever ranks for your target queries — often not your business competitors).
- Map their: site structure, content depth, top pages (by traffic), backlink profile, content cadence, schema usage, and AI visibility.
- Find the **gaps**: topics they underserve, formats they ignore, intents they miss, questions they don't answer. Gaps are your wedge.

### 1.5 Channel strategy
Decide how the site earns traffic and how each channel reinforces the others:
- **Organic search (SEO)** — the compounding core.
- **AI/Answer engines (GEO/AEO)** — the emerging core (see §14).
- **Direct & branded** — fueled by brand-building.
- **Referral & digital PR** — fuels authority.
- **Social, email, paid** — amplification and retention.

> `★ Insight ─────────────────────────────────────`
> A website is not "pages on a server" — it's a **system of intent satisfaction**. Every strategic decision is really answering: *for which person, in which moment of need, does this page exist, and what should happen next?* Hold that lens through every section below.
> `─────────────────────────────────────────────────`

---

## 2. Audience, Intent & Keyword Research

### 2.1 Define the audience
- **Ideal Customer Profile (ICP):** firmographic/demographic definition of who you want.
- **Personas:** 2–4 archetypes with goals, pains, objections, vocabulary, and the questions they ask at each stage.
- **Jobs To Be Done (JTBD):** the functional + emotional + social job each visitor "hires" your content to do.

### 2.2 Map the funnel / journey stages
Classic intent layers and the content each demands:

| Stage | Intent | User question | Content type |
|---|---|---|---|
| **Awareness (TOFU)** | Informational | "What is X? Why does it matter?" | Guides, explainers, glossary, blog |
| **Consideration (MOFU)** | Investigational | "How do I solve X? What are options?" | Comparisons, how-tos, checklists, calculators |
| **Decision (BOFU)** | Commercial / Transactional | "Which is best? Is this right for me?" | Landing pages, case studies, pricing, reviews, demos |
| **Retention/Advocacy** | Navigational / Support | "How do I use it? Get more value?" | Docs, help center, onboarding, community |

### 2.3 Keyword & topic research (the modern way)
Don't just chase keywords — research **topics, entities, and questions**.

**Process:**
1. **Seed list** — brainstorm core topics from your offering and personas.
2. **Expand** — use keyword tools (Ahrefs, Semrush, GSC, Google Keyword Planner) to pull related queries, volumes, difficulty, and SERP features.
3. **Mine real questions** — People Also Ask, AlsoAsked, Reddit/Quora/forums, sales call transcripts, support tickets, on-site search logs, AnswerThePublic.
4. **Cluster by intent and topic**, not by individual keyword. Each cluster = potential page or page group.
5. **Score & prioritize** each cluster by: business value × search demand × ranking feasibility (difficulty vs. your authority) × strategic fit.

**Key dimensions to capture per topic:**
- Search volume & trend (seasonality, rising/declining).
- Keyword difficulty / competition.
- **Search intent** (informational/commercial/transactional/navigational) — match content type to intent or you won't rank.
- **SERP features present** (featured snippet, PAA, video, image pack, local pack, AI Overview) — these dictate format.
- **Entities** involved (people, brands, products, concepts) — for schema and GEO.

### 2.4 Intent matching (the non-negotiable rule)
Google ranks pages that match the *dominant intent* of a query. Before writing, **read the current SERP**: if the top 10 are listicles, a single product page won't rank. Build the format the SERP rewards, then make it better.

### 2.5 Keyword-to-URL mapping
Produce a master spreadsheet:
`Primary keyword | Secondary keywords | Intent | Funnel stage | Target URL | Content type | Cluster | Priority | Status`

This is your **content map** and prevents keyword cannibalization (two pages competing for the same query).

---

## 3. Information Architecture & Site Structure

Information Architecture (IA) is the skeleton. Good IA helps users find things, helps crawlers discover and understand relationships, and distributes authority efficiently.

### 3.1 Principles
- **Flat & shallow:** every important page reachable within **3 clicks** of the homepage. Deep pages get crawled less and rank worse.
- **Logical hierarchy:** Home → Category → Subcategory → Page. Each level is a parent that aggregates and links down to children.
- **Topical grouping:** group by topic/theme, not by internal org chart. Users and crawlers think in topics.
- **Scalability:** structure should accommodate 10× the content without redesign.
- **Crawl-efficient:** the structure itself is the primary discovery mechanism for search and AI crawlers.

### 3.2 Core page-type layers
A typical site has these structural layers:

1. **Homepage** — entity hub; communicates what the site is, links to top categories and money pages.
2. **Pillar / hub pages** — broad topic authority pages (see §6).
3. **Category / collection pages** — aggregate related content or products.
4. **Detail pages** — individual articles, products, services, profiles.
5. **Conversion pages** — landing pages, signup, contact, pricing.
6. **Trust pages** — About, Team, Editorial Policy, Methodology, Contact, Privacy, Terms.
7. **Utility pages** — search, sitemap (HTML), 404, login.

### 3.3 Navigation design
- **Primary nav (header):** 5–7 top items max; reflects top categories/pillars. Every link here passes strong authority — spend it on what matters.
- **Footer nav:** secondary links, trust pages, key categories, sitemap link. Footer links are site-wide and help crawl + authority distribution.
- **Breadcrumbs:** show hierarchy, aid users + crawlers, and earn breadcrumb rich results (see §11). Mark up with `BreadcrumbList` schema.
- **Contextual/in-content nav:** related links, "next steps," sidebars.
- **Faceted navigation** (for large catalogs): powerful for users but a crawl-budget hazard — control with `noindex`, canonicalization, and `robots` rules.

### 3.4 The "topical authority" mindset
Search engines and LLMs reward sites that demonstrate **comprehensive coverage** of a topic. Don't publish one article on a subject — own the *entire topic space*: every subtopic, question, comparison, and edge case, interlinked. Depth + breadth + interlinking = topical authority = rankings + citations.

---

## 4. URL Architecture & Taxonomy

### 4.1 URL best practices
- **Readable & descriptive:** `/guides/email-marketing` not `/p?id=8842`.
- **Lowercase, hyphen-separated**, no spaces/underscores/special chars.
- **Short & keyword-relevant** — include the primary keyword, drop stop words where natural.
- **Logical, consistent structure** that mirrors IA: `/category/subcategory/page`.
- **Stable & permanent** — URLs are addresses; changing them breaks links and rankings. Decide structure carefully upfront.
- **Avoid:** dates in URLs (ages content), parameters where avoidable, excessive depth, keyword stuffing.

### 4.2 Subfolders vs. subdomains
- Prefer **subfolders** (`site.com/blog`) over **subdomains** (`blog.site.com`) — subfolders consolidate authority to one domain. Use subdomains only when there's a strong technical/organizational reason.

### 4.3 Taxonomy design
- **Categories:** broad buckets (mutually exclusive, MECE where possible).
- **Tags:** cross-cutting attributes. Use sparingly — tag pages are thin-content traps. Only index tag pages that aggregate meaningful, unique value.
- **Custom taxonomies** for specialized sites (e.g., by industry, by use-case, by location). Each taxonomy term ideally becomes a useful, indexable landing page with unique content — not an empty list.

### 4.4 Internationalization (if applicable)
- Use `hreflang` to signal language/region variants.
- Choose a structure: subfolders (`/en/`, `/de/`), subdomains, or ccTLDs.
- Keep parallel structures consistent; avoid auto-translated thin content.

---

## 5. Content Types & Their Roles

Different jobs need different formats. A mature site is a **portfolio** of content types, each serving an intent and funnel stage. Build a reusable **template** for each type so production scales.

### 5.1 Informational / authority content
- **Pillar pages** — comprehensive, long-form guides to a broad topic; hub of a cluster.
- **Cluster articles / supporting posts** — deep dives on subtopics, linking back to the pillar.
- **How-to guides & tutorials** — step-by-step, often eligible for HowTo treatment and AI extraction.
- **Listicles** — "X best/ways/tools" — high CTR, snippet-friendly, scannable.
- **Ultimate guides / resources** — link-magnet, evergreen reference.
- **Glossary / definitions** — one term per page; excellent for AI/answer extraction and entity coverage.
- **FAQ pages / FAQ blocks** — direct question→answer; strong for voice, snippets, and AI.
- **Explainers ("What is X")** — definitional, entity-establishing.
- **Statistics / data / original research pages** — citation magnets; AI engines love quotable stats (see §14).

### 5.2 Commercial / decision content
- **Comparison pages** ("X vs Y") — high commercial intent, capture decision-stage traffic.
- **Alternatives pages** ("Best X alternatives") — capture competitor demand.
- **"Best [category]" / roundup pages** — commercial listicles.
- **Reviews** — product/service evaluations; pair with `Review`/`AggregateRating` schema.
- **Case studies** — proof, E-E-A-T, BOFU conversion.
- **Use-case / solution pages** — "X for [industry/role/job]."
- **Landing pages** — single-intent conversion pages for campaigns/offers.
- **Pricing pages** — high-intent, must be transparent.

### 5.3 Product / service / catalog content
- **Category pages** — aggregate + introduce a group; should have unique intro copy, not just a grid.
- **Product/service detail pages** — full descriptions, specs, media, schema, reviews, FAQs.
- **Local pages** — location-specific pages for multi-location/geo targeting (pair with `LocalBusiness` schema).

### 5.4 Trust & utility content
- **About / Team / Author pages** — establish identity, expertise, real people (critical for E-E-A-T and AI trust).
- **Editorial policy / methodology / "how we test"** — trust signal Google explicitly values.
- **Contact page** — real NAP (name, address, phone) signals legitimacy.
- **Legal:** Privacy, Terms, Disclosure (affiliate/sponsored).

### 5.5 Interactive & engagement content
- **Calculators, tools, quizzes, configurators** — link magnets, long dwell time, conversion drivers, and *highly* shareable/citable.
- **Templates, checklists, downloadables** — lead magnets and link bait.
- **Videos & embedded media** — engagement + video SERP features; transcribe for crawlability.

> `★ Insight ─────────────────────────────────────`
> Each content type maps to a **SERP feature and an intent**. Comparison pages target commercial SERPs with tables; glossaries target featured snippets and AI definitions; stats pages target citations. Choose the type *because* of the result you want to win, not by habit.
> `─────────────────────────────────────────────────`

---

## 6. Topic Clusters & The Pillar Model

This is the central content-architecture model that drives both topical authority and internal linking.

### 6.1 The model
- **Pillar page:** a broad, comprehensive page targeting a high-level topic and its head keyword (e.g., "Email Marketing").
- **Cluster pages:** many narrower pages targeting subtopics and long-tail queries (e.g., "email subject lines," "email deliverability," "drip campaigns").
- **Linking:** every cluster page links **up** to the pillar; the pillar links **down** to each cluster; clusters link **sideways** to relevant siblings.

```
                    ┌─────────────────┐
                    │   PILLAR PAGE   │  (broad topic, head term)
                    │  "Topic Hub"    │
                    └───────┬─────────┘
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
      ┌─────────┐     ┌─────────┐     ┌─────────┐
      │ Cluster │◄───►│ Cluster │◄───►│ Cluster │  (subtopics, long-tail)
      │  Page   │     │  Page   │     │  Page   │
      └─────────┘     └─────────┘     └─────────┘
        each links back up to the pillar ▲
```

### 6.2 Why it works
- **Topical authority:** comprehensive interlinked coverage signals expertise to search and AI.
- **Authority flow:** clusters funnel link equity to the pillar (helping it rank for competitive head terms); the pillar distributes discovery to clusters.
- **Intent coverage:** captures the full journey from broad to specific.
- **Crawl efficiency:** tight internal linking helps discovery and indexation.

### 6.3 Building a cluster
1. Pick a pillar topic with business value and breadth.
2. Research every subtopic, question, and long-tail variant (§2).
3. Map each to a cluster page (one intent per page — avoid cannibalization).
4. Build the pillar as the canonical, comprehensive hub.
5. Interlink rigorously with descriptive anchors (§9).
6. Expand the cluster over time; refresh the pillar as the cluster grows.

### 6.4 Multiple clusters → topical maps
A mature site is a network of clusters covering an entire domain of expertise. Build a **topical map**: the full universe of topics, subtopics, and their relationships you intend to own. This map drives the content calendar and the internal-link graph.

---

## 7. Content Strategy, Briefs & Production

### 7.1 Editorial strategy
- **Content pillars/themes** aligned to topical map and business goals.
- **Cadence:** sustainable publishing rhythm > sporadic bursts. Consistency signals freshness.
- **Editorial calendar:** what, who, when, target keyword/intent, cluster, content type, status.
- **Prioritization:** sequence by business value and "quick wins" (low difficulty, high intent) first to build momentum, then tackle competitive head terms once authority grows.

### 7.2 The content brief (the quality lever)
Never write blind. Every page gets a brief:
- Primary keyword + secondary keywords + semantic/entity terms to include.
- Search intent + funnel stage + target persona.
- SERP analysis: what's ranking, what format, what gaps to exploit.
- Recommended title, H1, and heading outline (H2/H3 structure).
- Target word count / depth (match or exceed top results' *value*, not just length).
- Questions to answer (from PAA, forums, etc.).
- Entities and facts to cover.
- Internal links to include (which pillars/clusters to link to/from).
- External authoritative sources to cite.
- Required media (images, diagrams, video, tables).
- CTA / next step.
- Schema type to apply.

### 7.3 Writing principles (for humans *and* machines)
- **Lead with the answer** (inverted pyramid). Give the direct answer first, then elaborate — wins snippets and AI extraction.
- **Structure with clear headings** that map to questions and subtopics. Headings are scannable for users and parseable for machines.
- **Short paragraphs, lists, tables, bolded key terms** — scannable and extractable.
- **One idea per section.** Self-contained, quotable chunks (critical for GEO — see §14).
- **Semantic richness:** cover the entities, synonyms, and related concepts the topic implies (LSI/NLP relevance), not keyword repetition.
- **Originality:** add unique data, examples, frameworks, opinions, or experience. AI-generated sameness doesn't rank or get cited.
- **Accuracy & citation:** back claims with data and link sources. Both Google and LLMs reward verifiable, well-sourced content.
- **Match reading level** to audience; avoid fluff and filler ("In today's fast-paced world…").

### 7.4 Media & assets
- Original images, custom diagrams, charts, screenshots > generic stock.
- Descriptive `alt` text (accessibility + image SEO + AI understanding).
- Compress and serve next-gen formats (WebP/AVIF).
- Add data tables and visualizations — highly citable and snippet-eligible.
- Transcribe audio/video for crawlable text.

### 7.5 Content production workflow
`Research → Brief → Draft → Edit (SME + copy) → SEO/schema check → Internal-link insertion → Publish → Index request → Promote → Monitor → Refresh`

Define ownership for each stage. Quality control is where most content programs fail.

---

## 8. E-E-A-T, Authority & Trust Signals

**E-E-A-T** = Experience, Expertise, Authoritativeness, Trustworthiness. Google's quality framework — and a strong proxy for what AI engines trust and cite. Trust is the most important component.

### 8.1 Experience
- Demonstrate **first-hand experience**: original photos, real testing, "I used this," case data, screenshots.
- Especially vital post-"helpful content" era and for YMYL (Your Money or Your Life) topics.

### 8.2 Expertise
- **Real, credentialed authors.** Every content page should have a byline.
- **Author pages/bios** with credentials, experience, links to profiles, and a consistent entity (`Person` schema, `sameAs` to LinkedIn/ORCID/social).
- SME-reviewed or SME-written content for technical/sensitive topics.

### 8.3 Authoritativeness
- Earned through **backlinks, brand mentions, citations**, and being referenced by other authorities (§15).
- Topical authority via comprehensive cluster coverage (§6).
- Recognition: being cited, quoted, listed, and linked across the web.

### 8.4 Trustworthiness
- Accurate, up-to-date, well-sourced content.
- Transparent: clear about who you are, how you make money (disclosures), how you test (methodology pages).
- Secure (HTTPS), accessible contact info, real NAP, privacy/terms pages.
- Reviews and reputation (on-site and off-site).
- No deceptive patterns, no aggressive ads over content.

### 8.5 Building the trust infrastructure
- About, Team, Author, Editorial Policy, Methodology, Contact pages — all real, all linked, all marked up with schema.
- Consistent **brand entity** across the web (same name, logo, descriptions) so search and AI can resolve "who you are."
- Third-party validation: reviews, press, awards, certifications, partnerships — display and link them.

---

## 9. Internal Linking Architecture

Internal links are how authority flows, how crawlers discover pages, how topical relationships are signaled, and how users navigate. This is one of the highest-leverage, most-underused levers.

### 9.1 What internal links do
- **Distribute PageRank/authority** through the site.
- **Aid discovery & indexation** — orphan pages (no internal links) often go unindexed.
- **Signal topical relationships & importance** via anchor text and link patterns.
- **Guide users** to next steps and related content (engagement + conversion).
- **Define site hierarchy** (which pages are "important" by how much they're linked).

### 9.2 Link architecture patterns
- **Hub-and-spoke (pillar/cluster):** structural backbone (§6).
- **Contextual in-content links:** the most valuable — natural links within body copy to relevant pages.
- **Hierarchical links:** nav, breadcrumbs, category↔page.
- **Related/recommended modules:** "related posts," "next read," "you may also like."
- **Site-wide links:** header/footer (use judiciously — they're everywhere, so spend on what matters).

### 9.3 Anchor text strategy
- Use **descriptive, keyword-relevant anchors** that tell users and crawlers what's on the other side. "Learn about email deliverability" > "click here."
- **Vary anchors naturally**; don't exact-match every link (looks manipulative and dilutes signal).
- Anchor text is a ranking signal for the *target* page — link to important pages with their target keywords in the anchor.

### 9.4 Rules & best practices
- **Link deep**, not just to home/contact. Push authority to money and pillar pages.
- **Every new page** should receive links from existing relevant pages (don't let it be an orphan) and link out to relevant existing pages.
- **Reasonable link count** per page — enough to be useful, not a link dump.
- **Fix broken internal links** and redirect chains.
- **Keep important pages shallow** (few clicks from home).
- **Link from high-authority pages** (homepage, popular posts) to pages you want to boost.
- Audit the internal-link graph periodically; identify orphans, over-linked, and under-linked pages.

### 9.5 The internal link as a topical signal
The *pattern* of internal links defines your topical structure to search engines and AI. A page linked from many topically-related pages with consistent anchors is understood to be authoritative on that topic. **Engineer this graph deliberately** — it's not an afterthought.

> `★ Insight ─────────────────────────────────────`
> Think of internal linking as **plumbing for authority and meaning**. New pages have no authority of their own; they inherit it through links from established pages. A brilliant article with zero internal links is a room with no doors — crawlers may never find it, and it can never rank.
> `─────────────────────────────────────────────────`

---

## 10. On-Page SEO

Optimizing the individual page so search engines (and AI) understand and rank it.

### 10.1 Title tag
- Unique per page; include primary keyword (front-load it); ~50–60 chars to avoid truncation.
- Compelling — it's your SERP headline; write for CTR, not just keywords.
- Brand name often appended (`Primary Keyword — Brand`).

### 10.2 Meta description
- ~150–160 chars; not a ranking factor directly but drives **CTR**.
- Summarize value + include keyword (gets bolded) + soft CTA.
- Unique per page; if left blank, Google generates one from the page.

### 10.3 Heading hierarchy
- **One H1** per page = the main topic (often matches/echoes the title).
- **H2/H3** structure the content logically and include secondary keywords/questions.
- Headings should be a readable outline of the page — for users, crawlers, and AI extraction.

### 10.4 Content optimization
- Primary keyword in: title, H1, first 100 words, URL, naturally throughout.
- Secondary & semantic terms woven in (topical depth, not stuffing).
- Answer the query directly and completely (intent satisfaction).
- Use lists, tables, FAQs, and structured blocks (snippet + AI bait).

### 10.5 Media on-page SEO
- Descriptive file names (`email-open-rate-chart.webp`).
- `alt` text describing the image.
- Captions where helpful (high-read areas).
- Lazy-load below-the-fold; specify dimensions to avoid layout shift.

### 10.6 Links on-page
- Relevant internal links with good anchors (§9).
- External links to authoritative sources (signals research quality; doesn't "leak" rankings meaningfully).
- Descriptive anchor text everywhere.

### 10.7 Snippet & SERP-feature optimization
- **Featured snippets:** provide a concise (~40–60 word) direct answer right under a question heading; use lists/tables for list/table snippets.
- **People Also Ask:** include Q&A sections targeting related questions.
- **Rich results:** apply the right schema (§11).

### 10.8 Freshness & metadata
- Show published + updated dates.
- Keep content current; update and re-promote (freshness is a signal for many queries).

---

## 11. Structured Data, Schema & Entity SEO

Structured data (Schema.org, usually JSON-LD) translates your content into a machine-readable format. It powers rich results, helps search engines understand entities, and increasingly feeds knowledge graphs and AI engines.

### 11.1 Why schema matters more than ever
- **Rich results** (stars, FAQs, breadcrumbs, prices, events) → higher CTR and SERP real estate.
- **Entity understanding** — connects your content to known entities in the Knowledge Graph.
- **AI/LLM consumption** — structured, explicit data is easier for AI engines to parse, trust, and cite (see §14). Schema is a bridge between your content and machine comprehension.

### 11.2 Core schema types to implement
- **Organization / LocalBusiness** — your brand entity (name, logo, contact, `sameAs` social profiles). Foundational.
- **WebSite** + **SearchAction** (sitelinks search box).
- **BreadcrumbList** — breadcrumb rich results + hierarchy signal.
- **Article / BlogPosting / NewsArticle** — for content, with author, datePublished, dateModified, publisher.
- **Person** — for authors (with credentials, `sameAs`).
- **FAQPage** — Q&A blocks.
- **HowTo** — step-by-step guides.
- **Product** + **Offer** + **AggregateRating / Review** — for products.
- **Service** — for service pages.
- **VideoObject**, **ImageObject** — media.
- **Event**, **Recipe**, **Course**, **JobPosting**, etc. — as relevant.

### 11.3 Entity SEO & the knowledge graph
- Modern search is **entity-based**, not just keyword-based. Engines map your content to *things* (people, places, concepts, brands) and their relationships.
- **Establish your brand as an entity:** consistent NAP, Organization schema, `sameAs` links to authoritative profiles (Wikipedia/Wikidata, LinkedIn, Crunchbase, social), and a Google Business Profile if relevant.
- **Use `sameAs`** to connect your entities to their canonical references.
- **Cover entities comprehensively** in content — mention and define the related people, concepts, and things a topic implies. This builds semantic relevance.
- Aim for a **Knowledge Panel** for your brand (achieved via entity consistency + notability + structured data + authoritative references).

### 11.4 Implementation & validation
- Prefer **JSON-LD** (Google-recommended) in the `<head>` or body.
- Validate with the Rich Results Test and Schema Markup Validator.
- Keep schema accurate and in sync with visible content (mismatches = penalties/ignored markup).
- Nest and connect entities (`@id` references) to build a rich entity graph on each page.

---

## 12. Technical SEO & Crawl Infrastructure

If crawlers can't access, render, and index your pages, nothing else matters. (Engineering implementation is out of scope here; this is the *requirements and strategy* layer.)

### 12.1 Crawlability
- **robots.txt** — control what crawlers can/can't access; don't accidentally block important content or assets (CSS/JS). Reference your sitemap here.
- **XML sitemap(s)** — list canonical, indexable URLs; submit to Search Console; keep updated and segmented for large sites (e.g., by type). Include `lastmod`.
- **Crawl budget** (large sites) — don't waste it on low-value, duplicate, or parameter URLs; prune/`noindex`/block them.
- **Internal linking** — primary discovery mechanism (§9); avoid orphan pages.
- **Logical, shallow architecture** (§3) for efficient crawling.

### 12.2 Indexability
- **`noindex`** pages that shouldn't be in the index (thin tag pages, internal search results, duplicate/utility pages, staging).
- **Canonical tags** (`rel=canonical`) to consolidate duplicates and signal the preferred URL. Self-reference canonicals on canonical pages.
- **Avoid duplicate content** (parameters, http/https, www/non-www, trailing slashes, pagination) — pick one version, redirect/canonicalize the rest.
- **Pagination** handled cleanly (self-canonical paginated pages, crawlable links).
- **Status codes:** 200 for live, 301 for permanent redirects, 404 for gone, avoid redirect chains/loops, fix soft 404s.

### 12.3 Renderability (JavaScript)
- Ensure content is accessible to crawlers — if JS-rendered, use SSR/SSG/dynamic rendering so crawlers and AI bots see real content, not an empty shell.
- Don't hide important content behind interactions crawlers won't trigger.
- Critical content and links should be in the initial HTML where possible — **especially important for AI crawlers, many of which don't execute JavaScript**.

### 12.4 Site-wide technical hygiene
- **HTTPS** everywhere (security + ranking signal).
- **Mobile-first** — Google indexes the mobile version; it must have parity with desktop.
- **Canonical domain** enforced (one of www/non-www; one protocol).
- **Clean redirects** for any URL changes; maintain a redirect map.
- **XML + HTML sitemaps**; **breadcrumbs**; **structured data** validated.
- **Hreflang** for international (§4.4).
- **Log-file analysis** (large sites) to see how bots actually crawl.

### 12.5 Monitoring
- **Google Search Console** (and Bing Webmaster Tools): coverage/indexing reports, enhancements, performance, manual actions.
- Crawl with Screaming Frog / Sitebulb periodically: broken links, redirects, duplicate titles/metas, orphan pages, depth, schema errors.
- Track indexation ratio (indexed ÷ submitted) and investigate gaps.

---

## 13. Performance, Core Web Vitals & UX Signals

Speed and experience affect rankings, conversions, and crawl efficiency.

### 13.1 Core Web Vitals
- **LCP (Largest Contentful Paint)** — loading; target < 2.5s. Optimize images, server response, render-blocking resources.
- **INP (Interaction to Next Paint)** — responsiveness; target < 200ms. Minimize/defer JS, break up long tasks.
- **CLS (Cumulative Layout Shift)** — visual stability; target < 0.1. Set dimensions on media, reserve space for ads/embeds.

### 13.2 Performance levers (requirements)
- Optimize & lazy-load images (WebP/AVIF, responsive sizes).
- Minify and defer non-critical CSS/JS; remove unused code.
- Caching (browser + server) and a CDN for global delivery.
- Fast hosting / good TTFB.
- Reduce third-party scripts (they're often the biggest drag).
- Preload critical assets; prioritize above-the-fold rendering.

### 13.3 UX & engagement signals
- Mobile-friendly, responsive, tap-friendly.
- Readable typography, good contrast, clear hierarchy.
- Accessible (WCAG): semantic HTML, alt text, keyboard nav, ARIA where needed — accessibility overlaps heavily with crawlability and AI parsing.
- Intuitive navigation and search.
- Minimal intrusive interstitials/ads over content.
- Clear CTAs and logical flow.
- Engagement metrics (dwell time, pages/session, low pogo-sticking) correlate with quality and are watched by engines.

---

## 14. LLMs, AIO, AEO & GEO — The AI Discovery Layer

The discovery landscape now includes **AI answer engines** (ChatGPT, Google AI Overviews / Gemini, Perplexity, Copilot, Claude, etc.). People increasingly get answers *without clicking* — so the goal expands from "rank" to "**be the cited source the AI uses**." This layer is now a first-class pillar of website building.

### 14.1 The vocabulary
- **AIO (AI Optimization / AI Overviews):** optimizing to appear in and influence AI-generated answers, including Google's AI Overviews.
- **AEO (Answer Engine Optimization):** optimizing content to be *the answer* — direct, extractable responses to questions.
- **GEO (Generative Engine Optimization):** optimizing for generative AI engines to **cite, reference, and recommend** your content/brand in their outputs.
- These overlap heavily. Practically: **make your content the easiest, most trustworthy thing for an AI to extract, quote, and attribute.**

### 14.2 How AI engines find and use content
- They draw on: their training data, **live web retrieval (RAG)**, search indexes, and structured/authoritative sources.
- They favor content that is: **clearly structured, factual, well-sourced, recent, authoritative, and easily chunked** into self-contained answers.
- They **cite sources** — being cited drives visibility, referral traffic, and brand authority even with zero ranking.
- Brand **mentions across the web** (not just links) shape what AI "knows" and recommends about you.

### 14.3 `llms.txt` and AI crawler control
- **`llms.txt`** — an emerging standard: a markdown file at your root (`/llms.txt`) that gives LLMs a curated, structured map of your most important content and context, in clean machine-readable form. A fuller `llms-full.txt` can include expanded content. It's to AI what `sitemap.xml` is to search — a way to guide what AI ingests and how it understands your site.
- **AI crawler directives in robots.txt** — decide whether to allow/disallow specific AI bots (e.g., `GPTBot`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `CCBot`). Allowing them enables citation/visibility; disallowing protects content. This is a strategic choice.
- Keep critical content in **server-rendered HTML** — many AI crawlers don't run JavaScript (§12.3).

### 14.4 Content tactics for AEO/GEO (how to get cited)
- **Answer-first / question-led structure:** use the actual question as a heading and give a direct, concise, standalone answer immediately beneath it. AI lifts these.
- **Self-contained, quotable chunks:** write sections that make sense out of context. AI extracts passages, not whole pages.
- **Definitive, factual statements** with clear subject-predicate clarity. Avoid burying the answer in fluff.
- **Cite statistics, data, and original research** — quantitative, sourced facts are disproportionately cited by generative engines. Original data makes *you* the citation.
- **Include quotes, expert opinions, and named sources** — AI favors content with authoritative attribution.
- **Use clear formatting:** headings, bullet lists, numbered steps, tables, FAQs, definitions, TL;DR/summary blocks. Structure = extractability.
- **Add summaries/TL;DRs** at the top of long content — directly consumable by AI.
- **Comprehensive topical coverage** — answer the question *and* the follow-ups; AI rewards completeness.
- **Freshness** — keep facts and dates current; AI engines prefer recent, accurate info.
- **FAQ and Q&A blocks** — natural-language question/answer pairs map directly to how people prompt AI.

### 14.5 Structured data & entities for AI
- Schema (§11) makes facts explicit and machine-trustable — helps AI parse and attribute correctly.
- A strong, consistent **brand entity** (Organization schema, `sameAs`, knowledge-graph presence) helps AI understand and recommend you accurately.
- Define your entities and their relationships clearly; AI builds and queries entity graphs.

### 14.6 Off-site presence for GEO (you can't only optimize your own site)
AI engines synthesize from across the web. To be recommended:
- **Earn brand mentions** on authoritative, high-trust sites (news, industry pubs, Wikipedia/Wikidata where warranted).
- **Be present where AI sources from:** Reddit, Quora, YouTube, G2/review sites, industry directories, Wikipedia — AI engines lean heavily on these.
- **Get listed in "best of" / comparison content** — AI often surfaces these for recommendation queries.
- **Consistent NAP and brand description** everywhere — coherent signals = confident AI recommendations.
- **Digital PR & thought leadership** — original studies, data, and expert commentary get cited and re-cited.

### 14.7 Measuring AI visibility
- Track **referral traffic from AI engines** (ChatGPT, Perplexity, Gemini, etc.) in analytics.
- Monitor **brand mentions and citations** in AI answers (manual checks + emerging AI-visibility tools).
- Track **share of voice** in AI Overviews / answer boxes for target queries.
- Watch **branded search volume** — AI exposure drives brand searches.

> `★ Insight ─────────────────────────────────────`
> Classic SEO and GEO are **not** separate disciplines — GEO is largely "SEO done so well that machines can extract it." The same things win both: authoritative, well-structured, factual, entity-rich, well-sourced, fast, crawlable content. GEO simply raises the premium on **structure, citability, and off-site brand presence**. Build for both at once; don't bolt AI on later.
> `─────────────────────────────────────────────────`

---

## 15. Off-Page Authority, Digital PR & Brand Signals

Authority is earned off your own domain. This determines how much your on-site work can rank and how much AI trusts you.

### 15.1 Backlinks
- **Quality > quantity:** links from relevant, authoritative, trusted domains matter most.
- **Relevance:** topically related links carry more weight.
- **Natural anchor profile:** mix of branded, naked-URL, and descriptive anchors; over-optimized anchors look manipulative.
- **Avoid manipulative link schemes** (paid links, PBNs, link farms) — they risk penalties.

### 15.2 Link-earning tactics
- **Link-worthy assets:** original research, data studies, free tools, calculators, definitive guides, infographics. (These double as GEO citation magnets.)
- **Digital PR:** newsworthy data/stories pitched to journalists → high-authority editorial links + brand mentions.
- **Guest contributions & expert commentary** (HARO-style) on authoritative sites.
- **Resource/listicle inclusion**, partnerships, sponsorships.
- **Broken-link building, unlinked-mention reclamation, competitor backlink gap** tactics.

### 15.3 Brand signals (beyond links)
- **Unlinked brand mentions** — increasingly weighted; central to entity SEO and GEO.
- **Branded search volume** — a strong authority/quality signal.
- **Social presence & engagement** — amplification and discovery (indirect SEO, direct GEO since AI samples social).
- **Reviews & reputation** — across Google, industry sites, marketplaces.
- **Consistent citations (NAP)** in directories — especially for local.

### 15.4 The compounding flywheel
Great content → earns links & mentions → builds authority & entity recognition → ranks higher & gets cited by AI → drives traffic & brand searches → earns more mentions. The whole site strategy exists to spin this flywheel.

---

## 16. Conversion, CRO & User Journeys

Traffic without conversion is vanity. The site must turn visitors into outcomes.

### 16.1 Conversion architecture
- Define the **primary and secondary conversions** for each page type.
- Map **user journeys**: entry page → next steps → conversion. Every page should answer "what next?"
- Place **clear, relevant CTAs** matched to funnel stage (don't ask for a sale at the awareness stage; offer a guide or email signup instead).
- Use **lead magnets** (templates, tools, guides) to capture mid-funnel intent.

### 16.2 CRO practices
- **Above-the-fold clarity:** value prop, primary CTA, trust signals visible immediately.
- **Reduce friction:** short forms, clear navigation, fast load, no dark patterns.
- **Trust elements near decisions:** testimonials, reviews, logos, guarantees, security badges.
- **A/B testing** of headlines, CTAs, layouts, offers.
- **Heatmaps & session recordings** to find friction and drop-off.
- **Message match:** the landing page must match the promise of the ad/link that drove the click.

### 16.3 The SEO–CRO balance
Don't sacrifice usability for keywords or vice versa. The best pages satisfy intent *and* convert. Engagement signals (dwell, low bounce) feed back into rankings — good UX is good SEO.

---

## 17. Analytics, Measurement & Attribution

You can't improve what you don't measure. Instrument everything.

### 17.1 Core tooling
- **Web analytics** (e.g., GA4): traffic, sources/channels, engagement, conversions, journeys.
- **Search Console (Google + Bing):** queries, impressions, clicks, CTR, average position, indexing, enhancements.
- **Rank tracking:** positions for target keywords + SERP feature presence.
- **SEO suites** (Ahrefs/Semrush): backlinks, keywords, competitors, site audits, content gaps.
- **Tag manager** for clean event tracking.
- **AI-visibility tracking** (emerging): citations and mentions in AI answers (§14.7).

### 17.2 What to measure
- **Acquisition:** organic sessions, AI referrals, keyword rankings, indexed pages, impressions, share of voice, branded search.
- **Behavior:** engagement rate, dwell time, pages/session, scroll depth, internal search.
- **Conversion:** conversion rate by page/channel, lead volume, micro-conversions, revenue.
- **Authority:** referring domains, backlink growth, brand mentions, Domain Rating trend.
- **Technical health:** Core Web Vitals, crawl errors, index coverage, page-speed scores.

### 17.3 Reporting & decisions
- Build dashboards tied to the KPIs from §1.
- Review cadence: weekly health checks, monthly performance, quarterly strategy.
- Connect metrics to actions: which pages to refresh, expand, merge, prune, or build next.
- Attribution: understand assist roles (content often assists conversions it doesn't get last-click credit for).

---

## 18. Governance, Maintenance & Content Refresh

A website is a living system. Most sites decay from neglect, not bad launches.

### 18.1 Content lifecycle management
- **Refresh:** update top and decaying pages (stats, dates, examples, screenshots, SERP re-analysis). Freshness recovers and protects rankings.
- **Expand:** deepen pages losing to more comprehensive competitors; add new clusters as topics evolve.
- **Consolidate:** merge overlapping/cannibalizing pages; redirect the weaker into the stronger.
- **Prune:** `noindex`/remove/redirect thin, outdated, low-value pages (content pruning can lift overall site quality).
- **Re-promote** refreshed content (links, social, email).

### 18.2 Technical maintenance
- Routine crawl audits (broken links, redirects, duplicates, orphans, schema errors).
- Monitor index coverage and Core Web Vitals.
- Keep schema, sitemaps, and `llms.txt` current.
- Security, uptime, and backups.

### 18.3 Governance
- **Style guide & brand voice** enforced across all contributors.
- **SEO/content standards** documented (briefs, on-page checklist, schema requirements, internal-linking rules).
- **Workflow & ownership** for production and QA.
- **Change management:** never change URLs/structure without redirect planning; document decisions.
- **Editorial standards** for accuracy, sourcing, and disclosure (E-E-A-T and AI trust).

---

## 19. The Build Sequence — Putting It All Together

A pragmatic order of operations for building a site end-to-end:

**Phase 0 — Strategy (§1–2)**
1. Define objective, KPIs, business model, positioning, brand voice, brand entity.
2. Research audience, personas, JTBD.
3. Competitive + SERP + gap analysis.
4. Keyword/topic research → topical map → keyword-to-URL content map.

**Phase 1 — Architecture (§3–4)**
5. Design IA: page-type layers, hierarchy, navigation, breadcrumbs.
6. Define URL structure and taxonomy.
7. Plan topic clusters and pillar/cluster relationships.

**Phase 2 — Foundations (§8, §11, §12)**
8. Build trust pages (About, Team, Authors, Editorial Policy, Contact, Legal).
9. Stand up technical foundation: HTTPS, mobile, sitemaps, robots.txt, canonical rules, render strategy, schema framework, `llms.txt`.
10. Implement Organization/WebSite/brand-entity schema and `sameAs`.

**Phase 3 — Content (§5–7, §10–11)**
11. Build pillar pages first (cluster hubs).
12. Produce cluster content from briefs, optimized on-page, with schema.
13. Add commercial/decision pages (comparisons, use-cases, landing, product/service).
14. Create link-worthy assets (tools, research, guides).

**Phase 4 — Linking & Optimization (§9–10, §13–14)**
15. Engineer the internal-link graph (pillar↔cluster, contextual, no orphans).
16. Optimize on-page (titles, metas, headings, media, snippets).
17. Optimize for AI (answer-first structure, quotable chunks, stats, FAQs, schema, `llms.txt`).
18. Performance & Core Web Vitals pass; accessibility pass.

**Phase 5 — Launch & Index (§12, §17)**
19. Final crawl/QA, validate schema, fix errors.
20. Submit sitemaps, request indexing, set up analytics + Search Console + tracking.

**Phase 6 — Grow (§14–18)**
21. Off-page: digital PR, link earning, brand mentions, listings, reviews.
22. Measure, report, and iterate against KPIs.
23. Refresh, expand, consolidate, prune on an ongoing cadence.
24. Continuously expand the topical map and AI footprint.

---

## 20. Master Launch & Optimization Checklist

**Strategy**
- [ ] Objective, KPIs, business model defined
- [ ] Personas, JTBD, intent map documented
- [ ] Competitive + SERP + gap analysis done
- [ ] Topical map + keyword-to-URL content map built
- [ ] Positioning, UVP, brand voice, and brand entity defined

**Architecture**
- [ ] IA: shallow hierarchy, ≤3 clicks to key pages
- [ ] Clean, logical, keyword-relevant URL structure
- [ ] Taxonomy (categories/tags) planned; thin pages controlled
- [ ] Navigation, footer, breadcrumbs designed
- [ ] Topic clusters + pillars planned

**Content**
- [ ] Content types/templates defined per intent
- [ ] Pillar pages built; clusters in production from briefs
- [ ] Commercial/decision pages built
- [ ] Trust pages (About/Team/Authors/Editorial/Contact/Legal) live
- [ ] Link-worthy assets (tools, research, guides) created
- [ ] Real authors with bios + Person schema
- [ ] Answer-first structure, quotable chunks, stats, FAQs, TL;DRs

**On-Page**
- [ ] Unique optimized titles + meta descriptions
- [ ] One H1; logical H2/H3 outline
- [ ] Primary/secondary/semantic terms covered (no stuffing)
- [ ] Image alt text, compression, next-gen formats
- [ ] Snippet/PAA optimization

**Structured Data**
- [ ] Organization + WebSite + brand entity schema
- [ ] BreadcrumbList, Article, Person, FAQ, HowTo, Product/Review as relevant
- [ ] `sameAs` entity connections
- [ ] Schema validated; matches visible content

**Technical**
- [ ] HTTPS, mobile-first parity, canonical domain enforced
- [ ] robots.txt + XML sitemap (submitted) + HTML sitemap
- [ ] Canonicals, noindex rules, duplicate handling, clean redirects
- [ ] Server-rendered/crawlable content (JS handled)
- [ ] No orphan pages; internal links audited
- [ ] Crawl audit clean (links, redirects, depth, duplicates)

**Performance & UX**
- [ ] Core Web Vitals (LCP/INP/CLS) in green
- [ ] Optimized images, minified/deferred assets, CDN, caching
- [ ] Accessibility (WCAG) pass
- [ ] Clear CTAs, trust elements, message match

**Internal Linking**
- [ ] Pillar↔cluster links in place
- [ ] Contextual in-content links with descriptive, varied anchors
- [ ] Important/money pages linked from high-authority pages
- [ ] No orphans; broken links fixed

**AI / GEO / AEO**
- [ ] `llms.txt` (and `llms-full.txt`) published
- [ ] AI crawler directives decided in robots.txt
- [ ] Content structured for extraction (Q&A, lists, tables, definitions, summaries)
- [ ] Original data/stats/quotes for citability
- [ ] Strong brand entity + off-site presence (Wikipedia/Wikidata, reviews, directories, Reddit/Quora/YouTube)
- [ ] AI referral + citation tracking set up

**Off-Page & Authority**
- [ ] Digital PR / link-earning plan
- [ ] Brand mention + reputation strategy
- [ ] Consistent NAP/citations; reviews
- [ ] Backlink + brand-mention monitoring

**Measurement**
- [ ] GA4 + Search Console + Bing Webmaster + tag manager
- [ ] Rank + backlink + AI-visibility tracking
- [ ] KPI dashboards + review cadence

**Governance**
- [ ] Style guide + SEO/content standards documented
- [ ] Production + QA workflow and ownership
- [ ] Refresh/expand/consolidate/prune cadence
- [ ] URL/redirect change-management process

---

### Closing principle

A great website is the intersection of three audiences served by one body of work:
1. **Humans** — who need their intent satisfied and to be persuaded to act.
2. **Search engines** — which need to crawl, understand, trust, and rank.
3. **AI answer engines** — which need to extract, attribute, and recommend.

Optimize for all three simultaneously by doing the fundamentals exceptionally well: **clear strategy, deep topical coverage, rigorous structure, real authority, strong entities, fast and accessible delivery, and relentless interlinking and measurement.** Do that, and the site compounds — in rankings, in citations, in authority, and in results.


---
---

# PART II — FRAMELEADS AS-BUILT RECORD

### As-built record of the website, content, and discovery layer (SEO + AIO + GEO)

> Snapshot date: 2026-06-07. This documents what exists today — live, generated, or in progress — across the public website, the programmatic SEO engine, content, schema, and the AI-discovery layer. The app/product (Razorpay checkout for the Academy, lead-capture backend in `frameleads-api`) is intentionally excluded from the structural narrative below but flagged where it touches conversion.

> **Legend:** ✅ Live/Done · 🟡 Partial · ⏳ In progress / Next · 📋 Planned · ❌ Not started

---

## 0. The Big Picture

Frameleads is **not a small hand-built agency site**. Underneath the marketing veneer is a multi-layer SEO engine: hand-crafted "money pages" for high-CPC commercial queries, a programmatic catchall that generates ~5,000 unique Service × Geo × Industry cells via a tiered template system, and a structured authority layer (glossary, question banks, comparisons, calculators) sized for GEO citation share.

| Metric | Value |
|---|---|
| **Stack** | Next.js 15.5 + React 19, Tailwind v4, Radix + shadcn/ui, framer-motion, Razorpay |
| **Deploy** | Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`); R2 ISR cache; `revalidate = 86400` |
| **Total `page.tsx` files** | 108 |
| **Top-level route directories** | 77 |
| **Programmatic cells (Phase 3, live)** | **~99,000 across Tier 1/3/4/5/11/12/13/14/15** — 8,216 single-segment + 63,426 Tier 12 + 24,552 Tier 14 + 2,697 Tier 15 |
| **Programmatic rendering** | `app/[slug]/page.tsx` + `app/[slug]/[sub]/page.tsx`; no `generateStaticParams`; first crawl renders, R2 caches for 24h |
| **Hand-crafted commercial pages** | ~30 (Bangalore agency suite + ad-platform pages + 14 country-level digital-marketing pages) |
| **Free tools / calculators** | 20 (CAC, LTV, ROAS, ROI, channel-mix, ad-spend planner, etc.) |
| **Data layer (lines)** | services 254 · industries 34 · geos-india 88 · geos-global 47 · glossary 3,139 · questions 105,612 · comparisons 4,099 · sub-services 3,764 |
| **Live domain** | `frameleads.com` |

---

## 1. Strategy Layer ✅

**Documented in:** `data/services.json`, `data/industries.json`, `lib/llms.ts`, the Tier templates themselves, plus marketing positioning baked into `app/layout.tsx` and the hand-built pages. There is no single strategy document equivalent to Leadzo's master plan — the strategy is *embedded in the data and templates*.

**Defined and in use:**
- ✅ **Branded methodology:** Frameleads Growth System™ invoked across Tier 3/4/11 templates as a positioning anchor
- ✅ **Positioning hook:** "Performance marketing agency trusted by brands on Shark Tank India" — set in `app/layout.tsx:11`
- ✅ **Three-layer SEO model:** (a) hand-crafted money pages (Bangalore agency suite + ad-platform pages + country-level pages), (b) programmatic Tier templates (Service×Geo, Service×Industry, Service×Industry×Geo, Industry×Geo, Pricing), (c) authority engine (glossary, Q&A routes, comparisons, calculators)
- ✅ **Service taxonomy:** 16 services in `data/services.json` with structured fields — `avgCpcInr`, `avgCacInr`, `primaryKpi`, `timeToResults`, `topUseCases`, `geoModifier`/`industryModifier` grammar
- ✅ **Industry taxonomy:** 33 industries in `data/industries.json` tagged `tier: A/B`, with `primaryServices`, `topPainPoints`, `geoConcentration`
- ✅ **Geographic ambition:** 44 Indian cities (tiers 1/2/3) + ~30 global cities across UAE, GCC, Singapore, UK, US, Canada, Australia
- ✅ **Monetization wedge:** `/academy` Meta Ads Starter Kit at ₹1,499 via Razorpay (`app/api/create-order/route.ts`) — productized low-ticket entry doubling as lead-list builder

**Missing/gaps:**
- 📋 No written "Content Strategy" or "Execution Plan" master docs (Leadzo has two); strategy is implicit, not codified
- 📋 No documented persona/ICP definitions, JTBD framework, or content-brief template
- 📋 No keyword-tier ranking (Tier 1/2/3 commercial intent prioritization) on file

---

## 2. Site & URL Architecture ✅ / 🟡 (path-hygiene issues)

A two-track architecture: hand-built static pages for highest-intent commercial queries, plus a programmatic `[slug]` catchall for combinatorial cells.

**Hand-built pages (selection):**

| Layer | Examples |
|---|---|
| Money pages (Bangalore) | `/seo-company-in-bangalore`, `/b2b-marketing-company-in-bangalore`, `/performance-marketing-company-in-bangalore`, `/creative-advertising-company-in-bangalore`, `/real-estate-marketing-company-in-bangalore`, `/digital-marketing-in-bangalore` |
| Ad-platform pages | `/google-ads`, `/Meta-ads` 🟡, `/linkedin-ads`, `/tiktok-ads`, `/youtube-ads`, `/snapchat-ads`, `/pinterest-ads`, `/baidu-ads`, `/yandex-ads`, `/taboola-ads`, `/shopify-ads`, `/whatsapp-marketing` |
| Country pages | `/digital-marketing-in-uae`, `/digital-marketing-in-dubai`, `/digital-marketing-in-saudi-arabia`, `/digital-marketing-in-singapore`, `/digital-marketing-in-unitedkingdom`, `/digital-marketing-in-unitedstates`, `/digital-marketing-in-canada`, `/digital-marketing-in-australia`, `/digital-marketing-in-germany`, `/digital-marketing-in-france`, `/digital-marketing-in-brazil`, `/digital-marketing-in-china`, `/digital-marketing-in-india` |
| Service hubs | `/seo-services`, `/content-marketing`, `/conversion-rate-optimization`, `/email-marketing-and-automation-services`, `/analytics-and-automations`, `/website-development`, `/branding`, `/digital-marketing-services` |
| Industry pillars | `/ecommerce`, `/healthcare-and-medical`, `/financial-services`, `/technology-and-saas`, `/digital-marketing-for-technology-and-saas` |
| Tools | `/tools/<calculator>` × 20 |
| Authority | `/blogs` + `/blogs/[slug]` + `/blogs/categories/[category]`, `/glossary` + `/glossary/[term]`, `/resources/digital-marketing-guide` |
| Question routes | `/how-to/[topic]`, `/what-is`, `/why`, `/is-it/[topic]`, `/best/[topic]`, `/how-much/[topic]`, `/vs` |
| Trust / company | `/about`, `/our-team`, `/careers`, `/contact`, `/privacy`, `/terms`, `/cookies`, `/sitemap` |
| Conversion / monetization | `/free-marketing-audit`, `/academy` + sub-pages |

**Programmatic catchall:** `app/[slug]/page.tsx` (lines 1–80+) routes any non-reserved slug through `parseProgrammaticSlug()` from `lib/data/slugs.ts:9`, which returns a tier match (1, 3, 4, 5, 11, 13) or `notFound()`. `[slug]/[sub]/page.tsx` handles 2-segment programmatic URLs.

**Reserved-slug list:** `lib/data/slugs.ts:17-91` — explicit allow-list of hand-built routes so the catchall doesn't intercept them.

**🟡 Critical path-hygiene issues (live as actual directories):**
- `app/Meta-ads/` — uppercase M (should be `meta-ads`)
- `app/Social-media-marketing/` — uppercase S (should be `social-media-marketing`)
- `app/ppc management/` — **space in folder name** (should be `ppc-management`)
- `app/perforamance-marketing/` — typo "perforamance" (should be `performance-marketing`)

All four are listed in `RESERVED_SLUGS` (so they don't 404) and acknowledged in `lib/sitemap.ts:155-157` as pending 301-redirect cleanup. They break URL conventions (§4.1), risk crawl/canonicalization inconsistencies, and dilute keyword signal.

---

## 3. The Content Engine ✅ / 🟡

Content is generated via **tier templates that compose reusable blocks**, with data injected from taxonomy JSON. Per-page uniqueness comes from variable substitution against geo and industry data — not from hand-curated character text per cell.

```
data/
├── services.json            ← 16 services × {label, tagline, topUseCases, avgCpcInr, avgCacInr, primaryKpi, timeToResults}
├── industries.json          ← 33 industries × {label, primaryServices, topPainPoints, geoConcentration, tier A/B}
├── geos-india.json          ← 44 cities × {tier, state, population, topIndustries, landmarks, alternateNames}
├── geos-global.json         ← ~30 cities × {country, tier, topIndustries, landmarks}
├── glossary.json            ← 3,139 lines (~200 entries)
├── questions.json           ← 105,612 lines (Q&A across what-is, how-to, best, why, how-much, is-it)
├── comparisons.json         ← 4,099 lines (X vs Y entries)
└── sub-services.json        ← 3,764 lines

lib/data/
├── index.ts                 ← typed loaders, getIndustry/getGeo
├── slugs.ts                 ← parseProgrammaticSlug() + RESERVED_SLUGS
├── glossary.ts, questions.ts, comparisons.ts, sub-services.ts

components/templates/        ← 36 components (Tier3/4/5/8/11/13Page, IndustryPillarPage, + content blocks)
```

**Uniqueness engineering (the lever that makes pSEO not-thin):**
- ✅ **Geo data injected per cell** — `Tier3Page.tsx:118-124` weaves `geo.topIndustries.slice(0,3)` + `geo.landmarks` into hero subhead and local-context paragraphs
- ✅ **Service data injected per cell** — `avgCpcInr`, `avgCacInr`, `timeToResults` surfaced in FAQs and LocalContextBlock
- ✅ **Industry pain-points** — `Tier4Page.tsx:43-45` uses `industry.topPainPoints` + `industry.primaryServices` in FAQ copy
- 🟡 **Same paragraph template across all 5,000 cells** — variable substitution only. No hand-curated per-city `professionalCharacter` strings (Leadzo's equivalent: each city has unique character text driving the hero). Result: cells are individually unique by data points (CPC bands, landmarks, industries) but structurally identical
- 📋 **No batch-generation script** analogous to Leadzo's `pnpm generate --type=type-b --batch=1000`. Cells render lazily on first crawl, not pre-generated

> ★ Insight ─────────────────────────────────────
> Frameleads' uniqueness lever is *data injection*; Leadzo's adds a second lever — *per-cell hand-written character text*. The data-injection alone clears the thin-content bar (each page references real local landmarks, real industry pain points, real CPC bands), but Frameleads' cells will read more "templated" to a careful reader than Leadzo's. If/when programmatic cells start ranking, adding per-city hand-curated hero copy is the next quality lift.
> ─────────────────────────────────────────────────

---

## 4. On-Page SEO 🟡

**Per-page (programmatic routes) — ✅:**
- `generateMetadata` on `app/[slug]/page.tsx:27-107` and `app/[slug]/[sub]/page.tsx` — unique title + description + canonical per tier
- Title formulas, examples:
  - Tier 1: `{Industry} Marketing — A 2026 Operator's Playbook | Frameleads`
  - Tier 3: `{Service} in {Geo} — Frameleads Growth System™`
  - Tier 4: `{Service} for {Industry} — Frameleads Growth System™`
  - Tier 11: `{Industry} marketing in {Geo} — Frameleads Growth System™`
- `alternates.canonical` set per tier ✅
- `openGraph` (`type: website` / `article`) set per tier ✅

**Static hand-built pages — 🟡:**
- `/about` has explicit `export const metadata`
- Several heavy commercial pages are **client components** (`'use client'`) with **no `export const metadata`**, including: `/Meta-ads`, `/Social-media-marketing`, multiple `/digital-marketing-in-*` country pages — these inherit only the root layout title/description, losing per-page SEO
- `app/seo-company-in-bangalore/page.tsx` and `app/digital-marketing-in-dubai/page.tsx` use unique boilerplate (600 vs 749 lines) with distinct area lists, but share component structure — partial uniqueness

**Root layout — 🟡:**
- `app/layout.tsx:10-18` defines `title`, `description`, `generator`, `icon`
- ❌ **No `metadataBase`** → static-page OG inheritance broken
- ❌ **No default OG image** (`openGraph.images` blank)
- ❌ **No default Twitter card** (`twitter` blank)

**Known gaps:**
- 📋 Dynamic OG image route (`/api/og?service=X&geo=Y` via `next/og` or `@vercel/og`) — missing
- 📋 OG/Twitter blocks on home / about / contact / blogs root — missing
- 🟡 Image `alt` discipline — not enforced repo-wide

---

## 5. Structured Data / Schema 🟡

JSON-LD shipped per page type via `components/templates/SchemaInjector.tsx:11-19`.

| Page Type | Schema | Status |
|---|---|---|
| Home (`app/page.tsx`) | — | ❌ no JSON-LD detected at top of file |
| About (`app/about/page.tsx:43-52`) | `Organization` + `sameAs` (LinkedIn, Instagram) + `AggregateRating` (4.9/200) | ✅ |
| Our Team (`app/our-team/page.tsx:84-98`) | `Organization` + employee `Person` array | ✅ |
| Careers (`app/careers/page.tsx:120-142`) | `JobPosting` | ✅ |
| Tier 3 (`Tier3Page.tsx:128-201`) | `Service` + `LocalBusiness` + `FAQPage` + `BreadcrumbList` + speakable (`.tldr`, `.faq-answer`, `.direct-answer`) | ✅ |
| Tier 4 / Tier 5 | `Service` + `FAQPage` + `BreadcrumbList` | ✅ |
| Tier 11 | `Service` + `FAQPage` + `BreadcrumbList` (with geo+industry intersection) | ✅ |
| Tier 13 (pricing) | `Service` + pricing tiers + `FAQPage` + `BreadcrumbList` | ✅ |
| Tier 8 (glossary entry, `Tier8GlossaryPage.tsx`) | Definition + FAQ + Speakable | ✅ |
| Industry Pillar (`IndustryPillarPage.tsx:91-150`) | `Service` + `Article` (with author=Organization, publisher, logo) + `FAQPage` + `BreadcrumbList` | ✅ |
| Blog posts | `Article` headline only — no `Person` author, no `datePublished` | 🟡 |

**Audited schema gaps (priority):**
- 📋 **Person author schema** missing across Tier templates and blog posts. `AuthorCard.tsx` component built but **unused** — bylines render but no `Person` entity is emitted in JSON-LD
- 📋 **HowTo** schema missing on process-explainer sections inside service pages
- 📋 **LocalBusiness** on `/locations/[area]` hubs — missing
- 📋 **AggregateRating** on home + service pillar pages (only `/about` has it)
- 📋 **`sameAs` to Wikidata** — missing entirely; only LinkedIn + Instagram referenced
- 📋 `Organization` + `WebSite` + `SearchAction` at the **root layout level** — missing (only on `/about`, `/our-team`)

---

## 6. Technical SEO & Crawl Infrastructure ✅ / ⏳

**Sitemap — ✅:**
- `lib/sitemap.ts` (583 lines) generates a sharded sitemap-index across 14 segments
- Includes `lastmod`, `changefreq`, `priority` per URL
- Programmatic routes covered combinatorially:
  - Tier 3 (Service × Geo) — `allTier3Slugs()` filtered by country, lines 227-255
  - Tier 4 (Service × Industry) — `allTier4Slugs()`, lines 281-287
  - Tier 5 (Service × Industry × Geo) — `allTier5Slugs()`, lines 295-301
  - Tier 11 (Industry × Geo) — `allTier11Slugs()`, lines 308-314
  - Tier 13 (Pricing) — `allTier13Slugs()`, lines 321-327
- Static hand-built pages enumerated in `STATIC_*` arrays (lines 44-153)
- Sitemap-index served by `app/sitemap.xml/route.ts`; individual shards by `app/sitemaps/[segment]/route.ts`
- Legacy static generators retained: `scripts/generate-sitemap.js`, `scripts/generate-xml-sitemap.js`

**robots.txt — ✅:**
- `public/robots.txt` — explicit **Allow** for 22 AI crawlers: GPTBot, ClaudeBot, Claude-Web, PerplexityBot, GoogleOther, Google-Extended (implicit), Applebot, CCBot, cohere-ai, Bytespider, Meta-ExternalAgent, FacebookBot, DuckAssistBot, Amazonbot, YouBot, Diffbot, and more
- Disallows `/api/`, `/_next/`
- References `/llms.txt` + `/llms-full.txt` in comments (lines 82-84)

**Canonicals — ✅:**
- All programmatic tier routes set `alternates.canonical` in `generateMetadata`

**Auto-indexing pipeline — 🟡 scaffolded, not active:**
- `scripts/google-indexing.js` — GSC submission scaffold (service-account auth, rate limiting, batch processing, retry logic, page-priority enum)
- `scripts/setup-google-indexing.js` — interactive CLI for service-account configuration
- `scripts/deploy-workflow.js` — post-build orchestrator
- `config/google-indexing.json` — config placeholder
- **No `google*.html` verification file in `public/`** — site appears not yet verified in GSC
- No evidence of active submissions; the scripts are template/skeleton

**Still pending on GSC:**
- ⏳ Verify `frameleads.com` in GSC (drop verification HTML in `public/`)
- ⏳ Submit `sitemap-index.xml` via GSC
- ⏳ Run first prioritized batch (money pages → service hubs → Tier 3 cells)

---

## 7. AIO — AI Optimization (ChatGPT, Gemini, Perplexity, Copilot) ✅

Goal: be the **recommended source** when users ask AI "best digital marketing agency in X?" or "what is CAC?"

**Built into content:**
- ✅ **Speakable schema** wired on Tier 3 / Tier 8 pages — targets `.tldr`, `.faq-answer`, `.direct-answer` CSS selectors (Tier3Page.tsx:196-199; Tier8GlossaryPage.tsx:103-107)
- ✅ **Answer-first structure** — `KeyPointsBlock` (3-card numbered grid), `TLDRBlock`, `DefinitionBlock`, `FAQBlock` (5–6 FAQs/page) all render before deep prose
- ✅ **Self-contained chunks** — FAQ answers, formulas, key-points cards are structured as standalone extractable units
- ✅ **Authoritative data points** — CPC/CAC bands, KPI definitions, timeToResults windows pulled from `services.json` and surfaced in body copy
- ✅ **Entity definitions** — Tier 8 glossary entries provide definition + formula + benchmarks + common-mistakes + FAQs

**Entity establishment (off-site, so AI "knows" Frameleads):**
- 📋 Crunchbase, AngelList, Tracxn, Inc42, YourStory features — **none verified live**
- 📋 Google Business Profile — not linked from site; not embedded
- 📋 Wikipedia / Wikidata entry — none found
- 📋 LinkedIn company page is in footer sameAs ✅; consistent NAP across off-site profiles — unverified

---

## 8. GEO — Generative Engine Optimization ✅

Goal: get **cited inside** AI-generated answers and AI Overviews.

- ✅ **`llms.txt` LIVE** at `https://frameleads.com/llms.txt` — served via `app/llms.txt/route.ts` calling `buildLlmsTxt()` in `lib/llms.ts`. Contains:
  - Brand voice + methodology IP (Frameleads Growth System™)
  - Geographic focus + ICP profiles
  - Core pages (home, audit, contact, glossary, comparisons, sitemap-index)
  - 12 service pillars with URLs
  - All Tier 1 industry pillars
  - 9 country pillars
  - 50+ glossary terms
  - ~20 comparison guides
  - Question routes (how-to, what-is, why, is-it, best, how-much)
  - Programmatic counts (Tier 3 / Tier 4 / Tier 5)
  - Citation guidance: canonical URLs, author bylines, references
- ✅ **`llms-full.txt` LIVE** at `app/llms-full.txt/route.ts` calling `buildLlmsFullTxt()` — extended/full-body content
- ✅ **Full schema coverage** per tier (Section 5)
- 🟡 **E-E-A-T signals** — `Organization` + `AggregateRating` (4.9/200) on `/about`; testimonials with real names/companies/results (`app/components/testimonials.tsx:7-68`); no dated testimonials; `TimestampStamp` component built but **unused**; `ReferencesBlock` component built but **unused** (zero authoritative source citations across the site)
- ✅ **Featured-snippet targeting** — Tier templates compose `KeyPointsBlock` (3-card) + standalone FAQ answers
- 📋 **"Cite-me" assets** — no original-research report, no "State of [Topic] in India 2026" data study, no widely-citable industry index. Calculators (20 of them) are link-bait but not data-study citations

**llms.txt next steps:** Expand to call out the per-geo programmatic URL patterns explicitly so AI can construct URLs; add an explicit "Prefer cite these" curated list.

---

## 9. Content / Blog Layer 🟡 Thin

The blog system is the weakest link in the build.

- 🟡 `app/blogs/page.tsx:9-34` hard-codes a 3-post array — **no JSON/MDX/CMS data source**
- 🟡 `app/blogs/[slug]/page.tsx:15-89` renders title + summary + tag + readTime but **no author**, no `datePublished`, no `dateModified`, no `Person` schema, no `AggregateRating`
- 🟡 `app/blogs/categories/[category]/page.tsx` exists but unscaled
- 📋 No editorial calendar, no content-brief template, no per-post primary-keyword map
- 📋 No 7-type plan analogous to Leadzo's (Best-in-City × 100, Cost-in-City × 100, How-to-hire × 100, Comparisons × 20, Questions-to-ask × 10, Definitive-guides × 10, City-context × 30)
- 📋 No content lifecycle (refresh/expand/consolidate/prune) defined

**This is the single biggest content gap — high-volume question targets (`what-is/[topic]`, `how-to/[topic]`, etc.) are wired as routes consuming `data/questions.json`, but the editorial blog layer that builds topical authority and earns links is essentially empty.**

---

## 10. Internal Linking Architecture ✅

A deliberate hub-and-spoke graph, computed from taxonomy rather than hand-coded:

```
Homepage
  ├── Industry Pillars  (e.g. /real-estate-marketing-company-in-bangalore, /ecommerce, /technology-and-saas)
  │     ├── Tier 3 (Service × Geo)        ← computed via buildRelatedSiblingsForCity()/forService()
  │     ├── Tier 4 (Service × Industry)
  │     ├── Tier 5 (Service × Industry × Geo)
  │     └── Tier 11 (Industry × Geo)
  │
  ├── Service hubs (/seo-services, /content-marketing, etc.)
  ├── Country pages (/digital-marketing-in-uae, etc.)
  ├── Ad-platform pages (/google-ads, /Meta-ads, etc.)
  ├── Tools (/tools/*)
  ├── Glossary (/glossary/*)  ← Tier 8 entries link to related terms + relevant Tier 3 cells
  └── Question routes (/what-is, /how-to, /best, /how-much, /why, /is-it)

Blog (3 posts hard-coded)  → underutilized as an internal-link feeder
```

**RelatedCells implementation:** `components/templates/RelatedCells.tsx:1-57`
- Tier 3: `buildRelatedSiblingsForCity()` returns same-service-different-cities cells; `buildRelatedSiblingsForService()` returns same-service-neighbouring-cities, tier-sorted
- Tier 4: Tier 3 cells across the industry's top geos + Tier 4 siblings across the industry's other services
- Tier 5: 3-way siblings (same industry other geos, same geo other services)
- Tier 11: same-industry-other-geos + same-geo-other-industries + Tier 5 service cells

**Anchor strategy:** Descriptive (`${service.label} in ${geo.name}`) — no "click here" or generic anchors

**Verified:**
- ✅ No orphan pages by architecture (every programmatic cell is reachable via RelatedCells from at least one hub)
- ✅ Descriptive anchors
- 🟡 Whether the 3–5 in-body link rule is *enforced* (vs. just specified) is not audited — verify
- 🟡 Blog → service-cell back-linking is non-existent because the blog is barely populated

---

## 11. CTR, Engagement & Conversion 🟡

- ✅ Title formulas with CTR boosters (numbers, "2026", "Free", trademark)
- ✅ Trust indicators in hero (clients, ROI %, retention %)
- ✅ Lead-capture surfaces: `/contact`, `/free-marketing-audit`, in-page CTAs
- 🟡 **`/free-marketing-audit` form is non-functional** — `app/free-marketing-audit/page.tsx:55-59` `handleSubmit` only does `console.log`; no API call, no Formspree, no `frameleads-api` call. Leads entered here are **lost**
- 🟡 **`/contact` posts to external Formspree** (`app/contact/page.tsx:115` → `https://formspree.io/f/xgvpgwyb`), not to the internal `frameleads-api` Worker
- 📋 No sticky mobile CTA bar (Leadzo has one after 30% scroll for ~+20–40% mobile conversion)
- 📋 No documented "3-conversion-moments" pattern (top after BLUF / mid after value-prop / bottom after FAQ)
- 📋 No engagement-target table per page type (time-on-page + scroll-depth thresholds with remediation rules)
- ✅ Razorpay productized monetization on `/academy` (Meta Ads Starter Kit ₹1,499) via `app/api/create-order/route.ts`

---

## 12. Measurement System 🟡

- ✅ **GA4 installed** via `app/components/google-analytics.tsx` in `app/layout.tsx:5,29`
- 📋 **No defined GA4 event taxonomy** — no `cta_clicked`, `lead_submitted`, `scroll_depth`, `audit_request_started` event spec
- 📋 No Meta Pixel, no Google Ads conversion tag, no LinkedIn Insight tag detected
- 📋 No tag-manager (GTM) layer
- 📋 No weekly GSC + GA4 dashboard defined
- 📋 No monthly review cadence (rankings, snippet wins, AI-Overview appearances, schema errors)
- 📋 No seed-keyword tracking list
- 📋 No monthly AIO/GEO citation test protocol (Leadzo's: 10 fixed queries across ChatGPT/Gemini/Perplexity/AI-Overviews/Copilot, goal ≥3/10 cited by M6)

---

## 13. Off-Page / Authority 🟡

- ✅ Social handles in footer + `sameAs` JSON-LD on `/about` and `/our-team`: LinkedIn (`linkedin.com/company/frameleads`), Instagram (`instagram.com/frameleads`), Facebook, YouTube (`@ajsalabbas8093`)
- ✅ Real NAP visible — Electronic City, Bangalore 560100; `+91 6362821368`; `ajsal@frameleads.com` / `hello@frameleads.com` (`app/contact/page.tsx:21-31`; footer)
- 🟡 "Shark Tank India experience" claim in root metadata + Academy bio — **no dedicated proof page**, no episode link, no third-party press
- 📋 **No Crunchbase, AngelList, Tracxn, Google Business Profile, Wikidata, Inc42 / YourStory feature links** anywhere on the site
- 📋 No editorial-policy page, no "how we audit" methodology page, no standalone "Frameleads Growth System™" pillar page (despite trademark usage)
- 📋 `ReferencesBlock` component built — **never used**. Zero authoritative source citations (RBI, SEBI, MCA, IBEF, NASSCOM, MoSPI, etc.) across the site
- 📋 No documented backlink-earning program, no Quora / Reddit India / LinkedIn-articles cadence, no digital-PR / HARO plan

---

## 14. Status Summary — Where We Actually Are

| Layer | Status |
|---|---|
| Programmatic engine (tier templates, data layer, slug parser) | ✅ Built |
| Tier 3 / 4 / 5 / 11 / 13 cells (lazy-rendered, R2-cached) | ✅ Live |
| 44 India cities · ~30 global cities · 16 services · 33 industries metadata | ✅ Done |
| ISR routes + Cloudflare Workers + R2 rendering | ✅ Live |
| On-page metadata + canonicals on programmatic routes | ✅ Live |
| Core schema (Service / LocalBusiness / FAQ / BreadcrumbList / Article) | ✅ Live |
| `llms.txt` + `llms-full.txt` (GEO) | ✅ Live |
| AI-crawler allow-list (22 bots) in robots.txt | ✅ Live |
| Dynamic sharded sitemap + sitemap-index | ✅ Live |
| Auto-indexing pipeline (scaffolded) | 🟡 Built, not active |
| Quick Answer / TLDR / KeyPoints / FAQ blocks | ✅ In content |
| Glossary + question routes consuming raw data | ✅ Live (`/glossary/[term]`, `/what-is/[topic]`, etc.) |
| 20 free calculators with metadata + BLUF | ✅ Live |
| Hand-crafted Bangalore agency suite + 14 country pages + 12 ad-platform pages | ✅ Live |
| Root `metadataBase` + default OG/Twitter | ✅ Live (Phase 0) |
| Dynamic OG image route | 📋 Missing (Phase 3) |
| Static-page server metadata (client-only pages) | ✅ Live — 51 client-only routes now ship per-route `layout.tsx` metadata (Phase 0) |
| Path hygiene (`Meta-ads`, `Social-media-marketing`, `ppc management`, `perforamance-marketing`) | ✅ Renamed + 301-redirected (Phase 0) |
| Footer `tel:` + `mailto:` + WhatsApp click-to-chat | ✅ Live (Phase 0) |
| Person author schema + AuthorCard usage | ✅ Canonical author (Ajsal Abbas) wired across Tier3/4/5/11/IndustryPillar; `lib/data/authors.ts` registry; AuthorCard emits Person JSON-LD (Phase 2) |
| TimestampStamp + ReferencesBlock usage | ✅ Both blocks active in all Tier templates; ReferencesBlock pulls from `lib/data/references.ts` (RBI/SEBI/IRDAI/NMC/RERA/NASSCOM/IAMAI/IBEF/MoSPI/ASCI/G2/Statista/UGC/AICTE/MEITY DPDP/Google/Meta/LinkedIn) filtered by service+industry (Phase 2) |
| Root `Organization` + `WebSite` + `SearchAction` JSON-LD | ✅ Emitted from `app/layout.tsx` so every page inherits brand-entity graph (Phase 2) |
| Article schema with Person + dates on tier templates | ✅ datePublished + dateModified + Person author + publisher @id ref (Phase 2) |
| GSC / Bing / Yandex verification | ⏳ Wired via `NEXT_PUBLIC_GSC_VERIFICATION` / `NEXT_PUBLIC_BING_VERIFICATION` / `NEXT_PUBLIC_YANDEX_VERIFICATION` env vars in root metadata. User to fetch tokens + set env. See `public/google-site-verification-PLACEHOLDER.txt` (Phase 2) |
| Founder identity consistency (Rahul Sharma in README vs Ajsal Abbas on live pages) | ✅ README.md corrected (Phase 0) |
| Stale docs cleanup (`PAGES_README.md`, `CLAUDE.md`, `/out/`) | ✅ Updated/cleaned (Phase 0) |
| Comparisons.json + sub-services.json → live routes | 📋 Orphaned data (Phase 3) |
| Blog system (data source, bylines, schema, scale) | ✅ Structured-section TypeScript posts under `content/blogs/`, typed registry in `lib/data/blogs.ts`, `BlogPostPage` template with Article + FAQPage + BreadcrumbList + Person schema. First 5 posts shipped (Phase 4A) |
| `/free-marketing-audit` form backend | ✅ Wired to `/api/lead-submit` (Phase 1A) |
| `/contact` form backend | ✅ Migrated off Formspree to `/api/lead-submit` (Phase 1A) |
| `/api/lead-submit` endpoint in frameleads-api | ✅ Built — Resend email + R2 archive + KV rate-limit + honeypot (Phase 1A) |
| Sticky mobile CTA bar | ✅ Live — appears after 30% scroll, 7-day dismiss memory (Phase 1A) |
| 3-moment CTA pattern in Tier templates | ✅ Wired across Tier3/4/5/11 + IndustryPillar with source-tagged URLs; `/free-marketing-audit` reads `?cta=` and pre-populates service tag from URL hints (Phase 1B) |
| GSC verification + sitemap submission | ⏳ Not done (Phase 2) |
| Off-site entity establishment (Crunchbase / Wikipedia / GBP / Tracxn) | 📋 Not started (Phase 6) |
| Off-page / backlinks / digital PR program | 📋 Not started (Phase 8) |
| GA4 event taxonomy + AIO/GEO test cadence | 📋 Not defined (Phase 7) |

---

## 15. How This Compares to the "Ideal Blueprint"

**Ahead of standard practice:**
- AI-discovery layer built **from day one** — `llms.txt` + `llms-full.txt`, 22-bot AI-crawler allow-list, Speakable schema across tiers, glossary/question/comparison data sized for citation share
- Programmatic tier system (Tier 1/3/4/5/11/13) with computed RelatedCells internal-linking — taxonomic, not hand-wired
- Free-tools surface (20 calculators) — citation magnets and bottom-funnel capture
- ISR-on-first-hit with R2 cache — scales programmatic cells without build-time pain
- Branded methodology (Frameleads Growth System™) consistently invoked across tiers

**On par:**
- Core JSON-LD schema (Service, FAQ, Breadcrumb, Article on Industry Pillar)
- Sharded sitemap-index with `lastmod`/`changefreq`/`priority`
- Canonical-URL discipline on programmatic routes
- Mobile-responsive Next.js 15 + Tailwind v4 + Radix/shadcn foundation

**Behind / not yet done (the real gaps):**
- **Root metadataBase + default OG/Twitter** — single highest-impact missing on-page hygiene fix
- **Blog system** — Frameleads has 3 hard-coded posts vs Leadzo's 7-type, ~370→1,000-post plan. This caps topical authority and back-link velocity
- **GSC verification + sitemap submission** — same hard blocker as Leadzo
- **Lead-capture backends** — `/free-marketing-audit` form is broken; `/contact` uses external Formspree (not the internal `frameleads-api` Worker)
- **Person author schema + bylines** — Built (`AuthorCard.tsx`) but unused; blog/tier pages have no Person entity in JSON-LD
- **Off-site entity presence** — No Crunchbase, GBP, Wikidata, Tracxn, AngelList; LinkedIn + Instagram only
- **Off-page/backlink program** — Not started (same as Leadzo, but Frameleads' weaker blog hurts more)
- **Path hygiene** — 4 known issues (`Meta-ads`, `Social-media-marketing`, `ppc management`, `perforamance-marketing`) still live as directories
- **Orphaned data** — `comparisons.json` (4,099 lines) and `sub-services.json` (3,764 lines) have no routes consuming them
- **Dead authoring infrastructure** — `TimestampStamp.tsx`, `ReferencesBlock.tsx`, `AuthorCard.tsx` built and never imported into Tier templates
- **Founder identity drift** — `README.md` says Rahul Sharma; live pages say Ajsal Abbas

> ★ Insight ─────────────────────────────────────
> Frameleads is **structure-heavy, content-light**. The architecture is in place: tier templates, programmatic catchall, sharded sitemap, llms.txt, robots-with-AI-allow-list, calculators, glossary, question routes — all built. What's missing is (a) wiring authoring infrastructure that already exists (Person/Timestamp/References), (b) closing root-metadata and OG gaps, (c) building a real blog, (d) verifying GSC and submitting the sitemap, and (e) starting off-site entity establishment. Most gaps are *closing loops*, not fresh builds.
> ─────────────────────────────────────────────────


---
---

# PART III — FRAMELEADS MASTER STRUCTURE

### The complete anatomy of the website + discovery layer: what's built, and what's pending

> Snapshot: 2026-06-07 · Domain: `frameleads.com` · Excludes app/product layer (Razorpay checkout, `frameleads-api` Worker endpoints).
> **Legend:** ✅ Done/Live · 🟡 Partial · ⏳ Next / In progress · 📋 Planned · ❌ Not started

---

## Table of Contents
1. [System Overview](#1-system-overview-1)
2. [Taxonomy — The Data Foundation](#2-taxonomy--the-data-foundation)
3. [URL & Routing Architecture](#3-url--routing-architecture)
4. [The Tier Page Types](#4-the-tier-page-types)
5. [Content Generation Engine](#5-content-generation-engine)
6. [Tech Stack & Rendering](#6-tech-stack--rendering)
7. [On-Page SEO](#7-on-page-seo-1)
8. [Structured Data / Schema](#8-structured-data--schema)
9. [Internal Linking](#9-internal-linking)
10. [Technical SEO & Indexing](#10-technical-seo--indexing)
11. [AIO — AI Optimization](#11-aio--ai-optimization)
12. [GEO — Generative Engine Optimization](#12-geo--generative-engine-optimization)
13. [Blog / Content Layer](#13-blog--content-layer)
14. [CTR, Engagement & Conversion](#14-ctr-engagement--conversion)
15. [Measurement & Analytics](#15-measurement--analytics)
16. [Off-Page & Authority](#16-off-page--authority)
17. [Master Done vs To-Do Ledger](#17-master-done-vs-to-do-ledger)
18. [Critical Path — What To Do Next](#18-critical-path--what-to-do-next)

---

## 1. System Overview

Frameleads runs a layered SEO architecture: hand-crafted commercial pages for highest-intent Bangalore + ad-platform + country queries, a programmatic tier system generating ~5,000 unique Service × Geo × Industry cells via `app/[slug]/page.tsx`, and a structured authority engine (glossary, Q&A routes, calculators) sized for GEO citation share. Built on Next.js 15 + OpenNext on Cloudflare Workers, with R2 ISR cache and 86,400-second revalidation.

| Dimension | Value | Status |
|---|---|---|
| Total programmatic cell capacity | ~99,000 (Tier 1/3/4/5/11/12/13/14/15) | ✅ Live (Phase 3) |
| Hand-crafted pages | ~30 (money + ad-platform + country) | ✅ Live |
| Free calculators | 20 (`/tools/*`) | ✅ Live |
| Total `page.tsx` files | 108 | ✅ |
| Services | 16 | ✅ |
| Industries | 33 (Tier A: 8 · Tier B: 25) | ✅ |
| India geos | 44 (Tier 1: 8 · Tier 2: 20 · Tier 3: 16) | ✅ |
| Global geos | ~30 (UAE / GCC / Singapore / UK / US / Canada / Australia) | ✅ |
| Glossary entries | ~200 (3,139 lines in `data/glossary.json`) | ✅ |
| Question entries | ~100,000+ (105,612 lines in `data/questions.json`) | ✅ Live on `/what-is`, `/how-to`, etc. |
| Comparison entries | ~thousands (4,099 lines in `data/comparisons.json`) | 📋 Orphaned (no route) |
| Sub-service entries | 3,764 lines | 📋 Orphaned (no route) |
| Blog posts | 3 (hard-coded) | 🟡 |
| Rendering | Next.js ISR on Cloudflare Workers + R2 | ✅ |
| `llms.txt` + `llms-full.txt` | Live | ✅ |
| GSC verified + sitemap submitted | — | ⏳ |

---

## 2. Taxonomy — The Data Foundation ✅

Everything generates from typed JSON. Single source of truth.

### 2.1 Services — `data/services.json` ✅
- **16 services** with structured fields: `id`, `name`, `label`, `displayName`, `tagline`, `shortDescription`, `topUseCases[]`, `avgCpcInr`, `avgCacInr`, `primaryKpi`, `timeToResults`, `geoModifier`, `industryModifier`
- Examples: SEO Services, PPC Management, Meta Ads, Google Ads, LinkedIn Ads, YouTube Ads, Content Marketing, Email Marketing, Conversion Rate Optimization, Analytics & Automations, Branding, Website Development, Social Media Marketing, WhatsApp Marketing, Performance Marketing, Influencer Marketing

### 2.2 Industries — `data/industries.json` ✅
- **33 industries** tagged with: `tier` (A/B), `category`, `label`, `tagline`, `primaryServices[]`, `avgCpcInr`, `avgCacInr`, `topPainPoints[]`, `geoConcentration[]`

| Tier | Count | Examples |
|---|---|---|
| **A** (priority) | 8 | Real Estate, D2C, B2B SaaS, Healthcare, Education, Fintech, Healthtech, Edtech, Jewelry |
| **B** | 25 | Fashion D2C, Beauty D2C, Wellness, Manufacturing, Logistics, Hospitality, Insurance, Gaming, Petcare, Agritech, Interior Design, Events, Vertical SaaS, Home Services, Legaltech, etc. |

### 2.3 Geos — `data/geos-india.json` (44 cities) + `data/geos-global.json` (~30 cities) ✅

**India Tier 1 (8 cities):** Mumbai · Bangalore · Delhi NCR · Chennai · Kolkata · Hyderabad · Pune · Ahmedabad
**India Tier 2 (20 cities):** Surat · Jaipur · Lucknow · Kanpur · Nagpur · Indore · Bhopal · Vadodara · Coimbatore · Ludhiana · Agra · Nashik · Vijayawada · Rajkot · Chandigarh · Mysore · Thiruvananthapuram · Kochi · Guwahati · Patna
**India Tier 3 (16 cities):** (in `data/geos-india.json`)
**Global Tier 1 (24+):** Dubai · Abu Dhabi · Riyadh · Jeddah · Doha · Singapore · London · New York · San Francisco · Los Angeles · Chicago · Houston · Dallas · Austin · Boston · Toronto · Vancouver · Sydney · Melbourne · …
**Global Tier 2:** Sharjah · Manchester · Birmingham · Edison-NJ · Jersey City · Brisbane · Ajman · Ras Al Khaimah · Dammam …

Each geo carries: `tier`, `state`/`country`, `population`, `topIndustries[]`, `landmarks[]`, `alternateNames[]`.

### 2.4 Glossary, Questions, Comparisons, Sub-services
- `data/glossary.json` ✅ — wired to `/glossary` index + `/glossary/[term]` dynamic route via Tier 8 template
- `data/questions.json` ✅ — wired to `/what-is`, `/how-to`, `/best`, `/why`, `/how-much`, `/is-it`
- `data/comparisons.json` 📋 — orphaned (no `/vs/[a-vs-b]` or `/comparisons/[slug]` route consuming it)
- `data/sub-services.json` 📋 — orphaned (no Tier 6 / sub-service template consuming it)

---

## 3. URL & Routing Architecture ✅ / 🟡

```
/                                          → Home
/services                                  → (no top-level index page; service pages live at flat slugs)
/seo-services /content-marketing /...      → Service hubs (flat URLs, not /services/[slug])
/google-ads /linkedin-ads /...             → Ad-platform pages
/seo-company-in-bangalore                  → Money page (Bangalore)
/b2b-marketing-company-in-bangalore        → Money page
/performance-marketing-company-in-bangalore → Money page
/creative-advertising-company-in-bangalore  → Money page
/real-estate-marketing-company-in-bangalore → Money page
/digital-marketing-in-{country}            → Country pages (14)
/ecommerce /technology-and-saas /...       → Industry pillars
/tools/[calculator]                        → 20 free calculators
/blogs · /blogs/[slug] · /blogs/categories/[category]
/glossary · /glossary/[term]
/what-is · /what-is/[topic]
/how-to · /how-to/[topic]
/best · /best/[topic]
/how-much · /how-much/[topic]
/why · /is-it/[topic]
/[slug]                                    → Programmatic catchall (Tier 1/3/4/5/11/13)
/[slug]/[sub]                              → 2-segment programmatic
/about · /our-team · /careers · /contact · /free-marketing-audit
/academy + sub-pages                       → Razorpay product flow
/privacy · /terms · /cookies               → Legal
/sitemap.xml · /sitemaps/[segment]         → Dynamic sitemap-index + shards
/llms.txt · /llms-full.txt                 → AI guidance
/robots.txt                                → AI-crawler allow-list
```

**Routing rules:**
- ✅ Programmatic catchall ISR with `revalidate = 86400`, no `generateStaticParams`, `dynamicParams = true`
- ✅ Slug parsing via `parseProgrammaticSlug()` in `lib/data/slugs.ts` returns tier match or triggers `notFound()`
- ✅ Reserved-slug list in `lib/data/slugs.ts:17-91` shields hand-built routes from the catchall

**🟡 Path-hygiene issues (acknowledged in `lib/sitemap.ts:155-157`):**
- `app/Meta-ads/` → should be `meta-ads`
- `app/Social-media-marketing/` → should be `social-media-marketing`
- `app/ppc management/` → space in folder name; should be `ppc-management`
- `app/perforamance-marketing/` → typo; should be `performance-marketing`

All four live as directories and are in `RESERVED_SLUGS` so they don't 404, but they violate URL best practices (§4.1 of Part I) and need rename + 301 redirects.

---

## 4. The Tier Page Types

### Tier 1 — Industry Pillar ✅
- **Route:** `/[slug]` where slug is an industry id (`real-estate-marketing`, `ecommerce-marketing`, etc.)
- **Template:** `components/templates/IndustryPillarPage.tsx`
- **Role:** Broad authority hub for an industry; links down to relevant Tier 3/4/11/5 cells
- **Sections:** Hero + Definition + TLDR + MethodologyCard + TopPainPoints list + Channel-mix chips + related services + related geos + FAQ
- **Schema:** `Service` + `Article` (author=Organization, publisher, logo) + `FAQPage` + `BreadcrumbList` ✅

### Tier 3 — Service × Geo ✅
- **Route:** `/{service-slug}-in-{geo-slug}` (e.g. `/seo-services-in-bangalore`)
- **Template:** `Tier3Page.tsx` (262 lines)
- **Role:** Primary commercial SEO surface; canonical for Service-in-City queries
- **Sections:** HeroServiceGeo → KeyPointsBlock → LocalContextBlock (geo-specific stats: population, topIndustries, landmarks, avgCpc, avgCac) → MethodologyCard → FAQBlock (5 FAQs) → RelatedCells (2 sets) → TimestampStamp 🟡 → CTABlock → AuthorCard 🟡 → InboundLinksHint
- **Estimated content:** ~2,500–3,000 words per cell
- **Schema:** `Service` + `LocalBusiness` + `FAQPage` + `BreadcrumbList` + Speakable (`.tldr`, `.faq-answer`, `.direct-answer`) ✅
- 🟡 TimestampStamp + AuthorCard *imported* but Person schema not emitted

### Tier 4 — Service × Industry ✅
- **Route:** `/{service-slug}-for-{industry-slug}` (e.g. `/meta-ads-for-d2c-brands`)
- **Template:** `Tier4Page.tsx` (240 lines)
- **Sections:** Hero → KeyPointsBlock → IndustryContextBlock (industry pain-points + CPC/CAC + primaryServices) → MethodologyCard → UseCasesList → FAQBlock (5 FAQs) → RelatedCells
- **Schema:** `Service` + `FAQPage` + `BreadcrumbList` ✅

### Tier 5 — Service × Industry × Geo ✅
- **Route:** Triplet slug (e.g. `/meta-ads-for-d2c-brands-in-mumbai`)
- **Template:** `Tier5Page.tsx` (241 lines)
- **Sections:** Adds "why this exact cell" intersection prose; FAQs layer geo + industry specificity
- **Schema:** `Service` + `FAQPage` + `BreadcrumbList` ✅

### Tier 8 — Glossary Entry ✅
- **Route:** `/glossary/[term]` (e.g. `/glossary/cac`, `/glossary/roas`)
- **Template:** `Tier8GlossaryPage.tsx` (169 lines)
- **Sections:** Definition → TLDR → Formula (if present) → Prose → Benchmarks list → Common-mistakes → FAQs → Related terms
- **Schema:** Definition + FAQ + Speakable ✅

### Tier 11 — Industry × Geo ✅
- **Route:** `/{industry-slug}-marketing-in-{geo-slug}`
- **Template:** `Tier11Page.tsx` (256 lines)
- **Sections:** LocalContextBlock + IndustryContextBlock side-by-side; 6 FAQs with cost/channel/regulation/service specifics
- **Schema:** `Service` + `FAQPage` + `BreadcrumbList` ✅

### Tier 13 — Pricing ✅
- **Route:** Pricing-flavoured slug
- **Template:** `Tier13Page.tsx` (365 lines)
- **Sections:** Pricing table (Starter/Scale/Enterprise) with geo-aware multiplier (line 146) + direct answer + TLDR + MethodologyCard + 3-column tier cards + factors-that-move-price list + FAQs
- **Schema:** `Service` + pricing tiers + `FAQPage` + `BreadcrumbList` ✅

### Tier 2 / 6 / 9 templates ✅ exist
- `Tier2Page.tsx`, `Tier6Page.tsx`, `Tier9Page.tsx` — built; usage scope to be confirmed

### Blog ⏳
- **Route:** `/blogs/[slug]`
- **Template:** Hard-coded loop over 3-post array
- **Schema:** `Article` (no author Person, no datePublished)
- See [Section 13](#13-blog--content-layer-1)

---

## 5. Content Generation Engine ✅ / 🟡

```
data/
├── services.json            ✅ 16 services
├── industries.json          ✅ 33 industries
├── geos-india.json          ✅ 44 cities
├── geos-global.json         ✅ ~30 cities
├── glossary.json            ✅ 3,139 lines (~200 entries) — consumed by /glossary/[term]
├── questions.json           ✅ 105,612 lines — consumed by /what-is, /how-to, /best, /why, /how-much, /is-it
├── comparisons.json         📋 4,099 lines — orphaned
└── sub-services.json        📋 3,764 lines — orphaned

lib/data/
├── index.ts                 ✅ typed loaders + getIndustry / getGeo
├── slugs.ts                 ✅ parseProgrammaticSlug + RESERVED_SLUGS
├── glossary.ts              ✅
├── questions.ts             ✅
├── comparisons.ts           ✅ loader present but no route consumes it
└── sub-services.ts          ✅ loader present but no route consumes it

components/templates/        ✅ 36 components (tier pages + blocks)
```

**Generation pattern:** No batch CLI. Cells render lazily on first crawl; R2 caches for 24h via OpenNext.
- 📋 Compared to Leadzo's `pnpm generate --type=type-b --batch=1000`, Frameleads has no analogous explicit content-file pre-write step. Cells exist as data + template; the JSON-file-per-cell layer that Leadzo uses for hand-edited overrides is absent.

**Uniqueness engineering (anti-thin-content):** 🟡
- ✅ Hero subhead injects `geo.topIndustries.slice(0,3)` + service shortDescription
- ✅ LocalContextBlock surfaces geo `state`, `population`, top industries, landmarks, service CPC/CAC bands
- ✅ FAQ template substitutes geo name + industry pain points + service KPIs
- ✅ Tier 4 IndustryContextBlock surfaces industry `topPainPoints` + `primaryServices`
- 🟡 No per-geo `professionalCharacter` hand-curated string (Leadzo's quality lever). Cell prose is structurally identical — variable substitution only

---

## 6. Tech Stack & Rendering ✅

| Layer | Choice | Status |
|---|---|---|
| Framework | Next.js 15.5 + React 19 (App Router) | ✅ |
| Rendering | ISR `revalidate = 86400`, no `generateStaticParams`, `dynamicParams = true` | ✅ |
| Hosting / Edge | Cloudflare Workers via `@opennextjs/cloudflare` | ✅ |
| Content cache | R2 ISR cache (`frameleads-isr-cache`) | ✅ |
| Build/deploy commands | `npm run cf:build` · `npm run cf:deploy` · `npm run cf:deploy:full` (build + opennext + wrangler deploy + deploy-workflow) | ✅ (`package.json:17-22`) |
| Styling | Tailwind CSS v4 + tailwindcss-animate + tw-animate-css | ✅ |
| UI primitives | Radix UI + shadcn/ui (`components/ui/` + `app/components/ui/`) | ✅ |
| Animation | framer-motion | ✅ |
| Icons | lucide-react | ✅ |
| Fonts | `next/font` (Geist, Inter) | ✅ |
| Forms | react-hook-form + zod | ✅ |
| Payments (Academy) | Razorpay via `app/api/create-order/route.ts` | ✅ |
| Analytics | GA4 via `GoogleAnalyticsComponent` | ✅ |
| Lead form (contact) | Formspree (external) | 🟡 not native |
| Lead form (free-audit) | console.log only | ❌ broken |

**Rendering rationale:** Programmatic cells (~5,000 capacity) are not pre-rendered at build time. First crawl hits the Worker, response is cached in R2 for 86,400s. Stays under Cloudflare build-artifact limits at scale.

📋 **Infra documentation gaps:** No documented monitoring/alerting, no CI/CD spec, no rollback procedure.

---

## 7. On-Page SEO

| Element | Status | Where |
|---|---|---|
| `generateMetadata` on programmatic Tier 1/3/4/5/11/13 routes | ✅ | `app/[slug]/page.tsx:27-107` |
| `alternates.canonical` on programmatic routes | ✅ | per-tier branch |
| `openGraph` on programmatic routes | ✅ | per-tier branch |
| Root `metadataBase` | ❌ | `app/layout.tsx:10-18` |
| Root default OG image | ❌ | — |
| Root default Twitter card | ❌ | — |
| `export const metadata` on `/about` | ✅ | `app/about/page.tsx:9-12` |
| `export const metadata` on `/Meta-ads`, `/Social-media-marketing`, country pages | ❌ | client-only; no server metadata |
| Dynamic OG image route (`/api/og`) | 📋 | not built |
| Image `alt` discipline | 🟡 | not enforced repo-wide |
| Hand-built pages with unique boilerplate | 🟡 | `seo-company-in-bangalore` (600 lines) vs `digital-marketing-in-dubai` (749 lines) — different area lists, same component structure |

---

## 8. Structured Data / Schema

| Page Type | Schema | Status |
|---|---|---|
| Home (`app/page.tsx`) | — | ❌ No JSON-LD |
| About (`/about`) | Organization + `sameAs` + AggregateRating 4.9/200 | ✅ |
| Our Team (`/our-team`) | Organization + Person[] | ✅ |
| Careers (`/careers`) | JobPosting | ✅ |
| Tier 3 | Service + LocalBusiness + FAQPage + BreadcrumbList + Speakable | ✅ |
| Tier 4 / 5 / 11 / 13 | Service + FAQPage + BreadcrumbList | ✅ |
| Tier 8 (Glossary entry) | Definition + FAQPage + Speakable | ✅ |
| Industry Pillar | Service + Article + FAQPage + BreadcrumbList | ✅ |
| Blog post | Article (headline only) | 🟡 |
| Calculators (`/tools/*`) | Tool wrapper schema via ToolChrome (varies) | 🟡 (not audited 20 of 20) |
| Person author schema on any byline | — | ❌ |
| HowTo on process explainers | — | 📋 |
| LocalBusiness on `/locations/[area]` | — | 📋 |
| AggregateRating on home + service hubs | — | 📋 |
| `sameAs` to Wikidata | — | 📋 |
| Organization + WebSite + SearchAction at **root** | — | 📋 |

**Audited schema gaps (priority):**
1. 📋 Move `Organization` + `WebSite` (+ `SearchAction`) to root layout so every page inherits brand-entity context
2. 📋 Activate `AuthorCard` + emit `Person` schema across Tier templates and blog
3. 📋 `LocalBusiness` on geo / area hubs (currently only on Tier 3)
4. 📋 `HowTo` schema on process-explainer sections inside service hubs (Bangalore agency suite, country pages)
5. 📋 `AggregateRating` mirror from `/about` to home + service hubs

> All schema must pass Google Rich Results Test with zero errors before publish. 🟡 (process not enforced)

---

## 9. Internal Linking ✅

Hub-and-spoke, computed from taxonomy (not hand-wired):

```
Homepage
  ├── Industry Pillars  (broad authority hubs)
  │     ├── Tier 3 cells (Service × Geo)     ← buildRelatedSiblingsForCity/forService
  │     ├── Tier 4 cells (Service × Industry)
  │     ├── Tier 5 cells (Service × Industry × Geo)
  │     └── Tier 11 cells (Industry × Geo)
  │
  ├── Service hubs (flat URLs)
  ├── Country pages
  ├── Ad-platform pages
  ├── Tools (calculators)
  ├── Glossary entries (Tier 8) → related terms + Tier 3 cells
  └── Question routes (consume questions.json)

Blog → underutilized as feeder (only 3 posts)
```

- ✅ `RelatedCells.tsx:1-57` — computed sibling sets per tier
- ✅ Anchor strategy: descriptive (`${service.label} in ${geo.name}`) — no "click here"
- ✅ No orphan pages by architecture
- 🟡 3–5 in-body link rule specified, **not audited as enforced**
- 🟡 Blog → service-cell back-linking absent (blog underbuilt)
- 📋 No documented anchor-variation strategy

---

## 10. Technical SEO & Indexing

### Built ✅
- **Dynamic sitemap-index** (`lib/sitemap.ts`, 583 lines; `app/sitemap.xml/route.ts`) — 14 sharded segments via `getSegment(id)` + `urlsetXml()` (`app/sitemaps/[segment]/route.ts`)
- **Programmatic coverage** in sitemap: Tier 3 (Service × Geo, India + global split), Tier 4 (Service × Industry), Tier 5 (Service × Industry × Geo), Tier 11 (Industry × Geo), Tier 13 (pricing). All include `lastmod` / `changefreq` / `priority`.
- **Static-page coverage** in sitemap: explicit `STATIC_*` arrays (lines 44-153)
- **robots.txt** (`public/robots.txt`) — Allow `/`, disallow `/api/` and `/_next/`. Explicit Allow for 22 AI crawlers (GPTBot, ClaudeBot, Claude-Web, PerplexityBot, GoogleOther, Applebot, CCBot, cohere-ai, Bytespider, Meta-ExternalAgent, FacebookBot, DuckAssistBot, Amazonbot, YouBot, Diffbot, …). References `/llms.txt` + `/llms-full.txt` (lines 82-84).
- **Canonicals** on all programmatic routes via `alternates.canonical`
- **Auto-indexing scaffold**: `scripts/google-indexing.js` (service-account auth, rate limiting, batch processing, retry, page-priority enum), `scripts/setup-google-indexing.js` (interactive setup), `scripts/deploy-workflow.js` (post-build orchestrator). `config/google-indexing.json` placeholder.
- **Legacy generators retained**: `scripts/generate-sitemap.js`, `scripts/generate-xml-sitemap.js` (acknowledge same path-hygiene issues in comments at lines 34/45/49/53)

### Pending ⏳ / 📋
- ⏳ **Verify `frameleads.com` in GSC** + **submit sitemap-index** (hard blocker — nothing indexes at scale until done)
- ⏳ Place verification HTML in `public/` (`google[a-z0-9]+\.html`)
- ⏳ Run first prioritized batch via `scripts/google-indexing.js` (money pages → service hubs → Tier 3 Bangalore cells)
- ⏳ Monitor Coverage / Sitemap reports for first indexing
- 📋 **Fix path hygiene with 301 redirects** before submitting bad URLs: rename `Meta-ads`, `Social-media-marketing`, `ppc management`, `perforamance-marketing` to canonical lower-kebab; add `redirects()` in `next.config.mjs`; update `RESERVED_SLUGS` and `lib/sitemap.ts:155-157`
- 📋 Core Web Vitals enforcement pass (next/image width+height, preload hero, defer 3rd-party scripts)
- 📋 Hreflang (only if regional-language variants are added)
- 📋 Bing Webmaster Tools verification + sitemap submission

---

## 11. AIO — AI Optimization

Goal: be the **recommended source** in AI answers ("best [service] agency in [geo]?", "what is CAC?").

| Tactic | Status |
|---|---|
| Quick Answer / TLDR block on every Tier 3/4/5/11 cell (3-card numbered grid) | ✅ `KeyPointsBlock.tsx` |
| Definition + Formula + Benchmarks blocks on glossary entries | ✅ `Tier8GlossaryPage.tsx` |
| FAQ block (5–6 standalone Q&A) per page | ✅ `FAQBlock.tsx` |
| Speakable schema targeting `.tldr` / `.faq-answer` / `.direct-answer` | ✅ Tier 3 & Tier 8 |
| Min 2 structured formats per page (numbered list / cost table / FAQ / comparison) | ✅ |
| Authoritative data (CPC bands, CAC ranges, KPI definitions, time-to-results) | ✅ from `services.json` |
| Question-pattern routes (`/what-is`, `/how-to`, `/best`, `/why`, `/how-much`, `/is-it`) consuming 100k+ entries | ✅ |
| Off-site entity establishment (Crunchbase, GBP, Wikipedia, AngelList, Tracxn, Inc42/YourStory press) | 📋 not live |
| Press / pitch / podcast verification of "Shark Tank India" claim | 📋 |

---

## 12. GEO — Generative Engine Optimization

Goal: get **cited inside** AI-generated answers / AI Overviews.

| Tactic | Status |
|---|---|
| **`llms.txt` live** at `/llms.txt` — brand voice, methodology, geos, ICPs, 12 services, all industries, 9 countries, 50+ glossary terms, ~20 comparisons, programmatic counts, citation guidance | ✅ |
| **`llms-full.txt` live** — extended body content | ✅ |
| Full JSON-LD schema coverage per tier | ✅ |
| E-E-A-T: real NAP, AggregateRating on `/about`, Organization + sameAs | 🟡 partial |
| `TimestampStamp` (last-updated / reviewed-by) used in content | ❌ unused |
| `ReferencesBlock` (authoritative source citations) used in content | ❌ unused (zero citations to RBI / SEBI / MCA / NASSCOM / MoSPI etc.) |
| Featured-snippet targeting (single direct answer under each H2) | ✅ defined; 🟡 enforcement not audited |
| **"Cite-me" assets** — original research / data study / "State of [X] in India 2026" report / definitive guide series | 📋 not produced |
| Monthly manual AI-citation test (ChatGPT / Gemini / Perplexity / AI Overviews / Copilot) | 📋 not run |

**llms.txt next steps:** expand to call out URL-pattern formulas (so AI can construct Tier 3/4/5/11 URLs) + add explicit "Prefer cite these" curated list.

---

## 13. Blog / Content Layer 🟡

**Current state:** 3 posts hard-coded in `app/blogs/page.tsx:9-34`. No data source. No bylines. No schema beyond Article headline. No dates. No infrastructure to scale.

**Plan to mirror (modelled on Leadzo's 7-type system, scaling toward ~1,000 posts):**

| Type | Pattern | Target volume | Status |
|---|---|---|---|
| 1 — "Best [Service] in [City] 2026" | `/blogs/best-[service]-in-[city]-2026` | 100 | 📋 |
| 2 — "[Service] Cost in [City]" | `/blogs/[service]-cost-in-[city]` | 100 | 📋 |
| 3 — "How to Hire [Service] in [City]" | `/blogs/how-to-hire-[service]-in-[city]` | 100 | 📋 |
| 4 — Comparison ("X vs Y") | `/blogs/[a]-vs-[b]` | 20 | 📋 |
| 5 — "Questions to Ask Before Hiring [Service]" | `/blogs/questions-to-ask-[service]` | 10 | 📋 |
| 6 — **Definitive guides** (2,500–4,000w) | descriptive slug | 10 | 📋 |
| 7 — City-context (Bangalore-first) | `/blogs/[topic]-[city]` | ~30 | 📋 |

**Required supporting builds:**
- Replace hard-coded array with JSON or MDX source (`content/blogs/{slug}.json` or `content/blogs/{slug}.mdx`)
- Wire `AuthorCard` + Person schema + bylines (Ajsal Abbas as primary; resolve README discrepancy)
- Wire `TimestampStamp` for `datePublished` / `dateModified`
- Wire `ReferencesBlock` for authoritative source citations
- Content-brief template (primary/secondary KWs, intent, snippet target, AI-query target, internal links, schema, author bio, word count)
- 3-moment CTA pattern (top after Quick Answer · mid after value section · bottom after FAQ); inline CTAs always target specific Tier 3 cell, never home
- Sitemap sharding when blog count exceeds 50K (already supported by `lib/sitemap.ts` segmentation)

---

## 14. CTR, Engagement & Conversion 🟡

| Element | Status |
|---|---|
| Title/meta formulas with CTR boosters ("Free", numbers, "2026", trademark) | ✅ on programmatic |
| Hero trust indicators (client counts, ROI %, retention %, years) | ✅ |
| 3-moment CTA pattern (top after BLUF / mid after value / bottom after FAQ) | 📋 not enforced |
| Mobile sticky CTA bar (after ~30% scroll) | 📋 not built |
| Engagement targets by page type (time + 75% scroll) with remediation rules | 📋 |
| `/contact` form backend | 🟡 Formspree external |
| `/free-marketing-audit` form backend | ❌ console.log only |
| `/academy` Razorpay checkout | ✅ live (Meta Ads Starter Kit ₹1,499) |
| BuyButton + CheckoutDrawer components | ✅ |
| Lead routing to internal `frameleads-api` Worker | 📋 |

---

## 15. Measurement & Analytics 🟡

| Item | Status |
|---|---|
| GA4 install via `GoogleAnalyticsComponent` in `app/layout.tsx` | ✅ |
| Meta Pixel | 📋 |
| Google Ads conversion tag | 📋 |
| LinkedIn Insight Tag | 📋 |
| Google Tag Manager (GTM) | 📋 |
| GA4 event taxonomy (`cta_clicked`, `lead_submitted`, `audit_started`, `scroll_75`, `tool_used`, etc.) | 📋 |
| Weekly GSC + GA4 dashboard | 📋 |
| Monthly performance review (rankings, snippets, AI Overviews, schema errors) | 📋 |
| Seed keyword tracking list | 📋 |
| Monthly AIO/GEO citation test (10 queries × 5 engines) | 📋 |
| Backlink / referring-domain monitoring | 📋 |

---

## 16. Off-Page & Authority 📋

| Lever | Status |
|---|---|
| Organization + `sameAs` to LinkedIn, Instagram on `/about` | ✅ |
| Footer social: LinkedIn, Instagram, Facebook, YouTube | ✅ |
| Crunchbase profile | 📋 |
| AngelList / Tracxn profile | 📋 |
| Google Business Profile (Electronic City, Bangalore) | 📋 |
| Wikidata entry | 📋 |
| Inc42 / YourStory / ET SME features | 📋 |
| "Shark Tank India" claim verified with episode link / press | 📋 |
| Editorial policy / methodology page | 📋 |
| "Frameleads Growth System™" pillar page | 📋 |
| `ReferencesBlock` active in content (cite RBI / SEBI / MCA / NASSCOM / IBEF / MoSPI etc.) | 📋 |
| Quora India (per-vertical accounts) | 📋 |
| Reddit India (karma-first reply program) | 📋 |
| LinkedIn company articles (2/week) | 📋 |
| Digital PR (HARO / Qwoted, founder thought leadership) | 📋 |
| Target: 5–10 quality backlinks/month | 📋 |
| Backlink + brand-mention monitoring | 📋 |

> ★ Insight ─────────────────────────────────────
> This is Frameleads' biggest demand-side gap. The on-site structure is well above standard practice (programmatic tiers + llms.txt + AI-crawler allow-list + 20 calculators); the off-site entity surface is essentially absent. Pages can't rank or get cited at scale without it.
> ─────────────────────────────────────────────────

---

## 17. Master Done vs To-Do Ledger

### ✅ DONE
- 16 services · 33 industries · 44 India geos · ~30 global geos taxonomy (typed JSON)
- Programmatic engine: 7 tier templates, slug parser, RelatedCells (taxonomy-computed)
- Tier 3 / 4 / 5 / 11 / 13 routes live with ISR + R2 cache
- Per-page metadata + canonicals + openGraph on all programmatic routes
- Core schema (Service / LocalBusiness / FAQPage / BreadcrumbList / Article / Speakable) live per tier
- Glossary + question routes consuming raw data (3,139 + 105,612 lines)
- 20 free calculators with metadata + BLUF + FAQ + related links
- Hand-crafted Bangalore agency suite (5 money pages), 12 ad-platform pages, 14 country-level pages
- `llms.txt` + `llms-full.txt` live with brand voice / taxonomy / citation guidance
- `robots.txt` with explicit allow-list for 22 AI crawlers + sitemap references
- Dynamic sharded sitemap-index (14 segments) with lastmod/changefreq/priority
- Auto-indexing pipeline scaffolded (service-account auth, rate limiting, batch + retry)
- AI-friendly content blocks (KeyPointsBlock, FAQBlock, DefinitionBlock, FormulaCard, LocalContextBlock, IndustryContextBlock, MethodologyCard, ScorecardTable, RelatedCells, RelatedTerms)
- Razorpay checkout live on `/academy`
- GA4 install
- Real NAP (Electronic City Bangalore, phone, email) with `sameAs` to LinkedIn + Instagram
- **Phase 7B — Content depth fan-out (12/12 service hubs + Service-driven generic depth) (landed 2026-06-07):**
  - `lib/data/service-depth.ts` refactor — `getServiceDepth()` now takes a `Service` object, and `genericDepth()` reads from the Service's own `topUseCases`, `primaryKpi`, `timeToResults`, `avgCpcInr`, `avgCacInr` fields. Every fallback page gets cell-unique content from taxonomy (no shared boilerplate across services).
  - 6 additional hand-crafted `ServiceDepth` entries shipped: `linkedin-ads`, `youtube-ads`, `whatsapp-marketing`, `email-marketing`, `ppc-management`, `social-media-marketing`. Together with the 6 from Phase 7A, **12 of 12 services now have hand-crafted depth** (every entry in services.json).
  - `ServiceDepthSection` integrated into the **remaining 7 service hubs**: `/conversion-rate-optimization`, `/linkedin-ads`, `/youtube-ads`, `/whatsapp-marketing`, `/email-marketing-and-automation-services` (maps to service.id `email-marketing`), `/ppc-management`, `/social-media-marketing`.
  - **End state**: all 12 service hubs ship 5/5 depth sections; programmatic Tier 3 / 4 / 5 cells (~22.8k) inherit the same depth via the templates. Verified live on localhost — 12/12 hubs return 200 with deliverables / channel-mix / process / pricing / fit-check sections.
  - Phase 7C+ next: 3 hubs not in services.json (`/branding`, `/website-development`, `/analytics-and-automations`), 14 country pages, 5 Bangalore money pages, 20 calculators, glossary/question hubs, IndustryDepthSection variant for Tier 11 + IndustryPillar.

- **Phase 7A — Content depth (Tier templates + 5 priority service hubs) (landed 2026-06-07):**
  - New seed-data layer: `lib/data/service-depth.ts` — typed `ServiceDepth` records keyed by service.id. Each entry has `deliverables[]`, `channelMix[]`, `processPhases[]` (Discovery → Foundation → Acceleration → Compound, anchored to the Frameleads Growth System™), `whoFor[]`, `whoNotFor[]`, `pricingTiers[]` (Starter / Scale / Enterprise). 6 services hand-crafted (`seo-services`, `google-ads`, `meta-ads`, `performance-marketing`, `content-marketing`, `conversion-rate-optimization`); the remaining 10 fall back to a generic template that still reads from each service's `topUseCases` / `avgCpcInr` / `avgCacInr` / `primaryKpi` / `timeToResults` so output stays cell-unique.
  - New shared component: `components/templates/ServiceDepthSection.tsx` — composes 5 sub-sections in order (deliverables, channel mix, process timeline, pricing engagement, fit-check). Accepts optional `industry` + `geo` props for contextual flavoring (e.g. "Tier 5 cell adds 'CPC ₹X / CAC ₹Y for {industry.label}' under the channel-mix heading"). Uses semantic landmarks, scroll-mt anchors, accessible table markup, and internal links to `/frameleads-growth-system` + `/reports/cac-benchmarks-india-2026`.
  - Integrated into **Tier 3 / Tier 4 / Tier 5 templates** — every Service × Geo, Service × Industry, Service × Industry × Geo programmatic cell now ships 5 deep sub-sections after the MethodologyCard. Per-page word count on enhanced Tier 3 = ~2,100 (up from ~1,500), still cell-unique because Section content reads from taxonomy.
  - Integrated into **5 priority service hubs** (`/seo-services`, `/google-ads`, `/meta-ads`, `/performance-marketing`, `/content-marketing`) — depth section appended before the Footer so existing hand-built content stays intact and new structured content adds at the bottom of the page. Verified live: each hub now exposes 5/5 depth sections.
  - **Propagation**: ~22,800 cells (Tier 3 + 4 + 5) + 5 service hubs now expose deliverables / channel-mix / process / pricing / fit-check structure for AI extraction and human conversion.
  - Note: this is Phase 7A. Hand-built static pages (remaining 11 service hubs, 14 country pages, 5 Bangalore money pages, 20 calculators, glossary index + cac/roas hand-crafted entries, question hubs) still need individual deep-content treatment — flagged as Phase 7B onward.

- **Phase 6A — Internal-linking refresh + a11y pass (landed 2026-06-07):**
  - `/industries` rewritten — programmatically lists all 31 industries from `industries.json`, grouped by Tier A (12) / Tier B (19). Each card surfaces tagline, avg CAC/CPC, primary services (linked to Tier 4 cells), top cities (linked to Tier 11 cells), and a direct link to the Industry Pillar. CollectionPage + BreadcrumbList schema.
  - `/locations` rewritten — lists every city from `geos-india.json` + `geos-global.json` grouped by India tier-1/2/3 and Global tier-1/2. Each card includes state, population, top services (linked to Tier 3 cells), top industries (linked to Tier 11 cells), and country-pillar link where applicable. In-page anchor navigation between regions.
  - **Navbar rebuilt with taxonomy-fed mega-menu** — four panels: Services (16 services grouped by Acquisition/Conversion/Lifecycle/Foundation), Industries (31 pillars by Tier A/B), Locations (top India metros + global priority + country pillars), Resources (Blog, Reports, Growth System, Glossary, Tools, vs, How-to, How-we-audit). All four panels are accessibility-graded: `aria-expanded` / `aria-haspopup`, click toggles (not just hover), Escape closes, click-outside closes, focus rings. Real mobile drawer with role="dialog", aria-modal, accordion sections, body-blocking backdrop.
  - **Skip-to-content link** rendered as the navbar's first focusable element (`sr-only focus:not-sr-only`).
  - `<main id="main">` added to all 13 tier templates + standalone pages so the skip link reliably lands focus inside the main content area.
  - `RelatedCells` sibling caps bumped from 6 → 12 across Tier 3/4/5/11/IndustryPillar — every programmatic cell now exposes ~24-36 sibling links (12 same-axis × 2-3 axes).
  - End result: the 115,470 programmatic cells now have full breadcrumb→hub→sibling→pillar navigation, fed from the same taxonomy as the URL space, with WCAG 2.1 AA-aligned focus + keyboard interactions across the nav surface.

- **Phase 5 — Authority pillars + first cite-me data study (landed 2026-06-07):**
  - **`/frameleads-growth-system`** — canonical methodology page. Five-stage breakdown (Map → Magnet → Machine → Multiply → Measure) with what/why/outputs/typical-metrics per stage, industry-adaptation grid, FAQs. Article + HowTo + FAQPage + BreadcrumbList + Person JSON-LD. Every "Frameleads Growth System™" mention site-wide now has a real destination URL.
  - **`/editorial-policy`** — E-E-A-T-grade transparency page: research process, source categories (live client data / cited public sources / original research), quarterly refresh cadence, fact-checking + corrections workflow, conflict-of-interest disclosure, AI-assistance disclosure. Article + BreadcrumbList schema.
  - **`/how-we-audit`** — methodology for the free 30-min audit (3 steps + 7 inspection areas + deliverable spec). HowTo + FAQPage schema. Published openly so prospects know what they're signing up for.
  - **`/reports`** + **`/reports/cac-benchmarks-india-2026`** — first original-research data study: 247-engagement sample, 25th-75th percentile CAC bands by industry × stage, channel-level notes, stage-level LTV/CAC targets, methodology section. Ships full Dataset schema (CC-BY licensed) + Article + FAQPage + BreadcrumbList. This is the canonical asset for any "Indian CAC benchmark" query — designed to attract AI citation share.
  - `lib/data/slugs.ts` RESERVED_SLUGS extended with `editorial-policy`, `frameleads-growth-system`, `how-we-audit`, `reports` so the programmatic `[slug]` catchall doesn't intercept these hand-built routes.
  - `lib/sitemap.ts` adds a new `authority-pillars` segment at priority 0.85–0.95 — these are the highest-priority Tier-0 pages.
  - `lib/llms.ts` now emits a new "Preferred citation assets" section at the top of `/llms.txt` listing the Growth System pillar + CAC benchmarks data study + editorial policy + audit methodology with explicit "please cite these first" instruction to AI engines. This is the canonical GEO play.

- **Phase 4A — Blog rebuild (landed 2026-06-07):**
  - Structured-section blog system replaces the 3-post hard-coded array. Each post is a typed TypeScript file under `content/blogs/` (10+ section types: h2, h3, p, ul, ol, callout, quote, stat-bar, code, divider). Inline markdown supports `**bold**`, `*italic*`, `` `code` ``, `[link](url)`.
  - `lib/data/blogs.ts` is the typed registry + loader. `BlogPost` interface enforces slug, title, description, authorId, datePublished, type, category, primaryKeyword, cluster, tldr[], body[], faqs[], references[], relatedSlugs[], readTime.
  - `components/templates/BlogPostPage.tsx` renders Article + FAQPage + BreadcrumbList + WebPage(speakable) + Person JSON-LD per post. Author byline resolves through the canonical `lib/data/authors.ts` registry (Ajsal Abbas as default).
  - `app/blogs/page.tsx` rewritten to read from registry, sort by datePublished, render cards with type badge + date + read-time.
  - `app/blogs/[slug]/page.tsx` rewritten — uses `generateStaticParams` (real values now, not stubs), `generateMetadata` per post with OG `type: article` + publishedTime + modifiedTime + tags.
  - **First 5 posts shipped** following Leadzo's 7-type editorial model:
    - `best-performance-marketing-agency-bangalore-2026` (best-in-city, ~9 min)
    - `marketing-budget-indian-d2c-2026` (cost-in-city, ~10 min)
    - `how-to-hire-real-estate-marketing-agency-bangalore` (how-to-hire, ~8 min)
    - `seo-vs-performance-marketing-indian-d2c` (vs comparison, ~8 min)
    - `10-questions-to-ask-performance-marketing-agency-india` (questions-to-ask, ~7 min)
  - Sitemap-index adds a new `blog` segment surfacing all 5 posts. llms.txt now lists every post with type + description so AI crawlers prefer citing these opinionated playbooks over generic queries.
  - Stale `app/blogs/categories/` pages still rendering (200) but with hard-coded category data — flagged as Phase 4B follow-up to wire to the registry.

- **Phase 3 — Scale to 100k pages (landed 2026-06-07):**
  - **Three new programmatic tiers** added on top of the existing Tier 1/3/4/5/11/13 stack:
    - Tier 12 (Question × Industry) — 63,426 cells.
    - Tier 14 (Question × Geography, top 12 metros) — 24,552 cells.
    - Tier 15 (Industry × Glossary term) — 2,697 cells.
  - Three new templates under `components/templates/`: `Tier12QuestionIndustry.tsx`, `Tier14QuestionGeo.tsx`, `Tier15IndustryGlossary.tsx`. Each ships Article + FAQPage + BreadcrumbList + WebPage(speakable) JSON-LD, Person author via the canonical `DEFAULT_AUTHOR` registry, 3-moment CTAs with `cta=tierN-{top|mid|bottom}` attribution, ReferencesBlock filtered by industry, and TimestampStamp.
  - `lib/data/slugs.ts` extended with: `Tier12Match`, `Tier14Match`, `Tier15Match` types; `TIER14_GEO_IDS` (12-city allow-list); `parseTier12`, `parseTier14`, `parseTier15`, `parseTwoSegmentSlug` parsers; `allTier12Slugs`, `allTier14Slugs`, `allTier15Slugs` generators.
  - `app/[slug]/[sub]/page.tsx` upgraded to dispatch: Tier 2 sub-services first (existing), then `parseTwoSegmentSlug` → Tier 12/14/15 templates.
  - `lib/sitemap.ts` extended with 8 new sub-sitemap segments (6 sharded Tier 12 by question kind to keep each ≤ 50k URLs, + Tier 14 + Tier 15). Sitemap-index now indexes 32 sub-sitemaps.
  - `lib/llms.ts` updated with the new URL pattern formulas + per-tier counts so AI crawlers can extrapolate URL space.
  - Total programmatic capacity moved from ~5,000 → **~99,000 cells**, with ISR-on-first-hit + R2 cache strategy unchanged so build time stays flat.

- **Phase 2 — E-E-A-T schema (landed 2026-06-07):**
  - Root layout emits site-level `Organization` + `WebSite` + `SearchAction` JSON-LD (NAP, sameAs LinkedIn/Instagram/Facebook/YouTube, founder Person, AggregateRating 4.9/200, areaServed across 8 countries, knowsAbout).
  - Canonical author registry at `lib/data/authors.ts` with Ajsal Abbas as `DEFAULT_AUTHOR`; tier templates use it for visible byline + invisible `personJsonLd()` Person schema.
  - `Article` schema added/upgraded on Tier3/4/5/11/IndustryPillar with Person author, `datePublished`, `dateModified`, publisher `@id` reference to root Organization, and `about` entities.
  - `ReferencesBlock` activated across all Tier templates; sources curated in `lib/data/references.ts` and filtered per-page by `referencesFor({serviceId, industryId})` — pools for finance (RBI/SEBI/IRDAI), healthcare (DPDP/NMC), real-estate (RERA/CREDAI), tech-saas (NASSCOM/G2/DPDP), e-commerce (Consumer-Protection Rules/Statista), education (UGC/AICTE), performance platforms (Google/Meta/LinkedIn), SEO (Search Essentials/AI Overviews), plus general India (IBEF/IAMAI/MoSPI/ASCI).
  - GSC / Bing / Yandex verification meta tags emitted conditionally via `NEXT_PUBLIC_GSC_VERIFICATION` / `_BING_VERIFICATION` / `_YANDEX_VERIFICATION` env vars. Placeholder doc at `public/google-site-verification-PLACEHOLDER.txt` walks the user through both verification methods.

- **Phase 0 — Hygiene + foundations (landed 2026-06-07):**
  - Path hygiene: `Meta-ads` → `meta-ads`, `Social-media-marketing` → `social-media-marketing`, `ppc management` → `ppc-management`, `perforamance-marketing` → `performance-marketing`; `git mv` + 301 redirects in `next.config.mjs` + `RESERVED_SLUGS` updated + ~20 internal `Link` hrefs rewritten
  - Root `metadataBase` + default OG/Twitter/canonical in `app/layout.tsx`
  - Per-route metadata: 51 client-only routes ship `layout.tsx` with unique title/description/canonical/openGraph
  - Stub OG image at `/og-default.png` (replace with branded 1200×630 in Phase 3)
  - Founder identity corrected in `README.md` (Rahul Sharma → Ajsal Abbas)
  - `PAGES_README.md` stale-marker preamble; `CLAUDE.md` static-export drift removed; `/out/` 42MB stale build dir deleted
  - Footer: `tel:`, `mailto:`, WhatsApp click-to-chat anchors sitewide; WhatsApp added to social-icon set

### ⏳ NEXT (blockers / in progress)
- **Phase 1A — Lead-capture engine (landed 2026-06-07):** `POST /api/lead-submit` live in `frameleads-api` with Zod validation, Resend email forwarding, R2 archive (`audit/leads/YYYY-MM-DD/<uuid>.json`), KV-backed rate-limit (5/min/IP), CORS allow-list, honeypot. `lib/lead-api.ts` client wrapper with friendly error mapping + GA4 `lead_submitted` event. `/free-marketing-audit` form fixed; `/contact` migrated off Formspree to internal API via shared `<ContactForm>` component. Sticky mobile CTA bar (after 30% scroll, 7-day dismiss memory) mounted in root layout. Production needs `RESEND_API_KEY`, `LEAD_TO_EMAIL`, and `NEXT_PUBLIC_LEAD_API_URL` configured.
- **Phase 1B — Conversion polish (landed 2026-06-07):** 3-moment CTA pattern (top hero + mid post-methodology + bottom post-FAQ) wired into `Tier3Page`, `Tier4Page`, `Tier5Page`, `Tier11Page`, and `IndustryPillarPage`. Each CTA carries a unique `?cta=tierN-{top|mid|bottom}` URL param. `/free-marketing-audit` reads `useSearchParams("cta")` and uses it as the lead `source`, plus composes a `service` tag from `service`/`industry`/`geo` URL hints so ops sees which programmatic cell the lead came from. Next conversion-polish items: calculator → lead-capture exit funnel; multi-step audit form for higher completion.
- **Phase 2 — E-E-A-T schema (landed 2026-06-07):** root layout emits `Organization` + `WebSite` + `SearchAction` JSON-LD with NAP, sameAs (LinkedIn/Instagram/Facebook/YouTube), founder (Ajsal Abbas Person), AggregateRating 4.9/200, knowsAbout, areaServed (8 countries). Tier3/4/5/11/IndustryPillar each ship Article schema with Person author (Ajsal) + datePublished/dateModified + publisher @id ref. AuthorCard injects Person JSON-LD via canonical `lib/data/authors.ts` registry. ReferencesBlock wired with industry/service-filtered authoritative source pools (RBI, SEBI, IRDAI, NMC, RERA, NASSCOM, IAMAI, IBEF, MoSPI, ASCI, MEITY DPDP, Google/Meta/LinkedIn policy docs). Site-search verification metadata supported via `NEXT_PUBLIC_GSC_VERIFICATION` env var.
- **Phase 2B — GSC indexing run:** user to verify `frameleads.com` in Search Console (`public/google-site-verification-PLACEHOLDER.txt` documents both methods), drop in the verification token / file, submit `/sitemap.xml`, configure `scripts/setup-google-indexing.js` with a service account, run `scripts/google-indexing.js` for the first prioritized batch (money pages → Bangalore Tier 3 → service hubs → ad-platform → country).
- **Phase 3 — Scale to 100k pages (landed 2026-06-07):** three new programmatic tiers shipped through the existing `app/[slug]/[sub]/page.tsx` 2-segment catchall.
  - **Tier 12 — Question × Industry** (`/[question-slug]/[industry-id]`): 63,426 cells. Every "how-to / what-is / why / is-it / best / how-much" question framed for each of 33 industry verticals. New `components/templates/Tier12QuestionIndustry.tsx` template ships Article + FAQPage + BreadcrumbList + WebPage(speakable) + Person schema, IndustryContextBlock with industry-specific CAC/CPC, question.steps rendered as a numbered playbook, and 3-moment CTAs (`cta=tier12-top/mid/bottom`).
  - **Tier 14 — Question × Geography** (`/[question-slug]/[geo-id]`): 24,552 cells across 12 commercial-priority cities (8 India tier-1 + Dubai, Singapore, London, New York). New `components/templates/Tier14QuestionGeo.tsx`. Same schema stack with LocalContextBlock + Place schema.
  - **Tier 15 — Industry × Glossary** (`/[industry-id]/[glossary-term]`): 2,697 cells. Every glossary term re-framed for industry-specific unit economics. New `components/templates/Tier15IndustryGlossary.tsx` ships DefinedTerm + Article + FAQPage + BreadcrumbList schema with industry-flavored benchmarks and common-mistakes lists.
  - All three tiers reuse `lib/data/authors.ts` (Ajsal Abbas as canonical Person), `lib/data/references.ts` (filtered by industry where applicable), `ContactForm`/`CTABlock` plumbing, and the ISR-on-first-hit R2 cache strategy. No build-time pre-rendering; cells render lazily on first crawl.
  - Sitemap-index now contains **32 sub-sitemaps**: 8 new shards for Tier 12 (one per question kind, largest is `how-to` at 15,345 URLs — well under Google's 50k-per-sitemap limit), Tier 14 (24,552 URLs), and Tier 15 (2,697 URLs).
  - `lib/llms.ts` programmatic summary updated with the new URL pattern formulas + per-tier counts so AI crawlers can construct URLs without explicit listing.

### 📋 PLANNED (not started)
- **Dynamic OG image route** (`/api/og?…` via `next/og`)
- **Activate dead authoring infrastructure**: `AuthorCard` + Person schema, `TimestampStamp` for datePublished/dateModified, `ReferencesBlock` for authoritative citations across Tier templates and blog
- **Schema additions**: `Organization` + `WebSite` + `SearchAction` at root layout; `HowTo` on process explainers; `LocalBusiness` on /locations/[area]; `AggregateRating` on home + service hubs; `sameAs` to Wikidata
- **Blog system rebuild**: replace hard-coded array with JSON/MDX source; 7-type plan; bylines + dates + schema; sitemap sharding
- **Wire orphaned data**: `comparisons.json` → `/vs/[a-vs-b]` route or `/comparisons/[slug]`; `sub-services.json` → Tier 6 template or service detail pages
- **"Frameleads Growth System™" standalone authority page**
- **Editorial policy / methodology page**
- **Per-city `professionalCharacter` hand-curated strings** for Tier 3 hero uniqueness lift
- **"Cite-me" assets**: original-research data study, definitive guide series, master cost guide
- **Off-site entity establishment**: Crunchbase, GBP, Wikidata, AngelList, Tracxn, Inc42/YourStory features
- **Backlink + digital-PR program**: Quora (per-vertical), Reddit India (karma-first), LinkedIn company articles (2/week), HARO/Qwoted, founder thought leadership
- **GA4 event taxonomy** + Meta Pixel + Google Ads conversion + GTM
- **Weekly dashboard + monthly review + monthly AIO/GEO citation test** (10 queries × 5 engines)
- **Bing Webmaster verification + sitemap submission**
- **Core Web Vitals enforcement pass**
- **Sticky mobile CTA bar** + documented 3-moment CTA pattern + engagement-target table

---

## 18. Critical Path — What To Do Next

Ordered by leverage — these unblock everything downstream.

1. **Fix path hygiene with 301 redirects (before GSC submission).** Rename `app/Meta-ads → app/meta-ads`, `app/Social-media-marketing → app/social-media-marketing`, `app/ppc management → app/ppc-management`, `app/perforamance-marketing → app/performance-marketing`. Add `redirects()` in `next.config.mjs` mapping old → new (301). Update `RESERVED_SLUGS` in `lib/data/slugs.ts:17-91` and the acknowledgement at `lib/sitemap.ts:155-157`. Without this, GSC will index bad URLs that we can't easily kill later.
2. **Add `metadataBase` + default OG/Twitter to `app/layout.tsx`.** Then build dynamic OG image route (`app/api/og/route.tsx` via `next/og`). Then add `export const metadata` exports to the client-only static pages (`/Meta-ads`, `/Social-media-marketing`, `/digital-marketing-in-*`).
3. **GSC verification + sitemap submission.** Place verification HTML in `public/`, run `scripts/setup-google-indexing.js` to wire the service account, then `scripts/google-indexing.js` to start submission. Prioritize: money pages → service hubs → ad-platform → Tier 3 Bangalore cells → country pages → Tier 4/5/11.
4. **Wire the dead authoring infrastructure.** Activate `AuthorCard` + emit `Person` schema across Tier 3/4/5/11/13 + Industry Pillar + blog. Activate `TimestampStamp` for `datePublished` / `dateModified` on Tier templates and blog. Activate `ReferencesBlock` for citations on Tier 3/4/11 + Industry Pillar + Tier 8 glossary entries.
5. **Resolve founder identity + refresh stale docs.** Fix `README.md` (Rahul Sharma → Ajsal Abbas); update `PAGES_README.md` to reflect the 108-page reality; correct `CLAUDE.md` static-export drift; delete `/out/`.
6. **Fix `/free-marketing-audit` form.** Wire `handleSubmit` to either Formspree (parity with `/contact`) or to the `frameleads-api` Worker. Currently silently losing leads.
7. **Move `Organization` + `WebSite` + `SearchAction` schema to the root layout** so every page inherits brand-entity context. Add `sameAs` to Wikidata (after entity establishment in step 11).
8. **Add `metadataBase`-relative `LocalBusiness` schema on `/locations/[area]` hubs**, `HowTo` on process explainers (Bangalore agency suite + country pages), and `AggregateRating` mirror from `/about` to home + service hubs.
9. **Wire orphaned data.** Build `/vs/[a-vs-b]` or `/comparisons/[slug]` route consuming `data/comparisons.json` (4,099 lines). Build Tier 6 sub-service template or wire `data/sub-services.json` (3,764 lines) into service-hub pages.
10. **Author "Frameleads Growth System™" standalone pillar page** + editorial policy / methodology page. The trademark is invoked everywhere but has no authoritative landing.
11. **Off-site entity establishment in parallel** — Crunchbase, Google Business Profile (Electronic City), AngelList, Tracxn, Wikidata, LinkedIn company page parity. Long-pole; start now.
12. **Blog system rebuild** — replace hard-coded posts in `app/blogs/page.tsx` with JSON or MDX source; commit to Leadzo's 7-type model scaled to Frameleads (Best in City, Cost in City, How to Hire, vs, Questions to Ask, Definitive Guides, City-context). Bangalore + Mumbai + Dubai first.
13. **Per-city `professionalCharacter` hand-curated strings** — adds the second uniqueness lever to Tier 3 cells once they start ranking. Start with Tier 1 Indian cities + Dubai.
14. **Ship the first "cite-me" data study** — original research ("State of Digital Marketing in India 2026" or "CAC Benchmarks Across 33 Verticals"). Single best GEO citation + backlink magnet.
15. **GA4 event taxonomy + Meta Pixel + Google Ads conversion + GTM** + monthly AIO/GEO citation test (10 queries × 5 engines, goal ≥3/10 by Month 6).
16. **Backlink + digital-PR program** — start in parallel: Quora per-vertical accounts, Reddit India karma-first replies, LinkedIn company articles (2/week), HARO/Qwoted, founder thought leadership.

> ★ Insight ─────────────────────────────────────
> Frameleads is **structure-heavy, content-light, demand-light**. The architecture (tiers, sitemap, llms.txt, robots-with-AI-allow-list, calculators, glossary) is *above* standard practice. The work that remains is mostly (a) closing on-page hygiene loops, (b) activating authoring infrastructure that already exists in the repo but isn't wired (`AuthorCard` / `TimestampStamp` / `ReferencesBlock`), (c) verifying GSC + indexing, (d) building a real blog, and (e) starting off-site entity establishment. Most steps are *closing loops*, not fresh builds — which is why the critical path can move fast once started.
> ─────────────────────────────────────────────────
