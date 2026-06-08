import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PillarPage } from "@/components/templates/PillarPage";
import { getPillar, pillarSlugs } from "@/lib/data/pillars";

export const revalidate = 86400;

interface PageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return pillarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const pillar = getPillar(slug);
	if (!pillar) return { title: "Pillar Not Found | Frameleads" };
	return {
		title: `${pillar.title} | Frameleads`,
		description: pillar.description,
		alternates: { canonical: `https://frameleads.com/blogs/pillars/${pillar.slug}` },
		openGraph: {
			title: pillar.title,
			description: pillar.description,
			url: `https://frameleads.com/blogs/pillars/${pillar.slug}`,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: pillar.title,
			description: pillar.description,
		},
	};
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const pillar = getPillar(slug);
	if (!pillar) notFound();
	return <PillarPage pillar={pillar} />;
}
