"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";
import {
	services,
	industries,
	geosIndia,
	geosGlobal,
	type Industry,
	type Service,
	type Geo,
} from "@/lib/data";

// ───────────────────────────── Nav data shape ─────────────────────────
// All four mega-menu panels are fed from the taxonomy in lib/data so the
// nav surface stays in sync with the programmatic page space (no separate
// hand-curated lists drifting from the data layer).

const SERVICE_GROUPS: Array<{ heading: string; ids: string[] }> = [
	{
		heading: "Acquisition",
		ids: ["seo-services", "google-ads", "meta-ads", "linkedin-ads", "youtube-ads"],
	},
	{
		heading: "Conversion",
		ids: [
			"performance-marketing",
			"conversion-rate-optimization",
			"content-marketing",
			"ppc-management",
		],
	},
	{
		heading: "Lifecycle",
		ids: [
			"whatsapp-marketing",
			"email-marketing-and-automation-services",
			"social-media-marketing",
		],
	},
	{
		heading: "Foundation",
		ids: ["branding", "website-development", "analytics-and-automations"],
	},
];

const SERVICE_LABEL: Record<string, string> = Object.fromEntries(
	services.map((s) => [s.id, s.label]),
);
const HAND_CODED_SERVICE_LABEL: Record<string, string> = {
	branding: "Branding",
	"website-development": "Website Development",
	"analytics-and-automations": "Analytics & Automations",
	"email-marketing-and-automation-services": "Email & Automation",
};
function svcLabel(id: string): string {
	return SERVICE_LABEL[id] ?? HAND_CODED_SERVICE_LABEL[id] ?? id;
}
function svcHref(id: string): string {
	// Hand-built static service hubs live at /[id]; data-backed services either
	// have a hand-built /[id] or render via the catchall — both URLs work.
	return `/${id}`;
}

const RESOURCE_LINKS = [
	{
		label: "Blog",
		href: "/blogs",
		blurb: "Operator-grade marketing playbooks, reviewed quarterly.",
	},
	{
		label: "Reports & data studies",
		href: "/reports",
		blurb: "Original Frameleads research — CAC benchmarks, channel mix.",
	},
	{
		label: "Frameleads Growth System™",
		href: "/frameleads-growth-system",
		blurb: "The five-stage methodology Frameleads runs on every retainer.",
	},
	{
		label: "Glossary",
		href: "/glossary",
		blurb: "Definitions, formulas, India benchmarks for CAC / LTV / ROAS / 80+ metrics.",
	},
	{
		label: "Free tools & calculators",
		href: "/tools/roi-calculator",
		blurb: "CAC, LTV, payback, channel mix — 20+ tools.",
	},
	{
		label: "Comparison guides",
		href: "/vs",
		blurb: "Decision-stage scorecards: SEO vs PPC, agency vs in-house, more.",
	},
	{
		label: "How-to guides",
		href: "/how-to",
		blurb: "Playbooks across SEO, paid, retention.",
	},
	{
		label: "How we audit",
		href: "/how-we-audit",
		blurb: "The 30-min free-audit methodology, published openly.",
	},
];

const COMPANY_LINKS = [
	{ label: "About", href: "/about" },
	{ label: "Our team", href: "/our-team" },
	{ label: "Careers", href: "/careers" },
	{ label: "Editorial policy", href: "/editorial-policy" },
	{ label: "Academy", href: "/academy" },
	{ label: "Contact", href: "/contact" },
];

// Featured Indian metros + global priority cities for the Locations menu.
const INDIA_FEATURED_IDS = [
	"mumbai",
	"bangalore",
	"delhi-ncr",
	"hyderabad",
	"chennai",
	"pune",
	"ahmedabad",
	"kolkata",
];
const GLOBAL_FEATURED_IDS = ["dubai", "singapore", "london", "new-york", "toronto", "sydney"];

function geoByIds(ids: string[], pool: Geo[]): Geo[] {
	const m = new Map(pool.map((g) => [g.id, g]));
	return ids.map((id) => m.get(id)).filter((g): g is Geo => Boolean(g));
}

// ───────────────────────────── Menu hook ──────────────────────────────

