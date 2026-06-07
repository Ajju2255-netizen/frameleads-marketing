type Props = {
	prose: string;
	formula: string;
	example?: { input: string; output: string };
};

export function FormulaCard({ prose, formula, example }: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-6">
			<div className="overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white shadow-[0_4px_16px_rgba(45,55,72,0.04)]">
				<div className="border-b border-[#FFE4D6] bg-[#FFF7F2] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Formula
				</div>
				<div className="p-6 sm:p-7">
					<p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2D3748]">
						{prose}
					</p>
					<pre className="mt-5 overflow-x-auto rounded-xl border border-[#FFE4D6] bg-[#FFF7F2] p-4 font-mono text-[14px] text-[#2D3748]">
						<code>{formula}</code>
					</pre>
					{example ? (
						<div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr] sm:gap-x-4">
							<div className="text-[12px] font-semibold uppercase tracking-wider text-[#FF6B35]">
								Example
							</div>
							<div className="text-[14px] text-[#2D3748]">
								<div>
									<span className="font-medium">Input:</span> {example.input}
								</div>
								<div className="mt-1">
									<span className="font-medium">Result:</span> {example.output}
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
