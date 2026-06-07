/**
 * Client-side helper for submitting leads to the frameleads-api Worker.
 *
 * All forms across the site (free-audit, contact, sticky CTA, Tier-template CTAs)
 * funnel through this single submit() so we have one place to handle validation,
 * rate-limit messaging, and analytics events.
 */

export type LeadSource =
	| "free-audit"
	| "contact"
	| "sticky-cta"
	| "whatsapp"
	| "tier3-top"
	| "tier3-mid"
	| "tier3-bottom"
	| "tier4-top"
	| "tier4-mid"
	| "tier4-bottom"
	| "tier5-top"
	| "tier5-mid"
	| "tier5-bottom"
	| "tier11-top"
	| "tier11-mid"
	| "tier11-bottom"
	| "industry-pillar"
	| "tool-calculator"
	| "academy"
	| "other";

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
	429: "You're sending requests too quickly. Try again in a minute — or WhatsApp us on +91 6362821368.",
	500: "Something went wrong on our side. Please try again, or WhatsApp us on +91 6362821368.",
	OFFLINE: "Looks like you're offline. Reconnect and try again, or WhatsApp us on +91 6362821368.",
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
		// Fire a GA4 conversion event if gtag is present (set up in Phase 7).
		try {
			const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
			if (typeof gtag === "function") {
				gtag("event", "lead_submitted", {
					source: payload.source,
					page_url: enriched.pageUrl,
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
