/**
 * Programmatic blog generators.
 *
 * Produces ~600 BlogPost objects from seed data — 4 series × 15 services × 13 cities.
 * Each post is a fully-formed BlogPost: TLDR + structured body (Section[]) + FAQs +
 * references + serviceRefs + cityTag + pillarSlug. Generation is purely functional:
 * memoised at module-eval time so subsequent calls return the same array reference.
 *
 * Quality posture:
 *   - Every post is substantively differentiated by service × city using data pulled
 *     from services.json, geos-india.json + geos-global.json, and service-depth.ts
 *     (pricing tiers + channel mix + process phases).
 *   - References pull from `referencesFor()` so each post cites authoritative sources.
 *   - Programmatic posts deliberately stay OUT of `editorialBlogPosts()` and `llms.txt`
 *     to keep signal-to-noise clean; they DO ship in sitemap + llms-full.txt.
 */

import type { BlogPost, Section } from "./blogs";
import type { Reference } from "@/components/templates/ReferencesBlock";
import type { FAQItem } from "@/components/templates/FAQBlock";
import { services, geosAll, type Service, type Geo } from "./index";
import { getServiceDepth } from "./service-depth";
import { referencesFor } from "./references";

// ─────────────────────────────────────────────────────────────────
// City roster — 13 high-commercial-intent cities (12 India + 1 global anchor)
// ─────────────────────────────────────────────────────────────────

const PROGRAMMATIC_CITY_IDS = [
	"bangalore",
	"mumbai",
	"delhi-ncr",
	"hyderabad",
	"chennai",
	"pune",
	"kolkata",
	"ahmedabad",
	"jaipur",
	"kochi",
	"gurgaon",
	"noida",
	"dubai",
] as const;

function programmaticCities(): Geo[] {
	return PROGRAMMATIC_CITY_IDS.map((id) => geosAll.find((g) => g.id === id)).filter(
		(g): g is Geo => Boolean(g),
	);
}

/** Service ids that participate in the programmatic blog series. */
function programmaticServiceIds(): string[] {
	return services.map((s) => s.id);
}

/** Default published date for programmatic posts. */
const DEFAULT_PUBLISHED = "2026-01-15";
const DEFAULT_MODIFIED = "2026-06-08";
const DEFAULT_READ_TIME = "8 min";
const AUTHOR_ID = "ajsal-abbas";

// ─────────────────────────────────────────────────────────────────
// Helpers: copy fragments anchored to taxonomy data
// ─────────────────────────────────────────────────────────────────

function cityShort(city: Geo): string {
	return city.alternateNames?.[0] ?? city.name;
}

function sublocalitySentence(city: Geo): string {
	const landmarks = city.landmarks.slice(0, 4).join(", ");
	return `${city.name} sub-locality buyer profiles diverge sharply — ${landmarks} each operate as distinct sub-markets with their own buying triggers and creative resonance.`;
}

function topIndustryClause(city: Geo): string {
	const top = city.topIndustries.slice(0, 3).join(", ");
	return `${city.name}'s commercial density skews toward ${top}, which shapes which paid channels deliver compounding leverage versus diminishing returns.`;
}

function serviceContextLine(service: Service, city: Geo): string {
	return `${service.label} engagements in ${city.name} run inside a ${service.avgCpcInr} ₹ CPC band, with cohort CAC typically clearing at ${service.avgCacInr} ₹. Time-to-first-signal: ${service.timeToResults}.`;
}

// ─────────────────────────────────────────────────────────────────
// Best-in-city series — "Best {Service} Agency in {City} 2026"
// ─────────────────────────────────────────────────────────────────

