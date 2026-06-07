type Row = {
	criterion: string;
	a: string;
	b: string;
};

type Props = {
	aLabel: string;
	bLabel: string;
	rows: Row[];
};

export function ScorecardTable({ aLabel, bLabel, rows }: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-8">
			<div className="overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
				<table className="w-full text-sm">
					<thead className="bg-[#FFF7F2]/70 border-b border-[#FFE4D6]">
						<tr>
							<th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B35]">
								Criterion
							</th>
							<th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#2D3748]">
								{aLabel}
							</th>
							<th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#2D3748]">
								{bLabel}
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-[#FFE4D6]">
						{rows.map((r) => (
							<tr key={r.criterion} className="bg-white hover:bg-[#FFF7F2]/40 transition-colors">
								<td className="px-4 py-3 font-poppins font-medium text-[#2D3748]">
									{r.criterion}
								</td>
								<td className="px-4 py-3 text-[#2D3748]/85">{r.a}</td>
								<td className="px-4 py-3 text-[#2D3748]/85">{r.b}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
