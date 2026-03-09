'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    Terminal,
    Cpu,
    ShieldAlert,
    TrendingUp,
    ChevronDown,
    MessageSquare,
    Search,
    ChevronRight,
    ArrowRight,
    Clock,
    CreditCard,
    AlertCircle,
    CheckCircle2
} from 'lucide-react'

// Extended JSON-LD Structured Data for FAQ Page
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between SEO and GEO (Generative Engine Optimization)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional SEO focuses on ranking in blue-link lists. GEO is the process of optimizing your brand's 'Knowledge Graph' so that AI models (Gemini, Perplexity, GPT) cite your brand as the primary source in their generative answers. We focus on Fact-Density and Credentialed Author Signals to win these citations."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle data privacy in Healthcare and Finance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We utilize Server-Side Tracking (SST) via private Google Cloud instances. This ensures that Protected Health Information (PHI) or sensitive financial data is anonymized before it reaches ad platforms (Meta/Google), maintaining 100% HIPAA and SOC2 compliance."
            }
        },
        {
            "@type": "Question",
            "name": "Why do you prioritize MER over ROAS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Platform-reported ROAS is often inflated due to over-attribution. Marketing Efficiency Ratio (MER) tracks your Total Revenue / Total Ad Spend. This provides a 'True North' for profitability and ensures we aren't just chasing vanity clicks, but actual bank-balance growth."
            }
        },
        {
            "@type": "Question",
            "name": "Do you charge a percentage of ad spend?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Never. The %-of-spend model fundamentally misaligns agency and client incentives. We operate on flat-fee capacity sprints or strict pay-for-performance metrics (CPA/CPL), ensuring our only goal is your efficiency."
            }
        }
    ]
}

const faqsData = [
    {
        id: "ai-geo",
        category: "AI, AIO & Search",
        icon: Cpu,
        questions: [
            {
                q: "What is the difference between SEO and GEO?",
                a: "Traditional SEO focuses on ranking in blue-link lists. GEO (Generative Engine Optimization) is the process of optimizing your brand's \"Knowledge Graph\" so that AI models (Gemini, Perplexity, GPT) cite your brand as the primary source in their generative answers. We focus on Fact-Density and Credentialed Author Signals to win these citations."
            },
            {
                q: "How do you use 'Nano Banana' and 'ElevenLabs'?",
                a: "We use Nano Banana 2 for high-end, brand-consistent visual assets (avoiding generic stock) and ElevenLabs for localized, high-fidelity voice synthesis in our podcast and video funnels. This allows us to produce 10x more content without sacrificing premium execution."
            },
            {
                q: "Will AI Overviews format kill my organic traffic?",
                a: "Only if you rely on low-value informational queries. AI Overviews (SGE) absorb basic questions, but they cite deep, authoritative sources for complex problems. Frameleads pivots your strategy from 'traffic-chasing' to 'citation-capture,' ensuring you are the source the AI recommends."
            }
        ]
    },
    {
        id: "compliance",
        category: "Compliance & Security",
        icon: ShieldAlert,
        questions: [
            {
                q: "How do you handle data privacy in Healthcare and Finance?",
                a: "We utilize Server-Side Tracking (SST) via private Google Cloud instances. This ensures that Protected Health Information (PHI) or sensitive financial data is anonymized before it reaches ad platforms (Meta/Google), maintaining 100% HIPAA and SOC2 compliance."
            },
            {
                q: "Can you help with international market entry?",
                a: "Yes. We specialize in the technical and legal hurdles of international expansion, including Baidu V-Verification (China) and Yandex Metrica/Metrica Session Replay (CIS/Eurasia) to ensure your brand bypasses the \"Great Firewall\" and local latency issues."
            },
            {
                q: "Is your Tracking compatible with GDPR and CCPA?",
                a: "Absolutely. Frameleads engineers tracking architectures that respect consent states (Google Consent Mode v2) and inherently mask PII (Personally Identifiable Information) before server-to-server dispatch, protecting you from regulatory fines."
            }
        ]
    },
    {
        id: "performance",
        category: "Performance Metrics",
        icon: TrendingUp,
        questions: [
            {
                q: "Why do you prioritize MER over ROAS?",
                a: "Platform-reported ROAS is often inflated due to over-attribution. Marketing Efficiency Ratio (MER) tracks your Total Revenue / Total Ad Spend. This provides a \"True North\" for profitability and ensures we aren't just chasing vanity clicks, but actual bank-balance growth."
            },
            {
                q: "What is a 'Product-Qualified Lead' (PQL)?",
                a: "For our SaaS and Tech clients, a PQL is a user who has signaled high-value intent through actual product usage (e.g., hitting a specific feature milestone). We sync this data back to your ads to find more users likely to convert into \"Pro\" or \"Enterprise\" plans."
            },
            {
                q: "Do you offer multi-touch attribution reporting?",
                a: "Yes. Using advanced data-warehousing (BigQuery), we map the entire customer journey across platforms—from their first TikTok view to their final branded Google search—revealing exactly which touchpoints drive the most incremental revenue."
            }
        ]
    },
    {
        id: "onboarding",
        category: "Onboarding & Timelines",
        icon: Clock,
        questions: [
            {
                q: "How long until we see tangible ROI?",
                a: "While technical quick-wins (site-speed fixes, indexing loops, CAPI setup) occur in the first 14 days, compounding algorithmic growth typically requires a 90-day stabilization sprint. We set realistic roadmaps focused on permanent moats, not temporary hacks."
            },
            {
                q: "What happens during the first 30 days?",
                a: "The 'Foundation Sprint': We deploy our technical tracking infrastructure, execute a deep competitive content gap analysis, restructure your ad account architectures, and build your initial barrage of AI-accelerated creative assets."
            }
        ]
    },
    {
        id: "pricing",
        category: "Financials & Scope",
        icon: CreditCard,
        questions: [
            {
                q: "Do you charge a percentage of ad spend?",
                a: "Never. The %-of-spend model fundamentally misaligns agency and client incentives. We operate on flat-fee capacity sprints or strict pay-for-performance metrics (CPA/CPL), ensuring our only mutual goal is your efficiency."
            },
            {
                q: "Is there a minimum media spend requirement?",
                a: "To effectively fuel our machine-learning schemas and Server-Side tracking, we recommend a minimum paid media spend of $10,000/month. However, our Organic/GEO Authority sprints have no paid media requirements."
            }
        ]
    }
]

