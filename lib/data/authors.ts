/**
 * Canonical author registry for E-E-A-T compliance.
 *
 * Every byline on the site (programmatic Tier cells, blog posts, glossary
 * entries, calculators, etc.) resolves through this file so search/AI engines
 * see a stable entity rather than ad-hoc strings.
 */

const SITE_URL = "https://frameleads.com";

export type Author = {
  /** Stable slug used in @id anchors */
  id: string;
  /** Full display name */
  name: string;
  /** Job title shown on AuthorCard */
  role: string;
  /** Short bio shown on AuthorCard */
  bio: string;
  /** LinkedIn URL — primary E-E-A-T trust signal */
  linkedin?: string;
  /** Other authoritative profile URLs that resolve to this entity */
  sameAs?: string[];
  /** Image URL (avatar / headshot) for the schema */
  image?: string;
  /** Internal URL where the author bio lives */
  url: string;
};

export const editorialTeam: Author = {
  id: "frameleads-editorial-team",
  name: "Frameleads Editorial Team",
  role: "Performance + organic operators",
  bio:
    "The Frameleads editorial team — senior performance and organic operators reviewing benchmark data, channel mix, and category-specific playbooks. All editorial pages are reviewed quarterly against live client data.",
  url: `${SITE_URL}/about`,
};

export const AUTHORS: Record<string, Author> = {
  [editorialTeam.id]: editorialTeam,
  // Legacy id kept as alias so existing blog frontmatter (authorId: "ajsal-abbas")
  // resolves without bulk-rewriting content files.
  "ajsal-abbas": editorialTeam,
};

/** Default author used for programmatic Tier cells. */
export const DEFAULT_AUTHOR = editorialTeam;

/** Build a schema.org JSON-LD object for an Author. */
export function personJsonLd(author: Author): Record<string, unknown> {
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${author.url}#editorial-team`,
    name: author.name,
    url: author.url,
    description: author.bio,
    parentOrganization: { "@id": `${SITE_URL}#organization` },
  };
  if (author.sameAs && author.sameAs.length > 0) obj.sameAs = author.sameAs;
  if (author.image) obj.image = author.image;
  return obj;
}
