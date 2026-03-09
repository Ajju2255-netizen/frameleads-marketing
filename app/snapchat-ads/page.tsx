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
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Snapchat Ad Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Snapchat Ads Management & AR Commerce Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/snapchat-ads"
  },
  "description": "Specialized Snapchat advertising agency focusing on AR Shopping Lenses, Smart+ automation, and Gen Z performance marketing.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Snap Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AR Lens Development & Commerce Kit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart+ Automation Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "7/0 Attribution Optimization" } }
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
      "name": "Why choose Snapchat Ads over TikTok in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While TikTok is great for viral reach, Snapchat dominates 'Inner Circle' influence. A recommendation sent via a 'Direct Snap' carries more weight than a public comment. Additionally, Snapchat's AR Lenses provide a 'Utility' (like trying on a product) that directly reduces return rates for e-commerce brands."
      }
    },
    {
      "@type": "Question",
      "name": "What is a 'Sponsored Snap' and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sponsored Snap lands directly in a user’s Chat feed as an unopened message. It is the most intimate ad format on the platform, allowing for 1:1 automated dialogues or personalized offers that feel like a message from a friend."
      }
    }
  ]
}

export default function SnapchatAdsPage() {
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

        {/* 1. Snap Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(255,107,53,0.15)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                {/* Neon Frame UI */}
                <div className="w-full md:w-1/3 max-w-[280px]">
                  <div className="relative aspect-[9/19] bg-[#0F172A] rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden group">
                    {/* Neon Glow */}
                    <div className="absolute inset-0 border-[2px] border-[#FF6B35] blur-[8px] opacity-40 animate-pulse rounded-[2.5rem]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />

                    {/* Snapchat Mockup Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-[#FF6B35]/20 flex flex-col items-center justify-center p-6">
                      <div className="w-20 h-20 bg-[#FF6B35] rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,107,53,0.5)]">
                        <Camera className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-3 w-full">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.5 }}
                            className="h-full bg-[#FF6B35]"
                          />
                        </div>
                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                      </div>
                      <div className="mt-8 flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-white/60" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-8 text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6B35] p-3 rounded-2xl">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Snap Intelligence Hub</span>
                      <p className="text-[10px] text-slate-400 font-mono">GEN_Z_AR_COMMERCE.2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 text-left">
                    <div className="w-1 h-32 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight text-left">Snapchat Ads Strategy Summary:</h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic text-left">
                        Frameleads engineers <span className="text-slate-900 font-bold underline decoration-[#FF6B35]/30 text-2xl italic-none">High-Velocity Snapchat Funnels</span> that leverage AR Shopping Lenses and Smart+ Automation to drive immediate action. We utilize 7/0 Attribution and Server-Side CAPI to maximize ROAS for the 18–34 demographic.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">AR Dwell Time</div>
                      <div className="text-3xl font-black text-[#FF6B35]">20s+</div>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Privacy-First Tracking</div>
                      <div className="text-3xl font-black text-green-500">CAPI READY</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. The Hero: The World’s Most Personal Ad Space */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[0.95] tracking-tight mb-10">
                Marketing for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35]">Group Chat.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mt-[-1rem] mb-10">Scaling for the Bottom Line.</h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Snapchat isn't a "broadcast" platform; it’s where friends talk. Frameleads builds Native-First Snapchat Ads that look like a Snap, feel like a recommendation, and convert like a direct-response engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(255,107,53,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My Snap Growth Potential <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: AR as a Sales Tool */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  AR Lenses: From "Engagement" to <span className="text-[#FF6B35]">Instant Commerce</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, AR is your digital storefront. We don't just make "funny faces"; we build Shopping Lenses that drive measurable ROI.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Virtual Try-Ons (VTO)", desc: "Letting users 'wear' products (eyewear, jewelry, makeup) using the Commerce Kit for instant checkout.", icon: Sparkles },
                    { title: "World Lenses", desc: "Placing 3D models of your products (furniture, cars, tech) in the user's physical room to visualize fit.", icon: Layout },
                    { title: "Gamified Experiences", desc: "Driving massive 'Dwell Time' with interactive challenges that reward users with discount codes.", icon: Play }
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
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                  <div className="relative z-10 text-left">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">AR_COMMERCE_ACTIVE</span>
                      </div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-mono">KIT_V6.2</div>
                    </div>

                    <div className="mb-10">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Avg. Shoppable Scan Time</div>
                      <div className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-baseline gap-2">
                        24.8s <span className="text-green-400 text-sm font-bold tracking-normal">↑ 415% vs Video</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Try-On Accuracy</div>
                        <div className="text-xl font-bold text-white">99.8%</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-1">In-Lens CV %</div>
                        <div className="text-xl font-bold text-white">12.4%</div>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-black text-slate-400 mb-1 uppercase">Interaction Density</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            className="h-full bg-[#FF6B35]"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-black text-slate-400 mb-1 uppercase">Share Probability</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "82%" }}
                            className="h-full bg-blue-400"
                          />
                        </div>
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
                    <Target className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest text-left">Utility_Focused_AR</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: The "Lo-Fi" Creative Engine */}
        <section className="relative py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-right lg:text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full ml-auto lg:ml-0" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Stop the Thumb in <span className="text-[#FF6B35]">2 Seconds</span> or Less
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  Snapchat users move fast. Our creative strategy is built for the "Fast-Forward" Generation, focusing on immediate pattern interrupts.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "The Native Aesthetic", desc: "Lo-Fi, UGC-style content filmed directly in the Snapchat app to blend seamlessly into the feed.", icon: Camera },
                    { title: "Hero Opening Frames", desc: "Establishing the brand or problem within the first 2 seconds to prevent the skip.", icon: Zap },
                    { title: "Sound-On Engineering", desc: "Leveraging the 64% Sound-On audience with ASMR, trending audio, and high-trust dialogue.", icon: Music }
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
                      <div className="w-10 h-10 bg-[#FFC300] rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 uppercase tracking-widest">THUMB_STOP_ENGINE</div>
                        <div className="text-[10px] text-slate-400 font-mono italic">VAR: SNAP_NATIVE_11</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-[9/16] bg-slate-50 rounded-2xl border border-slate-100 mb-8 overflow-hidden max-w-[260px] mx-auto">
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl font-black text-orange-500 mb-2"
                        >
                          92%
                        </motion.div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">STOP RATE</div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 inset-x-4 flex gap-1">
                      {[1, 1, 1, 0.5, 0.2].map((op, i) => (
                        <div key={i} className="flex-1 h-1 bg-[#FF6B35] rounded-full" style={{ opacity: op }} />
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Music className="w-4 h-4 text-slate-400" />
                      <span className="text-[10px] font-black text-slate-900 uppercase">ASMR_ENGINE: OPTIMIZED</span>
                    </div>
                    <div className="text-[10px] font-mono text-green-500 font-bold">LOUD_VOL: 100%</div>
                  </div>
                </div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-5 rounded-[2rem] shadow-2xl z-20 text-left"
                >
                  <div className="text-[9px] text-slate-500 font-black uppercase mb-1">CPA REDUCTION</div>
                  <div className="text-2xl font-black text-[#FF6B35]">-40.2%</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Smart+ Automation & 7/0 Attribution */}
        <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-left">Precision in a <span className="text-[#FF6B35]">Privacy-First</span> World</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto text-left">We use Snapchat’s advanced 2026 tools and machine learning to ensure every dollar is tracked and optimized for active intent.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Smart+ Automation", desc: "Leveraging AI-powered targeting that automatically finds high-value users based on Pixel and CAPI data.", icon: Cpu },
                { title: "7/0 Attribution Model", desc: "Optimizing for 7-day click with 0-day view to bid on 'Active Intent' rather than passive impressions.", icon: BarChart3 },
                { title: "Dynamic Product Ads", desc: "Serving personalized catalog items based on user browsing history and real-time travel intent.", icon: ShoppingBag }
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

        {/* 6. The "Social Performance" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-left">
            <div className="text-center mb-20 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4 text-left">Snapchat Performance Matrix</h2>
              <p className="text-xl text-slate-500 text-left">Engineered comparison of Snap vs. legacy social channels.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Metric</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Instagram / TikTok</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Snap Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { metric: "Primary Context", legacy: "Public Discovery / Feed", snap: "Private Group Chat / Camera" },
                    { metric: "Ad Engagement", legacy: "Passive (Scrolling)", snap: "Active (Interactive AR / Lenses)" },
                    { metric: "Avg AR Dwell Time", legacy: "2-3 Seconds", snap: "20+ Seconds" },
                    { metric: "Audience Mindset", legacy: "Consuming Content", snap: "Communicating with Friends" },
                    { metric: "Tracking Model", legacy: "Mixed / View-Heavy", snap: "Conversion-Led (7/0 Click)" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-8 font-black text-slate-900">{row.metric}</td>
                      <td className="px-10 py-8 text-slate-400 italic font-medium">{row.legacy}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.snap}</td>
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center text-left">Snapchat Ads Strategy FAQ</h2>

            <div className="space-y-8 text-left">
              {[
                {
                  q: "Why choose Snapchat Ads over TikTok in 2026?",
                  a: "While TikTok is great for viral reach, Snapchat dominates 'Inner Circle' influence. A recommendation sent via a 'Direct Snap' carries more weight than a public comment. Additionally, Snapchat's AR Lenses provide a 'Utility' (like trying on a product) that directly reduces return rates for e-commerce brands."
                },
                {
                  q: "What is a 'Sponsored Snap' and how does it work?",
                  a: "A Sponsored Snap lands directly in a user’s Chat feed as an unopened message. It is the most intimate ad format on the platform, allowing for 1:1 automated dialogues or personalized offers that feel like a message from a friend."
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
                Are You Missing <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35]">the Group Chat?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed text-left text-left">
                Most brands treat Snapchat like a "secondary" channel. We treat it as a Conversion Machine. Our Snapchat Performance Audit identifies your AR potential, maps Gen Z segments, and fixes tracking gaps.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#FF6B35] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 group text-left">
                Claim My Snapchat Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Target, desc: 'B2B Precision Pipeline.' },
                { label: 'Google Ads', href: '/google-ads', icon: Zap, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Branding', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' }
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
