import type { MetadataRoute } from "next"

import { profile } from "@/content/profile"
import { projectsWithPages } from "@/content/projects"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${profile.site}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projectsWithPages.map((p) => ({
      url: `${profile.site}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
