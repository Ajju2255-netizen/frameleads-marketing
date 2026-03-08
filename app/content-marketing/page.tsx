'use client'

import Link from 'next/link'
import {
  PenTool,
  Target,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Brain,
  Layers,
  Sparkles,
  BarChart3,
  Search,
  Users,
  Database,
  Globe,
  Zap,
  FileText,
  Activity,
  MessageSquare,
  TrendingUp,
  Mail,
  Palette,
  Share2,
  MessageCircle,
  Cpu
} from 'lucide-react'

// JSON-LD Structured Data for Content Marketing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Marketing & Semantic SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/content-marketing"
  },
  "description": "Enterprise content marketing specializing in Topical Authority, Information Gain, and Generative Engine Optimization (GEO).",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Content Engineering Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Topical Cluster Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Authority Pillar Content" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search Optimization" } }
    ]
  }
}

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is 'Information Gain' in Content Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Information Gain is an SEO patent by Google that measures how much new information a page provides compared to others on the same topic. Frameleads optimizes for this by including original data, unique case studies, and proprietary frameworks that aren't found in generic AI-generated articles."
      }
    },
    {
      "@type": "Question",
      "name": "How does content marketing affect Google Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High-quality content improves your Landing Page Experience score. By providing a relevant, authoritative destination for your ads, you lower your CPC (Cost Per Click) and improve your Ad Rank."
      }
    },
    {
      "@type": "Question",
      "name": "How is 2026 Content Marketing different from traditional blogging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional blogging was about keywords and volume. 2026 content is about 'Entity Engineering.' We focus on building topical depth and authoritative signals that train AI models to recognize your brand as the industry leader."
      }
    },
    {
      "@type": "Question",
      "name": "What is GEO (Generative Engine Optimization)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO is the practice of structuring content specifically for LLMs like Gemini and SearchGPT. It involves atomic formatting, semantic entities, and trust-building citations to ensure your content is cited as a primary source by AI search tools."
      }
    }
  ]
}

