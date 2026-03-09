'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  Cpu,
  Zap,
  Layers,
  Activity,
  Search,
  Target,
  BarChart3,
  Globe,
  Database,
  Terminal,
  GitBranch,
  Server,
  Code,
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Laptop,
  Network,
  Lock,
  MousePointer2,
  Rocket,
  Plus,
  Minus,
  Briefcase,
  Users,
  Building2,
  Mail,
  Video,
  Linkedin,
  Music,
  ShoppingBag,
  Pin,
  Share2
} from 'lucide-react'

// JSON-LD Structured Data for SaaS Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Growth Engineering & PLG Strategy",
  "provider": {
    "@type": "Organization",
    "name": "Frameleads",
    "url": "https://frameleads.com/saas-marketing"
  },
  "description": "Enterprise-level SaaS marketing specializing in Product-Led Growth (PLG), PQL orchestration, and technical SEO for software brands.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SaaS Performance Portfolio",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product-Led Growth (PLG) Implementation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Feature-Driven Programmatic SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LTV:CAC Analytics & Reverse-ETL" } }
    ]
  }
}

export default function SaaSPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "What is a \"Good\" LTV:CAC ratio for an early-stage SaaS?",
      answer: "In 2026, a healthy ratio is 3:1 or higher. This means for every $1 you spend on marketing, you earn $3 in lifetime revenue. Frameleads focuses on improving this ratio by optimizing the Onboarding Experience, which is where most SaaS companies lose 40% of their acquired users."
    },
    {
      question: "How do I compete with \"Legacy\" SaaS giants on SEO?",
      answer: "Don't fight them for broad keywords like \"Project Management.\" We win by targeting Long-Tail \"Job-to-be-Done\" (JTBD) queries. We build content around the specific workflow your software solves better than anyone else, capturing users who are looking for a solution, not just a category."
    },
    {
      question: "How do you align PLG with Demand Gen?",
      answer: "We treat your product as the primary marketing channel. By tracking high-intent actions within your app (PQLs), we sync that data back to ad platforms via Reverse-ETL. This allows Google and Meta algorithms to target people who behave like your most successful power users, rather than just anyone who signs up."
    },
    {
      question: "What is Reverse-ETL and why does my SaaS need it?",
      answer: "Reverse-ETL takes your warehouse data (product usage, plan type) and pushes it into your marketing tools (CRM, Ad platforms). It's crucial because it allows you to bid on actual revenue outcomes rather than vanity signups, ensuring your ad spend is always optimized for LTV."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF6B35] selection:text-white pb-20 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF8A50]/5 rounded-full blur-[100px] -ml-72 -mb-72" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* SaaS Intelligence Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto border border-slate-200 bg-white shadow-2xl rounded-3xl overflow-hidden mb-32 group hover:border-[#FF6B35]/30 transition-all duration-500"
            >
              <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">SaaS Intelligence Console v2.0</div>
                <div className="flex gap-4 text-slate-400 font-mono text-[10px]">
                  <span>PR_MODE: PLG_ENABLED</span>
                  <div className="flex gap-4">
                    <Terminal className="w-3 h-3" />
                    <Activity className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-[#FF6B35]/10 rounded-2xl">
                        <Cpu className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-tight">Active Growth Loop Engine</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                      SaaS Intelligence Summary
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                      <span className="font-bold text-slate-900 italic underline decoration-[#FF6B35]/30">The Strategy:</span> Frameleads engineers High-Velocity SaaS Ecosystems by aligning <span className="text-[#FF6B35] font-bold">Product-Led Growth (PLG)</span> with Demand Generation. We move beyond simple lead gen to PQL Orchestration. Our 2026 framework utilizes Reverse-ETL data syncing, resulting in an average <span className="bg-[#FF6B35]/10 text-[#0F172A] px-2 py-0.5 rounded italic">32% reduction in Churn</span> and a 4x increase in Expansion Revenue.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">System Health</div>
                      <div className="text-[#FF6B35] text-2xl font-black flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping" />
                        OPERATIONAL
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">PQL Flow Tracking</div>
                      <div className="text-slate-900 text-3xl font-black">+312% YoY</div>
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
                  SaaS GROWTH ENGINEERING 2026
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                  Scale Your SaaS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                    at the Speed <br />
                    of Code.
                  </span>
                </h1>
                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                  Building the product was the hard part. Scaling it shouldn't be. Frameleads builds Growth Engines for Software Founders that turn cold traffic into active users and active users into brand evangelists. From API-First SEO to High-Intent LinkedIn ABM, we own the full-stack funnel.
                </p>
                <div className="flex">
                  <Link href="/contact" className="group relative px-12 py-8 bg-[#0F172A] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.3)]">
                    <span className="relative z-10 flex items-center gap-4">
                      Audit My SaaS Growth Loop <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
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
                <div className="relative z-10 bg-[#0F172A] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-white/10 p-12 overflow-hidden transition-all duration-700 hover:scale-[1.02]">
                  {/* Decorative Code Lines */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 font-mono text-[10px] text-[#FF6B35] space-y-1 text-right">
                    <div>git commit -m "optimize: pql_flow"</div>
                    <div>yarn deploy --prod</div>
                    <div>status: healthy [200 OK]</div>
                  </div>

                  <div className="relative z-10 space-y-10">
                    {[
                      { icon: GitBranch, label: 'PQL Attribution', val: '100% Verified', color: 'text-[#FF6B35]' },
                      { icon: Activity, label: 'LTV Discovery', val: '+42% Expansion', color: 'text-[#FF6B35]' },
                      { icon: ShieldCheck, label: 'Churn Prevention', val: 'Active', color: 'text-slate-400' },
                      { icon: Globe, label: 'Global Scaling', val: 'Multi-Region', color: 'text-slate-400' }
                    ].map((m, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                        <div className="p-4 bg-white/5 rounded-3xl group-hover:bg-white/10 transition-colors border border-white/5">
                          <m.icon className={`w-8 h-8 ${m.color}`} />
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{m.label}</div>
                          <div className="text-2xl font-black text-white">{m.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Graph Mockup */}
                  <div className="mt-12 flex items-end gap-1 h-20 opacity-30">
                    {[40, 60, 30, 80, 50, 90, 70, 100, 85, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-[#FF6B35] to-transparent rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
                {/* Orbital Rings */}
                <div className="absolute -top-20 -right-20 w-80 h-80 border border-[#FF6B35]/10 rounded-full animate-spin-slow pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-[#FF6B35]/5 rounded-full animate-reverse-spin pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl opacity-20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillar 1 */}
        <section className="py-32 px-6 relative bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                  Turning Users into Your <br />
                  <span className="text-[#FF6B35]">Best Salespeople.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    In 2026, the best marketing happens after the signup. We build behavioral growth loops that treat your product as the primary vehicle for acquisition and expansion.
                  </p>

                  {[
                    { title: "PQL (Product-Qualified Lead) Scoring", desc: "We integrate your app’s usage data (e.g., \"User created 5 projects\") with your CRM to alert your sales team the exact moment a trial user is ready to upgrade." },
                    { title: "In-App Viral Loops", desc: "Engineering features that naturally encourage sharing (referral credits, collaborative workspaces, public-facing dashboards) to drive $0 CAC acquisition." },
                    { title: "Churn-Predictive Automation", desc: "Identifying \"Declining Activity\" patterns and triggering automated re-engagement flows before the user cancels their subscription." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="p-4 h-fit bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#FF6B35]/30 transition-all">
                        <Plus className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl overflow-hidden relative border border-slate-800">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-[#FF6B35] rounded-2xl">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-black text-2xl uppercase tracking-tighter">PLG Logic Engine</div>
                      <div className="text-slate-500 text-sm font-mono tracking-widest">v4.1 ACTIVE</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[75, 42, 91, 64].map((w, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-slate-400">
                          <span>MODULE_{i + 1}</span>
                          <span>{w}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w}%` }}
                            className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                    <div className="text-[#FF6B35] font-black mb-1">REAL-TIME INSIGHT:</div>
                    <div className="text-slate-300 font-mono text-sm leading-snug tracking-tight">
                      Expansion Revenue identified in segment: ENTERPRISE_UPGRADE. Triggering PQL alert to SDR team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2 */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                Dominating the Knowledge Graph <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">with Feature Utility.</span>
              </h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                We don't just write blogs; we build search-optimized software assets that capture users at the exact moment they need a solution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Programmatic Comparisons",
                  desc: "Automatically generating \"Your SaaS vs. Competitor\" pages that rank for high-intent \"Alternative To\" queries."
                },
                {
                  icon: MousePointer2,
                  title: "Interactive Tooling",
                  desc: "Building free \"Light\" versions of your features (calculators, checkers) that live on your site as lead magnets."
                },
                {
                  icon: Search,
                  title: "Semantic Doc SEO",
                  desc: "Optimizing your API docs so they appear as primary \"How-to\" snippets in AI search results (Gemini/Perplexity)."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 border border-slate-100">
                    <card.icon className="w-10 h-10 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 3 */}
        <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
            <Network className="w-96 h-96 text-[#FF6B35]" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: 'LTV Discovery', val: '4:1 Ratio', color: 'text-[#FF6B35]' },
                    { label: 'CAC Efficiency', val: '-18% MoM', color: 'text-[#FF6B35]' },
                    { label: 'Data Sync', val: 'Real-time', color: 'text-slate-400' },
                    { label: 'Expansion', val: 'High-Velocity', color: 'text-slate-400' }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-slate-800/50 rounded-[2.5rem] border border-slate-700/50 hover:bg-slate-800 transition-colors">
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                      <div className={`text-3xl font-black ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                  The Unit Economics <br />
                  <span className="text-[#FF6B35]">of Scale.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                    SaaS lives and dies by its numbers. We provide granular visibility into your growth funnel, pushing product usage data back into ad platforms through Reverse-ETL.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Reverse-ETL Data Flow", desc: "Pushing product usage data into Google/Meta so the algorithms bid on users likely to have High LTV, not just signups." },
                      { title: "Expansion Revenue Tracking", desc: "Monitoring how many users move from Starter to Enterprise as a result of our automated upgrade campaigns." },
                      { title: "CAC Payback Period Optimization", desc: "Reducing the time it takes to recoup acquisition costs, allowing you to reinvest in growth faster." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
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

        {/* The SaaS Growth Matrix */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">The SaaS Growth Matrix</h2>
              <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies fail B2B Software Founders.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Metric</th>
                    <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Agency</th>
                    <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads SaaS Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Primary KPI', gen: 'Leads / Clicks', frame: 'PQLs / MRR Growth' },
                    { metric: 'Focus Range', gen: 'Top-of-Funnel', frame: 'Full-Lifecycle (Retention/Expansion)' },
                    { metric: 'Tech Stack', gen: 'Basic Tracking', frame: 'Product Analytics & Reverse-ETL' },
                    { metric: 'Content Logic', gen: 'Keyword Volume', frame: 'Feature Utility & Comparison' },
                    { metric: 'Sales Alignment', gen: 'Disconnected', frame: 'Automated Pipeline Sync' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-10 text-xl font-black text-slate-900 border-b border-slate-50">{row.metric}</td>
                      <td className="p-10 text-xl text-center text-slate-500 font-medium border-b border-slate-50">{row.gen}</td>
                      <td className="p-10 text-xl text-center text-[#0F172A] font-black border-b border-slate-50 bg-[#FF6B35]/5">{row.frame}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep-Dive FAQ */}
        <section className="py-40 px-6 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-8 tracking-tighter">
                SaaS Growth <br />
                <span className="text-[#FF6B35]">Deep-Dive.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic">Technical answers for technical founders.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openFaq === i
                    ? "bg-white border-[#FF6B35]/30 shadow-2xl scale-[1.02]"
                    : "bg-white/50 border-slate-100 hover:border-[#FF6B35]/20 hover:bg-white"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 md:px-12 py-10 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-mono font-bold transition-colors ${openFaq === i ? "text-[#FF6B35]" : "text-slate-400"}`}>
                        0{i + 1}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-black transition-colors ${openFaq === i ? "text-[#0F172A]" : "text-slate-600 group-hover:text-[#0F172A]"}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 ml-4 p-4 rounded-full transition-all duration-500 ${openFaq === i ? "bg-[#FF6B35] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35]"
                      }`}>
                      <Plus className={`w-6 h-6 transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 md:px-12 pb-12 ml-14 md:ml-20">
                          <div className="w-full h-px bg-slate-100 mb-8" />
                          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                            {faq.answer}
                          </p>
                          <div className="mt-8 flex items-center gap-4 text-[#FF6B35] font-bold text-sm uppercase tracking-widest">
                            <Code className="w-4 h-4" />
                            <span>Product-Led Strategy Verified</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
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
                <Rocket className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-bounce" />
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Is Your Subscription <br />
                  <span className="text-[#FF6B35]">Model Leaking Revenue?</span>
                </h2>
                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Most SaaS companies have an "Acquisition" problem that is actually an "Activation" problem. Our SaaS Growth Loop Audit identifies where users are dropping off in your funnel, maps your competitors' "Alternative-to" SEO strategy, and builds your roadmap to a 4:1 LTV:CAC.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                  Claim My SaaS Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'Meta Ads', href: '/Meta-ads', icon: Share2, desc: 'Social performance engine.' },
                { label: 'YouTube Ads', href: '/youtube-ads', icon: Video, desc: 'Visual Intent Engine.' },
                { label: 'LinkedIn Ads', href: '/linkedin-ads', icon: Linkedin, desc: 'B2B Precision Pipeline.' },
                { label: 'TikTok Ads', href: '/tiktok-ads', icon: Music, desc: 'Entertainment Commerce.' },
                { label: 'Snapchat Ads', href: '/snapchat-ads', icon: Smartphone, desc: 'AR Commerce Engine.' },
                { label: 'Pinterest Ads', href: '/pinterest-ads', icon: Pin, desc: 'Predictive Commerce.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: ShoppingBag, desc: 'Signal Engineering.' },
                { label: 'Baidu Ads', href: '/baidu-ads', icon: Globe, desc: 'China Market Entry.' },
                { label: 'Yandex Ads', href: '/yandex-ads', icon: Zap, desc: 'Eurasian Growth.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Search authority hub.' },
                { label: 'Branding', href: '/branding', icon: Briefcase, desc: 'Market-Dominant Identity.' },
                { label: 'Performance', href: '/perforamance-marketing', icon: TrendingUp, desc: 'Scaling is a science.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Authority.' },
                { label: 'Analytics', href: '/analytics-and-automations', icon: Cpu, desc: 'Unified Intelligence.' }
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
