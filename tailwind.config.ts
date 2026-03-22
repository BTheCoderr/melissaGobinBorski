import type { Config } from "tailwindcss";

/**
 * Tailwind v4 still benefits from an explicit content globs for tooling and
 * any config-driven extensions. Theme tokens primarily live in `app/globals.css` (`@theme`).
 */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
