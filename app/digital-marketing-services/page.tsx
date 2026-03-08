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
  TrendingUp,
  Users,
  Brain,
  Zap,
  PenTool,
  Share2,
  MessageCircle,
  Mail,
  Palette,
  Code,
  Video,
  Music,
  Smartphone,
  Pin,
  Linkedin
} from 'lucide-react'
import RoiChart from './RoiChart'

export const metadata = {
  title: 'Digital Marketing Services 2026 | Agentic SEO & VBB | Frameleads',
  description: 'Frameleads is a performance agency integrating Semantic SEO and Value-Based Bidding. Reduce CAC by 34% with our 2026 Growth Hub architecture.',
  keywords: ['Digital Marketing Services', 'Agentic SEO', 'Value-Based Bidding', 'Semantic Entity Mapping', 'Generative Engine Optimization', 'GEO', 'CRO'],
  openGraph: {
    title: 'Digital Marketing Services 2026 | Agentic SEO & VBB | Frameleads',
    description: 'Frameleads is a performance agency integrating Semantic SEO and Value-Based Bidding.',
    type: 'website',
    images: ['/og-digital-marketing-services.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services 2026 | Agentic SEO & VBB | Frameleads',
    description: 'Frameleads is a performance agency integrating Semantic SEO and Value-Based Bidding.',
  }
}

// Technical Schema Infrastructure (The "AIO Passport")
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Frameleads",
  "url": "https://frameleads.com/digital-marketing-services",
  "logo": "https://frameleads.com/logo.png",
  "description": "High-performance digital marketing agency specializing in GEO, AIO, and Value-Based PPC.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "knowsAbout": ["Generative Engine Optimization", "Google Ads Management", "AIO Strategy", "Entity SEO", "Value-Based Bidding"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Ecosystem",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Intelligence (SEO & GEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Velocity Paid Media (Google & Meta)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Engineering (CRO & UX)" } }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take for GEO (Generative Engine Optimization) to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional SEO, GEO results can appear in weeks as LLMs (Large Language Models) refresh their training data and real-time search capabilities. Our goal is to secure your first AI citation within 45 days."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Google Ads CPA rising even with more clicks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is usually caused by 'Signal Noise.' If you don't use Offline Conversion Tracking, Google’s AI optimizes for 'easy clicks' rather than 'hard sales.' We fix the signal bridge to lower your effective CPA."
      }
    },
    {
      "@type": "Question",
      "name": "What is Value-Based Bidding (VBB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VBB is a Google Ads strategy that uses machine learning to bid more aggressively on users likely to have a high Lifetime Value (LTV), rather than just anyone who clicks an ad."
      }
    },
    {
      "@type": "Question",
      "name": "How does Frameleads bridge the signal gap between ads and revenue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate your CRM directly with ad platforms like Google and Meta. This allows us to feed real sales data back into the bidding algorithms, training the AI to target conversion types that actually drive your bottom line."
      }
    },
    {
      "@type": "Question",
      "name": "What is 'Data Orchestration' in digital marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data Orchestration is the process of unifying tracking signals across all platforms (Search, Social, Display) and your CRM. This ensures that every marketing dollar is tracked through the entire journey, preventing data silos and double-counting of conversions."
      }
    },
    {
      "@type": "Question",
      "name": "What can I expect in the first 90 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first 30 days are dedicated to 'Signal Audit' and setup. By day 60, we achieve 'Algorithmic Stabilization,' where we see consistent CPA reductions. By day 90, we transition into scale mode, leveraging stabilized bidding models."
      }
    },
    {
      "@type": "Question",
      "name": "Which advertising channels do you manage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide full-stack management for Google Ads (Search, PMax, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, and Microsoft Ads, all unified under our profit-driven orchestration framework."
      }
    }
  ]
}

