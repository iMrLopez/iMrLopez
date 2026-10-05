import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { BrowserFrame } from "@/components/browser-frame"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Tags } from "@/components/tags"
import { projectsWithPages } from "@/content/projects"
import { projectRange } from "@/lib/format"

export const dynamicParams = false

export function generateStaticParams() {
  return projectsWithPages.map((p) => ({ slug: p.slug }))
}

const findProject = (slug: string) => projectsWithPages.find((p) => p.slug === slug)

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = findProject((await params).slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { title: project.name, description: project.summary, url: `/projects/${project.slug}/`, images: ["/og.png"] },
  }
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = findProject((await params).slug)
  if (!project) notFound()

  const facts = [
    ["when", projectRange(project)],
    ["for", project.org],
    ["role", project.role],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]))

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <Link href="/#work" className="mono-label mt-12 inline-flex items-center gap-1.5 text-ink-3 hover:text-ink">
          <ArrowLeft className="size-3.5" aria-hidden /> all work
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{project.name}</h1>
        <p className="mt-4 text-xl tracking-tight text-pretty text-ink-2">{project.summary}</p>

        <dl className="mono-label mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {facts.map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <dt className="text-ink-3">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-ink px-3.5 text-sm font-medium text-bg hover:opacity-85"
            >
              Visit site <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 text-sm font-medium hover:border-ink-3"
            >
              Source code <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-line bg-surface">
          <BrowserFrame url={project.site ?? project.repo} screenshot={project.screenshot} alt={`${project.name} screenshot`} priority />
        </div>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-2">
          {project.details?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="mono-label mb-3 text-ink-3">stack</h2>
          <Tags items={project.stack} />
        </div>

        <SiteFooter />
      </main>
    </>
  )
}
