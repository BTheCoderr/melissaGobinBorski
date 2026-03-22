"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn, shell } from "@/lib/ui";
import { practice } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

function linkClass(active: boolean) {
  return cn(
    "rounded-full px-4 py-2 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-300",
    active
      ? "bg-sage-light/90 text-foreground"
      : "text-muted hover:bg-cream/60 hover:text-foreground",
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/[0.06] bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className={cn(shell, "flex items-center justify-between gap-4 py-4 md:py-5")}>
        <Link
          href="/"
          className="group min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <span className="font-serif text-[1.08rem] font-normal tracking-tight text-foreground md:text-[1.15rem]">
            {practice.therapistName}
          </span>
          <span className="mt-1 block truncate text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone-500 md:text-[0.7rem] md:normal-case md:tracking-normal md:text-muted">
            {practice.title} · {practice.credentials}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1 pr-2" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className={cn(
              "ml-1 rounded-full bg-sage px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white",
              "shadow-md shadow-sage/20 transition-[background,box-shadow] duration-300 hover:bg-sage-dark hover:shadow-lg",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
            )}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-foreground/[0.1] bg-background/90 p-2.5 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-foreground/[0.06] bg-background/95 px-6 pb-6 pt-3 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-sage px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
