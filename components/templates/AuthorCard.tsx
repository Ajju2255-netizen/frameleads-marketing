import { SchemaInjector } from "./SchemaInjector";
import { type Author, personJsonLd } from "@/lib/data/authors";

type Props = {
	name: string;
	role: string;
	bio: string;
	linkedin?: string;
	updatedAt?: string;
	/**
	 * When provided, an inline Person JSON-LD is emitted next to the card so
	 * search/AI engines see the canonical author entity in addition to the
	 * page's Article schema.
	 */
	person?: Author;
};

export function AuthorCard({ name, role, bio, linkedin, updatedAt, person }: Props) {
	const initials = name
		.split(" ")
		.map((p) => p[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

	return (
		<aside className="mx-auto max-w-3xl px-6 py-7">
			{person ? <SchemaInjector schema={personJsonLd(person)} /> : null}
			<div className="flex flex-col gap-4 rounded-2xl border border-[#FFE4D6] bg-white p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6 shadow-[0_4px_16px_rgba(45,55,72,0.04)]">
				<div
					aria-hidden
					className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB088] font-poppins text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(255,107,53,0.30)]"
				>
					{initials}
				</div>
				<div className="min-w-0 flex-1">
					<div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35]">
						Author
					</div>
					<div className="font-poppins text-[15px] font-semibold text-[#2D3748]">
						{name}
					</div>
					<div className="text-[13px] text-[#5A5A5A]">{role}</div>
					<p className="mt-3 text-[14px] leading-relaxed text-[#2D3748]/85">
						{bio}
					</p>
					<div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#5A5A5A]">
						{linkedin ? (
							<a
								href={linkedin}
								className="inline-flex items-center gap-1.5 text-[#2D3748] underline decoration-[#FFE4D6] decoration-2 underline-offset-4 hover:text-[#FF6B35] hover:decoration-[#FF6B35]"
								target="_blank"
								rel="noreferrer noopener"
							>
								Verified on LinkedIn
								<span aria-hidden>↗</span>
							</a>
						) : null}
						{updatedAt ? (
							<>
								<span aria-hidden className="text-[#FFE4D6]">
									·
								</span>
								<span>Last reviewed: {updatedAt}</span>
							</>
						) : null}
					</div>
				</div>
			</div>
		</aside>
	);
}