const FaqAccordion = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`px-2 transition-colors duration-500 rounded-3xl ${isOpen ? 'bg-slate-50' : 'bg-transparent'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start justify-between py-6 px-4 md:px-8 text-left focus:outline-none group gap-6"
            >
                <span className={`text-xl lg:text-2xl font-black leading-tight transition-colors duration-300 ${isOpen ? 'text-[#FF6B35]' : 'text-[#0F172A] group-hover:text-[#FF6B35]'}`}>
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${isOpen ? 'bg-[#FF6B35] text-white rotate-180 shadow-orange-500/30' : 'bg-white border border-slate-200 text-slate-400 group-hover:border-[#FF6B35] group-hover:text-[#FF6B35] group-hover:rotate-90'}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out-expo
                        className="overflow-hidden"
                    >
                        <div className="pb-8 px-4 md:px-8 text-lg text-slate-600 font-medium leading-relaxed pl-4 md:pl-8 border-l-2 border-[#FF6B35]/20 ml-4 md:ml-8">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQPage() {
    const [activeSection, setActiveSection] = useState(faqsData[0].id)
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });

        faqsData.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-0 overflow-x-hidden">

                {/* 1. Deep-Tech Hero */}
                <section className="relative pt-32 pb-32 px-4 overflow-hidden bg-[#0F172A] min-h-[60vh] flex flex-col justify-center rounded-b-[4rem] md:rounded-b-[8rem] shadow-2xl z-20">
                    <div className="absolute inset-0 z-0">
                        {/* Frameleads Signature Orange Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[80vw] max-h-[1000px] bg-[#FF6B35]/15 rounded-full blur-[150px] opacity-70" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10 w-full">
                        <div className="flex flex-col md:flex-row gap-16 items-center">

                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(255,107,53,0.2)]">
                                    <Terminal className="w-4 h-4" /> Global Knowledge Base
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8 max-w-2xl">
                                    End the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9B70]">Asymmetry.</span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex-1 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 opacity-10">
                                    <ShieldAlert className="w-64 h-64 text-[#FF6B35]" />
                                </div>
                                <h2 className="text-2xl font-black text-white mb-6 tracking-tight relative z-10">Frameleads Philosophy</h2>
                                <p className="text-xl text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                                    We eliminate the "information asymmetry" between agencies and clients. By providing transparent answers on <strong className="text-white border-b-2 border-[#FF6B35]/50">AI Production (GEO)</strong>, <strong className="text-white border-b-2 border-[#FF6B35]/50">Compliance</strong>, and <strong className="text-white border-b-2 border-[#FF6B35]/50">Unit Economics</strong>, we ensure our partners are purely equipped to scale.
                                </p>
                                <div className="flex items-center gap-3 text-[#FF6B35] font-black text-sm uppercase tracking-widest relative z-10">
                                    <CheckCircle2 className="w-5 h-5" /> 100% Signal Clarity
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* 2. Enhanced FAQ Interactive Layout */}
                <section className="relative py-24 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Sticky Sidebar Navigation */}
                            <div className="lg:w-1/3 hidden lg:block">
                                <div className="sticky top-32 space-y-4">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 ml-4">Directory Maps</h3>
                                    {faqsData.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 border group ${activeSection === section.id
                                                    ? 'bg-white border-[#FF6B35]/20 shadow-[0_20px_40px_-15px_rgba(255,107,53,0.15)]'
                                                    : 'bg-transparent border-transparent hover:bg-slate-100'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 shadow-sm ${activeSection === section.id ? 'bg-[#FF6B35] text-white' : 'bg-white border border-slate-200 text-slate-400 group-hover:text-[#0F172A]'
                                                    }`}>
                                                    <section.icon className="w-5 h-5" />
                                                </div>
                                                <span className={`text-xl font-black transition-colors ${activeSection === section.id ? 'text-[#0F172A]' : 'text-slate-500 group-hover:text-[#0F172A]'
                                                    }`}>
                                                    {section.category}
                                                </span>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 transition-transform ${activeSection === section.id ? 'text-[#FF6B35] translate-x-1' : 'text-slate-300 group-hover:text-[#0F172A]'
                                                }`} />
                                        </button>
                                    ))}

                                    {/* Help Box inside sidebar */}
                                    <div className="mt-12 p-8 bg-[#0F172A] rounded-[2.5rem] relative overflow-hidden text-center border border-slate-800">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/20 rounded-full blur-[40px] pointer-events-none" />
                                        <MessageSquare className="w-10 h-10 text-[#FF6B35] mb-6 mx-auto relative z-10" />
                                        <h4 className="text-white font-black text-2xl mb-4 relative z-10">Still Digging?</h4>
                                        <p className="text-slate-400 font-medium text-sm mb-6 relative z-10">Bypass the FAQ and get a bespoke technical answer from our models.</p>
                                        <Link href="/contact" className="block w-full py-4 bg-white/10 hover:bg-[#FF6B35] text-white font-bold rounded-2xl transition-colors duration-300 relative z-10">
                                            Ask AI-Concierge
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Main FAQ Content Area */}
                            <div className="lg:w-2/3">
                                {faqsData.map((section, idx) => (
                                    <div
                                        key={idx}
                                        id={section.id}
                                        className={`scroll-mt-32 ${idx !== faqsData.length - 1 ? 'mb-24' : ''}`}
                                    >
                                        <div className="flex items-center gap-6 mb-10 pb-6 border-b border-slate-200/60">
                                            <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-2xl">
                                                <section.icon className="w-8 h-8 text-[#FF6B35]" />
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter">
                                                {section.category}
                                            </h2>
                                        </div>

                                        <div className="bg-white border border-slate-200 rounded-[3rem] p-2 md:p-6 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.05)]">
                                            <div className="flex flex-col gap-2">
                                                {section.questions.map((q, qIdx) => (
                                                    <FaqAccordion key={qIdx} question={q.q} answer={q.a} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. The Transparency Matrix */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">
                                The <span className="text-[#FF6B35]">Transparency Matrix</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
                                Comparing obsolete operational models with the Frameleads 2026 standard.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-[3.5rem] bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-slate-400">Operational Feature</th>
                                        <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-[#0F172A]">Traditional Agency Mode</th>
                                        <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-[#FF6B35] bg-[#FF6B35]/5 shadow-inner">Frameleads 2026 Framework</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    {[
                                        { feat: "Organic Search", old: "Keywords & Paid Backlinks", new: "Entity Graph Authority & GEO Citations" },
                                        { feat: "Creative Production", old: "Manual Graphic Design / Stock SVGs", new: "Proprietary AI Image & Voice Synthesis" },
                                        { feat: "Attribution", old: "Browser Cookies (Post-iOS14 Risk)", new: "Server-Side Tracking (SST) & CAPI" },
                                        { feat: "Reporting Scope", old: "Monthly Static PDF Generics", new: "Dynamic Real-Time Data Warehousing" },
                                        { feat: "Growth Strategy", old: "Generic \"Best Practices\" Setup", new: "Deep Industry-Vertical Algorithms" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-10 py-8 font-black text-[#0F172A] text-xl w-1/4">{row.feat}</td>
                                            <td className="px-10 py-8 text-slate-400 font-medium text-lg italic w-1/3 border-r border-slate-100">{row.old}</td>
                                            <td className="px-10 py-8 text-[#FF6B35] font-black text-lg bg-[#FF6B35]/5 w-1/3">{row.new}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 4. Final CTA */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <div className="bg-[#0F172A] border border-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl text-center px-6 py-24 md:py-32">
                        {/* Orange Glow Behind CTA */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/15 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                                Clarity is a <br />
                                <span className="text-[#FF6B35]">Competitive Advantage.</span>
                            </h2>
                            <p className="text-xl md:text-3xl text-slate-400 mb-16 leading-relaxed font-medium">
                                If you have a complex technical question or a niche industry inquiry, our founders are available for a 15-minute Strategy Deep-Dive. <strong className="text-white">No sales pitch—just pure technical roadmap.</strong>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-12 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-2xl rounded-[3rem] shadow-[0_20px_40px_-12px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                                    Book a Technical Deep-Dive <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-10 py-8 bg-white/5 border border-white/20 text-white font-black text-xl rounded-[3rem] hover:bg-white/10 transition-all duration-300 group">
                                    <MessageSquare className="w-6 h-6 text-[#FF6B35]" /> Chat with AI-Concierge
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
