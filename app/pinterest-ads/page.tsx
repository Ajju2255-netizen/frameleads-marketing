'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone,
  Camera,
  Sparkles,
  Zap,
  BarChart3,
  Search,
  MessageSquare,
  Music,
  Activity,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Play,
  Layout,
  Target,
  ShieldCheck,
  Cpu,
  Globe,
  Palette,
  Code,
  Mail,
  Video,
  Linkedin,
  Users,
  ShoppingBag,
  Share2,
  TrendingUp,
  Image as ImageIcon,
  Clock,
  Pin,
  Database
} from 'lucide-react'

// JSON-LD Structured Data for Pinterest Ad Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pinterest Ads Management & Predictive Commerce",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/pinterest-ads"
  },
  "description": "Specialized Pinterest advertising agency focusing on Trend Alignment, Catalog Sync, and Visual Search SEO for e-commerce growth.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pinterest Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pinterest Catalog & Shop Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive Trend Alignment Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pinterest Visual Search SEO" } }
    ]
  }
}

// FAQ Schema for Search Engines
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do Pinterest Ads have a longer 'conversion tail' than Meta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pinterest users are Planners. They often 'Save' a Pin to a board today for a purchase they plan to make in 3 weeks (like a home renovation or a wedding). While your immediate ROAS might look lower on day 1, your 30-day Assisted Conversion value is typically significantly higher."
      }
    },
    {
      "@type": "Question",
      "name": "What is a 'Good' Save Rate for Pinterest Ads in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We aim for an Earned Engagement Rate of 0.5% to 1%. A 'Save' is more valuable than a 'Like' because it puts your ad into a user's private collection, where they will see it repeatedly during their planning process without you paying for additional impressions."
      }
    }
  ]
}

