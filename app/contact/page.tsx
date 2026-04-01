import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { insuranceAccepted, mapEmbedUrl, mapSearchUrl, practice } from "@/lib/site";
import {
  card,
  cardInset,
  cn,
  linkAccent,
  proseBodySm,
  sectionRule,
  sectionY,
  shell,
} from "@/lib/ui";

type Props = {
  searchParams: Promise<{ success?: string }>;
};

export const metadata: Metadata = {
  title: "Contact",
  description: `${practice.therapistName}, LCSW, LICSW—${practice.phoneDisplay}, ${practice.email}. Thompson, Windham County, CT.`,
};

export default async function ContactPage({ searchParams }: Props) {
  const sp = await searchParams;
  const showThanks = sp.success === "1";

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Contact"
        title="Reach out when you’re ready"
        description="There’s no perfect script. A few words are enough to begin—I’ll meet you where you are."
      />

      <section className={cn("relative", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          {showThanks ? (
            <div className={cn(card, "mb-14 border-sage/15 bg-sage-light/35 p-7")} role="status">
              <p className="font-medium text-foreground">Thank you.</p>
              <p className={cn(proseBodySm, "mt-2")}>
                I’ll reply as soon as I can. If you don’t hear back within a few business days,
                please call{" "}
                <a className={linkAccent} href={`tel:${practice.phoneTel}`}>
                  {practice.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : null}

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-stone-500">
                Phone & office
              </p>
              <a
                className="mt-5 inline-block font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-normal text-foreground transition-colors hover:text-sage"
                href={`tel:${practice.phoneTel}`}
              >
                {practice.phoneDisplay}
              </a>
              <a
                className="mt-4 block text-[1.0625rem] font-medium text-sage underline decoration-sage/25 underline-offset-[5px] transition-colors hover:decoration-sage/60"
                href={`mailto:${practice.email}`}
              >
                {practice.email}
              </a>
              <p className={cn(proseBodySm, "mt-6")}>
                {practice.addressLine1}
                <br />
                {practice.addressLine2}
              </p>
              <p className={cn(proseBodySm, "mt-4")}>
                Thompson, North Grosvenor Dale, {practice.nearbyAreas.join(", ")}.
              </p>
              <p className={cn(proseBodySm, "mt-8")}>
                <span className="font-medium text-foreground">Insurance:</span>{" "}
                {insuranceAccepted.join(", ")}. We’ll confirm your benefits when we connect.
              </p>
              <div className={cn(card, "mt-8 border-blue-soft/40 bg-blue-soft/20 p-7")}>
                <p className={proseBodySm}>
                  Nervous to write or call? That’s common. A name, a good time to reach you, and one
                  sentence about what you need is plenty—we’ll go from there.
                </p>
              </div>
              <p className="mt-6 text-[0.75rem] leading-relaxed text-muted">
                Not for emergencies. If you or someone else is in immediate danger, call{" "}
                <strong className="font-medium text-foreground">911</strong> or go to the nearest ER.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-stone-500">
                Message
              </p>
              <p className={cn(proseBodySm, "mt-4")}>
                I read every note personally. No pressure to share more than feels okay.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 border-t border-foreground/[0.06] pt-16">
            <FadeIn>
              <SectionTitle
                kicker="Location"
                title="Find the office"
                titleClassName="text-xl md:text-2xl"
              />
              <p className="mt-3 text-sm text-muted">
                <a href={mapSearchUrl} target="_blank" rel="noopener noreferrer" className={linkAccent}>
                  Open in Google Maps
                </a>
              </p>
              <div className={cn(cardInset, "mt-8 overflow-hidden p-0")}>
                <iframe
                  title="Map: office location in Thompson, Connecticut"
                  src={mapEmbedUrl}
                  className="h-64 w-full grayscale-[12%] md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>

          <p className="mt-16 text-center text-sm text-muted">
            <Link href="/services" className={linkAccent}>
              Services
            </Link>
            {" · "}
            <Link href="/about" className={linkAccent}>
              About
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
