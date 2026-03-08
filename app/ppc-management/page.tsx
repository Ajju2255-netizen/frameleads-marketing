import Link from 'next/link'
import {
    Target,
    Database,
    CheckCircle2,
    ShieldCheck,
    BarChart3,
    Search,
    Layers,
    Link2,
    DollarSign,
    MousePointer,
    Gauge,
    Globe,
    Cpu,
    Bot,
    Activity,
    ChevronRight,
    Zap,
    Layout,
    PenTool,
    Share2,
    MessageCircle,
    Mail,
    Palette,
    TrendingUp
} from 'lucide-react'

export const metadata = {
    title: 'Omnichannel PPC Management Services | Revenue Orchestration | Frameleads',
    description: 'Enterprise-level PPC management across Search, Social, and Display. We utilize Server-Side Tracking and Value-Based Bidding to maximize MER.',
    keywords: ['PPC Management', 'Omnichannel PPC', 'Multi-channel Advertising', 'Value-Based Bidding', 'Server-Side Tracking', 'MER Optimization'],
    openGraph: {
        title: 'Omnichannel PPC Management Services | Revenue Orchestration | Frameleads',
        description: 'Enterprise-level PPC management across Search, Social, and Display.',
        images: ['/og-ppc-management.png'],
    }
}

// Technical Schema for the PPC Pillar Page
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Omnichannel PPC Management Services",
    "provider": {
        "@type": "Organization",
        "name": "Frameleads",
        "url": "https://frameleads.com/ppc-management"
    },
    "description": "Enterprise-level PPC management across Search, Social, and Display. We utilize Server-Side Tracking and Value-Based Bidding to maximize MER.",
    "areaServed": "Global",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PPC Management Portfolio",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Channel Ad Orchestration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server-Side Conversion Tracking" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Velocity Testing" } }
        ]
    }
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is a 'Good' Marketing Efficiency Ratio (MER)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A healthy MER typically sits between 3.0 and 5.0. It measures your total revenue against your total ad spend across all channels. Frameleads optimizes for Total Profit, not just individual channel ROAS, to ensure sustainable scaling."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle 'Attribution Overlap' between Google and Meta?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use Incrementality Testing. By running 'Hold-out' tests, we determine exactly how much revenue Meta is contributing vs. Google, ensuring you aren't paying twice for the same conversion signal."
            }
        },
        {
            "@type": "Question",
            "name": "How does Server-Side Tracking improve my PPC results?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Server-Side Tracking bypasses browser-based ad blockers and cookie restrictions (like iOS 14+), providing 20-30% more accurate conversion data. This cleaner data allows ad platform algorithms to optimize much faster and more effectively."
            }
        },
        {
            "@type": "Question",
            "name": "What is Predictive Lead Scoring in PPC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Predictive Lead Scoring uses machine learning to analyze user behavior signals in real-time. By identifying which users are most likely to become high-LTV customers, we can adjust bids dynamically to capture those users before your competitors do."
            }
        },
        {
            "@type": "Question",
            "name": "Which channels are included in Omnichannel PPC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our omnichannel framework includes Google Search, YouTube, Meta (Facebook & Instagram), LinkedIn, and Microsoft Ads. We synchronize signals across these platforms to create a unified customer journey."
            }
        }
    ]
}

