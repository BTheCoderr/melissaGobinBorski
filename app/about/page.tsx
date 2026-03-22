import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { practice } from "@/lib/site";
import { btnPrimary, cn, photoFrame, proseBody, proseBodySm, sectionRule, sectionY, shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description: `${practice.therapistName}, LCSW, LICSW—${practice.yearsInPractice}+ years supporting adults in Windham County, CT.`,
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="About"
        title="Grounded care for real life"
        description="Who I am, how I practice, and what it feels like to sit with me."
      />

      <section className={cn("relative", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_min(100%,280px)] md:items-start md:gap-20">
            <div className="space-y-16">
              <FadeIn>
                <SectionTitle kicker="Approach" title="Warm, direct, and unhurried" />
                <div className={cn("mt-7 space-y-6", proseBody)}>
                  <p>
                    I’m {practice.therapistName}, a licensed clinical social worker with{" "}
                    {practice.yearsInPractice} years in practice. I work with adults one-on-one—often
                    around anxiety, trauma, mood shifts, and the patterns that show up in
                    relationships.
                  </p>
                  <p>
                    Clients tell me they value both compassion and clarity. I won’t dodge what’s hard,
                    but I won’t push faster than your nervous system can go. Therapy here is a
                    partnership: your lived experience leads; I bring training, steadiness, and tools
                    we try together.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <SectionTitle kicker="Credentials" title="Training & licensure" />
                <ul className={cn("mt-7 space-y-4", proseBodySm)}>
                  <li>
                    <span className="font-medium text-foreground">Education:</span> {practice.education}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Licensure:</span>{" "}
                    {practice.licenses
                      .map((l) =>
                        "note" in l ? `${l.state} ${l.id} (${l.note})` : `${l.state} ${l.id}`,
                      )
                      .join(" · ")}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Format:</span> Individual adults;
                    in-person ({practice.locality}) and telehealth when appropriate.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn>
                <SectionTitle kicker="Philosophy" title="Why relationship matters" />
                <p className={cn(proseBody, "mt-7 max-w-2xl")}>
                  Healing rarely happens in a vacuum. We build enough safety to tell the truth, enough
                  structure to feel held, and enough flexibility to adapt when life shifts. Choosing
                  therapy is already brave—I meet that with presence, transparency, and respect for
                  your dignity.
                </p>
              </FadeIn>

              <FadeIn>
                <Link href="/contact" className={btnPrimary}>
                  Connect with me
                </Link>
              </FadeIn>
            </div>

            <aside className="md:sticky md:top-28">
              <div className={cn(photoFrame, "bg-paper-alt")}>
                <Image
                  src="/therapist-headshot.jpg"
                  alt={`${practice.therapistName} — replace with your headshot`}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                  sizes="280px"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
