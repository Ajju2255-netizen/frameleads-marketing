type Props = {
	industryLabel: string;
	industryName: string;
	avgCpc: string;
	avgCac: string;
	painPoints: string[];
	primaryServices: string[];
	intro?: string;
	geoConcentration?: string[];
};

export function IndustryContextBlock({
	industryLabel,
	industryName,
	avgCpc,
	avgCac,
	painPoints,
	primaryServices,
	intro,
	geoConcentration,
}: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				Category context
			</div>
			<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
				What's different about {industryLabel}
			</h2>
			{intro ? (
				<p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#2D3748]/90">
					{intro}
				</p>
			) : null}
			<dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
			{painPoints.length ? (
				<div className="mt-6">
					<div className="text-[13px] font-semibold text-[#2D3748]">
						Top pain points in {industryName}
					</div>
					<ul className="mt-3 space-y-2 text-[14px] text-[#2D3748]/90">
						{painPoints.slice(0, 5).map((p) => (
							<li key={p} className="flex gap-2">
								<span aria-hidden className="text-[#FF6B35] font-semibold">▸</span>
								<span>{p}</span>
							</li>
						))}
					</ul>
				</div>
			) : null}
			{primaryServices.length ? (
				<div className="mt-6">
					<div className="text-[13px] font-semibold text-[#2D3748]">
						Channel mix that wins this category
					</div>
					<ul className="mt-2 flex flex-wrap gap-2">
						{primaryServices.map((s) => (
							<li
								key={s}
								className="inline-flex items-center rounded-full border border-[#FFE4D6] bg-[#FFF7F2]/60 px-3 py-1 text-xs font-medium text-[#2D3748]"
							>
								{s}
							</li>
						))}
					</ul>
				</div>
			) : null}
			{geoConcentration && geoConcentration.length ? (
				<div className="mt-5">
					<div className="text-[13px] font-semibold text-[#2D3748]">
						Where {industryName} concentrates
					</div>
					<p className="mt-1 text-[13.5px] text-[#5A5A5A]">
						{geoConcentration.join(" · ")}
					</p>
				</div>
			) : null}
		</section>
	);
}
