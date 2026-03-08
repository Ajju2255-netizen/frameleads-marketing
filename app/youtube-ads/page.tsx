'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Video,
  Play,
  PlayCircle,
  Eye,
  ThumbsUp,
  Share2,
  TrendingUp,
  Target,
  Search,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Monitor,
  Smartphone,
  Layers,
  Brain,
  MessageCircle,
  Mail,
  Palette,
  Code,
  Activity,
  Award,
  Users,
  Film,
  Tv,
  Layout,
  MousePointer2,
  Fingerprint,
  Database,
  Smartphone as MobileIcon,
  ShoppingBag,
  Cpu,
  Clock,
  Waves,
  Linkedin
} from 'lucide-react'

// JSON-LD Structured Data for YouTube Ad Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "YouTube Ads Management & Video Growth Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/youtube-ads"
  },
  "description": "Comprehensive YouTube Advertising services including Custom Intent targeting, Shorts production, and Demand Gen optimization.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Video Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intent-Based YouTube Targeting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YouTube Shorts & Demand Gen Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "View-Through Attribution Modeling" } }
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
      "name": "What is a 'Good' View-Through Rate (VTR) for YouTube Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy VTR typically ranges between 25% and 45% depending on the industry. However, Frameleads prioritizes Earned Views and Conversion Lift. If a user watches 30 seconds of your ad, skips, but then searches for your brand on Google 2 days later, we track that as a successful 'Assisted Conversion'."
      }
    },
    {
      "@type": "Question",
      "name": "How do YouTube Ads help with my overall SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "YouTube videos are indexed as Rich Results in Google. By running ads, you drive 'Engagement Signals' to your video, which helps it rank organically in Google’s 'Video' tab and AI Overviews. This creates a 'Flywheel Effect' where paid traffic fuels organic authority."
      }
    }
  ]
}

