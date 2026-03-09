'use client'

import React from 'react'
import Link from 'next/link'
import {
  Triangle,
  Zap,
  Target,
  Calculator,
  Layers,
  Infinity,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  BarChart3,
  Search,
  Timer,
  Globe,
  MessageCircle,
  Mail,
  Palette,
  Code,
  Share2,
  PlayCircle,
  ChevronRight,
  Brain,
  MousePointer2,
  Activity,
  Fingerprint,
  Users,
  Database,
  Video,
  Linkedin,
  Music,
  Pin,
  Smartphone,
  ShoppingBag
} from 'lucide-react'

// JSON-LD Structured Data for Meta Ads Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Ads Management & Social Performance Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/meta-ads"
  },
  "description": "Enterprise-level Facebook & Instagram Ads management specializing in CAPI integration, Reels-first creative, and Advantage+ optimization.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversions API (CAPI) Implementation" } },
      { "@type": { "@type": "Service", "name": "High-Velocity Reels Production" } },
      { "@type": { "@type": "Service", "name": "Advantage+ Campaign Architecture" } }
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
      "name": "Why is my Meta Ads ROAS dropping even though my CTR is high?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is often a Signal-to-Creative Gap. A high CTR means your ad is interesting, but if your ROAS is low, you are likely attracting the wrong 'Type' of clicker. We solve this by adjusting the 'Call to Action' and improving your CAPI match quality to find users with higher purchase intent."
      }
    },
    {
      "@type": "Question",
      "name": "How does web development impact my Google Ads and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website speed and structure are direct ranking factors. A faster site improves your Quality Score in Google Ads (lowering your CPC) and increases your Dwell Time in organic search, signaling to Google that your site provides a superior user experience."
      }
    }
  ]
}

