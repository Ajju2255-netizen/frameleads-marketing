type Props = {
	title?: string;
	children: React.ReactNode;
};

export function ExampleBlock({ title = "Worked example", children }: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-8">
			<div className="rounded-2xl border border-[#FFE4D6] bg-white p-6 shadow-[0_2px_10px_rgba(45,55,72,0.04)]">
				<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
					Worked example
				</div>
				<h2 className="font-poppins text-[20px] font-semibold text-[#2D3748]">{title}</h2>
				<div className="prose prose-sm sm:prose-base mt-3 max-w-none text-[#2D3748]/90">
					{children}
				</div>
			</div>
		</section>
	);
}