function buildBestInCityPost(service: Service, city: Geo): BlogPost {
	const lc = service.label.toLowerCase();
	const slug = `best-${service.id}-agency-in-${city.id}-2026`;
	const depth = getServiceDepth(service);

	const tldr: string[] = [
		`The "best" ${lc} agency in ${city.name} depends on stage (pre-PMF vs scaled) and category (D2C, B2B, real-estate, lead-gen).`,
		`Realistic ${city.name} retainers 2026: ${depth.pricingTiers[0].monthlyBand} for Starter, ${depth.pricingTiers[1].monthlyBand} for Scale.`,
		`Skip any agency that promises specific ROAS in writing — that's a sales tactic, not a forecast.`,
		`Run a 30-day fixed-scope discovery sprint before signing a 6-month engagement.`,
		`Key signal: who builds the creative? In 2026, ${lc} is creative-bottlenecked. Outsourced creative = ceiling on outcomes.`,
	];

	const body: Section[] = [
		{
			type: "p",
			text: `If you're searching **${service.label.toLowerCase()} agency in ${city.name}**, you've already noticed the problem: every agency landing page looks identical. ROAS guarantees, the same logos, "5X growth" case studies with no methodology. The category has become noise.`,
		},
		{
			type: "p",
			text: `This is the operator framework Frameleads uses internally when prospects ask us to benchmark a ${city.name} ${lc} shortlist. Same set of questions we'd want a buyer to ask *us*. Use it.`,
		},
		{
			type: "callout",
			tone: "tldr",
			text: `The "best" ${lc} agency for your ${city.name} business depends on three variables: stage (pre-PMF / scaling / scaled), category (${city.topIndustries.slice(0, 3).join(" / ")}), and what's already broken (creative supply, audience targeting, retention, or attribution). No single agency is best across all three.`,
		},
		{
			type: "h2",
			text: `Why ${city.name} ${lc} is structurally different from generic "India ${service.label}"`,
		},
		{ type: "p", text: topIndustryClause(city) },
		{ type: "p", text: sublocalitySentence(city) },
		{
			type: "p",
			text: `${serviceContextLine(service, city)} The framework below filters that signal.`,
		},
		{
			type: "h2",
			text: `The 5 criteria that separate operators from sales teams`,
		},
		{
			type: "ol",
			items: [
				`**Methodology depth.** Black-box ${lc} is operationally fragile. Ask for a documented framework — named phases, named deliverables, named KPIs. If the answer is hand-wavy, walk.`,
				`**Senior-operator weekly load.** ${city.name} ${lc} needs senior judgement calls weekly. Ask: "who's running my account by week 3?" Junior media buyers can execute; they can't make calls.`,
				`**Category-specific track record.** Generic "we do ${lc} for everyone" under-performs for ${city.name} categories that need specialised literacy (${city.topIndustries[0]}, ${city.topIndustries[1]}, ${city.topIndustries[2]}).`,
				`**Attribution + reporting rigour.** Post-iOS, Meta-pixel-only attribution is broken. Ask for CAPI + GTM Server-Side + GA4 reconciliation as the default stack.`,
				`**Transparency on pricing + exit.** Healthy agencies publish bands openly and offer month-to-month terms after the first 3 months. Lock-in contracts in week 1 signal weak operators.`,
			],
		},
		{
			type: "h2",
			text: `Realistic ${city.name} ${lc} retainers in 2026`,
		},
		{
			type: "stat-bar",
			stats: depth.pricingTiers.slice(0, 3).map((tier) => ({
				label: tier.name,
				value: tier.monthlyBand,
			})),
		},
		{
			type: "p",
			text: `Bands above are agency fees only — excludes media spend. Most ${city.name} brands run 3–5× fees on media at the Starter + Scale tiers. Anyone quoting sub-band rates (e.g. ₹50k–₹1L/mo for a funded brand) is operating below sustainable rate or compressing deliverables dramatically.`,
		},
		{
			type: "h2",
			text: `Red flags — walk away if you see these`,
		},
		{
			type: "ul",
			items: [
				"Ranking or ROAS guarantees in writing.",
				`Generic "India ${service.label}" proposals without ${city.name}-specific framing.`,
				"No published methodology framework.",
				"Junior-only account team after week 4.",
				"Multi-year lock-in pushed in week 1.",
				"Vanity-metric reporting (reach, impressions, follower count).",
				"No AI Overview / GEO strategy.",
			],
		},
		{
			type: "h2",
			text: `The 30-day discovery sprint — test before committing`,
		},
		{
			type: "p",
			text: `Before signing a 6-month engagement, run a fixed-scope discovery sprint. 30 days, fixed price (₹1L–₹3L for ${city.name} SMB; ₹3L–₹6L for mid-market):`,
		},
		{
			type: "ol",
			items: [
				`**Week 1 — Audit.** Technical audit, compliance review, ${city.name} competitor benchmarking, attribution baseline.`,
				`**Week 2 — ICP + sub-locality mapping.** ${city.name} sub-market segmentation, buyer-persona definition, primary keyword/audience cluster.`,
				`**Week 3 — Quick wins shipped.** 2–3 priority fixes deployed, 2–3 priority assets shipped with full instrumentation.`,
				`**Week 4 — Strategy + 6-month roadmap.** Documented strategy, projected outcomes, named senior consultant, pricing for ongoing retainer.`,
			],
		},
		{
			type: "h2",
			text: `Frameleads' position in ${city.name}`,
		},
		{
			type: "p",
			text: `Frameleads runs ${lc} on the [Frameleads Growth System™](/frameleads-growth-system) — Map · Magnet · Machine · Multiply · Measure. Same senior operator weekly, CAPI + server-side attribution from day one, ${city.name}-grade sub-locality awareness, and creative supply pipelines (15–40 variants/month at Scale tier). [Book a free 30-min ${city.name} ${lc} audit](/free-marketing-audit?service=${service.id}&geo=${city.id}&cta=blog-best-${service.id}-${city.id}) — we'll grade your current setup against the framework above.`,
		},
	];

	const faqs: FAQItem[] = [
		{
			question: `How much does ${lc} cost in ${city.name} in 2026?`,
			answer: `${city.name} ${lc} retainers run in three bands: Starter ${depth.pricingTiers[0].monthlyBand}, Scale ${depth.pricingTiers[1].monthlyBand}, Enterprise ${depth.pricingTiers[2].monthlyBand}. Fees only — media spend is separate (typically 3–5× fees). Frameleads pricing follows these bands openly.`,
		},
		{
			question: `How long until ${lc} shows results in ${city.name}?`,
			answer: `${service.timeToResults} for the channel; ${city.name}'s competitive density in ${city.topIndustries.slice(0, 2).join(" + ")} typically pushes timelines to the higher end of the band. Leading-indicator readout from week 2; cohort-level outcomes from month 2.`,
		},
		{
			question: `Should we hire a ${city.name}-resident agency or is remote OK?`,
			answer: `For most engagements, remote-with-travel works as well as ${city.name}-resident — provided the agency has ${city.name} sub-locality awareness, IST-overlap working hours, travels for kick-off + quarterly reviews. For categories where daily in-person coordination is required (premium concierge marketing, certain BFSI relationships), ${city.name}-resident is worth the premium.`,
		},
		{
			question: `Do we need separate agencies for ${service.label} and other channels?`,
			answer: `Not in 2026. SEO + paid + lifecycle + GEO are now too interlinked for separate vendors. Hire one full-stack agency, or build one full-stack in-house team — separate vendors create coordination overhead that outweighs cost savings.`,
		},
		{
			question: `What's a red flag in a ${city.name} ${lc} agency pitch?`,
			answer: `Three big ones: (1) Specific ROAS guarantees in writing — nobody honest offers these. (2) No documented methodology framework. (3) Multi-year lock-in pushed in week 1. Healthy operators are confident enough to offer 30-day exit clauses after the initial 3-month engagement.`,
		},
	];

	return {
		slug,
		title: `Best ${service.label} Agency in ${city.name} (2026 Operator's Guide)`,
		description: `Operator-grade framework for evaluating ${lc} agencies in ${city.name} 2026 — criteria, realistic costs, red flags, and a 30-day discovery sprint to test before committing.`,
		authorId: AUTHOR_ID,
		datePublished: DEFAULT_PUBLISHED,
		dateModified: DEFAULT_MODIFIED,
		type: "best-in-city",
		category: service.label,
		categorySlug: service.id,
		primaryKeyword: `best ${lc} agency in ${city.name.toLowerCase()}`,
		cluster: service.label,
		tldr,
		readTime: DEFAULT_READ_TIME,
		body,
		faqs,
		references: referencesFor({ serviceId: service.id }),
		serviceRefs: [service.id],
		cityTag: city.id,
		pillarSlug: pillarSlugForService(service.id),
		relatedSlugs: [],
	};
}

