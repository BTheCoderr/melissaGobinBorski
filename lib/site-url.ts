/**
 * Canonical site origin for metadataBase, Open Graph, JSON-LD, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in Netlify (and local `.env.local`) to match your live canonical URL
 * (e.g. apex vs www). If unset at build time, we fall back to the known production domain.
 */
const SITE_URL_FALLBACK = "https://melissagobintherapy.net";

function normalizeSiteUrl(raw: string | undefined): string | null {
  if (!raw?.trim()) return null;
  const t = raw.trim().replace(/\/+$/, "");
  if (!t.startsWith("http://") && !t.startsWith("https://")) return null;
  return t;
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? SITE_URL_FALLBACK;
}
