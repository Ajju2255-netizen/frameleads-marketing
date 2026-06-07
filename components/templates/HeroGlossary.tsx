import { Breadcrumb, type Crumb } from "./Breadcrumb";

type Props = {
	term: string;
	expansion?: string;
	subhead?: string;
	crumbs?: Crumb[];
};

export function HeroGlossary({ term, expansion, subhead, crumbs }: Props) {
	const breadcrumbs: Crumb[] =
		crumbs ?? [
			{ href: "/", label: "Home" },
			{ href: "/glossary", label: "Glossary" },
			{ label: term },
		];

	return (
		<header className="relative overflow-hidden border-b border-[#FFE4D6] bg-gradient-to-b from-[#FFF7F2] via-white to-white">
			{/* Subtle accent grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(900px_240px_at_20%_-40%,rgba(255,107,53,0.08),transparent_60%)]"
			/>
			<div className="mx-auto max-w-3xl px-6 pt-8 pb-10 sm:pt-12 sm:pb-14">
				<Breadcrumb items={breadcrumbs} />
				<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF6B35]">
					<span
						aria-hidden
						className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
					/>
					Glossary
				</div>
				<h1 className="mt-4 font-poppins text-[34px] sm:text-[44px] font-bold leading-[1.05] tracking-tight text-[#2D3748]">
					What is {term}?
				</h1>
				{expansion ? (
					<p className="mt-2 font-poppins text-[18px] sm:text-[20px] font-medium text-[#FF6B35]">
						{expansion}
					</p>
				) : null}
				{subhead ? (
					<p className="direct-answer mt-5 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#5A5A5A]">
						{subhead}
					</p>
				) : null}
			</div>
		</header>
	);
}