// ─────────────────────────────────────────────────────────────────
// Cost-in-city series — "How Much Does {Service} Cost in {City} in 2026"
// ─────────────────────────────────────────────────────────────────

function buildCostInCityPost(service: Service, city: Geo): BlogPost {
	const lc = service.label.toLowerCase();
	const slug = `${service.id}-cost-in-${city.id}-2026`;
	const depth = getServiceDepth(service);

	const tldr: string[] = [
		`${city.name} ${lc} retainers 2026: ${depth.pricingTiers[0].monthlyBand} Starter, ${depth.pricingTiers[1].monthlyBand} Scale, ${depth.pricingTiers[2].monthlyBand} Enterprise (fees only, excludes media).`,
		`Total monthly spend = fees + media — typical media multiplier 3-5× at Starter/Scale, 2-4× at Enterprise.`,
		`CPC band: ${service.avgCpcInr} ₹; cohort CAC: ${service.avgCacInr} ₹. ${city.name} competitive density pushes higher in ${city.topIndustries[0]} + ${city.topIndustries[1]}.`,
		`Quoted retainers below band ranges signal compressed deliverables, junior-only teams, or hidden upsells.`,
	];

	const body: Section[] = [
		{
			type: "p",
			text: `Honest pricing context first: ${city.name} ${lc} retainers in 2026 run inside well-defined bands. Quotes below the bands typically come with compressed deliverables (no senior weekly load, no creative supply pipeline, no CAPI setup) or hidden media-management fees.`,
		},
		{
			type: "h2",
			text: `${city.name} ${lc} pricing — three tiers, what each includes`,
		},
		{
			type: "stat-bar",
			stats: depth.pricingTiers.map((t) => ({
				label: t.name,
				value: t.monthlyBand,
			})),
		},
		...depth.pricingTiers.map((tier): Section => ({
			type: "callout" as const,
			tone: "info" as const,
			title: `${tier.name} — ${tier.monthlyBand}`,
			text: `Best for: ${tier.bestFor}. ${tier.mediaContext} Includes: ${tier.includes.join("; ")}.`,
		})),
		{
			type: "h2",
			text: `What drives ${city.name} ${lc} costs above or below the band`,
		},
		{
			type: "ul",
			items: [
				`**Category-specific complexity.** ${city.topIndustries[0]} + ${city.topIndustries[1]} categories in ${city.name} carry regulatory + compliance overhead (RBI / SEBI / RERA / DPDP depending on vertical) that increases senior time required by 20-40%.`,
				`**Creative supply intensity.** Brands shipping 30+ creative variants/month require dedicated production capacity, pushing retainers into Scale-tier band even at modest media spend.`,
				`**Sub-locality coverage.** ${city.name} brands targeting multi-locality (${city.landmarks.slice(0, 3).join(" + ")}) need parallel ad-set structures and locality-specific creative — higher than single-locality programs.`,
				`**Attribution stack depth.** Server-side GTM + Meta CAPI + Google enhanced + LinkedIn CAPI + post-purchase survey adds 4-8 senior hours/week beyond default pixel setup.`,
			],
		},
		{
			type: "h2",
			text: `Media spend math — what to budget alongside fees`,
		},
		{
			type: "p",
			text: `Fees are only one side of the equation. Media spend at Scale tier typically runs 3-5× fees: a ₹5L/mo retainer = ₹15-25L/mo total monthly investment. The right media multiplier depends on category economics:`,
		},
		{
			type: "ul",
			items: [
				`D2C with sub-₹2,000 AOV: 4-6× fees typically (high volume of low-AOV transactions).`,
				`B2B SaaS or premium D2C with ₹50k+ AOV: 2-3× fees (smaller volume, longer cycles).`,
				`Lead-gen for real estate / luxury / BFSI: 3-5× fees (mixed volume + cycle).`,
			],
		},
		{
			type: "h2",
			text: `Red flags in ${city.name} ${lc} pricing`,
		},
		{
			type: "ul",
			items: [
				`Quotes below ₹1L/mo for a "full ${lc} program" — under-priced engagements ship junior-only and skip the most leverage-positive work (creative supply, attribution rigor).`,
				`Vague "media management fee = X% of spend" without a fixed retainer floor — incentivises overspending, not better outcomes.`,
				`No pricing for the discovery sprint — discovery should be a separately-priced, fixed-scope engagement (₹1-6L typically).`,
				`Multi-year lock-ins offered in the first call — signals weak retention dynamics.`,
			],
		},
		{
			type: "h2",
			text: `Frameleads ${city.name} ${lc} engagement model`,
		},
		{
			type: "p",
			text: `[Frameleads](/) runs ${lc} on a three-tier model matching the bands above. Discovery sprint priced separately. Month-to-month after the initial 3 months. Full pricing transparency on the [${service.label} hub](/${service.id}) and the [Frameleads Growth System™](/frameleads-growth-system).`,
		},
	];

	const faqs: FAQItem[] = [
		{
			question: `What's the cheapest realistic ${lc} retainer in ${city.name}?`,
			answer: `${depth.pricingTiers[0].monthlyBand} for the Starter tier from a senior-led operator. Anything below that ships junior-only execution without the senior weekly load that makes ${lc} compound.`,
		},
		{
			question: `Should I pay a percentage of media spend instead of a fixed retainer?`,
			answer: `No. Percentage-of-spend models incentivise the agency to grow your media budget rather than your outcomes. Fixed retainers + transparent reporting align incentives correctly — agency wins when your CAC drops, not when your media spend grows.`,
		},
		{
			question: `How much should I budget total (fees + media) for ${city.name} ${lc}?`,
			answer: `At the Scale tier, total monthly investment typically runs 4-6× fees (so a ₹5L retainer = ₹20-30L total). At Enterprise, 3-5×. At Starter, 4-6× (smaller absolute numbers but similar ratio).`,
		},
		{
			question: `Is ${city.name} ${lc} more expensive than Tier-2 city pricing?`,
			answer: `Yes, typically 10-25% higher than equivalent Tier-2 city engagements. Driver: senior-operator availability + competitive media costs in ${city.name}. Tier-2 cities (Indore, Coimbatore, Visakhapatnam) typically run lower CPCs but harder to source senior operator capacity.`,
		},
		{
			question: `Does Frameleads work on discovery sprints?`,
			answer: `Yes. The Frameleads ${city.name} ${lc} discovery sprint is a 30-day fixed-scope engagement priced ₹1-6L depending on scope. Includes audit, ICP mapping, 2-3 quick-win shipments, and 6-month strategic roadmap. [Book a free 30-min scoping call](/free-marketing-audit?service=${service.id}&geo=${city.id}&cta=blog-cost-${service.id}-${city.id}).`,
		},
	];

	return {
		slug,
		title: `How Much Does ${service.label} Cost in ${city.name} in 2026?`,
		description: `Realistic ${city.name} ${lc} retainer bands 2026 — Starter / Scale / Enterprise pricing, media-spend multipliers, what drives cost above/below the band, and red flags.`,
		authorId: AUTHOR_ID,
		datePublished: DEFAULT_PUBLISHED,
		dateModified: DEFAULT_MODIFIED,
		type: "cost-in-city",
		category: service.label,
		categorySlug: service.id,
		primaryKeyword: `${lc} cost in ${city.name.toLowerCase()}`,
		cluster: service.label,
		tldr,
		readTime: DEFAULT_READ_TIME,
		body,
		faqs,
		references: referencesFor({ serviceId: service.id }),
		serviceRefs: [service.id],
		cityTag: city.id,
		pillarSlug: pillarSlugForService(service.id),
		relatedSlugs: [`best-${service.id}-agency-in-${city.id}-2026`],
	};
}

