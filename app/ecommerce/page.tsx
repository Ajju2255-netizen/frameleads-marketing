'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  ShoppingCart,
  Zap,
  Layers,
  Search,
  CheckCircle2,
  Plus,
  Minus,
  Globe,
  Database,
  BarChart3,
  MousePointer,
  Package,
  Truck,
  Repeat,
  Sparkles,
  ArrowRight,
  Layout,
  Smartphone,
  MessageCircle,
  Code,
  Target,
  Rocket,
  LineChart,
  Activity,
  UserCheck,
  Percent,
  Cpu,
  RefreshCw,
  ShoppingBag,
  ExternalLink,
  Shield,
  CreditCard,
  Landmark
} from 'lucide-react'

// JSON-LD Structured Data for E-commerce & Retail
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-commerce Growth Engineering & Retail Strategy",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/ecommerce-marketing"
  },
  "description": "Profit-first e-commerce scaling specializing in Server-Side CAPI, Feed Optimization, and Omnichannel Retail strategy.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Retail Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server-Side Conversions API Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semantic Product Feed Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LTV & Subscription Growth Engine" } }
    ]
  }
}

export default function EcommercePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "Why is my CAC (Customer Acquisition Cost) rising in 2026?",
      answer: "Increased competition and \"Signal Decay\" are the primary culprits. Most brands are still using 2023 tracking methods. Frameleads fixes this by implementing Server-Side Tracking and moving your budget toward \"Creative-Led Targeting,\" where the ad itself does the work that \"Interests\" used to do."
    },
    {
      question: "Is TikTok Shop better than driving traffic to my website?",
      answer: "In 2026, Social Commerce (TikTok/Instagram Shop) often has a 3x higher conversion rate because the user never leaves the app. However, we recommend a \"Hybrid\" model: use TikTok Shop for impulse buys and your website for high-AOV, brand-building \"Hero\" products."
    },
    {
      question: "How do you handle merchant feed compliance for multi-region stores?",
      answer: "We use a Dynamic Semantic Feed Architecture. Instead of one static XML, we generate regional-specific feeds that automatically adjust currency, inventory levels, and local trend keywords based on the target geo's search behavior."
    },
    {
      question: "What is the MER (Marketing Efficiency Ratio) and why is it better than ROAS?",
      answer: "ROAS (Return on Ad Spend) is platform-reported and often over-attributed or inflated by view-through conversions. MER (Total Revenue / Total Ad Spend) gives you a crystal-clear view of your actual profitability across the entire business, ensuring growth translates to bank-balance increases."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FDFDFD] text-[#0F172A] font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 text-slate-100/50">
            <div className="grid grid-cols-[repeat(20,minmax(20px,1fr))] gap-4 opacity-10">
              {[...Array(400)].map((_, i) => (
                <ShoppingCart key={i} className="w-8 h-8" />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[100px] -ml-72 -mb-72" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Retail Velocity Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto border border-slate-200 bg-white shadow-2xl rounded-3xl overflow-hidden mb-32 group hover:border-[#FF6B35]/30 transition-all duration-500"
            >
              <div className="bg-[#0F172A] px-6 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Retail Velocity Engine v6.1</div>
                <div className="flex gap-4 text-slate-400 font-mono text-[10px]">
                  <span>MODE: PERFORMANCE_SCALING</span>
                  <div className="flex gap-4">
                    <Activity className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                    <Repeat className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-[#FF6B35]/5 rounded-2xl">
                        <ShoppingBag className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-tight">Verified E-commerce ROI</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-6 leading-tight tracking-tight">
                      Retail Growth Summary
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                      <span className="font-bold text-[#0F172A] italic underline decoration-[#FF6B35]/30">The Strategy:</span> Frameleads engineers High-Velocity E-commerce Ecosystems by aligning <span className="text-[#FF6B35] font-bold">Inventory Intelligence</span> with Consumer Intent. Our 2026 framework utilizes Server-Side GTM (CAPI) and Predictive LTV Modeling, resulting in an average <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-0.5 rounded italic">30% increase in repeat purchase rates</span> and a 4x scale in "New-to-Brand" customer acquisition.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Stack Integration</div>
                      <div className="text-[#FF6B35] text-2xl font-black flex items-center gap-3">
                        SHOPIFY / MAGENTO / CUSTOM
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Scaling Factor</div>
                      <div className="text-[#0F172A] text-3xl font-black">4x NTB Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 rounded-full text-[#FF6B35] text-sm font-bold mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                  </span>
                  OMNICHANNEL PERFORMANCE 2026
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                  Beyond the Buy Button. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                    Engineering <br />
                    Retail Futures.
                  </span>
                </h1>
                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                  Most e-commerce brands are fighting for "the click" while losing "the customer." Frameleads builds Performance-First Retail Engines that bridge the gap between your warehouse and your customer's screen.
                </p>
                <div className="flex">
                  <Link href="/contact" className="group relative px-12 py-8 bg-[#0F172A] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.3)]">
                    <span className="relative z-10 flex items-center gap-4">
                      Audit My E-commerce Profitability <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 bg-[#0F172A] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-white/10 p-12 overflow-hidden">
                  <div className="bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-white/10 mb-8">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">MER Attribution Signal</div>
                    <div className="flex items-end gap-2 h-32">
                      {[60, 40, 80, 50, 90, 70, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-[#FF6B35]/40 to-[#FF6B35] rounded-t-lg"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Zap, label: 'CAPI Signal', val: '100% Core' },
                      { icon: Layers, label: 'Feed Health', val: 'Semantic' },
                      { icon: Repeat, label: 'Retention', val: 'Predictive' },
                      { icon: Package, label: 'WMS Sync', val: 'Real-Time' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                        <item.icon className="w-8 h-8 text-[#FF6B35] mb-4" />
                        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.label}</div>
                        <div className="text-lg font-black text-white">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual elements */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF8A50]/10 rounded-full blur-[100px] animate-pulse" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillar 1: Omnichannel Inventory & Feed Mastery */}
        <section className="py-32 px-6 relative bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-8 tracking-tighter">
                  The Product Feed is <br />
                  <span className="text-[#FF6B35]">Your Strategic Foundation.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    In 2026, your Product Feed is your most important SEO and PPC asset. We optimize for <span className="text-[#0F172A] font-bold">Algorithmic Match-Quality</span> to beat competitors on intent.
                  </p>

                  {[
                    { title: "Semantic Attribute Layering", desc: "We don't just use \"Blue Shirt.\" We inject Material, Fit, Occasion, and Trend-Keywords so AI search engines can match your product to high-intent \"Long-Tail\" queries." },
                    { title: "Real-Time Inventory Sync", desc: "Integrating your WMS with ad platforms to automatically pause spend on low-stock items and push \"High-Margin\" overstock." },
                    { title: "Local Inventory Ads (LIA)", desc: "Bridging the gap between \"Online Search\" and \"Offline Visit\" by showing live in-store availability to nearby shoppers." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="p-4 h-fit bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#FF6B35]/30 transition-all">
                        <Plus className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#0F172A] mb-2">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl overflow-hidden border border-slate-800">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-black text-2xl tracking-tighter uppercase">Merchant_Center_Bridge</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <div className="text-emerald-500 font-mono text-[10px]">SYNC_ACTIVE</div>
                      </div>
                    </div>
                    {['Summer_Linen_Fit_2026', 'Material: Eco_Hemp', 'Occasion: Wedding_Casual'].map((tag, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
                        <span className="text-[#FF6B35] font-mono text-xs">{tag}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                    <div className="mt-8 p-6 bg-[#FF6B35]/10 rounded-3xl border border-[#FF6B35]/20">
                      <div className="text-[10px] text-[#FF6B35] font-bold uppercase tracking-widest mb-2">Match Quality Result</div>
                      <div className="text-white text-3xl font-black">94.8% High-Intent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: Signal Integrity & "Cookieless" Attribution */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-8 tracking-tighter">
                Recovering Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">"Lost" 30% Attribution Signal.</span>
              </h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                Standard browser-based tracking is dead. We build Privacy-First Data Pipelines that bypass ad-blockers and send purchase data directly from your server.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "SST Conversions API",
                  desc: "We send checkout data directly from Shopify/Magento to ad networks, ensuring 100% signal retention without browser loss."
                },
                {
                  icon: UserCheck,
                  title: "1P Data Enrichment",
                  desc: "Utilizing your email lists to build High-Probability Lookalike models that find your next 10,000 customers with precision."
                },
                {
                  icon: BarChart3,
                  title: "MER Dashboarding",
                  desc: "Stop chasing fake ROAS. We focus on Total Revenue / Total Ad Spend, ensuring real bank-balance growth."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-[#FF6B35]/5 rounded-3xl flex items-center justify-center mb-8 border border-[#FF6B35]/10">
                    <card.icon className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 3: Retention-First Personalization */}
        <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[100px] -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8A50]/10 rounded-full blur-[100px] -mr-48 -mb-48" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: 'Repeat Rate', val: '+30% Growth', color: 'text-[#FF6B35]' },
                    { label: 'AOV Increase', val: '20% Post-Upsell', color: 'text-emerald-400' },
                    { label: 'Retention Flow', val: 'AI Predictive', color: 'text-sky-400' },
                    { label: 'Market MER', val: '4.0 Target', color: 'text-purple-400' }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                      <div className={`text-3xl font-black ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                  Scaling LTV: The Real <br />
                  <span className="text-[#FF6B35]">Path to Profitability.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                    Acquiring a customer once is expensive; keeping them is where the profit lies. We turn one-time shoppers into brand evangelists.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: RefreshCw, title: "Predictive Re-order Flows", desc: "Using AI to analyze \"Cycle of Consumption\" and triggering SMS reminders 5 days before stock-out." },
                      { icon: Percent, title: "Post-Purchase Upsell Engineering", desc: "Designing \"One-Click Upsell\" flows that increase AOV by 15-20% immediately after checkout." },
                      { icon: Rocket, title: "Subscription Growth Engines", desc: "Turning one-time buyers into recurring revenue through \"Subscribe & Save\" logic." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#FF6B35]/20 transition-colors">
                          <feat.icon className="w-8 h-8 text-[#FF6B35]" />
                        </div>
                        <div>
                          <div className="text-xl font-bold mb-1">{feat.title}</div>
                          <div className="text-slate-400 font-medium leading-relaxed">{feat.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Retail Growth Matrix */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 tracking-tighter">The Retail Growth Matrix</h2>
              <p className="text-2xl text-slate-500 font-medium italic">Standard Agencies vs. Frameleads E-commerce Hub.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white text-[#0F172A]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                    <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Marketing Agency</th>
                    <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads Retail Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Primary KPI', gen: 'Clicks / Leads', frame: 'MER / Contribution Margin' },
                    { metric: 'Feed Management', gen: 'Automated / Basic', frame: 'Optimized / Semantic / Rich' },
                    { metric: 'Tracking Method', gen: 'Browser Pixel', frame: 'Server-Side CAPI (100% Signal)' },
                    { metric: 'Strategy Focus', gen: 'Top-of-Funnel Only', frame: 'Full-Cycle (LTV & Retention)' },
                    { metric: 'Platform Scope', gen: 'Google/Meta Only', frame: 'Omnichannel (Shopify, TikTok, Amazon)' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-10 text-xl font-black border-b border-slate-50">{row.metric}</td>
                      <td className="p-10 text-xl text-center text-slate-500 font-medium border-b border-slate-50">{row.gen}</td>
                      <td className="p-10 text-xl text-center font-black border-b border-slate-50 bg-[#FF6B35]/5">{row.frame}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-20 tracking-tighter text-center">E-commerce ROI Deep-Dive</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b-4 border-[#0F172A]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-10 flex items-center justify-between text-left group"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] transition-colors group-hover:text-[#FF6B35]">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 p-2 bg-[#0F172A] text-white rounded-full">
                      {openFaq === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10">
                          <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0F172A] z-0" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/20 rounded-full blur-[150px] -mr-96 -mt-96" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-32 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#FF6B35] rounded-full" />
              <div className="mb-12">
                <Rocket className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-pulse" />
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Is Your Storefront a <br />
                  <span className="text-[#FF6B35]">Leaky Bucket or Engine?</span>
                </h2>
                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Most e-commerce brands lose 25% of their ad efficiency to "Silent Signal Decay" and "Dead Inventory" spend. Let's fix the foundation and start scaling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                  Claim My Retail Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Link Silo Section */}
        <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 md:p-24 text-center">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">Complete Your Growth Ecosystem</h2>
              <p className="text-xl text-slate-500">Scale across every high-velocity channel with Frameleads intelligence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Scaling Retail.' },
                { label: 'SaaS Hub', href: '/technology-and-saas', icon: Cpu, desc: 'Engineering for PLG.' },
                { label: 'Financial Hub', href: '/financial-services', icon: Landmark, desc: 'Trust & Growth.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: MessageCircle, desc: 'Creative-Led Signal.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'PMax Strategy.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Activity, desc: 'Full-Funnel Sales.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'UX/UI Conversion.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search Authority.' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-[#FF6B35]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <link.icon className={`w-12 h-12 text-[#FF6B35] mx-auto mb-6 transition-transform group-hover:scale-110`} />
                  <h3 className={`text-xl font-bold text-[#0F172A] mb-2`}>{link.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{link.desc}</p>
                </Link>
              ))}
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
