'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    ShieldCheck,
    Activity,
    ClipboardList,
    Factory,
    Search,
    Target,
    BarChart3,
    Globe,
    Database,
    Terminal,
    Layers,
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
    Zap,
    Cpu,
    Shield,
    PenTool,
    Code,
    Smartphone,
    Wrench,
    Settings,
    Cpu as Microchip
} from 'lucide-react'

// JSON-LD Structured Data for Manufacturing & Industrial
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frameleads Industrial Growth",
    "url": "https://frameleads.com/manufacturing-marketing",
    "description": "B2B manufacturing growth engine specializing in technical SEO, RFQ orchestration, and global supply chain visibility.",
    "knowsAbout": ["CNC Machining", "ISO 9001 Compliance", "Additive Manufacturing"],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    }
}

export default function ManufacturingPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "How do I compete with \"Legacy\" manufacturers on Google?",
            answer: "Don't fight for the broad category. Win on \"Specific Capability.\" While they own \"Metal Fabrication,\" you can own \"Medical-Grade Stainless Steel Laser Cutting.\" We optimize for the Long-Tail query where the competition is low but the contract value is massive."
        },
        {
            question: "Why is my industrial site not generating RFQs?",
            answer: "Usually, it’s a \"Technical Friction\" problem. If a procurement officer can't find your ISO certifications or machine list within 10 seconds, they leave. Frameleads restructures your site to put Technical Verification at the forefront."
        },
        {
            question: "What is Component-Level Indexing?",
            answer: "It's the process of ensuring every specific part, material, and tolerance level your plant handles is indexed by search engines. Instead of a general service page, we create high-intent pages for your exact production capabilities."
        },
        {
            question: "How do you handle international supply chain targeting?",
            answer: "We use a combination of Technical SEO for local search in target regions and LinkedIn ABM to reach Supply Chain Directors directly at global headquarters, bypassing traditional gatekeepers."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                    {/* Blueprint Grid Overlay */}
                    <div className="absolute inset-0 z-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(#FF6B35 0.5px, transparent 0.5px), linear-gradient(#FF6B35 0.2px, transparent 0.2px), linear-gradient(90deg, #FF6B35 0.2px, transparent 0.2px)', backgroundSize: '20px 20px, 100px 100px, 100px 100px' }}
                    />

                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Industrial Authority Snapshot (Blueprint-style) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-5xl mx-auto border border-[#FF6B35]/10 bg-[#0F172A] shadow-2xl rounded-3xl overflow-hidden mb-32 group transition-all duration-500 relative"
                        >
                            {/* Blueprint Grid Background for the box */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                            />

                            <div className="bg-slate-950 px-6 py-3 flex items-center justify-between relative z-10 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Blueprint Spec: v1.0.4 // INDUSTRIAL_HUB</div>
                                <div className="flex gap-4 text-slate-300 font-mono text-[10px]">
                                    <span>SCALE: 1:1</span>
                                    <div className="flex gap-4">
                                        <Wrench className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                                        <Settings className="w-3 h-3 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 lg:p-16 relative z-10">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Factory className="w-6 h-6 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-300 uppercase tracking-tight">Technical Procurement Logic</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                                            Manufacturing Growth Summary
                                        </h2>
                                        <p className="text-xl text-slate-300 leading-relaxed font-medium mb-8">
                                            <span className="font-bold text-[#FF6B35] italic">Operational Summary:</span> Frameleads engineers High-Fidelity Industrial Discovery Engines by aligning <span className="text-white font-bold underline decoration-[#FF6B35]">Technical Specifications</span> with Global Procurement Intent. We move beyond generic lead gen to <span className="text-white">RFQ Orchestration</span>. Our 2026 framework utilizes Product-Attribute Schema and Video-Verified Capacity, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded italic">45% increase in high-value contract inquiries</span>.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center backdrop-blur-sm">
                                            <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-widest text-center">Procurement Status</div>
                                            <div className="text-[#FF6B35] text-2xl font-black flex items-center justify-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping" />
                                                ACTIVE / RFQ_READY
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center backdrop-blur-sm">
                                            <div className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-widest text-center">Production Verification</div>
                                            <div className="text-white text-3xl font-black text-center">ISO 9001:2026</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 rounded-full text-[#FF6B35] text-sm font-bold mb-8">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                                    </span>
                                    INDUSTRIAL PERFORMANCE ENGINEERING 2026
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                                    Precision Engineering. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                                        Global Visibility.
                                    </span>
                                </h1>
                                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                                    From the Factory Floor to the Global Market. Your capabilities are world-class—is your digital presence? We build Industrial-Strength Growth Engines that connect production to procurement.
                                </p>
                                <div className="flex">
                                    <Link href="/contact" className="group relative px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(255,107,53,0.3)]">
                                        <span className="relative z-10 flex items-center gap-4">
                                            Audit My Manufacturing Digital Footprint <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative z-10 bg-[#0F172A] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-white/10 p-12 overflow-hidden transition-all duration-700 hover:scale-[1.02]">
                                    {/* Decorative Blueprint Lines */}
                                    <div className="absolute top-0 right-0 p-8 opacity-20 font-mono text-[10px] text-[#FF6B35] space-y-1 text-right">
                                        <div>tolerance: +/- 0.005mm</div>
                                        <div>iso: certified_2026</div>
                                        <div>rfq_status: optimized</div>
                                    </div>

                                    <div className="relative z-10 space-y-10">
                                        {[
                                            { icon: ShieldCheck, label: 'Standardization', val: 'ISO Compliance', color: 'text-[#FF6B35]' },
                                            { icon: Microchip, label: 'Capacity Intelligence', val: 'Real-Time Sync', color: 'text-[#FF8A50]' },
                                            { icon: TrendingUp, label: 'Contract Value', val: '+45% RFQ Volume', color: 'text-[#FF6B35]' },
                                            { icon: Database, label: 'Attribute Schema', val: 'Indexed Specs', color: 'text-slate-400' }
                                        ].map((m, i) => (
                                            <div key={i} className="flex items-center gap-6 group">
                                                <div className="p-4 bg-white/5 rounded-3xl group-hover:bg-white/10 transition-colors border border-white/5">
                                                    <m.icon className={`w-8 h-8 ${m.color}`} />
                                                </div>
                                                <div>
                                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{m.label}</div>
                                                    <div className="text-2xl font-black text-white">{m.val}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Visual Blueprint-style bars */}
                                    <div className="mt-12 flex items-end gap-1 h-20 opacity-30">
                                        {[60, 40, 90, 30, 80, 50, 70, 45, 95, 80].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="flex-1 bg-[#FF6B35] rounded-t-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* Orbital Rings */}
                                <div className="absolute -top-20 -right-20 w-80 h-80 border border-[#FF6B35]/10 rounded-full animate-spin-slow pointer-events-none" />
                                <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-[#FF6B35]/5 rounded-full animate-reverse-spin pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pillar 1: Technical SEO */}
                <section className="py-32 px-6 relative bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                                    Dominating the <span className="text-[#FF6B35]">"Long-Tail"</span> <br />
                                    of Industrial Search.
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                                        In 2026, engineers don't search for "Manufacturing Company." They search for "ISO 9001 certified CNC machining for aerospace-grade titanium."
                                    </p>

                                    {[
                                        { title: "Granular Capability Pages", desc: "Dedicated, high-intent pages for every specific machine (e.g., \"5-Axis CNC\"), material (e.g., \"Inconel 718\"), and process (e.g., \"Powder Bed Fusion\")." },
                                        { title: "Technical Specification Schema", desc: "We hardcode your tolerances, certifications, and material lists into your site’s metadata for AI search agent recommendations." },
                                        { title: "Knowledge Graph Integration", desc: "Connecting your plant to industry standards and global supply chain entities to prove your E-E-A-T." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="p-4 h-fit bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#FF6B35]/30 transition-all">
                                                <Plus className="w-6 h-6 text-[#FF6B35]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl overflow-hidden relative border border-white/10">
                                    {/* Grid Lines Overlay */}
                                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                    <div className="relative z-10 flex items-center gap-4 mb-10">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-[#FF6B35]/20">
                                            <Code className="w-8 h-8 text-[#FF6B35]" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-2xl uppercase tracking-tighter">Attribute Spec Engine</div>
                                            <div className="text-slate-400 text-sm font-mono tracking-widest">MACHINE_READABLE: TRUE</div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 relative z-10">
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 font-mono text-slate-300 text-xs leading-relaxed">
                                            <div className="text-[#FF6B35] mb-4">{`// Component-Level Mapping`}</div>
                                            <div>{`tolerance: 0.01mm`}</div>
                                            <div>{`material_index: ["Titanium", "Inconel", "Aerospace_Alloy"]`}</div>
                                            <div>{`iso_compliance: true`}</div>
                                            <div>{`certification_id: 83912-A`}</div>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 font-mono text-slate-300 text-xs">
                                            <div className="flex justify-between items-center mb-2">
                                                <span>Index Coverage</span>
                                                <span className="text-[#FF6B35]">100%</span>
                                            </div>
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-[#FF6B35]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillar 2: Trust & Rich Media */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full mx-auto" />
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                                Solving the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">"Remote Trust" Gap.</span>
                            </h2>
                            <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                                For international contracts, "Seeing is Believing." We leverage Rich Media to prove your production capacity without the travel.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Globe,
                                    title: "Virtual Factory Tours",
                                    desc: "360-degree interactive walkthroughs that allow procurement officers to \"inspect\" your facility safety and standards online."
                                },
                                {
                                    icon: Video,
                                    title: "Process-First Clips",
                                    desc: "Short-form, high-velocity video of your machines in action, optimized for LinkedIn and YouTube discovery."
                                },
                                {
                                    icon: Activity,
                                    title: "Capacity Transparency",
                                    desc: "Real-time or dynamic \"Lead Time\" indicators to capture urgent orders when your competitors are at peak capacity."
                                }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="w-20 h-20 bg-[#FF6B35]/5 rounded-3xl flex items-center justify-center mb-8 border border-[#FF6B35]/10">
                                        <card.icon className="w-10 h-10 text-[#FF6B35]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">{card.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg font-medium">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pillar 3: LinkedIn ABM */}
                <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
                    <div className="absolute bottom-0 left-0 p-40 opacity-5 pointer-events-none">
                        <Linkedin className="w-96 h-96 text-[#FF6B35]" />
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { label: 'Procurement Reach', val: 'Enterprise Direct', color: 'text-[#FF6B35]' },
                                        { label: 'Content Authority', val: 'Thought Leader', color: 'text-[#FF8A50]' },
                                        { label: 'Lead Quality', val: 'RFQ Focus', color: 'text-[#FF6B35]' },
                                        { label: 'Pipeline Velocity', val: 'Digital First', color: 'text-slate-400' }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                                            <div className={`text-3xl font-black ${stat.color}`}>{stat.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                                    Bypassing the Gatekeeper. <br />
                                    <span className="text-[#FF6B35]">Reaching the Buyer.</span>
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                                        Industrial sales are built on relationships. We use Account-Based Marketing (ABM) to scale those relationships at the enterprise level.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Procurement-Direct Targeting", desc: "Running LinkedIn ads specifically for Supply Chain Managers and Head of Engineering at Fortune 500 companies." },
                                            { title: "Whitepaper Lead Magnets", desc: "Developing technical guides like \"The 2026 Guide to Sustainable Aluminum Sourcing\" to capture decision-maker data." },
                                            { title: "CRM-to-Ad Sync", desc: "Pushing your CRM data back into retargeting loops to stay \"Top of Mind\" for the next bidding cycle." }
                                        ].map((feat, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <CheckCircle2 className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
                                                <div>
                                                    <div className="text-xl font-bold mb-1">{feat.title}</div>
                                                    <div className="text-slate-400 font-medium leading-relaxed">{feat.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Manufacturing Marketing Matrix */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">The Industrial Marketing Matrix</h2>
                            <p className="text-2xl text-slate-500 font-medium italic">Why generalists fail on the factory floor.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                                        <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Marketing Agency</th>
                                        <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads Industrial Hub</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { metric: 'Primary KPI', gen: 'Clicks / Leads', frame: 'RFQs / Contract Pipeline Value' },
                                        { metric: 'Content Logic', gen: 'Keyword Volume', frame: 'Technical Specs / Certifications' },
                                        { metric: 'Search Focus', gen: 'Consumer Trends', frame: 'Component-Level Search Intent' },
                                        { metric: 'Trust Signals', gen: 'Reviews / Stars', frame: 'ISO Certs / Machine Lists' },
                                        { metric: 'Visual Strategy', gen: 'Lifestyle Imagery', frame: 'Technical Blueprints / Factory Video' }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-10 text-xl font-black text-slate-900 border-b border-slate-50">{row.metric}</td>
                                            <td className="p-10 text-xl text-center text-slate-500 font-medium border-b border-slate-50">{row.gen}</td>
                                            <td className="p-10 text-xl text-center text-[#0F172A] font-black border-b border-slate-50 bg-[#FF6B35]/5">{row.frame}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-40 px-6 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-8 tracking-tighter">
                                Industrial Marketing <br />
                                <span className="text-[#FF6B35]">Deep-Dive.</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium italic">High-fidelity answers for B2B industrial hubs.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openFaq === i
                                        ? "bg-white border-[#FF6B35]/30 shadow-2xl scale-[1.02]"
                                        : "bg-white/50 border-slate-100 hover:border-[#FF6B35]/20 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full px-8 md:px-12 py-10 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span className={`text-sm font-mono font-bold transition-colors ${openFaq === i ? "text-[#FF6B35]" : "text-slate-400"}`}>
                                                0{i + 1}
                                            </span>
                                            <h3 className={`text-2xl md:text-3xl font-black transition-colors ${openFaq === i ? "text-[#0F172A]" : "text-slate-600 group-hover:text-[#0F172A]"}`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className={`flex-shrink-0 ml-4 p-4 rounded-full transition-all duration-500 ${openFaq === i ? "bg-[#FF6B35] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35]"
                                            }`}>
                                            <Plus className={`w-6 h-6 transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "circOut" }}
                                            >
                                                <div className="px-8 md:px-12 pb-12 ml-14 md:ml-20">
                                                    <div className="w-full h-px bg-slate-100 mb-8" />
                                                    <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                                        {faq.answer}
                                                    </p>
                                                    <div className="mt-8 flex items-center gap-4 text-[#FF6B35] font-bold text-sm uppercase tracking-widest">
                                                        <ShieldCheck className="w-4 h-4" />
                                                        <span>Technical Procurement Logic Verified</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Capacity Audit CTA */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0F172A] z-0" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/20 rounded-full blur-[150px] -mr-96 -mt-96" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-32 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#FF6B35] rounded-full" />
                            <div className="mb-12">
                                <Wrench className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-pulse" />
                                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                                    Is Your Capacity <br />
                                    <span className="text-[#FF6B35]">Invisible to Buyers?</span>
                                </h2>
                                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                                    Most manufacturers are sitting on world-class equipment that no one can find online. Our Industrial Digital Audit identifies your &quot;Discovery Gaps&quot; and builds a roadmap to a ₹8.5 Cr+ pipeline.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                                    Claim My Manufacturing Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Link Silo */}
                <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
                            <p className="text-xl text-slate-500">Sync your factory authority with multi-channel growth and technical dominance.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: 'Technology', href: '/technology-and-saas', icon: Cpu, desc: 'Engineering PLG.' },
                                { label: 'Financial', href: '/financial-services', icon: Briefcase, desc: 'Compliance marketing.' },
                                { label: 'Healthcare', href: '/healthcare-and-medical', icon: Activity, desc: 'Patient lead gen.' },
                                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'Precision ABM.' },
                                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' },
                                { label: 'SEO Services', href: '/seo-services', icon: Search, desc: 'Authority Dominance.' },
                                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Scale.' }
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
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 40s linear infinite;
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
        </>
    )
}
