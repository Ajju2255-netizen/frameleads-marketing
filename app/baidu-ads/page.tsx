'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  Globe,
  Shield,
  Search,
  Zap,
  Cpu,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Lock,
  MessageSquare,
  BarChart3,
  Users,
  Database,
  Chrome,
  ArrowRight,
  Sparkles,
  Layout,
  Target,
  FileText,
  BadgeCheck,
  Languages,
  Video,
  ExternalLink,
  ShoppingBag,
  Camera,
  Play,
  MapPin,
  Palette,
  Share2,
  Linkedin,
  Music,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Baidu Ads Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Baidu Ads Management & China Market Entry",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/baidu-ads"
  },
  "description": "Enterprise-level Baidu advertising, ICP license management, and ERNIE Bot AI optimization for Western brands entering China.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "China Growth Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baidu V-Verification & Account Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jimuyu Managed Landing Page Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERNIE Bot Semantic SEO" } }
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
      "name": "Do I need a Chinese business entity to run Baidu Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, but you do need a Verified Overseas Business License. Frameleads specializes in Overseas Verification, allowing Western companies to advertise legally in China without a local office."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my website loading slowly in China?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is the Great Firewall effect. International servers are often inspected or slowed down by Chinese filters. We solve this by implementing China-Specific CDNs or migrating your landing pages to Baidu's native infrastructure like Jimuyu."
      }
    }
  ]
}