function useDismissable(open: boolean, onClose: () => void) {
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		const onClick = (e: MouseEvent) => {
			if (!ref.current) return;
			if (!ref.current.contains(e.target as Node)) onClose();
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", onClick);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", onClick);
		};
	}, [open, onClose]);
	return ref;
}

// ───────────────────────────── Components ─────────────────────────────

type MenuKey = "services" | "industries" | "locations" | "resources" | null;

export default function Navbar() {
	const { trackButtonClick } = useAnalytics();
	const [openMenu, setOpenMenu] = useState<MenuKey>(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeAll = useCallback(() => {
		setOpenMenu(null);
		setMobileOpen(false);
	}, []);

	const containerRef = useDismissable(openMenu !== null, () => setOpenMenu(null));

	const navItemClass =
		"px-3 py-2 text-sm font-medium text-[#2D3748] transition-colors hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35] focus-visible:outline-offset-2 rounded";

	const toggle = (key: Exclude<MenuKey, null>) => {
		setOpenMenu((current) => (current === key ? null : key));
	};

	return (
		<>
			{/* Skip link for keyboard / screen-reader users */}
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[#2D3748] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-2 focus:outline-[#FF6B35]"
			>
				Skip to content
			</a>

			<header
				ref={containerRef}
				className="fixed inset-x-0 top-0 z-50 border-b border-[#FFE4D6]/40 bg-white/85 backdrop-blur-xl"
			>
				<nav
					aria-label="Primary"
					className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
				>
					{/* Logo */}
					<Link
						href="/"
						className="text-2xl font-bold focus-visible:outline-2 focus-visible:outline-[#FF6B35] focus-visible:outline-offset-2 rounded"
						onClick={() => {
							trackButtonClick("nav-home");
							closeAll();
						}}
						aria-label="Frameleads — home"
					>
						<span className="text-[#2D3748]">FRAMELE</span>
						<span className="text-[#FF6B35]">ADS</span>
					</Link>

					{/* Desktop menu */}
					<ul className="ml-10 hidden items-center gap-1 md:flex">
						<li>
							<MenuButton
								label="Services"
								isOpen={openMenu === "services"}
								onClick={() => toggle("services")}
							/>
						</li>
						<li>
							<MenuButton
								label="Industries"
								isOpen={openMenu === "industries"}
								onClick={() => toggle("industries")}
							/>
						</li>
						<li>
							<MenuButton
								label="Locations"
								isOpen={openMenu === "locations"}
								onClick={() => toggle("locations")}
							/>
						</li>
						<li>
							<MenuButton
								label="Resources"
								isOpen={openMenu === "resources"}
								onClick={() => toggle("resources")}
							/>
						</li>
						<li>
							<Link
								href="/about"
								className={navItemClass}
								onClick={() => trackButtonClick("nav-about")}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className={navItemClass}
								onClick={() => trackButtonClick("nav-contact")}
							>
								Contact
							</Link>
						</li>
						<li className="ml-2">
							<Link
								href="/free-marketing-audit?cta=navbar"
								onClick={() => trackButtonClick("nav-cta")}
							>
								<Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300">
									Free audit
								</Button>
							</Link>
						</li>
					</ul>

					{/* Mobile menu trigger */}
					<button
						type="button"
						className="md:hidden inline-flex items-center justify-center rounded p-2 text-[#2D3748] hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35] focus-visible:outline-offset-2"
						onClick={() => {
							trackButtonClick("mobile-menu");
							setMobileOpen((v) => !v);
						}}
						aria-expanded={mobileOpen}
						aria-controls="mobile-menu"
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</nav>

				{/* Desktop mega-menu panels */}
				{openMenu === "services" ? (
					<MegaPanel onClose={() => setOpenMenu(null)} ariaLabel="Services menu">
						<ServicesPanel />
					</MegaPanel>
				) : null}
				{openMenu === "industries" ? (
					<MegaPanel onClose={() => setOpenMenu(null)} ariaLabel="Industries menu">
						<IndustriesPanel />
					</MegaPanel>
				) : null}
				{openMenu === "locations" ? (
					<MegaPanel onClose={() => setOpenMenu(null)} ariaLabel="Locations menu">
						<LocationsPanel />
					</MegaPanel>
				) : null}
				{openMenu === "resources" ? (
					<MegaPanel onClose={() => setOpenMenu(null)} ariaLabel="Resources menu">
						<ResourcesPanel />
					</MegaPanel>
				) : null}
			</header>

			{/* Mobile drawer */}
			{mobileOpen ? (
				<MobileDrawer onClose={() => setMobileOpen(false)} />
			) : null}
		</>
	);
}

// ───────────────────────────── Sub-components ─────────────────────────

function MenuButton({
	label,
	isOpen,
	onClick,
}: {
	label: string;
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			aria-expanded={isOpen}
			aria-haspopup="true"
			onClick={onClick}
			className={`inline-flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35] focus-visible:outline-offset-2 ${
				isOpen ? "text-[#FF6B35]" : "text-[#2D3748]"
			}`}
		>
			{label}
			<ChevronDown
				aria-hidden
				className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
			/>
		</button>
	);
}

function MegaPanel({
	children,
	ariaLabel,
	onClose,
}: {
	children: React.ReactNode;
	ariaLabel: string;
	onClose: () => void;
}) {
	return (
		<div
			role="region"
			aria-label={ariaLabel}
			className="absolute inset-x-0 top-16 z-40 hidden border-t border-[#FFE4D6]/40 bg-white/95 shadow-[0_12px_36px_rgba(45,55,72,0.08)] backdrop-blur-xl md:block"
		>
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				{children}
				<div className="mt-4 flex justify-end">
					<button
						type="button"
						onClick={onClose}
						className="text-[12px] text-[#5A5A5A] hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

function PanelLink({ href, label, blurb }: { href: string; label: string; blurb?: string }) {
	return (
		<Link
			href={href}
			className="group block rounded-lg px-3 py-2 transition-colors hover:bg-[#FFE4D6]/30 focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
		>
			<div className="text-[14px] font-medium text-[#2D3748] group-hover:text-[#FF6B35]">
				{label}
			</div>
			{blurb ? (
				<div className="mt-0.5 text-[12px] leading-snug text-[#5A5A5A]">{blurb}</div>
			) : null}
		</Link>
	);
}

function ServicesPanel() {
	return (
		<div>
			<div className="grid gap-6 md:grid-cols-4">
				{SERVICE_GROUPS.map((g) => (
					<div key={g.heading}>
						<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
							{g.heading}
						</div>
						<ul className="mt-2 space-y-0.5">
							{g.ids.map((id) => (
								<li key={id}>
									<PanelLink href={svcHref(id)} label={svcLabel(id)} />
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="mt-6 border-t border-[#FFE4D6]/60 pt-4">
				<Link
					href="/digital-marketing-services"
					className="text-[13px] font-semibold text-[#FF6B35] hover:underline focus-visible:underline"
				>
					Browse all services →
				</Link>
			</div>
		</div>
	);
}

function IndustriesPanel() {
	const tierA = industries.filter((i) => i.tier === "A");
	const tierB = industries.filter((i) => i.tier === "B");
	return (
		<div>
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Tier A · priority verticals ({tierA.length})
					</div>
					<ul className="mt-2 grid grid-cols-1 gap-0.5 sm:grid-cols-2">
						{tierA.map((i) => (
							<li key={i.id}>
								<PanelLink href={`/${i.id}-marketing`} label={`${i.label}`} />
							</li>
						))}
					</ul>
				</div>
				<div>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Tier B verticals ({tierB.length})
					</div>
					<ul className="mt-2 grid grid-cols-1 gap-0.5 sm:grid-cols-2">
						{tierB.map((i) => (
							<li key={i.id}>
								<PanelLink href={`/${i.id}-marketing`} label={`${i.label}`} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="mt-6 border-t border-[#FFE4D6]/60 pt-4">
				<Link
					href="/industries"
					className="text-[13px] font-semibold text-[#FF6B35] hover:underline focus-visible:underline"
				>
					Industries hub — full directory →
				</Link>
			</div>
		</div>
	);
}

function LocationsPanel() {
	const indiaCities = geoByIds(INDIA_FEATURED_IDS, geosIndia);
	const globalCities = geoByIds(GLOBAL_FEATURED_IDS, geosGlobal);
	return (
		<div>
			<div className="grid gap-6 md:grid-cols-3">
				<div>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						India · tier 1
					</div>
					<ul className="mt-2 space-y-0.5">
						{indiaCities.map((g) => (
							<li key={g.id}>
								<PanelLink href={`/digital-marketing-in-${g.id}`} label={g.name} />
							</li>
						))}
					</ul>
				</div>
				<div>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Global priority
					</div>
					<ul className="mt-2 space-y-0.5">
						{globalCities.map((g) => (
							<li key={g.id}>
								<PanelLink
									href={`/${g.id === "dubai" || g.id === "singapore" ? "digital-marketing-in-" + g.id : "seo-services-in-" + g.id}`}
									label={g.name}
								/>
							</li>
						))}
					</ul>
				</div>
				<div>
					<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Country pillars
					</div>
					<ul className="mt-2 space-y-0.5">
						<li>
							<PanelLink href="/digital-marketing-in-india" label="India" />
						</li>
						<li>
							<PanelLink href="/digital-marketing-in-uae" label="UAE" />
						</li>
						<li>
							<PanelLink href="/digital-marketing-in-saudi-arabia" label="Saudi Arabia" />
						</li>
						<li>
							<PanelLink href="/digital-marketing-in-singapore" label="Singapore" />
						</li>
						<li>
							<PanelLink href="/digital-marketing-in-unitedstates" label="United States" />
						</li>
						<li>
							<PanelLink href="/digital-marketing-in-unitedkingdom" label="United Kingdom" />
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-6 border-t border-[#FFE4D6]/60 pt-4">
				<Link
					href="/locations"
					className="text-[13px] font-semibold text-[#FF6B35] hover:underline focus-visible:underline"
				>
					Locations hub — all {geosIndia.length + geosGlobal.length} cities →
				</Link>
			</div>
		</div>
	);
}

function ResourcesPanel() {
	return (
		<div>
			<div className="grid gap-2 md:grid-cols-2">
				{RESOURCE_LINKS.map((r) => (
					<PanelLink key={r.href} href={r.href} label={r.label} blurb={r.blurb} />
				))}
			</div>
			<div className="mt-6 border-t border-[#FFE4D6]/60 pt-4">
				<ul className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[#5A5A5A]">
					{COMPANY_LINKS.map((c) => (
						<li key={c.href}>
							<Link href={c.href} className="hover:text-[#FF6B35] focus-visible:underline">
								{c.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// ───────────────────────────── Mobile drawer ──────────────────────────

function MobileDrawer({ onClose }: { onClose: () => void }) {
	const [openSection, setOpenSection] = useState<MenuKey>(null);
	const tierA = industries.filter((i) => i.tier === "A");
	const tierB = industries.filter((i) => i.tier === "B");
	const indiaCities = geoByIds(INDIA_FEATURED_IDS, geosIndia);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onClose]);

	const sectionToggle = (key: Exclude<MenuKey, null>) =>
		setOpenSection((s) => (s === key ? null : key));

	return (
		<>
			<button
				type="button"
				aria-label="Close menu overlay"
				className="fixed inset-0 z-[55] bg-[#2D3748]/30 backdrop-blur-sm md:hidden"
				onClick={onClose}
			/>
			<aside
				id="mobile-menu"
				role="dialog"
				aria-modal="true"
				aria-label="Site menu"
				className="fixed inset-y-0 right-0 z-[60] flex w-[88vw] max-w-sm flex-col bg-white shadow-2xl md:hidden"
				style={{ paddingTop: "max(env(safe-area-inset-top, 0px), 16px)" }}
			>
				<div className="flex items-center justify-between border-b border-[#FFE4D6] px-4 pb-3">
					<span className="text-lg font-bold">
						<span className="text-[#2D3748]">FRAMELE</span>
						<span className="text-[#FF6B35]">ADS</span>
					</span>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close menu"
						className="rounded p-2 text-[#2D3748] hover:text-[#FF6B35] focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
					<ul className="space-y-1">
						<MobileAccordion
							label="Services"
							open={openSection === "services"}
							onToggle={() => sectionToggle("services")}
						>
							{SERVICE_GROUPS.map((g) => (
								<div key={g.heading} className="mt-2">
									<div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
										{g.heading}
									</div>
									<ul className="mt-1 space-y-0.5">
										{g.ids.map((id) => (
											<li key={id}>
												<Link
													href={svcHref(id)}
													onClick={onClose}
													className="block rounded px-2 py-1.5 text-[14px] text-[#2D3748] hover:bg-[#FFE4D6]/30"
												>
													{svcLabel(id)}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</MobileAccordion>

						<MobileAccordion
							label="Industries"
							open={openSection === "industries"}
							onToggle={() => sectionToggle("industries")}
						>
							<div className="mt-2">
								<div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Tier A
								</div>
								<ul className="mt-1 space-y-0.5">
									{tierA.map((i) => (
										<li key={i.id}>
											<Link
												href={`/${i.id}-marketing`}
												onClick={onClose}
												className="block rounded px-2 py-1.5 text-[14px] text-[#2D3748] hover:bg-[#FFE4D6]/30"
											>
												{i.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-3">
								<div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
									Tier B
								</div>
								<ul className="mt-1 space-y-0.5">
									{tierB.map((i) => (
										<li key={i.id}>
											<Link
												href={`/${i.id}-marketing`}
												onClick={onClose}
												className="block rounded px-2 py-1.5 text-[14px] text-[#2D3748] hover:bg-[#FFE4D6]/30"
											>
												{i.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<Link
								href="/industries"
								onClick={onClose}
								className="mt-3 block text-[13px] font-semibold text-[#FF6B35] hover:underline"
							>
								Industries hub →
							</Link>
						</MobileAccordion>

						<MobileAccordion
							label="Locations"
							open={openSection === "locations"}
							onToggle={() => sectionToggle("locations")}
						>
							<ul className="mt-2 space-y-0.5">
								{indiaCities.map((g) => (
									<li key={g.id}>
										<Link
											href={`/digital-marketing-in-${g.id}`}
											onClick={onClose}
											className="block rounded px-2 py-1.5 text-[14px] text-[#2D3748] hover:bg-[#FFE4D6]/30"
										>
											{g.name}
										</Link>
									</li>
								))}
							</ul>
							<Link
								href="/locations"
								onClick={onClose}
								className="mt-3 block text-[13px] font-semibold text-[#FF6B35] hover:underline"
							>
								All {geosIndia.length + geosGlobal.length} locations →
							</Link>
						</MobileAccordion>

						<MobileAccordion
							label="Resources"
							open={openSection === "resources"}
							onToggle={() => sectionToggle("resources")}
						>
							<ul className="mt-2 space-y-0.5">
								{RESOURCE_LINKS.map((r) => (
									<li key={r.href}>
										<Link
											href={r.href}
											onClick={onClose}
											className="block rounded px-2 py-1.5 text-[14px] text-[#2D3748] hover:bg-[#FFE4D6]/30"
										>
											{r.label}
										</Link>
									</li>
								))}
							</ul>
						</MobileAccordion>

						<li>
							<Link
								href="/about"
								onClick={onClose}
								className="block rounded px-3 py-2.5 text-[15px] font-medium text-[#2D3748] hover:bg-[#FFE4D6]/30"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								onClick={onClose}
								className="block rounded px-3 py-2.5 text-[15px] font-medium text-[#2D3748] hover:bg-[#FFE4D6]/30"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<div className="border-t border-[#FFE4D6] px-4 py-4">
					<Link
						href="/free-marketing-audit?cta=navbar-mobile"
						onClick={onClose}
						className="block w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#FF6B35]/25 hover:from-[#FF8A50] hover:to-[#FF6B35]"
					>
						Get free audit
					</Link>
				</div>
			</aside>
		</>
	);
}

function MobileAccordion({
	label,
	open,
	onToggle,
	children,
}: {
	label: string;
	open: boolean;
	onToggle: () => void;
	children: React.ReactNode;
}) {
	const sectionId = `mobile-section-${label.toLowerCase()}`;
	return (
		<li>
			<button
				type="button"
				aria-expanded={open}
				aria-controls={sectionId}
				onClick={onToggle}
				className="flex w-full items-center justify-between rounded px-3 py-2.5 text-[15px] font-medium text-[#2D3748] hover:bg-[#FFE4D6]/30 focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
			>
				{label}
				<ChevronDown
					aria-hidden
					className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
				/>
			</button>
			{open ? (
				<div id={sectionId} className="px-3 pb-2">
					{children}
				</div>
			) : null}
		</li>
	);
}
