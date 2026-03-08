'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  MessageSquare,
  Zap,
  ShoppingBag,
  Users,
  TrendingUp,
  Target,
  Activity,
  ChevronRight,
  ShieldCheck,
  MousePointer2,
  PieChart,
  Repeat,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  MessageCircle,
  BarChart3,
  Search,
  PenTool,
  Cpu,
  Mail,
  Palette,
  Video,
  Linkedin,
  Music
} from 'lucide-react'

// JSON-LD Structured Data for WhatsApp Marketing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WhatsApp Marketing & Automation Services",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/whatsapp-marketing"
  },
  "description": "Enterprise WhatsApp Marketing solutions including API integration, CTWA ad strategy, and conversational commerce automation.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "WhatsApp Growth Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Business API Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversational AI Chatbots" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Click-to-WhatsApp Ad Management" } }
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
      "name": "Is WhatsApp Marketing compliant with GDPR and Privacy Laws?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Frameleads ensures 100% compliance by utilizing Opt-in Only strategies. We implement automated 'Unsubscribe' keywords and ensure all data is handled through secure WhatsApp Business API providers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send bulk messages on WhatsApp without getting banned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using the Official WhatsApp API is the only way to send bulk messages safely. Standard Business apps are prone to bans if used for mass broadcasting. We provide the enterprise infrastructure to send unlimited messages while maintaining a high 'Quality Rating'."
      }
    }
  ]
}