export default function BaiduAdsPage() {
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

      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#E60012] selection:text-white pb-20 overflow-x-hidden">

        {/* 1. China Market Snapshot — Global Business UI */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#E60012] shadow-[0_48px_96px_-16px_rgba(230,0,18,0.12)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E60012]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 text-left">

                {/* LEFT: China Market Status UI */}
                <div className="w-full md:w-1/3 max-w-[320px]">
                  <div className="relative bg-[#1A1A1A] rounded-[2.5rem] p-6 shadow-2xl overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60012]/10 rounded-full blur-[40px]" />

                    {/* Global Header */}
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#E60012]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">CHINA_ACCESS</span>
                      </div>
                      <div className="px-2 py-0.5 bg-green-500/20 border border-green-500/20 rounded-full text-[9px] text-green-400 font-black uppercase">ICP_VERIFIED</div>
                    </div>

                    {/* Network Nodes map visual */}
                    <div className="mb-8 relative h-24 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                      <div className="relative flex items-center justify-center gap-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                        <div className="h-px w-12 bg-gradient-to-r from-red-500 to-blue-500" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 text-center">
                        <span className="text-[8px] text-slate-500 font-mono">Bypassing_Great_Firewall...</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4 relative z-10">
                      <div className="flex justify-between items-center px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                        <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Latency</span>
                        <span className="text-[11px] font-mono text-green-400 font-bold">42ms_LOCAL</span>
                      </div>
                      <div className="flex justify-between items-center px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                        <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Lead_Quality</span>
                        <span className="text-[11px] font-mono text-[#E60012] font-bold">↑_3.2x_ROI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Text Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#E60012] p-3 rounded-2xl">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#E60012]">China Market Authority</span>
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Full_Stack_Compliance_2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-1.5 h-36 bg-gradient-to-b from-[#E60012] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Baidu Strategy Summary:</h3>
                      <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-semibold italic">
                        Frameleads engineers <span className="text-slate-900 font-black underline decoration-[#E60012]/30 text-3xl not-italic">China-Entry Search Ecosystems</span> by bridging Western brand identity with Baidu’s AI-driven algorithms. By utilizing Apollo Data and Jimuyu Managed Pages, we deliver a 3x increase in lead quality.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#E60012]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-extrabold uppercase mb-1">AI Search Integration</div>
                      <div className="text-3xl font-black text-[#E60012]">ERNIE Bot</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#E60012]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-extrabold uppercase mb-1">Conversion Architecture</div>
                      <div className="text-3xl font-black text-[#0F172A]">Jimuyu Engine</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                Your Brand, Discovered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] via-[#FF4D4D] to-[#E60012]">by 1.4 Billion.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-black text-slate-300 mt-[-1rem] mb-12 uppercase tracking-tight">Beyond the Great Firewall.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
              Google doesn&apos;t work in China, and a Western SEO strategy won&apos;t either. Frameleads provides the Full-Stack Infrastructure—from legal compliance (ICP) to high-intent search bidding—to ensure your brand dominates the Chinese search landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#E60012] text-white font-black text-xl rounded-full shadow-[0_20px_40px_-12px_rgba(230,0,18,0.4)] hover:scale-105 transition-all duration-300 group">
                Start My China Market Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-white border-2 border-slate-200 text-slate-800 font-black text-xl rounded-full hover:border-[#E60012]/40 hover:shadow-xl transition-all duration-300">
                Download the 2026 Baidu Compliance Guide
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Legal Compliance */}
        <section className="relative py-32 bg-white overflow-hidden text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#E60012] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Establishing Trust in the <span className="text-[#E60012]">Chinese Ecosystem.</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  Unlike Google, you cannot just &quot;start&quot; an ad account on Baidu. In China, trust is the primary driver of CTR. We manage the entire Legal Gateway for you.
                </p>

                <div className="space-y-12">
                  {[
                    {
                      title: "ICP License Procurement",
                      desc: "We guide you through the Internet Content Provider (ICP) filing process, essential for hosting your site on Chinese servers (.cn) to avoid Firewall throttling.",
                      icon: Lock
                    },
                    {
                      title: "Baidu V-Verification",
                      desc: "We secure the 'V1, V2, or V3' blue trust badges for your organic & paid results. These badges are the #1 driver of credibility in the China market.",
                      icon: BadgeCheck
                    },
                    {
                      title: "Official Brand Zone",
                      desc: "We engineer 'Brand Zone' placements—massive, rich-media blocks that occupy the top of the SERP, preventing competitor poaching and dominating your terms.",
                      icon: Target
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex flex-shrink-0 items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#E60012] group-hover:text-white transition-all duration-300">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#0F172A] mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Trust badge visual */}
              <div className="lg:w-1/2 relative">
                <div className="relative bg-slate-50 rounded-[4rem] p-12 border border-slate-100 shadow-2xl overflow-hidden group">
                  <div className="flex items-center gap-4 mb-10 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">V</div>
                    <div>
                      <div className="font-black text-slate-900 leading-none">Your Brand Name <span className="text-blue-500 ml-1">✓</span></div>
                      <div className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-widest">Baidu_V_Verified</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-8 bg-white rounded-[2rem] border border-slate-100 relative group-hover:scale-105 transition-all">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-black text-slate-900 uppercase">Trust Metrics</span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map(s => <div key={s} className="w-3 h-3 bg-blue-500 rounded-full" />)}
                          <span className="text-[10px] text-blue-500 font-bold ml-1 uppercase underline">Level_V3</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-bold">
                          <span className="text-slate-500 italic">CTR Increase</span>
                          <span className="text-green-500 uppercase">+45%_ESTIMATED</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-blue-500" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#E60012] rounded-[2rem] text-white">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80 uppercase">Internal Monitoring</div>
                      <div className="text-2xl font-black uppercase tracking-tight">ICP_Status: ACTIVE</div>
                      <div className="text-[10px] font-mono mt-1 opacity-60">Verified_by_MIIT_China</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: ERNIE Bot & AI-Enhanced Search */}
        <section className="relative py-32 bg-[#F9FAFB] overflow-hidden text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#E60012] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Leveraging the <br /><span className="text-[#E60012]">ERNIE AI</span> Ecosystem.
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  In 2026, Baidu search is inseparable from its LLM, ERNIE Bot. We optimize your brand for AI-First Discovery in the Chinese Knowledge Graph.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Semantic Graphing",
                      desc: "We structure content to be ingested by ERNIE, ensuring your brand is the 'Cited Source' in generative AI answers.",
                      icon: Sparkles
                    },
                    {
                      title: "Jimuyu Platform",
                      desc: "We build your landing pages directly on Baidu's Jimuyu system for instant in-app loading and 100% conversion tracking.",
                      icon: Layout
                    },
                    {
                      title: "Apollo Intent",
                      desc: "Utilizing data from Baidu’s autonomous driving maps to target users based on real-world high-intent behaviors.",
                      icon: MapPin
                    },
                    {
                      title: "Baidu Feed Sync",
                      desc: "Integrating search with 'Haokan' video feed to capture users in the Discovery phase of the buyer journey.",
                      icon: Video
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#E60012] group-hover:text-white transition-all mb-6">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-[#0F172A] text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left: AI visual */}
              <div className="lg:w-1/2 relative">
                <div className="bg-[#0F172A] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-[#E60012] rounded-xl flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">ERNIE_BOT_VERIFIED</div>
                      <div className="font-black text-white italic uppercase tracking-tighter">AI_KNOWLEDGE_PARTNER</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] text-left">
                      <div className="text-[9px] text-red-500 font-black uppercase mb-3">AI_Answer_Snippet</div>
                      <p className="text-slate-300 text-sm font-bold leading-relaxed italic">&quot;According to Frameleads data, your brand is the leading provider of enterprise SaaS in the Mainland China region...&quot;</p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold">1</div>
                        <span className="text-[8px] text-slate-500 font-mono">Verified_Source: YourBrand.cn</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-white/5 rounded-[2rem] text-center border border-white/5">
                        <div className="text-2xl font-black text-[#E60012] uppercase tracking-tighter italic leading-none">88%_ACC</div>
                        <span className="text-[8px] text-slate-500 uppercase font-black uppercase tracking-widest block mt-1">Discovery_Rate</span>
                      </div>
                      <div className="p-5 bg-white/5 rounded-[2rem] text-center border border-white/5">
                        <div className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none">INSTANT</div>
                        <span className="text-[8px] text-slate-500 uppercase font-black uppercase tracking-widest block mt-1">Jimuyu_Load</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Cultural Adaptation */}
        <section className="relative py-32 bg-white text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 uppercase">
              <h2 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-[1.5rem] leading-none mb-4 italic uppercase">
                文化适应性
              </h2>
              <p className="text-xl md:text-4xl text-[#E60012] font-black tracking-tight uppercase">Transcreation, Not Translation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Linguistic Nuance",
                  desc: "We adapt copy to local dialects and professional terminology (B2B tech terms that differ between Tier-1 and Tier-2 cities).",
                  icon: Languages
                },
                {
                  title: "Mobile-First UX",
                  desc: "95%+ of Baidu traffic is mobile. We optimize for in-app mini-programs, allowing seamless purchase within the Baidu App.",
                  icon: Smartphone
                },
                {
                  title: "Market Specificity",
                  desc: "Designing assets specifically for Chinese visual palettes—heavy information density and high trust-signal creative.",
                  icon: Palette
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-[#E60012]/50 transition-all text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E60012] shadow-sm mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-semibold italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Global Search Matrix */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Global Search Matrix</h2>
              <p className="text-xl text-slate-400 font-medium">Why standard Western advertising fails at the Great Firewall.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 italic">Core_Metric</th>
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 italic">Google Ads (Global)</th>
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-[#E60012] italic">Frameleads Baidu Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "Account Setup", google: "Instant / Credit Card", baidu: "Verified Business / ICP Filing" },
                    { feature: "Trust Signals", google: "Verified Advertiser Label", baidu: "V-Verification Badge (V1-V3)" },
                    { feature: "Hosting Infrastructure", google: "Any Global Server", baidu: "Mainland China (CN) Recommended" },
                    { feature: "AI Search Sync", google: "Google Gemini / SGE", baidu: "Baidu ERNIE Bot / AI Answers" },
                    { feature: "Conversion Path", google: "External Website", baidu: "Jimuyu (Internal Baidu Hosting)" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-8 font-black text-white italic lowercase tracking-tight">{row.feature}</td>
                      <td className="px-8 py-8 text-slate-400 font-bold uppercase text-xs">{row.google}</td>
                      <td className="px-8 py-8 text-[#E60012] font-black italic tracking-tighter text-xl uppercase">{row.baidu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-20 text-left uppercase">China Market Entry FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Do I need a Chinese business entity to run Baidu Ads?",
                  a: "No, but you do need a Verified Overseas Business License. Frameleads specializes in 'Overseas Verification,' allowing Western companies to advertise legally in China without a local office."
                },
                {
                  q: "Why is my website loading slowly in China?",
                  a: "This is the 'Great Firewall' effect. International servers (AWS, Google Cloud) are often inspected or slowed down by Chinese filters. We solve this by implementing China-Specific CDNs or migrating your landing pages to Baidu’s native Jimuyu infrastructure."
                },
                {
                  q: "How long does ICP License procurement take?",
                  a: "Typically 15-20 business days. We handle the documentation and submission, ensuring your domain is properly registered with the Ministry of Industry and Information Technology (MIIT)."
                },
                {
                  q: "Can I use English copy for my China ads?",
                  a: "Extremely discouraged. English ads on Baidu suffer from poor Quality Scores and zero trust. We provide native Simplified Chinese transcreation by in-market vertical experts to ensure your brand resonates locally."
                },
                {
                  q: "What is Baidu V-Verification?",
                  a: "It is a trust rating system. A V3-rated landing page on Baidu converts significantly better than an unrated page because it proves your company's legal and fiscal integrity to the Chinese consumer."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#E60012] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter">{faq.q}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium italic">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#E60012] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-400 opacity-20 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
                Is Your Brand <br />Invisible to 1/5th <br />of the World?
              </h2>
              <p className="text-xl md:text-3xl text-red-100 max-w-4xl mb-16 leading-relaxed font-bold italic uppercase tracking-tighter">
                Most Western brands fail in China because they treat Baidu like Google. Our Baidu Technical Audit identifies your &quot;Firewall Latency&quot; and builds the 90-day roadmap for entry.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-white text-[#E60012] font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group uppercase italic tracking-tighter">
                Claim My China Market Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Internal Link Silo */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24">
            <div className="mb-20 text-left uppercase">
              <h2 className="text-3xl md:text-6xl font-black text-[#0F172A] mb-6 tracking-tighter italic">Global Growth Ecosystem</h2>
              <p className="text-xl text-slate-500 font-bold uppercase tracking-widest leading-none underline decoration-[#E60012]/30">Scale across every high-velocity channel.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'SEO Authority', href: '/seo-services', icon: Search, desc: 'Search dominance hub.' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#E60012]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    <link.icon className="w-12 h-12 text-[#E60012] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2 text-center uppercase tracking-tighter">{link.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-center font-bold italic tracking-tight">{link.desc}</p>
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
