import { practice } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : undefined;

export function SeoJsonLd() {
  if (!siteUrl) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${practice.therapistName}, ${practice.credentials}`,
    description:
      "Individual therapy for adults in Thompson and North Grosvenor Dale, Connecticut. In-person and telehealth.",
    url: siteUrl,
    telephone: practice.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.addressLine1,
      addressLocality: "Thompson",
      addressRegion: "CT",
      postalCode: "06255",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "North Grosvenor Dale" },
      { "@type": "City", name: "Thompson" },
      { "@type": "City", name: "Putnam" },
      { "@type": "City", name: "Woodstock" },
      { "@type": "AdministrativeArea", name: "Windham County" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
