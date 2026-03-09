'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  ShoppingBag,
  ShoppingCart,
  Target,
  Zap,
  Search,
  Code,
  Share2,
  Video,
  Linkedin,
  Music,
  Smartphone,
  Pin,
  TrendingUp,
  Sparkles,
  Shield,
  Database,
  Server,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Users,
  Activity,
  RefreshCw,
  Cpu,
  Globe,
  Plus,
  Minus,
  ShieldCheck
} from 'lucide-react'

// JSON-LD Structured Data for Shopify Ads Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify Ads Management & Signal Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/shopify-ads"
  },
  "description": "Enterprise-level Shopify advertising specializing in Server-Side CAPI, Performance Max optimization, and Shopify Audiences data enrichment.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Shopify Growth Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server-Side Tracking & CAPI Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google & Meta Feed Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MER-Based Profit Scaling" } }
    ]
  }
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why did my ad performance drop after the Shopify January 2026 update?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shopify moved all marketing pixels to an 'Optimized' data-sharing setting. If your store has a few slow days, Shopify may 'pause' the signal to your ad platforms to protect data privacy. This starves the Meta and Google algorithms of data. We fix this by moving to a Custom Pixel/Server-Side setup that keeps the signal 'Always On.'"
      }
    },
    {
      "@type": "Question",
      "name": "Is Performance Max better than Standard Shopping for Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most stores, PMax is superior for scale, but Standard Shopping is better for control. We often run a 'Hybrid' model: Standard Shopping for your 'Hero' products to control exact keywords, and PMax for 'Catch-All' growth to find new audiences across YouTube and Gmail."
      }
    }
  ]
}