export default function PpcManagementPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

                {/* Organic Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[100px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#FF6B35] opacity-[0.04] rounded-full blur-[100px]" />
                </div>

                {/* 1. AIO Context Summary */}
                <div className="relative pt-32 px-4 sm:px-6 lg:px-8 z-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF6B35] to-[#FF9055] group transition-all">
                            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/5 rounded-bl-full pointer-events-none" />
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                        <Layers className="w-5 h-5 text-[#FF6B35]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">PPC Ecosystem Overview_</h4>
                                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                            PPC Management in the generative era has evolved from &quot;bid management&quot; to <strong className="text-gray-900">Data Orchestration</strong>. Frameleads utilizes Server-Side Tracking (SST) and Predictive Lead Scoring to synchronize ad spend across Google, Meta, and LinkedIn. Our framework ensures that a conversion signal in one channel informs the bidding intelligence of the entire ecosystem, resulting in a Marketing Efficiency Ratio (MER) improvement of <strong className="text-[#FF6B35]">25-40%</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Hero Section */}
                <header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 z-20">
                    <div className="max-w-5xl mx-auto text-center relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-medium text-sm mb-8 border border-[#FF6B35]/20">
                            <Globe className="w-4 h-4" />
                            <span>Multi-Channel Revenue Architecture</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[1]">
                            Multi-Channel PPC. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">One Unified Revenue Stream.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
                            Stop running isolated ads. Start building a <strong className="text-gray-900 font-bold">Kinetic Funnel</strong>. We synchronize your Search, Social, and Display ads into a single, data-driven engine that tracks the customer journey from the first click to the final wire transfer.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
                                <Zap className="w-5 h-5" />
                                Build My Multi-Channel Roadmap
                            </Link>
                            <Link href="/tools/roi-calculator" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 font-bold tracking-wide rounded-xl border border-gray-200 shadow-sm hover:border-[#FF6B35]/30 hover:scale-105 transition-all duration-300">
                                <BarChart3 className="w-5 h-5 text-[#FF6B35]" />
                                Calculate My Target CPA
                            </Link>
                        </div>
                    </div>
                </header>

                {/* 3. Pillar 1: Algorithmic Guardrails */}
                <section className="relative z-10 py-24 bg-white border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
                                    Beyond the Black Box: How We <span className="text-[#FF6B35]">Outperform Platform AI</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Every ad platform (Google, Meta, LinkedIn) wants you to use their &quot;Auto-Everything&quot; settings. We apply Human-Led Guardrails to prevent wasted spend:
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-all">
                                            <ShieldCheck className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Placement Hygiene</h4>
                                            <p className="text-gray-600">We use global exclusion lists to block your ads from appearing on &quot;junk&quot; mobile apps, MFA (Made-for-Ad) sites, and kids&apos; YouTube channels.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-all">
                                            <Bot className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Negative Audience Shaping</h4>
                                            <p className="text-gray-600">We exclude your current customers from &quot;Awareness&quot; campaigns to save your budget for new acquisitions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-all">
                                            <Activity className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Frequency Cap Intelligence</h4>
                                            <p className="text-gray-600">We ensure your brand stays top-of-mind without causing &quot;Ad Fatigue&quot; or negative brand sentiment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 bg-gradient-to-br from-[#FFF5F0] to-[#FDF8F5] p-8 md:p-12 rounded-[2.5rem] border border-[#FF6B35]/20">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-[#FF6B35]" />
                                        <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Algorithmic_Guardrail_Lock</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                                            <span>Placement Filtration</span>
                                            <span className="text-[#FF6B35]">Active</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] w-full" />
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                                            <span>Frequency Smoothing</span>
                                            <span className="text-[#FF6B35]">Optimized</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FF6B35] w-[92%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pillar 2: Full-Funnel Architecture */}
                <section className="relative z-10 py-24 border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                Mapping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Kinetic Customer Journey</span>
                            </h2>
                            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                                We don&apos;t just &quot;run ads.&quot; We architect touchpoints based on user psychology, ensuring every click leads closer to a conversion.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Demand Gen Phase</h3>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Top-of-Funnel_</p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Using YouTube and Meta Video ads to &quot;problem-aware&quot; audiences. We track View-Through Conversions to measure true impact beyond the click.
                                </p>
                            </div>

                            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Intent Capture Phase</h3>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Middle-of-Funnel_</p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Dominating high-intent search terms on Google and Bing. We use Dynamic Keyword Insertion (DKI) for 1:1 ad relevance and maximum CTR.
                                </p>
                            </div>

                            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Conversion Closing</h3>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Bottom-of-Funnel_</p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Precision retargeting on LinkedIn and Meta with &quot;Social Proof&quot; and &quot;Urgency&quot; triggers to drive the final sale.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pillar 3: Technical Data Sovereignty */}
                <section className="relative z-10 py-24 bg-[#0F172A] text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                                    Technical Data Sovereignty <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">(GA4 & Server-Side)</span>
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                    Traditional pixels are dying. Frameleads implements Server-Side GTM to ensure your data is 100% accurate, private, and future-proof.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <Database className="w-8 h-8 text-[#FF6B35]" />
                                        <div>
                                            <h4 className="font-bold">CAPI Integration</h4>
                                            <p className="text-sm text-gray-400">Direct server-to-server link to Meta&apos;s Conversion API.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <BarChart3 className="w-8 h-8 text-[#FF6B35]" />
                                        <div>
                                            <h4 className="font-bold">Profit-Based Attribution</h4>
                                            <p className="text-sm text-gray-400">Data-Driven Attribution to see which channel actually started the fire.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10">
                                <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <span className="text-slate-900 font-bold">Server-Side Signal Sync</span>
                                    <span className="text-[#10B981] font-mono text-xs font-bold">ENCRYPTED</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-1 bg-white/10 w-full rounded-full">
                                        <div className="h-full bg-[#FF6B35] w-[95%]" />
                                    </div>
                                    <div className="h-1 bg-white/10 w-full rounded-full">
                                        <div className="h-full bg-[#FF9055] w-[80%]" />
                                    </div>
                                    <div className="h-1 bg-white/10 w-full rounded-full">
                                        <div className="h-full bg-[#10B981] w-[60%]" />
                                    </div>
                                </div>
                                <p className="mt-10 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Data Accuracy: 100.00%</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Omnichannel Advantage Table */}
                <section className="relative z-10 py-24 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">The Omnichannel Advantage</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">
                        How we leverage each channel to build your unified revenue engine.
                    </p>

                    <div className="overflow-hidden border border-gray-200 rounded-[2rem] shadow-sm bg-white">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50/80 border-b border-gray-100">
                                        <th className="px-8 py-6 text-sm font-bold text-gray-500 uppercase tracking-widest">PPC Channel</th>
                                        <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Strategic Role</th>
                                        <th className="px-8 py-6 text-sm font-bold text-[#FF6B35] uppercase tracking-widest">Frameleads Advantage</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-all">
                                        <td className="px-8 py-6 text-lg font-bold text-gray-900">Google Ads</td>
                                        <td className="px-8 py-6 text-gray-500">Harvesting Intent</td>
                                        <td className="px-8 py-6 border-l border-gray-50 hover:bg-[#FF6B35]/5 group"><span className="text-[#FF6B35] font-bold">Value-Based Bidding (VBB)</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-all">
                                        <td className="px-8 py-6 text-lg font-bold text-gray-900">Meta (FB/IG)</td>
                                        <td className="px-8 py-6 text-gray-500">Visual Demand Gen</td>
                                        <td className="px-8 py-6 border-l border-gray-50 hover:bg-[#FF6B35]/5 group"><span className="text-[#FF6B35] font-bold">High-Frequency Creative Testing</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-all">
                                        <td className="px-8 py-6 text-lg font-bold text-gray-900">LinkedIn Ads</td>
                                        <td className="px-8 py-6 text-gray-500">B2B Decision Makers</td>
                                        <td className="px-8 py-6 border-l border-gray-50 hover:bg-[#FF6B35]/5 group"><span className="text-[#FF6B35] font-bold">ABM Sync</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-all">
                                        <td className="px-8 py-6 text-lg font-bold text-gray-900">YouTube Ads</td>
                                        <td className="px-8 py-6 text-gray-500">Brand Narrative</td>
                                        <td className="px-8 py-6 border-l border-gray-50 hover:bg-[#FF6B35]/5 group"><span className="text-[#FF6B35] font-bold">View-Through ROI Attribution</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Deep-Dive FAQ */}
                <section id="faq" className="scroll-mt-32 py-24 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">FAQ</h2>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is a &quot;Good&quot; Marketing Efficiency Ratio (MER)?</h3>
                                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                                    A healthy MER typically sits between <strong className="text-gray-900">3.0 and 5.0</strong>. It measures your total revenue against your total ad spend across all channels. Frameleads optimizes for Total Profit, not just individual channel ROAS, to ensure sustainable scaling.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">How does Server-Side Tracking improve my PPC results?</h3>
                                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                                    Server-Side Tracking bypasses browser-based ad blockers and cookie restrictions (like iOS 14+), providing <strong className="text-gray-900">20-30% more accurate conversion data</strong>. This cleaner data allows ad platform algorithms to optimize much faster and more effectively.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is Predictive Lead Scoring in PPC?</h3>
                                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                                    Predictive Lead Scoring uses machine learning to analyze user behavior signals in real-time. By identifying which users are most likely to become <strong className="text-gray-900">high-LTV customers</strong>, we can adjust bids dynamically to capture those users before your competitors do.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">Which channels are included in Omnichannel PPC?</h3>
                                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                                    Our omnichannel framework includes <strong className="text-gray-900">Google Search, YouTube, Meta (Facebook & Instagram), LinkedIn, and Microsoft Ads</strong>. We synchronize signals across these platforms to create a unified customer journey that eliminates data silos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Final Call to Action */}
                <footer className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                    <div className="bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                                Does Your PPC Strategy Have a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">&quot;Single Point of Failure&quot;?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Most brands rely too heavily on one channel. We&apos;ll show you how to diversify your traffic and build a resilient revenue engine.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                                Get My Multi-Channel Blueprint <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </footer>

                {/* Internal Link Silo Section */}
                <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrate Your Growth Channels</h2>
                            <p className="text-gray-600">Explore how our other specialized services feed into your unified revenue stream.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <BarChart3 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
                            </Link>

                            <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Search className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">SEO Dominance</h3>
                                <p className="text-gray-600 text-sm">Search authority framework.</p>
                            </Link>

                            <Link href="/google-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Target className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Google Ads</h3>
                                <p className="text-gray-600 text-sm">Value-Based Bidding & Yield.</p>
                            </Link>

                            <Link href="/content-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <PenTool className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Content Marketing</h3>
                                <p className="text-gray-600 text-sm">Entity-based authority.</p>
                            </Link>

                            <Link href="/Social-media-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Share2 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Social Marketing</h3>
                                <p className="text-gray-600 text-sm">Conversion-first architecture.</p>
                            </Link>

                            <Link href="/whatsapp-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">WhatsApp Marketing</h3>
                                <p className="text-gray-600 text-sm">Conversational ROI.</p>
                            </Link>

                            <Link href="/analytics-and-automations" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Cpu className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Data & Automation</h3>
                                <p className="text-gray-600 text-sm">Unified Data Intelligence.</p>
                            </Link>

                            <Link href="/conversion-rate-optimization" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Zap className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">CRO Optimization</h3>
                                <p className="text-gray-600 text-sm">Behavioral revenue lift.</p>
                            </Link>

                            <Link href="/perforamance-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <TrendingUp className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Performance Marketing</h3>
                                <p className="text-gray-600 text-sm">Real-time revenue convergence.</p>
                            </Link>

                            <Link href="/email-marketing-and-automation-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Mail className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Email Automation</h3>
                                <p className="text-gray-600 text-sm">Lifecycle revenue engine.</p>
                            </Link>

                            <Link href="/branding" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                                <Palette className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Brand Strategy</h3>
                                <p className="text-gray-600 text-sm">Market-Dominant Identity.</p>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
