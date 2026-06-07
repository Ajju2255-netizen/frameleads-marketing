'use client'

import Link from 'next/link'
import {
  BarChart3,
  Search,
  Zap,
  Target,
  Activity,
  ChevronRight,
  Database,
  Brain,
  Settings,
  Shield,
  MousePointer2,
  PieChart,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Lock,
  LineChart,
  Server,
  Cloud,
  Cpu,
  Globe,
  PenTool,
  Share2,
  MessageCircle,
  TrendingUp,
  Mail,
  Palette
} from 'lucide-react'

// JSON-LD Structured Data for Analytics & Automation
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing Analytics & Automation Architecture",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/analytics-and-automations"
  },
  "description": "Enterprise-level data infrastructure, Server-Side Tracking, and AI-driven marketing automation workflows.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Intelligence Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server-Side Tagging Implementation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Sales Pipeline Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom BI Dashboard Development" } }
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
      "name": "What is Server-Side GTM and why do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Server-Side Google Tag Manager (sGTM) allows you to move tracking pixels from the user's browser to a secure server. This is essential in 2026 to combat ad-blockers, comply with GDPR/CCPA, and ensure your ad platforms (Google/Meta) receive 100% of conversion signals."
      }
    },
    {
      "@type": "Question",
      "name": "How does automation improve my Google Ads ROI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation improves ROI by providing Cleaner Signals. When your CRM 'talks' to your Ads account via automation, the Google algorithm learns exactly what a 'Closed Deal' looks like, allowing it to bid more aggressively for high-value users."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate my CRM with my marketing dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We specialize in mapping back-end CRM data (HubSpot, Salesforce, etc.) to front-end behavior. This allows you to track the exact ROI of every campaign down to the individual lead level."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Marketing Data Stack Audit take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive audit typically takes 5-7 business days. We analyze your GTM setup, verify tag accuracy, and identify signal gaps that are causing 'dark' conversions."
      }
    }
  ]
}

