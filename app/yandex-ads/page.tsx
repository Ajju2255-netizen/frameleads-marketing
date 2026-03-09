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
  Pin,
  Brain,
  TrendingUp,
  Fingerprint,
  Layers,
  Activity,
  Award
} from 'lucide-react'

// JSON-LD Structured Data for Yandex Ads Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yandex Ads Management & Neural Performance Growth",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/yandex-ads"
  },
  "description": "Enterprise-level Yandex Direct advertising, YandexART AI creative generation, and Ecomm+ performance scaling for the CIS and Middle East markets.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Eurasian Growth Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YandexART 2.0 Creative Generation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecomm+ Conversion Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metrica Signal Optimization" } }
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
      "name": "Do I need a Russian website to run Yandex Ads in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not mandatory, it is highly recommended. Russian users overwhelmingly prefer localized content. Frameleads provides Neural Localization, using YandexGPT to translate and transcreate your landing pages to ensure they resonate with local cultural expectations."
      }
    },
    {
      "@type": "Question",
      "name": "How does Yandex 'Pay-per-Conversion' work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You set a target price you are willing to pay for a sale (e.g., $10). Yandex then shows your ads for free until a conversion is recorded via Metrica. At that point, you are charged the $10. This makes Yandex one of the lowest-risk platforms for international brands."
      }
    }
  ]
}

