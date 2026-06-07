import Link from "next/link";

export type CellLink = {
	href: string;
	label: string;
	sublabel?: string;
};

type Props = {
	heading: string;
	links: CellLink[];
	intro?: string;
};

export function RelatedCells({ heading, links, intro }: Props) {
	if (links.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 py-7">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Linked content
			</div>
			<h2 className="font-poppins text-[20px] sm:text-[22px] font-bold tracking-tight text-[#2D3748]">
				{heading}
			</h2>
			{intro ? (
				<p className="mt-1 max-w-2xl text-[13px] text-[#5A5A5A]">{intro}</p>
			) : null}
			<ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
				{links.map((l) => (
					<li key={l.href}>
						<Link
							href={l.href}
							className="group flex items-center justify-between gap-3 rounded-xl border border-[#FFE4D6] bg-white px-4 py-3 transition-colors hover:border-[#FF6B35]/40 hover:bg-[#FFF7F2]/60"
						>
							<span className="min-w-0 flex-1">
								<span className="block truncate font-poppins text-[14px] font-semibold text-[#2D3748] group-hover:text-[#FF6B35]">
									{l.label}
								</span>
								{l.sublabel ? (
									<span className="block truncate text-[12px] text-[#5A5A5A]">
										{l.sublabel}
									</span>
								) : null}
							</span>
							<span
								aria-hidden
								className="shrink-0 text-[#FF6B35] transition-transform group-hover:translate-x-0.5"
							>
								→
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
