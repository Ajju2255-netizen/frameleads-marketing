'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    Plane,
    Globe,
    Compass,
    Map,
    Hotel,
    Calendar,
    Users,
    Zap,
    Search,
    MessageSquare,
    Database,
    ShieldCheck,
    TrendingUp,
    Activity,
    Briefcase,
    CheckCircle2,
    Plus,
    ArrowRight,
    Smartphone,
    MapPin,
    Heart,
    Sparkles
} from 'lucide-react'

// JSON-LD Structured Data for Travel & Hospitality Services
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Frameleads Travel Growth",
    "url": "https://frameleads.com/travel-marketing",
    "description": "Personalized journey orchestration specializing in GEO, experiential travel scaling, and first-party loyalty data.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Experience Portfolio",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Agentic SEO & Citation Strategy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Experiential Landing Page Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Cycle Booking Attribution" } }
        ]
    }
}

export default function TravelHospitalityMarketingPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "How does the \"Human + AI\" model work in hospitality?",
            answer: "AI handles the Efficiency (bookings, check-in, basic FAQs), while humans handle the Empathy (welcome rituals, resolving complex issues, personalized service). In 2026, the brands that win are those that use tech to free up their staff for real human connection."
        },
        {
            question: "Why is \"Flexibility\" the new luxury in 2026?",
            answer: "Over 58% of travelers now prioritize \"Flexible Change/Cancellation\" over a lower price. Frameleads builds marketing messages that treat Flexibility as a USP, helping travelers feel confident in a volatile world."
        },
        {
            question: "What is GEO (Generative Engine Optimization) in travel?",
            answer: "GEO is the practice of optimizing your property's digital footprint so AI assistants like ChatGPT, Gemini, or Perplexity recommend your stay when users ask for experiential travel. It focuses on 'Information Gain' and 'Authority Citations' rather than just keyword density."
        },
        {
            question: "How do you track a 30-day booking window without cookies?",
            answer: "We implement Server-Side Tracking (SST) via Meta's Conversions API (CAPI) and Google Tag Manager Server-Side. This creates a direct pipeline from your booking engine to the advertising platforms, ensuring 100% signal integrity regardless of browser restrictions."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* 1. Travel Intelligence Snapshot */}
                <section className="relative pt-32 pb-16 px-4">
                    <div className="max-w-5xl mx-auto relative text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.15)] relative overflow-hidden group"
                        >
                            {/* Dashboard Elements */}
                            <div className="absolute top-0 right-0 p-12 opacity-5 font-serif text-8xl text-[#FF6B35] pointer-events-none">Journey</div>

                            <div className="bg-[#0F172A] px-10 py-5 flex items-center justify-between relative z-10 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">Admin_v4.2 // TRAVEL_INTELLIGENCE</div>
                                <div className="flex gap-4 text-slate-300 font-mono text-[10px]">
                                    <Activity className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                                    <span className="text-[#FF6B35] font-bold">REAL_TIME_BOOKING_INDEX</span>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 relative z-10 text-left">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-4 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Plane className="w-8 h-8 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Experience Orchestration Hub</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8 leading-[1.1] tracking-tighter">
                                            Travel & Hospitality Strategy Summary
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                            Frameleads engineers <span className="text-[#0F172A] font-bold">Connected Travel Ecosystems</span> by aligning Predictive Demand Data with Hyper-Personalized Itineraries. We move beyond &quot;Destinations&quot; to <span className="text-[#FF6B35] italic font-bold">Identity-Based Experiences</span>. Our 2026 framework utilizes Advanced Travel Feed Schema, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded font-black italic">40% increase in direct bookings</span> and a 6x rise in &quot;High-Net-Worth&quot; traveler acquisition.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-white transition-all duration-500">
                                            <div className="text-[10px] text-slate-400 font-black uppercase mb-2 tracking-widest text-center">DIRECT_BOOKING_LIFT</div>
                                            <div className="text-[#FF6B35] text-5xl font-black text-center flex items-center justify-center gap-2 tracking-tighter">
                                                +40%
                                            </div>
                                            <div className="mt-2 text-[10px] text-center text-slate-400 font-bold tracking-widest">OTA_COMMISSION_SAVINGS</div>
                                        </div>
                                        <div className="p-8 bg-[#0F172A] rounded-[2.5rem] border border-white/5 flex flex-col justify-center shadow-2xl">
                                            <div className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest text-center">HNW_ACQUISITION_INDEX</div>
                                            <div className="text-white text-4xl font-black text-center flex items-center justify-center gap-3">
                                                <TrendingUp className="w-8 h-8 text-[#FF6B35]" />
                                                6.0x
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Signal Decorations */}
                            <div className="flex justify-around p-8 bg-slate-50/50 border-t border-slate-100">
                                {['GEO_Schema: ACTIVE', 'AIO_Citations: INDEXED', 'CAPI_Feed: SYNCED', 'Predictive_LTV: ON'].map((item, i) => (
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
                <section className="relative py-24 px-4 bg-white text-center overflow-hidden">
                    <div className="absolute inset-0 z-0 text-[#FF6B35]/5">
                        <Map className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rotate-12" />
                        <Globe className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 -rotate-12" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-6 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-black rounded-full mb-8 uppercase tracking-[0.2em]">
                                THE WORLD IS PERSONAL: SCALING YOUR TRAVEL STORY
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black text-[#0F172A] leading-[0.85] tracking-tighter mb-10">
                                Don&apos;t Just Offer a Stay. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] underline decoration-[#FF6B35]/20">Curate a Legacy.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
                                In 2026, travelers don&apos;t search for &quot;hotels&quot;—they search for <strong className="text-slate-900">&quot;the version of themselves they want to become.&quot;</strong> Frameleads builds Outcome-First Travel Platforms that bridge the gap from inspiration to arrival.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#0F172A] text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                                    Audit My Travel Conversion Funnel <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Pillar 1: GEO for Travel */}
                <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Winning the <br />
                                    <span className="text-[#FF6B35]">&quot;AI-Planned Itinerary&quot;</span> Search
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    In 2026, over 60% of travelers use AI to plan their trips. If your brand isn&apos;t structured for these models, you are invisible:
                                </p>

                                <div className="space-y-12">
                                    {[
                                        { title: "Conversational Semantic Content", desc: "Optimizing copy for natural language queries like 'Where is a silent, eco-conscious stay?' rather than just 'Hotel in Coorg'.", icon: MessageSquare },
                                        { title: "Citations & Digital PR", desc: "Securing mentions in high-authority travel publications to ensure AI models (ChatGPT, Perplexity) cite your property as a trusted recommendation.", icon: Sparkles },
                                        { title: "Travel Feeds & Live Rates", desc: "Integrating real-time pricing and inventory directly into Search Ads so AI can answer 'How much is it for next weekend?' with zero friction.", icon: Database }
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
                                <div className="absolute inset-0 bg-[#FF6B35]/20 rounded-[4.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="bg-[#0F172A] rounded-[4.5rem] p-1 scale-105 shadow-2xl relative overflow-hidden">
                                    {/* AI Agentic Visual Mockup */}
                                    <div className="bg-slate-900 rounded-[4rem] p-10 overflow-hidden relative min-h-[500px] flex flex-col">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center">
                                                <Sparkles className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="h-10 flex-1 bg-white/10 rounded-full px-6 flex items-center text-slate-300 text-sm font-medium">
                                                Suggest a 3-day wellness escape in South India...
                                            </div>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl relative">
                                                <div className="flex gap-4 items-center mb-6">
                                                    <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-black text-[10px]">AI</div>
                                                    <div className="text-white font-bold text-sm">Travel Assistant Recommendation</div>
                                                </div>
                                                <div className="p-4 bg-black/40 rounded-2xl mb-4 text-slate-300 text-sm leading-relaxed border border-white/5">
                                                    &quot;Based on your preference for eco-conscious luxury, I recommend <span className="text-[#FF6B35] font-black underline">YOUR_PROPERTY_NAME</span>. They are currently cited by Condé Nast Traveler for their silent writer retreats...&quot;
                                                </div>
                                                <div className="flex justify-between items-center bg-[#FF6B35]/20 p-4 rounded-2xl border border-[#FF6B35]/30">
                                                    <div className="text-white font-black text-xs">Live Rate: US₹45,500/night</div>
                                                    <button className="px-4 py-2 bg-[#FF6B35] text-white text-[10px] font-black rounded-lg uppercase tracking-widest">Book Now</button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                                    <Compass className="w-6 h-6 text-[#FF6B35]" />
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Discovery Engine</span>
                                                </div>
                                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                                    <MapPin className="w-6 h-6 text-[#FF6B35]" />
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Geo_Optimized</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: Identity-First Digital Experience */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#0F172A] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    From Generic Packages to <br />
                                    <span className="text-[#0F172A]/80">&quot;Storyscape&quot; Retreats</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    Modern travelers seek &quot;Romantasy Retreats&quot; and &quot;Local Deep-Dives.&quot; We build your Experience Authority through high-intent technology:
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "Interactive Experience Builders", desc: "Replacing static 'Packages' with AI-driven itinerary builders that adjust based on the traveler's persona.", icon: Map },
                                        { title: "Video-First Inspiration", desc: "Utilizing emotion-driven visuals (the chef's table, sunrise yoga) to capture the 'Dreaming Phase' across social feeds.", icon: Sparkles },
                                        { title: "Attribute-Based Selling (ABS)", desc: "Implementing schema that allows users to book specific room attributes (High-floor, Private Spa) directly from search.", icon: CheckCircle2 }
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
                                    {/* Experience Builder UI Mockup */}
                                    <div className="bg-white rounded-[4rem] p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative z-10 border border-slate-100">
                                        <div className="text-center mb-10">
                                            <h3 className="text-2xl font-black text-[#0F172A] mb-2 tracking-tight">Curate Your Journey</h3>
                                            <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] font-black underline decoration-[#FF6B35]/40 leading-none">Persona_Match_Engine: v2.0</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-6 bg-[#FF6B35]/5 border-2 border-[#FF6B35] rounded-3xl text-center flex flex-col items-center gap-3">
                                                    <Heart className="w-6 h-6 text-[#FF6B35]" />
                                                    <span className="text-[10px] font-black text-[#FF6B35] uppercase tracking-widest">Memory Maker</span>
                                                </div>
                                                <div className="p-6 bg-slate-50 border-2 border-transparent rounded-3xl text-center flex flex-col items-center gap-3 opacity-50">
                                                    <Compass className="w-6 h-6 text-slate-400" />
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Globetrotter</span>
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Recommended_Itinerary</div>
                                                <div className="space-y-4">
                                                    {[
                                                        { label: 'Sunrise Mindfulness', time: '06:00 AM' },
                                                        { label: 'Hyper-Local Tasting Menu', time: '12:30 PM' },
                                                        { label: 'Private Spa Ritual', time: '04:00 PM' }
                                                    ].map((step, i) => (
                                                        <div key={i} className="flex justify-between items-center text-sm font-bold text-[#0F172A]">
                                                            <span>{step.label}</span>
                                                            <span className="text-slate-400 font-mono text-xs">{step.time}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button className="w-full py-6 bg-[#0F172A] text-white rounded-3xl font-black text-lg shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                                                Confirm Experience <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Interactive Dots */}
                                    <div className="absolute bottom-10 right-10 p-4 opacity-10">
                                        <div className="grid grid-cols-4 gap-2">
                                            {[...Array(16)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Signal Integrity & Loyalty */}
                <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-8xl font-black mb-10 tracking-[ -0.05em] leading-[0.9]">
                                Owning the Data in a <br />
                                <span className="text-[#FF6B35]">Post-Cookie World.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                                With privacy laws tightening, your First-Party Data is your most valuable asset. We move you from mass newsletters to automated loyalty flows.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Server-Side Tracking (SST)", desc: "Implementing API pipelines (CAPI) to track the 7+ touchpoints in a 30-day booking window without relying on fragile cookies.", icon: ShieldCheck },
                                { title: "Predictive Email Nurture", desc: "Moving away from 'Mass Newsletters' to Automated Postcard Flows triggered by weather patterns or guest milestones.", icon: Calendar },
                                { title: "Direct-Channel Dominance", desc: "Building Member-Only pricing and WhatsApp concierge features that incentivize booking on your site vs paying OTA commissions.", icon: MessageSquare }
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

                    {/* Background Decoration */}
                    <div className="absolute bottom-0 left-0 p-40 opacity-5 pointer-events-none">
                        <Globe className="w-[800px] h-[800px] text-[#FF6B35]" />
                    </div>
                </section>

                {/* 6. The Travel Marketing Matrix */}
                <section className="relative py-40 bg-white">
                    <div className="max-w-6xl mx-auto px-6 text-slate-800">
                        <div className="text-center mb-24">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.3em]">
                                Strategic Comparison Matrix
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">General Agency vs. <br /><span className="text-[#FF6B35]">Travel Specialist.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies fail to capture the high-net-worth journey.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(15,23,42,0.1)] border border-slate-100 relative bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">Feature</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">General Marketing Agency</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-[#FF6B35] bg-[#FF6B35]/5">Frameleads Travel Hub</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Primary KPI", basic: "Clicks / Leads", advanced: "Confirmed Bookings / LTV" },
                                        { feat: "Search Focus", basic: "Keywords & CPC", advanced: "Entity-Based GEO & Citations" },
                                        { feat: "UX Strategy", basic: "Standard Layouts", advanced: "Identity-Based Experience Design" },
                                        { feat: "Tech Stack", basic: "Basic CMS / Plugin", advanced: "PMS/Channel Manager & AI Sync" },
                                        { feat: "Retention", basic: "Reactive Emails", advanced: "Predictive Nurture & Loyalty Logic" }
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
                            <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-8 leading-none">Journey Intelligence <br /><span className="text-[#FF6B35]">FAQ.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">High-intent answers for Hotel and Tour Operators.</p>
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

                {/* 8. Final Call to Action: The Journey Audit */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <div className="bg-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center border border-white/5">
                        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#FF6B35] opacity-10 rounded-full blur-[150px] -mr-60 -mt-60 animate-pulse" />

                        <div className="relative z-10">
                            <div className="flex justify-center mb-10">
                                <div className="p-6 bg-white shadow-2xl rounded-[2rem] border-2 border-[#FF6B35]/20 animate-bounce">
                                    <Compass className="w-12 h-12 text-[#FF6B35]" />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-[ -0.05em]">
                                Is Your Destination Invisible to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Modern Travelers?</span>
                            </h2>
                            <p className="text-2xl md:text-3xl text-slate-400 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
                                Most travel brands are losing 50% of their inspiration-to-booking pipeline to planning fatigue. Our Travel Performance Audit identifies your &quot;Trust Gaps&quot; and builds a roadmap to a <span className="text-white font-black underline decoration-[#FF6B35]/50">6x ROI</span>.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-16 py-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                                Claim My Travel Growth Audit <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
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
