'use client'

import Link from 'next/link'
import {
  BarChart3,
  Search,
  Zap,
  Target,
  Activity,
  ChevronRight,
  MousePointer2,
  PieChart,
  Repeat,
  ArrowRight,
  CheckCircle2,
  LineChart,
  Cpu,
  Globe,
  PenTool,
  Share2,
  MessageCircle,
  Eye,
  Microscope,
  Brain,
  ShieldCheck,
  ZapOff,
  Flame,
  Layout,
  MousePointerClick,
  Mail,
  Palette
} from 'lucide-react'

// JSON-LD Structured Data for CRO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conversion Rate Optimization & UX Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/conversion-rate-optimization"
  },
  "description": "Scientific A/B testing, Heatmapping, and User Psychology services to increase website revenue and lead generation.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CRO Solutions Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "A/B & Multivariate Split Testing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "User Behavior & Heatmap Analysis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Psychological Audits" } }
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
      "name": "What is a 'Good' Conversion Rate for my industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While average rates vary (2% for E-commerce, 5-10% for B2B Lead Gen), Frameleads focuses on Incremental Lift. A 1% increase in conversion rate for a business doing $1M in revenue is an extra $10,000/month without spending a penny more on ads."
      }
    },
    {
      "@type": "Question",
      "name": "How does CRO affect my SEO and Google Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRO is a massive ranking factor. Google tracks User Signals (Dwell Time, Bounce Rate). If users stay on your site and convert, Google views your page as 'High Quality,' which lowers your PPC Cost-Per-Click and boosts your Organic Rankings."
      }
    }
  ]
}

