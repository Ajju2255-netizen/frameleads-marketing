import Link from "next/link";
import { SchemaInjector } from "./SchemaInjector";

export type Crumb = {
	href?: string;
	label: string;
};

type Props = {
	items: Crumb[];
	/** When true, also emits BreadcrumbList JSON-LD (skip if parent already does). */
	emitSchema?: boolean;
};

const SITE_URL = "https://frameleads.com";

export function Breadcrumb({ items, emitSchema = false }: Props) {
	const schema = emitSchema
		? {
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: items.map((c, idx) => ({
					"@type": "ListItem",
					position: idx + 1,
					name: c.label,
					...(c.href ? { item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}` } : {}),
				})),
			}
		: null;

	return (
		<>
			{schema ? <SchemaInjector schema={schema} /> : null}
			<nav
				aria-label="Breadcrumb"
				className="mb-5 text-[13px] text-[#5A5A5A]"
			>
				<ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
					{items.map((c, idx) => {
						const last = idx === items.length - 1;
						return (
							<li key={`${c.label}-${idx}`} className="flex items-center gap-2">
								{c.href && !last ? (
									<Link
										href={c.href}
										className="transition-colors hover:text-[#FF6B35]"
									>
										{c.label}
									</Link>
								) : (
									<span className={last ? "text-[#2D3748]" : ""}>{c.label}</span>
								)}
								{!last && (
									<span aria-hidden className="text-[#FFE4D6]">
										/
									</span>
								)}
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}
