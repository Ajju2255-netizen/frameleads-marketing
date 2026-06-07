import Link from "next/link"

export const post = {
  slug: "ai-overviews-geo-india-operator-playbook-2026",
  title: "AI Overviews + GEO: The 2026 Operator's Playbook for Indian Brands",
  summary:
    "How Google AI Overviews, Perplexity, ChatGPT, and Gemini actually pick which brands to cite — and how Indian operators earn those citations without gaming. A long-form, evidence-led guide.",
  tag: "AI Search + GEO",
  categorySlug: "ai-search-geo",
  readTime: "14 min read",
  banner: "/blogs/banner.jpg",
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) is a subset of SEO that specifically targets citation share in AI-generated answers (Google AI Overviews, Perplexity, ChatGPT, Gemini, Copilot). The fundamentals are the same as classical SEO — depth, authority, schema, structure — but the optimisation targets are different. A page can rank #1 organically and get cited zero times in AI Overviews if the structure isn't right.",
      },
    },
    {
      "@type": "Question",
      name: "Will GEO replace SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. They complement each other. AI Overviews compress click-share on informational queries but not on commercial-intent queries. Both surfaces matter — and pages that win in one tend to win in the other when the underlying content quality is high.",
      },
    },
    {
      "@type": "Question",
      name: "How long until GEO changes show in citation share?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schema changes: 2-6 weeks. Content depth restructure: 6-12 weeks. New topical clusters: 4-9 months. Recovery from blocked AI crawlers: 6-12 months. AI engines are slower to update citation graphs than classical SEO is to update rankings — the lag is real.",
      },
    },
    {
      "@type": "Question",
      name: "Should we block AI crawlers to protect our content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Blocking AI crawlers is one of the most expensive mistakes of 2025-2026. Your competitors who allow crawling will absorb your category's citation share. Protecting content from AI training is a separate problem that should be solved with licensing + paywalls, not with crawler blocks.",
      },
    },
    {
      "@type": "Question",
      name: "What's the single highest-leverage GEO move for an Indian brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adding explicit INR pricing bands + Indian regulatory framework (RERA, SEBI, IRDAI, etc.) to category content with proper schema. Most pages on these topics under-serve the India-specific framing, and the AI engines reward filling that gap with disproportionate citation share.",
      },
    },
  ],
}

