'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    Briefcase,
    ShieldCheck,
    Target,
    Zap,
    Users,
    TrendingUp,
    Search,
    MessageSquare,
    Globe,
    Activity,
    CheckCircle2,
    Plus,
    ArrowRight,
    FileText,
    PieChart,
    Linkedin,
    Award,
    Calculator,
    Video
} from 'lucide-react'

// JSON-LD Structured Data for Professional Services
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Frameleads Authority Engineering",
    "url": "https://frameleads.com/professional-services-marketing",
    "description": "Expertise-driven growth for law firms, consultancies, and specialized professional services.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    },
    "knowsAbout": ["High-Ticket B2B Strategy", "LinkedIn ABM", "Entity-Based SEO", "Compliance Marketing"]
}

export default function ProfessionalServicesMarketingPage() {
    const faqs = [
        {
            question: "How do we compete with 'Big 4' firms on a smaller budget?",
            answer: "You win on 'Niche Depth.' While giant firms own broad terms, you can own the Specific Case (e.g., 'Architecture for Sustainable Data Centers in Bangalore'). Frameleads specializes in finding the high-value 'Niche Authority' that large firms overlook."
        },
        {
            question: "Why is our firm's website not appearing in AI Overviews (AIO)?",
            answer: "It's usually a 'Fact-Density' problem. If your content is generic and lacks structured data (Schema.org), AI models can't 'prove' your expertise. We inject Technical Verification into your site's architecture so AI agents confidently cite you as an expert source."
        },
        {
            question: "What is Person-Entity Mapping?",
            answer: "It's the process of connecting your lead partners to their professional achievements across the web using JSON-LD schema. This ensures AI models like Gemini and Perplexity recognize your partners as individual authorities, not just entries in a database."
        },
        {
            question: "How does the 'Consultation' funnel differ from lead generation?",
            answer: "Traditional lead gen optimizes for volume (emails). Authority funnels optimize for intent (strategy sessions). We build friction at the right points—using diagnostic tools to ensure your partners only spend time with truly qualified, high-ticket prospects."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* 1. Authority Intelligence Snapshot (Consultancy-Slate styled) */}
                <section className="relative pt-32 pb-16 px-4">
                    <div className="max-w-5xl mx-auto relative">
                        {/* Subtle Brand Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] to-orange-400 rounded-[3.5rem] opacity-5 blur-2xl" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] relative overflow-hidden group"
                        >
                            {/* Professional Header */}
                            <div className="bg-[#0F172A] px-10 py-4 flex items-center justify-between relative z-10 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 font-black tracking-widest uppercase italic">Console_v2.1 // AUTHORITY_INTELLIGENCE</div>
                                <div className="flex gap-4 text-[#FF6B35] font-mono text-[10px]">
                                    <ShieldCheck className="w-3 h-3 animate-pulse" />
                                    <span className="font-bold">ENTITY_VERIFIED</span>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 relative z-10 text-left">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-4 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Briefcase className="w-8 h-8 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Professional Authority Hub</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8 leading-[1.1] tracking-tighter">
                                            Professional Services Strategy Summary
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                            Frameleads engineers <span className="text-[#0F172A] font-bold">Expertise-Driven Growth Ecosystems</span> by aligning Institutional Knowledge with High-Intent Search Discovery. We move beyond &quot;Leads&quot; to <span className="text-[#FF6B35] italic font-bold">Qualified Consultations</span>. Our 2026 framework utilizes Person-Entity Schema, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded font-black italic">38% increase in High-Ticket acquisition</span> and a 5x boost in brand Citations.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center shadow-inner hover:bg-white transition-all duration-500">
                                            <div className="text-[10px] text-slate-400 font-black uppercase mb-2 tracking-widest text-center">HIGH_TICKET_ACQUISITION</div>
                                            <div className="text-[#FF6B35] text-5xl font-black text-center flex items-center justify-center gap-2 tracking-tighter">
                                                +38%
                                            </div>
                                            <div className="mt-2 text-[10px] text-center text-slate-400 font-bold tracking-widest uppercase">AUTHORITY_LIFT_INDEX</div>
                                        </div>
                                        <div className="p-8 bg-[#0F172A] rounded-[2.5rem] border border-white/5 flex flex-col justify-center shadow-2xl">
                                            <div className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest text-center">AI_CITATION_VELOCITY</div>
                                            <div className="text-white text-4xl font-black text-center flex items-center justify-center gap-3">
                                                <Globe className="w-8 h-8 text-[#FF6B35]" />
                                                5.0x
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Signal Indicators */}
                            <div className="flex justify-around p-8 bg-slate-50/50 border-t border-slate-100">
                                {['B2B_Audit: ACTIVE', 'Person_Schema: SYNCED', 'ABM_Signal: ON', 'Intent_Data: LIVE'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. The Hero Section */}
                <section className="relative py-24 px-4 text-center overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                        < Award className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rotate-12 text-[#FF6B35]" />
                        < ShieldCheck className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 -rotate-12 text-[#FF6B35]" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-6 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-black rounded-full mb-8 uppercase tracking-[0.2em]">
                                THE CURRENCY OF TRUST: ENGINEERED FOR SCALE
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black text-[#0F172A] leading-[0.85] tracking-tighter mb-10">
                                Scale Your Expertise. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] underline decoration-[#FF6B35]/20">Command the Market.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
                                In 2026, clients don&apos;t hire firms; they hire Authority. Frameleads builds <strong className="text-slate-900">Performance-First Professional Hubs</strong> that turn your intellectual property into your greatest asset.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#0F172A] text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                                    Audit My Firm&apos;s Authority Score <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Pillar 1: The "Expertise Moat" & Entity-Based SEO */}
                <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full shadow-[0_4px_10px_rgba(255,107,53,0.3)]" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Building a Defensible <br />
                                    <span className="text-[#FF6B35]">Digital Reputation.</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    In 2026, Google and Perplexity look for E-E-A-T (Experience, Expertise, Authoritativeness, Trust). We build your Authority Moat:
                                </p>

                                <div className="space-y-12">
                                    {[
                                        { title: "Person-Entity Mapping", desc: "Linking lead partners to published works and certifications using Person Schema for AI verification.", icon: Users },
                                        { title: "Deep-Vertical Content Clusters", desc: "Moving beyond generic blogs to 'White-Paper Grade' content that solves high-level problems.", icon: FileText },
                                        { title: "Citation Engineering", desc: "Securing mentions in industry journals to create a 'Trust-Loop' that AI assistants use to verify claims.", icon: Award }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <div className="w-16 h-16 bg-white rounded-3xl flex flex-shrink-0 items-center justify-center shadow-xl border border-slate-100 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-[#0F172A] mb-2">{item.title}</h3>
                                                <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-[4.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="bg-[#0F172A] rounded-[4.5rem] p-1 scale-105 shadow-2xl relative overflow-hidden">
                                    {/* Expertise Moat UI Mockup */}
                                    <div className="bg-slate-900 rounded-[4rem] p-10 overflow-hidden relative min-h-[500px] flex flex-col">
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                                                <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
                                            </div>
                                            <div className="h-10 flex-1 bg-white/5 rounded-full px-6 flex items-center text-slate-400 text-sm font-mono uppercase tracking-widest font-black">
                                                Entity_Verification_Process...
                                            </div>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl relative group-hover:border-[#FF6B35]/50 transition-all duration-500">
                                                <div className="flex gap-4 items-center mb-6">
                                                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">EA</div>
                                                    <div>
                                                        <div className="text-white font-bold text-sm">Partner Authority Match</div>
                                                        <div className="text-[#FF6B35] text-[10px] font-mono font-black uppercase tracking-widest">E-E-A-T Score: 0.98</div>
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-black/40 rounded-2xl mb-4 border border-white/5">
                                                    <div className="text-slate-500 text-[10px] font-mono mb-2 uppercase tracking-widest">JSON_LD_CONNECTED</div>
                                                    <div className="text-white text-lg font-black leading-tight italic">Verified Intellectual Property</div>
                                                    <div className="mt-3 flex gap-2">
                                                        <div className="w-full h-1.5 bg-[#FF6B35] rounded-full shadow-[0_0_10px_#FF6B35]" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px] text-[#FF6B35] font-mono font-black uppercase tracking-[0.2em]">
                                                    <span>Expert_Citations: 250+</span>
                                                    <span>AIO_INDEXED</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-3">
                                                    <FileText className="w-8 h-8 text-[#FF6B35]" />
                                                    <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Deep_Cluster</span>
                                                </div>
                                                <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-3">
                                                    <Award className="w-8 h-8 text-slate-500" />
                                                    <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Entity_Graph</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: High-Intent LinkedIn ABM & Demand Gen */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#0F172A] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Reaching the <span className="text-slate-400">Decision-Maker</span>, Not the Researcher.
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    Professional services have high-stakes decision cycles. We fix the Targeting Gap by focusing on Account-Based Intent:
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "Account-Based Marketing (ABM)", desc: "Hyper-targeted LinkedIn campaigns ensuring your partner leadership reaches CEOs and GCs of target firms.", icon: Linkedin },
                                        { title: "Intent-Signal Bidding", desc: "Targeting 'Problem-Aware' queries capturing the client at the exact moment of high-stakes need.", icon: Target },
                                        { title: "The 'Consultation' Funnel", desc: "Optimizing pages for high-friction conversations over simple leads, ensuring your experts only speak with qualified prospects.", icon: MessageSquare }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-slate-100 flex gap-8 hover:shadow-2xl transition-all duration-500 group">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center shadow-lg border border-slate-100 group-hover:bg-[#0F172A] group-hover:text-white transition-all transform group-hover:scale-110">
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[#0F172A] text-2xl mb-2">{item.title}</h4>
                                                <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="bg-slate-100 rounded-[5rem] p-12 border border-slate-200 relative overflow-hidden group shadow-inner">
                                    {/* ABM Dashboard UI Mockup */}
                                    <div className="bg-white rounded-[4rem] p-12 shadow-2xl relative z-10 border border-slate-100 transform group-hover:scale-[0.98] transition-transform duration-700">
                                        <div className="flex justify-between items-center mb-12">
                                            <div className="flex gap-4 items-center">
                                                <div className="p-4 bg-[#0F172A] text-[#FF6B35] rounded-3xl">
                                                    <Linkedin className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="text-[#0F172A] font-black text-xl uppercase tracking-tighter">ABM_ORCHESTRATOR</div>
                                                    <div className="text-[10px] text-slate-400 font-mono font-black uppercase tracking-widest mt-1">Target_Accounts: v4.0</div>
                                                </div>
                                            </div>
                                            <div className="text-[#FF6B35] text-[10px] font-mono font-black uppercase tracking-widest border border-[#FF6B35]/20 px-3 py-1 rounded-full">LIVE_INTENT</div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                                <div className="text-[10px] uppercase font-bold tracking-widest mb-4 text-slate-400">Target_Account_Engagement</div>
                                                <div className="space-y-4">
                                                    {[
                                                        { firm: 'Global_Consultancy_Inc', reach: 98 },
                                                        { firm: 'Tier_1_Law_Partners', reach: 85 },
                                                        { firm: 'Tech_Enterprises_Group', reach: 72 }
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-4">
                                                            <div className="flex-1 text-sm font-black text-[#0F172A]">{item.firm}</div>
                                                            <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                                                <div className="h-full bg-[#FF6B35]" style={{ width: `${item.reach}%` }} />
                                                            </div>
                                                            <div className="text-[10px] font-bold text-slate-400">{item.reach}%</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Grid background */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF6B35 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Frictionless Client Onboarding & LTV */}
                <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-8xl font-black mb-10 tracking-[ -0.05em] leading-[0.9]">
                                Scaling the Relationship <br />
                                <span className="text-[#FF6B35]">Beyond the First Project.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                                In 2026, your Digital Front Door must reflect your professional polish. We move from transactional sales to predictive relationship nurturing.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Interactive Discovery Tools", desc: "Building 'Self-Diagnostic' risk-assessment tools that provide immediate value to prospects while qualifying them.", icon: Calculator },
                                { title: "Video-First Expert Profiles", desc: "Utilizing partner video introductions to build rapport and reduce the trust gap before the first call.", icon: Video },
                                { title: "Predictive Upsell Logic", desc: "Using CRM data to identify when a client is likely to need an audit or renew services, triggering automated nurture.", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="group p-12 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-white/10 hover:border-[#FF6B35]/50 transition-all duration-500 text-left relative overflow-hidden">
                                    <div className="w-16 h-16 bg-[#FF6B35]/20 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-[#FF6B35] transition-colors duration-500">
                                        <item.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-xl leading-relaxed font-medium">{item.desc}</p>

                                    <div className="mt-10 pt-10 border-t border-white/5 flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        <div className="w-2 h-2 rounded-full bg-slate-700" />
                                        <div className="w-2 h-2 rounded-full bg-slate-700" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Decorative Map */}
                    <div className="absolute bottom-0 left-0 p-40 opacity-5 pointer-events-none">
                        <Globe className="w-[800px] h-[800px] text-[#FF6B35]" />
                    </div>
                </section>

                {/* 6. The Professional Services Matrix */}
                <section className="relative py-40 bg-white">
                    <div className="max-w-6xl mx-auto px-6 text-slate-800">
                        <div className="text-center mb-24">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.3em]">
                                Strategic Comparison Matrix
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">General Agency vs. <br /><span className="text-[#FF6B35]">Authority Specialist.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies fail to capture institutional expertise.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(15,23,42,0.15)] border border-slate-100 relative bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">Feature</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">General Marketing Agency</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-[#FF6B35] bg-[#FF6B35]/5">Frameleads Authority Hub</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Primary KPI", basic: "Clicks / Leads", advanced: "Signed Contracts / Referral Velocity" },
                                        { feat: "Content Logic", basic: "SEO Keyword Stuffing", advanced: "Institutional Thought Leadership" },
                                        { feat: "Search Focus", basic: "Broad Category Intent", advanced: "Problem-Solution Semantic Intent" },
                                        { feat: "Trust Signals", basic: "Social Media 'Likes'", advanced: "Case Studies / Niche Certifications" },
                                        { feat: "Tracking Cycle", basic: "30 Days (Direct)", advanced: "Complex Multi-Touch (6-12 Months)" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-12 py-10 font-black text-[#0F172A] text-xl tracking-tight">{row.feat}</td>
                                            <td className="px-12 py-10 text-slate-400 italic text-xl font-medium">{row.basic}</td>
                                            <td className="px-12 py-10 text-[#FF6B35] font-black text-xl tracking-tight bg-[#FF6B35]/5">{row.advanced}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Deep-Dive FAQ */}
                <section className="py-40 bg-[#FDF8F5] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[1000px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-8 leading-none">Institutional <br /><span className="text-[#FF6B35]">Intelligence.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">High-trust answers for Firm Partners and Directors.</p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 shadow-xl rounded-[2.5rem] p-12 hover:shadow-2xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex justify-between items-start gap-10">
                                        <div>
                                            <h3 className="text-3xl font-black text-[#0F172A] mb-6 tracking-tight leading-tight">{faq.question}</h3>
                                            <p className="text-slate-500 text-xl leading-relaxed font-medium">{faq.answer}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-full flex-shrink-0 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-500 shadow-sm">
                                            <Plus className="w-8 h-8" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Final Call to Action: The Authority Audit */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <div className="bg-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center border border-white/5">
                        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#FF6B35] opacity-10 rounded-full blur-[150px] -mr-60 -mt-60 animate-pulse" />

                        <div className="relative z-10">
                            <div className="flex justify-center mb-10">
                                <div className="p-6 bg-white shadow-2xl rounded-[2rem] border-2 border-[#FF6B35]/20 animate-bounce">
                                    <ShieldCheck className="w-12 h-12 text-[#FF6B35]" />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-[ -0.05em]">
                                Is Your Firm&apos;s Reputation Invisible to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Decision-Makers?</span>
                            </h2>
                            <p className="text-2xl md:text-3xl text-slate-400 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
                                Most professional firms are sitting on decades of expertise that no one can find. Our Professional Authority Audit identifies your &quot;Expertise Gaps&quot; and builds a roadmap to a <span className="text-white font-black underline decoration-[#FF6B35]/50">undeniable niche leadership</span>.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-16 py-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                                Claim My Authority Audit <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
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