export default function WhatsAppMarketingPage() {
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

      <div className="min-h-screen bg-[#FDF8F5] text-slate-800 font-sans selection:bg-[#25D366] selection:text-white pb-20">

        {/* Organic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#25D366] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#075E54] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        {/* 1. Conversational ROI Snapshot */}
        <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Glassmorphism Box */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden group hover:border-[#25D366]/30 transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#25D366] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#25D366]/10">
                  <Activity className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#25D366]">WhatsApp Intelligence Summary</span>
              </div>
              <p className="text-2xl md:text-3xl text-gray-900 leading-snug font-medium tracking-tight">
                Frameleads transforms WhatsApp into a <strong className="text-gray-900">High-Conversion Sales Engine</strong> through API Automation and Hyper-Personalized Flows. By integrating WhatsApp with your CRM, we achieve an average <strong className="text-[#25D366] font-black">3x increase</strong> in lead-to-sale velocity. Our 2026 framework focuses on Official Green Tick Verification, resulting in a <strong className="text-gray-900 border-b-2 border-[#25D366]">60% reduction</strong> in customer support overhead.
              </p>
            </div>

            {/* 2. The Hero: The Direct-to-Consumer Connection */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight mb-10 flex flex-col items-center">
                <span>From &quot;Read&quot; to</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">Revenue.</span>
                <span>Own the Most Personal Screen.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
                Stop landing in the &quot;Promotions&quot; tab. Reach your customers where they are most active. Frameleads builds <strong className="text-gray-900">Automated WhatsApp Ecosystems</strong> that drive sales, recover abandoned carts, and provide 24/7 AI-driven support.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
                  Build My WhatsApp Sales Funnel <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#25D366]" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* 3. Pillar 1: WhatsApp Business API & Automation */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#25D366] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Scalable Conversations with Official API Integration
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  We move your brand beyond the &quot;Business App&quot; limitations to enterprise-level scale:
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Official Green Tick Verification</h3>
                      <p className="text-gray-600">We handle the end-to-end process to build instant trust and brand authority on the platform.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors shadow-sm">
                      <Repeat className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Automated Drip Sequences</h3>
                      <p className="text-gray-600">High-intent lead nurturing that triggers automatically based on website behavior or ad clicks.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors shadow-sm">
                      <Users className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Multi-Agent Support Dashboards</h3>
                      <p className="text-gray-600">One number, an entire team. We set up centralized dashboards to handle thousands of chats simultaneously.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[2.5rem] blur-3xl opacity-[0.1]" />
                <div className="relative bg-[#0F172A] rounded-[3rem] p-1 shadow-2xl overflow-hidden border border-white/10">
                  <div className="aspect-[9/10] relative overflow-hidden rounded-[2.8rem]">
                    <Image
                      src="/whatsapp/automation.png"
                      alt="WhatsApp API Automation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pillar 2: The Click-to-WhatsApp (CTWA) Funnel */}
        <section className="relative z-10 py-24 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-1 bg-[#25D366] mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Revolutionizing the Ad-to-Lead Journey
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Traditional landing pages have friction. <strong className="text-gray-900">Click-to-WhatsApp Ads</strong> remove it entirely:
                </p>

                <div className="grid gap-6">
                  {[
                    { title: "The Click", desc: "User clicks an ad on Meta (FB/IG) and transitions instantly.", icon: MousePointer2 },
                    { title: "The Chat", desc: "Instead of a slow form, a WhatsApp chat opens with a pre-filled message.", icon: MessageSquare },
                    { title: "The AI Qualification", desc: "Smart bots qualify the lead in real-time, capturing name, intent, and budget.", icon: Zap },
                    { title: "The Result", desc: "40% lower CPL (Cost Per Lead) compared to standard web forms.", icon: TrendingUp }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                      <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#25D366] rounded-[2.5rem] blur-2xl opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" />
                <div className="relative bg-white rounded-[3rem] p-4 shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="aspect-video relative rounded-2xl overflow-hidden">
                    <Image
                      src="/whatsapp/funnel.png"
                      alt="CTWA Funnel Process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pillar 3: Conversational Commerce & Retargeting */}
        <section className="relative z-10 py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">Reclaiming the Abandoned Cart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              WhatsApp is the most effective tool for <strong className="text-gray-900 font-bold">Recovering Lost Revenue</strong>. We build automated loops that bring users back.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-105 transition-all group">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#25D366] transition-colors">
                <Users className="w-8 h-8 text-[#25D366] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Broadcast Lists</h3>
              <p className="text-gray-600 leading-relaxed">90% read rates within 3 minutes. The &quot;new newsletter&quot; for seasonal offers and product launches.</p>
            </div>

            <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-105 transition-all group">
              <div className="w-16 h-16 bg-[#128C7E]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#128C7E] transition-colors">
                <ShoppingBag className="w-8 h-8 text-[#128C7E] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cart Recovery</h3>
              <p className="text-gray-600 leading-relaxed">Trigger personalized WhatsApp nudges with one-click checkout links to recover lost sales automatically.</p>
            </div>

            <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-105 transition-all group">
              <div className="w-16 h-16 bg-slate-900/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-colors">
                <Smartphone className="w-8 h-8 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Catalogs</h3>
              <p className="text-gray-600 leading-relaxed">Users can browse, select, and pay for products without ever leaving the WhatsApp interface.</p>
            </div>
          </div>
        </section>

        {/* 6. The "Engagement" Matrix */}
        <section className="relative z-10 py-24 bg-[#0F172A] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25D366] opacity-[0.05] rounded-full blur-[120px] -mr-40 -mt-20" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#128C7E] opacity-[0.05] rounded-full blur-[120px] -ml-40 -mb-20" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16 text-center">The Engagement Matrix</h2>

            <div className="overflow-x-auto rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-400">Metric</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-400">Email Marketing</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-gray-400">SMS Marketing</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-[#25D366]">WhatsApp Marketing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { metric: "Open Rate", email: "15% - 25%", sms: "90%+", wa: "98%" },
                    { metric: "CTR (Click Rate)", email: "2% - 5%", sms: "10% - 15%", wa: "45% - 60%" },
                    { metric: "Media Support", email: "Text/Images", sms: "Text Only", wa: "Video/Voice/Docs/CTAs" },
                    { metric: "Interaction", email: "One-way / Delayed", sms: "One-way", wa: "Two-way Real-time" },
                    { metric: "Spam Risk", email: "High (Folders)", sms: "High (Regulations)", wa: "Low (Opt-in Based)" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-6 font-bold text-gray-300">{row.metric}</td>
                      <td className="px-8 py-6 text-gray-400">{row.email}</td>
                      <td className="px-8 py-6 text-gray-400">{row.sms}</td>
                      <td className="px-8 py-6 text-[#25D366] font-black">{row.wa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Deep-Dive FAQ */}
        <section id="faq" className="scroll-mt-32 py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center">WhatsApp Strategy FAQ</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is WhatsApp Marketing compliant with GDPR and Privacy Laws?",
                  a: "Yes. Frameleads ensures 100% compliance by utilizing Opt-in Only strategies. We implement automated \"Unsubscribe\" keywords and ensure all data is handled through secure WhatsApp Business API providers."
                },
                {
                  q: "Can I send bulk messages on WhatsApp without getting banned?",
                  a: "Using the Official WhatsApp API is the only way to send bulk messages safely. Standard Business apps are prone to bans if used for mass broadcasting. We provide the enterprise infrastructure to send unlimited messages safely."
                },
                {
                  q: "How does 'Click-to-WhatsApp' help my PPC ROI?",
                  a: "By removing the friction of a landing page, users start a conversation instantly. This increases lead volume and allows for real-time qualification by AI bots, significantly lowering your overall Cost Per Acquisition."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-xl hover:border-[#25D366]/20 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#25D366] opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-4">{faq.q}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed pl-4">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final Call to Action */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="bg-[#0F172A] rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25D366] opacity-20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Are You Leaving Money in the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E]">&quot;Unread&quot; Folder?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Stop fighting for attention in crowded inboxes. Our WhatsApp Revenue Audit will show you exactly how to automate your sales and support for a &quot;Zero-Friction&quot; customer experience.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group">
                Claim My WhatsApp Growth Blueprint <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Marketing Ecosystem</h2>
              <p className="text-gray-600">Sync your WhatsApp flows with multi-channel performance and social dominance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/digital-marketing-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <BarChart3 className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm">Full-funnel growth architecture.</p>
              </Link>

              <Link href="/Social-media-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">Social Marketing</h3>
                <p className="text-gray-600 text-sm">Convert scrollers to fans.</p>
              </Link>

              <Link href="/seo-services" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Search className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">SEO Dominance</h3>
                <p className="text-gray-600 text-sm">Search authority framework.</p>
              </Link>

              <Link href="/content-marketing" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <PenTool className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">Content Strategy</h3>
                <p className="text-gray-600 text-sm">Entity-based authority.</p>
              </Link>

              <Link href="/google-ads" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Target className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors mb-2">Google Ads</h3>
                <p className="text-gray-600 text-sm">Value-Based Bidding.</p>
              </Link>

              <Link href="/analytics-and-automations" className="group p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-200 hover:border-[#FF6B35]/30 hover:shadow-lg transition-all duration-300 text-center">
                <Cpu className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">Data & Automation</h3>
                <p className="text-gray-600 text-sm">Unified Intelligence.</p>
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
