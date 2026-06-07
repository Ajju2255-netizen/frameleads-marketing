type Props = {
	heading?: string;
	useCases: string[];
};

export function UseCasesList({
	heading = "Where this service earns its retainer",
	useCases,
}: Props) {
	if (useCases.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 py-8">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Use cases
			</div>
			<h2 className="mb-4 font-poppins text-[22px] sm:text-[26px] font-semibold text-[#2D3748]">
				{heading}
			</h2>
			<ol className="space-y-3">
				{useCases.map((uc, idx) => (
					<li
						key={uc}
						className="flex gap-4 rounded-2xl border border-[#FFE4D6] bg-white p-5 shadow-[0_2px_10px_rgba(45,55,72,0.04)] transition-colors hover:border-[#FF6B35]/30"
					>
						<span
							aria-hidden
							className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB088] text-xs font-bold text-white shadow-[0_3px_10px_rgba(255,107,53,0.30)]"
						>
							{idx + 1}
						</span>
						<span className="text-[14px] sm:text-[15px] leading-relaxed text-[#2D3748]/90">
							{uc}
						</span>
					</li>
				))}
			</ol>
		</section>
	);
}
