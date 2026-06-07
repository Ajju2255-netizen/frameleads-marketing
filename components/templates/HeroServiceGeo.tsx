import Link from "next/link";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

type Props = {
	serviceLabel: string;
	geoName: string;
	subhead: string;
	primaryHref?: string;
	primaryLabel?: string;
	eyebrow?: string;
	crumbs?: Crumb[];
};

export function HeroServiceGeo({
	serviceLabel,
	geoName,
	subhead,
	primaryHref = "/free-marketing-audit",
	primaryLabel = "Get a free 30-min audit",
	eyebrow,
	crumbs,
}: Props) {
	const breadcrumbs: Crumb[] =
		crumbs ?? [
			{ href: "/", label: "Home" },
			{ href: "/locations", label: "Locations" },
			{ label: `${serviceLabel} in ${geoName}` },
		];

	return (
		<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(1100px_320px_at_30%_-30%,rgba(255,107,53,0.10),transparent_55%)]"
			/>
			<div className="mx-auto max-w-3xl px-6 pt-8 pb-10 sm:pt-12 sm:pb-14">
				<Breadcrumb items={breadcrumbs} />
				<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
					<span
						aria-hidden
						className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
					/>
					{eyebrow ?? `${serviceLabel} · ${geoName}`}
				</div>
				<h1 className="mt-4 font-poppins text-[34px] sm:text-[46px] font-bold leading-[1.04] tracking-tight text-[#2D3748]">
					{serviceLabel} in <span className="text-[#FF6B35]">{geoName}</span>
				</h1>
				<p className="direct-answer mt-5 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
					{subhead}
				</p>
				<div className="mt-7 flex flex-wrap items-center gap-3">
					<Link
						href={primaryHref}
						className="group inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#E85B25] hover:shadow-[0_12px_28px_rgba(255,107,53,0.35)]"
					>
						{primaryLabel}
						<span
							aria-hidden
							className="transition-transform group-hover:translate-x-0.5"
						>
							→
						</span>
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full border border-[#2D3748]/15 bg-white px-5 py-3 text-[14px] font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
					>
						Talk to a senior operator
					</Link>
				</div>
			</div>
		</header>
	);
}
