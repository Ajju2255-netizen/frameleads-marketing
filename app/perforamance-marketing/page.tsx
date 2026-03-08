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
  TrendingUp,
  LineChart as ChartIcon,
  ShieldAlert,
  Rocket,
  Mail,
  Palette,
  Music,
  Smartphone,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Performance Marketing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Marketing & Growth Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/perforamance-marketing"
  },
  "description": "High-velocity performance marketing specializing in ROI-driven scaling, value-based bidding, and full-funnel data attribution.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Performance Solutions Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Algorithmic Media Buying" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Velocity Creative Testing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive LTV Analytics" } }
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
      "name": "What is the difference between Digital Marketing and Performance Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital marketing is an umbrella term for all online activities. Performance Marketing is a subset focused strictly on measurable results (leads, sales, downloads) where the advertiser only pays for successful outcomes or tracks every cent to a specific ROI."
      }
    },
    {
      "@type": "Question",
      "name": "How do you prevent 'Ad Fatigue' when scaling a budget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use Creative Refresh Cycles. By maintaining a 'Creative Pipeline' that is 2 weeks ahead of our spend, we always have fresh hooks and visuals ready to swap in the moment the 'Frequency' or 'CPA' metrics begin to drift."
      }
    }
  ]
}

export default function PerformanceMarketingPage() {
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

        {/* 1. Performance Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.05] rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#FF8A50] opacity-[0.05] rounded-full blur-[120px] -ml-40 -mb-40 animate-pulse delay-700" />

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Dashboard-style Box */}
            <div className="bg-[#1E293B]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-[#FF6B35]/30 transition-all duration-500">
              {/* Decorative Data Lines */}
              <div className="absolute inset-x-0 bottom-0 h-32 opacity-20 pointer-events-none">
                <div className="flex items-end justify-around h-full gap-1">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 40, 75].map((h, i) => (
                    <div key={i} className="bg-gradient-to-t from-[#FF6B35] to-transparent w-full" style={{ height: `${h}%`, animation: `grow 2s ease-out forwards ${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/10">
                  <ChartIcon className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Performance Intelligence</span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-tighter">DATA NODE: 2026.PERF.TRACKER</span>
                </div>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug font-medium tracking-tight mb-8">
                Frameleads defines Performance Marketing as the <strong className="text-[#FF6B35]">Real-Time Convergence</strong> of data, creative, and distribution. Our 2026 framework eliminates &quot;Wasted Ad-Equity&quot; by focusing on <strong className="text-[#FF8A50]">MER and LTV</strong>, resulting in an average <strong className="text-white underline decoration-[#FF6B35] decoration-2">3.5x ROAS across competitive verticals</strong>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Avg ROAS", val: "3.5x", color: "#FF6B35" },
                  { label: "Data Integrity", val: "100%", color: "#FF8A50" },
                  { label: "Scale Velocity", val: "High", color: "#10B981" },
                  { label: "Waste Reduction", val: "40%", color: "#F59E0B" }
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

        {/* 2. The Hero: Growth Without Guesswork */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.2] tracking-tight mb-10 flex flex-col items-center">
              <span>Scaling is a Science.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] pb-2">Performance is the Proof.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-14">
              Most agencies report on &quot;Likes&quot; and &quot;Impressions.&quot; <strong className="text-gray-900">Frameleads reports on Revenue and Profit.</strong> We build high-velocity growth engines that track every dollar from first impression to bank deposit.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
                Get My Performance Roadmap <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Full-Funnel Data Integration */}
        <section className="relative z-10 py-24 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF6B35] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Bridging the &quot;Intent-to-Revenue&quot; Gap
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Performance marketing fails when data is siloed. We create a <strong className="text-gray-900">Unified Signal Loop</strong> that powers algorithmic bidding with real-world revenue data.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Cpu className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Server-Side API Tracking</h3>
                      <p className="text-gray-600">Bypassing browser limitations to ensure 100% of conversion data reaches your ad platforms despite cookie deprecation.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Repeat className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">CRM-to-Auction Loop</h3>
                      <p className="text-gray-600">Feeding your sales team&apos;s &quot;Qualified Lead&quot; data back into Google and Meta bidding algorithms to optimize for quality, not just quantity.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Target className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Granular Attribution</h3>
                      <p className="text-gray-600">Identifying exactly which creative asset or keyword drove the highest Profit Margin, allowing for precise budget allocation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-[#0F172A] rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col items-center">
                  {/* Data Signal Visualization */}
                  <div className="w-full space-y-6 relative z-10">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center group/item hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse" />
                        <span className="text-white font-mono text-sm tracking-tighter">CLICK: METAAD_082</span>
                      </div>
                      <span className="text-gray-500 font-mono text-[10px]">TIMESTAMP: 14:42:12</span>
                    </div>
                    <div className="flex justify-center py-4">
                      <ArrowRight className="w-8 h-8 text-[#FF6B35] rotate-90 animate-bounce" />
                    </div>
                    <div className="bg-[#FF6B35]/20 border border-[#FF6B35]/30 p-6 rounded-3xl flex flex-col items-center">
                      <span className="text-[10px] font-black text-[#FF6B35] uppercase tracking-widest mb-2">Server-Side Hub</span>
                      <div className="text-2xl font-bold text-white">REVENUE: $4,200</div>
                    </div>
                    <div className="flex justify-center py-4">
                      <ArrowRight className="w-8 h-8 text-[#FF8A50] rotate-90" />
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">FEEDBACK TO AD ENGINE</span>
                      <div className="text-green-400 font-bold mt-1">BID INCREASE: +25%</div>
                    </div>
                  </div>
                  {/* Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF6B35] opacity-[0.15] rounded-full blur-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Creative Velocity & Algorithmic Bidding */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF8A50] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Creative as the New Targeting Variable
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  In 2026, the &quot;Algorithm&quot; handles the audience. Our job is to feed it the right <strong className="text-gray-900">Creative Fuel</strong> to trigger scalable performance.
                </p>

                <div className="grid gap-6">
                  {[
                    { title: "Dynamic Testing", desc: "We deploy 50+ ad variations per week to identify the 'Winning Hook' before scaling budget.", icon: Rocket },
                    { title: "Hook-Rate Optimization", desc: "Analyzing the first 3 seconds of every video to ensure users don't scroll past your message.", icon: Eye },
                    { title: "Value-Based Bidding (VBB)", desc: "Instructing the AI to bid more for 'High-Value' lookalikes based on existing top-tier customer behavior.", icon: Brain }
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
              <div className="lg:w-1/2 relative group">
                <div className="bg-[#F8FAFC] rounded-[4rem] p-6 md:p-10 border border-gray-200 shadow-2xl relative overflow-hidden">
                  {/* Floating Analytics Badges */}
                  <div className="absolute top-8 right-8 bg-white shadow-lg rounded-2xl p-4 border border-orange-100 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="text-[10px] font-black text-[#FF6B35] uppercase mb-1">Creative Velocity</div>
                    <div className="text-xl font-bold">52 Ad-Sets / wk</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`bg-white rounded-[2rem] p-4 shadow-xl border-2 transition-all duration-500 relative overflow-hidden ${i === 2 ? 'border-[#FF6B35] scale-105 z-10' : 'border-transparent opacity-40 hover:opacity-60 grayscale hover:grayscale-0'}`}>
                        {i === 2 && (
                          <div className="absolute top-0 right-0 bg-[#FF6B35] text-white text-[8px] font-black px-4 py-1 rounded-bl-xl shadow-lg z-20">
                            WINNING HOOK
                          </div>
                        )}

                        {/* Ad Mockup */}
                        <div className="aspect-[4/5] bg-gray-50 rounded-2xl mb-4 overflow-hidden relative border border-gray-100">
                          {i === 2 && <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/10 to-transparent z-0" />}
                          <div className="absolute inset-4 space-y-2">
                            <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                            <div className="w-full h-2 bg-gray-100 rounded-full" />
                            <div className="w-3/4 h-2 bg-gray-100 rounded-full" />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 h-8 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-[#FF6B35] mr-2" />
                            <span className="text-[10px] font-black text-[#FF6B35] uppercase">Scaling</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center px-1">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">VAR_{i}</span>
                            <span className={`text-sm font-black ${i === 2 ? 'text-gray-900' : 'text-gray-400'}`}>
                              {i === 2 ? '4.82%' : '1.15%'}
                            </span>
                          </div>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 2 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            {i === 2 ? <CheckCircle2 className="w-5 h-5" /> : <Repeat className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Algorithmic Decision Overlay */}
                  <div className="mt-8 bg-[#0F172A] rounded-[2rem] p-6 shadow-2xl relative overflow-hidden group/insight">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-transparent opacity-0 group-hover/insight:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-xl flex items-center justify-center animate-pulse">
                        <Brain className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#FF6B35] text-[10px] font-black tracking-widest uppercase">Machine-Learning Insight</span>
                        <div className="text-white text-sm font-medium leading-relaxed italic">
                          &quot;Hook #2 identified as optimal winner with 99% confidence. Auto-scaling budget to $5,000/day.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Scale-Up Economics */}
        <section className="relative z-10 py-32 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Scale-Up Economics</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">Moving Beyond ROAS. We focus on the health of your entire ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "MER Framework", desc: "Calculating the Marketing Efficiency Ratio to understand the total impact of paid spend on organic lift.", icon: Globe },
                { title: "LTV:CAC Ratios", desc: "Ensuring your cost to acquire a customer is always mathematically justified by their long-term value.", icon: LineChart },
                { title: "Profitability Guardrails", desc: "Automated 'Kill-Switches' that pause campaigns the moment margins dip below your pre-set threshold.", icon: ShieldAlert }
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

        {/* 6. The "Performance Agency" Matrix */}
        <section className="relative z-10 py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">The Performance Agency Matrix</h2>

            <div className="overflow-x-auto rounded-[3rem] bg-[#0F172A] shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Growth Metric</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Traditional Ad Agency</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-[#FF6B35]">Frameleads Performance Hub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { item: "Primary KPI", standard: "Reach & Awareness", perf: "Net Profit & Scalable ROAS" },
                    { item: "Creative Logic", standard: "\"Big Idea\" / Subjective", perf: "Data-Validated Iteration" },
                    { item: "Bidding Logic", standard: "Manual / Static", perf: "Algorithmic & Predictive" },
                    { item: "Data Source", standard: "Sampled / Estimated", perf: "First-Party / Verified (SST)" },
                    { item: "Risk Management", standard: "Fixed Monthly Spend", perf: "Performance-Linked Scaling" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 font-bold text-gray-100">{row.item}</td>
                      <td className="px-10 py-8 text-gray-400 italic">{row.standard}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.perf}</td>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">Performance Intelligence FAQ</h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is the difference between Digital Marketing and Performance Marketing?",
                  a: "Digital marketing is an umbrella term for all online activities. Performance Marketing is a subset focused strictly on measurable results (leads, sales, downloads) where the advertiser only pays for successful outcomes or tracks every cent to a specific ROI."
                },
                {
                  q: "How do you prevent 'Ad Fatigue' when scaling a budget?",
                  a: "We use Creative Refresh Cycles. By maintaining a 'Creative Pipeline' that is 2 weeks ahead of our spend, we always have fresh hooks and visuals ready to swap in the moment the 'Frequency' or 'CPA' metrics begin to drift."
                },
                {
                  q: "How does performance marketing scale profitability?",
                  a: "By utilizing Predictive Attribution and Machine-Learning Guardrails, we only scale spend when your profitability thresholds (MER) are verified in real-time."
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
                Is Your Budget Stagnating or <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Accelerating?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Most brands hit a &quot;ceiling&quot; because their data is messy and their creative is stale. Our Performance Growth Audit identifies the exact bottleneck holding you back.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Performance Growth Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Complete Your Growth Stack</h2>
              <p className="text-gray-600">Performance is the core engine. Integrated with specialized channel dominance.</p>
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
                { label: 'CRO Optimization', href: '/conversion-rate-optimization', icon: Zap, desc: 'Behavioral revenue lift.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue engine.' },
                { label: 'Brand Strategy', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' }
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
        @keyframes grow {
          0% { height: 0%; opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </>
  )
}
