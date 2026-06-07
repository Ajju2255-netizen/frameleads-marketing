'use client'

import Link from "next/link"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/use-analytics"
import { useState } from "react"

type MegaCol = {
  heading: string
  items: { label: string; href: string; description?: string }[]
}

// Services mega-menu — 12 service hubs + catalog
const SERVICES_COLS: MegaCol[] = [
  {
    heading: "Performance + paid",
    items: [
      { label: "Performance Marketing", href: "/performance-marketing" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Meta Ads", href: "/meta-ads" },
      { label: "LinkedIn Ads", href: "/linkedin-ads" },
      { label: "YouTube Ads", href: "/youtube-ads" },
      { label: "PPC Management", href: "/ppc-management" },
    ],
  },
  {
    heading: "Organic + lifecycle",
    items: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Content Marketing", href: "/content-marketing" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
      { label: "WhatsApp Marketing", href: "/whatsapp-marketing" },
      { label: "Email & Automation", href: "/email-marketing-and-automation-services" },
      { label: "Conversion Rate Optimization", href: "/conversion-rate-optimization" },
    ],
  },
]

// Industries mega-menu — top 12 + "see all"
const INDUSTRIES_COLS: MegaCol[] = [
  {
    heading: "B2B + tech",
    items: [
      { label: "B2B SaaS", href: "/b2b-saas-marketing" },
      { label: "Technology & SaaS", href: "/technology-and-saas" },
      { label: "Fintech", href: "/fintech-marketing" },
      { label: "Healthtech", href: "/healthtech-marketing" },
      { label: "Edtech", href: "/edtech-marketing" },
      { label: "Manufacturing", href: "/manufacturing-marketing" },
    ],
  },
  {
    heading: "Consumer + D2C",
    items: [
      { label: "D2C Brands", href: "/d2c-marketing" },
      { label: "E-commerce", href: "/ecommerce" },
      { label: "Fashion D2C", href: "/fashion-d2c-marketing" },
      { label: "Beauty D2C", href: "/beauty-d2c-marketing" },
      { label: "F&B / Restaurants", href: "/fnb-marketing" },
      { label: "Hospitality", href: "/hospitality-marketing" },
    ],
  },
  {
    heading: "Regulated + service",
    items: [
      { label: "Real Estate", href: "/real-estate-marketing" },
      { label: "Healthcare", href: "/healthcare-and-medical" },
      { label: "Financial Services", href: "/financial-services" },
      { label: "Insurance", href: "/insurance-marketing" },
      { label: "Education", href: "/education-marketing" },
      { label: "Professional Services", href: "/professional-services-marketing" },
    ],
  },
]

// Locations mega-menu — top India metros + global. India Tier-1 routes use the
// hand-curated location hub where it exists (Bangalore), else fall back to the
// hand-curated money page for that city (Mumbai), else to the Tier-3 commercial
// cell (Delhi NCR / Pune / Hyderabad / Chennai). Every target URL returns 200.
const LOCATIONS_COLS: MegaCol[] = [
  {
    heading: "India — Tier 1",
    items: [
      { label: "Bangalore", href: "/digital-marketing-in-bangalore" },
      { label: "Mumbai", href: "/seo-company-in-mumbai", description: "Money page" },
      { label: "Delhi NCR", href: "/seo-services-in-delhi-ncr", description: "SEO cell" },
      { label: "Pune", href: "/seo-services-in-pune", description: "SEO cell" },
      { label: "Hyderabad", href: "/seo-services-in-hyderabad", description: "SEO cell" },
      { label: "Chennai", href: "/seo-services-in-chennai", description: "SEO cell" },
    ],
  },
  {
    heading: "Global priority",
    items: [
      { label: "Dubai", href: "/digital-marketing-in-dubai" },
      { label: "UAE", href: "/digital-marketing-in-uae" },
      { label: "Saudi Arabia", href: "/digital-marketing-in-saudi-arabia" },
      { label: "Singapore", href: "/digital-marketing-in-singapore" },
      { label: "United Kingdom", href: "/digital-marketing-in-unitedkingdom" },
      { label: "United States", href: "/digital-marketing-in-unitedstates" },
    ],
  },
]

