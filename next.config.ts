import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Parent folder (e.g. home) may have its own package-lock.json; pin Turbopack to this app only.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
