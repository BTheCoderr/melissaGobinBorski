import { btnPrimary, cn } from "@/lib/ui";

/**
 * Netlify Forms — pair with `public/netlify-form-detect.html` at deploy.
 */
export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact?success=1"
      className="space-y-7"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="redirect" value="/contact?success=1" />

      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={cn(
            "mt-2.5 w-full rounded-2xl border border-foreground/[0.1] bg-background/80 px-4 py-3.5",
            "text-[1rem] text-foreground shadow-inner shadow-foreground/[0.02]",
            "outline-none transition-[box-shadow,border-color] duration-300",
            "focus:border-sage/35 focus:ring-2 focus:ring-sage/15",
          )}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={cn(
            "mt-2.5 w-full rounded-2xl border border-foreground/[0.1] bg-background/80 px-4 py-3.5",
            "text-[1rem] text-foreground shadow-inner shadow-foreground/[0.02]",
            "outline-none transition-[box-shadow,border-color] duration-300",
            "focus:border-sage/35 focus:ring-2 focus:ring-sage/15",
          )}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Phone <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={cn(
            "mt-2.5 w-full rounded-2xl border border-foreground/[0.1] bg-background/80 px-4 py-3.5",
            "text-[1rem] text-foreground shadow-inner shadow-foreground/[0.02]",
            "outline-none transition-[box-shadow,border-color] duration-300",
            "focus:border-sage/35 focus:ring-2 focus:ring-sage/15",
          )}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(
            "mt-2.5 w-full resize-y rounded-2xl border border-foreground/[0.1] bg-background/80 px-4 py-3.5",
            "text-[1rem] text-foreground shadow-inner shadow-foreground/[0.02]",
            "outline-none transition-[box-shadow,border-color] duration-300",
            "focus:border-sage/35 focus:ring-2 focus:ring-sage/15",
          )}
        />
      </div>

      <button type="submit" className={btnPrimary}>
        Send message
      </button>
    </form>
  );
}
