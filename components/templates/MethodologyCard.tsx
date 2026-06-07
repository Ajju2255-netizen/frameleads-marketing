type Stage = {
	name: "Map" | "Magnet" | "Machine" | "Multiply" | "Measure";
	description: string;
};

type Props = {
	contextLabel: string;
	stages?: Stage[];
};

const DEFAULT_STAGES: Stage[] = [
	{
		name: "Map",
		description:
			"Define ICP, jobs-to-be-done, and the precise buying triggers that justify spend.",
	},
	{
		name: "Magnet",
		description:
			"Build the linkable assets, content, and experiences that pull right-fit buyers in.",
	},
	{
		name: "Machine",
		description:
			"Operate the always-on acquisition engine — paid + organic + community — under one P&L.",
	},
	{
		name: "Multiply",
		description:
			"Compound through retention, referral, and lifetime-value engineering.",
	},
	{
		name: "Measure",
		description:
			"Run against a single north-star metric with a tight loop of leading indicators.",
	},
];

export function MethodologyCard({
	contextLabel,
	stages = DEFAULT_STAGES,
}: Props) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-9">
			<div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				The Frameleads Growth System™
			</div>
			<h2 className="font-poppins text-[26px] sm:text-[30px] font-bold tracking-tight text-[#2D3748]">
				Map → Magnet → Machine → Multiply → Measure
			</h2>
			<p className="mt-2 max-w-2xl text-[14px] sm:text-[15px] leading-relaxed text-[#5A5A5A]">
				The same five-stage operating system across every engagement —
				calibrated to {contextLabel || "your specific market"}.
			</p>
			<ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
				{stages.map((s, idx) => (
					<li
						key={s.name}
						className="group relative overflow-hidden rounded-2xl border border-[#FFE4D6] bg-white p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(255,107,53,0.10)]"
					>
						<span
							aria-hidden
							className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-gradient-to-b from-[#FF6B35] to-[#FFB088] opacity-90"
						/>
						<div className="ml-3 flex items-baseline gap-3">
							<span
								aria-hidden
								className="font-poppins text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]"
							>
								{String(idx + 1).padStart(2, "0")}
							</span>
							<h3 className="font-poppins text-[17px] font-bold text-[#2D3748]">
								{s.name}
							</h3>
						</div>
						<p className="ml-3 mt-2 text-[14px] leading-relaxed text-[#2D3748]/85">
							{s.description}
						</p>
					</li>
				))}
			</ol>
		</section>
	);
}