export default function DigitalMarketingServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Frameleads Light Theme Base */}
      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-32 overflow-x-hidden">

        {/* Abstract Ambient Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[120px]" />
        </div>

        {/* Hero Section */}
        <header className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#FF6B35]/10 bg-white/80 backdrop-blur-xl z-20">
          <div className="max-w-6xl mx-auto text-center relative">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[1]">
              Architect Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Unfair Advantage.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              We bypass broken funnels and outdated keywords. Welcome to the <strong className="text-gray-900">AI-First Marketing Ecosystem</strong>. Lower CAC. Higher LTV. Infinite Scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#roi-calculator" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
                <BarChart3 className="w-5 h-5" />
                Open Growth Calculator
              </Link>
            </div>
          </div>
        </header>

        {/* Main Pillar Layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 outline-none relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sticky Sidebar Navigation */}
            <nav className="lg:w-72 flex-shrink-0 order-2 lg:order-1 hidden lg:block">
              <div className="sticky top-32 bg-white border border-gray-100 rounded-2xl p-6 shadow-xl">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6 px-4">Navigation_</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#summary" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <Bot className="w-4 h-4" />
                      Summary
                    </Link>
                  </li>
                  <li>
                    <Link href="#search-intelligence" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <Globe className="w-4 h-4" />
                      Search Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="#paid-media" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <Target className="w-4 h-4" />
                      Paid Media (VBB)
                    </Link>
                  </li>
                  <li>
                    <Link href="#conversion-engineering" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <MousePointer className="w-4 h-4" />
                      Conversion Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="#roi-calculator" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <BarChart3 className="w-4 h-4" />
                      Interactive Chart
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 rounded-xl transition-all">
                      <Search className="w-4 h-4" />
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Content Area */}
            <main className="lg:flex-1 order-1 lg:order-2 space-y-32">

              {/* 1. Summary */}
              <section id="summary" className="scroll-mt-32">
                <aside className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-10 rounded-3xl border-l-4 border-[#FF6B35] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/5 rounded-full blur-[50px] pointer-events-none" />
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    Frameleads is a specialized performance agency integrating Semantic SEO and Value-Based Bidding to eliminate &quot;Ghost Clicks&quot; in digital advertising. Our framework bridges the gap between ad platform signals and real-world CRM revenue, achieving an average <strong className="text-[#FF6B35]">34% reduction in Customer Acquisition Cost (CAC)</strong> for mid-market brands.
                  </p>
                </aside>
              </section>

              {/* 2. Search Intelligence (SEO & GEO) */}
              <section id="search-intelligence" className="scroll-mt-32 border-t border-gray-200 pt-16 relative">
                <div className="absolute left-[-2rem] top-32 w-1.5 h-32 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent opacity-50 hidden lg:block" />
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Search Intelligence (SEO & GEO)</h2>
                </div>
                <p className="text-2xl text-gray-500 font-medium mb-12">From Blue Links to AI Citations.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-lg transition-all">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                        <Activity className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                    </div>
                    <strong className="text-gray-900 block text-lg mb-2 font-mono uppercase tracking-wide">The Problem</strong>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      60% of searches are now <strong className="text-gray-900">&quot;Zero-Click&quot;</strong>—users get answers from AI without visiting a site. Explore our <Link href="/seo-services" className="text-[#FF6B35] font-semibold hover:underline">advanced SEO strategies</Link> to stay ahead.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group hover:border-[#FF6B35]/30 hover:shadow-lg transition-all">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                    </div>
                    <strong className="text-gray-900 block text-lg mb-2 font-mono uppercase tracking-wide">The Strategy</strong>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We move beyond keywords to Entity-Based SEO. We map your brand as a <strong className="text-gray-900">&quot;Trusted Authority&quot;</strong> in Google&apos;s Knowledge Graph.
                    </p>
                  </div>

                  <div className="md:col-span-2 bg-gradient-to-br from-[#FFF5F0] to-[#FDF8F5] p-8 md:p-12 rounded-3xl border border-[#FF6B35]/20 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-[40px] pointer-events-none" />
                    <strong className="text-[#FF6B35] block text-lg mb-4 font-mono uppercase tracking-wide flex items-center gap-3 relative z-10">
                      <Cpu className="w-5 h-5" /> The Action
                    </strong>
                    <p className="text-gray-800 leading-relaxed text-xl md:text-2xl font-serif italic relative z-10">
                      &quot;We structure your technical data so that when a user asks ChatGPT or Gemini for a recommendation, Frameleads clients are the answer.&quot;
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. High-Velocity Paid Media */}
              <section id="paid-media" className="scroll-mt-32 border-t border-gray-200 pt-16 relative">
                <div className="absolute left-[-2rem] top-32 w-1.5 h-32 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent opacity-50 hidden lg:block" />
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">High-Velocity Paid Media (Google & Meta)</h2>
                </div>
                <p className="text-2xl text-gray-500 font-medium mb-12">Bidding on Profit, Not Just Clicks.</p>

                <div className="space-y-6">
                  <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start group hover:border-[#FF6B35]/30 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Value-Based Bidding (VBB)</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We don&apos;t just optimize for a $5 lead. We feed your actual sales data back to Google&apos;s AI to find the <strong className="text-gray-900">$50,000 customer</strong> through high-performance <Link href="/google-ads" className="text-[#FF6B35] font-semibold hover:underline">Google Ads management</Link>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start group hover:border-[#FF6B35]/30 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Performance Max Guardrails</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Most agencies let Google&apos;s AI run wild. We apply human-led &quot;Negative Keyword&quot; and &quot;Placement&quot; filters and specialized <Link href="/Meta-ads" className="text-[#FF6B35] font-semibold hover:underline">Meta Ads strategies</Link> to ensure your budget isn&apos;t spent on junk mobile games.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start group hover:border-[#FF6B35]/30 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <Link2 className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">The Signal Bridge</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We integrate your CRM (Salesforce, HubSpot, etc.) directly into the ad auction. The feedback loop is instantaneous.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Conversion Engineering */}
              <section id="conversion-engineering" className="scroll-mt-32 border-t border-gray-200 pt-16 relative">
                <div className="absolute left-[-2rem] top-32 w-1.5 h-32 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent opacity-50 hidden lg:block" />
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Conversion Engineering (CRO & UX)</h2>
                </div>
                <p className="text-2xl text-gray-500 font-medium mb-12">Traffic is a Commodity. Conversions are a Competitive Advantage.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-[#FF6B35]/5 rounded-bl-[100px]" />
                    <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-6">
                      <Gauge className="w-7 h-7 text-[#FF6B35]" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Kinetic UI Design</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Every millisecond matters. We optimize for <strong className="text-gray-900">INP (Interaction to Next Paint)</strong> to ensure your site feels instantaneous on 5G connections. Speed dictates trust.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-[#FF6B35]/5 rounded-bl-[100px]" />
                    <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-6">
                      <Layers className="w-7 h-7 text-[#FF6B35]" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Frictionless Funnels</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We use AI heatmap analysis to identify exactly where users drop off and re-engineer the visual hierarchy and flow to <strong className="text-gray-900">remove cognitive load</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. The "Information Gain" Comparison Table (Now isolated cards) */}
              <section className="scroll-mt-32 pt-16 border-t border-gray-200">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Evolution of Search & Growth</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    This data-heavy insight proves why traditional marketing models are breaking down in the generative AI era.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Traditional Marketing */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Traditional Marketing (2020)</h3>
                    <ul className="space-y-6">
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Search Focus</span>
                        <span className="text-gray-600">Keywords & Backlinks</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Ad Targeting</span>
                        <span className="text-gray-600">Interest & Demographics</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Data Logic</span>
                        <span className="text-gray-600">Pixel Tracking</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Content Goal</span>
                        <span className="text-gray-600">Traffic Volume</span>
                      </li>
                    </ul>
                  </div>

                  {/* Frameleads Growth Hub */}
                  <div className="bg-[#FFF5F0] p-8 rounded-3xl border border-[#FF6B35]/20 shadow-sm relative overflow-hidden hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-[40px] pointer-events-none" />
                    <h3 className="text-xl font-bold text-[#FF6B35] uppercase tracking-widest mb-6 border-b border-[#FF6B35]/10 pb-4 relative z-10">Frameleads Growth Hub (2026)</h3>
                    <ul className="space-y-6 relative z-10">
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Search Focus</span>
                        <span className="text-gray-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Entities & AI Citations</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Ad Targeting</span>
                        <span className="text-gray-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Algorithmic Predictive Intent</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Data Logic</span>
                        <span className="text-gray-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> First-Party Signal Bridging</span>
                      </li>
                      <li>
                        <span className="block text-sm font-bold text-gray-900 mb-1">Content Goal</span>
                        <span className="text-gray-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Information Gain & Trust</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6. Interactive ROI vs Spend Chart */}
              <section id="roi-calculator" className="scroll-mt-32 pt-16 border-t border-gray-200">
                <RoiChart />
              </section>

              {/* 7. FAQ */}
              <section id="faq" className="scroll-mt-32 pt-24 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">FAQ</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">How long does it take for GEO (Generative Engine Optimization) to work?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      Unlike traditional SEO, GEO results can appear in weeks as LLMs (Large Language Models) refresh their training data and real-time search capabilities. Our goal is to secure your first AI citation within 45 days.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">Why is my Google Ads CPA rising even with more clicks?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      This is usually caused by <strong className="text-gray-900">&quot;Signal Noise.&quot;</strong> If you don&apos;t use Offline Conversion Tracking, Google&apos;s AI optimizes for &quot;easy clicks&quot; rather than &quot;hard sales.&quot; We fix the signal bridge to lower your effective CPA.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">What is Value-Based Bidding (VBB)?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      VBB is a Google Ads strategy that uses machine learning to bid more aggressively on users likely to have a <strong className="text-gray-900">high Lifetime Value (LTV)</strong>, rather than just anyone who clicks an ad.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">What is &quot;Data Orchestration&quot; and why do I need it?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      Data Orchestration is the process of unifying tracking signals across all platforms (Search, Social, Display) and your CRM. This ensures that every marketing dollar is tracked through the <strong className="text-gray-900">entire customer journey</strong>, preventing data silos and double-counting of conversions.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">What results can I expect in the first 90 days?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      The first 30 days are focused on &quot;Signal Audit&quot; and technical setup. By day 60, we reach <strong className="text-gray-900">Algorithmic Stabilization</strong>, where we typically see a 20-30% drop in CPA. By day 90, we are in full scale mode, utilizing your stabilized bidding models to drive maximum volume.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6B35]" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-4">Which advertising channels do you manage?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-4">
                      We provide full-stack management for <strong className="text-gray-900">Google Ads (Search, PMax, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, and Microsoft Ads</strong>. All channels are unified under our single profit-driven orchestration framework.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="pt-24 mt-24 border-t border-gray-200 relative z-10">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2.5rem] overflow-hidden relative shadow-2xl p-12 md:p-20 text-center">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 relative z-10">
                    System Override. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Initialize Scale.</span>
                  </h2>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 relative z-10">
                    Deploy the exact 2026 blueprint driving 8-figure revenue architectures.
                  </p>
                  <Link href="/contact" className="relative z-10 inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                    Request System Audit <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </section>

            </main>
          </div>

          {/* Internal Link Silo Section */}
          <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Advanced Solutions</h2>
                <p className="text-gray-600">Discover localized and specialized strategies for every growth stage.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <Link href="/ppc-management" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                  <Activity className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">PPC Management</h3>
                  <p className="text-gray-600 text-sm">Revenue orchestration.</p>
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

                <Link href="/website-development" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                  <Code className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Web Engineering</h3>
                  <p className="text-gray-600 text-sm">Architecture of Authority.</p>
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

                <Link href="/pinterest-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                  <Pin className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Pinterest Ads</h3>
                  <p className="text-gray-600 text-sm">Predictive Commerce.</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