// Resources mega-menu — master library + sub-hubs + question hubs
const RESOURCES_COLS: MegaCol[] = [
  {
    heading: "Long-form library",
    items: [
      { label: "Resources hub", href: "/resources", description: "Master index — guides, glossary, comparisons, calculators" },
      { label: "Guides", href: "/resources/guides", description: "Service / industry / location guides + cross-cells" },
      { label: "Playbooks", href: "/resources/playbooks", description: "Service × industry × geo commercial cells" },
      { label: "Reports", href: "/reports", description: "Original data studies + CAC benchmarks" },
      { label: "Blog", href: "/blogs", description: "Editorial — operator-grade essays" },
    ],
  },
  {
    heading: "Reference + tools",
    items: [
      { label: "Glossary", href: "/glossary", description: "87 plain-English marketing terms" },
      { label: "Comparisons", href: "/vs", description: "Honest side-by-side scorecards" },
      { label: "Calculators", href: "/tools", description: "19 free interactive operator tools" },
      { label: "Benchmarks", href: "/resources/benchmarks", description: "CAC + CPC bands per industry × geo" },
      { label: "Templates", href: "/resources/templates", description: "Operator templates + checklists" },
    ],
  },
  {
    heading: "Question hubs",
    items: [
      { label: "How-to guides", href: "/how-to", description: "Step-by-step operator playbooks" },
      { label: "What-is definitions", href: "/what-is", description: "Plain-English answers" },
      { label: "How-much pricing", href: "/how-much", description: "Honest pricing bands" },
      { label: "Best-of lists", href: "/best", description: "Criteria-first curation" },
      { label: "Why-rationale", href: "/why", description: "Reasoning behind decisions" },
      { label: "Is-it decisions", href: "/is-it", description: "Yes/no decision frameworks" },
    ],
  },
]

// Company mega-menu — about, press, case studies
const COMPANY_COLS: MegaCol[] = [
  {
    heading: "About Frameleads",
    items: [
      { label: "About us", href: "/about", description: "Who we are, what we believe" },
      { label: "Our team", href: "/our-team", description: "Senior operators who run the work" },
      { label: "Case studies", href: "/case-studies", description: "Anonymised engagement breakdowns" },
      { label: "Careers", href: "/careers", description: "Open operator roles" },
    ],
  },
  {
    heading: "Methodology + trust",
    items: [
      { label: "Frameleads Growth System™", href: "/frameleads-growth-system", description: "Open published methodology" },
      { label: "How we audit", href: "/how-we-audit", description: "What happens in the free 30-min audit" },
      { label: "Editorial policy", href: "/editorial-policy", description: "How we source + refresh + disclose" },
      { label: "Academy", href: "/academy", description: "Self-paced curriculum" },
      { label: "Contact", href: "/contact", description: "All channels: email, phone, WhatsApp" },
    ],
  },
]

type DropdownKey = "services" | "industries" | "locations" | "resources" | "company" | null

