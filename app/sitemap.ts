import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = ["", "/about", "/services", "/contact"] as const;
  return paths.map((path) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: new Date(),
  }));
}