export default function ContentMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

        {/* Organic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        {/* 1. AIO Authority Snapshot */}
        <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Knowledge Box */}
            <div className="bg-white border-2 border-[#FF6B35]/20 rounded-[2rem] p-8 md:p-10 mb-16 shadow-xl shadow-[#FF6B35]/5 relative overflow-hidden backdrop-blur-sm group hover:border-[#FF6B35]/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35] opacity-[0.03] rounded-bl-[5rem]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#FF6B35]">Content Intelligence Summary</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                Frameleads moves beyond traditional &quot;copywriting&quot; to <strong className="text-gray-900">Entity-Based Content Engineering</strong>. We utilize Topical Clustering and Information Gain Scoring to ensure your brand becomes the definitive source in your niche. Our 2026 framework focuses on <strong className="text-[#FF6B35]">SGE-Friendly Formatting</strong> and E-E-A-T Reinforcement, resulting in a 45% increase in organic citations and AI search visibility.
              </p>
            </div>

            {/* 2. The Hero: The Narrative Engine */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight mb-8 flex flex-col items-center">
                <span>Content That Ranks.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Content That Recruits.</span>
                <span>Content That Retains.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Stop publishing &quot;filler.&quot; Start building <strong className="text-gray-900">Digital Equity</strong>. Frameleads creates high-density content ecosystems that dominate search results and train AI models to recognize your brand as the industry leader.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold text-lg rounded-2xl shadow-2xl shadow-[#FF6B35]/30 hover:scale-105 transition-all duration-300 group">
                  Build My Content Roadmap <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* 3. Pillar 1: The "Information Gain" Strategy */}
        <section className="relative z-10 py-24 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-bold text-sm mb-6 border border-[#FF6B35]/20">
                  <Sparkles className="w-4 h-4" />
                  <span>The Information Gain Strategy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Solving the &quot;AI Parity&quot; Problem
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Generic content is dead because AI can generate it in seconds. We focus on <strong className="text-gray-900">High-Value Assets</strong> that AI cannot replicate.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#FF6B35]/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Proprietary Data Reports</h3>
                      <p className="text-gray-600">We conduct original research and surveys to give your brand &quot;Primary Source&quot; status.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#FF6B35]/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Expert-Led Narratives</h3>
                      <p className="text-gray-600">We extract &quot;hidden knowledge&quot; from your team to create content with true Experience and Expertise (E-E-A-T).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#FF6B35]/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Semantic Depth</h3>
                      <p className="text-gray-600">We don&apos;t just write about a keyword; we cover the entire Knowledge Graph of that topic.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-[3rem] blur-3xl opacity-10 animate-pulse" />
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-bl-[5rem]" />
                  <div className="space-y-8">
                    {/* Analysis Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#FF6B35] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Live Analysis</p>
                          <h4 className="font-bold text-gray-900 text-lg">Entity Dominance</h4>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black text-[#FF6B35]">98%</p>
                      </div>
                    </div>

                    {/* Complex Data Visualization */}
                    <div className="space-y-6">
                      {[
                        { label: "Topical Depth", value: "95%", color: "#FF6B35", delay: 0.1 },
                        { label: "Information Gain", value: "98%", color: "#FF9055", delay: 0.3 },
                        { label: "Semantic Trust", value: "92%", color: "#0F172A", delay: 0.5 }
                      ].map((stat, i) => (
                        <div key={i} className="space-y-3">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                            <span className="text-gray-400">{stat.label}</span>
                            <span className="text-gray-900">{stat.value}</span>
                          </div>
                          <div className="h-2.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: stat.value,
                                backgroundColor: stat.color,
                                boxShadow: `0 0 20px ${stat.color}33`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Verification Badge */}
                    <div className="mt-4 pt-8 border-t border-gray-100">
                      <div className="flex items-center gap-4 p-5 bg-[#F8F9FA] rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap className="w-7 h-7 text-[#FF6B35]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                          <p className="font-bold text-gray-900 leading-none group-hover:text-[#FF6B35] transition-colors">AIO Citation Priority: High</p>
                          <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Entity mapping complete
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: The Multi-Format Ecosystem */}
        <section className="relative z-10 py-24 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Content Distribution: One Story, Ten Channels</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We don&apos;t just write a blog and hope for the best. We engineer a <strong className="text-gray-900">Content Velocity</strong> engine.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#FF6B35]/20 group-hover:bg-[#FF6B35] transition-colors">
                  <FileText className="w-7 h-7 text-[#FF6B35] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">The Core Pillar</h3>
                <p className="text-gray-600 leading-relaxed">A deep-dive 3,000-word authority guide that anchors your topical dominance.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500 transition-colors">
                  <MessageSquare className="w-7 h-7 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">Micro-Content</h3>
                <p className="text-gray-600 leading-relaxed">Breaking the pillar into 5 LinkedIn carousels and 10 X (Twitter) threads.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500 transition-colors">
                  <Zap className="w-7 h-7 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">Visual Data</h3>
                <p className="text-gray-600 leading-relaxed">Infographics and charts optimized for Google Image Search and Pinterest.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors">
                  <BarChart3 className="w-7 h-7 text-emerald-500 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">Interactive Assets</h3>
                <p className="text-gray-600 leading-relaxed">Quizzes, calculators, and templates that drive high Dwell Time (a massive ranking signal).</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: GEO (Generative Engine Optimization) */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Engineering Content for the AI-First World</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">We structure every piece of content to be &quot;Scrape-Ready&quot; for Gemini, SearchGPT, and Perplexity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#FF6B35]/20 rotate-3">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Atomic Formatting</h3>
                <p className="text-gray-600 leading-relaxed">Using H2/H3 tags as &quot;Questions&quot; and the first paragraph as a &quot;Direct Answer&quot; for LLMs.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gray-900/20 -rotate-3 text-white">
                  <Layers className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schema-Linked Entities</h3>
                <p className="text-gray-600 leading-relaxed">We use JSON-LD to link your content to recognized industry entities, building semantic trust.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#FF6B35]/20 rotate-1">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Citation Velocity</h3>
                <p className="text-gray-600 leading-relaxed">We focus on getting your unique data cited by other high-authority sites to boost your &quot;Trust Score.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The "Content Value" Matrix */}
        <section className="relative z-10 py-24 bg-[#F8F9FA] border-y border-gray-100 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">The Content Value Matrix</h2>

            <div className="overflow-x-auto rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-500">Content Type</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-500">Purpose</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-[#FF6B35]">Frameleads Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Authority Pillars</td>
                    <td className="px-8 py-6 text-gray-600">Dominating Search & GEO</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Entity-Based Internal Linking</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Case Studies</td>
                    <td className="px-8 py-6 text-gray-600">Middle-Funnel Conversion</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Data-Backed Result Visualization</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">White Papers</td>
                    <td className="px-8 py-6 text-gray-600">Lead Gen / B2B Authority</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Original Industry Research</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Video Scripts</td>
                    <td className="px-8 py-6 text-gray-600">Brand Awareness</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Retention-Optimized Hook Logic</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">Email Funnels</td>
                    <td className="px-8 py-6 text-gray-600">Retention & Sales</td>
                    <td className="px-8 py-6 text-[#FF6B35] font-semibold">Behavioral Trigger Automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="scroll-mt-32 py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">FAQ</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is &quot;Information Gain&quot; in Content Marketing?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Information Gain is an SEO patent by Google that measures how much <strong className="text-gray-900">new information</strong> a page provides compared to others. Frameleads optimizes for this by including original data, unique case studies, and proprietary frameworks that aren&apos;t found in generic AI-generated articles.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">How does content marketing affect Google Ads?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  High-quality content improves your <strong className="text-gray-900">Landing Page Experience score</strong>. By providing a relevant, authoritative destination for your ads, you lower your CPC (Cost Per Click) and improve your overall Ad Rank and Quality Score.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is GEO (Generative Engine Optimization)?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  GEO is the process of structuring content specifically for LLMs like Gemini and SearchGPT. It involves <strong className="text-gray-900">Atomic Formatting</strong>, semantic entities, and trust-building citations to ensure your content is cited as a primary source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Is Your Content Building Equity <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">or Just Taking Up Space?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Most company blogs are &quot;Digital Junk.&quot; Our Content Gap Analysis identifies the exact topics you need to cover to overtake your competitors in the AI Overviews.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Content Gap Analysis <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Marketing Ecosystem</h2>
              <p className="text-gray-600">Sync your content authority with multi-channel performance and search dominance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/ppc-management" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Activity className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">PPC Management</h3>
                <p className="text-gray-600 text-sm">Omni-channel revenue orchestration.</p>
              </Link>

              <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Search className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">SEO Dominance</h3>
                <p className="text-gray-600 text-sm">Search authority framework.</p>
              </Link>

              <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <BarChart3 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
              </Link>

              <Link href="/google-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Target className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Google Ads</h3>
                <p className="text-gray-600 text-sm">Value-Based Bidding & Yield.</p>
              </Link>

              <Link href="/Social-media-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Share2 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Social Marketing</h3>
                <p className="text-gray-600 text-sm">Conversion-first architecture.</p>
              </Link>

              <Link href="/whatsapp-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">WhatsApp Marketing</h3>
                <p className="text-gray-600 text-sm">Conversational ROI.</p>
              </Link>

              <Link href="/analytics-and-automations" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Cpu className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Data & Automation</h3>
                <p className="text-gray-600 text-sm">Unified Data Intelligence.</p>
              </Link>

              <Link href="/conversion-rate-optimization" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Zap className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">CRO Optimization</h3>
                <p className="text-gray-600 text-sm">Behavioral revenue lift.</p>
              </Link>

              <Link href="/perforamance-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <TrendingUp className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Performance Marketing</h3>
                <p className="text-gray-600 text-sm">Real-time revenue convergence.</p>
              </Link>

              <Link href="/email-marketing-and-automation-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Mail className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Email Automation</h3>
                <p className="text-gray-600 text-sm">Lifecycle revenue engine.</p>
              </Link>

              <Link href="/branding" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Palette className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Brand Strategy</h3>
                <p className="text-gray-600 text-sm">Market-Dominant Identity.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
