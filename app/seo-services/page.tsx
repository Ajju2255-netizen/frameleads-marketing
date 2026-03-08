import Link from 'next/link'
import {
  Zap,
  Target,
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
  Gauge,
  Globe,
  Flame,
  Award,
  Server,
  Sparkles,
  Database,
  Users,
  Play,
  Clock,
  DollarSign,
  Activity,
  PenTool,
  Share2,
  MessageCircle,
  Mail,
  Cpu,
  Palette,
  Code,
  Video,
  Music,
  Smartphone,
  Pin,
  Linkedin
} from 'lucide-react'

export const metadata = {
  title: 'SEO Services | Rank in AI Overviews & Search | Frameleads',
  description: 'Dominate the search landscape. Frameleads provides AI-optimized SEO services focused on Topical Authority, technical excellence, and revenue growth. Get your audit.',
  keywords: ['SEO Services', 'AIO Optimization', 'AI Overview SEO', 'Topical Authority', 'Technical SEO', 'Entity SEO', 'Semantic SEO'],
  openGraph: {
    title: 'SEO Services | Rank in AI Overviews & Search | Frameleads',
    description: 'Dominate the search landscape. Frameleads provides AI-optimized SEO services focused on Topical Authority, technical excellence, and revenue growth. Get your audit.',
    type: 'website',
    images: ['/og-seo-services.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services | Rank in AI Overviews & Search | Frameleads',
    description: 'Dominate the search landscape with AI-optimized SEO services focused on Topical Authority and revenue growth.',
  }
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Frameleads SEO Services",
  "description": "AI-optimized SEO services focused on Topical Authority, technical excellence, and revenue growth.",
  "url": "https://frameleads.com/seo-services",
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
    "name": "SEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Foundation SEO",
          "description": "Core Web Vitals optimization, Semantic HTML, Schema markup, and crawl budget optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Topical Authority Building",
          "description": "Topic clustering, search intent mapping, and AI-assisted content creation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital PR & Link Acquisition",
          "description": "Ethical link acquisition and brand mentions from high-authority publications"
        }
      }
    ]
  }
}

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to see SEO results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical fixes provide a 'lift' in 30 days. Full topical authority typically takes 4 to 6 months to dominate high-competition keywords and AI Overviews."
      }
    },
    {
      "@type": "Question",
      "name": "Does SEO still work with AI Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but it has changed. AI search engines need 'structured data' and 'authoritative sources' to pull from. Our SEO makes your site the preferred source for those AI answers."
      }
    },
    {
      "@type": "Question",
      "name": "Why did my traffic drop after a Google Core Update?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google's recent updates penalize thin, unhelpful content. If your traffic dropped, your site may lack Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). We diagnose the drop and rebuild your topical authority to recover."
      }
    },
    {
      "@type": "Question",
      "name": "Do you write content or just do technical SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. Technical SEO ensures Google can crawl your site, but content is what makes you rank. We build comprehensive topic clusters and authoritative content that search engines and users love."
      }
    },
    {
      "@type": "Question",
      "name": "What is Topical Authority?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Topical Authority is the measure of a website's credibility in a specific subject area. Instead of ranking for single keywords, we help you dominate entire topics by creating content that answers every possible user query in that niche."
      }
    },
    {
      "@type": "Question",
      "name": "How does Frameleads handle Local SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We optimize your Google Business Profile, build local citations, and create geo-specific landing pages that help you capture intent from users searching for services in your specific area."
      }
    },
    {
      "@type": "Question",
      "name": "What is 'Information Gain' in SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Information Gain is a Google patent that rewards content providing unique value or data not found in other top-ranking pages. We focus on original research and proprietary insights to ensure your content stands out to both users and algorithms."
      }
    },
    {
      "@type": "Question",
      "name": "How do you optimize for Google's AI Overviews (AIO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optimization for AIO involves structuring content with clear semantic headers, implementing specific JSON-LD schemas, and providing direct, high-density answers to complex user queries that LLMs can easily parse and cite."
      }
    },
    {
      "@type": "Question",
      "name": "What is Entity-Based SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entity-Based SEO moves away from simple keyword matching to mapping your brand as a specific 'entity' within Google's Knowledge Graph. This builds deeper trust and helps search engines understand the context and relationships of your services."
      }
    }
  ]
}

