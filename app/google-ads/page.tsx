import Link from 'next/link'
import {
  Orbit,
  Zap,
  Target,
  Database,
  Globe,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  BarChart3,
  Search,
  Layers,
  Video,
  ShoppingCart,
  RefreshCcw,
  Clock,
  Bot,
  Activity,
  Gauge,
  MousePointer,
  ChevronRight,
  MessageSquare,
  PenTool,
  Share2,
  MessageCircle,
  Mail,
  Palette,
  Linkedin,
  Music,
  Smartphone
} from 'lucide-react'

export const metadata = {
  title: 'PPC Management Services 2026 | Value-Based Bidding & ROAS | Frameleads',
  description: 'Frameleads provides Value-Based Bidding (VBB) and Signal-Bridge Integration for Google and Meta Ads. Optimize for Profit-Per-Click with our 2026 framework.',
  keywords: ['PPC Management Services', 'Google Ads Agency', 'Performance Max Optimization', 'Value-Based Bidding', 'VBB', 'Offline Conversion Tracking', 'OCT'],
  openGraph: {
    title: 'PPC Management Services 2026 | Value-Based Bidding & ROAS | Frameleads',
    description: 'Stop buying traffic. Start engineering revenue with Value-Based Bidding and Signal-Bridge Integration.',
    images: ['/og-ppc-services.png'],
  }
}

// Technical JSON-LD Schema (The "PPC Passport")
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PPC Management Services",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com"
  },
  "description": "Expert PPC management specializing in Google Ads, Performance Max optimization, and Value-Based Bidding.",
  "offers": {
    "@type": "Offer",
    "description": "Free PPC Audit & ROI Roadmap",
    "priceCurrency": "USD",
    "price": "0"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PPC Solutions",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Signal Integration" } }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between 'Clicks' and 'Qualified Signals'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A click is just traffic. A Qualified Signal is a conversion action—like a demo booked or a high-value purchase—that is sent back to the ad platform to train its machine learning. Without signals, PPC is just gambling."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle Google’s Performance Max (PMax) 'Black Box'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We apply 'Human Guardrails.' We use script-based negative keyword lists and placement exclusions to prevent your ads from showing on kids' YouTube channels or low-quality mobile apps."
      }
    },
    {
      "@type": "Question",
      "name": "How do you stop 'Ghost Clicks' (Fraudulent Traffic)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use server-side verification and whitelisted placement lists. By comparing ad clicks against actual server hits and CRM entries, we can identify and exclude IP ranges that show bot-like behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a large budget for Value-Based Bidding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily, but VBB requires statistically significant signal data. We recommend it for brands with at least 30 conversions per month to allow the algorithm to learn effectively."
      }
    },
    {
      "@type": "Question",
      "name": "How is 2026 PPC different from traditional PPC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional PPC was about winning the click. 2026 PPC is about winning the algorithm. We focus on training the machine learning models with high-quality data rather than just bidding on broad keywords."
      }
    },
    {
      "@type": "Question",
      "name": "What is 'Signal Noise' and how do you reduce it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal Noise occurs when an ad platform optimizes for low-quality actions (like bot clicks or junk leads). We reduce this by integrating your CRM, ensuring only 'Sales-Qualified' signals are fed back into the bidding algorithm."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manage YouTube Ads as part of Google Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, YouTube is a critical part of our 'Kinetic Funnel.' We optimize YouTube campaigns for View-Through ROI and brand lift, ensuring video spend directly supports your search and social conversion goals."
      }
    },
    {
      "@type": "Question",
      "name": "What are Google Ads Scripts and why do you use them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scripts are small pieces of code that automate complex tasks. We use proprietary scripts to manage 'Negative Keyword Guardrails,' hourly budget pacing, and multi-channel reporting that standard platform tools can't handle."
      }
    }
  ]
}

