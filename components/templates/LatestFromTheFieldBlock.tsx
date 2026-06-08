/**
 * LatestFromTheFieldBlock — auto-renders 2-3 most-relevant blog posts on a commercial page.
 *
 * Used by ServiceHubPage, IndustryPillarPage, MoneyPage, PillarPage to surface
 * the editorial layer of the site at every commercial cell. Filters by
 * serviceId / industryId / cityTag / pillarSlug — first match wins; explicit
 * `posts` array overrides everything for hand-curated arrangements.
 */

import Link from "next/link";
import {
	type BlogPost,
	POST_TYPE_LABELS,
	postsByService,
	postsByIndustry,
	postsByCity,
	postsByCityAndService,
	postsByPillar,
	type PillarSlug,
} from "@/lib/data/blogs";

type Props = {
	serviceId?: string;
	industryId?: string;
	cityTag?: string;
	pillarSlug?: PillarSlug;
	/** Optional explicit list — overrides all filters. */
	posts?: BlogPost[];
	limit?: number;
	heading?: string;
	eyebrow?: string;
};

function resolvePosts(props: Props): BlogPost[] {
	const { serviceId, industryId, cityTag, pillarSlug, posts, limit } = props;
	const max = limit ?? 3;
	if (posts && posts.length > 0) return posts.slice(0, max);
	if (cityTag && serviceId) return postsByCityAndService(cityTag, serviceId, max);
	if (pillarSlug) return postsByPillar(pillarSlug, max);
	if (serviceId) return postsByService(serviceId, max);
	if (industryId) return postsByIndustry(industryId, max);
	if (cityTag) return postsByCity(cityTag, max);
	return [];
}

export function LatestFromTheFieldBlock(props: Props) {
	const items = resolvePosts(props);
	if (items.length === 0) return null;
	const heading = props.heading ?? "Latest from the field";
	const eyebrow = props.eyebrow ?? "Operator notes";
	return (
		<section
			aria-labelledby="latest-from-field-heading"
			className="mx-auto max-w-3xl border-t border-[#FFE4D6]/60 px-6 py-10"
		>
			<div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
				{eyebrow}
			</div>
			<h2
				id="latest-from-field-heading"
				className="mt-2 font-poppins text-[24px] sm:text-[28px] font-bold tracking-tight text-[#2D3748]"
			>
				{heading}
			</h2>
			<ul className="mt-5 grid gap-3 sm:grid-cols-3">
				{items.map((p) => (
					<li
						key={p.slug}
						className="rounded-2xl border border-[#FFE4D6] bg-white p-4 shadow-[0_1px_8px_rgba(45,55,72,0.04)] transition-shadow hover:shadow-[0_4px_16px_rgba(45,55,72,0.08)]"
					>
						<Link href={`/blogs/${p.slug}`} className="block">
							<div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
								{POST_TYPE_LABELS[p.type]}
							</div>
							<div className="mt-1.5 font-poppins text-[14px] font-semibold leading-snug text-[#2D3748]">
								{p.title}
							</div>
							<div className="mt-1.5 text-[12.5px] leading-snug text-[#5A5A5A] line-clamp-3">
								{p.description}
							</div>
							<div className="mt-2.5 text-[12px] font-semibold text-[#FF6B35]">
								Read →
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
