/**
 * Client-side helper for submitting leads to the frameleads-api Worker.
 *
 * All forms across the site (free-audit, contact, sticky CTA, Tier-template CTAs)
 * funnel through this single submit() so we have one place to handle validation,
 * rate-limit messaging, and analytics events.
 */

/**
 * Permissive source string. The Worker validates against the same regex
 * (lowercase + digits + hyphens, ≤ 64 chars) so every CTA placed across the
 * site can carry its full attribution context (e.g. `money-seo-company-in-mumbai-mid`,
 * `guide-real-estate-marketing-bottom`, `hub-how-to-top`) without us having
 * to centrally enumerate every variant.
 *
 * Recommended source prefixes (open list):
 *   - free-audit, contact, sticky-cta, whatsapp                   — direct surfaces
 *   - tier3-{top,mid,bottom}                                      — Tier 3 cells
 *   - tier4-{top,mid,bottom}, tier5-{top,mid,bottom}              — Tier 4/5 cells
 *   - tier11-{top,mid,bottom}, tier12-{top,mid,bottom}            — industry cells
 *   - tier13-{top,mid,bottom}, tier14-{top,mid,bottom}, tier15-*  — newer cells
 *   - industry-pillar-{top,mid,bottom}                            — industry pillars
 *   - hub-{service-id}-{top,mid,bottom}                           — service hubs
 *   - hub-{kind}-{top,bottom}                                     — question hubs
 *   - location-{geo-id}-{mid,bottom}                              — location hubs
 *   - money-{slug}-{top,mid,bottom}                               — money pages
 *   - guide-{slug}-{top,mid,bottom}                               — long-form guides
 *   - resources-{slug}-{top,bottom}                               — resource hubs
 *   - vs-hub-{top,bottom}, glossary-hub-{top,bottom}              — vs / glossary hubs
 *   - tool-calculator, academy, other                             — misc surfaces
 *
 * Unknown sources still validate as long as the regex matches.
 */
export const SOURCE_PATTERN = /^[a-z0-9][a-z0-9-]{0,63}$/;
export type LeadSource = string;

export type LeadPayload = {
	name: string;
	email: string;
	phone?: string;
	company?: string;
	website?: string;
	service?: string;
	message?: string;
	source: LeadSource;
	pageUrl?: string;
	referrer?: string;
	/** Honeypot — leave undefined / empty in real forms */
	hp?: string;
};

export type LeadSubmitResult =
	| { ok: true; leadId: string; receivedAt: string }
	| { ok: false; error: string; status: number };

/**
 * The base URL is configured via `NEXT_PUBLIC_LEAD_API_URL`. We default to the
 * local dev API so engineers don't have to set env vars to get a working form.
 * Production builds must override via .env / Cloudflare Workers env.
 */
function endpointUrl(): string {
	const env =
		typeof process !== "undefined" && process.env
			? (process.env.NEXT_PUBLIC_LEAD_API_URL as string | undefined)
			: undefined;
	if (env && env.trim()) return env.trim();
	if (
		typeof window !== "undefined" &&
		(window.location.hostname === "localhost" ||
			window.location.hostname.startsWith("127.") ||
			window.location.hostname.startsWith("192.168."))
	) {
		return "http://localhost:8787/api/lead-submit";
	}
	return "https://api.frameleads.com/api/lead-submit";
}

const FRIENDLY = {
	400: "Please check the highlighted fields and try again.",
	429: "You're sending requests too quickly. Try again in a minute — or WhatsApp us on +91 9901450425.",
	500: "Something went wrong on our side. Please try again, or WhatsApp us on +91 9901450425.",
	OFFLINE: "Looks like you're offline. Reconnect and try again, or WhatsApp us on +91 9901450425.",
} as const;

export async function submitLead(payload: LeadPayload): Promise<LeadSubmitResult> {
	const enriched: LeadPayload = {
		...payload,
		pageUrl:
			payload.pageUrl ||
			(typeof window !== "undefined" ? window.location.href : undefined),
		referrer:
			payload.referrer ||
			(typeof document !== "undefined" ? document.referrer : undefined) ||
			undefined,
	};

	let res: Response;
	try {
		res = await fetch(endpointUrl(), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(enriched),
			credentials: "omit",
		});
	} catch {
		return { ok: false, error: FRIENDLY.OFFLINE, status: 0 };
	}

	let data: { success?: boolean; result?: { leadId?: string; receivedAt?: string }; error?: string } = {};
	try {
		data = await res.json();
	} catch {
		// non-JSON response
	}

	if (res.ok && data.success && data.result?.leadId) {
		// Fire conversion events on every supported tracker. Best-effort —
		// failures here must never block the success return.
		try {
			const w = window as unknown as {
				gtag?: (...args: unknown[]) => void;
				fbq?: (...args: unknown[]) => void;
			};
			// GA4: standard generate_lead event for Google Ads conversion mapping +
			// custom lead_submitted with full source attribution.
			if (typeof w.gtag === "function") {
				w.gtag("event", "generate_lead", {
					currency: "INR",
					value: 0,
					lead_source: payload.source,
					page_url: enriched.pageUrl,
					method: payload.source,
				});
				w.gtag("event", "lead_submitted", {
					source: payload.source,
					page_url: enriched.pageUrl,
				});
			}
			// Meta Pixel: standard Lead event for Meta Ads optimisation. Uses USD
			// for cross-property comparison; Meta accepts any value, this is just
			// a placeholder until per-source LTV mapping is wired.
			if (typeof w.fbq === "function") {
				w.fbq("track", "Lead", {
					content_name: payload.source,
					content_category: payload.service || "audit",
				});
			}
		} catch {
			// best-effort, never block submission
		}
		return {
			ok: true,
			leadId: data.result.leadId,
			receivedAt: data.result.receivedAt || new Date().toISOString(),
		};
	}

	const friendly =
		FRIENDLY[res.status as 400 | 429 | 500] ||
		data.error ||
		"We couldn't submit your request. Please try again.";
	return { ok: false, error: friendly, status: res.status };
}
