import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { approaches, insuranceAccepted, practice, specialties } from "@/lib/site";
import { btnPrimary, card, cn, proseBody, proseBodySm, sectionRule, sectionY, shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual therapy for adults—Thompson, Windham County, CT. CBT, DBT, trauma-informed care. In-person & telehealth.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Services"
        title="Therapy shaped around you"
        description="One-on-one work for adults—clear, collaborative, and paced for where you are today."
      />

      <section className={cn("relative", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <FadeIn>
            <SectionTitle kicker="Individual therapy" title="For adults, in confidence" />
            <p className={cn(proseBody, "mt-7 max-w-2xl")}>
              Sessions are conversational and private. We name what’s hard, notice patterns, and
              practice responses that fit your actual life—not a textbook version of it.
            </p>
            <p className={cn(proseBody, "mt-6 max-w-2xl")}>
              Office: {practice.addressLine1}, {practice.addressLine2}. Near{" "}
              {practice.nearbyAreas.join(", ")}, and Windham County. Telehealth when it’s clinically
              appropriate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={cn("relative bg-paper-alt/50", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <FadeIn>
            <SectionTitle kicker="Concerns" title="Areas of experience" />
            <p className={cn(proseBodySm, "mt-5 max-w-xl")}>
              Always understood in the context of your story—not a checklist.
            </p>
            <ul className="mt-12 grid gap-2 text-muted sm:grid-cols-2">
              {specialties.map((s) => (
                <li key={s} className="flex gap-2 text-sm md:text-base">
                  <span className="text-sage" aria-hidden>
                    ·
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className={cn("relative", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <FadeIn>
            <SectionTitle kicker="Methods" title="Approaches, in plain language" />
            <p className={cn(proseBodySm, "mt-5 max-w-2xl")}>
              Evidence-informed models, explained without jargon—unless you want the clinical detail.
            </p>
            <dl className="mt-14 space-y-6">
              {approaches.map((a) => (
                <div key={a.name} className={cn(card, "p-8 md:p-9")}>
                  <dt className="font-serif text-lg font-normal text-foreground">{a.name}</dt>
                  <dd className={cn(proseBodySm, "mt-4")}>{a.plain}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className={cn("relative bg-gradient-to-b from-blue-soft/15 to-background", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <FadeIn>
            <SectionTitle kicker="What to expect" title="A steady rhythm" />
            <ul className="mt-10 max-w-2xl space-y-6 text-muted">
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                <span className={proseBodySm}>
                  <strong className="font-medium text-foreground">First sessions:</strong> What
                  brought you in, what you hope for, and space for your questions.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                <span className={proseBodySm}>
                  <strong className="font-medium text-foreground">As we continue:</strong> Support,
                  skills, and deeper work—balanced at a pace that feels sustainable.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                <span className={proseBodySm}>
                  <strong className="font-medium text-foreground">Between visits:</strong> Small
                  practices when helpful—never busywork, always in service of your goals.
                </span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className={cn("relative", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={shell}>
          <FadeIn>
            <SectionTitle kicker="Insurance" title="Fees & coverage" />
            <p className={cn(proseBodySm, "mt-5 max-w-2xl")}>
              {insuranceAccepted.join(", ")}. Coverage varies—we’ll verify your plan together.
            </p>
            <Link href="/contact" className={cn(btnPrimary, "mt-12 inline-flex")}>
              Ask a question or request a time
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