export default function AnalyticsAutomationPage() {
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

        {/* 1. Data Integrity Snapshot (Command Center style) */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.05] rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#FF8A50] opacity-[0.05] rounded-full blur-[120px] -ml-40 -mb-40 animate-pulse delay-700" />

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Command Center Box */}
            <div className="bg-[#1E293B]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-[#FF6B35]/30 transition-all duration-500">
              {/* Decorative Data Lines */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-scan" style={{ animationDelay: '1s' }} />
                <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF8A50] to-transparent animate-scan" style={{ animationDelay: '3s' }} />
                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-scan" style={{ animationDelay: '5s' }} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/10">
                  <Database className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Data Integrity Snapshot</span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-tighter">SECURE NODE: 2026.FRAMELEADS.INFO</span>
                </div>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug font-medium tracking-tight mb-8">
                Frameleads engineers <strong className="text-[#FF6B35]">Unified Data Ecosystems</strong> by bridging the gap between front-end behavior and back-end revenue. We utilize <strong className="text-[#FF8A50]">Server-Side GTM</strong> and AI Attribution to eliminate signal loss. Our 2026 framework results in a <strong className="text-white underline decoration-[#FF6B35] decoration-2">22% increase in ROAS</strong> through cleaner algorithmic bidding.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Data Accuracy", val: "99.9%", color: "#FF6B35" },
                  { label: "Reporting Velocity", val: "Real-Time", color: "#FF8A50" },
                  { label: "Signal Gap", val: "0.0%", color: "#10B981" },
                  { label: "Manual Overhead", val: "-50%", color: "#F59E0B" }
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

        {/* 2. The Hero: Intelligence That Acts */}
        <section className="relative py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.2] tracking-tight mb-10 flex flex-col items-center">
              <span>Stop Collecting Data.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] pb-2">Start Executing Insight.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
              Most brands are drowning in data but starving for insights. Frameleads builds <strong className="text-gray-900">Autonomous Marketing Engines</strong> that track every touchpoint and automate every repetitive task.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
                Audit My Data Stack <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>

          {/* Floating Data Nodes Visualization */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-[#FF6B35] rounded-full blur-[60px]" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#FF8A50] rounded-full blur-[60px]" />
          </div>
        </section>

        {/* 3. Pillar 1: Advanced Analytics & Measurement */}
        <section className="relative z-10 py-24 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF6B35] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Solving the &quot;Signal Loss&quot; Crisis
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Standard browser tracking is broken by privacy laws and cookie deprecation. We fix the <strong className="text-gray-900">Signal Gap</strong> with privacy-first infrastructure.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Server className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Server-Side Tracking (SST)</h3>
                      <p className="text-gray-600">Bypass ad-blockers and improve page speed by moving tracking from the browser to your own secure server.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Activity className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">GA4 Custom Event Architecture</h3>
                      <p className="text-gray-600">We track deep behavior: Scroll Depth, Video Engagement, and Form-Field Abandonment.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-colors shadow-xl border border-gray-100">
                      <Brain className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Predictive Analytics</h3>
                      <p className="text-gray-600">Utilize machine learning to identify users with the highest propensity to purchase before they even convert.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                {/* Visual Representation of SST */}
                <div className="relative bg-[#0F172A] rounded-[3rem] p-12 shadow-2xl border border-white/5 aspect-square flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                  <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-8">
                    {/* Browser Node */}
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 opacity-50">
                      <Globe className="text-gray-400 w-8 h-8" />
                      <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/50 w-1/3" />
                      </div>
                      <span className="text-[10px] text-red-400 font-mono">SIGNAL BLOCKED</span>
                    </div>
                    {/* Server Node */}
                    <div className="flex items-center gap-4 bg-[#FF6B35]/10 p-6 rounded-2xl border border-[#FF6B35]/30 animate-pulse">
                      <Server className="text-[#FF6B35] w-10 h-10" />
                      <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6B35] w-full animate-progress" />
                      </div>
                      <span className="text-[10px] text-[#FF6B35] font-black">100% RECOVERY</span>
                    </div>
                    {/* CRM Node */}
                    <div className="flex items-center gap-4 bg-[#FF8A50]/10 p-4 rounded-2xl border border-[#FF8A50]/30">
                      <Database className="text-[#FF8A50] w-8 h-8" />
                      <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF8A50] w-full" />
                      </div>
                      <span className="text-[10px] text-[#FF8A50] font-mono">DATA VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Marketing & Sales Automation */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#FF8A50] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  The &quot;Zero-Manual&quot; Marketing Pipeline
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  We replace &quot;busy work&quot; with <strong className="text-gray-900">Agentic Workflows</strong> that work 24/7 to nurture and convert your leads.
                </p>

                <div className="grid gap-6">
                  {[
                    { title: "Lead Scoring & Routing", desc: "Automatically tag leads and route high-value prospects to Slack/WhatsApp.", icon: Target },
                    { title: "Automated Nurture Sequences", desc: "Multi-channel triggers (Email, SMS) that adapt to user interaction.", icon: Repeat },
                    { title: "Dynamic Personalization", desc: "Change headlines and offers based on industry or purchase history.", icon: Zap }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl flex gap-6 hover:border-[#FF8A50]/30 transition-all">
                      <div className="w-12 h-12 bg-[#FF8A50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#FF8A50]" />
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
                {/* Visual Representation of Automation Pipeline */}
                <div className="relative bg-[#F8FAFC] rounded-[3rem] p-8 shadow-inner border border-gray-200 aspect-[4/3] overflow-hidden">
                  <div className="space-y-4">
                    <div className="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 animate-slide-in" style={{ animationDelay: '0s' }}>
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3" />
                      <span className="text-xs font-bold text-gray-700">New Lead: Enterprise SaaS</span>
                      <span className="ml-auto text-[10px] text-gray-400">0.02s ago</span>
                    </div>
                    <div className="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                      <div className="w-2 h-2 bg-[#FF8A50] rounded-full mr-3" />
                      <span className="text-xs font-bold text-gray-700">Scoring: Quality Tier A+</span>
                      <span className="ml-auto text-[10px] text-gray-400">0.05s ago</span>
                    </div>
                    <div className="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3" />
                      <span className="text-xs font-bold text-gray-700">Routed to Sales (WhatsApp)</span>
                      <span className="ml-auto text-[10px] text-gray-400">0.08s ago</span>
                    </div>
                    <div className="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3" />
                      <span className="text-xs font-bold text-gray-700">Nurture Loop Triggered</span>
                      <span className="ml-auto text-[10px] text-gray-400">0.12s ago</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: AI-Powered Attribution & BI */}
        <section className="relative z-10 py-32 bg-[#0F172A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Seeing the Whole Truth</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">Stop guessing which channel &quot;won&quot; the sale. We build Unified BI dashboards that track the entire lifecycle.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Multi-Touch Attribution", desc: "Value the first YouTube view, middle blog post, and final search click.", icon: PieChart },
                { title: "Real-Time Dashboards", desc: "Custom Looker Studio reports syncing Ad Spend, Sales, and Margins.", icon: LineChart },
                { title: "LTV Tracking", desc: "Identify which channels bring the most loyal, long-term customers.", icon: Activity }
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

        {/* 6. The "Efficiency" Matrix */}
        <section id="efficiency-matrix" className="relative z-10 py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">The Efficiency Matrix</h2>

            <div className="overflow-x-auto rounded-[3rem] bg-[#0F172A] shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-gray-400">Manual Process</th>
                    <th className="px-10 py-8 text-sm font-bold uppercase tracking-wider text-[#FF6B35]">Frameleads Ecosystem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "Data Accuracy", manual: "70% (Estimated/Browser)", auto: "99% (Server-Side/Verified)" },
                    { feature: "Reporting Speed", manual: "Weekly / Monthly (Manual)", auto: "Real-Time / On-Demand" },
                    { feature: "Lead Response", manual: "2 - 12 Hours", auto: "< 60 Seconds (Instant)" },
                    { feature: "Ad Optimization", manual: "Human Guesswork", auto: "Algorithmic Signal Bridging" },
                    { feature: "Scalability", manual: "Limited by Headcount", auto: "Infinite (Agentic Workflows)" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 font-bold text-gray-100">{row.feature}</td>
                      <td className="px-10 py-8 text-gray-400 italic">{row.manual}</td>
                      <td className="px-10 py-8 text-[#FF6B35] font-black">{row.auto}</td>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">Intelligence FAQ</h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is Server-Side GTM and why do I need it?",
                  a: "Server-Side GTM moved tracking from the user's browser to a secure server. This is essential in 2026 to combat ad-blockers, remain privacy-compliant (GDPR/CCPA), and ensure conversion signals are delivered 100% of the time."
                },
                {
                  q: "How does automation improve my Google Ads ROI?",
                  a: "By providing 'Cleaner Signals.' When your CRM sends real conversion data (not just clicks) back to Google's AI, it learns exactly which users are most valuable, leading to more efficient bidding and lower acquisition costs."
                },
                {
                  q: "Can you integrate my CRM with my marketing dashboard?",
                  a: "Yes. We specialize in mapping back-end CRM data (HubSpot, Salesforce, etc.) to front-end behavior. This allows you to track the exact ROI of every campaign down to the individual lead level."
                },
                {
                  q: "How long does a Marketing Data Stack Audit take?",
                  a: "A comprehensive audit typically takes 5-7 business days. We analyze your GTM setup, verify tag accuracy, and identify signal gaps that are causing 'dark' conversions."
                },
                {
                  q: "Do I need to change my current website to implement automation?",
                  a: "In most cases, no. Our automation layer sits on top of your existing stack using API integrations and server-side logic, meaning you don't need a total rebuild to see ROI."
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

        {/* 8. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3.5rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Is Your Marketing Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">A Liability or An Asset?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Most companies make million-dollar decisions based on 60% accurate data. Our Data Stack Audit identifies the gaps in your tracking and the manual tasks killing your productivity.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Data & Automation Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Complete Your Technical Ecosystem</h2>
              <p className="text-gray-600">Sync your tracking architecture with high-performance paid media and search dominance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <Link href="/google-ads" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <Target className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Google Ads</h3>
                <p className="text-gray-600 text-sm">Value-Based Bidding & Yield.</p>
              </Link>

              <Link href="/ppc-management" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <Activity className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">PPC Management</h3>
                <p className="text-gray-600 text-sm">Revenue orchestration.</p>
              </Link>

              <Link href="/seo-services" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <Search className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">SEO Dominance</h3>
                <p className="text-gray-600 text-sm">Search authority framework.</p>
              </Link>

              <Link href="/Social-media-marketing" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <Share2 className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Social Marketing</h3>
                <p className="text-gray-600 text-sm">Conversion-first architecture.</p>
              </Link>

              <Link href="/content-marketing" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <PenTool className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Content Strategy</h3>
                <p className="text-gray-600 text-sm">Entity-based authority.</p>
              </Link>

              <Link href="/whatsapp-marketing" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-2xl transition-all duration-500">
                <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">WhatsApp Marketing</h3>
                <p className="text-gray-600 text-sm">Conversational ROI.</p>
              </Link>

              <Link href="/digital-marketing-services" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <BarChart3 className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel architecture.</p>
              </Link>

              <Link href="/conversion-rate-optimization" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500">
                <Zap className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">CRO Optimization</h3>
                <p className="text-gray-600 text-sm">Behavioral revenue lift.</p>
              </Link>

              <Link href="/perforamance-marketing" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500 text-center">
                <TrendingUp className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Performance Marketing</h3>
                <p className="text-gray-600 text-sm">Real-time revenue convergence.</p>
              </Link>

              <Link href="/email-marketing-and-automation-services" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500 text-center">
                <Mail className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Email Automation</h3>
                <p className="text-gray-600 text-sm">Lifecycle revenue engine.</p>
              </Link>

              <Link href="/branding" className="group p-8 bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500 text-center">
                <Palette className="w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Brand Strategy</h3>
                <p className="text-gray-600 text-sm">Market-Dominant Identity.</p>
              </Link>
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
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
