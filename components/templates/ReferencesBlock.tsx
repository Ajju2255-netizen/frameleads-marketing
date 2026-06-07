/**
 * Outbound authoritative citations — strong AIO/GEO trust signal.
 *
 * Pair with cited claims in the body. AI engines cross-reference outbound
 * links to assess source credibility; named primary sources (gov't, regulator,
 * recognized analyst firms) are weighted heaviest.
 */

export type Reference = {
	label: string;
	href: string;
	publisher?: string;
	note?: string;
};

type Props = {
	heading?: string;
	references: Reference[];
};

export function ReferencesBlock({
	heading = "Sources & references",
	references,
}: Props) {
	if (references.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 py-8">
			<h2 className="font-poppins text-[20px] font-semibold tracking-tight text-[#2D3748]">
				{heading}
			</h2>
			<p className="mt-1 text-[13px] text-[#5A5A5A]">
				Cited primary and analyst sources. Independent of Frameleads' own data.
			</p>
			<ol className="mt-4 space-y-2.5 text-[14px]">
				{references.map((r, idx) => (
					<li
						key={`${r.href}-${idx}`}
						className="flex gap-3 rounded-xl border border-[#FFE4D6] bg-white/60 p-3.5"
					>
						<span
							aria-hidden
							className="shrink-0 text-[12px] font-semibold text-[#FF6B35]"
						>
							[{idx + 1}]
						</span>
						<div className="min-w-0 flex-1">
							<a
								href={r.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 transition-colors hover:text-[#FF6B35] hover:decoration-[#FF6B35]"
							>
								{r.label}
							</a>
							{r.publisher ? (
								<span className="text-[#5A5A5A]"> — {r.publisher}</span>
							) : null}
							{r.note ? (
								<p className="mt-1 text-[12px] text-[#5A5A5A]">{r.note}</p>
							) : null}
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
