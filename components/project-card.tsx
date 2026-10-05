import Link from "next/link"

import type { Project } from "@/content/types"
import { projectRange } from "@/lib/format"
import { BrowserFrame } from "./browser-frame"
import { Tags } from "./tags"

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-ink-3"
    >
      <BrowserFrame url={project.site ?? project.repo} screenshot={project.screenshot} alt={project.name} priority={priority} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand">{project.name}</h3>
          <span className="mono-label shrink-0 text-ink-3">{projectRange(project)}</span>
        </div>
        <p className="flex-1 text-[15px] leading-relaxed text-ink-2">{project.summary}</p>
        <Tags items={project.stack.slice(0, 4)} />
      </div>
    </Link>
  )
}
