type Props = {
	children: React.ReactNode;
};

/**
 * The 60-word AIO-engineered definition. Class `.direct-answer` is targeted by
 * Speakable schema for AI-engine citation.
 *
 * Visual brief: oversized type, generous whitespace, orange edge accent —
 * matches the Frameleads "operator-grade clarity" brand voice.
 */
export function DefinitionBlock({ children }: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-7">
			<div
				role="note"
				aria-label="Definition"
				className="direct-answer relative overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white p-6 sm:p-8 shadow-[0_4px_16px_rgba(45,55,72,0.04)]"
			>
				<span
					aria-hidden
					className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-gradient-to-b from-[#FF6B35] to-[#FFB088]"
				/>
				<div className="ml-3 sm:ml-4">
					<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Definition
					</div>
					<p className="font-poppins text-[18px] sm:text-[20px] font-medium leading-[1.45] text-[#2D3748]">
						{children}
					</p>
				</div>
			</div>
		</section>
	);
}