export default function MetaAdsPage() {
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

        {/* 1. Meta Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-white border-2 border-[#FFE2D9] rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(255,107,53,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-[80px] -mr-32 -mt-32" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center border border-[#FF6B35]/20">
                  <Share2 className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Social Graph Intelligence</span>
                  <p className="text-[10px] text-slate-400 font-mono">NODE: META_ALGO_SYNC.2026</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-[#FFF9F6] border border-[#FFE2D9] rounded-3xl group hover:border-[#FF6B35]/30 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-ping" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                      <strong className="text-slate-900">Meta Ads Strategy Summary:</strong> Frameleads engineers High-Velocity Meta Ad Ecosystems that leverage <strong className="text-[#FF6B35]">Advantage+</strong> and <strong className="text-[#FF6B35]">CAPI</strong> for maximum data fidelity. Our 2026 framework integrates Creative-Led Growth, resulting in an average <strong className="text-[#FF8A50]">4.2x ROAS</strong>.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-slate-400 font-mono text-xs">ALGO_FIT_SCORE</span>
                    <span className="text-2xl font-black text-[#FF6B35]">98%</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {['Creative-Led Targeting', 'CAPI Server-Side', 'Incremental Lift', 'Retention-First Retargeting'].map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-white border border-[#FFE2D9] rounded-full text-xs font-bold text-slate-500 shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Hero: Beyond the Newsfeed */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
              Scalable Revenue.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x underline decoration-[#FF6B35]/20">Not Just Reach.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Meta’s AI is powerful, but it’s only as good as the data and creative you feed it. Frameleads builds <strong className="text-slate-900">Performance-First Meta Campaigns</strong> that stop the scroll and track every conversion.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My Meta Ad Account <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Creative-Led Growth */}
        <section className="relative py-32 bg-[#FDF8F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Creative is the <span className="text-[#FF6B35]">New Targeting</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, Meta&apos;s &quot;Broad&quot; targeting often outperforms narrow interests. We focus on building Creative Assets that Target the modern buyer.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "The 3-Second Hook", desc: "Engineering the first few seconds of Reels and Stories to 'Self-Segment' your audience instantly.", icon: PlayCircle },
                    { title: "UGC & Creator-Style Content", desc: "Leveraging the 'Lo-Fi' aesthetic that users trust more than polished corporate commercials.", icon: Users },
                    { title: "Dynamic Asset Iteration", desc: "Launching 'Asset Groups' that Meta's AI can remix and optimize in real-time for different user profiles.", icon: Layers }
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
                  <div className="relative z-10 space-y-10">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] text-center">
                      <div className="text-[#FF6B35] text-[10px] font-black tracking-widest uppercase mb-4">Targeting Methodology</div>
                      <div className="text-3xl font-black text-white">CREATIVE_LED</div>
                      <div className="mt-4 flex justify-center gap-2">
                        {[1, 2, 3, 4].map(i => <div key={i} className="h-1 w-8 bg-[#FF6B35]/30 rounded-full" />)}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Hook Rate</span>
                        <div className="text-2xl font-black text-white mt-1">42%</div>
                      </div>
                      <div className="bg-white/5 border border-white/20 p-6 rounded-[2rem] text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Hold Rate</span>
                        <div className="text-2xl font-black text-[#FF6B35] mt-1">18%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Signal Integrity & CAPI */}
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF8A50] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Solving the <span className="text-[#FF8A50]">Privacy-First Gap</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  The Meta Pixel is no longer enough. To win in 2026, you need a Server-Side Connection that bypasses browser restrictions.
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "CAPI Integration", desc: "We link your server directly to Meta's, recovering up to 30% of 'lost' data from ad-blockers.", icon: ShieldCheck },
                    { title: "Offline Conversion Sync", desc: "Feeding your CRM's 'Closed Deal' data back to Meta to train the algorithm for high-value buyers.", icon: Database },
                    { title: "Advanced Matching", desc: "Utilizing hashed first-party data to increase match rates and improve Lookalike Audience accuracy.", icon: Fingerprint }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#FDF8F5] p-8 rounded-[2.5rem] border border-[#FFE2D9] flex gap-6 hover:shadow-2xl hover:border-[#FF8A50]/30 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-[#FFE2D9] font-black text-[#FF8A50]">
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

              <div className="lg:w-1/2 relative text-center">
                <div className="bg-[#F8FAFC] rounded-[4rem] p-10 border-2 border-slate-100 flex flex-col items-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center shadow-xl mb-8 relative">
                    <ShieldCheck className="w-16 h-16 text-white" />
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping" />
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="h-4 bg-green-100 rounded-full w-full flex overflow-hidden">
                      <div className="bg-green-500 w-[95%]" />
                    </div>
                    <p className="text-sm font-bold text-slate-400 font-mono">SIGNAL_MATCH_QUALITY: EXCELLENT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Advantage+ Ecosystem */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
              Strategy Meets <span className="text-[#FF6B35]">Machine Learning</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              Meta&apos;s AI (Advantage+) is a &quot;Black Box&quot; that needs human oversight. We provide the strategic guardrails to ensure profitability.
            </p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Advantage+ Shopping (ASC)", desc: "Automating the path to purchase for E-commerce brands with streamlined campaign architectures.", icon: Target },
                { title: "Creative Testing Sandboxes", desc: "Running low-budget tests to find 'Winning' ads before moving them into high-spend campaigns.", icon: Activity },
                { title: "Omnichannel Retargeting", desc: "Using Meta to re-engage users who interacted with Google Ads or Email flows.", icon: Share2 }
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

        {/* 6. The "Social Performance" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Social Performance Matrix</h2>
              <p className="text-lg text-slate-500">Why standard Meta ads fail when scaling.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Standard Meta Ads</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Growth Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Tracking Method", basic: "Browser Pixel (Incomplete)", advanced: "CAPI & Server-Side (Verified)" },
                    { feat: "Targeting Logic", basic: "Interest & Demographics", advanced: "Creative-Led / Algorithmic" },
                    { feat: "Testing Pace", basic: "1 - 2 Ads per month", advanced: "5 - 10 New Hooks per week" },
                    { feat: "Optimization", basic: "Cost-Per-Click (CPC)", advanced: "Conversion Value / ROAS" },
                    { feat: "Creative Style", basic: "Static / One-Size-Fits-All", advanced: "Native Reels / Dynamic Assets" }
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">Social Intelligence FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Why is my Meta Ads ROAS dropping even though my CTR is high?",
                  a: "This is often a Signal-to-Creative Gap. A high CTR means your ad is interesting, but if your ROAS is low, you are likely attracting the wrong 'Type' of clicker. We solve this by adjusting the 'Call to Action' and improving your CAPI match quality to find users with higher purchase intent."
                },
                {
                  q: "How do Reels ads differ from Newsfeed ads?",
                  a: "Reels ads are Engagement-First. They require a faster pace, vertical (9:16) formatting, and 'Sound-On' creative. While Newsfeed ads are great for direct-response, Reels ads are the primary driver of Discovery and Top-of-Funnel growth in 2026."
                },
                {
                  q: "Is interest targeting completely dead?",
                  a: "Not entirely, but its efficacy has halved. We use broad targeting for scale and interest-based for niche testing or when first launching a brand to give the algorithm its initial 'starting north' before letting the creative do the heavy lifting."
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
                Is Your Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Outpacing Your Spend?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most Meta accounts fail because the creative is &quot;stale&quot; and the tracking is &quot;blind.&quot; Our Meta Performance Audit identifies the exact creative fatigue and data gaps holding your account back.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Meta Performance Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Social is for discovery. These are the specialized growth channels that scale it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Branding', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'WhatsApp', href: '/whatsapp-marketing', icon: MessageCircle, desc: 'Conversational ROI.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' }
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
