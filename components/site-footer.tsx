import Link from "next/link";
import { cn, linkAccent, shell } from "@/lib/ui";
import { practice } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto border-t border-foreground/[0.06] bg-gradient-to-b from-paper-alt/50 to-background">
      <div className={cn(shell, "py-16 md:py-20")}>
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="font-serif text-xl font-normal text-foreground">{practice.therapistName}</p>
            <p className="mt-2 text-sm text-muted">{practice.title} · {practice.credentials}</p>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-[1.75] text-muted">
              Therapy for adults in {practice.locality}. Also serving{" "}
              {practice.nearbyAreas.join(", ")}, and nearby Connecticut towns.
            </p>
          </div>
          <div>
            <p className={cn("text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-stone-500")}>
              Contact
            </p>
            <a
              className={cn("mt-4 block font-serif text-xl text-foreground transition-colors hover:text-sage")}
              href={`tel:${practice.phoneTel}`}
            >
              {practice.phoneDisplay}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {practice.addressLine1}
              <br />
              {practice.addressLine2}
            </p>
            <Link href="/contact" className={cn(linkAccent, "mt-5 inline-block text-sm")}>
              Send a message
            </Link>
          </div>
        </div>
        <p className="mt-14 max-w-2xl border-t border-foreground/[0.06] pt-10 text-center text-[0.75rem] leading-relaxed text-muted md:mx-auto md:text-center">
          © {year} {practice.therapistName}. This site shares general information only—not medical
          advice or a crisis service. If you are in danger, call{" "}
          <strong className="font-medium text-foreground">911</strong> or your local emergency
          number.
        </p>
      </div>
    </footer>
  );
}
