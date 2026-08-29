import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-29");

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/features/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reviews/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacypolicy/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
