'use client'

import React from 'react'
import Link from 'next/link'
import {
  Mail,
  Zap,
  Target,
  Activity,
  ChevronRight,
  MousePointer2,
  Repeat,
  ArrowRight,
  CheckCircle2,
  LineChart,
  Cpu,
  ShieldCheck,
  Brain,
  Search,
  PenTool,
  Share2,
  MessageCircle,
  Settings,
  Inbox,
  ShieldAlert,
  BarChart,
  UserPlus,
  RefreshCcw,
  Layers,
  Sparkles,
  Search as SearchIcon,
  TrendingUp,
  Fingerprint,
  Palette,
  Video,
  Linkedin
} from 'lucide-react'

// JSON-LD Structured Data for Email Marketing & Automation
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Email Marketing & Automation Orchestration",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/email-marketing-and-automation-services"
  },
  "description": "Enterprise email automation, lifecycle marketing, and deliverability optimization services.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Retention Solutions Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Behavioral Automation Architecture" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical Deliverability Audit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Revenue Recovery" } }
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
      "name": "Is Email Marketing still effective in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it remains the highest ROI channel in digital marketing. For every $1 spent, email generates an average of $36-$40 in revenue. Its effectiveness has grown because it is the only platform where you own the data, bypassing the rising costs of social media ads."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a 'Newsletter' and a 'Lifecycle Flow'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A newsletter is a one-to-many broadcast sent at a specific time. A Lifecycle Flow is a one-to-one automated sequence triggered by a user's unique behavior (like visiting a pricing page 3 times). Flows consistently generate 5x more revenue per recipient than newsletters."
      }
    }
  ]
}

