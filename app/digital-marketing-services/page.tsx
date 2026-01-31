import Link from 'next/link'
import {
  Zap,
  Target,
  Database,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Search,
  Layers,
  Brain,
  Link2,
  FileText,
  DollarSign,
  Palette,
  AlertTriangle,
  MousePointer,
  LineChart,
  Users,
  Gauge,
  Globe,
  Flame,
  Award,
  XCircle
} from 'lucide-react'

export const metadata = {
  title: 'Digital Marketing Services | Performance-Driven Growth | Frameleads',
  description: 'Stop renting traffic. Frameleads builds revenue ecosystems through AI-optimized SEO, high-intent PPC, and conversion-first design. Get your growth audit today.',
  keywords: ['Digital Marketing Services', 'SEO Services', 'PPC Management', 'AIO Optimization', 'CRO', 'Revenue Ecosystem', 'Performance Marketing'],
  openGraph: {
    title: 'Digital Marketing Services | Performance-Driven Growth | Frameleads',
    description: 'Stop renting traffic. Frameleads builds revenue ecosystems through AI-optimized SEO, high-intent PPC, and conversion-first design. Get your growth audit today.',
    type: 'website',
    images: ['/og-digital-marketing-services.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Performance-Driven Growth | Frameleads',
    description: 'Stop renting traffic. Frameleads builds revenue ecosystems through AI-optimized SEO, high-intent PPC, and conversion-first design.',
  }
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Frameleads Digital Marketing Services",
  "description": "Performance-driven digital marketing services including SEO, AIO, PPC, and CRO to build revenue ecosystems.",
  "url": "https://frameleads.com/digital-marketing-services",
  "telephone": "+91 6362821368",
  "email": "ajsal@frameleads.com",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization (SEO & AIO)",
          "description": "Dominating AI Overviews and Organic Search with technical authority and topical clusters"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Marketing (Google & Meta Ads)",
          "description": "Value-based bidding and creative velocity for instant, profitable visibility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conversion Rate Optimization (CRO)",
          "description": "Heatmap analysis and A/B testing to turn traffic into transactions"
        }
      }
    ]
  }
}

// FAQ Schema for "People Also Ask" optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you measure the success of a marketing campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on MER (Marketing Efficiency Ratio) and LTV (Lifetime Value). While most agencies report on vanity metrics like impressions, we report on the actual cost to acquire a paying customer."
      }
    },
    {
      "@type": "Question",
      "name": "Will my brand appear in Google's AI Overviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SEO strategy includes Schema Markup and Entity Linking, which are the primary triggers for being cited in AI-generated search results."
      }
    }
  ]
}

