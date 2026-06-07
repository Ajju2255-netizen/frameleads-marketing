export type FAQItem = {
	question: string;
	answer: string;
};

type Props = {
	items: FAQItem[];
	heading?: string;
};

/**
 * FAQ list — `.faq-answer` class lets Speakable schema target the answers.
 * Pair with FAQPage JSON-LD via SchemaInjector.
 */
export function FAQBlock({ items, heading = "Frequently asked questions" }: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-9">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				FAQ
			</div>
			<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
				{heading}
			</h2>
			<div className="mt-5 divide-y divide-[#FFE4D6] overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white">
				{items.map((it) => (
					<details
						key={it.question}
						className="group p-5 sm:p-6 open:bg-[#FFF7F2]/60"
					>
						<summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden">
							<span className="font-poppins text-[16px] sm:text-[17px] font-semibold text-[#2D3748]">
								{it.question}
							</span>
							<span
								aria-hidden
								className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#FFE4D6] bg-white text-[#FF6B35] transition-transform group-open:rotate-45"
							>
								+
							</span>
						</summary>
						<p className="faq-answer mt-3 text-[15px] leading-relaxed text-[#5A5A5A]">
							{it.answer}
						</p>
					</details>
				))}
			</div>
		</section>
	);
}