export default function EmailMarketingAutomationPage() {
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

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* 1. Retention Intelligence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            {/* Smart Inbox Styled Box */}
            <div className="bg-white border-2 border-[#E2E8F0] rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-[80px] -mr-32 -mt-32" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center border border-[#FF6B35]/20">
                  <Inbox className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Retention Intelligence</span>
                  <p className="text-[10px] text-slate-400 font-mono">STATUS: 2026.RTN.ACTIVE</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-[#F8FAFC] border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-ping" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                      <strong className="text-slate-900">Email Automation Summary:</strong> Frameleads engineers Behavioral Email Ecosystems that move beyond static blasts to <strong className="text-[#FF6B35]">Hyper-Personalized Lifecycle Flows</strong>. Resulting in a <strong className="text-[#FF8A50]">38% increase in LTV</strong> and 95%+ inbox placement.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-slate-400 font-mono text-xs">ROI_COEFFICIENT</span>
                    <span className="text-2xl font-black text-[#FF6B35]">40x</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {['Predictive Churn', 'BIMI Certified', '1st-Party Integration', 'DMARC Secure'].map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-[#FF6B35]" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Hero: The High-Equity Channel */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
              Own Your Audience.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x underline decoration-[#FF6B35]/20">Master the Inbox.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Social algorithms change. Ad costs rise. But your email list is <strong className="text-slate-900">Owned Equity</strong>. Frameleads builds automated email engines that nurture leads, recover lost revenue, and turn one-time buyers into lifelong brand advocates.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                Audit My Email Revenue Gap <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Behavioral Automation & Lifecycle Flows */}
        <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Moving from &quot;Broadcasts&quot; to <span className="text-[#FF6B35]">Behavioral Triggers</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, relevance is the only currency. We architect &quot;Always-On&quot; flows that trigger based on specific user actions:
                </p>

                <div className="space-y-10">
                  {[
                    { title: "The Welcome Engine", desc: "A multi-stage indoctrination sequence that segments users by interest from Day 1.", icon: UserPlus },
                    { title: "Predictive Abandonment", desc: "We track Browse Abandonment and Search Intent, triggering personalized offers before exit.", icon: RefreshCcw },
                    { title: "Win-Back & Re-Engagement", desc: "AI-driven identification of 'At-Risk' customers to deployment targeted incentives.", icon: Repeat }
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
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6B35]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Visual Interface for Flows */}
                  <div className="relative z-10 space-y-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-full flex items-center justify-center border border-[#FF6B35]/30">
                          <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                        </div>
                        <span className="text-white font-medium">TRIGGER: VISITED_PRICING_3X</span>
                      </div>
                      <span className="text-slate-500 font-mono text-xs">0.4ms</span>
                    </div>

                    <div className="flex justify-center flex-col items-center gap-4 text-slate-700">
                      <div className="w-0.5 h-12 bg-gradient-to-t from-[#FF6B35] to-transparent" />
                      <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.5)]">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-0.5 h-12 bg-gradient-to-b from-[#FF6B35] to-transparent" />
                    </div>

                    <div className="bg-[#FF6B35]/10 border-2 border-[#FF6B35]/40 p-8 rounded-[2rem] text-center transform scale-105 shadow-xl">
                      <span className="text-[#FF6B35] text-[10px] font-black tracking-widest uppercase block mb-2">Automated Execution</span>
                      <div className="text-white text-xl font-bold">SEND: VIP_DYNAMIC_OFFER</div>
                      <div className="text-slate-400 text-sm mt-2">Personalization Score: 98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Technical Deliverability & Trust */}
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF8A50] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Ensuring the <span className="text-[#FF8A50]">&quot;Primary Tab&quot;</span> Every Time
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  If your email isn&apos;t seen, it doesn&apos;t exist. We handle the complex technical infrastructure that &quot;standard&quot; agencies ignore:
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "BIMI Verification", desc: "Set up VMC certificates so your brand logo appears in the inbox, boosting open rates by 10%.", icon: Fingerprint },
                    { title: "Infrastructure Hardening", desc: "Full cryptographic authentication (DMARC, SPF, & DKIM) to prove your mail is safe.", icon: ShieldCheck },
                    { title: "List Hygiene Automation", desc: "Self-cleaning systems that automatically remove bot clicks and dead subscribers.", icon: RefreshCcw }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-2xl hover:border-[#FF8A50]/30 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-slate-100">
                        <item.icon className="w-6 h-6 text-[#FF8A50]" />
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
                <div className="bg-[#F8FAFC] rounded-[4rem] p-10 border-2 border-slate-100 relative overflow-hidden group">
                  <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative z-10">
                    <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                      <ShieldAlert className="w-6 h-6 text-[#FF6B35]" />
                      <span className="font-bold text-slate-800">Sender Reputation Score: 99/100</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-slate-500 uppercase tracking-widest">DMARC Status</span>
                        <span className="text-[#FF6B35] flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> PROTECTED</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full">
                        <div className="w-full h-full bg-[#FF6B35] rounded-full" />
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold pt-4">
                        <span className="text-slate-500 uppercase tracking-widest">BIMI Certified</span>
                        <span className="text-slate-600 flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> ACTIVE</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full">
                        <div className="w-11/12 h-full bg-slate-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Background Decorative Element */}
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF8A50]/10 rounded-full blur-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Zero-Party Data & Segmentation */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
              Personalization at Scale:<br />The Power of <span className="text-[#FF6B35]">Segments of One</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              We use Zero-Party Data (info users voluntarily share) to move beyond generic blasts.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Dynamic Content Blocks", desc: "One email, 1,000 versions. Images and offers change automatically based on past behavior.", icon: Layers },
                { title: "RFM Analysis", desc: "Segmenting by Recency, Frequency, and Monetary value to identify your 'VIPs' and 'Whales'.", icon: LineChart },
                { title: "Preference Centers", desc: "Giving users control over what they hear about, drastically reducing unsubscribe rates.", icon: Settings }
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-[#FF6B35]/50 transition-all duration-300 text-left">
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

        {/* 6. The "Email Maturity" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Email Maturity Matrix</h2>
              <p className="text-lg text-slate-500">Why standard email marketing is leaving 60% of your revenue on the table.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Basic Email Marketing</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Automation Hub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Sending Logic", basic: "Manual / Scheduled Blasts", advanced: "Behavioral / Trigger-Based" },
                    { feat: "Personalization", basic: "\"First Name\" Tags", advanced: "Dynamic SKU-Level Recommendations" },
                    { feat: "Testing", basic: "Subject Line A/B", advanced: "Multivariate Flow Testing" },
                    { feat: "Data Source", basic: "Static CSV Uploads", advanced: "Real-Time CRM & CDP Sync" },
                    { feat: "Goal", basic: "Open Rates", advanced: "Attributed Revenue & LTV" }
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
        <section className="py-32 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">Email Intelligence FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Is Email Marketing still effective in 2026?",
                  a: "Yes, it remains the highest ROI channel in digital marketing. For every $1 spent, email generates an average of $36-$40 in revenue. Its effectiveness has grown because it is the only platform where you own the data, bypassing the rising costs of social media ads."
                },
                {
                  q: "What is the difference between a 'Newsletter' and a 'Lifecycle Flow'?",
                  a: "A newsletter is a one-to-many broadcast sent at a specific time. A Lifecycle Flow is a one-to-one automated sequence triggered by a user's unique behavior (like visiting a pricing page 3 times). Flows consistently generate 5x more revenue per recipient than newsletters."
                },
                {
                  q: "How does BIMI help my business?",
                  a: "BIMI (Brand Indicators for Message Identification) allows your verified brand logo to appear next to your email in supported inboxes like Gmail. This builds immediate trust and has been shown to improve open rates by up to 10%."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-100 shadow-xl rounded-[3rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden">
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
                How Much Revenue is Hiding in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">&quot;Unengaged&quot; List?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most brands are sitting on a goldmine of data they don&apos;t know how to use. Our Email Revenue Audit identifies the &quot;Gaps&quot; in your lifecycle and the technical errors costing you inbox placement.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Email Revenue Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Email is the retention engine. Powered by specialized acquisition channels.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: SearchIcon, desc: 'Search authority hub.' },
                { label: 'Social Marketing', href: '/Social-media-marketing', icon: Share2, desc: 'Conversion-first reach.' },
                { label: 'WhatsApp', href: '/whatsapp-marketing', icon: MessageCircle, desc: 'Conversational ROI.' },
                { label: 'PPC Management', href: '/ppc-management', icon: Activity, desc: 'Revenue orchestration.' },
                { label: 'Content Strategy', href: '/content-marketing', icon: PenTool, desc: 'Entity-based authority.' },
                { label: 'CRO Optimization', href: '/conversion-rate-optimization', icon: Zap, desc: 'Behavioral revenue lift.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'Brand Strategy', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
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
