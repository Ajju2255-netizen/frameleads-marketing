'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Activity,
  Factory,
  Car,
  Monitor,
  Heart,
  Briefcase,
  Wrench,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
  Plane,
  Gamepad2,
  ShieldCheck,
  ArrowRight,
  Brain,
  Database,
  Zap,
  ChevronRight,
  ArrowUpRight,
  Search
} from 'lucide-react'

// JSON-LD Structured Data for Industries Hub
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Frameleads Cross-Industry Growth Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com"
  },
  "description": "Specialized digital marketing and growth engineering across Manufacturing, Healthcare, SaaS, Retail, and Financial sectors.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industry Verticals",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Industrial Growth" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Patient Acquisition" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Velocity Scaling" } }
    ]
  }
}

export default function IndustriesHubPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const industryList = [
    {
      title: "Manufacturing & Industrial",
      icon: Factory,
      link: "/manufacturing-and-industrial",
      lever: "RFQ Orchestration",
      category: "Industrial & Technical",
      desc: "Optimizing for the \"Supply Chain Discovery\" era through component-level indexing and RFQ orchestration."
    },
    {
      title: "Automotive & Mobility",
      icon: Car,
      link: "/automotive-marketing",
      lever: "Showroom-Ready Leads",
      category: "Industrial & Technical",
      desc: "Driving \"Showroom-Ready\" appointments through real-time VDP (Vehicle Detail Page) sync and EV-specific education hubs."
    },
    {
      title: "Technology & SaaS",
      icon: Monitor,
      link: "/technology-and-saas",
      lever: "Product-Led Growth",
      category: "Industrial & Technical",
      desc: "Scaling recurring revenue through Product-Led Growth (PLG) and LTV:CAC optimization."
    },
    {
      title: "Healthcare & Medical",
      icon: Heart,
      link: "/healthcare-and-medical",
      lever: "Patient Trust (HIPAA)",
      category: "High-Trust & Professional",
      desc: "Patient-centric discovery built on a foundation of HIPAA compliance and clinical E-E-A-T."
    },
    {
      title: "Financial Services",
      icon: Briefcase,
      link: "/financial-services",
      lever: "Authority Building",
      category: "High-Trust & Professional",
      desc: "Precision wealth-management growth focusing on high-net-worth intent and regulatory-safe attribution."
    },
    {
      title: "Professional Services",
      icon: Wrench,
      link: "/professional-services-marketing",
      lever: "Entity-Based SEO",
      category: "High-Trust & Professional",
      desc: "Positioning consultancies and law firms as \"First-Cited\" authorities through entity-based SEO."
    },
    {
      title: "Education & EdTech",
      icon: GraduationCap,
      link: "/education-and-training",
      lever: "Enrollment Engineering",
      category: "High-Trust & Professional",
      desc: "Enrollment-first engineering that bridges the gap between curriculum depth and career outcomes."
    },
    {
      title: "E-commerce & Retail",
      icon: ShoppingCart,
      link: "/ecommerce",
      lever: "MER Scaling",
      category: "Lifestyle, Retail & Ent.",
      desc: "High-velocity retail scaling using Server-Side CAPI and profit-first MER tracking."
    },
    {
      title: "Food & Beverage",
      icon: UtensilsCrossed,
      link: "/food-beverage-marketing",
      lever: "Craving-to-Commerce",
      category: "Lifestyle, Retail & Ent.",
      desc: "Craving-to-commerce engineering for CPG brands and multi-unit restaurant groups."
    },
    {
      title: "Travel & Hospitality",
      icon: Plane,
      link: "/travel-hospitality-marketing",
      lever: "Identity-Based SEO",
      category: "Lifestyle, Retail & Ent.",
      desc: "Personalized journey architecture for boutique stays and luxury tour operators."
    },
    {
      title: "Gaming & Entertainment",
      icon: Gamepad2,
      link: "/gaming-marketing",
      lever: "Player LTV & Retention",
      category: "Lifestyle, Retail & Ent.",
      desc: "Player-first retention loops and community-led growth for titles and streaming platforms."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-0 overflow-x-hidden">

        {/* 1. Sector Intelligence Command Center (Hero) */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden flex flex-col justify-center">
          {/* Background Grid & Glows */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] mix-blend-multiply" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Text Content */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-xs font-black uppercase tracking-[0.2em] mb-8">
                  <Database className="w-4 h-4" /> Global Sector Intelligence
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[1.05] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0F172A] to-slate-700">
                  Growth Engineering <br />
                  Across 15+ Sectors.
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl">
                  We combine Proprietary AI Stacks with Deep-Vertical Data to solve the <span className="text-[#FF6B35] italic">&quot;Conversion Gap&quot;</span> unique to each industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#verticals" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-black text-lg rounded-[2rem] shadow-[0_15px_30px_-10px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300">
                    Explore Verticals <ChevronRight className="w-5 h-5 text-[#FF6B35]" />
                  </Link>
                </div>
              </motion.div>

              {/* Right UI Dashboard / Snippet */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#FF6B35] to-orange-300 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="bg-white border border-slate-100 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col group-hover:scale-[1.01] transition-transform duration-700">
                  {/* Console Header */}
                  <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                    </div>
                    <div className="text-xs font-mono text-slate-400 font-bold tracking-widest uppercase italic">Ecosystem_Overview</div>
                    <Activity className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-[#0F172A] mb-6 tracking-tight">Frameleads Industry Ecosystem</h3>
                    <p className="text-slate-500 leading-relaxed font-medium mb-8 text-lg">
                      From HIPAA-compliant medical leads to high-velocity e-commerce signal integrity, our framework ensures your growth is driven by <strong className="text-[#0F172A]">Institutional Authority</strong> and <strong className="text-[#FF6B35]">Technical Precision</strong>.
                    </p>
                    <div className="space-y-4">
                      {[
                        { label: 'Nano Banana AI Stack', status: 'ACTIVE', progress: 100 },
                        { label: 'ElevenLabs Integration', status: 'SYNCED', progress: 100 },
                        { label: 'Cross-Vertical Data Lake', status: 'PROCESSING', progress: 78 }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mb-2">
                            <span>{item.label}</span>
                            <span className={item.progress === 100 ? "text-[#FF6B35]" : "text-[#0F172A]"}>{item.status}</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#FF6B35] shadow-[0_0_10px_rgba(255,107,53,0.5)]" style={{ width: `${item.progress}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. Seamless Industry Listing */}
        <section id="verticals" className="relative py-32 bg-[#F8FAFC] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 z-10 relative">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter mb-6 leading-none">
                Our Growth Verticals
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Choose your vertical to explore our structured marketing strategy for your industry.
              </p>
            </div>

            {/* Flat Grid Listing */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryList.map((item, idx) => (
                <Link href={item.link} key={idx} className="block group">
                  <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] h-full flex flex-col hover:border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform group-hover:-translate-y-1">

                    {/* Hover Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                      <ArrowUpRight className="w-7 h-7 text-[#FF6B35]" />
                    </div>

                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF6B35] transition-colors duration-300 border border-slate-100 group-hover:border-transparent">
                      <item.icon className="w-8 h-8 text-[#0F172A] group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight leading-tight group-hover:text-[#FF6B35] transition-colors">
                      {item.title}
                    </h3>

                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 mb-6 w-max">
                      {item.category}
                    </div>

                    <p className="text-slate-500 font-medium leading-relaxed flex-1 text-lg">
                      {item.desc}
                    </p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Frameleads Dominates "Vertical Search" */}
        <section className="relative py-32 bg-[#0F172A] overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
                Why We Dominate the <br />
                <span className="text-[#FF6B35]">&quot;Vertical Search&quot; Era</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                In 2026, a "generalist" agency is a liability. Frameleads wins because we deploy <strong className="text-white">Cross-Pollinated Insights</strong> to outmaneuver narrow-focus competitors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "The Data Advantage", desc: "We take the high-velocity retention loops from Gaming & Esports and seamlessly apply them to SaaS onboarding pipelines.", icon: Brain },
                { title: "The Trust Advantage", desc: "We take the extreme compliance rigor from Healthcare (HIPAA) and apply it to Financial Services and B2B Wealth Management.", icon: ShieldCheck },
                { title: "The Velocity Advantage", desc: "We take the instant-checkout speed from Food & Beverage and apply it to Automotive lead captures.", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:border-[#FF6B35]/40 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-[#FF6B35] transition-colors duration-500 backdrop-blur-md">
                    <item.icon className="w-10 h-10 text-[#FF6B35] group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Floating Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none" />
        </section>

        {/* 4. Final CTA */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="bg-white border border-slate-100 rounded-[5rem] overflow-hidden relative shadow-2xl text-center px-6 py-24 md:py-32">
            {/* Glow Behind CTA */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-[#FF6B35]/20 text-[#FF6B35]">
                  <Search className="w-12 h-12" />
                </div>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                Specialized Growth for a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Fragmented World.</span>
              </h2>
              <p className="text-xl md:text-3xl text-slate-500 mb-16 leading-relaxed font-medium">
                Don&apos;t settle for a &quot;one-size-fits-all&quot; strategy. Our Growth Audits analyze your competitors, verify technical compliance, and build a <span className="text-[#0F172A] font-black underline decoration-[#FF6B35]/50">90-day roadmap tailored to your market</span>.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-12 md:px-16 py-8 bg-[#0F172A] text-white font-black text-2xl rounded-[3rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300 group">
                Start Your Industry Audit <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform text-[#FF6B35]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
