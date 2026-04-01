import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Layout: max width + horizontal rhythm (editorial margins). */
export const shell = cn(
  "mx-auto w-full max-w-[min(100%,72rem)]",
  "px-6 sm:px-10 lg:px-14 xl:px-16",
);

export const sectionY = "py-[clamp(4.5rem,12vw,8.5rem)]";
export const sectionYCompact = "py-[clamp(3.5rem,9vw,6rem)]";

/** Soft hairline between sections — avoids harsh Tailwind “border-t blocks”. */
export const sectionRule = cn(
  "pointer-events-none absolute left-[6%] right-[6%] top-0 h-px max-w-6xl mx-auto",
  "bg-gradient-to-r from-transparent via-foreground/[0.09] to-transparent",
);

/** Kicker / label above headings */
export const kicker = cn(
  "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500",
  "sm:text-[0.7rem]",
);

/** Section H2 — editorial serif scale */
export const title = cn(
  "font-serif text-[clamp(1.55rem,3.5vw,2.125rem)] font-normal leading-[1.18] tracking-[-0.02em]",
  "text-foreground",
);

/** Long-form body under titles */
export const proseBody = cn(
  "max-w-prose text-[1.0625rem] leading-[1.78] text-muted",
  "sm:text-[1.085rem] sm:leading-[1.76]",
);

export const proseBodySm = cn("max-w-prose text-[0.9375rem] leading-[1.72] text-muted sm:text-base");

/** Primary CTA */
export const btnPrimary = cn(
  "inline-flex min-h-[2.75rem] items-center justify-center rounded-full px-9 py-3",
  "text-[0.9375rem] font-semibold normal-case tracking-[0.01em] text-white",
  "bg-sage shadow-[0_2px_20px_-4px_rgb(74_90_79/0.45)]",
  "transition-[transform,box-shadow,background-color] duration-300 ease-out",
  "hover:bg-sage-dark hover:shadow-[0_8px_28px_-6px_rgb(74_90_79/0.4)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
  "active:scale-[0.98]",
);

/** Secondary CTA */
export const btnSecondary = cn(
  "inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-foreground/[0.12] px-9 py-3",
  "bg-background/60 text-[0.9375rem] font-semibold normal-case tracking-[0.01em] text-foreground",
  "backdrop-blur-sm transition-[border-color,background-color,transform] duration-300 ease-out",
  "hover:border-sage/35 hover:bg-cream/70",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
  "active:scale-[0.98]",
);

/** Editorial “card” — not a flat gray rectangle */
export const card = cn(
  "rounded-[1.35rem] border border-white/70",
  "bg-gradient-to-br from-cream/50 via-background/90 to-sage-light/25",
  "shadow-[0_1px_1px_rgb(42_38_32/0.02),0_24px_48px_-28px_rgb(42_38_32/0.12)]",
  "ring-1 ring-foreground/[0.03]",
);

export const cardRaised = cn(
  "rounded-[1.35rem] border border-border/40 bg-background/95",
  "shadow-[0_2px_4px_rgb(42_38_32/0.03),0_32px_64px_-32px_rgb(42_38_32/0.14)]",
  "ring-1 ring-foreground/[0.025]",
);

export const cardInset = cn(
  "rounded-[1.25rem] border border-foreground/[0.06] bg-paper-alt/80",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.65)]",
);

/** Specialty / tag pill */
export const tag = cn(
  "inline-flex items-center rounded-full border border-foreground/[0.08] bg-background/70",
  "px-4 py-2 text-[0.8125rem] tracking-[0.01em] text-foreground/88",
  "shadow-sm shadow-foreground/[0.03] backdrop-blur-[2px]",
);

/** Text links */
export const linkAccent = cn(
  "font-medium text-sage underline decoration-sage/25 underline-offset-[5px]",
  "transition-colors hover:decoration-sage/60",
  "focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
);

/** Framed photograph (office / portrait) */
export const photoFrame = cn(
  "overflow-hidden rounded-[1.25rem]",
  "ring-1 ring-foreground/[0.06] ring-offset-[6px] ring-offset-background",
  "shadow-[0_20px_50px_-24px_rgb(42_38_32/0.25)]",
);
