'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    ChevronRight,
    Utensils,
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
    Smartphone,
    MousePointer2,
    Gauge,
    ShieldCheck,
    MapPin,
    CreditCard,
    Key,
    RotateCcw,
    Brain,
    Coffee,
    ShoppingBag,
    Pizza,
    ChefHat,
    SmartphoneNfc,
    Flame
} from 'lucide-react'

// JSON-LD Structured Data for F&B Services
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Frameleads F&B Growth Hub",
    "url": "https://frameleads.com/food-beverage-marketing",
    "description": "High-velocity food and beverage marketing specializing in Instagram Shop, DTC scaling, and hyper-local SEO.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
    },
    "knowsAbout": ["DTC Food Scaling", "CPG Content Strategy", "Local Delivery SEO", "Instagram Commerce"]
}

export default function FoodBeverageMarketingPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const faqs = [
        {
            question: "Is Instagram Shop better than my website for a new beverage brand?",
            answer: "In 2026, Instagram Shop is superior for Initial Discovery and impulse buys, but your Website is where you build Long-Term Retention and subscriptions. Frameleads recommends a \"Gateway\" strategy: use Instagram Shop to acquire the customer and a QR-code/Post-purchase insert to move them to your website for subscriptions."
        },
        {
            question: "How do I lower my CAC (Customer Acquisition Cost) in the crowded snack category?",
            answer: "Move toward \"Ingredient-First Search.\" Buyers are searching for \"adaptogens,\" \"monk fruit,\" or \"cold-pressed.\" By optimizing your technical metadata for these specific attributes rather than just \"healthy snack,\" you capture high-intent buyers at a lower cost."
        },
        {
            question: "How does Menu-Item Schema impact my restaurant's SEO?",
            answer: "By hardcoding your ingredients, nutritional data, and pricing into your site's code, you allow AI Search Engines (like Perplexity or Google AIO) to provide direct answers. This means your dish becomes the top answer for 'Best gluten-free pizza near me' instead of just a general link."
        },
        {
            question: "What is the benefit of S-SEO (Social SEO) for food brands?",
            answer: "In 2026, food discovery happens on social platforms before it hits Google. S-SEO ensures your visual content is indexed and recommended by the Instagram algorithms when users search for food inspiration, creating a massive 'Discovery Bias' for your brand."
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

                {/* 1. Taste Intelligence Snapshot */}
                <section className="relative pt-32 pb-16 px-4">
                    <div className="max-w-5xl mx-auto relative text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.15)] relative overflow-hidden group"
                        >
                            {/* Menu Design Elements */}
                            <div className="absolute top-0 right-0 p-12 opacity-5 font-serif text-8xl text-[#FF6B35] pointer-events-none">Menu</div>

                            <div className="bg-[#0F172A] px-10 py-5 flex items-center justify-between relative z-10 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">Dash_v3.4 // TASTE_INTELLIGENCE</div>
                                <div className="flex gap-4 text-slate-300 font-mono text-[10px]">
                                    <Activity className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                                    <span className="text-[#FF6B35] font-bold">LIVE_REVENUE_SYNC</span>
                                </div>
                            </div>

                            <div className="p-10 md:p-16 relative z-10 text-left">
                                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-4 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                                                <Utensils className="w-8 h-8 text-[#FF6B35]" />
                                            </div>
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Frameleads Flavor Hub</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8 leading-[1.1] tracking-tighter">
                                            Food & Beverage Strategy Summary
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                            Frameleads engineers <span className="text-[#0F172A] font-bold">High-Velocity Flavor Ecosystems</span> by aligning Visual Storytelling with Hyper-Local Intent. We move beyond generic food photography to <span className="text-[#FF6B35] italic font-bold underline decoration-[#FF6B35]/30">Conversion-First Content Engines</span>. Our 2026 framework utilizes Menu-Item Schema and Instant-Checkout Integration, resulting in an average <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded font-black italic">35% increase in &quot;Direct-to-Kitchen&quot; orders</span> and a 4x improvement in New-Customer Acquisition for CPG brands.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-white transition-all duration-500">
                                            <div className="text-[10px] text-slate-400 font-black uppercase mb-2 tracking-widest text-center">ORDER_VELOCITY</div>
                                            <div className="text-[#FF6B35] text-5xl font-black text-center flex items-center justify-center gap-2 tracking-tighter">
                                                +35%
                                            </div>
                                            <div className="mt-2 text-[10px] text-center text-slate-400 font-bold tracking-widest">KITCHEN_INTENT_MATCH</div>
                                        </div>
                                        <div className="p-8 bg-[#0F172A] rounded-[2.5rem] border border-white/5 flex flex-col justify-center shadow-2xl">
                                            <div className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest text-center">MER_COEFFICIENT</div>
                                            <div className="text-white text-4xl font-black text-center flex items-center justify-center gap-3">
                                                <TrendingUp className="w-8 h-8 text-[#FF6B35]" />
                                                4.0x
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Digital Menu Visual Decorations */}
                            <div className="flex justify-around p-8 bg-slate-50/50 border-t border-slate-100">
                                {['Menu_Schema: OK', 'Checkout_Express: ON', 'Local_SEO: #1', 'Instagram_Shop: SYNCED'].map((item, i) => (
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
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-[100px] -ml-72 -mb-72" />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-6 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-black rounded-full mb-8 uppercase tracking-[0.2em]">
                                FROM EYE TO APPETITE: THE FUTURE OF FLAVOR COMMERCE
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black text-[#0F172A] leading-[0.85] tracking-tighter mb-10">
                                Don&apos;t Just Build a Brand. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] underline decoration-[#FF6B35]/20">Start a Craving.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
                                In 2026, the consumer&apos;s journey from &quot;hungry&quot; to &quot;ordered&quot; is less than 60 seconds. Frameleads builds <strong className="text-slate-900">Performance-First Food Platforms</strong> that dominate the digital storefront. From CPG Scaling on TikTok Shop to Local Search SEO for Multi-Unit Chains.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-[#0F172A] text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:scale-105 transition-all duration-300 group">
                                    Audit My Brand&apos;s Appetite Potential <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Pillar 1: Dominating the "What Should I Eat?" Search */}
                <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#FF6B35] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Dominating the <br />
                                    <span className="text-[#FF6B35]">&quot;What Should I Eat?&quot;</span> Search
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    In 2026, food discovery happens on Instagram and YouTube Search before it hits Google. We build your Visual Authority by capturing sensory-intent:
                                </p>

                                <div className="space-y-12">
                                    {[
                                        { title: "Sensory-Rich Video Hooks", desc: "Engineering 'Lo-Fi' but high-impact content focused on texture, sound (ASMR), and 'the pour,' designed to trigger brain hunger signals in 1.5s.", icon: Video },
                                        { title: "Menu-Item Schema & Snippets", desc: "Hardcoding ingredients, nutritional data, and pricing into your site, allowing Google (AIO) to provide direct-answer recommendations.", icon: Database },
                                        { title: "UGC Creator Networks", desc: "Managing a 'Constant-Feed' of authentic reviews and recipe-hacks that build social proof and move your brand into the discovery tier.", icon: Users }
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
                                    {/* Instagram Search Visual Mockup */}
                                    <div className="bg-slate-900 rounded-[4rem] p-10 overflow-hidden relative min-h-[500px] flex flex-col">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <Search className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="h-10 flex-1 bg-white/10 rounded-full px-6 flex items-center text-slate-400 text-sm font-medium">
                                                High protein snacks...
                                            </div>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl relative group-hover:border-[#FF6B35]/50 transition-all duration-500">
                                                <div className="flex gap-4 items-center mb-6">
                                                    <div className="w-10 h-10 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">IG</div>
                                                    <div>
                                                        <div className="text-white font-bold text-sm">Instagram Search Engine</div>
                                                        <div className="text-[#FF6B35] text-[10px] font-mono font-black uppercase tracking-widest">Visual_Authority: Ranked #1</div>
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-black/40 rounded-2xl mb-4 border border-white/5">
                                                    <div className="text-slate-400 text-[10px] font-mono mb-2 uppercase tracking-widest leading-none">Contextual_Match: High</div>
                                                    <div className="text-white text-lg font-black leading-tight">Your Signature Dish</div>
                                                    <div className="mt-2 flex gap-2">
                                                        <div className="w-full h-1 bg-[#FF6B35] rounded-full" />
                                                        <div className="w-1/2 h-1 bg-white/10 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center px-2">
                                                    <div className="flex gap-4">
                                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                                    </div>
                                                    <div className="text-[10px] text-slate-500 font-mono">2026_INDEXED</div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="aspect-square bg-[#FF6B35]/20 rounded-3xl border border-[#FF6B35]/30 flex flex-col items-center justify-center gap-3 group/item">
                                                    <Flame className="w-8 h-8 text-[#FF6B35] group-hover/item:scale-125 transition-transform" />
                                                    <span className="text-[8px] font-black text-white/50 tracking-widest">SENSORY_HOOK_01</span>
                                                </div>
                                                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-3">
                                                    <Coffee className="w-8 h-8 text-slate-500" />
                                                    <span className="text-[8px] font-black text-white/50 tracking-widest">SENSORY_HOOK_02</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: Solving the "Click-to-Table" Conversion Gap */}
                <section className="relative py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="w-32 h-2 bg-[#0F172A] mb-12 rounded-full" />
                                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[0.9] tracking-tighter mb-10">
                                    Solving the <br />
                                    <span className="text-[#0F172A]/80">&quot;Click-to-Table&quot;</span> Conversion Gap
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                    E-commerce for food is about speed and recurring revenue. We build frictionless DTC storefronts that prioritize immediate action:
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "Instagram Shop & Social Commerce", desc: "Integrating products directly into social feeds with native checkout, bypassing the 30% drop-off rate of external browsers.", icon: ShoppingBag },
                                        { title: "Predictive Subscription Loops", desc: "Utilizing AI to analyze consumption habits and triggering SMS/Email refills exactly when the customer is running low.", icon: RotateCcw },
                                        { title: "Optimized 'Quick-Cart' UX", desc: "Designing mobile-first landing pages that allow for '1-Click Add-to-Cart' and bundle-builders to increase AOV by 20%.", icon: SmartphoneNfc }
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
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                    {/* Instagram Checkout Visual Mockup */}
                                    <div className="bg-white rounded-[4rem] p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative z-10 border border-slate-100 transform group-hover:-translate-y-2 transition-transform duration-700">
                                        <div className="flex justify-between items-center mb-12">
                                            <div className="flex gap-4 items-center">
                                                <div className="p-4 bg-gradient-to-tr from-[#833AB4] to-[#E1306C] text-white rounded-[1.5rem] shadow-lg">
                                                    <ShoppingBag className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="font-black text-[#0F172A] text-xl uppercase tracking-tighter leading-none">IG_Checkout</div>
                                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">NATIVE_BRIDGE_v4</div>
                                                </div>
                                            </div>
                                            <div className="text-[#25D366] flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                                                <span className="text-[10px] font-mono font-black uppercase tracking-widest">SECURE</span>
                                            </div>
                                        </div>

                                        <div className="space-y-10">
                                            <div className="flex items-center gap-6">
                                                <div className="w-24 h-24 bg-slate-100 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center">
                                                    <Pizza className="w-10 h-10 text-slate-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-slate-900 font-black text-xl mb-1">Artisan Flavor Bundle</div>
                                                    <div className="text-slate-400 text-xs font-medium">Quantity: 1 Case (12 Units)</div>
                                                    <div className="mt-2 text-[#FF6B35] font-black italic tracking-tighter px-3 py-1 bg-[#FF6B35]/5 rounded-lg w-fit text-sm">₹2,499.00</div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <span>Subtotal</span>
                                                    <span>₹2,499.00</span>
                                                </div>
                                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    <span>Shipping</span>
                                                    <span className="text-[#25D366]">FREE</span>
                                                </div>
                                                <div className="h-px bg-slate-100" />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xl font-black text-[#0F172A]">Total</span>
                                                    <span className="text-2xl font-black text-[#FF6B35] tracking-tighter">₹2,499.00</span>
                                                </div>
                                            </div>

                                            <button className="w-full py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white rounded-3xl font-black text-lg shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                                                Pay Now <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Decoration */}
                                    <div className="absolute bottom-10 left-10 p-4 opacity-5 bg-slate-900 rounded-full">
                                        <SmartphoneNfc className="w-20 h-20 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Winning the "Near Me" War for Restaurants & Dark Kitchens */}
                <section className="relative py-32 bg-[#0F172A] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-8xl font-black mb-10 tracking-[ -0.05em] leading-[0.9]">
                                Winning the <br />
                                <span className="text-[#FF6B35]">&quot;Near Me&quot; War.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                                For physical locations and delivery-only brands, Proximity is Performance. Frameleads ensures your kitchen stays at the top of every localized search.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "GMB (My Business) Mastery", desc: "Dominating the 'Map Pack' by syncing live menu updates and 'Order Now' buttons directly into the search results.", icon: MapPin },
                                { title: "Local Landing Pages", desc: "Creating high-intent, SEO-rich pages for every delivery zone, targeting 'Best [Cuisine] in [Area]' queries.", icon: Globe },
                                { title: "Delivery-Platform Synergy", desc: "Optimizing presence on Swiggy, Zomato, or UberEats to ensures your brand appears at the top of recommended lists.", icon: Layers }
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
                        <Utensils className="w-[800px] h-[800px] text-[#FF6B35]" />
                    </div>
                </section>

                {/* 6. The "F&B Marketing" Matrix */}
                <section className="relative py-40 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-24 text-slate-800">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.3em]">
                                Performance Comparison Matrix
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">General Agency vs. <br /><span className="text-[#FF6B35]">Food Specialist.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies often leave a bad taste after scaling.</p>
                        </div>

                        <div className="overflow-x-auto rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(15,23,42,0.1)] border border-slate-100 relative bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">Feature</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-slate-400">General Marketing Agency</th>
                                        <th className="px-12 py-10 text-xs font-black uppercase tracking-widest text-[#FF6B35] bg-[#FF6B35]/5">Frameleads Flavor Hub</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Primary KPI", basic: "Clicks / Leads", advanced: "Direct Sales / ROAS / LTV" },
                                        { feat: "Creative Focus", basic: "Static Imagery", advanced: "High-Sensory Video (ASMR/UGC)" },
                                        { feat: "Search Logic", basic: "Broad Keyword SEO", advanced: "S-SEO (Instagram) & Local Intent" },
                                        { feat: "Tech Integration", basic: "Standard Website", advanced: "Shopify / Delivery App / Native Shop" },
                                        { feat: "Data Strategy", basic: "Top-of-Funnel", advanced: "Predictive Subscription / Retention" }
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
                            <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] tracking-tighter mb-8 leading-none">Flavor Intelligence <br /><span className="text-[#FF6B35]">FAQ.</span></h2>
                            <p className="text-2xl text-slate-500 font-medium italic">High-sensory answers for CPG and Restaurant leaders.</p>
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

                {/* 8. Final Call to Action: The Appetite Audit */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <div className="bg-[#0F172A] rounded-[5rem] overflow-hidden relative shadow-2xl p-16 md:p-32 text-center border border-white/5">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35] opacity-10 rounded-full blur-[150px] -mr-60 -mt-60 animate-pulse" />

                        <div className="relative z-10">
                            <div className="flex justify-center mb-10">
                                <div className="p-6 bg-white shadow-2xl rounded-[2rem] border-2 border-[#FF6B35]/20 animate-bounce">
                                    <Utensils className="w-12 h-12 text-[#FF6B35]" />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-[ -0.05em]">
                                Is Your Brand Missing the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Digital Dinner Table?</span>
                            </h2>
                            <p className="text-2xl md:text-3xl text-slate-400 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
                                Most food brands are losing 40% of their conversion potential to slow-loading sites and boring content. Our F&B Performance Audit identifies your &quot;Sensory Gaps,&quot; verifies your social-commerce readiness, and builds a roadmap to a <span className="text-white font-black underline decoration-[#FF6B35]/50">5x ROAS</span>.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-6 px-16 py-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white font-black text-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 group">
                                Claim My Appetite Audit <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
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
