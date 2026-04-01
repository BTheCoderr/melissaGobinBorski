import { cn, kicker as kickerClass, title as titleClass } from "@/lib/ui";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  className?: string;
  titleClassName?: string;
};

export function SectionTitle({
  kicker: eyebrow,
  title,
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <header className={cn(className)}>
      {eyebrow ? <p className={kickerClass}>{eyebrow}</p> : null}
      <h2 className={cn(titleClass, eyebrow ? "mt-4" : undefined, titleClassName)}>{title}</h2>
    </header>
  );
}