export const Content = () => (
  <>
    <div className="bg-[#FFF6F2] border-2 border-[#FF6B35]/20 p-6 rounded-2xl mb-8">
      <h3 className="text-[#FF6B35] font-bold text-lg mb-2">Summary</h3>
      <p className="text-[#2D2D2D] font-medium leading-relaxed">
        AI Overviews now show on 30-50% of Indian informational queries and compress click-share by 20-40%. Citation patterns reward depth + schema + structure — not keyword density. Indian operators who fill the India-specific gaps (compliance, INR pricing, city-level granularity) earn disproportionate citation share.
      </p>
    </div>

    <p className="text-lg leading-relaxed text-[#5A5A5A]">
      If you&apos;re running marketing for an Indian brand in 2026, the most disruptive shift since iOS 14 is happening on <strong>search itself</strong>. Google AI Overviews, Perplexity, ChatGPT, Gemini, and Bing Copilot are reshaping what &quot;ranking&quot; means. The page that ranks #1 isn&apos;t always the page that gets cited — and citations now drive a measurable share of consideration-stage traffic.
    </p>

    <p>
      This is the playbook Frameleads uses across paid + organic engagements. It&apos;s grounded in what we observe on our own AI-citation logs across ~200 engagements, with the caveat that AI-engine behaviour is changing weekly. Treat this as the 2026 baseline, not a forever truth.
    </p>

    <div className="flex gap-4 bg-white border border-[#FFE4D6] p-6 rounded-2xl my-8 shadow-sm">
      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">💡</div>
      <div>
        <h4 className="text-[#2D2D2D] font-bold mb-1">Structural insight</h4>
        <p className="text-[#5A5A5A] text-sm italic">
          AI engines preferentially cite content that (a) directly answers the question in the first 80 words, (b) carries verifiable schema, (c) sits inside a topical cluster of depth, and (d) has a named human author. Generic SEO-optimised content under-performs in AI surfaces even when it ranks #1 organically.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D]">AI Overview footprint in 2026</h2>
    <p>
      Google&apos;s AI Overview (the AI-generated summary at the top of Search results) now appears for ~30-50% of informational queries in India, depending on category. We see broader penetration in education, finance/fintech, healthcare, and SaaS comparison queries — narrower penetration in retail / D2C / real-estate where local intent is dominant.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
      {[
        { l: "AI Overview SERP coverage (India 2026)", v: "30-50%" },
        { l: "Click-share compression on top-3 organic", v: "20-40%" },
        { l: "Top-3 AI-engine cited brands per query", v: "3-7 typical" },
        { l: "Brand visibility from AI citations (no clicks)", v: "Real but unmeasurable in GA4" },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-[#FFE4D6] bg-[#FFF6F2] p-3">
          <div className="text-[11px] uppercase tracking-wider text-[#FF6B35] font-semibold">{s.l}</div>
          <div className="text-[#2D2D2D] font-bold mt-1">{s.v}</div>
        </div>
      ))}
    </div>
    <p>
      The compression isn&apos;t catastrophic — most Indian operators still see net-positive organic traffic year-over-year — but the <strong>mix</strong> has shifted. Informational queries that used to drive top-of-funnel discovery now resolve inside the AI Overview without a click. Brand search and commercial-intent queries are largely unaffected at the click layer, but <strong>brand recall</strong> from AI citations is the new top-of-funnel signal that isn&apos;t measurable in GA4.
    </p>

    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D]">How AI engines actually pick which brands to cite</h2>
    <p>From log analysis + cross-engine comparison across Frameleads&apos; own citation footprint:</p>
    <ol className="list-decimal list-outside ml-6 space-y-3 mt-4">
      <li><strong>Schema-driven extraction.</strong> Article + FAQPage + HowTo + DefinedTerm schemas materially increase citation rate. The AI engines parse JSON-LD directly when present and quote from it preferentially.</li>
      <li><strong>Structured tables.</strong> Markdown / HTML tables with clear column headers get cited far more often than equivalent prose. Comparison tables, pricing bands, channel-mix tables — all over-index on citation share.</li>
      <li><strong>Direct-answer-first prose.</strong> The first paragraph that directly answers the query in 60-80 words is what gets quoted. Bury the answer below a 200-word intro and citation rate drops 60%+.</li>
      <li><strong>Author byline + Person schema.</strong> Pages with named human authors (with Person schema + LinkedIn sameAs) get cited more often than &quot;Editorial Team&quot; bylines — the engines treat them as more accountable.</li>
      <li><strong>Cluster depth.</strong> Single isolated pages get cited less than pages that sit inside a topical cluster (pillar + supporting cells). The engines learn what&apos;s authoritative through cluster signals, not page-by-page.</li>
      <li><strong>Recency markers.</strong> dateModified &lt; 90 days ago + visible timestamp (&quot;Last reviewed 2026-06-07&quot;) correlates with higher citation share.</li>
    </ol>

    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D]">Why most Indian sites under-perform in AI surfaces</h2>
    <p>Three structural gaps create a disproportionate opportunity for Indian operators who fix them:</p>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Gap 1: Compliance + regulatory framing missing</h3>
    <p>
      AI training data is heavily US/EU-skewed. When a user asks &quot;how to run real-estate ads in India&quot;, the engines often cite generic &quot;how to advertise property&quot; content because the India-specific RERA + state-RERA overlays simply aren&apos;t in their training set. A page that explicitly cites K-RERA, M-RERA, RERA-Tamil Nadu disclosure requirements with the right schema gets cited 3-5x more often.
    </p>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Gap 2: INR pricing bands underrepresented</h3>
    <p>
      Most pricing content in training data is in USD. &quot;How much does SEO cost&quot; returns USD bands by default. Explicit INR pricing bands with category context (D2C SEO ₹1.5-6L/mo; Real estate ₹3-12L/mo) — published in structured tables with PriceSpecification schema — earn disproportionate AI citation share for India-specific queries.
    </p>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Gap 3: City-level granularity missing</h3>
    <p>
      AI engines often default to national-level answers when asked city-specific questions. &quot;Best SEO agency in Mumbai&quot; often returns a generic &quot;best SEO agencies in India&quot; summary. Cities with rich locally-authored content (Bangalore + Mumbai + Delhi NCR) get disproportionately better AI surface than cities without — opportunity zones.
    </p>

    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D]">The 5-stage GEO playbook for 2026</h2>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Stage 1: Schema-first audit</h3>
    <p>
      Before touching content, audit what schema your pages currently emit. Target state: every content page emits at least Article + FAQPage + BreadcrumbList + WebPage (with speakable specification). Anything below 4 schema types per page is leaving citation share on the table.
    </p>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Stage 2: Content depth restructure</h3>
    <ul className="list-disc list-outside ml-6 space-y-2">
      <li>Move the direct answer into the first paragraph (60-80 words). Add a <code>.direct-answer</code> CSS class for Speakable schema targeting.</li>
      <li>Build a 4-bullet summary after the hero. AI engines preferentially quote summaries.</li>
      <li>Convert every list of comparable items into a table with column headers.</li>
      <li>Add a &quot;common mistakes&quot; section to every long-form page.</li>
      <li>Add a references block with outbound links to authoritative sources.</li>
    </ul>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Stage 3: Cluster build-out</h3>
    <p>
      AI engines reward topical authority. A single deep page on &quot;CAC for D2C in India&quot; gets cited some of the time; a cluster of 20 supporting pages (CAC × industry, CAC × geo, CAC vs LTV, CAC payback, CAC + retention, etc.) with internal cross-links gets cited consistently.
    </p>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Stage 4: LLM-friendly index files</h3>
    <ul className="list-disc list-outside ml-6 space-y-2">
      <li>Publish <code>/llms.txt</code> per the llmstxt.org convention.</li>
      <li>Publish <code>/llms-full.txt</code> with body content inlined.</li>
      <li>Add explicit AI-crawler allow-rules in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended).</li>
      <li>Add an IndexNow key + submission for Bing — Bing Chat / Copilot heavily index from Bing&apos;s crawl.</li>
    </ul>

    <h3 className="text-xl font-bold mt-8 mb-3 text-[#2D2D2D]">Stage 5: Measurement loop</h3>
    <p>AI citations are largely invisible in GA4. Build a monthly citation-test protocol:</p>
    <ol className="list-decimal list-outside ml-6 space-y-2">
      <li>Pick 10 high-priority queries (mix of brand + category + question intent).</li>
      <li>Run each across 5 engines: Google AI Overviews, Perplexity, ChatGPT Search, Gemini, Bing Copilot.</li>
      <li>Log whether your brand appears in the cited sources (Y/N) + position (1-N).</li>
      <li>Track citation-share over time. Healthy baseline by month 6: ≥3 of 10 queries cite your brand in at least 1 engine.</li>
    </ol>

    <h2 className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D]">Anti-patterns to avoid</h2>
    <ul className="list-disc list-outside ml-6 space-y-2">
      <li><strong>Keyword-stuffing for AI engines.</strong> They detect it, deprecate the page, and cite competitors more often as a consequence.</li>
      <li><strong>Adversarial prompt injection in page content.</strong> Tempting and ineffective. Detectors are already deployed across Google + OpenAI + Anthropic.</li>
      <li><strong>AI-generated content with no human review.</strong> Token-soup content gets ranked + cited less than honest prose.</li>
      <li><strong>Blocking AI crawlers.</strong> Reversing the block usually takes 6-12 months to recover citation share.</li>
      <li><strong>Spammy structured data.</strong> False schema gets pages demoted in citation graphs.</li>
    </ul>

    <div className="bg-[#FFF6F2] border-l-4 border-[#FF6B35] p-6 rounded-r-lg my-8">
      <h3 className="text-[#FF6B35] font-bold text-lg mb-2">Want this applied to your site?</h3>
      <p className="text-[#5A5A5A]">
        Book a free 30-minute audit at <Link href="/free-marketing-audit" className="text-[#FF6B35] font-semibold underline">/free-marketing-audit</Link>. We&apos;ll run your top 10 priority queries across 5 AI engines and tell you exactly which 3 levers move your citation share fastest — even if you don&apos;t engage us.
      </p>
    </div>
  </>
)