export default function DigitalMarketingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#FF6B35] selection:text-white pb-20">

        {/* Organic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#FF6B35] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-[#FF9055] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#FF6B35] opacity-[0.04] rounded-full blur-[100px]" />
        </div>

        {/* Hero Section: The Authority Hook */}
        <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/80 backdrop-blur-sm border-b border-[#FF6B35]/10">
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-medium text-sm mb-8 border border-[#FF6B35]/20 animate-fade-in-up">
              <Flame className="w-4 h-4" />
              <span>Performance-Driven Growth Agency</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Marketing That Scales With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Logic, Not Just Luck.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
              Most agencies buy clicks. <span className="font-semibold text-gray-900">We build revenue ecosystems.</span> Frameleads integrates SEO, high-intent PPC, and conversion-first design to dominate the search landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
                <Zap className="w-5 h-5" />
                Get a Free Growth Blueprint
              </Link>
              <Link href="#case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-[#FF6B35]/30 hover:text-[#FF6B35] transition-all duration-300">
                <BarChart3 className="w-5 h-5" />
                View Our Performance Data
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
                <span>Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FF6B35]" />
                <span>Meta Business Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-[#FF6B35]" />
                <span>ROI-Driven Analytics</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: The "Digital Intelligence" Framework */}
        <section className="relative z-10 py-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Brain className="w-8 h-8 text-[#FF6B35]" />
                Why Frameleads Outperforms the Standard Agency
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The Frameleads <span className="font-semibold text-gray-900">Semantic Engine</span>: Our proprietary framework for predictable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Data-Backed Strategy */}
              <div className="group bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Backed Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don&apos;t guess. We use <strong className="text-gray-900">predictive analytics</strong> to identify where your customers are before they search.
                </p>
              </div>

              {/* The Signal Bridge */}
              <div className="group bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Link2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Signal Bridge</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect your CRM directly to your ad platforms. This teaches Google and Meta to find you <strong className="text-gray-900">Buyers, not just Leads</strong>.
                </p>
              </div>

              {/* Full-Funnel Content */}
              <div className="group bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Funnel Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  From <strong className="text-gray-900">AIO-optimized blogs</strong> to high-converting landing pages, we own every touchpoint of the customer journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Growth Verticals (Service Blocks) */}
        <section className="relative z-10 py-20" id="services">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Layers className="w-8 h-8 text-[#FF6B35]" />
                Our Growth Verticals
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized strategies designed to maximize every channel.
              </p>
            </div>

            <div className="space-y-8">
              {/* 01. SEO & AIO */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-4 border border-white/30">
                      01
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Search Engine Optimization (SEO & AIO)</h3>
                    <p className="text-white/90 font-medium">
                      The Goal: <span className="font-bold">Dominating the AI Overview and the Organic 10.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Gauge className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Technical Authority</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We fix your site&apos;s core vitals and architecture for <strong className="text-gray-900">0.5s load times</strong>.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Layers className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Topical Clusters</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We build <strong className="text-gray-900">&quot;Authority Hubs&quot;</strong> that prove to Google you are the definitive expert in your niche.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Brain className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">SGE Optimization</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We structure your content specifically to be <strong className="text-gray-900">cited by AI search engines</strong>.</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link href="/seo-services" className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:gap-3 transition-all duration-300">
                        Learn more about SEO Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02. Performance Marketing */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FF6B35] rounded-full text-sm font-bold mb-4">
                      02
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Performance Marketing (Google & Meta Ads)</h3>
                    <p className="text-white/90 font-medium">
                      The Goal: <span className="font-bold">Instant, Profitable Visibility.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <DollarSign className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Value-Based Bidding</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We optimize for <strong className="text-gray-900">your profit margins</strong>, not just click-through rates.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Palette className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Creative Velocity</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Our design team produces <strong className="text-gray-900">high-frequency ad variations</strong> to prevent audience fatigue.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <ShieldCheck className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">PMax Guardrails</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We apply human intelligence to Google&apos;s automation to ensure your budget isn&apos;t wasted on <strong className="text-gray-900">&quot;Ghost Clicks.&quot;</strong></p>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link href="/google-ads" className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:gap-3 transition-all duration-300">
                        Learn more about Google Ads
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 03. CRO */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#10B981] to-[#059669] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-4 border border-white/30">
                      03
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Conversion Rate Optimization (CRO)</h3>
                    <p className="text-white/90 font-medium">
                      The Goal: <span className="font-bold">Turning Traffic into Transactions.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <MousePointer className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Heatmap Analysis</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We track where users get stuck and <strong className="text-gray-900">re-engineer the UI</strong> to remove friction.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <BarChart3 className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">A/B Testing</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Constant iteration of headlines, buttons, and layouts to <strong className="text-gray-900">maximize every dollar of traffic</strong>.</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link href="/conversion-rate-optimization" className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:gap-3 transition-all duration-300">
                        Learn more about CRO Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Stats Ticker */}
        <section className="relative z-10 py-16 bg-[#0F172A] overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055] mb-2">
                  $50M+
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Total Managed Spend</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055] mb-2">
                  42%
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Avg. CPA Reduction</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055] mb-2">
                  4.5x
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Average ROAS</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055] mb-2">
                  200+
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Brands Scaled</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The "Deep Answer" FAQ */}
        <section className="relative z-10 py-20" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Search className="w-8 h-8 text-[#FF6B35]" />
                The &quot;Deep Answer&quot; FAQ
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Real answers to the questions that matter.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors pl-4">
                  How do you measure the success of a marketing campaign?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-4">
                  We focus on <strong className="text-gray-900">MER (Marketing Efficiency Ratio)</strong> and <strong className="text-gray-900">LTV (Lifetime Value)</strong>. While most agencies report on vanity metrics like impressions, we report on the actual cost to acquire a paying customer. This is the only metric that matters for sustainable growth.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors pl-4">
                  Will my brand appear in Google&apos;s AI Overviews?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-4">
                  Our SEO strategy includes <strong className="text-gray-900">Schema Markup</strong> and <strong className="text-gray-900">Entity Linking</strong>, which are the primary triggers for being cited in AI-generated search results. We structure your content to be the definitive source that AI engines want to quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Social Proof & Velocity */}
        <section className="relative z-10 py-20 bg-gradient-to-br from-[#F8F9FA] to-white" id="case-studies">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We don&apos;t work with everyone.
              </h2>
              <p className="text-xl text-gray-600">
                We work with brands ready to lead.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Case Study 1 */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-[#FF6B35] font-medium">B2B SaaS</span>
                    <h3 className="text-xl font-bold text-gray-900">90-Day Transformation</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  How we reduced CPA by <strong className="text-gray-900">42%</strong> for a B2B SaaS client in 90 days through systematic value-based bidding and creative testing.
                </p>
                <div className="flex items-center gap-2 text-[#FF6B35] font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>42% CPA Reduction</span>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-[#10B981] font-medium">E-commerce</span>
                    <h3 className="text-xl font-bold text-gray-900">Scale at Efficiency</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Scaling an E-commerce brand from <strong className="text-gray-900">$10k to $150k</strong> monthly spend while maintaining a healthy <strong className="text-gray-900">4.5x ROAS</strong>.
                </p>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>4.5x ROAS at Scale</span>
                </div>
              </div>
            </div>

            {/* Anti-Persona Callout */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who We Don&apos;t Work With</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don&apos;t work with brands looking for <strong className="text-gray-900">&quot;quick fixes&quot;</strong> or bot-driven traffic. Our methodology is designed for serious businesses that understand sustainable growth requires systematic execution. If you want shortcuts, we&apos;re not the right fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA: The Next Step */}
        <footer className="relative z-10 max-w-4xl mx-auto px-6 py-16 mt-12">
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-3xl overflow-hidden relative shadow-2xl shadow-[#FF6B35]/25">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F172A] opacity-10 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none" />

            <div className="relative z-10 p-12 md:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-6 border border-white/30">
                <Award className="w-4 h-4" />
                <span>Ready to build your growth engine?</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Get a Technical Audit of Your<br />Current Digital Presence.
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
                No fluff, just data. Discover exactly where you&apos;re losing revenue and how to fix it.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#FF6B35] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Request Your Growth Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/70 text-sm mt-6">
                No commitment. Just clarity.
              </p>
            </div>
          </div>
        </footer>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Deep-Dive Services</h2>
              <p className="text-gray-600">Visit our specialized pages to learn more about each service vertical.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="w-6 h-6 text-[#FF6B35]" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">SEO Services</h3>
                </div>
                <p className="text-gray-600 text-sm">Technical SEO, content strategy, and AI optimization.</p>
              </Link>

              <Link href="/google-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-[#FF6B35]" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">Google Ads</h3>
                </div>
                <p className="text-gray-600 text-sm">Performance Max, Search, and Shopping campaigns.</p>
              </Link>

              <Link href="/Meta-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-[#FF6B35]" />
                  <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">Meta Ads</h3>
                </div>
                <p className="text-gray-600 text-sm">Facebook & Instagram advertising mastery.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
