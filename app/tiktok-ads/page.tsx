'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Video,
  Search,
  CheckCircle2,
  Smartphone,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  Music,
  ShoppingBag as ShopIcon,
  Sparkles,
  Search as SearchIcon,
  Globe,
  Palette,
  Code,
  Mail,
  Cpu,
  Fingerprint,
  Activity,
  Award,
  Lock,
  Database,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for TikTok Ad Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "TikTok Ads & Social Commerce Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/tiktok-ads"
  },
  "description": "Full-funnel TikTok Ads management specializing in TikTok Shop (GMV Max), S-SEO search optimization, and high-velocity UGC creative.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Commerce Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TikTok Shop Management & Scaling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Search Optimization (S-SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Velocity UGC Production" } }
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
      "name": "Is TikTok Shop worth it for a premium brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. While often associated with impulse buys, premium brands in 2026 use TikTok Shop to provide 'Documentary-Style' transparency. By showing the process, the people, and the real-world results via creators, high-ticket brands build faster trust than through a traditional 'Glossy' website."
      }
    },
    {
      "@type": "Question",
      "name": "How many ad creatives do I need to launch per month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To stay ahead of Creative Fatigue, we recommend a minimum of 10–20 unique variations per month. In 2026, 'Watch Time' is the primary ranking factor; if your creative isn't refreshed every 2 weeks, your CPMs will spike as the algorithm identifies your content as 'Stale'."
      }
    }
  ]
}

