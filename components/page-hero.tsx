import { cn, kicker, proseBody, shell, title } from "@/lib/ui";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title: heading, description, eyebrow }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-foreground/[0.06] bg-gradient-to-b from-paper-alt/90 via-background to-background">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[150%] opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 0%, rgb(230 235 228 / 0.9), transparent 72%)",
        }}
      />
      <div className={cn(shell, "relative py-[clamp(3.25rem,10vw,5.5rem)]")}>
        {eyebrow ? <p className={kicker}>{eyebrow}</p> : null}
        <h1
          className={cn(
            title,
            "mt-3 max-w-[18ch] text-balance sm:max-w-2xl",
            "text-[clamp(2rem,5vw,2.75rem)] leading-[1.12]",
          )}
        >
          {heading}
        </h1>
        <p className={cn(proseBody, "mt-6 max-w-xl")}>{description}</p>
      </div>
    </div>
  );
}
