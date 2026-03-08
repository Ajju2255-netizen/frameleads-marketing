'use client'

import React from 'react'
import Link from 'next/link'
import {
  Code,
  Terminal,
  Cpu,
  Globe,
  Zap,
  ShieldCheck,
  Search,
  Activity,
  ChevronRight,
  Database,
  Layers,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Share2,
  Mail,
  Palette,
  Layout,
  MousePointer2,
  Server,
  Zap as ZapIcon,
  HelpCircle,
  HardDrive,
  Brain,
  MessageCircle,
  Video,
  Linkedin,
  Music,
  Smartphone,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Web Development Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical Web Engineering & Performance Development",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/website-development"
  },
  "description": "Enterprise-level headless development, SEO-ready architecture, and performance engineering for high-growth brands.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Engineering Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Headless CMS Implementation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Core Web Vitals Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce System Architecture" } }
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
      "name": "What is a 'Headless' Website and why does it matter in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Headless website decouples the frontend (what users see) from the backend (where content is managed). This allows for extreme speed, better security, and the ability to push your content to any device (mobile, web, IoT, or AI agents) via a single API."
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

export default function WebDevPage() {
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

        {/* 1. Engineering Excellence Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-[#0F172A] border-b-4 border-[#1E293B] rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.3)] relative overflow-hidden font-mono">
              {/* Developer Console UI Decorations */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[10px] text-slate-500 uppercase tracking-widest">frameleads_engine_v4.0.2</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#38BDF8]">➜</span>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    <span className="text-[#FF6B35] font-bold">Web Engineering Summary:</span> Frameleads builds High-Performance Digital Assets engineered for the AI-first search era. We move beyond static templates to <span className="text-[#38BDF8]">Headless Architectures</span> and <span className="text-[#38BDF8]">Server-Side Rendering (SSR)</span>.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#38BDF8]">➜</span>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Our 2026 framework prioritizes <span className="text-[#10B981]">Interaction to Next Paint (INP)</span> and <span className="text-[#10B981]">Semantic Schema Injection</span>, ensuring 100/100 Core Web Vitals.
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-[#FF6B35] font-bold">LCP_OPTIMIZATION</span>
                    <span className="text-[10px] text-green-500 animate-pulse">OPTIMIZED</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF6B35] w-[98%]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            </div>
          </div>
        </section>

        {/* 2. The Hero: The Architecture of Authority */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
              Don’t Just Build.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x underline decoration-[#FF6B35]/20">Engineer Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Your website is your most valuable employee. Is it working 24/7 to convert, or is it a technical bottleneck? Frameleads builds <strong className="text-slate-900">Secure, Scalable, and AI-Ready</strong> systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                Start My Technical Roadmap <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Performance-First Engineering */}
        <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Solving for Speed: <span className="text-[#FF6B35]">The INP Revolution</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  In 2026, a 3-second load time is an eternity. We build for &quot;Instant-On&quot; experiences that reduce bounce rates and maximize crawl efficiency.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Headless & Decoupled Architecture", desc: "Separating the frontend from the backend to allow for lightning-fast delivery via optimized CDNs.", icon: Layers },
                    { title: "Edge Computing", desc: "Deploying site assets to the 'edge'—closest to the user—to reduce latency to near-zero globally.", icon: ZapIcon },
                    { title: "Asset Optimization", desc: "Next-gen image formats (AVIF/WebP) and code-splitting to ensure the browser only loads what is necessary.", icon: Database }
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
                  {/* Visual Interface for Performance */}
                  <div className="relative z-10 space-y-10">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <span className="text-[#FF6B35] text-[10px] font-black tracking-widest uppercase">Core Web Vitals</span>
                          <h4 className="text-2xl font-bold text-white mt-1">LCP: 0.8s</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-500 text-[10px] font-mono">STATUS</span>
                          <div className="text-xl font-black text-green-500">EXCELLENT</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>INP (Interaction to Next Paint)</span>
                          <span>12ms</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-[10%] bg-green-500" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-[#10B981]/10 border border-[#10B981]/20 p-6 rounded-[2rem] text-center">
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Edge Hit</span>
                        <div className="text-2xl font-black text-[#10B981] mt-1">100%</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Payload</span>
                        <div className="text-2xl font-black text-white mt-1">12kb</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Semantic Structure & AI-Readiness */}
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF8A50] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  Building for <span className="text-[#FF8A50]">Robots and Humans</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  A website must be as easy for an AI crawler to &quot;understand&quot; as it is for a human to &quot;read.&quot; We engineer for the generative search era.
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "JSON-LD Entity Mapping", desc: "We hardcode rich schema into your site’s architecture, defining your services for Google's Knowledge Graph.", icon: Code },
                    { title: "Clean Code & Logical Hierarchy", desc: "Eliminating bloated CSS to ensure LLM scrapers (GPT-Bot) can index your content without errors.", icon: Terminal },
                    { title: "Internal Link Graphing", desc: "Automating the internal link structure to distribute 'Link Equity' to your most profitable pages.", icon: Share2 }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-2xl hover:border-[#FF8A50]/30 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-slate-100 font-black text-[#FF8A50]">
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

              <div className="lg:w-1/2 relative space-y-6">
                <div className="bg-[#0F172A] rounded-[3rem] p-8 shadow-2xl overflow-hidden relative">
                  <pre className="text-[10px] md:text-xs text-[#38BDF8] leading-relaxed">
                    <code>{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Market Strategy",
  "brand": {
    "@type": "Brand",
    "name": "Frameleads"
  },
  "potentialAction": {
    "target": "https://frameleads.com/query"
  }
}`}</code>
                  </pre>
                  <div className="absolute bottom-4 right-4 bg-green-500 h-2 w-2 rounded-full animate-bubble" />
                </div>
                <div className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-900">AI Knowledge Graph Status</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs"><span>Entity Linkage</span><span className="text-green-600 font-bold">100%</span></div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Scalability, Security, & Integration */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
              Future-Proof Your <span className="text-[#FF6B35]">Digital Investment</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              We don&apos;t build sites that break next year. We build systems that scale with your revenue and talk perfectly to your tech stack.
            </p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "API-First Integration", desc: "Ensuring your site connects perfectly to your CRM (HubSpot/Salesforce), ERP, and Analytics stack.", icon: Server },
                { title: "Hardened Security", desc: "Implementation of Web Application Firewalls (WAF) and automated vulnerability scanning to protect data.", icon: ShieldCheck },
                { title: "User-Centric UX", desc: "Designing interfaces that reduce 'Cognitive Load,' making the path from landing to lead friction-free.", icon: MousePointer2 }
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

        {/* 6. The "Development Standard" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Development Standard Matrix</h2>
              <p className="text-lg text-slate-500">Why engineered hubs outperform template websites.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Template / DIY Website</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Engineered Hub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Load Speed", basic: "3.5s+ (Bloated Content)", advanced: "< 1.0s (Performance Optimized)" },
                    { feat: "SEO Foundation", basic: "Basic Plug-ins Only", advanced: "Deep Semantic Schema Integration" },
                    { feat: "Mobile UX", basic: "Responsive Only", advanced: "Kinetic UI / INP Optimized" },
                    { feat: "Scalability", basic: "Hard-Coded / Rigid", advanced: "API-First / Modular Architecture" },
                    { feat: "AI Visibility", basic: "Hard to Scrape/Understand", advanced: "Optimized for AIO & GEO" }
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center">Technical Engineering FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "What is a 'Headless' Website and why does it matter in 2026?",
                  a: "A Headless website decouples the frontend (what users see) from the backend (where content is managed). This allows for extreme speed, better security, and the ability to push your content to any device (mobile, web, IoT, or AI agents) via a single API."
                },
                {
                  q: "How does web development impact my Google Ads and SEO?",
                  a: "Website speed and structure are direct ranking factors. A faster site improves your Quality Score in Google Ads (lowering your CPC) and increases your Dwell Time in organic search, signaling to Google that your site provides a superior user experience."
                },
                {
                  q: "Can you migrate my existing content to a new architectural hub?",
                  a: "Yes. We handle seamless content migrations from WordPress, Shopify, and custom CMSs. Our process ensures 100% SEO preservation by implementing exact 301 redirect mapping and semantic data parity."
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
                Is Your Website a Growing Asset or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Technical Debt?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                Most websites are built to &quot;look nice&quot; but fail on a technical level. Our Full-Stack Technical Audit identifies the speed bottlenecks, security holes, and SEO gaps that are holding your business back.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Technical Site Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">The website is the hub. These are the engines that drive commerce to it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Branding', href: '/branding', icon: Palette, desc: 'Market-Dominant Identity.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'WhatsApp', href: '/whatsapp-marketing', icon: MessageCircle, desc: 'Conversational ROI.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue.' },
                { label: 'PPC Management', href: '/ppc-management', icon: Activity, desc: 'Revenue orchestration.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' }
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
        @keyframes bubble {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .animate-bubble {
          animation: bubble 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
