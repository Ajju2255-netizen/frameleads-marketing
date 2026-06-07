import Link from "next/link";

export type RelatedTerm = {
	slug: string;
	label: string;
};

type Props = {
	terms: RelatedTerm[];
};

export function RelatedTerms({ terms }: Props) {
	if (terms.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 py-6">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Related terms
			</div>
			<h2 className="font-poppins text-[18px] font-semibold tracking-tight text-[#2D3748]">
				Pair this with
			</h2>
			<ul className="mt-3 flex flex-wrap gap-2">
				{terms.map((t) => (
					<li key={t.slug}>
						<Link
							href={`/glossary/${t.slug}`}
							className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE4D6] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[#2D3748] transition-colors hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
						>
							{t.label}
							<span aria-hidden className="text-[#FF6B35]">
								→
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
