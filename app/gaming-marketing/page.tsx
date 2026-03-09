'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    Gamepad2,
    Zap,
    Users,
    BarChart3,
    TrendingUp,
    Smartphone,
    Layers,
    MessageSquare,
    Globe,
    Search,
    Brain,
    Activity,
    CheckCircle2,
    Plus,
    ArrowRight,
    Monitor,
    Cpu,
    Target,
    Share2,
    Lock,
    Link2,
    Star
} from 'lucide-react'

// JSON-LD Structured Data for Gaming & Entertainment
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Frameleads Entertainment Growth Engine",
    "url": "https://frameleads.com/gaming-marketing",
    "description": "High-retention growth engineering for games, streaming platforms, and entertainment IPs.",
    "knowsAbout": ["ASO 2.0", "Player LTV Optimization", "Live-Ops Marketing", "Social Search"],
    "publisher": {
        "@type": "Organization",
        "name": "Frameleads"
    }
}

export default function GamingMarketingPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "Why is my game's CPI (Cost-per-Install) rising in 2026?",
            answer: "It's usually a \"Creative Mismatch.\" If your ad creative doesn't match the actual gameplay experience within 3 seconds, the algorithm penalizes you. Frameleads uses Playable Ads and Native-Style UGC to ensure the \"Discovery-to-Download\" transition is seamless."
        },
        {
            question: "How do I get my IP recommended by AI search assistants?",
            answer: "AI engines look for \"Entity Density.\" If your game or show has a dedicated Wiki, active Subreddit, and high-authority reviews, the LLM views you as a \"High-Trust\" entertainment recommendation. We build that Digital Footprint for you."
        },
        {
            question: "What is ASO 2.0?",
            answer: "ASO 2.0 moves beyond simple keywords to Semantic Optimization. We optimize for how users actually search for themes and emotions (e.g., 'cozy farming sim' or 'adrenaline-pumping shooter') rather than just generic categories."
        },
        {
            question: "How do you track attribution in a privacy-safe way?",
            answer: "We utilize SKAN 4.0 and Server-Side Tracking (SST) to build a probabilistic but highly accurate model of user journeys. This allows us to track 'Cross-Platform' behavior (PC to Mobile) without violating modern privacy standards."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* 1. Attention Intelligence Snapshot (Brand styled) */}
                <section className="relative pt-32 pb-16 px-4">
                    <div className="max-w-5xl mx-auto relative">
                        {/* Brand Glow Background */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] via-orange-400 to-[#FF6B35] rounded-[3.5rem] opacity-10 blur-2xl animate-pulse" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.15)] relative overflow-hidden group"
                        >
                            {/* Dashboard Header */}
                            <div className="bg-[#0F172A] px-10 py-4 flex items-center justify-between relative z-10 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 font-black tracking-widest uppercase">System_v7.0 // ATTENTION_INTEL_CONSOLE</div>
                                <div className="flex gap-4 text-[#FF6B35] font-mono text-[10px]">
                                    <Activity className="w-3 h-3 animate-pulse" />
                                    <span className="font-bold">HYPE_VELOCITY: PEAK</span>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 relative z-10 text-left">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-4 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Gamepad2 className="w-8 h-8 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Frameleads Entertainment Growth</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8 leading-[1.1] tracking-tighter">
                                            Gaming & Entertainment Strategy Summary
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                            Frameleads engineers <span className="text-[#0F172A] font-bold">High-Retention Entertainment Ecosystems</span> by aligning Immersive Creative with Frictionless Conversion Loops. We move beyond &quot;Users&quot; to <span className="text-[#FF6B35] italic font-bold">&quot;Players and Fans.&quot;</span> Our 2026 framework utilizes ASO 2.0 and Predictive LTV, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded font-black italic">40% increase in Day-30 Retention</span> and a 5x boost in Organic K-Factor.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-white transition-all duration-500">
                                            <div className="text-[10px] text-slate-400 font-black uppercase mb-2 tracking-widest text-center">RETENTION_MATCH</div>
                                            <div className="text-[#FF6B35] text-5xl font-black text-center flex items-center justify-center gap-2 tracking-tighter">
                                                +40%
                                            </div>
                                            <div className="mt-2 text-[10px] text-center text-slate-400 font-bold tracking-widest uppercase">DAY_30_COHORT_LIFT</div>
                                        </div>
                                        <div className="p-8 bg-[#0F172A] rounded-[2.5rem] border border-white/5 flex flex-col justify-center shadow-2xl">
                                            <div className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest text-center">K_FACTOR_VIRALITY</div>
                                            <div className="text-white text-4xl font-black text-center flex items-center justify-center gap-3">
                                                <TrendingUp className="w-8 h-8 text-[#FF6B35]" />
                                                5.0x
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Terminal Lines */}
                            <div className="flex justify-around p-8 bg-slate-50/50 border-t border-slate-100">
                                {['ASO_v2: READY', 'LTV_PREDICT: ON', 'S-SEO: ACTIVE', 'META_HYPE: SYNCED'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-400/70 uppercase tracking-widest">
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
                    <div className="absolute inset-0 z-0 opacity-5">
                        <Gamepad2 className="absolute top-0 right-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rotate-12 text-[#FF6B35]" />
                        <Activity className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 -rotate-12 text-[#FF6B35]" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-6 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-black rounded-full mb-8 uppercase tracking-[0.2em]">
                                BEYOND THE SCREEN: ENGINEERING THE HYPE
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black text-[#0F172A] leading-[0.85] tracking-tighter mb-10">
                                Don&apos;t Just Launch. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] underline decoration-[#FF6B35]/20">Dominate the Hype.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
                                In 2026, entertainment is competing with everything—sleep, social, and work. Frameleads builds <strong className="text-slate-900">Performance-First Entertainment Hubs</strong> that turn passive viewers into active participants.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#0F172A] text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                                    Audit My Title&apos;s Growth Potential <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Pillar 1: Community-Led Growth (CLG) & Social Search */}
                <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Winning the <br />
                                    <span className="text-[#FF6B35]">&quot;Trend-First&quot;</span> Discovery War
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    In 2026, games and shows are discovered on TikTok, Discord, and Reddit before they ever hit a storefront. We build your Organic Velocity:
                                </p>

                                <div className="space-y-12">
                                    {[
                                        { title: "S-SEO (Social Search) Optimization", desc: "Optimizing content for queries like 'Best cozy game for Steam Deck' on TikTok and YouTube.", icon: Search },
                                        { title: "The 'K-Factor' Engine", desc: "Engineering referral loops and shareable 'Achievements' that incentivize players to bring their friends, reducing CAC.", icon: Share2 },
                                        { title: "Live-Ops Content Sync", desc: "Synchronizing ad creative with in-game events, season passes, or episode drops to capitalize on 'Hype-Spikes'.", icon: Zap }
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
                                    {/* Social Search Mockup (Brand colors) */}
                                    <div className="bg-slate-900 rounded-[4rem] p-10 overflow-hidden relative min-h-[500px] flex flex-col">
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                                                <Share2 className="w-5 h-5 text-[#FF6B35]" />
                                            </div>
                                            <div className="h-10 flex-1 bg-white/5 rounded-full px-6 flex items-center text-slate-400 text-sm font-mono uppercase tracking-widest font-black">
                                                Discovering_Trends...
                                            </div>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl relative group-hover:border-[#FF6B35]/50 transition-all duration-500">
                                                <div className="flex gap-4 items-center mb-6">
                                                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">FL</div>
                                                    <div>
                                                        <div className="text-white font-bold text-sm">Viral Discovery Feed</div>
                                                        <div className="text-[#FF6B35] text-[10px] font-mono font-black uppercase tracking-widest">K-Factor: 1.8 (Viral)</div>
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-black/40 rounded-2xl mb-4 border border-white/5">
                                                    <div className="text-slate-500 text-[10px] font-mono mb-2 uppercase tracking-widest">Achievement_Unlocked</div>
                                                    <div className="text-white text-lg font-black leading-tight">Shared_By_Friend_Network</div>
                                                    <div className="mt-3 flex gap-2">
                                                        <div className="w-full h-1.5 bg-[#FF6B35] rounded-full shadow-[0_0_10px_#FF6B35]" />
                                                        <div className="w-1/3 h-1.5 bg-white/10 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px] text-[#FF6B35] font-mono font-black uppercase tracking-[0.2em]">
                                                    <span>Player_Auth: Verified</span>
                                                    <span>2026_META_SYNC</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-3">
                                                    <Zap className="w-8 h-8 text-[#FF6B35]" />
                                                    <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Hype_Intensity</span>
                                                </div>
                                                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-3">
                                                    <MessageSquare className="w-8 h-8 text-slate-500" />
                                                    <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Pulse_Filter</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: Technical ASO 2.0 & Cross-Platform Attribution */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#0F172A] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Solving the <br />
                                    <span className="text-[#0F172A]/80">&quot;Download-to-Deposit&quot;</span> Gap
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    Whether it&apos;s a subscription service or an IAP model, we fix the Friction Points in your funnel:
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "App Store Optimization (ASO 2.0)", desc: "Semantic keyword optimization and PPO tests ensuring 20% higher conversion than industry averages.", icon: Smartphone },
                                        { title: "SKAN 4.0 & Privacy-Safe Attribution", desc: "Server-Side Tracking for cross-device behavior without violating modern privacy standards.", icon: Lock },
                                        { title: "Deep-Link Architecture", desc: "Leading users directly to specific in-app events, cutting out 3 steps in the journey.", icon: Link2 }
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
                                <div className="bg-slate-50 rounded-[5rem] p-12 border border-slate-200 relative overflow-hidden group shadow-inner">
                                    {/* ASO 2.0 Dash (Brand colors) */}
                                    <div className="bg-white rounded-[4rem] p-12 shadow-2xl relative z-10 border border-slate-100 transform group-hover:-translate-y-2 transition-transform duration-700">
                                        <div className="flex justify-between items-center mb-12">
                                            <div className="flex gap-4 items-center">
                                                <div className="p-4 bg-[#FF6B35]/10 text-[#FF6B35] rounded-3xl border border-[#FF6B35]/20">
                                                    <Layers className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="text-[#0F172A] font-black text-xl uppercase tracking-tighter">ASO_OPTIMIZER</div>
                                                    <div className="text-[10px] text-slate-400 font-mono font-black uppercase tracking-widest mt-1">SEMANTIC_INDEX: v2.0</div>
                                                </div>
                                            </div>
                                            <div className="text-[#FF6B35] text-[10px] font-mono font-black uppercase tracking-widest border border-[#FF6B35]/20 px-3 py-1 rounded-full">ACTIVE_TEST</div>
                                        </div>

                                        <div className="space-y-8 text-slate-600">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="text-[10px] uppercase font-bold tracking-widest mb-1 text-slate-400">Visual_Conversion_Rate</div>
                                                    <div className="text-3xl font-black text-[#0F172A]">24.8%</div>
                                                </div>
                                                <div className="text-[#FF6B35] font-black text-sm">+6.2%</div>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { label: 'Semantic_Keyword_Match', val: 94 },
                                                    { label: 'Creative_Sentiment_Score', val: 88 },
                                                    { label: 'Download_Velocity', val: 72 }
                                                ].map((stat, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest mb-1.5 px-1 text-slate-400">
                                                            <span>{stat.label}</span>
                                                            <span>{stat.val}%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                            <div className="h-full bg-[#FF6B35] rounded-full shadow-[0_0_10px_#FF6B35]" style={{ width: `${stat.val}%` }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brand Grid Decoration */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FF6B35]/5 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Transmedia Identity & Fandom Building */}
                <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-8xl font-black mb-10 tracking-[ -0.05em] leading-[0.9]">
                                Scaling LTV Beyond the <br />
                                <span className="text-[#FF6B35]">Core Product.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                                In 2026, a game isn&apos;t just a game—it&apos;s a brand. We build Multi-Touchpoint Authority across the entire entertainment landscape.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Transmedia Storytelling", desc: "Optimizing your IP's presence across Wiki-pages and Lore-hubs so AI recognizes you as a Cultural Entity.", icon: Globe },
                                { title: "Discord & Reddit Orchestration", desc: "Managing Sentiment Signal so your core community becomes the primary engine for positive discovery.", icon: Users },
                                { title: "Creator-Led Creative (CLC)", desc: "Co-creating content with streamers and fans to build the very ads that drive your growth.", icon: Monitor }
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

                    {/* Background Glyph */}
                    <div className="absolute bottom-0 right-0 p-40 opacity-5 pointer-events-none">
                        <Target className="w-[800px] h-[800px] text-[#FF6B35] animate-spin-slow" />
                    </div>
                </section>

                {/* 6. The Entertainment Growth Matrix */}
                <section className="relative py-40 bg-white">
                    <div className="max-w-6xl mx-auto px-6 text-slate-800">
                        <div className="text-center mb-24">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.3em]">
                                Strategic Comparison Matrix
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">General Agency vs. <br /><span className="text-[#FF6B35]">Gaming Specialist.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies fail to capture the meta-progression.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(15,23,42,0.1)] border border-slate-100 relative bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">Feature</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">General Marketing Agency</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-[#FF6B35] bg-[#FF6B35]/5">Frameleads Growth Engine</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 uppercase font-bold text-[10px]">
                                    {[
                                        { feat: "Primary KPI", basic: "Clicks / Impressions", advanced: "DAU / MAU / Day-30 Retention" },
                                        { feat: "Search Strategy", basic: "Broad Keyword SEO", advanced: "S-SEO & ASO 2.0 Mastery" },
                                        { feat: "Creative Logic", basic: "Static Banners", advanced: "Interactive UGC & Playable Ads" },
                                        { feat: "Tracking Cycle", basic: "Single Conversion", advanced: "Full-Cycle LTV & Meta-Progression" },
                                        { feat: "Community", basic: "Social Media Mgt", advanced: "Discord/Reddit Sentiment Orchestration" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-12 py-10 font-black text-[#0F172A] text-xl tracking-tight normal-case">{row.feat}</td>
                                            <td className="px-12 py-10 text-slate-400 italic text-sm">{row.basic}</td>
                                            <td className="px-12 py-10 text-[#FF6B35] font-black text-sm bg-[#FF6B35]/5">{row.advanced}</td>
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
                            <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-8 leading-none">Hype Intelligence <br /><span className="text-[#FF6B35]">FAQ.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">High-velocity answers for Indie and Studio leaders.</p>
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

                {/* 8. Final Call to Action: The Hype Audit */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <div className="bg-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center border border-white/5">
                        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#FF6B35] opacity-10 rounded-full blur-[150px] -mr-60 -mt-60 animate-pulse" />

                        <div className="relative z-10">
                            <div className="flex justify-center mb-10">
                                <div className="p-6 bg-white shadow-2xl rounded-[2rem] border-2 border-[#FF6B35]/20 animate-bounce">
                                    <Gamepad2 className="w-12 h-12 text-[#FF6B35]" />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-[ -0.05em]">
                                Is Your IP One Click Away <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">From Going Viral?</span>
                            </h2>
                            <p className="text-2xl md:text-3xl text-slate-400 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
                                Most entertainment brands are losing 50% of their hype-to-download pipeline to bad onboarding and boring creative. Our Entertainment Audit identifies your leaks and builds a roadmap to a <span className="text-white font-black underline decoration-[#FF6B35]/50">10x Player LTV</span>.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-16 py-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                                Claim My Hype Audit <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
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
                .animate-spin-slow {
                    animation: spin 60s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    )
}