export default function ConversionOptimizationPage() {
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

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

        {/* 1. Conversion Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.05] rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#FF8A50] opacity-[0.05] rounded-full blur-[120px] -ml-40 -mb-40 animate-pulse delay-700" />

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Optimization Logic Box */}
            <div className="bg-[#1E293B]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-[#FF6B35]/30 transition-all duration-500">
              {/* Decorative Data Lines */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-scan" style={{ animationDelay: '1s' }} />
                <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF8A50] to-transparent animate-scan" style={{ animationDelay: '3s' }} />
                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-scan" style={{ animationDelay: '5s' }} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/10">
                  <Activity className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Conversion Intelligence</span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-tighter">OPTIMIZATION NODE: 2026.CRO.FRAMELEADS</span>
                </div>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug font-medium tracking-tight mb-8">
                Frameleads transforms passive traffic into active revenue through <strong className="text-[#FF6B35]">Behavioral Heuristics</strong> and Predictive UX Testing. Our 2026 framework focuses on <strong className="text-[#FF8A50]">INP Optimization</strong> and Algorithmic Personalization, resulting in an average <strong className="text-white underline decoration-[#FF6B35] decoration-2">40% increase in lead-to-sale conversion</strong>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Lead Lift", val: "+40%", color: "#FF6B35" },
                  { label: "UX Confidence", val: "95%+", color: "#FF8A50" },
                  { label: "INP Speed", val: "< 200ms", color: "#10B981" },
                  { label: "Revenue ROI", val: "2.5x", color: "#F59E0B" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-xl font-black" style={{ color: stat.color }}>{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Hero: The Revenue Multiplier */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.2] tracking-tight mb-10 flex flex-col items-center">
              <span>Double Your Revenue Without</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] pb-2">Increasing Your Ad Spend.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-14">
              Stop pouring water into a leaky bucket. Frameleads uses <strong className="text-gray-900">Scientific A/B Testing</strong> and Neuromarketing to turn your existing traffic into a high-velocity sales machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
                Get a Free Conversion Audit <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Behavioral Data & Heatmapping */}
        <section className="relative z-10 py-24 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF6B35] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Decoding the &quot;Silent Bounces&quot; with Visual Analytics
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  We don&apos;t guess why users leave; we watch them. We use a &quot;Triangulation&quot; method to find the truth behind every bounce.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Flame className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Heatmapping & Click-Tracking</h3>
                      <p className="text-gray-600">We identify &quot;Dead Clicks&quot;—where users expect an interaction but find none, indicating UI friction.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Eye className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Session Replays</h3>
                      <p className="text-gray-600">We watch real users navigate your site to find the exact moment of frustration or cognitive load spikes.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Layout className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Form Analytics</h3>
                      <p className="text-gray-600">Identifying which specific field in your checkout or lead form is causing users to abandon the process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/5 aspect-square flex flex-col items-center justify-center overflow-hidden relative">
                  {/* Heatmap Simulation Layer */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-[10%] left-[20%] w-40 h-40 bg-red-500 rounded-full blur-[60px] animate-pulse" />
                    <div className="absolute top-[40%] left-[60%] w-24 h-24 bg-yellow-500 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-[20%] left-[30%] w-32 h-32 bg-[#FF6B35] rounded-full blur-[50px] animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>

                  {/* UI Mockup Elements */}
                  <div className="relative z-10 w-full space-y-4 opacity-30">
                    <div className="h-4 bg-white/20 rounded-full w-1/3" />
                    <div className="h-64 bg-white/5 rounded-3xl border border-white/10" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-white/5 rounded-2xl" />
                      <div className="h-20 bg-white/5 rounded-2xl" />
                      <div className="h-20 bg-white/5 rounded-2xl" />
                    </div>
                  </div>

                  {/* Analytics Overlays */}
                  <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-20">
                    <div className="text-[10px] text-gray-400 uppercase mb-1">Dwell Time</div>
                    <div className="text-xl font-bold text-white">04:12m</div>
                  </div>

                  <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-20">
                    <div className="text-[10px] text-gray-400 uppercase mb-1">Bounce Risk</div>
                    <div className="text-xl font-bold text-red-400">High (72%)</div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="relative">
                      <div className="absolute -inset-8 bg-[#FF6B35]/20 rounded-full blur-2xl animate-ping" />
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                        <MousePointerClick className="w-8 h-8 text-[#FF6B35]" />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#FF6B35] text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap">
                        DEAD CLICK DETECTED
                      </div>
                    </div>
                  </div>

                  {/* Tracking Lines */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Scientific A/B Testing */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF8A50] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  The &quot;Champion vs. Challenger&quot; Framework
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Every change we make is backed by a statistical hypothesis. We never redesign based on a hunch; we prove it with math.
                </p>

                <div className="grid gap-6">
                  {[
                    { title: "Hypothesis Generation", desc: "We predict how changing headlines or social proof will increase conversion.", icon: Microscope },
                    { title: "The Split Test", desc: "Running Control against Variation simultaneously to see the real-world winner.", icon: Repeat },
                    { title: "Statistical Significance", desc: "We only declare a winner when we are 95%+ certain of the result.", icon: ShieldCheck }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl flex gap-6 hover:border-[#FF8A50]/30 transition-all group">
                      <div className="w-12 h-12 bg-[#FF8A50]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8A50] transition-colors">
                        <item.icon className="w-6 h-6 text-[#FF8A50] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-[#F8FAFC] rounded-[3rem] p-6 md:p-12 shadow-inner border border-gray-200 aspect-[4/3] flex items-center justify-center gap-6 md:gap-10">
                  {/* Card 1: CHAMPION (Previously Control) */}
                  <div className="w-1/2 h-full bg-white rounded-[2rem] shadow-xl flex flex-col p-6 border-2 border-gray-100 relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Champion</span>
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="h-3 bg-gray-100 rounded-full w-full" />
                      <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                      <div className="h-3 bg-gray-100 rounded-full w-4/6" />
                    </div>
                    <div className="mt-auto">
                      <div className="h-10 bg-gray-200 rounded-xl w-full flex items-center justify-center text-[10px] font-bold text-gray-400">BUY NOW</div>
                      <div className="mt-4 flex justify-between text-[10px] font-bold text-gray-400 italic">
                        <span>CR: 2.1%</span>
                        <span>(Baseline)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: CHALLENGER */}
                  <div className="w-1/2 h-full bg-white rounded-[2rem] shadow-2xl flex flex-col p-6 border-2 border-[#FF6B35]/30 relative group overflow-hidden">
                    {/* Winning Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF6B35] opacity-10 rounded-full blur-3xl" />

                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-[#FF6B35] uppercase tracking-widest">Challenger</span>
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="h-3 bg-orange-50 rounded-full w-full border border-orange-100" />
                      <div className="h-3 bg-orange-50 rounded-full w-5/6 border border-orange-100" />
                      <div className="h-3 bg-orange-50 rounded-full w-4/6 border border-orange-100" />
                    </div>
                    <div className="mt-auto">
                      <div className="h-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-xl w-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                        GRAB OFFER <Zap className="w-3 h-3 ml-1 fill-white" />
                      </div>
                      <div className="mt-4 flex justify-between text-[10px] font-bold text-[#FF6B35]">
                        <span>CR: 3.8%</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">+81% LIFT</span>
                      </div>
                    </div>
                  </div>

                  {/* Legend Overlay */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 text-[10px] font-bold text-gray-500 shadow-sm z-20">
                    STATISTICAL CONFIDENCE: 98.4%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Psychological Triggers */}
        <section className="relative z-10 py-32 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black mb-6">The Neuromarketing Edge</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">Conversion is psychology. We apply Cialdini&apos;s Principles of Persuasion to build instant trust.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Social Proof 2.0", desc: "Moving beyond generic testimonials to 'Social Pulse' notifications and verified cues.", icon: Share2 },
                { title: "Loss Aversion", desc: "Using strategic urgency and scarcity without being manipulative to drive action.", icon: Zap },
                { title: "Cognitive Ease", desc: "Simplifying 'Choice Architecture' so users never have to think about their next move.", icon: Brain }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#FF6B35]/50 transition-all group-hover:bg-[#FF6B35]/10">
                    <item.icon className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. The "Conversion Lift" Matrix */}
        <section className="relative z-10 py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">The Conversion Lift Matrix</h2>

            <div className="overflow-x-auto rounded-[3rem] bg-[#0F172A] shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Element</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Standard Web Design</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-[#FF6B35]">Frameleads CRO Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { item: "Design Logic", standard: "Aesthetic Preference", cro: "Data-Backed Performance" },
                    { item: "Mobile UX", standard: "Responsive Only", cro: "Mobile-First Interaction (INP)" },
                    { item: "Call-to-Action", standard: "Single / Static", cro: "Dynamic / Intent-Based" },
                    { item: "Copywriting", standard: "Feature-Focused", cro: "Benefit & Objection-Based" },
                    { item: "Load Speed", standard: "3 - 5 Seconds", cro: "< 1.5 Seconds (LCP Optimized)" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 font-bold text-gray-100">{row.item}</td>
                      <td className="px-10 py-8 text-gray-400 italic">{row.standard}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.cro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">Optimizing Knowledge</h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is a 'Good' Conversion Rate for my industry?",
                  a: "While averages vary (2% for E-com, 5-10% for B2B), we focus on Incremental Lift. A 1% increase for a $1M business is an extra $10k/month without spending a penny more on ads."
                },
                {
                  q: "How does CRO affect my SEO and Google Ads?",
                  a: "CRO is a massive ranking factor. If users stay and convert, Google views your page as 'High Quality,' which lowers your PPC Cost-Per-Click and boosts Organic Rankings."
                },
                {
                  q: "What tools do you use for heatmapping and testing?",
                  a: "We utilize enterprise-level tools like Hotjar, Microsoft Clarity, and VWO. This allows us to gather both qualitative and quantitative data for every hypothesis."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-xl rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">{faq.q}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed pl-4">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3.5rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Is Your Website Your Best Salesman or <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Your Biggest Bottleneck?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Most websites are designed to look pretty, not to sell. Our Conversion Leak Audit identifies the exact friction points costing you sales right now.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Free Conversion Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Complete Your Technical Ecosystem</h2>
              <p className="text-gray-600">Sync your conversion intelligence with high-performance tracking and search dominance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {[
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding & Yield.' },
                { label: 'PPC Management', href: '/ppc-management', icon: Activity, desc: 'Revenue orchestration.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority framework.' },
                { label: 'Social Marketing', href: '/Social-media-marketing', icon: Share2, desc: 'Conversion-first architecture.' },
                { label: 'Content Strategy', href: '/content-marketing', icon: PenTool, desc: 'Entity-based authority.' },
                { label: 'WhatsApp Marketing', href: '/whatsapp-marketing', icon: MessageCircle, desc: 'Conversational ROI.' },
                { label: 'Data & Automation', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Data Intelligence.' },
                { label: 'Digital Marketing', href: '/digital-marketing-services', icon: BarChart3, desc: 'Full-funnel architecture.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue engine.' },
                { label: 'Brand Strategy', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                  <link.icon className={`w-12 h-12 ${link.label === 'WhatsApp Marketing' ? 'text-[#25D366]' : 'text-[#FF6B35]'} mx-auto mb-6`} />
                  <h3 className={`text-xl font-bold text-gray-900 ${link.label === 'WhatsApp Marketing' ? 'group-hover:text-[#25D366]' : 'group-hover:text-[#FF6B35]'} transition-colors mb-2`}>{link.label}</h3>
                  <p className="text-gray-600 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
