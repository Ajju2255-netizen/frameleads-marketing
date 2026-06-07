'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    Car,
    Zap,
    Layers,
    Activity,
    Search,
    Target,
    BarChart3,
    Globe,
    Database,
    Terminal,
    CheckCircle2,
    TrendingUp,
    MessageSquare,
    ArrowRight,
    Plus,
    Minus,
    Briefcase,
    Users,
    Building2,
    Video,
    Linkedin,
    Smartphone,
    MousePointer2,
    Gauge,
    ShieldCheck,
    MapPin,
    CreditCard,
    Key,
    RotateCcw,
    Brain
} from 'lucide-react'

// JSON-LD Structured Data for Automotive Services
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Frameleads Automotive Growth",
    "url": "https://frameleads.com/automotive-marketing",
    "description": "High-velocity automotive marketing specializing in VDP optimization, inventory feed sync, and full-funnel dealership attribution.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    },
    "knowsAbout": ["EV Marketing", "VDP Optimization", "DMS Attribution", "Local SEO"]
}

export default function AutomotiveMarketingPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "How should I adjust my marketing for the EV transition in 2026?",
            answer: "Focus on \"Anxiety Reduction Content.\" Buyers are looking for charging infrastructure maps, real-world range data, and battery longevity guarantees. Frameleads builds \"EV Education Hubs\" that position your dealership as a consultant, not just a seller."
        },
        {
            question: "Is TikTok or Instagram better for car sales?",
            answer: "In 2026, TikTok is for Discovery (showing the \"wow\" features), while Instagram/Facebook are for Conversion (retargeting users who viewed a VDP). We use a cross-platform strategy that captures the attention on TikTok and closes the lead on Meta."
        },
        {
            question: "How do you track offline showroom visits from online ads?",
            answer: "We use a combination of Search Intent mapping and First-Party Data Attribution. By syncing your DMS (Dealer Management System) with your ad platforms, we can match lead emails or phone numbers to final vehicle sales, closing the attribution loop."
        },
        {
            question: "What is the 2026 Automotive Buyer Journey?",
            answer: "In 2026, the journey is 90% digital. Buyers complete their research, trim comparison, and even soft-credit pulls before setting foot on the lot. We optimize your site to be a 'Digital Showroom' that answers every question during this research phase."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* 1. Mobility Intelligence Snapshot */}
                <section className="relative pt-32 pb-16 px-4">
                    <div className="max-w-5xl mx-auto relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#0F172A] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.3)] relative overflow-hidden group"
                        >
                            {/* Dashboard Grid Lines Overlay */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                            />

                            <div className="bg-slate-950/50 px-6 py-3 flex items-center justify-between relative z-10 border-b border-white/5 rounded-t-2xl">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Dash_v2.0 // MOBILITY_INTELLIGENCE</div>
                                <div className="flex gap-4 text-slate-300 font-mono text-[10px]">
                                    <div className="flex gap-4">
                                        <Activity className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                                        <Gauge className="w-3 h-3 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 relative z-10">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Car className="w-6 h-6 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Showroom Velocity Engine</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                                            Automotive Growth Summary
                                        </h2>
                                        <p className="text-xl text-slate-300 leading-relaxed font-medium mb-8">
                                            Frameleads engineers <span className="text-white font-bold">Connected Retail Ecosystems</span> by aligning Inventory Data with Real-Time Consumer Intent. We move beyond simple &quot;leads&quot; to <span className="text-[#FF6B35]">Showroom-Ready Appointments</span>. Our 2026 framework utilizes VDP (Vehicle Detail Page) Schema and First-Party Data Attribution, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded italic">28% increase in VDP turns</span> and a 5x improvement in Marketing Efficiency Ratio (MER).
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center backdrop-blur-sm">
                                            <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-widest text-center">ROI_COEFFICIENT</div>
                                            <div className="text-[#FF6B35] text-4xl font-black text-center">5.0x</div>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center backdrop-blur-sm">
                                            <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-widest text-center">VDP_VELOCITY</div>
                                            <div className="text-white text-3xl font-black text-center flex items-center justify-center gap-2">
                                                <TrendingUp className="w-6 h-6 text-[#FF6B35]" />
                                                +28%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. The Hero Section */}
                <section className="relative py-24 px-4 bg-white text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-[100px] -ml-72 -mb-72" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold rounded-full mb-8">
                                BEYOND THE LOT: THE FUTURE OF AUTOMOTIVE RETAIL
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] leading-[1] tracking-tight mb-10">
                                From Search Result to Driveway.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] animate-gradient-x underline decoration-[#FF6B35]/20">Accelerate Your Sales.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
                                In 2026, the car buying journey is 90% digital before the first handshake. Frameleads builds <strong className="text-slate-900">High-Authority Automotive Platforms</strong> that turn high-intent research into keys in hand. From EV-Specific SEO to Hyper-Local Inventory Dominance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white font-black text-xl rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                                    Audit My Dealership&apos;s Digital Velocity <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Pillar 1: Inventory-First SEO & VDP Optimization */}
                <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                                    Making Your <span className="text-[#FF6B35]">Inventory</span> the Star of the Search
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                                    In 2026, buyers don&apos;t just search for &quot;SUVs.&quot; They search for &quot;2026 Hybrid SUV with AWD and 3rd-row seating under ₹40 Lakhs near me.&quot; We optimize for Precision Discovery:
                                </p>

                                <div className="space-y-10">
                                    {[
                                        { title: "Dynamic VDP Schema Markup", desc: "We inject real-time data (price, mileage, trim, features) into your code so search engines like Perplexity display your exact stock as 'Product Rich Results'.", icon: Database },
                                        { title: "Hyper-Local Map Domination", desc: "Ensuring your dealership owns the 'Map Pack' for high-intent queries like 'Electric car dealers near me' through local entity verification.", icon: MapPin },
                                        { title: "Trim-Level Content Hubs", desc: "Creating deep-dive comparison pages (e.g., 'XLE vs. Limited Trim') that answer the specific questions keeping buyers from clicking 'Book a Test Drive'.", icon: Search }
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
                                <div className="bg-[#0F172A] rounded-[4.5rem] p-1 scale-105 shadow-2xl relative overflow-hidden group">
                                    {/* Inventory Mockup Interface */}
                                    <div className="bg-slate-900 rounded-[4rem] p-10 overflow-hidden relative">
                                        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6 text-white">
                                            <span className="font-mono text-xs opacity-50 uppercase tracking-widest">Live_Inventory_Feed // SYNCED</span>
                                            <div className="flex gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-[10px] uppercase font-bold">100% CRAWLABLE</span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-[#FF6B35] font-black text-xs uppercase tracking-widest mb-1">Rich Result Preview</h4>
                                                        <div className="text-white text-xl font-bold">2026 Model X - Hybrid AWD</div>
                                                        <div className="text-slate-400 text-sm">Trim: Performance / Miles: 0-15</div>
                                                    </div>
                                                    <div className="text-white font-black text-xl">₹42,95,000</div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-400 font-mono">
                                                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-[#FF6B35]" /> MSRP_SYNCED</div>
                                                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-[#FF6B35]" /> STOCK_STATUS: READY</div>
                                                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-[#FF6B35]" /> SCHEMA_VDP: ACTIVE</div>
                                                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-3 h-3 text-[#FF6B35]" /> GEO_OPTIMIZED</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 p-6 rounded-3xl text-center">
                                                <div className="text-white text-xs font-bold uppercase tracking-widest mb-2">Automated Optimization</div>
                                                <p className="text-[#FF6B35] font-mono text-sm leading-tight">&quot;Generating Trim-Comparison Landing Page for 15+ Variants...&quot;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: The Immersive Digital Showroom */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-slate-900 mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8">
                                    Filling the <span className="text-[#0F172A]/80">&quot;Experience Gap&quot;</span> Online
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                                    With buyers visiting fewer physical dealerships, your website must be the showroom:
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "360-Degree Interactive Walkthroughs", desc: "Integrating AR/VR tools that allow buyers to 'sit' in the cabin and inspect material finishes from their mobile device.", icon: Smartphone },
                                        { title: "Video-First Vehicle Demos", desc: "Replacing static photos with short-form, high-impact video reels that showcase tech features like 'Self-Parking' in action.", icon: Video },
                                        { title: "Interactive Financing Tools", desc: "Real-time credit-soft-pulls and monthly payment calculators that provide 'Sticker-Shock' protection.", icon: CreditCard }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 hover:shadow-2xl transition-all duration-300 group">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[#0F172A] text-xl mb-1">{item.title}</h4>
                                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Completed Design Elements */}
                                <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">VR_READY</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">MOBILE_FIRST</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">REAL_TIME_SYNC</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">DMS_CONNECTED</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="bg-slate-100 rounded-[4rem] p-10 border-2 border-slate-200 relative overflow-hidden group">
                                    {/* UI Visual for immersive tools */}
                                    <div className="bg-white rounded-[3rem] p-10 shadow-2xl relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <Smartphone className="w-10 h-10 text-[#FF6B35]" />
                                            <div>
                                                <div className="font-black text-slate-900 text-lg uppercase tracking-widest">AR_VIEWER</div>
                                                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1 leading-none transition-colors">Interior Inspection Active</div>
                                            </div>
                                        </div>
                                        <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden group/ar">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                                <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} className="h-full bg-[#FF6B35]" />
                                                </div>
                                                <div className="flex justify-between items-center text-white text-[10px] font-bold">
                                                    <span>ZOOM: 1.2X</span>
                                                    <span>STABILITY: [HGH]</span>
                                                </div>
                                            </div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 animate-pulse">
                                                <RotateCcw className="w-12 h-12" />
                                            </div>
                                        </div>
                                        <div className="mt-8 grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-2xl flex flex-col items-center gap-1 border border-slate-100">
                                                <Users className="w-5 h-5 text-slate-400" />
                                                <span className="text-[10px] font-black uppercase text-slate-500">Live Video Chat</span>
                                            </div>
                                            <div className="p-4 bg-[#FF6B35]/10 rounded-2xl flex flex-col items-center gap-1 border border-[#FF6B35]/20">
                                                <Key className="w-5 h-5 text-[#FF6B35]" />
                                                <span className="text-[10px] font-black uppercase text-[#FF6B35]">Build & Price</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Data Integrity & Full-Funnel Attribution */}
                <section className="relative py-32 bg-[#0F172A] text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
                                Bridging the <br />
                                <span className="text-[#FF6B35]">&quot;Click-to-Curb&quot;</span> Attribution Gap
                            </h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Automotive marketing often suffers from fragmented data. Frameleads provides a Single Source of Truth for your dealership&apos;s performance.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Server-Side Tracking (CAPI)", desc: "Sending 'Test Drive Booked' and 'Credit App' events directly to ad platforms for 100% signal accuracy.", icon: Terminal },
                                { title: "CRM & DMS Integration", desc: "Syncing your Dealer Management System with your dashboard to track MER—proving exactly which ad drove the sale.", icon: Layers },
                                { title: "Predictive Equity Mining", desc: "Using AI to analyze service records and identify current owners 'in the window' for a trade-in.", icon: Brain }
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

                {/* 6. The "Automotive Marketing" Matrix */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-20 text-slate-800">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">The Automotive Marketing Matrix</h2>
                            <p className="text-lg text-slate-500">Why general marketing agencies often stall on the dealership floor.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-slate-100">
                            <table className="w-full text-left border-collapse bg-white">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                                        <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-slate-400">General Marketing Agency</th>
                                        <th className="px-10 py-8 text-sm font-black uppercase tracking-widest text-[#FF6B35]">Frameleads Automotive Hub</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Primary KPI", basic: "Clicks / Leads", advanced: "VDP Turns / Showroom Visits" },
                                        { feat: "Inventory Logic", basic: "Static Landing Pages", advanced: "Real-Time DMS/Inventory Sync" },
                                        { feat: "Search Focus", basic: "Broad Keywords", advanced: "Trim & Feature-Level Precision" },
                                        { feat: "Data Privacy", basic: "Standard GDPR", advanced: "SST / First-Party Data Focus" },
                                        { feat: "Creative Style", basic: "Stock Photography", advanced: "Short-Form Video & 360 Walkthroughs" }
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
                        <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-20 text-center uppercase">Automotive Intelligence FAQ</h2>

                        <div className="space-y-8">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 shadow-xl rounded-3xl p-10 hover:shadow-2xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-2xl font-extrabold text-[#0F172A] mb-6">{faq.question}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">{faq.answer}</p>
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
                                Is Your Inventory Moving at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Speed of Search?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                                Most dealerships are losing 30% of their &quot;Digital Floor Traffic&quot; to slow-loading VDPs and disconnected tracking. Our Automotive Performance Audit identifies your conversion leaks and builds a roadmap to a 3.5+ MER.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-105 transition-all duration-300 group">
                                Claim My Automotive Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
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
