'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    ShieldCheck,
    Activity,
    ClipboardList,
    GraduationCap,
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
    Award,
    BookOpen,
    UserCheck,
    School,
    Server,
    Factory
} from 'lucide-react'

// JSON-LD Structured Data for Education & EdTech
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Frameleads Education Growth",
    "url": "https://frameleads.com/education-marketing",
    "description": "Enrollment-first education marketing specializing in program-level SEO, EdTech scaling, and student-LTV optimization.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Program Portfolio",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Program-Specific Technical SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Cycle Enrollment Tracking" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Faculty & Alumni Authority Building" } }
        ]
    }
}

export default function EducationPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "How do we lower CPL (Cost-per-Lead) for Executive Education?",
            answer: "We stop bidding on broad \"MBA\" keywords. We win by targeting \"Career-Pivot Intent.\" By focusing on the specific \"Problem\" an executive is trying to solve (e.g., \"Transitioning to AI Leadership\"), we find lower-competition queries with much higher conversion value."
        },
        {
            question: "Why is our institution not appearing in \"Best Courses\" AI lists?",
            answer: "Usually, it is a \"Knowledge Gap\" problem. If your accreditation and alumni data aren't structured via Schema.org, AI models can't verify your claims. Frameleads injects Verified Trust Signals into your site's header to ensure you are recognized as a top-tier provider."
        },
        {
            question: "What is Curriculum-Level Indexing?",
            answer: "It's the process of ensuring AI search engines understand the specific skills and outcomes of your courses. We move beyond broad program titles to index modules like \"Full-Stack Python for FinTech,\" capturing students searching for specific skill-sets."
        },
        {
            question: "How do you ensure GDPR and FERPA compliance?",
            answer: "We use private Server-Side Tracking (SST) to anonymize student data before attribution. This protects student privacy while maintaining 100% accurate attribution across the long enrollment window (6-12 months)."
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
                    <div className="absolute inset-0 z-0 text-[#FF6B35]/10">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[100px] -ml-72 -mb-72" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Educational Authority Snapshot */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-5xl mx-auto border border-slate-100 bg-white shadow-2xl rounded-3xl overflow-hidden mb-32 group hover:border-[#FF6B35]/30 transition-all duration-500"
                        >
                            <div className="bg-[#0F172A] px-6 py-3 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                                    <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Academic Authority Console v4.2</div>
                                <div className="flex gap-4 text-slate-400 font-mono text-[10px]">
                                    <span>VERIFIED_CREDENTIAL</span>
                                    <div className="flex gap-4">
                                        <Award className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                                        <BookOpen className="w-3 h-3 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 lg:p-16">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-[#FF6B35]/10 rounded-2xl">
                                                <GraduationCap className="w-6 h-6 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-tight">Verified Academic Growth</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                                            Education Growth Summary
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                                            Frameleads engineers <span className="text-[#0F172A] font-bold">High-Intent Student Acquisition Ecosystems</span> by aligning Pedagogical Excellence with <span className="text-[#FF6B35] font-bold italic underline decoration-[#FF6B35]/20">Career-Pathing Search Intent</span>. We move beyond basic lead gen to Verified Enrollment Orchestration. Our 2026 framework utilizes EducationEvent Schema and Student-LTV Modeling, resulting in an average <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-0.5 rounded italic font-bold">35% increase in Qualified Applicant volume</span>.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-[#FF6B35]/5 rounded-3xl border border-[#FF6B35]/10 flex flex-col justify-center">
                                            <div className="text-xs text-[#FF6B35]/60 font-bold uppercase mb-2 tracking-widest">Enrollment Status</div>
                                            <div className="text-[#0F172A] text-2xl font-black flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping" />
                                                ACTIVE / VERIFIED
                                            </div>
                                        </div>
                                        <div className="p-6 bg-[#FF6B35]/5 rounded-3xl border border-[#FF6B35]/10 flex flex-col justify-center">
                                            <div className="text-xs text-[#FF6B35]/60 font-bold uppercase mb-2 tracking-widest">Authority Ranking</div>
                                            <div className="text-slate-900 text-3xl font-black italic">Top-Tier Listed</div>
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
                                    ENROLLMENT ENGINEERING 2026
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                                    Excellence in Learning. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                                        Engineered for <br />
                                        Enrollment.
                                    </span>
                                </h1>
                                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                                    In 2026, students don't search for "degrees"—they search for "futures." Frameleads builds Authority-First Education Platforms that connect your curriculum with the world’s most ambitious learners.
                                </p>
                                <div className="flex">
                                    <Link href="/contact" className="group relative px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(255,107,53,0.3)]">
                                        <span className="relative z-10 flex items-center gap-4">
                                            Audit My Enrollment Funnel <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
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
                                    {/* Decorative Academic Lines */}
                                    <div className="absolute top-0 right-0 p-8 opacity-20 font-mono text-[10px] text-[#FF6B35] space-y-1 text-right">
                                        <div>degree_path: verified</div>
                                        <div>curriculum: indexed</div>
                                        <div>accreditation: SOC2_EDU</div>
                                    </div>

                                    <div className="relative z-10 space-y-10">
                                        {[
                                            { icon: GraduationCap, label: 'Alumni Authority', val: 'Verified Success', color: 'text-[#FF6B35]/80' },
                                            { icon: BookOpen, label: 'Course Schema', val: 'AIO Optimized', color: 'text-[#FF6B35]' },
                                            { icon: TrendingUp, label: 'Applicant Flow', val: '+35% Qualified', color: 'text-[#FF6B35]/80' },
                                            { icon: ShieldCheck, label: 'Compliance', val: 'FERPA/GDPR 2026', color: 'text-slate-400' }
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

                                    {/* Visual Progress Bars */}
                                    <div className="mt-12 flex items-end gap-1 h-20 opacity-30">
                                        {[45, 65, 55, 85, 70, 95, 80, 90, 85, 100].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="flex-1 bg-gradient-to-t from-[#FF6B35] to-transparent rounded-t-sm"
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

                {/* Pillar 1: Semantic Curriculum Mapping */}
                <section className="py-32 px-6 relative bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                                    Dominating the <span className="text-[#FF6B35]">"Skills-Based"</span> <br />
                                    Search Landscape.
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                                        In 2026, search intent is granular. We move beyond broad keywords to Outcome-Based Discovery through technical precision.
                                    </p>

                                    {[
                                        { title: "Curriculum-Level Indexing", desc: "We create dedicated pages for specific modules (e.g., \"Full-Stack Python for FinTech\") rather than just \"Computer Science.\"" },
                                        { title: "Course & Event Schema", desc: "We hardcode start dates, tuition, and accreditation into metadata, ensuring AI engines provide accurate Quick-Answers." },
                                        { title: "Semantic Career Mapping", desc: "Connecting courses to real-world job titles and salary data to prove Enrollment ROI directly in search results." }
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
                                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl overflow-hidden relative border border-white/5">
                                    <div className="relative z-10 flex items-center gap-4 mb-10">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-[#FF6B35]/20">
                                            <Layers className="w-8 h-8 text-[#FF6B35]" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-2xl uppercase tracking-tighter">Curriculum Engine</div>
                                            <div className="text-[#FF6B35]/40 text-sm font-mono tracking-widest">OUTCOME_MAPPED: YES</div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 relative z-10">
                                        <div className="p-6 bg-[#FF6B35]/10 rounded-3xl border border-white/5 font-mono text-slate-300 text-xs">
                                            <div className="text-[#FF6B35] mb-2">// Career outcome: AI Lead</div>
                                            <div className="text-white">ROI_SCORE: 9.8/10</div>
                                            <div className="text-slate-400">PLACEMENT_VERIFIED: TRUE</div>
                                        </div>
                                        <div className="p-6 bg-[#FF6B35]/10 rounded-3xl border border-white/5 font-mono text-slate-300 text-xs">
                                            <div className="flex justify-between items-center mb-2">
                                                <span>Schema Depth</span>
                                                <span className="text-[#FF6B35]">100%</span>
                                            </div>
                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-[#FF6B35]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillar 2: Lead Scoring & Attribution */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full mx-auto" />
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                                Solving the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">"Inquiry-to-Enrollment"</span> Gap.
                            </h2>
                            <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                                Education has a long "consideration cycle." We fix the Signal Decay and maintain authority through the entire student journey.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Server,
                                    title: "Server-Side Tracking",
                                    desc: "Private SST GTM instances to protect student privacy (GDPR/FERPA) while ensuring 100% accurate 12-month attribution."
                                },
                                {
                                    icon: Target,
                                    title: "Behavioral Lead Scoring",
                                    desc: "Integrating Slate, Salesforce, or HubSpot to identify \"High-Intent\" prospects based on syllabus engagement levels."
                                },
                                {
                                    icon: Zap,
                                    title: "Nurture Automation",
                                    desc: "AI-driven sequences that answer specific anxieties (financing, placement) based on the prospect's search behavior."
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

                {/* Pillar 3: Alumni & Faculty Authority */}
                <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
                        <School className="w-96 h-96 text-[#FF6B35]" />
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { label: 'Alumni Trust', val: 'Real Outcomes', color: 'text-[#FF8A50]' },
                                        { label: 'Faculty Reach', val: 'Global KOLs', color: 'text-[#FF6B35]' },
                                        { label: 'Regional Dominance', val: '#1 in District', color: 'text-[#FF8A50]' },
                                        { label: 'Verification', val: 'Entity Sync', color: 'text-slate-400' }
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
                                    Winning the <br />
                                    <span className="text-[#FF6B35]">"Trust" Search.</span>
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                                        In 2026, "Expertise" is proven by the success of your graduates and the depth of your faculty's thought leadership.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Alumni Success Portals", desc: "Building rich-media case studies that serve as high-converting social proof for high-ticket academic programs." },
                                            { title: "Faculty-Led Content", desc: "Positioning professors as KOLs through technical blogs that rank for complex, academic-intent queries." },
                                            { title: "Local Trust Signals", desc: "Dominating regional study hubs (e.g. \"Best Data Science in Bangalore\") through local entity verified mapping." }
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

                {/* Education Marketing Matrix */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">The Education Growth Matrix</h2>
                            <p className="text-2xl text-slate-500 font-medium italic">General agencies vs. Enrollment Specialists.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                                        <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Marketing Agency</th>
                                        <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads Education Hub</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { metric: 'Primary KPI', gen: 'Clicks / Leads', frame: 'Applications / Verified Enrollments' },
                                        { metric: 'Tracking Cycle', gen: '30 Days', frame: 'Full Academic Cycle (6-12 Months)' },
                                        { metric: 'Content Logic', gen: 'Keyword Volume', frame: 'Curriculum Depth / Outcome Logic' },
                                        { metric: 'Compliance', gen: 'Basic Privacy', frame: 'FERPA / GDPR / Accreditation Guardrails' },
                                        { metric: 'Schema Usage', gen: 'Generic WebPage', frame: 'Course / EducationEvent / Person' }
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
                                Education Marketing <br />
                                <span className="text-[#FF6B35]">Deep-Dive.</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium italic">High-authority answers for academic decision makers.</p>
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
                                                        <span>Academic Authority Verified</span>
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

                {/* Enrollment Audit CTA */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0F172A] z-0" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/20 rounded-full blur-[150px] -mr-96 -mt-96" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-32 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#FF6B35] rounded-full" />
                            <div className="mb-12">
                                <GraduationCap className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-pulse" />
                                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                                    Is Your Curriculum <br />
                                    <span className="text-[#FF8A50]">Invisible to Students?</span>
                                </h2>
                                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                                    Most educational institutions have world-class faculty but a "Digital Ghost Town" for a website. Our Education Performance Audit identifies your "Trust Gaps" and builds a roadmap to a global enrollment pipeline.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                                    Claim My Enrollment Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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
                            <p className="text-xl text-slate-500">Scale your institution with cross-channel technical authority.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: 'SaaS Hub', href: '/technology-and-saas', icon: Cpu, desc: 'LMS growth logic.' },
                                { label: 'Financial Hub', href: '/financial-services', icon: Briefcase, desc: 'Trust & Secutity.' },
                                { label: 'Healthcare Hub', href: '/healthcare-and-medical', icon: Activity, desc: 'Medical Ed focus.' },
                                { label: 'Industrial Hub', href: '/manufacturing-and-industrial', icon: Factory, desc: 'Vocational visibility.' },
                                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Conversion signals.' },
                                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Organic authority.' },
                                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Trust.' },
                                { label: 'Analytics', href: '/analytics-and-automations', icon: Database, desc: 'Lead attribution.' }
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
