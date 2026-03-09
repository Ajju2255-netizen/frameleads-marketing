'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Linkedin,
  Target,
  Users,
  TrendingUp,
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  ShieldCheck,
  Zap,
  Cpu,
  BarChart3,
  Globe,
  MessageSquare,
  FileText,
  Mail,
  Smartphone,
  MousePointer2,
  Search,
  Palette,
  Code,
  Share2,
  Video,
  Activity,
  Award,
  Fingerprint,
  Database,
  Lock,
  Network,
  Music,
  Pin,
  ShoppingBag
} from 'lucide-react'

// JSON-LD Structured Data for LinkedIn Ad Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LinkedIn Ads Management & ABM Strategy",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/linkedin-ads"
  },
  "description": "Enterprise-level LinkedIn Ads management specializing in Account-Based Marketing (ABM), Thought-Leader ads, and CAPI integration.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "B2B Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Account-Based Marketing (ABM) Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Conversions API Implementation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thought-Leader Ad Creative" } }
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
      "name": "Why are LinkedIn Ads so expensive compared to Meta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You aren't paying for 'traffic'; you are paying for Data Accuracy. LinkedIn allows you to target a 'Senior VP of IT at a Fortune 500 company'—a segment Meta cannot guarantee. While the CPC is higher, the Customer Lifetime Value (LTV) of a LinkedIn lead is typically 5x–10x higher than other platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good Lead Form Completion Rate on LinkedIn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a well-optimized 'Document Ad' or 'Lead Gen Form,' we aim for 10%–15%. By using 'Auto-fill' features that pull data directly from the user's profile, we remove the friction that kills conversion on mobile devices."
      }
    }
  ]
}