export default function ShopifyAdsPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      q: "Why did my ad performance drop after the Shopify January 2026 update?",
      a: "Shopify moved all marketing pixels to an 'Optimized' data-sharing setting. If your store has a few slow days, Shopify may 'pause' the signal to your ad platforms to protect data privacy. This starves the Meta and Google algorithms of data. We fix this by moving to a Custom Pixel/Server-Side setup that keeps the signal 'Always On.'"
    },
    {
      q: "Is Performance Max better than Standard Shopping for Shopify?",
      a: "For most stores, PMax is superior for scale, but Standard Shopping is better for control. We often run a 'Hybrid' model: Standard Shopping for your 'Hero' products to control exact keywords, and PMax for 'Catch-All' growth to find new audiences across YouTube and Gmail."
    },
    {
      q: "What is MER and why is it better than ROAS for Shopify?",
      a: "MER (Marketing Efficiency Ratio) = Total Revenue / Total Ad Spend across ALL channels. Platform-reported ROAS (e.g., Meta claiming 8x) is often inflated due to overlap and attribution windows. MER gives you the real, unmanipulated view of how much revenue every ad dollar generates across your entire business."
    },
    {
      q: "How does Shopify Audiences help my targeting?",
      a: "Shopify Audiences is a collective intelligence tool that pools anonymized purchase behavior data from thousands of Shopify merchants. This allows you to build lookalike audiences of people who actually buy products like yours — not just people who browse. We integrate this data directly into Meta and Google campaigns for lower CPAs."
    },
    {
      q: "How long does it take to see results after migrating to Server-Side CAPI?",
      a: "Most clients see an immediate 15-30% lift in attributed conversions within the first 7 days of CAPI migration — not because more sales happened, but because the tracking was recovering sales that were already happening but were previously invisible to the platform algorithms. Better data = lower CPAs within 2-3 weeks."
    },
    {
      q: "Can you manage both my Google and Meta campaigns for Shopify?",
      a: "Absolutely — and this is specifically where we excel. Running Google PMax and Meta Advantage+ in isolation creates 'Attribution Wars' where both platforms claim credit for the same sale. We manage them together under a unified MER framework so they complement rather than cannibalize each other."
    }
  ]
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

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* 1. Shopify Velocity Snapshot — Sales Dashboard UI */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(255,107,53,0.15)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">

                {/* LEFT: Sales Dashboard UI */}
                <div className="w-full md:w-1/3 max-w-[320px]">
                  <div className="relative bg-[#0F172A] rounded-[2.5rem] p-5 shadow-2xl overflow-hidden border border-white/10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/10 rounded-full blur-[60px]" />

                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">SHOPIFY_LIVE</span>
                      </div>
                      <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-400 font-mono">MER_4.2x</div>
                    </div>

                    {/* Revenue bar */}
                    <div className="relative z-10 mb-5">
                      <div className="text-[9px] text-slate-500 font-black uppercase mb-1">Today's Revenue</div>
                      <div className="text-3xl font-black text-white tracking-tighter">₹4,82,310</div>
                      <div className="text-[10px] text-green-400 font-bold mt-0.5">↑ +34% vs yesterday</div>
                    </div>

                    {/* Mini bar chart */}
                    <div className="relative z-10 flex items-end gap-1.5 h-16 mb-5">
                      {[30, 55, 40, 70, 60, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          style={{ height: `${h}%` }}
                          className={`flex-1 rounded-sm origin-bottom ${i === 6 ? 'bg-[#FF6B35]' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>

                    {/* Signal rows */}
                    <div className="relative z-10 space-y-2">
                      {[
                        { label: 'CAPI Signal', val: '100%', color: 'text-green-400' },
                        { label: 'PMax ROAS', val: '6.8x', color: 'text-[#FF6B35]' },
                        { label: 'Ad Blocker Bypass', val: 'ACTIVE', color: 'text-blue-400' },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center px-3 py-2 bg-white/5 rounded-xl border border-white/5">
                          <span className="text-[9px] text-slate-400 font-black uppercase">{item.label}</span>
                          <span className={`text-[10px] font-black ${item.color}`}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Text Content */}
                <div className="flex-1 space-y-8 text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6B35] p-3 rounded-2xl">
                      <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Shopify Velocity</span>
                      <p className="text-[10px] text-slate-400 font-mono">SHOPIFY_ROAS_2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-1 h-32 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Shopify Ads Strategy Summary:</h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic">
                        Frameleads engineers <span className="text-slate-900 font-bold underline decoration-[#FF6B35]/30 text-2xl not-italic">High-Fidelity Shopify Ad Ecosystems</span> by solving the &quot;Signal Gap&quot; created by privacy-first browsers. We synchronize Google Performance Max, Meta Advantage+, and Shopify Magic AI to drive a holistic MER of 4.0 or higher.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Marketing Efficiency Ratio</div>
                      <div className="text-3xl font-black text-[#FF6B35]">4.0+ MER</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Attribution Recovered</div>
                      <div className="text-3xl font-black text-green-500">+30%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Hero */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[0.95] tracking-tight mb-10">
                Don&apos;t Just Drive Traffic. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35]">Drive Profitable Revenue.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mt-[-1rem] mb-10">Beyond the Buy Button.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Most Shopify stores are flying blind with degraded tracking and &quot;Ad-Bloat.&quot; Frameleads builds Performance-First Shopify Engines that bridge the gap between your store&apos;s backend and the world&apos;s most powerful ad algorithms. We optimize for LTV and Net Profit—not just clicks.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(255,107,53,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My Shopify Signal Quality <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Signal Integrity Fix */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Recovering Your <span className="text-[#FF6B35]">&quot;Lost&quot; 30%</span> Attribution
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  Standard browser-based pixels are failing. In 2026, we implement a Three-Layer Signal Strategy to rebuild what Shopify&apos;s January 2026 pixel changes destroyed.
                </p>

                <div className="space-y-10">
                  {[
                    {
                      title: "Server-Side CAPI",
                      desc: "We bypass browser ad-blockers by sending purchase data directly from your Shopify server to Meta and Google—delivering 100% signal integrity.",
                      icon: Server
                    },
                    {
                      title: "Optimized Data Sharing",
                      desc: "We manage Shopify's new 'Optimized' pixel settings to ensure your data flow never 'pauses' during slow periods—a common 2026 pitfall for unmanaged stores.",
                      icon: RefreshCw
                    },
                    {
                      title: "First-Party Data Enrichment",
                      desc: "Utilizing Shopify Audiences to leverage collective merchant data, allowing you to find 'High-Intent' buyers that your competitors' pixels can't even see.",
                      icon: Database
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-slate-50 rounded-3xl flex flex-shrink-0 items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Signal dashboard visual */}
              <div className="lg:w-1/2 relative group">
                <div className="relative bg-[#0F172A] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                  <div className="relative z-10 text-left">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">SIGNAL_HEALTH_CHECK</span>
                      </div>
                    </div>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl">
                        <div className="text-[9px] text-red-400 font-black uppercase mb-2">Before Frameleads</div>
                        <div className="text-2xl font-black text-red-400 mb-1">67%</div>
                        <div className="text-[9px] text-slate-400 font-mono">Signal Match Rate</div>
                        <div className="mt-3 space-y-1.5">
                          {['Browser pixel only', 'Pausing on slow days', 'Blind to ad-blockers'].map((t, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              <span className="text-[9px] text-slate-400">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-5 bg-green-500/10 border border-green-500/20 rounded-2xl">
                        <div className="text-[9px] text-green-400 font-black uppercase mb-2">After Frameleads</div>
                        <div className="text-2xl font-black text-green-400 mb-1">100%</div>
                        <div className="text-[9px] text-slate-400 font-mono">Signal Match Rate</div>
                        <div className="mt-3 space-y-1.5">
                          {['Server-Side CAPI', 'Always-On signal', 'First-party data'].map((t, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              <span className="text-[9px] text-slate-400">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-2xl">
                      <div className="text-[10px] font-black text-[#FF6B35] uppercase mb-1">Revenue Recovered</div>
                      <div className="text-3xl font-black text-white">+30% Attribution</div>
                      <div className="text-[9px] text-slate-400 mt-1 font-mono">avg. across migrated stores</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white shadow-2xl p-4 rounded-2xl border border-slate-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Always_On_Signal</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: PMax & Advantage+ Sync */}
        <section className="relative py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full ml-0" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Mastering the AI <span className="text-[#FF6B35]">&quot;Black Box&quot;</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  Google PMax and Meta Advantage+ are powerful but dangerous without Strategic Guardrails. We don&apos;t just &quot;upload and pray&quot; — we architect the rules the AI operates within.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Negative Keyword Scrubbing",
                      desc: "We prevent PMax from wasting budget on branded terms or irrelevant queries that Shopify's native integration often misses.",
                      icon: Target
                    },
                    {
                      title: "Asset Group Segmentation",
                      desc: "We build distinct asset groups for your Best Sellers, New Arrivals, and High-Margin collections—not a single generic campaign.",
                      icon: Sparkles
                    },
                    {
                      title: "Feed Optimization",
                      desc: "We treat your Google Merchant Center and Meta Catalog as SEO assets, optimizing titles and attributes so the AI matches your products to the right search intent.",
                      icon: Search
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-xl transition-all group items-center text-left">
                      <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex flex-shrink-0 items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-[#0F172A] text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left: PMax visual */}
              <div className="lg:w-1/2 relative px-4">
                <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_48px_96px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 uppercase tracking-widest">AI_CAMPAIGN_CONTROL</div>
                        <div className="text-[10px] text-slate-400 font-mono italic">PMAX + ADVANTAGE+</div>
                      </div>
                    </div>
                  </div>

                  {/* Asset Groups */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Best Sellers', roas: '8.4x', budget: '40%', color: 'bg-[#FF6B35]' },
                      { label: 'New Arrivals', roas: '5.1x', budget: '35%', color: 'bg-blue-500' },
                      { label: 'High-Margin', roas: '6.7x', budget: '25%', color: 'bg-emerald-500' },
                    ].map((g, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-black text-slate-900 uppercase">{g.label}</span>
                          <span className="text-xs font-black text-[#FF6B35]">ROAS {g.roas}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: g.budget }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className={`h-full ${g.color} rounded-full`}
                          />
                        </div>
                        <div className="text-[9px] text-slate-400 mt-1 font-mono">{g.budget} of budget</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 p-4 rounded-2xl">
                    <div className="text-[9px] text-slate-500 font-black uppercase mb-1">Negative Keywords Blocked</div>
                    <div className="text-2xl font-black text-white">2,847 <span className="text-green-400 text-xs font-bold tracking-normal">Waste Prevented</span></div>
                  </div>
                </div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-2 bg-[#0F172A] text-white p-5 rounded-[2rem] shadow-2xl z-20"
                >
                  <div className="text-[9px] text-slate-500 font-black uppercase mb-1">BLENDED MER</div>
                  <div className="text-2xl font-black text-[#FF6B35]">4.8x</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: MER Over ROAS */}
        <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-left mb-20">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">The Metric That <span className="text-[#FF6B35]">Actually Matters</span></h2>
              <p className="text-xl text-slate-400 max-w-3xl">In 2026, platform-reported ROAS is often inflated. We focus on MER (Total Revenue / Total Ad Spend) — the only number that lies about your business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Profit-First Bidding",
                  desc: "We set Target ROAS (tROAS) based on your COGS, ensuring every sale contributes to your bottom line, not just your top line.",
                  icon: DollarSign
                },
                {
                  title: "New vs. Returning Analysis",
                  desc: "We use Shopify's backend data to bid aggressively for new customer acquisition while keeping retargeting costs lean.",
                  icon: Users
                },
                {
                  title: "Post-Purchase Attribution",
                  desc: "Using post-purchase surveys to verify where your high-value customers actually come from—a human check against AI reporting.",
                  icon: Activity
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-[#FF6B35]/50 transition-all group text-left">
                  <div className="w-16 h-16 bg-[#FF6B35]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-all">
                    <item.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* MER formula callout */}
            <div className="mt-16 p-8 bg-white/5 border border-[#FF6B35]/20 rounded-[2rem] text-center">
              <div className="text-slate-400 text-sm font-black uppercase tracking-widest mb-3">The Frameleads Formula</div>
              <div className="text-4xl md:text-5xl font-black text-white">
                MER = <span className="text-[#FF6B35]">Total Revenue</span> / <span className="text-slate-400">Total Ad Spend</span>
              </div>
              <div className="text-slate-500 text-sm mt-3 font-mono">Target: 4.0x minimum • Elite clients: 6.0x+</div>
            </div>
          </div>
        </section>

        {/* 6. Performance Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4">Shopify Performance Matrix</h2>
              <p className="text-xl text-slate-500">Native Shopify Setup vs. Frameleads Managed Engine — the definitive comparison.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-slate-400">Native Shopify Setup</th>
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Managed Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feature: "Tracking Method", native: "Browser-Based Pixel", frameleads: "Server-Side CAPI (100% Signal)" },
                    { feature: "Attribution", native: "Last-Click (Inaccurate)", frameleads: "Multi-Touch / MER-Based" },
                    { feature: "Feed Quality", native: "Auto-Generated (Generic)", frameleads: "SEO-Optimized & Category-Mapped" },
                    { feature: "Bidding Logic", native: "Automated (Spend-Heavy)", frameleads: "Profit-Centric (Margin-Protected)" },
                    { feature: "Creative Testing", native: "Static / Minimal", frameleads: "High-Velocity UGC & Dynamic AI" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-6 font-black text-slate-900">{row.feature}</td>
                      <td className="px-6 py-6 text-slate-400 font-medium">{row.native}</td>
                      <td className="px-6 py-6 text-[#FF6B35] font-black">{row.frameleads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-40 px-6 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-8">
                Shopify Tracking & <br />
                <span className="text-[#FF6B35]">Ad Strategy FAQ.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic">Solving the most critical conversion challenges for 2026.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openFaq === i
                      ? "bg-white border-[#FF6B35]/30 shadow-2xl scale-[1.02]"
                      : "bg-white/50 border-slate-100 hover:border-[#FF6B35]/20 hover:bg-white"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 md:px-12 py-10 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-mono font-bold transition-colors ${openFaq === i ? "text-[#FF6B35]" : "text-slate-400"}`}>
                        0{i + 1}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-black transition-colors ${openFaq === i ? "text-[#0F172A]" : "text-slate-600 group-hover:text-[#0F172A]"}`}>
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 ml-4 p-4 rounded-full transition-all duration-500 ${openFaq === i ? "bg-[#FF6B35] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35]"
                      }`}>
                      <Plus className={`w-6 h-6 transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 md:px-12 pb-12 ml-14 md:ml-20">
                          <div className="w-full h-px bg-slate-100 mb-8" />
                          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                            {faq.a}
                          </p>
                          <div className="mt-8 flex items-center gap-4 text-[#FF6B35] font-bold text-sm uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Signal Integrity Verified</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10 text-left">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1]">
                Is Your Shopify Tracking <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35]">Leaking Revenue?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mb-16 leading-relaxed">
                Most Shopify stores lose 20-30% of their ad efficiency due to &quot;Silent Signal Decay.&quot; Our Shopify Performance Audit will verify your pixel health, analyze your Feed Quality, and show you the exact MER needed to double your scale. Let&apos;s fix the foundation and start growing.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#FF6B35] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Shopify Profit Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Internal Link Silo */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Scale across every high-velocity channel with Frameleads intelligence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <link.icon className="w-12 h-12 text-[#FF6B35] mx-auto mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 text-center">{link.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-center">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </>
  )
}