// ─────────────────────────────────────────────────────────────────
// How-to-hire series — "How to Hire a {Service} Agency in {City}"
// ─────────────────────────────────────────────────────────────────

function buildHowToHirePost(service: Service, city: Geo): BlogPost {
	const lc = service.label.toLowerCase();
	const slug = `how-to-hire-${service.id}-agency-in-${city.id}`;
	const depth = getServiceDepth(service);

	const tldr: string[] = [
		`Hire ${city.name} ${lc} agencies via a 4-stage process: shortlist → 30-min scoping → 30-day discovery sprint → 3-month engagement with 30-day exit clause.`,
		`Score shortlist against 7 criteria: methodology depth, senior-operator load, category fit, sub-locality awareness, GEO + AI Overview strategy, attribution rigor, pricing transparency.`,
		`Realistic ${city.name} hiring timeline: 4-8 weeks from first call to contract signed.`,
		`The single most important question: who is the senior operator and what's their weekly load?`,
	];

	const body: Section[] = [
		{
			type: "p",
			text: `Hiring a ${lc} agency in ${city.name} feels harder than it should — every proposal reads identically, every agency claims the same wins. This is the operator framework Frameleads uses internally when buyers ask us how to benchmark a shortlist.`,
		},
		{
			type: "h2",
			text: `The 4-stage hiring process`,
		},
		{
			type: "ol",
			items: [
				`**Stage 1 — Shortlist (1 week).** Build a list of 5-8 candidates. Source from referrals (best signal), the [/${service.id} hub](/${service.id}), industry awards (less reliable), and Google Search "${lc} agency in ${city.name}" (mixed signal). Discard agencies with zero published thought leadership — they're operating opaquely.`,
				`**Stage 2 — 30-minute scoping calls (1-2 weeks).** One call per shortlisted agency. Ask the 7 criteria questions below. Discard 50% of the shortlist by end of this stage.`,
				`**Stage 3 — 30-day discovery sprint (4 weeks).** Run a fixed-scope, fixed-price discovery sprint with 1-2 finalists. Frameleads' sprint format: audit → ICP mapping → 2-3 quick-win shipments → 6-month roadmap. Cost ₹1-6L depending on scope.`,
				`**Stage 4 — 3-month engagement with 30-day exit clause (3 months).** Sign the engagement that comes out of the discovery sprint with a 30-day mutual exit clause. Healthy operators are confident enough to offer this; lock-in contracts in week 1 signal weak retention.`,
			],
		},
		{
			type: "h2",
			text: `The 7 criteria — score each shortlist candidate`,
		},
		{
			type: "ol",
			items: [
				`**Methodology depth.** Do they have a documented operating system (named phases + deliverables + KPIs)? Frameleads publishes the [Frameleads Growth System™](/frameleads-growth-system) openly. Ask competitors for their equivalent.`,
				`**Senior-operator weekly load.** Is the senior operator who runs the audit the one who'll run your account? What's their active retainer count? Healthy load: 3-4 per senior; 10+ is a red flag.`,
				`**Category fit.** ${city.name} concentration is ${city.topIndustries.slice(0, 3).join(", ")}. Does the agency have proven references in your specific category?`,
				`**Sub-locality awareness.** Ask: "how would you adapt this campaign for ${city.landmarks[0]} vs ${city.landmarks[1]} vs ${city.landmarks[2]}?" The specificity of the answer reveals sub-market literacy.`,
				`**GEO + AI Overview strategy.** In 2026, ${lc} agencies without an explicit AI Overview + Perplexity + ChatGPT citation strategy are operating on 2023 assumptions. Ask for their measurement framework.`,
				`**Attribution rigor.** Ask for their attribution stack. Acceptable answer must include CAPI + GTM Server-Side + GA4 + post-purchase survey reconciliation. If they reference Meta-Pixel-only, they're under-instrumented.`,
				`**Pricing + exit transparency.** Are pricing bands published openly? What's the exit clause? Frameleads bands: ${depth.pricingTiers[0].monthlyBand} Starter, ${depth.pricingTiers[1].monthlyBand} Scale.`,
			],
		},
		{
			type: "h2",
			text: `Questions to ask on the 30-min scoping call`,
		},
		{
			type: "ol",
			items: [
				`"What does your weekly reporting look like? Send a redacted sample." (Tests reporting maturity.)`,
				`"Who builds the creative — in-house or outsourced?" (In 2026, ${lc} is creative-bottlenecked; outsourced = ceiling.)`,
				`"What's your attribution stack including server-side?" (Filters under-instrumented operators.)`,
				`"What's the smallest engagement you'd take, and why?" (Tests honesty + capacity.)`,
				`"How would you fire yourself in 18 months?" (Tests confidence + alignment.)`,
				`"What's your active AI Overview / Perplexity citation share for current clients?" (Filters 2023-era operators.)`,
				`"What's the exit clause after the initial engagement?" (Healthy: 30-day mutual. Red flag: 12+ month lock-in.)`,
			],
		},
		{
			type: "h2",
			text: `${city.name}-specific hiring nuances`,
		},
		{ type: "p", text: topIndustryClause(city) },
		{
			type: "p",
			text: `${city.name}'s ${city.topIndustries[0]}-heavy density means agencies serving multiple ${city.topIndustries[0]} clients have stronger pattern-matching. ${sublocalitySentence(city)}`,
		},
		{
			type: "h2",
			text: `Frameleads hiring flow`,
		},
		{
			type: "p",
			text: `Frameleads' standard hiring flow: free 30-min audit (no pitch, just diagnosis) → fixed-scope discovery sprint → 3-month engagement with 30-day exit. [Book the free audit](/free-marketing-audit?service=${service.id}&geo=${city.id}&cta=blog-howto-${service.id}-${city.id}) — we'll review your current ${lc} setup against the 7 criteria and tell you the three highest-leverage moves, even if you don't engage us.`,
		},
	];

	const faqs: FAQItem[] = [
		{
			question: `How long does the ${city.name} ${lc} hiring process take?`,
			answer: `4-8 weeks end-to-end: 1 week shortlisting, 1-2 weeks scoping calls, 4 weeks discovery sprint with finalist(s), 1 week contract negotiation. Compressing this timeline below 4 weeks typically means signing without proper diligence.`,
		},
		{
			question: `Should I run multiple discovery sprints in parallel with 2-3 agencies?`,
			answer: `Generally no — too much internal time investment. Better: shortlist down to 1 strong finalist after scoping calls, run 1 discovery sprint, and use the sprint deliverables as your scope baseline. If the finalist underperforms in the sprint, run a second sprint with the next candidate.`,
		},
		{
			question: `What's a fair price for a ${city.name} ${lc} discovery sprint?`,
			answer: `₹1-3L for ${city.name} SMB scope; ₹3-6L for mid-market or funded brand scope. Discovery sprints below ₹1L compress deliverables; above ₹6L typically means scope creep into the engagement itself.`,
		},
		{
			question: `Do I need a contract longer than 3 months?`,
			answer: `Not initially. Sign 3-month engagements with 30-day mutual exit clauses. After two successful quarterly reviews, extend to 6-12 month terms. Lock-in contracts pushed in week 1 signal weak retention dynamics on the agency side.`,
		},
		{
			question: `How do I evaluate ${city.name} ${lc} agencies without inside-industry knowledge?`,
			answer: `Three external signals: (1) Do they publish detailed thought leadership (not generic blog content)? (2) Are senior operators publicly active on LinkedIn with named POV? (3) Do their case-study claims include named clients + verifiable metrics, not "anonymous SaaS brand grew 5X"?`,
		},
	];

	return {
		slug,
		title: `How to Hire a ${service.label} Agency in ${city.name} (2026 Operator's Guide)`,
		description: `${city.name} ${lc} hiring framework — 4-stage process, 7 evaluation criteria, the 7 questions to ask on scoping calls, and a 30-day discovery sprint format.`,
		authorId: AUTHOR_ID,
		datePublished: DEFAULT_PUBLISHED,
		dateModified: DEFAULT_MODIFIED,
		type: "how-to-hire",
		category: service.label,
		categorySlug: service.id,
		primaryKeyword: `how to hire ${lc} agency in ${city.name.toLowerCase()}`,
		cluster: service.label,
		tldr,
		readTime: DEFAULT_READ_TIME,
		body,
		faqs,
		references: referencesFor({ serviceId: service.id }),
		serviceRefs: [service.id],
		cityTag: city.id,
		pillarSlug: pillarSlugForService(service.id),
		relatedSlugs: [
			`best-${service.id}-agency-in-${city.id}-2026`,
			`${service.id}-cost-in-${city.id}-2026`,
		],
	};
}