export default function TikTokAdsPage() {
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

        {/* 1. TikTok Commerce Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                {/* Phone Frame UI */}
                <div className="w-full md:w-1/3 max-w-[280px]">
                  <div className="relative aspect-[9/19] bg-[#0F172A] rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />

                    {/* TikTok Mockup Content */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                      {/* Icons Sidebar */}
                      <div className="absolute right-3 bottom-24 flex flex-col gap-5 items-center">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <Heart className="w-5 h-5 text-white fill-none" />
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <Share2 className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-6 left-4 right-4 text-white">
                        <div className="font-bold mb-1 flex items-center gap-2">@Frameleads_Growth <CheckCircle2 className="w-3 h-3 text-[#FF6B35] fill-[#FF6B35]/20" /></div>
                        <p className="text-[10px] leading-tight opacity-90 mb-4 line-clamp-2">How we scaled this D2C brand to 10% CV % via TikTok Shop native checkout... #TikTokShop #Commerce</p>
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#FF6B35] rounded-lg text-xs font-black shadow-lg">
                          <ShopIcon className="w-4 h-4" /> SHOP NOW | 1-Click Checkout
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6B35] p-3 rounded-2xl">
                      <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">TikTok Commerce Hub</span>
                      <p className="text-[10px] text-slate-400 font-mono">GMV_MAX_OPTIMIZATION.2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-1 h-32 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">TikTok Ads Strategy Summary:</h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic">
                        Frameleads engineers <span className="text-slate-900 font-bold underline decoration-[#FF6B35]/30 text-2xl italic-none">High-Velocity TikTok Ecosystems</span> that bridge the gap between Entertainment and Instant Commerce. We utilize GMV Max and Social Search Optimization to ensure discovery turns into predictable revenue.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Avg. Conversion Rate</div>
                      <div className="text-3xl font-black text-[#FF6B35]">10%+</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Checkout Friction</div>
                      <div className="text-3xl font-black text-green-500">ELIMINATED</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. The Hero: From Scroll to Sale */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[0.95] tracking-tight mb-10">
                Don't Just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">Stop the Scroll.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mt-[-1rem] mb-10">Start the Transaction.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              In 2026, TikTok is the world’s most powerful impulse-buy engine. Frameleads builds Native-First TikTok Ad Systems that look like content, feel like a recommendation, and convert like a direct-response machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(255,107,53,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My TikTok Shop Potential <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: TikTok Shop & GMV Max Optimization */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  The New Funnel: <span className="text-[#FF6B35]">Discovery is the Storefront</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, the best "Landing Page" is no longer on your website—it’s inside TikTok. We eliminate the 30% drop-off rate of external browsers.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "GMV Max Campaigns", desc: "Automated AI-driven budget optimization across Shop Ads, Live Shopping, and Affiliate videos.", icon: Zap },
                    { title: "Affiliate-Led Scaling", desc: "Sending product to 500+ creators monthly to build a massive library of organic 'Social Proof'.", icon: Users },
                    { title: "Frictionless Checkout", desc: "Native in-app checkout that turns impulse into instant ownership in under 3 clicks.", icon: ShopIcon }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-slate-50 rounded-3xl flex flex-shrink-0 items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative group">
                <div className="relative bg-[#0F172A] rounded-[3rem] p-8 md:p-12 shadow-[0_48px_96px_-16px_rgba(255,107,53,0.2)] border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">LIVE_COMMERCE_SYNC</span>
                      </div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-mono">ID: TK_SHOP_772</div>
                    </div>

                    <div className="mb-10">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Total Shop GMV (24h)</div>
                      <div className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-baseline gap-2">
                        $142,850 <span className="text-green-400 text-sm font-bold tracking-normal">↑ 42%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Affiliate Attribution</div>
                        <div className="text-xl font-bold text-white">68.4%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "68.4%" }}
                            className="h-full bg-[#FF6B35]"
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">In-App Checkout</div>
                        <div className="text-xl font-bold text-white">92.1%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "92.1%" }}
                            className="h-full bg-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { user: "User_88x", product: "Glow Serum v2", price: "$42.00", time: "Just now" },
                        { user: "Growth_Fan", product: "Titan Case", price: "$89.99", time: "2s ago" },
                      ].map((order, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.2 }}
                          className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                              {order.user[0]}
                            </div>
                            <div>
                              <div className="text-[11px] font-bold text-white">{order.user} purchased {order.product}</div>
                              <div className="text-[9px] text-slate-500 uppercase font-black">{order.time}</div>
                            </div>
                          </div>
                          <div className="text-xs font-black text-[#FF6B35]">{order.price}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white shadow-2xl p-4 rounded-2xl border border-slate-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-xs font-black text-slate-900 uppercase">GMV_MAX Auto-Scaling</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Creative Velocity & "Lo-Fi" Authenticity */}
        <section className="relative py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-right lg:text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full ml-auto lg:ml-0" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  High-Volume, <span className="text-[#FF6B35]">Lo-Fi</span> Authenticity
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  If it looks like an ad, it’s dead. We focus on content that builds trust through immediate "Results-First" visual storytelling and social proof.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "3s Retention Hooks", desc: "Testing 15+ variations weekly using provocative questions and immediate pattern interrupts.", icon: Play },
                    { title: "Audio-First Engineering", desc: "Mimicking native storytelling with trending commercial audio and high-retention voiceovers.", icon: Music },
                    { title: "Symphony AI Iteration", desc: "Remixing winning content into hundreds of variants, adjusting pacing for different segments.", icon: Sparkles }
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

              <div className="lg:w-1/2 relative px-10">
                <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_48px_96px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 uppercase tracking-widest">HOOK_ANALYZER_v2</div>
                        <div className="text-[10px] text-slate-400 font-mono italic">UGC_VARIATION: L-042</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="text-[9px] font-black text-emerald-600 uppercase">Processing...</div>
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-50 rounded-2xl border border-slate-100 mb-8 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        d="M 0 80 Q 50 10 100 60 T 200 40 T 300 10 T 400 30"
                        fill="none"
                        stroke="#FF6B35"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path d="M 0 80 Q 50 10 100 60 T 200 40 T 300 10 T 400 30" fill="url(#grad2)" opacity="0.1" />
                      <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF6B35" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute bottom-2 inset-x-4 flex justify-between text-[8px] font-mono text-slate-400">
                      <span>0.0s</span>
                      <span className="text-[#FF6B35] font-black">3.0s (CRITICAL)</span>
                      <span>6.0s</span>
                      <span>15.0s</span>
                    </div>

                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-[#FF6B35] rounded-full border-2 border-white shadow-lg animate-ping" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Hook Rate", val: "94%", detail: "Elite" },
                      { label: "Avg View", val: "12.2s", detail: "+4s" },
                      { label: "CV Link", val: "4.8%", detail: "High" },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-[9px] text-slate-400 font-black uppercase mb-1">{stat.label}</div>
                        <div className="text-xl font-black text-slate-900">{stat.val}</div>
                        <div className="text-[8px] font-bold text-[#FF6B35]">{stat.detail}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500">
                      <span className="flex items-center gap-1.5"><Music className="w-3 h-3" /> Trending Audio Sync</span>
                      <span className="flex items-center gap-1.5"><Fingerprint className="w-3 h-3" /> Lo-Fi Authenticity</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-5 rounded-[2rem] shadow-2xl z-20"
                >
                  <div className="text-[9px] text-slate-500 font-black uppercase mb-1">CPA REDUCTION</div>
                  <div className="text-2xl font-black text-[#FF6B35]">-38.4%</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: S-SEO (Social Search Optimization) */}
        <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Dominating the <span className="text-[#FF6B35]">New Search</span> Landscape</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">With 49% of consumers using TikTok as a search engine, we treat your ads like Search Results to capture high-intent buyers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Layered Indexing", desc: "Scripting keywords into Spoken Audio, On-Screen Text, and Captions for TikTok's AI to index.", icon: SearchIcon },
                { title: "Comment Content Loops", desc: "Turning customer questions into prioritize 'Reply Videos' that win Search Information Gain.", icon: MessageCircle },
                { title: "Comparison Authority", desc: "Creating 'Vs' and 'Before You Buy' formats that position your brand as the definitive expert.", icon: Search }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-[#FF6B35]/50 transition-all group">
                  <div className="w-16 h-16 bg-[#FF6B35]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-all">
                    <item.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TikTok 2026 Performance Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4">The TikTok Performance Matrix</h2>
              <p className="text-xl text-slate-500">How Frameleads engineers the shift from "Views" to "GMV".</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Legacy Ads (2024)</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Growth Hub (2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Primary Goal", basic: "Website Traffic / Leads", advanced: "Direct GMV / In-App Sales" },
                    { feat: "Targeting", basic: "Interest & Hashtags", advanced: "Search Intent & GMV Max" },
                    { feat: "Creative Style", basic: "Polished / 'Ad-like'", advanced: "Native UGC / Lo-Fi Authenticity" },
                    { feat: "Search Presence", basic: "Non-Existent", advanced: "S-SEO Optimized (Audio/Text)" },
                    { feat: "Checkout Flow", basic: "External (High Drop-off)", advanced: "Native Shop (1-Click)" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-8 font-black text-slate-900">{row.feat}</td>
                      <td className="px-10 py-8 text-slate-400 italic font-medium">{row.basic}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">TikTok Shop Strategy FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Is TikTok Shop worth it for a premium brand?",
                  a: "Absolutely. While often associated with impulse buys, premium brands in 2026 use TikTok Shop to provide 'Documentary-Style' transparency. By showing the process and real results via creators, high-ticket brands build faster trust than through a traditional website."
                },
                {
                  q: "How many ad creatives do I need to launch per month?",
                  a: "To stay ahead of Creative Fatigue, we recommend a minimum of 10–20 unique variations per month. If your creative isn't refreshed every 2 weeks, your CPMs will spike as the algorithm identifies your content as 'Stale'."
                },
                {
                  q: "What is GMV Max and how does it differ from standard ads?",
                  a: "GMV Max is TikTok's AI-native campaign type that optimizes across the entire ecosystem—Shop, Live, and Feed. It focuses purely on Gross Merchandise Value (Sales Revenue) rather than just traffic or leads."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-6">{faq.q}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1]">
                Capturing the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35]">$20B TikTok Opportunity?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most brands are still "running ads" while their competitors are building "Commerce Engines." Our Audit identifies if your product is Shop-Ready and finds your keyword strategy.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#FF6B35] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My TikTok Shop Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Stop scrolling and start scaling. These are the models that fuel it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Creative-Led Growth.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Target, desc: 'B2B Precision Pipeline.' },
                { label: 'Google Ads', href: '/google-ads', icon: Play, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: SearchIcon, desc: 'Search authority hub.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <link.icon className={`w-12 h-12 text-[#FF6B35] mx-auto mb-6 transition-transform group-hover:scale-110`} />
                  <h3 className={`text-xl font-bold text-[#0F172A] mb-2`}>{link.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{link.desc}</p>
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
