type Props = {
	geoName: string;
	state?: string;
	country?: string;
	population?: string;
	topIndustries: string[];
	landmarks: string[];
	avgCpc: string;
	avgCac: string;
	intro?: string;
};

export function LocalContextBlock({
	geoName,
	state,
	country,
	population,
	topIndustries,
	landmarks,
	avgCpc,
	avgCac,
	intro,
}: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Local context
			</div>
			<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
				Why this matters in {geoName}
			</h2>
			{intro ? (
				<p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#2D3748]/90">
					{intro}
				</p>
			) : null}
			<dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
				{state ? (
					<div className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
						<dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B35]">
							{country ? "Country" : "State"}
						</dt>
						<dd className="mt-1 font-poppins text-[16px] font-medium text-[#2D3748]">
							{country ?? state}
						</dd>
					</div>
				) : null}
				{population ? (
					<div className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
						<dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B35]">
							Population (urban)
						</dt>
						<dd className="mt-1 font-poppins text-[16px] font-medium text-[#2D3748]">
							{population}
						</dd>
					</div>
				) : null}
				<div className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
					<dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B35]">
						Average CPC (₹)
					</dt>
					<dd className="mt-1 font-poppins text-[16px] font-medium text-[#2D3748]">
						{avgCpc}
					</dd>
				</div>
				<div className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
					<dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B35]">
						Typical CAC (₹)
					</dt>
					<dd className="mt-1 font-poppins text-[16px] font-medium text-[#2D3748]">
						{avgCac}
					</dd>
				</div>
			</dl>
			{topIndustries.length ? (
				<div className="mt-6">
					<div className="text-[13px] font-semibold text-[#2D3748]">
						Top industries in {geoName}
					</div>
					<ul className="mt-2 flex flex-wrap gap-2">
						{topIndustries.map((ind) => (
							<li
								key={ind}
								className="inline-flex items-center rounded-full border border-[#FFE4D6] bg-[#FFF7F2]/60 px-3 py-1 text-xs font-medium text-[#2D3748]"
							>
								{ind}
							</li>
						))}
					</ul>
				</div>
			) : null}
			{landmarks.length ? (
				<div className="mt-5">
					<div className="text-[13px] font-semibold text-[#2D3748]">
						Areas we know in {geoName}
					</div>
					<p className="mt-1 text-[13.5px] text-[#5A5A5A]">
						{landmarks.join(" · ")}
					</p>
				</div>
			) : null}
		</section>
	);
}
