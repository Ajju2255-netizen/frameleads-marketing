'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  ShieldCheck,
  Activity,
  UserCheck,
  ClipboardList,
  Heart,
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
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Plus,
  Minus,
  Briefcase,
  Users,
  Building2,
  Video,
  Linkedin,
  Zap,
  Cpu,
  Layers,
  Shield,
  CreditCard,
  Banknote,
  PiggyBank,
  Wallet,
  Landmark,
  FileText,
  Lock,
  Cpu as FintechIcon
} from 'lucide-react'

// JSON-LD Structured Data for Financial Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Frameleads Financial Growth Engineering",
  "url": "https://frameleads.com/financial-services",
  "description": "Compliance-first digital growth for Fintech, Wealth Management, and Banking sectors.",
  "feesAndCommissionsSpecification": "https://frameleads.com/transparency",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "knowsAbout": ["Wealth Management", "Fintech Scaling", "Regulatory Compliance"]
}

export default function FinancialPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "Why is my Financial Brand not appearing in AI Overviews?",
      answer: "AI engines prioritize \"Source Credibility.\" If your site lacks deep-linked citations, credentialed authors, and structured data (Schema.org/FinancialService), the LLM views you as a \"Low-Trust\" source. Frameleads fixes this by injecting Knowledge Graph signals into your site's header."
    },
    {
      question: "How do we lower CAC in a highly competitive banking sector?",
      answer: "We stop bidding on broad keywords like \"Credit Card\" and move toward \"Outcome-Based Search.\" By targeting specific problems (e.g., \"Consolidating business debt for startups\"), we find \"Blue Ocean\" opportunities where competition is lower but intent is higher."
    },
    {
      question: "How do you handle financial marketing compliance?",
      answer: "Every piece of content, copy, and ad we produce undergoes a \"Regulatory Logic Check\" to ensure adherence to SEBI, FINRA, or FCA standards. We prioritize long-term brand safety over short-term click-bait."
    },
    {
      question: "What is deep-funnel bidding in fintech?",
      answer: "Instead of optimizing for app installs or lead form fills, we sync your backend CRM data (Salesforce, Dynamics) into Google and Meta. This allows the ad platforms to optimize for the actual 'Funded Account' or 'High-LTV Customer', reducing waste on low-intent clicks."
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
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[100px] -ml-72 -mb-72" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Financial Authority Snapshot */}
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
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Financial Vault Engine v4.0</div>
                <div className="flex gap-4 text-slate-400 font-mono text-[10px]">
                  <span>MODE: SECURE_ENCRYPTION</span>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-[#FF6B35]/5 rounded-2xl">
                        <Landmark className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-tight">Verified Institutional Strategy</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-6 leading-tight tracking-tight">
                      Financial Growth Summary
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                      <span className="font-bold text-[#0F172A] italic underline decoration-[#FF6B35]/30">The Strategy:</span> Frameleads engineers High-Trust Financial Ecosystems by aligning <span className="text-[#FF6B35] font-bold">Institutional Credibility</span> with Algorithmic Search Intent. Our 2026 framework utilizes Audit-Ready Ad Tracking and Semantic Authority Mapping, resulting in an average <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-0.5 rounded italic">35% reduction in CAC</span>.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Regulatory Status</div>
                      <div className="text-[#FF6B35] text-2xl font-black flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping" />
                        AUDIT-READY / COMPLIANT
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Growth Factor</div>
                      <div className="text-[#0F172A] text-3xl font-black">Institutional Scale</div>
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
                  ASSET AUTHORITY ENGINEERING 2026
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                  Precision in Wealth, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                    Engineered for <br />
                    Scale.
                  </span>
                </h1>
                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                  In finance, trust is the only currency. Frameleads builds High-Authority Financial Platforms that convert high-net-worth intent into long-term assets. From Fintech App Scaling to Wealth Management ABM.
                </p>
                <div className="flex">
                  <Link href="/contact" className="group relative px-12 py-8 bg-[#0F172A] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.3)]">
                    <span className="relative z-10 flex items-center gap-4">
                      Audit My Financial Growth Loop <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
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
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 font-mono text-[10px] text-[#FF6B35] space-y-1 text-right">
                    <div>ledger_verify(TXN:8312)</div>
                    <div>auth_map(Institutional)</div>
                    <div>SST_ACTIVE: true</div>
                  </div>

                  <div className="relative z-10 space-y-10">
                    {[
                      { icon: ShieldCheck, label: 'Compliance Status', val: 'Audit-Proof', color: 'text-[#FF6B35]' },
                      { icon: UserCheck, label: 'Entity Signal', val: 'Credentialed Authors', color: 'text-emerald-400' },
                      { icon: Activity, label: 'LTV Optimization', val: 'Backend CRM Sync', color: 'text-sky-400' },
                      { icon: Lock, label: 'Data Privacy', val: 'Fin-Grade Encryption', color: 'text-purple-400' }
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

                  {/* Asset Value Visual */}
                  <div className="mt-12 flex items-end gap-1 h-20 opacity-30">
                    {[40, 60, 50, 80, 70, 90, 85, 95, 90, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex-1 bg-[#FF6B35] rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
                {/* Orbital Rings */}
                <div className="absolute -top-20 -right-20 w-80 h-80 border border-[#FF6B35]/10 rounded-full animate-spin-slow pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-[#FF6B35]/5 rounded-full animate-reverse-spin pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillar 1: YMYL Trust-Signal */}
        <section className="py-32 px-6 relative bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-8 tracking-tighter">
                  Establishing Financial <br />
                  <span className="text-[#FF6B35]">E-E-A-T in the AI Era.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    In 2026, AI search engines (Gemini, Perplexity) only recommend financial providers who prove Absolute Integrity. We build your "Authority Moat" through high-fidelity human signals.
                  </p>

                  {[
                    { title: "Verified Author Entities", desc: "We link every piece of content to a credentialed financial expert (CFA, CA, or CFP) using Person Schema, ensuring search engines attribute expertise to real humans." },
                    { title: "Predictive Intent Mapping", desc: "We don't target \"Investment Tips.\" We target Life-Stage Triggers that signal high-value intent and institutional commitment." },
                    { title: "Compliance-First Content", desc: "Every ad and landing page undergoes a \"Regulatory Logic Check\" to ensure it meets SEBI, FINRA, or FCA standards before going live." }
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
                <div className="bg-[#0F172A] rounded-[4rem] p-12 shadow-2xl overflow-hidden relative border border-slate-800">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                      <ShieldCheck className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div>
                      <div className="text-white font-black text-2xl uppercase tracking-tighter">Trust Engine</div>
                      <div className="text-slate-500 text-sm font-mono tracking-widest">REGULATORY_VERIFIED</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#FF6B35] font-bold text-xs uppercase">Entity Authority Score</span>
                        <span className="text-emerald-400 font-mono text-[10px]">99.8% Signal</span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map(j => (
                          <div key={j} className="h-6 flex-1 bg-[#FF6B35] rounded-sm opacity-40" />
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-400 font-bold text-xs uppercase">Compliance Logic Check</span>
                        <span className="text-emerald-400 font-mono text-[10px]">Active</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: High-Fidelity Fintech Attribution */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-8 tracking-tighter">
                Closing the Loop: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">App Install to Active Deposit.</span>
              </h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                Financial services often suffer from "Broken Funnels." We fix the Signal Gap by syncing your backend CRM to the ad platform algorithms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Server,
                  title: "Server-Side Tracking",
                  desc: "We use private SST instances to ensure sensitive financial data is never leaked to browser-based trackers."
                },
                {
                  icon: Database,
                  title: "Deep-Funnel Bidding",
                  desc: "We don't optimize for lead forms. We optimize for 'Funded Accounts' by training AI on LTV-rich CRM data."
                },
                {
                  icon: FintechIcon,
                  title: "KYC Onboarding UX",
                  desc: "Designing frictionless onboarding flows that reduce verification drop-off by up to 20% via progressive disclosure."
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

        {/* Pillar 3: Wealth Management & ABM */}
        <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
            <Briefcase className="w-96 h-96 text-[#FF6B35]" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: 'CAC Reduction', val: '35% Saved', color: 'text-[#FF6B35]' },
                    { label: 'HNW Conversion', val: 'Precision Target', color: 'text-emerald-400' },
                    { label: 'Ad Compliance', val: '100% Adhered', color: 'text-sky-400' },
                    { label: 'Data Privacy', val: 'Fin-Grade', color: 'text-purple-400' }
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
                  Winning the <br />
                  <span className="text-[#FF6B35]">High-Net-Worth Search.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                    For Wealth Management and Institutional Finance, volume is irrelevant. Precision and credibility are the only drivers that matter.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "LinkedIn Account-Based Marketing (ABM)", desc: "Targeting decision-makers at specific firms with verified professional seniority to build brand salience." },
                      { title: "Niche Authority Content", desc: "Building deep-dive whitepapers on ESG or cross-border wealth flows that serve as high-converting lead magnets." },
                      { title: "Regional Trust Signals", desc: "Dominating local financial hub search (e.g. Bangalore) through regional entity mapping and institutional trust signals." }
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

        {/* Financial Marketing Matrix */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 tracking-tighter">The Financial Marketing Matrix</h2>
              <p className="text-2xl text-slate-500 font-medium italic">General agencies vs. Institutional Specialists.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white text-[#0F172A]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                    <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Agency</th>
                    <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads Financial Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Compliance Review', gen: 'Reactive / None', frame: 'Proactive / Audit-Ready' },
                    { metric: 'Tracking Logic', gen: 'Frontend Clicks', frame: 'Backend CRM / LTV Sync' },
                    { metric: 'Data Privacy', gen: 'Standard GDPR', frame: 'Fin-Grade Encryption / SST' },
                    { metric: 'KPI Priority', gen: 'Lead Volume', frame: 'Cost-per-Funded-Account' },
                    { metric: 'AI Strategy', gen: 'Generic Copy', frame: 'Credentialed Expert Review' }
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
            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-20 tracking-tighter text-center">Financial Marketing Deep-Dive</h2>
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
                <Shield className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-pulse" />
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Is Your Strategy a <br />
                  <span className="text-[#FF6B35]">Liability or an Asset?</span>
                </h2>
                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Financial brands are losing 30% of their ad spend to "Silent Signal Decay" and compliance friction. We identify your "Trust Gaps" and build a roadmap to institutional leadership.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                  Claim My Financial Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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
                { label: 'Healthcare Hub', href: '/healthcare-and-medical', icon: Landmark, desc: 'E-E-A-T Authority.' },
                { label: 'SaaS Hub', href: '/technology-and-saas', icon: Cpu, desc: 'Engineering for PLG.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'B2B LinkedIn', href: '/linkedin-ads', icon: Linkedin, desc: 'Precision Pipeline.' },
                { label: 'Baidu Search', href: '/baidu-ads', icon: Globe, desc: 'Global Market Entry.' },
                { label: 'Yandex Direct', href: '/yandex-ads', icon: Zap, desc: 'Neural Growth Ecosystem.' },
                { label: 'SEO Dominance', href: '/seo-services', icon: Search, desc: 'Authority & Rankings.' },
                { label: 'Web Engineering', href: '/website-development', icon: Code, desc: 'Architecture of Trust.' }
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
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 40s linear infinite;
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </>
  )
}
