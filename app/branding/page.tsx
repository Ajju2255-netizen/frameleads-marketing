'use client'

import React from 'react'
import Link from 'next/link'
import {
  Palette,
  Sparkles,
  Zap,
  Target,
  Activity,
  ChevronRight,
  ShieldCheck,
  Brain,
  Search,
  PenTool,
  Share2,
  MessageCircle,
  Mail,
  MapPin,
  Cpu,
  TrendingUp,
  Layers,
  Layout,
  MousePointer2,
  Globe,
  Star,
  Compass,
  Type,
  Mic2,
  Table,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  Code,
  Video,
  Linkedin,
  Music,
  Smartphone,
  Pin
} from 'lucide-react'

// JSON-LD Structured Data for Branding Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Strategy & Visual Identity Design",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/branding"
  },
  "description": "Enterprise-level brand architecture, visual identity systems, and verbal strategy to build market-leading entities.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Branding Solutions Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategic Brand Positioning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visual Identity & System Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Voice & Narrative Strategy" } }
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
      "name": "Why is branding considered an SEO factor in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google’s algorithms now prioritize Brand Search Volume. When thousands of users search for your specific brand name rather than a generic keyword, it signals to Google that you are a trusted entity. This 'Branded Intent' is the strongest ranking signal for AI Overviews (AIO)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Logo and a Brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A logo is a signature; a Brand is the sum of every interaction a customer has with you. While a logo identifies you, the brand represents the promise of quality and the feeling a customer gets when they see your logo."
      }
    }
  ]
}

