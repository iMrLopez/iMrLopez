import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/content/types"
import { projectRange } from "@/lib/format"

function ProjectLinks({ project }: { project: Project }) {
  return (
    <span className="mono-label flex gap-3 text-ink-3">
      {project.details?.length ? (
        <Link href={`/projects/${project.slug}/`} className="hover:text-brand">
          case study
        </Link>
      ) : null}
      {project.site && (
        <a href={project.site} target="_blank" rel="noopener" className="inline-flex items-center hover:text-brand">
          site
          <ArrowUpRight className="size-3" aria-hidden />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener" className="inline-flex items-center hover:text-brand">
          code
          <ArrowUpRight className="size-3" aria-hidden />
        </a>
      )}
    </span>
  )
}

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const sorted = [...projects].sort((a, b) => (b.end ?? 9999) - (a.end ?? 9999) || b.start - a.start)

  return (
    <div className="border-t border-line">
      {sorted.map((project) => (
        <div
          key={project.slug}
          className="grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline"
        >
          <span className="mono-label text-ink-3">{projectRange(project)}</span>
          <div className="min-w-0">
            <h3 className="font-medium">
              {project.name}
              {project.org && <span className="font-normal text-ink-3"> · {project.org}</span>}
            </h3>
            <p className="text-[15px] text-ink-2">{project.summary}</p>
            <p className="mono-label mt-1 text-xs text-ink-3">{project.stack.join(" · ")}</p>
          </div>
          <ProjectLinks project={project} />
        </div>
      ))}
    </div>
  )
}
