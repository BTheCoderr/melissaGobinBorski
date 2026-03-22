import Image from "next/image";
import Link from "next/link";
import { btnPrimary, btnSecondary, cn, kicker, shell, tag } from "@/lib/ui";
import { practice } from "@/lib/site";

const trustChips = [
  "Accepting new clients",
  "In-person & telehealth",
  "Insurance welcome",
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper-alt via-background to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-0 h-[min(85vh,640px)] w-[160%] opacity-50 sm:left-0 sm:w-full"
        style={{
          background:
            "radial-gradient(ellipse 50% 65% at 70% -5%, rgb(214 222 216 / 0.55), transparent 65%)",
        }}
      />
      <div className={cn(shell, "relative py-[clamp(3.5rem,11vw,6.25rem)]")}>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_min(100%,340px)] lg:gap-20">
          <div>
            <p className={cn(kicker, "hero-fade")}>Therapy for adults in Thompson, CT</p>
            <h1
              className={cn(
                "hero-fade hero-fade-delay-1 mt-6 max-w-[22rem] text-balance font-serif text-[clamp(1.85rem,4.2vw,2.45rem)] font-normal leading-[1.14] tracking-[-0.025em] text-foreground sm:max-w-2xl",
              )}
            >
              When everything feels like too much, you don’t have to carry it alone
            </h1>
            <p
              className={cn(
                "hero-fade hero-fade-delay-2 mt-8 font-serif text-[clamp(1.125rem,2.2vw,1.35rem)] text-foreground",
              )}
            >
              {practice.therapistName}, {practice.credentials}
            </p>
            <p
              className={cn(
                "hero-fade hero-fade-delay-3 mt-6 max-w-md text-pretty text-[1.0625rem] leading-[1.75] text-muted sm:max-w-lg",
              )}
            >
              Quiet, skilled support for anxiety, trauma, low mood, and stress—at your pace, without
              pressure to have it all figured out first.
            </p>
            <ul
              className={cn("hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-2.5")}
              aria-label="Practice highlights"
            >
              {trustChips.map((t) => (
                <li key={t}>
                  <span className={tag}>{t}</span>
                </li>
              ))}
            </ul>
            <div
              className={cn(
                "hero-fade hero-fade-delay-4 mt-12 flex flex-col gap-3 sm:flex-row sm:items-center",
              )}
            >
              <Link href="/contact" className={btnPrimary}>
                Start a conversation
              </Link>
              <a href={`tel:${practice.phoneTel}`} className={btnSecondary}>
                Call {practice.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none">
            <div className={cn("photoFrame bg-paper-alt")}>
              <Image
                src="/therapist-headshot.jpg"
                alt={`${practice.therapistName}, therapist — replace with your portrait`}
                width={900}
                height={1100}
                priority
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 340px, 80vw"
              />
            </div>
            <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-stone-400 lg:text-left">
              Replace with your portrait
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
