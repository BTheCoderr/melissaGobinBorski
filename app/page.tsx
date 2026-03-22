import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { featuredSpecialties } from "@/lib/featured";
import { insuranceAccepted, practice } from "@/lib/site";
import {
  btnPrimary,
  btnSecondary,
  card,
  cardInset,
  cardRaised,
  cn,
  linkAccent,
  proseBody,
  proseBodySm,
  sectionRule,
  sectionY,
  shell,
  tag,
} from "@/lib/ui";

export const metadata: Metadata = {
  title: "Therapy for Adults in Thompson, CT",
  description:
    "When everything feels like too much, you don’t have to carry it alone. Melissa Gobin Borski, LCSW, LICSW—individual therapy in Thompson, CT. In-person & telehealth.",
};

const featureItems = [
  {
    t: "Steady presence",
    d: "A calm room and unhurried attention—online or in person.",
  },
  {
    t: "Tools that translate",
    d: "Skills you can use between sessions, in real situations.",
  },
  {
    t: "No mystery",
    d: "You’ll always know what we’re doing together, and why.",
  },
] as const;

function EditorialSection({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "wash" | "mist";
}) {
  const tones = {
    default: "bg-background",
    wash: "bg-gradient-to-b from-paper-alt/80 via-background to-background",
    mist: "bg-gradient-to-b from-blue-soft/20 via-transparent to-background",
  } as const;

  return (
    <section className={cn("relative", tones[tone], sectionY, className)}>
      <div className={sectionRule} aria-hidden />
      <div className={shell}>{children}</div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />

      <section className="relative border-b border-foreground/[0.05] bg-sage-light/25 py-10 md:py-12">
        <div className={shell}>
          <p className="mx-auto max-w-2xl text-center text-[1.0625rem] font-light leading-[1.75] text-foreground/88 md:text-[1.125rem]">
            Unsure about therapy? That’s normal. A first step can be as small as a short call or
            message—<span className="font-normal text-foreground">you set the pace.</span>
          </p>
        </div>
      </section>

      <EditorialSection>
        <FadeIn>
          <SectionTitle kicker="Permission" title="Hard seasons rarely come with a map" />
          <p className={cn(proseBody, "mt-7")}>
            Old pain, new stress, or a quiet sense that something needs to shift—support can make
            the weight feel more workable.
          </p>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="wash">
        <FadeIn>
          <SectionTitle kicker="How we work" title="Clear, kind, and practical" />
          <p className={cn(proseBody, "mt-7 max-w-2xl")}>
            One-on-one care for adults, tuned to what your nervous system can handle. With{" "}
            {practice.yearsInPractice} years in practice, I balance warmth with honesty—so change
            feels real, not performative.
          </p>
          <ul className="mt-14 grid gap-5 sm:grid-cols-3">
            {featureItems.map((item) => (
              <li key={item.t}>
                <div className={cn(card, "p-7 md:p-8")}>
                  <p className="font-serif text-lg text-foreground">{item.t}</p>
                  <p className={cn(proseBodySm, "mt-4")}>{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </EditorialSection>

      <EditorialSection>
        <FadeIn>
          <SectionTitle kicker="Focus areas" title="What people often bring" />
          <p className={cn(proseBodySm, "mt-5 max-w-xl")}>
            Thompson, Putnam, Woodstock, and Windham County—near or far by telehealth.
          </p>
          <ul className="mt-12 flex flex-wrap gap-3">
            {featuredSpecialties.map((s) => (
              <li key={s} className={tag}>
                {s}
              </li>
            ))}
          </ul>
          <p className={cn(proseBodySm, "mt-10 max-w-2xl")}>
            Also: anger, bipolar disorder, BPD, behavioral concerns, codependency, mood and
            personality patterns, self-harm, and more.{" "}
            <Link href="/services" className={linkAccent}>
              Full list
            </Link>
          </p>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="mist">
        <FadeIn>
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle kicker="Where we meet" title="In-office or from home" />
              <p className={cn(proseBody, "mt-7")}>
                {practice.addressLine1}, {practice.addressLine2}. Prefer video? Secure telehealth
                is available when it’s a good clinical fit.
              </p>
            </div>
            <aside className={cn(cardRaised, "p-9 md:p-10")}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-sage">
                Availability
              </p>
              <p className="mt-5 font-serif text-2xl font-normal text-foreground">New clients welcome</p>
              <p className={cn(proseBodySm, "mt-4")}>
                Not sure we’re the right fit? One conversation can answer a lot—no pressure to commit
                on the spot.
              </p>
              <Link href="/contact" className={cn(btnPrimary, "mt-10 inline-flex w-full justify-center sm:w-auto")}>
                Check openings
              </Link>
            </aside>
          </div>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="wash">
        <FadeIn>
          <SectionTitle kicker="Insurance" title="Plans I work with" />
          <p className={cn(proseBodySm, "mt-5 max-w-xl")}>
            Benefits differ by policy—we’ll confirm yours together before we begin.
          </p>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {insuranceAccepted.map((p) => (
              <li key={p} className={cn(cardInset, "px-5 py-4 text-[0.9375rem] text-foreground/90")}>
                {p}
              </li>
            ))}
          </ul>
        </FadeIn>
      </EditorialSection>

      <section className={cn("relative bg-gradient-to-b from-cream/35 to-paper-alt/40", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={cn(shell, "text-center")}>
          <FadeIn>
            <h2 className="mx-auto max-w-md text-balance font-serif text-[clamp(1.6rem,3.5vw,2.125rem)] font-normal leading-snug tracking-[-0.02em] text-foreground">
              One gentle next step is enough
            </h2>
            <p className={cn(proseBody, "mx-auto mt-8 max-w-md")}>
              Reach out however feels safest—form, call, or a brief email. I respond as soon as I
              can.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={cn(btnPrimary, "w-full sm:w-auto")}>
                Request a conversation
              </Link>
              <a href={`tel:${practice.phoneTel}`} className={cn(btnSecondary, "w-full sm:w-auto")}>
                {practice.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <EditorialSection className="pb-[clamp(4rem,12vw,7rem)] pt-4">
        <FadeIn>
          <SectionTitle kicker="The space" title="A quiet place to land" />
          <p className={cn(proseBodySm, "mt-5 max-w-xl")}>
            Your office photos—swap these files in <code className="text-foreground/70">public/</code>{" "}
            anytime.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <figure className="md:row-span-1">
              <div className={cn("photoFrame bg-paper-alt")}>
                <Image
                  src="/office-1.jpg"
                  alt="Therapy office interior — replace with your photo"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
            <figure className="flex flex-col justify-center md:pt-8">
              <div className={cn("photoFrame bg-paper-alt")}>
                <Image
                  src="/office-2.jpg"
                  alt="Comfortable therapy space — replace with your photo"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
          </div>
        </FadeIn>
      </EditorialSection>
    </div>
  );
}
