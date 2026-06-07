"use client";

/**
 * EmbeddedLeadForm — inline lead capture for mid-page CTA positions.
 *
 * Instead of routing visitors to /free-marketing-audit, this captures the
 * lead right where the reader already has commercial intent (mid-Tier-page,
 * mid-money-page, mid-guide). Submits via the same submitLead() client
 * wrapper as /free-marketing-audit so:
 *   - Source attribution flows through (cta=money-...-mid, etc.)
 *   - GA4 generate_lead + lead_submitted events fire
 *   - Meta Pixel Lead event fires
 *   - Worker side stores + emails identically
 *
 * Fields: name, email, phone (optional), message (optional), honeypot (hp).
 * Inline success state on submit; persistent error band with retry on failure.
 */

import { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/lead-api";

type Props = {
	/** CTA source identifier flowing through to lead-api + analytics. */
	source: string;
	/** Optional service/page slug — surfaced in the Worker payload. */
	service?: string;
	/** Section heading copy. */
	headline?: string;
	/** Section subhead / body copy. */
	body?: string;
	/** Optional placeholder for the message textarea. */
	messagePlaceholder?: string;
};

const DEFAULTS = {
	headline: "Get a free 30-minute marketing audit",
	body: "30 minutes, no slides, no pitch. We'll diagnose your specific bottleneck and hand you three concrete moves to make next — even if you don't engage us.",
	messagePlaceholder:
		"Anything specific you want covered? (e.g. 'CAC is up 30%, attribution feels broken' or 'we're pre-PMF and trying to choose between SEO and paid')",
};

export function EmbeddedLeadForm({
	source,
	service,
	headline,
	body,
	messagePlaceholder,
}: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [hp, setHp] = useState(""); // honeypot
	const [submitting, setSubmitting] = useState(false);
	const [result, setResult] = useState<
		| { state: "idle" }
		| { state: "ok"; leadId: string }
		| { state: "error"; message: string }
	>({ state: "idle" });

	const headlineText = headline ?? DEFAULTS.headline;
	const bodyText = body ?? DEFAULTS.body;
	const messagePlaceholderText = messagePlaceholder ?? DEFAULTS.messagePlaceholder;

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (submitting) return;
		// Basic client-side validation
		if (!name.trim() || !email.trim()) {
			setResult({ state: "error", message: "Name + email are required." });
			return;
		}
		setSubmitting(true);
		setResult({ state: "idle" });
		const res = await submitLead({
			name: name.trim(),
			email: email.trim(),
			phone: phone.trim() || undefined,
			message: message.trim() || undefined,
			service,
			source,
			hp,
		});
		setSubmitting(false);
		if (res.ok) {
			setResult({ state: "ok", leadId: res.leadId });
		} else {
			setResult({ state: "error", message: res.error });
		}
	}

	if (result.state === "ok") {
		return (
			<section
				aria-labelledby="lead-form-success"
				className="mx-auto my-10 max-w-3xl rounded-2xl border border-[#FFE4D6] bg-[#FDF8F5] px-6 py-8"
			>
				<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Received
				</div>
				<h2
					id="lead-form-success"
					className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
				>
					Thanks — we'll reach out within one business day.
				</h2>
				<p className="mt-3 text-[15px] leading-relaxed text-[#2D3748]/85">
					Your audit request is in. A senior Frameleads operator will email you within
					one business day to schedule the 30-minute call. If you're in a hurry,
					WhatsApp <a
						href="https://wa.me/916362821368?text=Hi%20Frameleads%2C%20following%20up%20on%20my%20audit%20request"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#FF6B35] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:decoration-[#FF6B35]"
					>+91 6362821368</a> with the lead reference and we'll move it up the queue.
				</p>
				<p className="mt-3 text-[12px] text-[#5A5A5A]">Reference: {result.leadId}</p>
			</section>
		);
	}

	return (
		<section
			aria-labelledby="lead-form-heading"
			className="mx-auto my-10 max-w-3xl rounded-2xl border border-[#FFE4D6] bg-gradient-to-b from-[#FDF8F5] to-white px-6 py-8 shadow-[0_2px_12px_rgba(255,107,53,0.10)]"
		>
			<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Free audit · {source}
			</div>
			<h2
				id="lead-form-heading"
				className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
			>
				{headlineText}
			</h2>
			<p className="mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">{bodyText}</p>

			<form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
				<label className="flex flex-col gap-1.5">
					<span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A]">
						Name <span className="text-[#FF6B35]">*</span>
					</span>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						disabled={submitting}
						autoComplete="name"
						className="rounded-xl border border-[#FFE4D6] bg-white px-3 py-2.5 text-[14.5px] text-[#2D3748] placeholder:text-[#5A5A5A]/50 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/15"
						placeholder="Your full name"
					/>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A]">
						Email <span className="text-[#FF6B35]">*</span>
					</span>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={submitting}
						autoComplete="email"
						className="rounded-xl border border-[#FFE4D6] bg-white px-3 py-2.5 text-[14.5px] text-[#2D3748] placeholder:text-[#5A5A5A]/50 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/15"
						placeholder="you@company.com"
					/>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A]">
						Phone <span className="text-[12px] font-normal text-[#5A5A5A]/70">(optional)</span>
					</span>
					<input
						type="tel"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						disabled={submitting}
						autoComplete="tel"
						className="rounded-xl border border-[#FFE4D6] bg-white px-3 py-2.5 text-[14.5px] text-[#2D3748] placeholder:text-[#5A5A5A]/50 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/15"
						placeholder="+91 ..."
					/>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A]">
						Service / topic <span className="text-[12px] font-normal text-[#5A5A5A]/70">(optional)</span>
					</span>
					<input
						type="text"
						value={service ?? ""}
						readOnly
						className="rounded-xl border border-[#FFE4D6]/60 bg-[#FFE4D6]/20 px-3 py-2.5 text-[14.5px] text-[#5A5A5A]"
					/>
				</label>
				<label className="flex flex-col gap-1.5 sm:col-span-2">
					<span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A]">
						What should we focus on? <span className="text-[12px] font-normal text-[#5A5A5A]/70">(optional)</span>
					</span>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						disabled={submitting}
						rows={3}
						className="rounded-xl border border-[#FFE4D6] bg-white px-3 py-2.5 text-[14.5px] text-[#2D3748] placeholder:text-[#5A5A5A]/50 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/15"
						placeholder={messagePlaceholderText}
					/>
				</label>

				{/* Honeypot — hidden from real users via aria-hidden + tabIndex */}
				<label className="sr-only" aria-hidden="true">
					Leave this field empty
					<input
						type="text"
						tabIndex={-1}
						value={hp}
						onChange={(e) => setHp(e.target.value)}
						autoComplete="off"
					/>
				</label>

				{result.state === "error" && (
					<div
						role="alert"
						className="sm:col-span-2 rounded-xl border border-[#FFCAB0] bg-[#FFE4D6]/30 px-3 py-2 text-[13.5px] text-[#2D3748]"
					>
						{result.message}
					</div>
				)}

				<div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-3">
					<button
						type="submit"
						disabled={submitting}
						className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{submitting ? "Sending…" : "Get my free audit"}
						{!submitting && <span aria-hidden>→</span>}
					</button>
					<Link
						href={`/free-marketing-audit?source=${source}&cta=${source}`}
						className="text-[13px] font-semibold text-[#5A5A5A] underline decoration-[#FFE4D6] underline-offset-4 hover:text-[#FF6B35]"
					>
						Prefer the full form? Open /free-marketing-audit →
					</Link>
				</div>

				<p className="sm:col-span-2 text-[12px] text-[#5A5A5A]/80">
					We respond within one business day. No newsletter spam, no auto-DRIP — just a real audit-prep email from a senior operator.
				</p>
			</form>
		</section>
	);
}