export default function Navbar() {
  const { trackButtonClick } = useAnalytics()
  const [open, setOpen] = useState<DropdownKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (pageName: string) => trackButtonClick(`nav-${pageName}`)

  const closeAll = () => {
    setOpen(null)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#FFE4D6]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold" onClick={() => { handleNavClick("home"); closeAll(); }}>
                <span className="text-[#2D3748]">FRAMELE</span><span className="text-[#FF6B35]">ADS</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <DropdownTrigger label="Services" k="services" open={open} setOpen={setOpen} />
              <DropdownTrigger label="Industries" k="industries" open={open} setOpen={setOpen} />
              <DropdownTrigger label="Locations" k="locations" open={open} setOpen={setOpen} />
              <DropdownTrigger label="Resources" k="resources" open={open} setOpen={setOpen} />
              <DropdownTrigger label="Company" k="company" open={open} setOpen={setOpen} />

              <Link
                href="/contact"
                className="text-[#5A5A5A] hover:text-[#FF6B35] px-3 py-2 text-sm font-medium transition-colors duration-300"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </Link>

              <Link href="/free-marketing-audit?source=navbar&cta=navbar-cta" onClick={() => handleNavClick("cta")} className="ml-2">
                <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Get Free Audit
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link href="/free-marketing-audit?source=navbar&cta=navbar-mobile-cta" onClick={() => handleNavClick("mobile-cta")}>
                <Button size="sm" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white text-xs font-semibold rounded-lg shadow-md shadow-[#FF6B35]/25">
                  Free audit
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#5A5A5A] hover:text-[#FF6B35]"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => { trackButtonClick("mobile-menu"); setMobileOpen((v) => !v) }}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop mega-menus (single panel per open key) */}
        {open && (
          <div
            className="hidden lg:block absolute inset-x-0 top-16 bg-white/97 backdrop-blur-xl border-b border-[#FFE4D6]/50 shadow-lg shadow-[#FF6B35]/5"
            onMouseEnter={() => setOpen(open)}
            onMouseLeave={() => setOpen(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <MegaMenu k={open} closeAll={closeAll} handleNavClick={handleNavClick} />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto" role="dialog" aria-label="Mobile navigation">
          <div className="px-4 py-6 space-y-6">
            {(["services", "industries", "locations", "resources", "company"] as const).map((k) => (
              <MobileSection key={k} k={k} closeAll={closeAll} handleNavClick={handleNavClick} />
            ))}
            <div className="pt-4 border-t border-[#FFE4D6]/40">
              <Link
                href="/contact"
                onClick={() => { handleNavClick("contact"); closeAll() }}
                className="block px-2 py-3 text-base font-medium text-[#2D3748] hover:text-[#FF6B35]"
              >
                Contact
              </Link>
              <Link
                href="/free-marketing-audit?source=navbar&cta=navbar-mobile-drawer"
                onClick={() => { handleNavClick("mobile-drawer-cta"); closeAll() }}
                className="mt-3 block w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-[#FF6B35]/25"
              >
                Get a free 30-min audit →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function DropdownTrigger({
  label,
  k,
  open,
  setOpen,
}: {
  label: string
  k: Exclude<DropdownKey, null>
  open: DropdownKey
  setOpen: (k: DropdownKey) => void
}) {
  return (
    <button
      type="button"
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 rounded-md ${
        open === k ? "text-[#FF6B35] bg-[#FFE4D6]/30" : "text-[#5A5A5A] hover:text-[#FF6B35]"
      }`}
      aria-expanded={open === k}
      onMouseEnter={() => setOpen(k)}
      onClick={() => setOpen(open === k ? null : k)}
    >
      {label}
      <ChevronDown className={`h-4 w-4 transition-transform ${open === k ? "rotate-180" : ""}`} />
    </button>
  )
}

function MegaMenu({
  k,
  closeAll,
  handleNavClick,
}: {
  k: Exclude<DropdownKey, null>
  closeAll: () => void
  handleNavClick: (n: string) => void
}) {
  const config: Record<Exclude<DropdownKey, null>, { cols: MegaCol[]; footer: { label: string; href: string }[] }> = {
    services: {
      cols: SERVICES_COLS,
      footer: [
        { label: "All services →", href: "/digital-marketing-services" },
        { label: "Service pricing per geo →", href: "/seo-services-pricing" },
      ],
    },
    industries: {
      cols: INDUSTRIES_COLS,
      footer: [{ label: "All 31 industries →", href: "/industries" }],
    },
    locations: {
      cols: LOCATIONS_COLS,
      footer: [
        { label: "All locations →", href: "/locations" },
        { label: "Money pages (every city) →", href: "/seo-company-in-bangalore" },
      ],
    },
    resources: {
      cols: RESOURCES_COLS,
      footer: [
        { label: "Resources master →", href: "/resources" },
        { label: "All guides (6,047) →", href: "/resources/guides" },
      ],
    },
    company: {
      cols: COMPANY_COLS,
      footer: [{ label: "Book a free 30-min audit →", href: "/free-marketing-audit?source=navbar&cta=navbar-megafooter" }],
    },
  }
  const { cols, footer } = config[k]
  return (
    <div>
      <div className={`grid gap-8 ${cols.length === 3 ? "lg:grid-cols-3" : cols.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-4"}`}>
        {cols.map((col) => (
          <div key={col.heading}>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-3">{col.heading}</div>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => { handleNavClick(`mega-${k}-${item.href}`); closeAll() }}
                    className="group block rounded-md px-2 py-1.5 -mx-2 hover:bg-[#FFE4D6]/30 transition-colors"
                  >
                    <div className="text-[14px] font-medium text-[#2D3748] group-hover:text-[#FF6B35]">{item.label}</div>
                    {item.description && (
                      <div className="text-[12px] text-[#5A5A5A] mt-0.5">{item.description}</div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-[#FFE4D6]/40 flex flex-wrap gap-4">
        {footer.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            onClick={() => { handleNavClick(`mega-${k}-footer`); closeAll() }}
            className="text-[13px] font-semibold text-[#FF6B35] hover:underline"
          >
            {f.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function MobileSection({
  k,
  closeAll,
  handleNavClick,
}: {
  k: "services" | "industries" | "locations" | "resources" | "company"
  closeAll: () => void
  handleNavClick: (n: string) => void
}) {
  const [open, setOpen] = useState(false)
  const sourceMap: Record<typeof k, { label: string; cols: MegaCol[] }> = {
    services: { label: "Services", cols: SERVICES_COLS },
    industries: { label: "Industries", cols: INDUSTRIES_COLS },
    locations: { label: "Locations", cols: LOCATIONS_COLS },
    resources: { label: "Resources", cols: RESOURCES_COLS },
    company: { label: "Company", cols: COMPANY_COLS },
  }
  const { label, cols } = sourceMap[k]
  return (
    <div className="border-b border-[#FFE4D6]/40 pb-2">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-base font-semibold text-[#2D3748]"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={`h-5 w-5 transition-transform text-[#5A5A5A] ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-1 space-y-4 pb-3">
          {cols.map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] mb-2">{col.heading}</div>
              <ul className="space-y-0.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => { handleNavClick(`mobile-${k}-${item.href}`); closeAll() }}
                      className="block py-2 text-[14px] text-[#2D3748] hover:text-[#FF6B35]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