export default function YouTubeAdsPage() {
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

      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* 1. Video Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-[#0F172A] border-y-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(15,23,42,0.5)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#FF6B35] p-3 rounded-2xl">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Cinema Intelligence Hub</span>
                  <p className="text-[10px] text-slate-500 font-mono">STREAM_INTENT_SYNC.2026</p>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-1 h-20 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                    <span className="text-[#FF6B35] font-black uppercase tracking-tighter mr-2">YouTube Ads Summary:</span> Frameleads engineers Full-Funnel YouTube Ecosystems by bridging <span className="text-white font-bold">Search Intent</span> with <span className="text-white font-bold">Visual Storytelling</span>. We capture users at the exact moment of discovery via Demand Gen and Intent Sync.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Branded Search lift</div>
                    <div className="text-2xl font-black text-green-400">+35%</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">VTC Attribution</div>
                    <div className="text-2xl font-black text-[#FF6B35]">VERIFIED</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">AIO Visibility</div>
                    <div className="text-2xl font-black text-blue-400">HIGH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Hero: The Attention Engine */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
              Own the Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">Big Screen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              TV is dead; YouTube is the new global standard. Frameleads builds <strong className="text-slate-900">High-Retention YouTube Campaigns</strong> that combine the reach of television with the surgical precision of Google Search.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My YouTube Strategy <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Search-to-Stream Intent Logic */}
        <section className="relative py-32 bg-[#FDF8F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Intent-Based Video: <span className="text-[#FF6B35]">Capturing the Research Phase</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  We don&apos;t blast ads to random demographics. We use <span className="font-bold text-slate-900">Custom Intent Audiences</span> to reach users who are already searching for what you offer.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Search-Query Sync", desc: "Showing your ads to users who have recently searched for your competitors or industry keywords on Google.", icon: Search },
                    { title: "In-Market Segments", desc: "Targeting users who are actively in the 'Comparison' phase of the buying cycle for your specific product category.", icon: Target },
                    { title: "Life Events & Milestones", desc: "Reaching users during high-intent life changes that trigger new purchasing needs.", icon: Zap }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white rounded-3xl flex flex-shrink-0 items-center justify-center shadow-xl border border-slate-100 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
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

              <div className="lg:w-1/2 relative">
                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10 space-y-8 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 text-white font-mono text-xs">
                      <PlayCircle className="w-4 h-4 text-[#FF6B35]" />
                      INTENT_LOGIC: SEARCH_SYNCED
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative">
                      <div className="flex justify-between items-end mb-6">
                        <div className="text-left">
                          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Query Match</div>
                          <div className="text-xl font-bold text-white">"High-Growth Agency"</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-500 text-xs font-bold">100% RELEVANT</div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6B35] w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                        <div className="text-slate-400 text-xs mb-1 uppercase tracking-widest">CPC Equivalent</div>
                        <div className="text-2xl font-black text-white">$0.02</div>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                        <div className="text-slate-400 text-xs mb-1 uppercase tracking-widest">Intent Depth</div>
                        <div className="text-2xl font-black text-[#FF6B35]">MAX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Creative Engineering */}
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF8A50] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Engineering the <span className="text-[#FF8A50]">5-Second Window</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  On YouTube, the first 5 seconds are your only guarantee. We utilize a <span className="font-bold text-slate-900">Scientific Creative Stack</span> to stop the skip.
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "The Pattern Interrupt (0-5s)", desc: "A visual or verbal 'Hook' designed to stop the skip and qualify the viewer instantly.", icon: PlayCircle },
                    { title: "The Value Build (5-30s)", desc: "Showing exactly how your solution solves their specific search intent with clear information gain.", icon: Brain },
                    { title: "The Interactive CTA", desc: "Utilizing Companion Banners and Site-Link Extensions to make the transition to checkout seamless.", icon: MousePointer2 }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#FDF8F5] p-8 rounded-[2.5rem] border border-[#FFE2D9] flex gap-6 hover:shadow-2xl hover:border-[#FF8A50]/30 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-[#FFE2D9] font-black text-[#FF8A50] group-hover:bg-[#FF8A50] group-hover:text-white transition-all">
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

              <div className="lg:w-1/2 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A50]/20 to-transparent blur-3xl rounded-full translate-x-12 translate-y-12" />

                <div className="relative space-y-6">
                  {/* Main Analysis Console */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0F172A] rounded-[3rem] p-6 shadow-2xl relative overflow-hidden border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-6 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-black text-white/40 tracking-[0.2em] font-mono uppercase">Live_Creative_Feed</span>
                      </div>
                      <div className="text-[10px] font-black text-[#FF8A50] tracking-[0.2em] font-mono uppercase">00:04.22ms</div>
                    </div>

                    <div className="aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-inner group">
                      {/* Video Hook Visualizer */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white/10 group-hover:text-[#FF8A50]/20 transition-all duration-500" />
                      </div>

                      {/* Heatmap Overlays */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.15),transparent_70%)] opacity-60" />

                      {/* Analysis Tags */}
                      <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="px-3 py-1 bg-[#FF6B35] text-white text-[9px] font-black rounded-lg shadow-lg"
                        >
                          PATTERN_INTERRUPT: DETECTED
                        </motion.div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/80 text-[9px] font-black rounded-lg border border-white/20"
                        >
                          FACES: 2
                        </motion.div>
                      </div>

                      <div className="absolute bottom-6 right-6">
                        <div className="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white text-[11px] font-black uppercase flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[#FF6B35]" /> Skip in 1s
                        </div>
                      </div>

                      {/* Waveform Visualization */}
                      <div className="absolute bottom-6 left-6 right-28 h-10 flex items-end gap-[3px]">
                        {[...Array(40)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                            transition={{ duration: 1, delay: i * 0.02 }}
                            className="w-1 bg-[#FF8A50]/40 rounded-full"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Timeline Analysis */}
                    <div className="mt-10 space-y-4">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                        <span>0s (Hook)</span>
                        <span>5s (Window)</span>
                        <span>15s (Body)</span>
                      </div>
                      <div className="relative h-8 flex gap-1.5 pt-2">
                        <div className="h-full w-[33%] bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-l-2xl opacity-90 relative group">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-[9px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black">HOOK_LOCK</div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Waves className="w-4 h-4 text-white/40" />
                          </div>
                        </div>
                        <div className="h-full w-[33%] bg-white/10 relative group border-x border-white/5">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/20 text-white text-[9px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black">RETENTION_ZONE</div>
                        </div>
                        <div className="h-full w-[34%] bg-white/5 rounded-r-2xl relative group">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 text-white text-[9px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black">CTA_SYNC</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Secondary Proof Widget */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-xl group hover:border-[#FF8A50]/20 transition-all font-sans"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A50]" />
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hook Score</div>
                      </div>
                      <div className="text-4xl font-black text-[#0F172A] mb-1">9.8<span className="text-sm font-bold text-slate-300">/10</span></div>
                      <p className="text-[10px] text-green-500 font-black uppercase">TOP 1% IN INDUSTRY</p>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-xl group hover:border-green-100 transition-all font-sans"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Attention Gain</div>
                      </div>
                      <div className="text-4xl font-black text-[#0F172A] mb-1">+5.2x</div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Post-Hook Interaction</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: YouTube Shorts & Demand Gen */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
              Dominating the <span className="text-[#FF6B35]">Vertical Feed</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              In 2026, YouTube Shorts is the fastest-growing surface for customer acquisition. We bridge the gap between awareness and action.
            </p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Demand Gen Campaigns", desc: "Using Meta-style 'Lookalike' modeling within the Google ecosystem to find new audiences across Shorts and Discover.", icon: Activity },
                { title: "Short-Form Storytelling", desc: "15-60 second high-energy clips that bridge the gap between 'Awareness' and 'Action' instantly.", icon: MobileIcon },
                { title: "YouTube Shopping", desc: "Enabling 'Product Feeds' directly under your video so users can shop without pausing the content.", icon: ShoppingBag }
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-[#FF6B35]/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FF6B35]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. The "Video Performance" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Video Performance Matrix</h2>
              <p className="text-lg text-slate-500">Why the YouTube engine outperforms legacy video advertising.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Metric</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Social Video Ads</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Targeting", basic: "Interest / Social", advanced: "Search Intent / Behavioral" },
                    { feat: "Cost Control", basic: "Volatile CPMs", advanced: "CPV Efficiency" },
                    { feat: "Durability", basic: "48-hour Decay", advanced: "Evergreen / Searchable" },
                    { feat: "Tracking", basic: "Post-Click only", advanced: "View-Through (VTC)" },
                    { feat: "Search Lift", basic: "Moderate", advanced: "High (Branded Lift)" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-8 font-black text-[#0F172A]">{row.feat}</td>
                      <td className="px-10 py-8 text-slate-400 italic">{row.basic}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section className="py-32 bg-[#FDF8F5]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">Video Growth FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "What is a 'Good' View-Through Rate (VTR) for YouTube Ads?",
                  a: "A healthy VTR typically ranges between 25% and 45% depending on the industry. However, Frameleads prioritizes Earned Views and Conversion Lift. If a user watches 30 seconds of your ad, skips, but then searches for your brand on Google 2 days later, we track that as a successful 'Assisted Conversion'."
                },
                {
                  q: "How do YouTube Ads help with my overall SEO?",
                  a: "YouTube videos are indexed as Rich Results in Google. By running ads, you drive 'Engagement Signals' to your video, which helps it rank organically in Google’s 'Video' tab and AI Overviews. This creates a 'Flywheel Effect' where paid traffic fuels organic authority."
                },
                {
                  q: "How much budget do I need to start?",
                  a: "While you can start with $10/day, we recommend a testing budget that allows for at least 50 conversion events per week per campaign to let the AI optimize effectively. For most brands, this starts at $1,500 - $3,000 per month."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#FFE2D9] shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden">
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1]">
                Is Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Invisible</span> on the Big Screen?
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most businesses treat YouTube as an afterthought. We treat it as a Revenue Engine. Our YouTube Growth Audit identifies the exact keywords and hooks needed to capture your audience.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My YouTube Strategy Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Video drives attention. These are the engines that convert it into equity.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Branding', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <link.icon className={`w-12 h-12 ${link.label === 'WhatsApp' ? 'text-[#25D366]' : 'text-[#FF6B35]'} mx-auto mb-6 transition-transform group-hover:scale-110`} />
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