export default function BrandingPage() {
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

        {/* 1. Brand Authority Snapshot */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-white border-2 border-[#E2E8F0] rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-[80px] -mr-32 -mt-32" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center border border-[#FF6B35]/20">
                  <Star className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6B35]">Executive Summary</span>
                  <p className="text-[10px] text-slate-400 font-mono">CODE: ENTITY.BUILD_2026</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-[#F8FAFC] border border-slate-100 rounded-3xl group hover:border-[#FF6B35]/30 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-ping" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                      <strong className="text-slate-900">Branding Intelligence Summary:</strong> Frameleads engineers Market-Dominant Identities by aligning visual semiotics with psychological triggers. Our 2026 framework builds <strong className="text-[#FF6B35]">Brand Salience</strong> across both human memory and AI knowledge graphs, resulting in a <strong className="text-[#FF8A50]">25% reduction in CAC</strong> through organic trust.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-slate-400 font-mono text-xs">MARKET_EQUITY</span>
                    <span className="text-2xl font-black text-[#FF6B35]">HIGH</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {['Verbal Identity', 'Semiotics Strategy', 'Entity Architecture', 'Perceptual Mapping'].map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Hero: The Foundation of Scale */}
        <section className="relative py-24 px-4 bg-white overflow-hidden text-center">
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
              Don’t Just Exist.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x underline decoration-[#FF6B35]/20">Become an Entity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              In a world of AI-generated noise, a strong brand is your only moat. Frameleads builds <strong className="text-slate-900">High-Fidelity Brands</strong> that command premium pricing, inspire customer loyalty, and dominate search landscapes.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                Build My Brand Strategy <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Pillar 1: Strategic Brand Architecture */}
        <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  The DNA of <span className="text-[#FF6B35]">Market Leadership</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  Branding at Frameleads starts with deep-tissue strategy. We don&apos;t draw until we define your unique psychological footprint.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Competitive White Space", desc: "Identifying the gaps in your market where your brand can stand completely alone.", icon: Compass },
                    { title: "Core Narrative & Values", desc: "Developing the 'North Star' that guides your internal culture and external messaging.", icon: Brain },
                    { title: "The Perceptual Map", desc: "Plotting exactly how you are viewed (e.g., The Disruptor, The Sage) and engineering the reality.", icon: MapPin }
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

                  {/* Visual Interface for Strategy */}
                  <div className="relative z-10 space-y-10">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <span className="text-[#FF6B35] text-[10px] font-black tracking-widest uppercase">Perceptual Position</span>
                          <h4 className="text-2xl font-bold text-white mt-1">Market Authority</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-500 text-[10px] font-mono">SIG_STRENGTH</span>
                          <div className="text-xl font-black text-white">0.982</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-2 bg-white/10 rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-[85%] bg-[#FF6B35]" />
                        </div>
                        <div className="h-2 bg-white/10 rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-[92%] bg-[#FF8A50]" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-[#FF6B35]/10 border-2 border-[#FF6B35]/40 p-6 rounded-[2rem] text-center">
                        <span className="text-white text-xs font-bold uppercase tracking-widest">White Space</span>
                        <div className="text-2xl font-black text-[#FF6B35] mt-1">DETECTED</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Narrative</span>
                        <div className="text-2xl font-black text-white mt-1">LOCKED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Visual Identity & Semiotics */}
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-32 h-2 bg-[#FF8A50] mb-12 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                  High-Fidelity <span className="text-[#FF8A50]">Visual Systems</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  We create design systems that are &quot;Algorithm-Proof&quot;—built to be recognized instantly on a 1-inch smartphone screen or a 50-foot billboard.
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "Responsive Kinetic Marks", desc: "Logos that adapt to any digital or physical format without losing their structural integrity.", icon: Palette },
                    { title: "Psychological Color Palettes", desc: "Utilizing color semiotics to trigger subconscious responses like trust, urgency, or innovation.", icon: Sparkles },
                    { title: "Verbal Typography", desc: "Custom font systems that convey authority and readability across all 2026 digital interfaces.", icon: Type }
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

              <div className="lg:w-1/2 relative">
                <div className="bg-[#F8FAFC] rounded-[4rem] p-10 border-2 border-slate-100 relative overflow-hidden group">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative z-10 flex flex-col items-center">
                    {/* Brand Symbol Visualization */}
                    <div className="w-32 h-32 bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-full flex items-center justify-center relative group-hover:rotate-180 transition-transform duration-1000 shadow-[0_20px_40px_-10px_rgba(255,107,53,0.5)]">
                      <Fingerprint className="w-16 h-16 text-white" />
                      <div className="absolute -inset-4 border border-[#FF6B35]/20 rounded-full animate-spin [animation-duration:10s]" />
                    </div>

                    <div className="mt-12 w-full space-y-4">
                      <div className="h-4 bg-slate-100 rounded-full w-full" />
                      <div className="h-4 bg-slate-100 rounded-full w-3/4" />
                      <div className="flex gap-2 pt-4">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200" style={{ backgroundColor: i === 1 ? '#0F172A' : i === 2 ? '#FF6B35' : i === 3 ? '#FF8A50' : '' }} />
                        ))}
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

        {/* 5. Pillar 3: Verbal Identity & Tone of Voice */}
        <section className="relative py-32 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
              Your Brand’s <span className="text-[#FF6B35]">Digital Signature</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed">
              As AI voice search and chatbots grow, how you sound is as critical as how you look. We build the lexicon that ensures your brand sounds like a human authority.
            </p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Tone of Voice (ToV)", desc: "Building the lexicon that ensures your brand sounds consistent across LinkedIn, TikTok, and Email.", icon: Mic2 },
                { title: "Taglines & Value Props", desc: "Condensing complex business value into 'Sticky' phrases that stay in the prospect's memory.", icon: Layers },
                { title: "AI Persona Training", desc: "Providing documentation to ensure your AI customer service bots mirror your brand personality perfectly.", icon: Cpu }
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

        {/* 6. The "Brand Value" Matrix */}
        <section className="relative py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Brand Value Matrix</h2>
              <p className="text-lg text-slate-500">Why commodity businesses fade while Equity Brands dominate.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Commodity Business</th>
                    <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Equity Brand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feat: "Search Presence", basic: "Unoptimized / \"Blue Links\"", advanced: "Entity-Based / AI-Cited" },
                    { feat: "Pricing Power", basic: "Driven by Competitors", advanced: "Premium / Value-Based" },
                    { feat: "Marketing Efficiency", basic: "High CAC (Cold Traffic)", advanced: "Low CAC (Referral/Loyalty)" },
                    { feat: "Customer Relationship", basic: "Transactional", advanced: "Emotional / Community" },
                    { feat: "Resilience", basic: "Sensitive to Trends", advanced: "Indestructible Authority" }
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center text-center">Brand Intelligence FAQ</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Why is branding considered an SEO factor in 2026?",
                  a: "Google’s algorithms now prioritize Brand Search Volume. When thousands of users search for your specific brand name rather than a generic keyword, it signals to Google that you are a trusted entity. This 'Branded Intent' is the strongest ranking signal for AI Overviews (AIO)."
                },
                {
                  q: "What is the difference between a Logo and a Brand?",
                  a: "A logo is a signature; a Brand is the sum of every interaction a customer has with you. While a logo identifies you, the brand represents the promise of quality and the feeling a customer gets when they see your logo."
                },
                {
                  q: "How does branding reduce CAC?",
                  a: "A strong brand builds pre-sold confidence. Prospects who recognize and trust your brand convert at a much higher rate with fewer touchpoints, drastically reducing the Customer Acquisition Cost compared to generic competitors."
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
          <div className="bg-[#0F172A] rounded-[4rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center text-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[120px] -mr-60 -mt-60 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1]">
                Is Your Brand Growing or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Just Getting Older?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                If you hide your logo, could your customers still recognize you? Our Brand Identity Audit identifies the &quot;disconnects&quot; between who you are and how the market perceives you.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My Brand Identity Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Brand is the soul. These are the specialized growth channels that scale it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Social Marketing', href: '/Social-media-marketing', icon: Share2, desc: 'Conversion-first reach.' },
                { label: 'WhatsApp', href: '/whatsapp-marketing', icon: MessageCircle, desc: 'Conversational ROI.' },
                { label: 'Email Automation', href: '/email-marketing-and-automation-services', icon: Mail, desc: 'Lifecycle revenue.' },
                { label: 'PPC Management', href: '/ppc-management', icon: Activity, desc: 'Revenue orchestration.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
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
      `}</style>
    </>
  )
}
