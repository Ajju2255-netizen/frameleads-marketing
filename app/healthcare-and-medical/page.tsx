'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  Stethoscope,
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
  Shield
} from 'lucide-react'

// JSON-LD Structured Data for Healthcare Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Frameleads Healthcare Growth",
  "url": "https://frameleads.com/healthcare-marketing",
  "description": "HIPAA-compliant healthcare marketing and patient acquisition for hospitals, specialized clinics, and telehealth brands.",
  "medicalSpecialty": [
    "Digital Health Strategy",
    "Medical SEO",
    "Patient Lead Generation"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  }
}

export default function HealthcarePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "Can I use Meta (Facebook) Ads for my medical practice in 2026?",
      answer: "Yes, but with Strict Targeting Guardrails. Meta has removed \"Health-Interest\" targeting to protect privacy. Frameleads uses Creative-Led Targeting—where the content of the ad attracts the right patient—and uses Server-Side CAPI to ensure no patient-specific health data is shared back with Meta."
    },
    {
      question: "How long does it take for a new medical site to rank in Google?",
      answer: "Due to the YMYL nature of healthcare, Google is more cautious. While a standard site might rank in 3 months, a medical site often takes 6–9 months to establish the necessary \"Authority Signals.\" We accelerate this through strategic PR and physician-authored backlink profiles."
    },
    {
      question: "How do you ensure HIPAA compliance in tracking?",
      answer: "We use Server-Side GTM (Google Tag Manager) hosted on private cloud environments. This ensures that Protected Health Information (PHI) is anonymized or stripped before any signals are sent to advertising platforms like Google or Meta."
    },
    {
      question: "What is the importance of Medical Schema for SEO?",
      answer: "Medical Schema (JSON-LD) tells search engines exactly what conditions you treat, who your doctors are (via NPI), and what credentials they hold. This is a primary signal for E-E-A-T and is essential for appearing in AI-powered search results."
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
          <div className="absolute inset-0 z-0 text-[#FF6B35]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B35]/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[100px] -ml-72 -mb-72" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Medical Authority Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto border border-slate-200 bg-white shadow-2xl rounded-3xl overflow-hidden mb-32 group hover:border-[#FF6B35]/30 transition-all duration-500"
            >
              <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Medical Intelligence Console v3.1</div>
                <div className="flex gap-4 text-slate-400 font-mono text-[10px]">
                  <span>MODE: HIPAA_VERIFIED</span>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-3 h-3 text-[#FF6B35] animate-pulse" />
                    <Activity className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-[#FF6B35]/5 rounded-2xl">
                        <Stethoscope className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-tight">Verified Healthcare Strategy</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                      Healthcare Growth Summary
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                      <span className="font-bold text-slate-900 italic underline decoration-[#FF6B35]/30">The Strategy:</span> Frameleads engineers Patient-Centric Digital Ecosystems by aligning <span className="text-[#FF6B35] font-bold">Clinical Credibility</span> with Search Intent. We move beyond generic lead gen to HIPAA-Compliant Conversion Pathing. Our 2026 framework utilizes Verified Medical Schema resulting in an average <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-0.5 rounded italic">40% increase in appointments</span>.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Compliance Status</div>
                      <div className="text-[#FF6B35] text-2xl font-black flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping" />
                        SECURE / HIPAA
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest">Authority Score</div>
                      <div className="text-slate-900 text-3xl font-black">Top 1% Rank</div>
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
                  MEDICAL AUTHORITY ENGINEERING 2026
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-[0.9] tracking-tighter">
                  Excellence in Care, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] animate-gradient-x">
                    Engineered for <br />
                    Discovery.
                  </span>
                </h1>
                <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                  In healthcare, trust is the only currency. Frameleads builds High-Authority Medical Platforms that connect patients with the care they need. From Local SEO for Specialized Clinics to Telehealth Growth Systems, we own the patient journey.
                </p>
                <div className="flex">
                  <Link href="/contact" className="group relative px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(255,107,53,0.3)]">
                    <span className="relative z-10 flex items-center gap-4">
                      Audit My Practice's Digital Trust <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
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
                    <div>verify_credential(NPI:8312)</div>
                    <div>schema.push(MedicalEntity)</div>
                    <div>privacy: encrypted_aes256</div>
                  </div>

                  <div className="relative z-10 space-y-10">
                    {[
                      { icon: ShieldCheck, label: 'Data Guardrails', val: 'HIPAA Compliant', color: 'text-[#FF6B35]' },
                      { icon: UserCheck, label: 'Patient Verification', val: 'Verified Profiles', color: 'text-[#FF8A50]' },
                      { icon: Activity, label: 'Conversion Rate', val: '+40% Appointments', color: 'text-[#FF6B35]' },
                      { icon: Database, label: 'Server-Side GTM', val: 'PHI-Anonymized', color: 'text-slate-400' }
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
                    {[30, 50, 40, 70, 60, 80, 75, 90, 85, 100].map((h, i) => (
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
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl opacity-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillar 1: YMYL & E-E-A-T */}
        <section className="py-32 px-6 relative bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-2 bg-[#FF6B35] mb-10 rounded-full" />
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                  Establishing Clinical <br />
                  <span className="text-[#FF6B35]">Authority in the AI Era.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    In 2026, AI search engines only recommend medical providers who prove Absolute Expertise. We build your "Authority Moat" through high-integrity technical signals.
                  </p>

                  {[
                    { title: "Verified Provider Profiles", desc: "We optimize individual doctor profiles (NPI sync) to ensure Google and AI models recognize the human expertise behind the clinic." },
                    { title: "Evidence-Based Content", desc: "Peer-reviewed content utilizing MedicalSymptom and MedicalCondition Schema to ensure AI models categorize your expertise accurately." },
                    { title: "The \"Patient Trust\" Loop", desc: "Managing high-velocity reviews across Google Business and Healthgrades to signal real-world reliability to both patients and algorithms." }
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
                    <div className="p-3 bg-slate-800 rounded-2xl border border-[#FF6B35]/20">
                      <Layers className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <div>
                      <div className="text-white font-black text-2xl uppercase tracking-tighter">Authority Engine</div>
                      <div className="text-slate-500 text-sm font-mono tracking-widest">E-E-A-T VERIFIED</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#FF6B35] font-bold text-xs uppercase">Entity Sync Status</span>
                        <span className="text-slate-400 font-mono text-[10px]">98.2% Accurate</span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map(j => (
                          <div key={j} className="h-6 flex-1 bg-[#FF6B35] rounded-sm opacity-40" />
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#FF6B35] font-bold text-xs uppercase">Peer Review Validation</span>
                        <span className="text-slate-400 font-mono text-[10px]">Enabled</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '92%' }}
                          className="h-full bg-[#FF6B35]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: HIPAA-Compliant Lead Engineering */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                Conversion Without <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50]">Compromise.</span>
              </h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                Patient data is sacred. We build Privacy-First Funnels that satisfy both the patient and the regulator while maximizing appointment flow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Server,
                  title: "Server-Side Tracking",
                  desc: "We use private GTM setups to ensure no PHI is ever transmitted to third-party ad platforms like Meta or Google."
                },
                {
                  icon: ClipboardList,
                  title: "EHR-Integrated Booking",
                  desc: "Integrating Epic, Cerner, or ModMed directly into your site for real-time secure appointment scheduling."
                },
                {
                  icon: Target,
                  title: "Condition-Specific Funnels",
                  desc: "Mapping the patient journey from \"Symptom Search\" to \"Specialist Appointment\" with diagnostic accuracy."
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
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 3: Local Dominance & Telehealth */}
        <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
            <Globe className="w-96 h-96 text-[#FF6B35]" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: 'Map Pack Domination', val: 'Top 3 Focus', color: 'text-[#FF6B35]' },
                    { label: 'Telehealth Adoption', val: '+55% Growth', color: 'text-[#FF8A50]' },
                    { label: 'Patient Retention', val: '94% Retention', color: 'text-[#FF6B35]' },
                    { label: 'Trust Signals', val: 'Verified 2026', color: 'text-slate-400' }
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
                  <span className="text-[#FF6B35]">"Care Near Me" Search.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                    For physical clinics, Local SEO is the primary driver. For digital providers, it's about boundaryless trust and accessibility.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Hyper-Local Entity Signals", desc: "Dominating cardiologist, dermatologist, and surgeon queries in specific districts through local data sync." },
                      { title: "Video-Based Patient Education", desc: "Using physician-on-camera content to reduce anxiety and increase surgical consultation conversion." },
                      { title: "Telehealth UX Design", desc: "Designing frictionless remote care experiences focusing on insurance verification and ease of access." }
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

        {/* Healthcare Marketing Matrix */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">The Healthcare Marketing Matrix</h2>
              <p className="text-2xl text-slate-500 font-medium italic">Why generic agencies fail medical practice leaders.</p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-2xl bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-10 text-left text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                    <th className="p-10 text-center text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">General Agency</th>
                    <th className="p-10 text-center text-sm font-black text-[#FF6B35] uppercase tracking-widest border-b border-slate-100 bg-[#FF6B35]/5">Frameleads Medical Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Compliance', gen: 'Basic GDPR', frame: 'Full HIPAA / SOC2 Data Guardrails' },
                    { metric: 'Content Strategy', gen: 'Keyword Volume Focus', frame: 'Clinical Accuracy & YMYL Priority' },
                    { metric: 'Ad Tracking', gen: 'Standard Pixels (Risk)', frame: 'Server-Side / PHI-Anonymized' },
                    { metric: 'KPIs', gen: 'Leads / Clicks', frame: 'Qualified Appointments / Patient ROI' },
                    { metric: 'Schema Usage', gen: 'Generic WebPage', frame: 'MedicalEntity / Physician / Hospital' }
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
                Medical Marketing <br />
                <span className="text-[#FF6B35]">Deep-Dive.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic">High-authority answers for healthcare decision makers.</p>
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
                            <ShieldCheck className="w-4 h-4" />
                            <span>HIPAA Compliant Strategy Verified</span>
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
                <Shield className="w-20 h-20 text-[#FF6B35] mx-auto mb-8 animate-pulse" />
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Is Your Patient <br />
                  <span className="text-[#FF6B35]">Pipeline Compliant?</span>
                </h2>
                <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Most medical practices are sitting on a goldmine of reputation but a technical minefield of privacy risks. Our Healthcare Digital Audit identifies your "Trust Gaps" and builds a roadmap to clinical authority.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link href="/contact" className="group px-12 py-8 bg-[#FF6B35] text-white rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                  Claim My Healthcare Growth Audit <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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
                { label: 'SaaS Hub', href: '/technology-and-saas', icon: Cpu, desc: 'Engineering for PLG.' },
                { label: 'Google Ads', href: '/google-ads', icon: Target, desc: 'Value-Based Bidding.' },
                { label: 'B2B LinkedIn', href: '/linkedin-ads', icon: Linkedin, desc: 'Precision Pipeline.' },
                { label: 'Shopify Ads', href: '/shopify-ads', icon: Heart, desc: 'Ecomm Growth logic.' },
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
