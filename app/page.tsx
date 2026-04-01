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
  photoFrame,
  proseBody,
  proseBodySm,
  sectionRule,
  sectionY,
  shell,
  tag,
} from "@/lib/ui";

const testimonialQuotes = [
  "It’s eye opening, it helped me see what was going on, things are much more clear now.",
  "You care about what you do and that means a lot.",
  "I was a hopeless mess and all over the place and Melissa helped me become stronger and more confident to find a complete sense of my self-confidence.",
  "When the rubber meets the road, she’ll meet you there.",
] as const;

export const metadata: Metadata = {
  description:
    "Therapy for anxiety, depression, and life transitions in Thompson, CT. Serving Putnam, Woodstock, and Windham County. In-person and telehealth available.",
};

const featureItems = [
  {
    t: "Steady presence",
    d: "A safe place to process scary and overwhelming emotions—and supportive space to work through challenges with someone neutral and attuned to your individual needs.",
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

      <section className="relative border-b border-foreground/[0.05] bg-background py-12 md:py-14">
        <div className={shell}>
          <FadeIn>
            <h2 className="font-serif text-[clamp(1.35rem,2.8vw,1.75rem)] font-normal tracking-[-0.02em] text-foreground">
              Therapy Services in Thompson, CT
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              {(
                [
                  "Anxiety therapy",
                  "Depression counseling",
                  "Trauma-informed & EMDR-informed care",
                  "Adolescent therapy (13+)",
                  "Stress management & life transitions",
                ] as const
              ).map((item) => (
                <li key={item} className="flex gap-2 text-[1.0625rem] leading-snug text-foreground/90">
                  <span className="text-sage" aria-hidden>
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={cn(proseBodySm, "mt-8 max-w-2xl text-muted")}>
              Individual therapy—serving adults and teens 13+ in Windham County and nearby.{" "}
              <Link href="/services" className={linkAccent}>
                Full services overview
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <EditorialSection>
        <FadeIn>
          <SectionTitle kicker="Permission" title="Hard seasons rarely come with a map" />
          <p className={cn(proseBody, "mt-7")}>
            Old pain, new stress, or a quiet sense that something needs to shift—having the right
            supports can help these changes feel less scary and more manageable.
          </p>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="wash">
        <FadeIn>
          <SectionTitle kicker="How we work" title="Clear, kind, and practical" />
          <p className={cn(proseBody, "mt-7 max-w-2xl")}>
            One-on-one care for {practice.audienceShort.toLowerCase()}, tuned to what your nervous
            system can handle. With {practice.yearsInPractice} years in practice, I balance warmth
            with honesty—so change feels real without feeling like you need to say the “right thing,”
            and without fear of judgment.
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
          <p className={cn(proseBodySm, "mt-5 max-w-xl")}>{practice.serviceAreaLine}</p>
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
                is available when it’s a good clinical fit. {practice.massachusettsTelehealthLine}
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

      <EditorialSection>
        <FadeIn>
          <SectionTitle kicker="The space" title="Office environment" />
          <p className={cn(proseBody, "mt-7 max-w-2xl")}>
            The room is meant to feel grounded and uncluttered—soft light, comfortable seating, and
            a few thoughtful touches so you can settle in. Nothing here is about performance; it’s
            about having a private place to think out loud.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <figure className="m-0">
              <div className={cn(photoFrame, "bg-paper-alt")}>
                <Image
                  src="/office-welcome.png"
                  alt="A bright therapy office with a patterned armchair, round wooden coffee table with tissues and an hourglass, bookshelf with plants, and blue-gray walls."
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className={cn(photoFrame, "bg-paper-alt")}>
                <Image
                  src="/office-session-space.png"
                  alt="A warm therapy office with a beige sofa, patterned chairs, a round coffee table on a green rug, natural light through sheer curtains, and a small tan therapy dog standing on the hardwood floor."
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
          </div>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="mist">
        <FadeIn>
          <SectionTitle kicker="Co-therapist" title="Meet Roscoe" />
          <div className={cn("mt-7 max-w-2xl space-y-6", proseBody)}>
            <p>
              You’ll also meet Roscoe—my unofficial co-therapist. He tends to rotate between napping
              and being extra loving, and he genuinely loves being part of the space.
            </p>
            <p>
              He’s always with me, so his presence is part of the environment here. There is no need
              for him to approach you if you are uncomfortable—please let me know prior to your
              session.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <figure className="m-0">
              <div className={cn(photoFrame, "bg-paper-alt")}>
                <Image
                  src="/roscoe-resting.png"
                  alt="Roscoe, a small therapy dog with wavy apricot fur and gentle eyes, resting his head on a plush toy while lying on a grey sofa."
                  width={768}
                  height={1024}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className={cn(photoFrame, "bg-paper-alt")}>
                <Image
                  src="/melissa-with-roscoe.png"
                  alt="Melissa Gobin Borski seated in a patterned armchair with Roscoe, her small therapy dog in a blue sweater, beside her."
                  width={768}
                  height={1024}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </figure>
          </div>
        </FadeIn>
      </EditorialSection>

      <EditorialSection tone="wash">
        <FadeIn>
          <SectionTitle kicker="Insurance" title="Plans I work with" />
          <p className={cn(proseBodySm, "mt-5 max-w-2xl")}>
            Coverage varies depending on your individual insurance plan—we’ll confirm yours together
            before we begin. If you do not have insurance, self-pay plans are available.
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

      <EditorialSection>
        <FadeIn>
          <SectionTitle kicker="Client testimonials" title="In their words" />
          <ul className="mt-12 space-y-10 md:space-y-12">
            {testimonialQuotes.map((q) => (
              <li key={q}>
                <blockquote
                  className={cn(
                    "border-l-2 border-sage/25 pl-8",
                    "font-serif text-[clamp(1.05rem,2vw,1.2rem)] font-normal leading-[1.55] text-foreground/92",
                  )}
                >
                  <p className="text-pretty">“{q}”</p>
                </blockquote>
              </li>
            ))}
          </ul>
        </FadeIn>
      </EditorialSection>

      <section className={cn("relative bg-gradient-to-b from-cream/35 to-paper-alt/40", sectionY)}>
        <div className={sectionRule} aria-hidden />
        <div className={cn(shell, "text-center")}>
          <FadeIn>
            <p className={cn(proseBodySm, "mx-auto max-w-2xl text-pretty text-muted")}>
              Conveniently located in North Grosvenor Dale, CT, and serving clients in Putnam,
              Woodstock, Thompson, and throughout Windham County—counseling near Putnam CT and mental
              health therapy across the region.
            </p>
            <h2 className="mx-auto mt-14 max-w-md text-balance font-serif text-[clamp(1.6rem,3.5vw,2.125rem)] font-normal leading-snug tracking-[-0.02em] text-foreground">
              One gentle next step is enough
            </h2>
            <p className={cn(proseBody, "mx-auto mt-8 max-w-md")}>
              Reach out however feels safest—form, call, or a brief email. I respond as soon as I
              can.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={cn(btnPrimary, "w-full sm:w-auto")}>
                Ask a question or request a consultation
              </Link>
              <a href={`tel:${practice.phoneTel}`} className={cn(btnSecondary, "w-full sm:w-auto")}>
                {practice.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
