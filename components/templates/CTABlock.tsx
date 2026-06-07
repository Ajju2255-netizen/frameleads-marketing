import Link from "next/link";

type Variant = "audit" | "consultation" | "academy";

type Props = {
	variant?: Variant;
	headline?: string;
	body?: string;
	primaryHref?: string;
	primaryLabel?: string;
	secondaryHref?: string;
	secondaryLabel?: string;
};

const DEFAULTS: Record<
	Variant,
	Required<Pick<Props, "headline" | "body" | "primaryHref" | "primaryLabel">>
> = {
	audit: {
		headline: "Want this audited for your business?",
		body: "Get a free 30-minute marketing audit from a senior Frameleads consultant. No slides — just an honest read of where your funnel leaks, with the three highest-leverage moves we'd make first.",
		primaryHref: "/free-marketing-audit",
		primaryLabel: "Book a free 30-min audit",
	},
	consultation: {
		headline: "Talk to a senior Frameleads operator.",
		body: "Bring your hardest growth question. We'll give you a sharp, no-pitch 30-minute consult.",
		primaryHref: "/contact",
		primaryLabel: "Book a 30-min consult",
	},
	academy: {
		headline: "Learn the system end-to-end.",
		body: "The Frameleads Academy course distills the methodology into a self-paced curriculum. ₹1,999, with the same playbook our team uses on retainers.",
		primaryHref: "/academy",
		primaryLabel: "Explore the Academy",
	},
};

export function CTABlock(props: Props) {
	const variant: Variant = props.variant ?? "consultation";
	const d = DEFAULTS[variant];
	const headline = props.headline ?? d.headline;
	const body = props.body ?? d.body;
	const primaryHref = props.primaryHref ?? d.primaryHref;
	const primaryLabel = props.primaryLabel ?? d.primaryLabel;

	return (
		<section className="mx-auto max-w-3xl px-6 py-10">
			<div className="relative overflow-hidden rounded-3xl border border-[#FFE4D6] bg-[#2D3748] p-8 sm:p-10 shadow-[0_16px_44px_rgba(45,55,72,0.18)]">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(700px_260px_at_85%_-10%,rgba(255,107,53,0.30),transparent_60%)]"
				/>
				<div className="relative">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB088]">
						<span
							aria-hidden
							className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
						/>
						{variant === "audit"
							? "30-min audit"
							: variant === "academy"
								? "Academy"
								: "Consultation"}
					</div>
					<h2 className="mt-3 font-poppins text-[24px] sm:text-[30px] font-bold tracking-tight text-white">
						{headline}
					</h2>
					<p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-white/80">
						{body}
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-3">
						<Link
							href={primaryHref}
							className="group inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(255,107,53,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#FF7E50] hover:shadow-[0_14px_32px_rgba(255,107,53,0.55)]"
						>
							{primaryLabel}
							<span
								aria-hidden
								className="transition-transform group-hover:translate-x-0.5"
							>
								→
							</span>
						</Link>
						{props.secondaryHref && props.secondaryLabel ? (
							<Link
								href={props.secondaryHref}
								className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
							>
								{props.secondaryLabel}
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
