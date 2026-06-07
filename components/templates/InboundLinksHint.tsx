import Link from "next/link";

/**
 * Tiny "linked from" footer — shows that this page is part of a topical graph.
 * Primarily a UX cue; secondarily an internal-link density signal for crawlers.
 */

type Props = {
	count: number;
	hubHref?: string;
	hubLabel?: string;
};

export function InboundLinksHint({
	count,
	hubHref = "/",
	hubLabel = "Frameleads",
}: Props) {
	if (count <= 0) return null;
	return (
		<aside className="mx-auto max-w-3xl px-6 py-3 text-[12px] text-[#5A5A5A]">
			<span>
				Cross-referenced from {count} other page{count === 1 ? "" : "s"} on{" "}
				<Link
					href={hubHref}
					className="text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:text-[#FF6B35]"
				>
					{hubLabel}
				</Link>
				.
			</span>
		</aside>
	);
}