// ─────────────────────────────────────────────────────────────────
// Questions-to-ask series — 1 per service (not per city)
// ─────────────────────────────────────────────────────────────────

function buildQuestionsToAskPost(service: Service): BlogPost {
	const lc = service.label.toLowerCase();
	const slug = `questions-to-ask-${service.id}-agency-india-2026`;
	const depth = getServiceDepth(service);

	const tldr: string[] = [
		`12 questions to ask before hiring a ${lc} agency in India — designed to filter operators from sales teams in a 30-min scoping call.`,
		`The single most diagnostic question: "Who's the senior operator and what's their active retainer count?"`,
		`Healthy answers reveal documented methodology, in-house creative supply, server-side attribution, 3-4 senior retainer load, and 30-day mutual exit clauses.`,
		`Red flags: ranking/ROAS guarantees, percentage-of-spend pricing, no published methodology, 12+ month lock-ins offered in week 1.`,
	];

	const questions = [
		{
			q: `Who's the senior operator on my account and what's their active retainer count?`,
			a: `Senior load >4 active retainers = attention dilution. Senior operators capped at 3-4 retainers ensures the person who diagnosed your problem stays on the account weekly.`,
		},
		{
			q: `What does your weekly reporting look like — send a redacted sample.`,
			a: `Real performance reports show cohort-level ROAS × creative × audience week-over-week with next-week actions. High-level slide decks signal junior teams reporting up to C-level dashboards instead of operating decisions.`,
		},
		{
			q: `What's your attribution stack including server-side?`,
			a: `Acceptable answer must include Meta CAPI + GTM Server-Side + GA4 + post-purchase survey reconciliation. If they reference Meta-Pixel-only or "we trust the in-platform numbers", they're under-instrumented for post-iOS reality.`,
		},
		{
			q: `Who builds the creative — in-house or outsourced?`,
			a: `In 2026, ${lc} is creative-bottlenecked. Outsourced creative = ceiling on outcomes. Best operators have in-house creative or a tight on-retainer studio relationship with shared OKRs.`,
		},
		{
			q: `What's your active AI Overview / Perplexity / ChatGPT citation share for current clients?`,
			a: `Operators with no measurement framework here are running on 2023 assumptions. Healthy answer: "we track citation share monthly via [tool]; current spread is X-Y% for category-defining queries". No metric = no strategy.`,
		},
		{
			q: `What's your published methodology?`,
			a: `Black-box ${lc} is operationally fragile. Frameleads publishes the [Frameleads Growth System™](/frameleads-growth-system) (Map · Magnet · Machine · Multiply · Measure). Ask competitors for their equivalent.`,
		},
		{
			q: `What's the smallest engagement you'd take, and why?`,
			a: `Healthy operators have clear floors (typically ${depth.pricingTiers[0].monthlyBand}) and reasons. "We work with anyone" signals under-capacity.`,
		},
		{
			q: `What's the exit clause after the initial engagement?`,
			a: `Healthy: 30-day mutual exit after the initial 3-month engagement. Red flag: 12+ month lock-in pushed in week 1. Lock-in contracts signal weak retention dynamics.`,
		},
		{
			q: `How would you fire yourself in 18 months?`,
			a: `Best operators answer confidently: "by hiring an in-house lead and training them on our system; we'd shift to a smaller retainer for strategy + creative + special launches". Defensive answers signal lock-in dependency.`,
		},
		{
			q: `Do you guarantee specific ROAS, lead volume, or revenue?`,
			a: `Walk away from yes-answers. ROAS depends on product, AOV, audience, market dynamics, and creative execution — none of which the agency fully controls. Specific outcome guarantees in writing = sales tactic, not forecast.`,
		},
		{
			q: `How do you handle category-specific compliance (DPDP, RBI, SEBI, RERA, IRDAI)?`,
			a: `Generic agencies often skip compliance review. India's regulator-density makes this acute for finance, real estate, healthcare. Expected answer: named compliance lead, documented review process, named legal partner for regulator-facing categories.`,
		},
		{
			q: `What's the discovery-sprint format before signing the engagement?`,
			a: `Healthy: 30-day fixed-scope sprint priced ₹1-6L depending on scope, including audit + ICP mapping + 2-3 quick-win shipments + 6-month roadmap. Skip operators who push straight to a 6-month retainer without a discovery layer.`,
		},
	];

	const body: Section[] = [
		{
			type: "p",
			text: `The 12 questions below are the diagnostic battery Frameleads uses internally when buyers ask us to benchmark a ${lc} agency shortlist. Same set of questions we'd want a buyer to ask us.`,
		},
		{
			type: "callout",
			tone: "tldr",
			text: `These questions are designed to fit a single 30-minute scoping call. Answers + how the operator handles each one — confidence vs deflection, specificity vs hand-waving — reveal more than 90% of agency proposal decks.`,
		},
		...questions.flatMap((qa, idx): Section[] => [
			{
				type: "h2" as const,
				text: `${idx + 1}. ${qa.q}`,
			},
			{
				type: "p" as const,
				text: qa.a,
			},
		]),
		{
			type: "h2",
			text: `Frameleads' answers to all 12 questions`,
		},
		{
			type: "p",
			text: `[Read Frameleads' answers to all 12 questions](/${service.id}) on the ${service.label} hub, or [book a free 30-min audit](/free-marketing-audit?service=${service.id}&cta=blog-questions-${service.id}) and we'll walk through them on the call.`,
		},
	];

	const faqs: FAQItem[] = [
		{
			question: `Can I ask all 12 questions in one 30-minute call?`,
			answer: `Yes — most have 1-2 sentence answers. The depth comes from how the operator handles each: confidence vs deflection, specificity vs hand-waving. Don't accept slide-deck answers — push for concrete examples.`,
		},
		{
			question: `What if the agency refuses to share weekly reporting samples?`,
			answer: `Walk away. Healthy operators redact client names and share sample reports openly. Refusal signals either no real reporting or sub-par work they don't want benchmarked.`,
		},
		{
			question: `Should I write the answers down and compare across agencies?`,
			answer: `Yes. Build a scorecard with 12 rows × N agencies. After 3-5 scoping calls, the spread becomes obvious — operators cluster into clear tiers.`,
		},
		{
			question: `What's the single most diagnostic question?`,
			answer: `"Who's the senior operator and what's their active retainer count?" — if the answer is "we have a team" or the retainer count is >6 per senior, you're getting junior attention regardless of the proposal.`,
		},
		{
			question: `Do these questions apply to a specific Indian city or India-wide?`,
			answer: `India-wide. The 12 questions filter operators from sales teams in any Indian city. Add 1-2 city-specific questions on sub-locality awareness for engagements in specific metros (Bangalore sub-localities ≠ Mumbai sub-localities ≠ Delhi sub-localities).`,
		},
	];

	return {
		slug,
		title: `12 Questions to Ask Before Hiring a ${service.label} Agency in India (2026)`,
		description: `12 operator-grade diagnostic questions to ask in the 30-min scoping call with any India ${lc} agency — designed to filter operators from sales teams.`,
		authorId: AUTHOR_ID,
		datePublished: DEFAULT_PUBLISHED,
		dateModified: DEFAULT_MODIFIED,
		type: "questions-to-ask",
		category: service.label,
		categorySlug: service.id,
		primaryKeyword: `questions to ask ${lc} agency`,
		cluster: service.label,
		tldr,
		readTime: DEFAULT_READ_TIME,
		body,
		faqs,
		references: referencesFor({ serviceId: service.id }),
		serviceRefs: [service.id],
		pillarSlug: pillarSlugForService(service.id),
		relatedSlugs: [],
	};
}