export default function YandexAdsPage() {
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

      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* 1. Eurasian Growth Snapshot — Neural UI */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(255,107,53,0.12)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 text-left">

                {/* LEFT: Neural Network Status UI */}
                <div className="w-full md:w-1/3 max-w-[320px]">
                  <div className="relative bg-[#1A1A1A] rounded-[2.5rem] p-6 shadow-2xl overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-[40px]" />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-[#FF6B35]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">NEURAL_ENGINE</span>
                      </div>
                      <div className="px-2 py-0.5 bg-orange-500/20 border border-orange-500/20 rounded-full text-[9px] text-orange-400 font-black uppercase">CIS_MARKET_READY</div>
                    </div>

                    {/* Neural Visual */}
                    <div className="mb-8 relative h-32 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#FF6B35]/20 blur-lg rounded-full animate-pulse" />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="relative w-16 h-16 border-2 border-dashed border-[#FF6B35]/30 rounded-full flex items-center justify-center"
                        >
                          <Cpu className="w-8 h-8 text-[#FF6B35]" />
                        </motion.div>
                        {/* Orbiting nodes */}
                        <div className="absolute top-0 left-1/2 -ml-1 -mt-1 w-2 h-2 bg-[#FF6B35] rounded-full shadow-[0_0_8px_#FF6B35]" />
                        <div className="absolute bottom-0 left-1/2 -ml-1 -mb-1 w-2 h-2 bg-[#FF6B35] rounded-full shadow-[0_0_8px_#FF6B35]" />
                      </div>
                    </div>

                    {/* Data Streams */}
                    <div className="space-y-4 relative z-10">
                      {[
                        { label: 'YandexART_Gen', val: 'ACTIVE', color: 'text-green-400' },
                        { label: 'Increment_Profit', val: '+25%', color: 'text-[#FF6B35]' },
                        { label: 'Ecomm+_Status', val: 'OPTIMIZED', color: 'text-blue-400' }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                          <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{item.label}</span>
                          <span className={`text-[10px] font-mono ${item.color} font-bold`}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Text Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6B35] p-3 rounded-2xl">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Eurasian Growth Protocol</span>
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Neural_First_Ecosystem_2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-1.5 h-36 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Yandex Ads Strategy Summary:</h3>
                      <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-semibold italic">
                        Frameleads engineers <span className="text-slate-900 font-black underline decoration-[#FF6B35]/30 text-3xl not-italic">Neural-First Yandex Ecosystems</span> by leveraging YandexART 2.0 for automated creative production and Yandex Metrica for privacy-safe attribution. We deliver an average 25% increase in incremental profit by focusing on Deep Behavioral Intent.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-extrabold uppercase mb-1">Creative AI</div>
                      <div className="text-3xl font-black text-[#FF6B35]">YandexART 2.0</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-extrabold uppercase mb-1">Search Evolution</div>
                      <div className="text-3xl font-black text-[#0F172A]">Neural Search</div>
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
              <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                Beyond Search. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35]">Into the Neural Era.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-black text-slate-300 mt-[-1rem] mb-12 uppercase tracking-tight">The AI Gateway to 100M+ Users.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
              In 2026, Yandex is no longer just a search engine—it&apos;s a predictive AI ecosystem. Frameleads builds High-Retention Yandex Direct Campaigns that utilize YandexART to generate brand-compliant visuals and YandexGPT to adapt copy in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-full shadow-[0_20px_40px_-12px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                Audit My Yandex Market Potential <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Neural Creative Production */}
        <section className="relative py-32 bg-white overflow-hidden text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  The End of Creative Fatigue: <span className="text-[#FF6B35]">Automated Ad Generation</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  In 2026, we don&apos;t just &quot;upload banners.&quot; We deploy Neural Creative Stacks that replace manual design with real-time diffusion networks.
                </p>

                <div className="space-y-12">
                  {[
                    {
                      title: "YandexART 2.0 Integration",
                      desc: "We use Yandex’s native diffusion network to generate hyper-realistic product images and logos directly within the interface for 100+ visual iterations.",
                      icon: Palette
                    },
                    {
                      title: "Real-Time Copy Adaptation",
                      desc: "Utilizing YandexGPT to rewrite headlines in milliseconds to match the specific linguistic nuance of the user’s search query and context.",
                      icon: Languages
                    },
                    {
                      title: "Brand-Book Compliance",
                      desc: "We set AI 'Guardrails' that ensure every generated image and text string adheres strictly to your brand's visual identity and tone of voice.",
                      icon: Shield
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex flex-shrink-0 items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
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

              {/* Right: AI Creative Visual */}
              <div className="lg:w-1/2 relative">
                <div className="relative bg-slate-50 rounded-[4rem] p-12 border border-slate-100 shadow-2xl overflow-hidden group">
                  <div className="flex items-center gap-4 mb-10 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">A</div>
                    <div>
                      <div className="font-black text-slate-900 leading-none italic uppercase">YandexART Engine</div>
                      <div className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-widest">Generating_Creative_42...</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-white rounded-3xl border border-slate-200 overflow-hidden relative group-hover:scale-105 transition-all">
                      <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                      <Camera className="absolute inset-0 m-auto w-8 h-8 text-slate-300" />
                    </div>
                    <div className="aspect-square bg-white rounded-3xl border border-slate-200 overflow-hidden relative group-hover:scale-105 transition-all delay-75">
                      <div className="absolute inset-0 bg-slate-100 animate-pulse" />
                      <Camera className="absolute inset-0 m-auto w-8 h-8 text-slate-200" />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-[#0F172A] rounded-[2rem] text-white">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">GPT Adaptation</div>
                    <p className="text-sm font-bold italic text-orange-200">&quot;Matching search intent to local CIS terminology...&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Ecomm+ and Scaling */}
        <section className="relative py-32 bg-[#F9FAFB] overflow-hidden text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Risk-Free Scaling with <span className="text-[#FF6B35]">Ecomm+ Performance</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  We move away from CPC (Cost-per-Click) toward Performance-Only Models. No sales, no fee.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Conversion-Based",
                      desc: "We set up campaigns where you only pay for completed orders (CPA) or a specific target Return on Ad Spend (ROAS).",
                      icon: TrendingUp
                    },
                    {
                      title: "Dynamic Feeds",
                      desc: "Synchronizing Shopify inventory with Yandex Smart Banners to automatically show the exact product intent to users.",
                      icon: ShoppingBag
                    },
                    {
                      title: "Neural Scaling",
                      desc: "Using Yandex’s internal neural models to find users who share purchasing behavior of your top 1% customers.",
                      icon: Layers
                    },
                    {
                      title: "Metrica Signals",
                      desc: "First-party data signals to track users across phone, laptop, and Yandex Smart TV ecosystems.",
                      icon: Activity
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#FF6B35] group-hover:text-white transition-all mb-6">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-[#0F172A] text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left: Scaling visual */}
              <div className="lg:w-1/2 relative">
                <div className="bg-[#0F172A] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">ECOMM_PLUS_ACTIVE</div>
                      <div className="font-black text-white italic uppercase tracking-tighter">CPA_MAX_SCALE</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black uppercase">Revenue Stream</span>
                        <span className="text-[#FF6B35] font-mono">+4.2x ROAS</span>
                      </div>
                      <div className="w-full h-24 flex items-end gap-2">
                        {[40, 60, 45, 90, 70, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            className="flex-1 bg-gradient-to-t from-[#FF6B35] to-orange-300 rounded-t-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Metrica Signal Mastery */}
        <section className="relative py-32 bg-white text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Solving the Attribution Gap with <span className="text-[#FF6B35]">Yandex Metrica</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  In a world without cookies, Metrica is your most powerful asset. We don&apos;t just track sales; we watch behavior.
                </p>

                <div className="space-y-10">
                  {[
                    {
                      title: "Session Replay & Heatmaps",
                      desc: "We watch how users interact with your site to identify 'Friction Points' that kill conversion—exclusive to the Yandex ecosystem.",
                      icon: Play
                    },
                    {
                      title: "Offline Conversion Uploads",
                      desc: "Bridging the gap between your CRM (calls, visits) and Yandex Direct to give AI a complete picture of your total ROI.",
                      icon: Database
                    },
                    {
                      title: "UserID Tracking",
                      desc: "Implementing first-party data signals to track a single user across their phone, laptop, and Yandex Smart TV apps.",
                      icon: Fingerprint
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#0F172A] mb-2 uppercase tracking-tighter">{item.title}</h3>
                        <p className="text-slate-500 text-md leading-relaxed font-semibold italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Metrica Visual */}
              <div className="lg:w-1/2 relative">
                <div className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse" />
                      <span className="text-[10px] font-black uppercase text-white tracking-widest text-left">METRICA_LIVE_SESSION</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">USER_ID: 88294_CIS</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/5 rounded-full w-3/4" />
                    <div className="h-4 bg-white/5 rounded-full w-1/2" />
                    <div className="h-4 bg-[#FF6B35]/20 rounded-full w-5/6 relative overflow-hidden">
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[#FF6B35]/40"
                      />
                    </div>
                  </div>
                  <div className="mt-10 pt-6 border-t border-white/10">
                    <div className="text-[9px] text-slate-500 font-black uppercase mb-2">Intent_Heatmap</div>
                    <div className="flex gap-1 h-3">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className={`flex-1 rounded-full ${i > 12 ? 'bg-[#FF6B35]' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Global Ad-Tech Matrix */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Global Ad-Tech Matrix</h2>
              <p className="text-xl text-slate-400 font-medium font-bold italic">Yandex vs. Google Ads: The Neural Advantage.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 italic">Feature</th>
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 italic">Google Ads (Global)</th>
                    <th className="px-8 py-8 text-xs font-black uppercase tracking-[0.2em] text-[#FF6B35] italic">Frameleads Yandex Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "Primary AI", google: "Gemini / PMax", yandex: "YandexART 2.0 / YandexGPT" },
                    { feature: "Tracking Fidelity", google: "Google Analytics 4", yandex: "Metrica (with Session Replay)" },
                    { feature: "Retargeting Power", google: "High (GDN)", yandex: "Superior (YAN - 55k+ Partners)" },
                    { feature: "Market Dominance", google: "Global", yandex: "Russia, CIS, Middle East (UAE)" },
                    { feature: "Payment Models", google: "Mostly CPC / tCPA", yandex: "Guaranteed Viewability / Post-Payment" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-8 font-black text-white italic tracking-tight">{row.feature}</td>
                      <td className="px-8 py-8 text-slate-400 font-bold uppercase text-xs">{row.google}</td>
                      <td className="px-8 py-8 text-[#FF6B35] font-black italic tracking-tighter text-xl uppercase">{row.yandex}</td>
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-20 text-left uppercase">Yandex Neural Era FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Do I need a Russian website to run Yandex Ads in 2026?",
                  a: "While not mandatory, it is highly recommended. Russian users overwhelmingly prefer localized content. Frameleads provides Neural Localization, using YandexGPT to translate and transcreate your landing pages to ensure they resonate with local cultural expectations."
                },
                {
                  q: "How does Yandex 'Pay-per-Conversion' work?",
                  a: "You set a target price you are willing to pay for a sale (e.g., $10). Yandex then shows your ads for free until a conversion is recorded via Metrica. At that point, you are charged the $10. This makes Yandex one of the lowest-risk platforms for international brands."
                },
                {
                  q: "What is the YAN and how does it compare to GDN?",
                  a: "The Yandex Advertising Network (YAN) includes 55,000+ premium partners, including major Russian media outlets and services. It typically offers higher quality placements and better viewability metrics than the standard Google Display Network in the CIS region."
                },
                {
                  q: "Is YandexART compliant with my brand guidelines?",
                  a: "Yes. We set AI 'Guardrails' within the YandexART API that restrict color palettes, logo placement, and stylistic choices, ensuring every generated asset is 100% brand-compliant while benefiting from neural optimization."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter">{faq.q}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium italic">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#FF6B35] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF8A50] opacity-20 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
                Is Your Brand <br />Ready for the <br />Neural Shift?
              </h2>
              <p className="text-xl md:text-3xl text-orange-100 max-w-4xl mb-16 leading-relaxed font-bold italic uppercase tracking-tighter">
                Most agencies are still running Yandex Ads like it’s 2022. We’ve mastered the Neural Stack. Our Yandex Performance Audit will test your site speed within the CIS, evaluate your &quot;Signal Integrity&quot; in Metrica, and build a 2026 roadmap.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-white text-[#FF6B35] font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group uppercase italic tracking-tighter">
                Claim My Yandex Neural Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Internal Link Silo */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24">
            <div className="mb-20 text-left uppercase">
              <h2 className="text-3xl md:text-6xl font-black text-[#0F172A] mb-6 tracking-tighter italic">Global Growth Ecosystem</h2>
              <p className="text-xl text-slate-500 font-bold uppercase tracking-widest leading-none underline decoration-[#FF6B35]/30">Scale across every high-velocity channel.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    <link.icon className="w-12 h-12 text-[#FF6B35] group-hover:scale-110 transition-transform" />
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
