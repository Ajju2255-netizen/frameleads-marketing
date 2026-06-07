/**
 * "Last reviewed / updated" stamp — small but high-leverage for AI engines
 * and quality raters who weight content currency.
 */

type Props = {
	updatedAt: string; // ISO date or YYYY-MM-DD
	reviewedBy?: string;
};

function formatDate(iso: string): string {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

export function TimestampStamp({ updatedAt, reviewedBy }: Props) {
	return (
		<div className="mx-auto max-w-3xl px-6 py-3 text-[12px] text-[#5A5A5A]">
			<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
				<span className="inline-flex items-center gap-1.5">
					<span
						aria-hidden
						className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
					/>
					<span>Last reviewed: <time dateTime={updatedAt}>{formatDate(updatedAt)}</time></span>
				</span>
				{reviewedBy ? (
					<>
						<span aria-hidden className="text-[#FFE4D6]">·</span>
						<span>by {reviewedBy}</span>
					</>
				) : null}
				<span aria-hidden className="text-[#FFE4D6]">·</span>
				<span>Refreshed quarterly from live client data</span>
			</div>
		</div>
	);
}