// ─────────────────────────────────────────────────────────────────
// Service → Pillar mapping (cluster anchor)
// ─────────────────────────────────────────────────────────────────

function pillarSlugForService(
	serviceId: string,
):
	| "performance-marketing-operations"
	| "seo-operations"
	| "attribution-and-measurement"
	| "lifecycle-and-retention" {
	switch (serviceId) {
		case "seo-services":
		case "content-marketing":
			return "seo-operations";
		case "analytics-and-automations":
			return "attribution-and-measurement";
		case "email-marketing":
		case "whatsapp-marketing":
			return "lifecycle-and-retention";
		default:
			return "performance-marketing-operations";
	}
}

// ─────────────────────────────────────────────────────────────────
// Generator + registry
// ─────────────────────────────────────────────────────────────────

let _cache: BlogPost[] | null = null;

export function allProgrammaticBlogs(): BlogPost[] {
	if (_cache) return _cache;
	const out: BlogPost[] = [];
	const cities = programmaticCities();
	const svcIds = programmaticServiceIds();
	for (const svcId of svcIds) {
		const service = services.find((s) => s.id === svcId);
		if (!service) continue;
		for (const city of cities) {
			out.push(buildBestInCityPost(service, city));
			out.push(buildCostInCityPost(service, city));
			out.push(buildHowToHirePost(service, city));
		}
		out.push(buildQuestionsToAskPost(service));
	}
	_cache = out;
	return out;
}

export function getProgrammaticBlog(slug: string): BlogPost | undefined {
	return allProgrammaticBlogs().find((p) => p.slug === slug);
}

export function programmaticBlogSlugs(): string[] {
	return allProgrammaticBlogs().map((p) => p.slug);
}