export default function SEOServicesPage() {
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

        {/* Hero Section: The Long-Term Dominance */}
        <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/80 backdrop-blur-sm border-b border-[#FF6B35]/10">
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-medium text-sm mb-8 border border-[#FF6B35]/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Semantic Authority Builders</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Don&apos;t Just Rank. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9055]">Own the Search Landscape.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
              Traditional SEO is dying. <span className="font-semibold text-gray-900">Frameleads builds Semantic Authority.</span> We combine technical precision with AI-optimized content to ensure your brand is the &quot;First Answer&quot; in Google&apos;s AI Overviews and organic results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF9055] text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 hover:scale-105 transition-all duration-300">
                <Search className="w-5 h-5" />
                Get a Free SEO Visibility Map
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#FF6B35]" />
                <span>AI Overview Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FF6B35]" />
                <span>Entity-First Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
                <span>Revenue-Driven Results</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: The New Era of SEO */}
        <section className="relative z-10 py-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Globe className="w-8 h-8 text-[#FF6B35]" />
                The New Era of SEO
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                From <span className="font-semibold text-gray-900">&quot;Keywords&quot;</span> to <span className="font-semibold text-gray-900">&quot;Entities&quot;</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg mb-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
                Google no longer ranks pages just for having a keyword 10 times. It ranks <strong className="text-gray-900">Entities</strong> that provide the most comprehensive answer.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* AIO Integration */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                  <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AIO Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize your site&apos;s architecture so <strong className="text-gray-900">Google Gemini and SearchGPT</strong> cite you as the primary source.
                  </p>
                </div>

                {/* Information Gain */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                  <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Information Gain</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create content that <strong className="text-gray-900">adds new value</strong> to the web, not just rehashing what&apos;s already on Page 1.
                  </p>
                </div>

                {/* Revenue First */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#FF6B35]/30">
                  <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don&apos;t track &quot;Top 10&quot; rankings for useless terms. We track <strong className="text-gray-900">conversions from organic intent</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Three Pillars of Frameleads SEO */}
        <section className="relative z-10 py-20" id="pillars">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Layers className="w-8 h-8 text-[#FF6B35]" />
                The Three Pillars of Frameleads SEO
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven framework for dominating search in the AI era.
              </p>
            </div>

            <div className="space-y-8">
              {/* Pillar 01. Technical Foundation */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#FF6B35] to-[#FF9055] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-4 border border-white/30">
                      01
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Technical Foundation</h3>
                    <p className="text-white/90 font-medium">
                      The Core: <span className="font-bold">We treat your website like a high-performance engine. If it&apos;s slow, it won&apos;t rank.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Gauge className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Core Web Vitals</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">100/100 scores</strong> for LCP and INP.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Server className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Semantic HTML & Schema</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We &quot;speak&quot; to Google in its native language using <strong className="text-gray-900">JSON-LD</strong>.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Database className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Crawl Budget Optimization</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Ensuring Google&apos;s bots spend time on your <strong className="text-gray-900">money pages</strong>, not your junk pages.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 02. Topical Authority */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FF6B35] rounded-full text-sm font-bold mb-4">
                      02
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Topical Authority</h3>
                    <p className="text-white/90 font-medium">
                      The Content: <span className="font-bold">We don&apos;t write &quot;blogs.&quot; We build Content Powerhouses.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Layers className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Topic Clustering</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">We create a <strong className="text-gray-900">web of interconnected articles</strong> that prove your expertise in your niche.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Target className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Search Intent Mapping</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Matching content to the user&apos;s specific stage—from <strong className="text-gray-900">&quot;Problem Aware&quot; to &quot;Ready to Buy.&quot;</strong></p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Brain className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">AI-Assisted, Human-Perfected</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Using AI for scale, but human experts for the <strong className="text-gray-900">&quot;E-E-A-T&quot;</strong> that Google craves.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 03. Digital PR Bridge */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-[#10B981] to-[#059669] p-8 lg:p-12 text-white">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-4 border border-white/30">
                      03
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Digital PR Bridge</h3>
                    <p className="text-white/90 font-medium">
                      The Trust: <span className="font-bold">Backlinks are still the &quot;votes&quot; of the internet, but quality is everything.</span>
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <ShieldCheck className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Ethical Link Acquisition</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">No PBNs. No spam.</strong> Only high-authority mentions from real publications in your industry.</p>
                      </div>
                      <div className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                            <Users className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-gray-900">Brand Mentions</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Building your <strong className="text-gray-900">&quot;Social Proof&quot;</strong> across the web so Google views you as a trusted leader.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: SEO for the AI-First World (The "AIO" Advantage) */}
        <section className="relative z-10 py-20 bg-[#0F172A] overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35] opacity-20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-[#FF6B35]" />
                SEO for the AI-First World
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                The <span className="font-semibold text-[#FF6B35]">&quot;AIO&quot; Advantage</span> — How Frameleads SEO differs from traditional approaches.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-5 text-left text-sm font-bold text-white">Feature</th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-400">Old SEO (Pre-2024)</th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-[#FF6B35]">Frameleads SEO (2026+)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-white font-medium">Primary Goal</td>
                      <td className="px-6 py-5 text-gray-400">Keyword Rankings</td>
                      <td className="px-6 py-5 text-white font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        SGE/AIO Citations
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-white font-medium">Strategy</td>
                      <td className="px-6 py-5 text-gray-400">Backlink Quantity</td>
                      <td className="px-6 py-5 text-white font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        Topical Depth & Authority
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-white font-medium">Content</td>
                      <td className="px-6 py-5 text-gray-400">500-word filler</td>
                      <td className="px-6 py-5 text-white font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        Expert-Led &quot;Deep Answers&quot;
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-white font-medium">KPIs</td>
                      <td className="px-6 py-5 text-gray-400">Traffic Volume</td>
                      <td className="px-6 py-5 text-white font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        Revenue & SQLs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: SEO FAQ (Rich Snippet Optimization) */}
        <section className="relative z-10 py-20" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <FileText className="w-8 h-8 text-[#FF6B35]" />
                SEO FAQ
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Answers to the questions smart marketers ask.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      How long does it take to see SEO results?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Technical fixes provide a <strong className="text-gray-900">&quot;lift&quot; in 30 days</strong>. Full topical authority typically takes <strong className="text-gray-900">4 to 6 months</strong> to dominate high-competition keywords and AI Overviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      Does SEO still work with AI Search?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Yes, but it has changed.</strong> AI search engines need &quot;structured data&quot; and &quot;authoritative sources&quot; to pull from. Our SEO makes your site the <strong className="text-gray-900">preferred source</strong> for those AI answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      Why did my traffic drop after a Google Core Update?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Google&apos;s recent updates penalize thin, unhelpful content. If your traffic dropped, your site may lack <strong className="text-gray-900">Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)</strong>. We diagnose the drop and rebuild your topical authority to recover.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      Do you write content or just do technical SEO?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Both.</strong> Technical SEO ensures Google can crawl your site, but content is what makes you rank. We build comprehensive topic clusters and authoritative content that search engines and users love.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      What is Topical Authority?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Topical Authority is the measure of a website&apos;s credibility in a specific subject area. Instead of ranking for single keywords, we help you dominate <strong className="text-gray-900">entire topics</strong> by creating content that answers every possible user query in that niche.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      What is &quot;Information Gain&quot; and why is it mandatory?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Information Gain rewards content that provides <strong className="text-gray-900">unique data or perspectives</strong> not found in other results. We move beyond &quot;paraphrasing Page 1&quot; to ensure your site is recognized as an original authority.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      How do you optimize for Google&apos;s AI Overviews (AIO)?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use <strong className="text-gray-900">Semantic Structuring</strong> and specific JSON-LD schemas to make your data easily digestible for LLMs. Our goal is to secure your brand as a citation in AI-generated answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#FF9055]" />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-[#FF6B35] transition-colors">
                      What is &quot;Entity-Based SEO&quot;?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      It&apos;s the process of mapping your brand as a <strong className="text-gray-900">Trusted Entity</strong> in Google&apos;s Knowledge Graph. This builds deeper authority than keyword-only strategies and protects your rankings during core updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA: The Strategy Call */}
        <footer className="relative z-10 max-w-4xl mx-auto px-6 py-16 mt-12">
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9055] rounded-3xl overflow-hidden relative shadow-2xl shadow-[#FF6B35]/25">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F172A] opacity-10 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none" />

            <div className="relative z-10 p-12 md:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-6 border border-white/30">
                <Flame className="w-4 h-4" />
                <span>Ready to dominate search?</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Stop Guessing.<br />Start Growing.
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
                Our SEO audit reveals exactly why your competitors are outranking you and provides a <strong>12-month roadmap</strong> to overtake them.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#FF6B35] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Claim My SEO Strategy Session
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Digital Marketing Services</h2>
              <p className="text-gray-600">Discover how our full-stack approach drives sustainable growth.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <BarChart3 className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
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
    </>
  )
}
