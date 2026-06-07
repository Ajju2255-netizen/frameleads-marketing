type Props = {
	children: React.ReactNode;
};

/**
 * Brand-aligned long-form prose container. Used for explainer paragraphs
 * between structured modules. Reading width capped for comfort.
 */
export function Prose({ children }: Props) {
	return (
		<section
			className={[
				"mx-auto max-w-3xl px-6 py-7",
				"font-inter text-[15.5px] sm:text-[16px] leading-[1.7] text-[#2D3748]/90",
				"[&_h2]:font-poppins [&_h2]:mt-7 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:sm:text-[24px] [&_h2]:font-bold [&_h2]:text-[#2D3748]",
				"[&_h3]:font-poppins [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:text-[#2D3748]",
				"[&_p]:mt-3",
				"[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-[#FF6B35]",
				"[&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:marker:text-[#FF6B35]",
				"[&_li]:mt-1.5",
				"[&_strong]:font-semibold [&_strong]:text-[#2D3748]",
				"[&_em]:not-italic [&_em]:text-[#FF6B35]",
				"[&_a]:text-[#2D3748] [&_a]:underline [&_a]:decoration-[#FFE4D6] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:text-[#FF6B35] [&_a]:hover:decoration-[#FF6B35]",
			].join(" ")}
		>
			{children}
		</section>
	);
}
