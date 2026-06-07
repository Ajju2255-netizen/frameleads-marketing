type Props = {
	heading: string;
	items: string[];
	style?: "bullet" | "numbered" | "chips";
	intro?: string;
};

export function ListBlock({ heading, items, style = "bullet", intro }: Props) {
	if (items.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 py-7">
			<h2 className="font-poppins text-[20px] sm:text-[22px] font-bold tracking-tight text-[#2D3748]">
				{heading}
			</h2>
			{intro ? (
				<p className="mt-1 max-w-2xl text-[13px] text-[#5A5A5A]">{intro}</p>
			) : null}
			{style === "chips" ? (
				<ul className="mt-4 flex flex-wrap gap-2">
					{items.map((it) => (
						<li
							key={it}
							className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[12px] font-medium text-[#2D3748]"
						>
							<span
								aria-hidden
								className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
							/>
							{it}
						</li>
					))}
				</ul>
			) : style === "numbered" ? (
				<ol className="mt-4 space-y-2.5">
					{items.map((it, idx) => (
						<li
							key={it}
							className="flex gap-3 rounded-xl border border-[#FFE4D6] bg-white p-3.5"
						>
							<span
								aria-hidden
								className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF7F2] font-poppins text-[11px] font-bold text-[#FF6B35]"
							>
								{idx + 1}
							</span>
							<span className="text-[14px] leading-relaxed text-[#2D3748]/90">
								{it}
							</span>
						</li>
					))}
				</ol>
			) : (
				<ul className="mt-4 space-y-2 text-[14px] sm:text-[15px] text-[#2D3748]/90">
					{items.map((it) => (
						<li
							key={it}
							className="flex gap-3 rounded-xl border border-[#FFE4D6] bg-white p-3.5"
						>
							<span aria-hidden className="text-[#FF6B35]">
								▸
							</span>
							<span>{it}</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
