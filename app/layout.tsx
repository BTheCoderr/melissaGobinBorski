import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SeoJsonLd } from "@/lib/seo-json-ld";
import { practice } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import { cn } from "@/lib/ui";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const baseTitle = `${practice.therapistName} | Therapist in Thompson & North Grosvenor Dale, CT`;

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: baseTitle,
    template: `%s | ${practice.therapistName}`,
  },
  description: `Calm, experienced therapy for ${practice.audienceShort.toLowerCase()} in Thompson & North Grosvenor Dale, CT. LCSW, LICSW. In-person & telehealth.`,
  openGraph: {
    title: baseTitle,
    description:
      "A steadier place to begin—individual therapy with Melissa Gobin Borski, LCSW, LICSW.",
    url: siteUrl,
    siteName: practice.therapistName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(serif.variable, sans.variable, "h-full")}>
      <body className="flex min-h-full flex-col font-sans text-foreground antialiased">
        <SeoJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-sage focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
