/**
 * Canonical author registry for E-E-A-T compliance.
 *
 * Every byline on the site (programmatic Tier cells, blog posts, glossary
 * entries, calculators, etc.) resolves through this file so search/AI engines
 * see a stable Person entity rather than ad-hoc strings.
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
  /** Other authoritative profile URLs that resolve to this Person entity */
  sameAs?: string[];
  /** Image URL (avatar / headshot) for the Person schema */
  image?: string;
  /** Internal URL where the author bio lives (e.g. /our-team#slug) */
  url: string;
};

export const ajsalAbbas: Author = {
  id: "ajsal-abbas",
  name: "Ajsal Abbas",
  role: "Founder & CEO, Frameleads",
  bio:
    "Ajsal Abbas is the founder of Frameleads. Performance and organic marketing operator for 15+ years; built and scaled brands featured on Shark Tank India. He leads the team that runs SEO, paid acquisition, content, and CRO programs on the Frameleads Growth System™.",
  linkedin: "https://www.linkedin.com/in/ajsalabbas/",
  sameAs: [
    "https://www.linkedin.com/in/ajsalabbas/",
    "https://www.youtube.com/@ajsalabbas8093",
  ],
  url: `${SITE_URL}/our-team#ajsal-abbas`,
};

export const editorialTeam: Author = {
  id: "frameleads-editorial-team",
  name: "Frameleads Editorial Team",
  role: "Performance + organic operators",
  bio:
    "Frameleads' editorial team — senior performance and organic operators reviewing benchmark data, channel mix, and category-specific playbooks. Reviewed quarterly against live client data.",
  url: `${SITE_URL}/our-team`,
};

export const AUTHORS: Record<string, Author> = {
  [ajsalAbbas.id]: ajsalAbbas,
  [editorialTeam.id]: editorialTeam,
};

/** Default author used for programmatic Tier cells where attribution to a
 *  named human is more credible for E-E-A-T than an organization byline. */
export const DEFAULT_AUTHOR = ajsalAbbas;

/** Build a schema.org Person JSON-LD object for an Author. */
export function personJsonLd(author: Author): Record<string, unknown> {
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${author.url}#person`,
    name: author.name,
    jobTitle: author.role,
    url: author.url,
    description: author.bio,
    worksFor: { "@id": `${SITE_URL}#organization` },
  };
  if (author.sameAs && author.sameAs.length > 0) obj.sameAs = author.sameAs;
  if (author.image) obj.image = author.image;
  return obj;
}