export default function LinkedInAdsPage() {
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

        {/* 1. B2B Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-t-4 border-[#FF6B35] shadow-[0_48px_96px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#FF6B35] p-3 rounded-2xl">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">B2B Intelligence Hub</span>
                  <p className="text-[10px] text-slate-400 font-mono">ACCOUNT_ORCHESTRATION.2026</p>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-1 h-20 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full mt-2" />
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic">
                    <span className="text-[#FF6B35] font-black uppercase tracking-tighter mr-2 italic-none">LinkedIn Ads Summary:</span> Frameleads engineers Precision B2B Growth Engines by leveraging LinkedIn’s <span className="text-slate-900 font-bold underline decoration-[#FF6B35]/30">first-party professional data</span>. We move beyond basic job-title targeting to Account-Based Orchestration and CAPI-enabled pipeline growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">MQL-to-SQL Lift</div>
                    <div className="text-3xl font-black text-[#FF6B35]">+24%</div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Pipeline Accuracy</div>
                    <div className="text-3xl font-black text-slate-900">VERIFIED</div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">CAPI Fidelity</div>
                    <div className="text-3xl font-black text-[#FF6B35]">100%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. The Hero: The High-Ticket Engine */}
        <section className="relative py-24 px-4 overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[0.95] tracking-tight mb-10">
                Target the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">Decision-Makers.</span>
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              In B2B, one "wrong" click is a waste of $20. One "right" click is a $100k contract. Bypass the gatekeepers and put your solution directly in front of the CEOs and VPs who hold the budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(255,107,53,0.3)] hover:scale-105 transition-all duration-300 group">
                Build My ABM Roadmap <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: ABM & Matched Audiences */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Precision Targeting: <span className="text-[#FF6B35]">Account-Based Mastering</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  We use LinkedIn’s data layer as a laser-guided scalpel to build a <strong className="text-slate-900">strategic fortress</strong> around your target accounts.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Account Uploads", desc: "Sync your CRM’s target list to serve ads only to employees of specific high-value companies.", icon: Building2 },
                    { title: "Contact Targeting", desc: "Upload your cold outreach lists to warm up prospects via social touchpoints before the sales call.", icon: Users },
                    { title: "Website Retargeting 2.0", desc: "Identify job titles of site visitors via the Insight Tag, then retarget only the 'Decision Maker' tier.", icon: Fingerprint }
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

              <div className="lg:w-1/2 relative">
                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
                  {/* Enterprise Dashboard UI Mimic */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                      </div>
                      <div className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black text-[#FF6B35] uppercase tracking-widest border border-white/10">
                        ABM_ORCHESTRATOR.v4
                      </div>
                    </div>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                      <div className="text-slate-500 text-[10px] font-black uppercase mb-4 tracking-widest">Active Account Pursuit</div>
                      <div className="space-y-4">
                        {[
                          { name: "Global Tech Inc.", match: "98%", status: "Decision Maker Sync" },
                          { name: "Fortune 500 Bank", match: "100%", status: "VP-Level Retargeting" },
                          { name: "SaaS Enterprise", match: "94%", status: "Warm-Up Sequence" }
                        ].map((acc, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                            <span className="text-white font-bold">{acc.name}</span>
                            <span className="text-[#FF6B35] font-black text-xs">{acc.match} MATCH</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Thought-Leader Ads */}
        <section className="relative py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-right lg:text-left">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full ml-auto lg:ml-0" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8 text-right lg:text-left">
                  The <span className="text-[#FF6B35]">Thought-Leader</span> Revolution
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, people buy from people, not logos. We leverage LinkedIn’s most powerful ad format to build <strong className="text-slate-900">E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trust).
                </p>

                <div className="space-y-6">
                  {[
                    { title: "The Executive Boost", desc: "Promoting posts directly from your CEO or Subject Matter Experts to build authentic trust.", icon: Award },
                    { title: "Conversational Ads", desc: "Direct-to-Inbox messaging that feels like a personal 1-to-1 outreach triggered by professional intent.", icon: MessageSquare },
                    { title: "Document Ads", desc: "Providing high-value whitepapers directly in-feed to capture leads without landing page friction.", icon: FileText }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-xl transition-all group">
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

              <div className="lg:w-1/2 relative h-[600px] flex items-center justify-center">
                {/* ENHANCED DESIGN: Thought-Leader Analysis Console */}
                <div className="relative w-full max-w-lg">
                  {/* Background Glows */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-transparent blur-3xl rounded-full" />

                  {/* The "Ad Post" Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-6 relative z-10 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4">
                      <div className="p-2 bg-[#FF6B35]/10 rounded-full animate-pulse">
                        <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        {/* Animated Social Signal Ring */}
                        <div className="absolute -inset-1 border-2 border-[#FF6B35] rounded-full animate-ping opacity-30" />
                        <div className="w-14 h-14 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden border-2 border-white relative z-10 shadow-lg">
                          <div className="w-full h-full bg-gradient-to-br from-[#FF6B35]/20 to-slate-200 flex items-center justify-center">
                            <Users className="w-7 h-7 text-[#FF6B35]" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-black text-slate-900 leading-none">Frameleads Enterprise</span>
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]/10" />
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Thought-Leader Ad • Promoted</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-slate-600 text-sm italic font-medium">
                          "In high-ticket B2B, content isn't just awareness—it's **Semantic Authority**. Our 2026 framework ensures your CEO's insights are indexed as the definitive source..."
                        </p>
                      </div>

                      <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[#FF6B35]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Floating Meta-Data */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-lg border border-white/10 px-3 py-1.5 rounded-lg">
                          <div className="text-[10px] font-black text-white uppercase flex items-center gap-2">
                            <Zap className="w-3 h-3 text-[#FF6B35]" /> High Retention Creative
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400">+4k</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[#FF6B35] text-white text-xs font-black rounded-xl shadow-lg shadow-[#FF6B35]/30 flex items-center gap-2"
                      >
                        DOWNLOAD ABM PDF <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Floating Engineering Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -right-12 top-12 bg-[#0F172A] p-6 rounded-3xl shadow-2xl border border-white/10 z-20 hidden lg:block"
                  >
                    <div className="text-[10px] font-black text-[#FF6B35] uppercase tracking-widest mb-4">Sentiment Map</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '92%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-[#FF6B35]"
                          />
                        </div>
                        <span className="text-[10px] font-mono text-white">92% POS</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">ENHANCING_EAAT_SIGNALS...</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute -left-12 bottom-12 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 z-20 hidden lg:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center">
                        <Fingerprint className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase">Lead Quality</div>
                        <div className="text-xl font-black text-slate-900">IDENTIFIED</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Signal Integrity & CAPI */}
        <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Closing the Loop: <span className="text-[#FF6B35]">Lead to Revenue</span></h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">LinkedIn Ads are expensive; we ensure every dollar is accounted for by mapping social touchpoints to closed-won deals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "LinkedIn CAPI", desc: "Bypass browser tracking issues to ensure 100% data accuracy for the algorithm to optimize.", icon: Network },
                { title: "CRM Automation", desc: "Pushing leads from LinkedIn into HubSpot or Salesforce in under 60 seconds.", icon: Database },
                { title: "Offline Tracking", desc: "Sending 'Closed-Won' signal back to LinkedIn to find more high-value profiles.", icon: Lock }
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

        {/* 6. B2B Efficiency Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-4">The B2B Ad Efficiency Matrix</h2>
              <p className="text-xl text-slate-500">How LinkedIn's deterministic data solves B2B scale.</p>
            </div>

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Metric</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Meta Ads (B2B)</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">LinkedIn Hub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Targeting Logic", basic: "Interest/Behavior", advanced: "Professional Identity" },
                    { feat: "Lead Quality", basic: "Signal Noise", advanced: "Highest (Verified Data)" },
                    { feat: "Primary Use Case", basic: "Awareness", advanced: "Strategic ABM / Enterprise" },
                    { feat: "Tracking Fidelity", basic: "Moderate", advanced: "Maximum (CAPI + Insight)" },
                    { feat: "Reach Strategy", basic: "Job Title (Modeled)", advanced: "Verified Decision Maker" }
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">B2B Strategy FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Why are LinkedIn Ads so expensive compared to Meta?",
                  a: "You aren't paying for 'traffic'; you are paying for Data Accuracy. LinkedIn allows you to target a 'Senior VP of IT at a Fortune 500 company'—a segment Meta cannot guarantee. While the CPC is higher, the LTV of a LinkedIn lead is typically 5x–10x higher."
                },
                {
                  q: "What is a good Lead Form Completion Rate on LinkedIn?",
                  a: "For well-optimized Document Ads, we aim for 10%–15%. LinkedIn's auto-fill feature removes the friction that usually kills mobile conversion."
                },
                {
                  q: "Does LinkedIn Ad spend help my organic ranking?",
                  a: "Yes. High social engagement signals (Likes, Shares) on Thought-Leader ads are tracked by AI search engines like Gemini as authority markers, often increasing your visibility in B2B knowledge graphs."
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
                In the "Room Where <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35]">It Happens"?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most LinkedIn accounts fail because they target Job Titles instead of Buying Committees. Our Audit identifies the waste in your current targeting.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#FF6B35] text-white font-black text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My B2B Pipeline Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Pipeline is vanity; equity is sanity. These are the models that scale it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Branding', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' }
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
