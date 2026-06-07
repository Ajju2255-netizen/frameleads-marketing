/**
 * KeyPointsBlock — the at-a-glance bullets above the fold.
 *
 * No "TL;DR" label (per brand voice). Renders a clean numbered card grid
 * that reads as both human scan-bait and AI-Overview snippet bait
 * (.tldr selector kept for Speakable schema continuity).
 */

type Props = {
	bullets: string[];
};

export function KeyPointsBlock({ bullets }: Props) {
	if (bullets.length === 0) return null;
	return (
		<section className="mx-auto max-w-3xl px-6 pb-2 pt-6">
			<ol className="tldr grid grid-cols-1 gap-2.5 sm:grid-cols-3">
				{bullets.map((b, idx) => (
					<li
						key={b}
						className="group relative flex flex-col gap-2 rounded-2xl border border-[#FFE4D6] bg-white/80 p-4 shadow-[0_1px_2px_rgba(45,55,72,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(255,107,53,0.10)]"
					>
						<span
							aria-hidden
							className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF6B35]"
						>
							{String(idx + 1).padStart(2, "0")}
						</span>
						<p className="text-[15px] leading-snug text-[#2D3748]">{b}</p>
					</li>
				))}
			</ol>
		</section>
	);
}