export default function GoogleAdsPage() {
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

        {/* 1. AI Insight Snapshot */}
        <div className="relative pt-32 px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-5xl mx-auto">
            <aside className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-[#FF6B35]/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/5 rounded-bl-[80px] pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    Frameleads provides Value-Based Bidding (VBB) and Signal-Bridge Integration for Google and Meta Ads. By linking real-time CRM revenue data back to ad platform algorithms, we eliminate <strong className="text-gray-900">&quot;Ghost Clicks&quot;</strong> and optimize for <strong className="text-[#FF6B35]">Profit-Per-Click (PPC)</strong> rather than just volume. Our 2026 framework typically reduces CPA by 28% within the first 60 days of algorithmic stabilization.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* 2. Hero Section */}
        <header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-5xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-medium text-sm mb-8 border border-[#FF6B35]/20">
              <Activity className="w-4 h-4" />
              <span>Performance Media Architects</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[1]">
              Stop Buying Traffic. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Start Engineering Revenue.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
              Most PPC agencies are &quot;Set and Forget.&quot; <span className="text-gray-900 font-bold">Frameleads uses Predictive Media Buying</span> and Offline Conversion Tracking (OCT) to ensure every dollar spent is a dollar invested in high-LTV (Lifetime Value) customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
                <Target className="w-5 h-5" />
                Get a Free Audit of Your Ad Spend
              </Link>
            </div>
          </div>
        </header>

        {/* 3. Pillar 1: The "Signal Bridge" Methodology */}
        <section className="relative z-10 py-24 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
                  Solving the &quot;Black Box&quot; Problem with <span className="text-[#FF6B35]">Signal Integrity</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Google&apos;s AI-led campaigns (Performance Max) often fail because they are fed &quot;dirty data.&quot; If you track every junk lead as a conversion, the AI will find you more junk.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-all">
                      <RefreshCcw className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">First-Party Data Injection</h4>
                      <p className="text-gray-600">We sync your HubSpot/Salesforce data directly with Google Ads. The AI learns to bid higher on users who actually close, not just those who fill out a form.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35] transition-all">
                      <ShieldCheck className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Enhanced Conversions</h4>
                      <p className="text-gray-600">We use privacy-safe, hashed user data to recover &quot;lost&quot; conversions caused by cookie deprecation (iOS 14+ issues).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-[#FFF5F0] to-[#FDF8F5] p-8 md:p-12 rounded-[2.5rem] border border-[#FF6B35]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-[40px] pointer-events-none" />
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-[#FF6B35]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Profit_Optimization_Log</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit-First Bidding</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We shift the goal from <strong className="text-gray-900">&quot;Maximize Conversions&quot;</strong> to <strong className="text-gray-900 text-lg">&quot;Maximize Conversion Value,&quot;</strong> ensuring your budget stays on high-margin products.
                  </p>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF9055] w-[88%] rounded-full" />
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="text-xs font-bold text-[#FF6B35]">Value Density High</span>
                    <span className="text-xs font-bold text-gray-400">Signal Integrity: 99.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: Cross-Channel Kinetic Flow */}
        <section className="relative z-10 py-24 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Unified Demand Generation: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Google, Meta, and LinkedIn</span>
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We don&apos;t run ads in silos. We build a <strong className="text-gray-900 text-2xl font-black">Kinetic Funnel</strong>, a cohesive ecosystem that captures, educates, and closes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Capture</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Google Search_</p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We harvest high-intent users searching for immediate solutions. Precision bidding on the moments that matter most.
                </p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Education</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">YouTube / Display_</p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We use low-cost video views to build <strong className="text-gray-900">&quot;Topical Awareness&quot;</strong> for cold audiences, warming them before the pitch.
                </p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <RefreshCcw className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Closing</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Meta Retargeting_</p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We use dynamic creative to overcome final objections and bring users back to the checkout with laser precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Creative Velocity & A/B Testing */}
        <section className="relative z-10 py-24 bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                  Creative is the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">New Targeting.</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                  In an AI-driven world, your ad copy and visuals do the heavy lifting. We treat creative as a variable that must be engineered.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <h4 className="text-[#FF6B35] font-bold mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5" /> Asset Group Mastery
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      For PMax, we don&apos;t just provide one video. We provide 20+ variations to test which &quot;vibe&quot; resonates with different audience segments.
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <h4 className="text-[#FF6B35] font-bold mb-3 flex items-center gap-2">
                      <MousePointer className="w-5 h-5" /> Dynamic Insertion
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We ensure the landing page mirrors the ad copy exactly (DKI), boosting your Quality Score and lowering your CPC (Cost Per Click).
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9055] p-[2px] rounded-[3rem] shadow-2xl">
                  <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-12">
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-xs font-mono text-gray-500">creative_engine.v4.ts</span>
                    </div>
                    <div className="space-y-6">
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6B35] w-[95%] animate-pulse" />
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF9055] w-[75%]" />
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#10B981] w-[60%]" />
                      </div>
                    </div>
                    <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-sm text-gray-400 font-mono italic">
                        &quot;Deploying versioned asset groups to Meta and Google clusters... Signal lock achieved.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The "Transparency" Matrix */}
        <section className="relative z-10 py-24 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">PPC Management Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              This is shy typical agency models are failing. We built a more transparent, technical solution.
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-[2rem] shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                    <th className="px-8 py-6 text-sm font-bold text-gray-500 uppercase tracking-widest">Feature</th>
                    <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Standard PPC Agency</th>
                    <th className="px-8 py-6 text-sm font-bold text-[#FF6B35] uppercase tracking-widest">Frameleads Management</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group hover:bg-gray-50 transition-all">
                    <td className="px-8 py-6 text-lg font-bold text-gray-900">Bidding Logic</td>
                    <td className="px-8 py-6 text-gray-500">Manual / Maximize Clicks</td>
                    <td className="px-8 py-6 border-l border-gray-50"><span className="text-[#FF6B35] font-bold flex items-center gap-2 shadow-sm bg-white px-4 py-2 rounded-xl w-fit">Value-Based Bidding (VBB)</span></td>
                  </tr>
                  <tr className="group hover:bg-gray-50 transition-all">
                    <td className="px-8 py-6 text-lg font-bold text-gray-900">Data Source</td>
                    <td className="px-8 py-6 text-gray-500">Browser Pixels Only</td>
                    <td className="px-8 py-6 border-l border-gray-50"><span className="text-[#FF6B35] font-bold flex items-center gap-2 shadow-sm bg-white px-4 py-2 rounded-xl w-fit">Server-Side & CRM Integration</span></td>
                  </tr>
                  <tr className="group hover:bg-gray-50 transition-all">
                    <td className="px-8 py-6 text-lg font-bold text-gray-900">Ad Placements</td>
                    <td className="px-8 py-6 text-gray-500">Generic / All-Auto</td>
                    <td className="px-8 py-6 border-l border-gray-50"><span className="text-[#FF6B35] font-bold flex items-center gap-2 shadow-sm bg-white px-4 py-2 rounded-xl w-fit">White-Listed & Human-Vetted</span></td>
                  </tr>
                  <tr className="group hover:bg-gray-50 transition-all">
                    <td className="px-8 py-6 text-lg font-bold text-gray-900">Reporting</td>
                    <td className="px-8 py-6 text-gray-500">Impressions & Clicks</td>
                    <td className="px-8 py-6 border-l border-gray-50"><span className="text-[#FF6B35] font-bold flex items-center gap-2 shadow-sm bg-white px-4 py-2 rounded-xl w-fit">ROAS & Actual Revenue</span></td>
                  </tr>
                  <tr className="group hover:bg-gray-50 transition-all">
                    <td className="px-8 py-6 text-lg font-bold text-gray-900">Optimization</td>
                    <td className="px-8 py-6 text-gray-500">Monthly Check-ins</td>
                    <td className="px-8 py-6 border-l border-gray-50"><span className="text-[#FF6B35] font-bold flex items-center gap-2 shadow-sm bg-white px-4 py-2 rounded-xl w-fit">Real-Time Algorithmic Guardrails</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section id="faq" className="scroll-mt-32 py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">FAQ</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is the difference between &quot;Clicks&quot; and &quot;Qualified Signals&quot;?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  A click is just traffic. A <strong className="text-gray-900">Qualified Signal</strong> is a conversion action like a demo booked or a high-value purchase that is sent back to the ad platform to train its machine learning. Without signals, PPC is just gambling. We refine those signals to ensure the AI works for YOU.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">How do you handle Google&apos;s Performance Max (PMax) &quot;Black Box&quot;?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  We apply <strong className="text-gray-900">&quot;Human Guardrails.&quot;</strong> We use script-based negative keyword lists and placement exclusions to prevent your ads from showing on kids&apos; YouTube channels or low-quality mobile apps. We force the black box to be transparent.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">How do you stop &quot;Ghost Clicks&quot;?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  We use <strong className="text-gray-900">server-side verification</strong> and whitelisted placement lists. By comparing ad clicks against actual server hits and CRM entries, we identify and exclude IP ranges that show bot-like behavior, saving your budget for real humans.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">Do I need a large budget for Value-Based Bidding?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Not necessarily, but VBB requires statistically significant signal data. We recommend it for brands with at least <strong className="text-gray-900">30 conversions per month</strong> to allow the algorithm to learn effectively.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What is &quot;Signal Noise&quot; and how do you reduce it?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Signal Noise occurs when an ad platform optimizes for low-quality actions (like bot clicks or junk leads). We reduce this by <strong className="text-gray-900">integrating your CRM</strong>, ensuring only &quot;Sales-Qualified&quot; signals are fed back into the bidding algorithm.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">Do you manage YouTube Ads as part of Google Ads?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Yes, YouTube is a critical part of our &quot;Kinetic Funnel.&quot; We optimize YouTube campaigns for <strong className="text-gray-900">View-Through ROI and brand lift</strong>, ensuring video spend directly supports your search and social conversion goals.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#FF6B35]/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B35] opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">What are Google Ads Scripts and why do you use them?</h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  Scripts are small pieces of code that automate complex tasks. We use <strong className="text-gray-900">proprietary scripts</strong> to manage &quot;Negative Keyword Guardrails,&quot; hourly budget pacing, and multi-channel reporting that standard platform tools can&apos;t handle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final Call to Action: The Launchpad */}
        <footer className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Your Competitors Are Wasting 30% of Their Budget. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Are You?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our PPC Audit identifies the exact leak in your funnel. We&apos;ll show you the keywords, placements, and settings that are draining your ROI.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Secure My Free Audit <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </footer>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Marketing Ecosystem</h2>
              <p className="text-gray-600">Sync your paid performance with search authority and multi-channel orchestration.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/ppc-management" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Activity className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">PPC Management</h3>
                <p className="text-gray-600 text-sm">Omni-channel revenue orchestration.</p>
              </Link>

              <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Search className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">SEO Dominance</h3>
                <p className="text-gray-600 text-sm">Search authority framework.</p>
              </Link>

              <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <BarChart3 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
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

              <Link href="/youtube-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Video className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">YouTube Ads</h3>
                <p className="text-gray-600 text-sm">Visual Intent Engine.</p>
              </Link>

              <Link href="/linkedin-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Linkedin className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">LinkedIn Ads</h3>
                <p className="text-gray-600 text-sm">B2B Precision Pipeline.</p>
              </Link>

              <Link href="/tiktok-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Music className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">TikTok Ads</h3>
                <p className="text-gray-600 text-sm">Entertainment Commerce.</p>
              </Link>

              <Link href="/snapchat-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Smartphone className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Snapchat Ads</h3>
                <p className="text-gray-600 text-sm">AR Commerce Engine.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