export default function PinterestAdsPage() {
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

        {/* 1. Predictive Commerce Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(255,107,53,0.15)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                {/* Mood Board Styled UI Box */}
                <div className="w-full md:w-1/3 max-w-[320px]">
                  <div className="relative aspect-square bg-[#F1F5F9] rounded-[2.5rem] border-[4px] border-white shadow-2xl p-4 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                    {/* Pin 1 */}
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [-5, -6, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 left-4 w-32 h-40 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col"
                    >
                      <div className="w-full h-24 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8A50]/20 flex items-center justify-center">
                        <Palette className="w-8 h-8 text-[#FF6B35]" />
                      </div>
                      <div className="p-3 bg-white flex-1 flex flex-col justify-center space-y-1">
                        <div className="text-[10px] font-black text-slate-800 uppercase leading-tight">Aesthetic Decor</div>
                        <div className="text-[9px] font-bold text-slate-500">Rising Trend</div>
                      </div>
                    </motion.div>

                    {/* Pin 2 */}
                    <motion.div
                      animate={{ y: [0, 5, 0], rotate: [8, 9, 8] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-6 right-4 w-28 h-36 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col"
                    >
                      <div className="w-full h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="p-3 bg-white flex-1 flex flex-col justify-center space-y-1">
                        <div className="text-[10px] font-black text-slate-800 uppercase leading-tight">Spring '26</div>
                        <div className="text-[9px] font-bold text-emerald-500">+145% Search</div>
                      </div>
                    </motion.div>

                    {/* Center Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-56 bg-white rounded-3xl shadow-2xl flex flex-col p-3 z-10 border border-slate-100">
                      <div className="relative w-full flex-1 bg-gradient-to-br from-indigo-50 to-[#FF6B35]/10 rounded-2xl mb-3 overflow-hidden flex items-center justify-center border border-white">
                        <div className="absolute top-2 right-2 px-3 py-1 bg-[#E60023] text-white text-[9px] font-black rounded-full shadow-md">Save</div>
                        <Target className="w-12 h-12 text-[#FF6B35]" />
                      </div>
                      <div className="text-[11px] font-black text-slate-900 leading-tight mb-1">Intent-Driven Content</div>
                      <div className="text-[9px] text-[#FF6B35] font-bold mb-3">45-day planning cycle</div>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-2 items-center">
                          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                            <Clock className="w-3 h-3 text-slate-500" />
                          </div>
                          <div className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Early Edge</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-8 text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6B35] p-3 rounded-2xl">
                      <Layout className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Predictive Commerce</span>
                      <p className="text-[10px] text-slate-400 font-mono">PINTEREST_ROI_2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 text-left">
                    <div className="w-1 h-32 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight text-left">Pinterest Ads Strategy Summary:</h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic text-left">
                        Frameleads engineers <span className="text-slate-900 font-bold underline decoration-[#FF6B35]/30 text-2xl italic-none">Intent-Driven Pinterest Ecosystems</span> that reach consumers 45–60 days before they make a purchase. By utilizing AI-Optimized Idea Ads and Predictive Trend Sourcing, we ensure your brand becomes "the plan" for millions of high-intent shoppers.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">ROAS vs Interruptive Social</div>
                      <div className="text-3xl font-black text-[#FF6B35]">2.3x ↑</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Planning Window Capture</div>
                      <div className="text-3xl font-black text-green-500">45 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. The Hero: Win the Moment Before it Happens */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[0.95] tracking-tight mb-10">
                Don't Just Ad. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35]">Inspire the Purchase.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mt-[-1rem] mb-10">Win the Moment Before it Happens.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              People come to Pinterest to plan their lives—their homes, their weddings, and their wardrobes. Frameleads puts your brand at the center of that plan. We build Search-First Pinterest Campaigns that capture users during the "Consideration" phase, where brand loyalty is built and 96% of browsing is unbranded.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(255,107,53,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My Pinterest Growth Potential <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Predictive Trend Alignment */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Marketing at the Speed of <span className="text-[#FF6B35]">Intent</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, waiting for a trend to "go viral" on TikTok is too late. We use Pinterest Trends to launch campaigns while intent is still rising, securing "The Early Mover Edge."
                </p>

                <div className="space-y-10">
                  {[
                    { title: "The 45-Day Planning Window", desc: "We launch seasonal and life-moment campaigns (e.g., 'Afrohemian Decor' or 'Gummymoda Fashion') 6 weeks early to own the search results before CPMs spike.", icon: Clock },
                    { title: "Trend Badging", desc: "As a Pinterest partner, we align your creative with official Pinterest Predicts trends, increasing trust and algorithm visibility.", icon: ShieldCheck },
                    { title: "Predictive Creative Lab", desc: "Using AI to iterate on visuals that match rising aesthetic signals like 'XXL Stripes' or 'Chrome Accents,' ensuring your ads feel like organic inspiration.", icon: Sparkles }
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

              <div className="lg:w-1/2 relative group">
                <div className="relative bg-[#0F172A] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60023]/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                  <div className="relative z-10 text-left">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#E60023] rounded-full animate-pulse" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">PINTEREST_PREDICTS</span>
                      </div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-mono">TREND_AI</div>
                    </div>

                    <div className="mb-10">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Trend Signal Growth (45 Days Out)</div>
                      <div className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-baseline gap-2">
                        +342% <span className="text-green-400 text-sm font-bold tracking-normal">Early Adopter Bonus</span>
                      </div>
                    </div>

                    {/* Trend Line Chart Simulation */}
                    <div className="h-40 w-full relative mb-8 border-b border-l border-white/10">
                      <svg viewBox="0 0 100 50" className="w-full h-full text-[#FF6B35] drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]" preserveAspectRatio="none">
                        <motion.path
                          d="M0,45 Q10,40 20,42 T40,30 T60,25 T80,10 T100,0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                      <div className="absolute top-4 left-1/4 w-px h-full bg-white/10 border-l border-dashed"></div>
                      <div className="absolute bottom-[-20px] left-1/4 text-[8px] text-slate-400 font-bold -translate-x-1/2">Day -45 Launch</div>

                      <div className="absolute top-4 right-1/4 w-px h-full bg-red-500/30 border-l border-dashed"></div>
                      <div className="absolute bottom-[-20px] right-1/4 text-[8px] text-red-400 font-bold translate-x-1/2">Competitors Join</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">CPM Advantage</div>
                        <div className="text-xl font-bold text-green-400">-72%</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Information Gain</div>
                        <div className="text-xl font-bold text-white">MAX</div>
                      </div>
                    </div>

                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white shadow-2xl p-4 rounded-2xl border border-slate-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest text-left">Early_Mover_Edge</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Full-Stack Shopping & Catalog Integration */}
        <section className="relative py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-right lg:text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full ml-auto lg:ml-0" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Turning Inspiration into a <span className="text-[#FF6B35]">1-Click Checkout</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  We bridge the gap between "Saving" and "Buying" through Technical Commerce Integration, crucial for ranking for 'Pinterest Shop' and 'Catalog Sales Optimization'.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Pinterest Catalog Sync", desc: "We automate your entire product feed so every item becomes a 'Shoppable Pin' with real-time price and inventory updates.", icon: ShoppingBag },
                    { title: "Mobile-First Collection Ads", desc: "Creating 'Mini-Boutiques' in the feed where a hero video or image leads to a curated selection of 3–24 secondary products.", icon: Smartphone },
                    { title: "Verified Merchant Status", desc: "We manage the application process to get your brand the 'Blue Checkmark,' which boosts organic reach and unlocks 'Shop Similar' recommendations.", icon: CheckCircle2 }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-xl transition-all group items-center text-left">
                      <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex flex-shrink-0 items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-black text-[#0F172A] text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative px-10">
                <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_48px_96px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 uppercase tracking-widest">VERIFIED_MERCHANT</div>
                        <div className="text-[10px] text-slate-400 font-mono italic">API: CATALOG_SYNC_ACTIVE</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] bg-slate-50 rounded-3xl border border-slate-200 mb-8 overflow-hidden max-w-[280px] mx-auto grid grid-rows-3 gap-3 p-3 shadow-inner">
                    {/* Hero product */}
                    <div className="row-span-2 bg-gradient-to-tr from-[#FF6B35]/20 to-orange-50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group border border-slate-100">
                      <ShoppingBag className="w-16 h-16 text-[#FF6B35] group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl flex justify-between items-center border border-white/50">
                        <div>
                          <div className="text-[11px] font-black text-slate-900 uppercase">Premium Tote</div>
                          <div className="text-[9px] font-bold text-green-500 uppercase tracking-widest">In Stock</div>
                        </div>
                        <div className="text-sm font-black text-[#0F172A]">$129
                          <span className="text-slate-400 line-through text-[9px] ml-1 block font-normal">$149</span>
                        </div>
                      </div>
                    </div>
                    {/* Secondary products (Collection format) */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-white to-slate-50 shadow-sm rounded-xl border border-slate-200 flex items-center justify-center group cursor-pointer hover:border-[#FF6B35]/30">
                        <ImageIcon className="w-6 h-6 text-slate-300 group-hover:text-[#FF6B35]/60 transition-colors" />
                      </div>
                      <div className="bg-gradient-to-br from-white to-slate-50 shadow-sm rounded-xl border border-slate-200 flex items-center justify-center group cursor-pointer hover:border-[#FF6B35]/30">
                        <Target className="w-6 h-6 text-slate-300 group-hover:text-[#FF6B35]/60 transition-colors" />
                      </div>
                      <div className="bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20 flex items-center justify-center cursor-pointer hover:bg-[#FF6B35]/10 hover:shadow-inner transition-all group">
                        <span className="text-[#FF6B35] text-sm font-black group-hover:scale-110 transition-transform">+21</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Database className="w-4 h-4 text-green-500" />
                      <span className="text-[10px] font-black text-green-700 uppercase">INVENTORY: SYNCED (Real-Time)</span>
                    </div>
                    <div className="text-[10px] font-mono text-green-500 font-bold">100% MATCH</div>
                  </div>
                </div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-5 rounded-[2rem] shadow-2xl z-20 text-left"
                >
                  <div className="text-[9px] text-slate-500 font-black uppercase mb-1">SHOP SIMILAR IMPRESSIONS</div>
                  <div className="text-2xl font-black text-[#FF6B35]">+1.8M</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Visual Search SEO (S-SEO) */}
        <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-left">Ranking in the <span className="text-[#FF6B35]">Visual Search Engine</span></h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto text-left">Pinterest is a search engine, not a social network. We optimize your ads for Visual and Textual Discovery.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Semantic Keyword Layering", desc: "We embed high-volume keywords into titles, descriptions, and Alt Text to ensure AI crawlers index your products correctly.", icon: Search },
                { title: "AI Image Intelligence", desc: "We select visuals with high 'Image Relevance'—ensuring Pinterest's AI recognizes the objects in your ad even without text.", icon: Cpu },
                { title: "Long-Tail Targeting", desc: "Moving beyond broad categories to target specific queries like 'budget-friendly nursery ideas for small spaces.'", icon: Target }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-[#FF6B35]/50 transition-all group text-left">
                  <div className="w-16 h-16 bg-[#FF6B35]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-all">
                    <item.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-left">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. The "Pinterest Performance" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-left">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4 text-left">Pinterest Performance Matrix</h2>
              <p className="text-xl text-slate-500 text-left">Engineered for Google's "Featured Snippets" comparing Pinterest vs. Meta/Search.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-slate-400">Metric</th>
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-slate-400">Google Search Ads</th>
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-slate-400">Meta Ads</th>
                    <th className="px-6 py-6 text-xs md:text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Pinterest Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { metric: "User Mindset", gads: "Problem Solving", meta: "Passive Consumption", pin: "Active Planning / Inspiration" },
                    { metric: "AOV", gads: "Moderate", meta: "Moderate", pin: "50% Higher (High-Ticket Ready)" },
                    { metric: "Purchase Window", gads: "Short (1-3 Days)", meta: "Instant / Impulse", pin: "21–30 Day Research Cycle" },
                    { metric: "Primary Targeting", gads: "Keywords", meta: "Interests / Social Graph", pin: "Visual Search / Life Milestones" },
                    { metric: "Ad Longevity", gads: "Ends with Spend", meta: "24-48 Hours", pin: "Evergreen (Earned Reach via Saves)" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-6 font-black text-slate-900">{row.metric}</td>
                      <td className="px-6 py-6 text-slate-500 font-medium">{row.gads}</td>
                      <td className="px-6 py-6 text-slate-500 font-medium">{row.meta}</td>
                      <td className="px-6 py-6 text-[#FF6B35] font-black">{row.pin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center text-left">Pinterest Strategy & CPC FAQ</h2>

            <div className="space-y-8 text-left">
              {[
                {
                  q: "Why do Pinterest Ads have a longer 'conversion tail' than Meta?",
                  a: "Pinterest users are Planners. They often 'Save' a Pin to a board today for a purchase they plan to make in 3 weeks (like a home renovation or a wedding). While your immediate ROAS might look lower on day 1, your 30-day Assisted Conversion value is typically significantly higher."
                },
                {
                  q: "What is a 'Good' Save Rate for Pinterest Ads in 2026?",
                  a: "We aim for an Earned Engagement Rate of 0.5% to 1%. A 'Save' is more valuable than a 'Like' because it puts your ad into a user's private collection, where they will see it repeatedly during their planning process without you paying for additional impressions."
                },
                {
                  q: "Can I use the exact same creative from Meta or TikTok on Pinterest?",
                  a: "No. Pinterest is a visual search engine, not an endless, fast-paced entertainment feed. Content should be more aesthetic, structured, and informative. Vertical video works well, but it needs to provide utility or inspiration rather than a loud, fast-paced 'hook' typical of TikTok."
                },
                {
                  q: "Is Pinterest Ads only for B2C and E-commerce brands?",
                  a: "Primarily, yes. It thrives for Home Decor, Fashion, Beauty, Travel, and Food. However, high-ticket B2B services can also work if they are highly visual (e.g., architectural software, event planning services, or creative agency portfolios) and target the 'inspiration' and 'learning' phases."
                },
                {
                  q: "How does Pinterest's API for Conversions impact Tracking?",
                  a: "Similar to Meta's CAPI, the Pinterest API for Conversions drastically improves match rates bypassing browser-level tracking preventions. We've seen clients gain an immediate 20-30% lift in attributed sales by simply migrating to server-side event tracking for their catalogs."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-6 text-left">{faq.q}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed text-left">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10 text-left">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1] text-left">
                Is Your Brand in the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35]">2026 Plan?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed text-left">
                Most brands use Pinterest for "Awareness" while their competitors use it for Revenue. Our Pinterest Growth Audit will identify which of the 21 "Pinterest Predicts" trends your brand fits into and build the 60-day roadmap to own that space. Let's make your product the centerpiece of their next big project.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#FF6B35] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 group text-left">
                Claim My Pinterest Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center text-left">
            <div className="mb-20 text-left">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6 text-left">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500 text-left">Scale across every high-velocity channel with Frameleads intelligence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Target, desc: 'B2B Precision Pipeline.' },
                { label: 'Google Ads', href: '/google-ads', icon: Zap, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left">
                  <link.icon className={`w-12 h-12 text-[#FF6B35] mx-auto mb-6 transition-transform group-hover:scale-110`} />
                  <h3 className={`text-xl font-bold text-[#0F172A] mb-2 text-left`}>{link.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-left">{link.desc}</p>
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
