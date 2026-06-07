import type { ReactElement } from "react";

type SchemaProps = {
	schema: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Emits a JSON-LD <script> tag. Server component — runs at render time.
 * Per AIO checklist (vault NEW 10/10.02), every Tier 1+ page declares schema.
 */
export function SchemaInjector({ schema }: SchemaProps): ReactElement {
	const payload = Array.isArray(schema) ? schema : [schema];
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
		/>
	);
}
