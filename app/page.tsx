import { ArrowUpRight } from "lucide-react"

import { ExperienceLog } from "@/components/experience-log"
import { ProjectArchive } from "@/components/project-archive"
import { ProjectCard } from "@/components/project-card"
import { ResourceList } from "@/components/resource-list"
import { Section } from "@/components/section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Tags } from "@/components/tags"
import { certifications, education, honors, toolbox } from "@/content/education"
import { experience } from "@/content/experience"
import { profile } from "@/content/profile"
import { featuredProjects, projects } from "@/content/projects"
import { resources } from "@/content/resources"

const years = new Date().getFullYear() - profile.careerStart

function Hero() {
  return (
    <header className="grid gap-10 pt-20 sm:grid-cols-[1fr_auto] sm:pt-28">
      <div>
        {profile.availableForWork && (
          <p className="mono-label inline-flex items-center gap-2 text-ink-2">
            <span className="size-1.5 rounded-full bg-signal ring-4 ring-signal/20" aria-hidden />
            available for new work
          </p>
        )}
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 text-xl tracking-tight text-ink-2">{profile.headline}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-2">{profile.lede}</p>
        <p className="mono-label mt-6 flex flex-wrap gap-x-5 gap-y-1 text-ink-3">
          <span>{profile.location}</span>
          <span>{profile.timezone}</span>
          <span>ES / EN</span>
          <span>{years} yrs</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-sm font-medium transition-colors hover:border-ink-3"
          >
            GitHub
          </a>
          <a
            href="#work"
            className="inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-sm font-medium transition-colors hover:border-ink-3"
          >
            See my work
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="relative order-first size-24 self-start rounded-2xl border border-line bg-surface before:absolute before:-inset-1.5 before:rounded-[1.1rem] before:border before:border-dashed before:border-line sm:order-none sm:size-28"
      >
        <span className="grid h-full place-items-center text-3xl font-semibold tracking-tighter text-brand">ML</span>
      </div>
    </header>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />

        <Section id="work" index={1} title="selected work">
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} priority={i < 2} />
            ))}
          </div>
        </Section>

        <Section id="experience" index={2} title="experience">
          <ExperienceLog roles={experience} />
        </Section>

        <Section id="projects" index={3} title="all projects">
          <ProjectArchive projects={projects} />
        </Section>

        <Section id="toolbox" index={4} title="toolbox">
          <dl className="grid gap-6 sm:grid-cols-2">
            {toolbox.map((group) => (
              <div key={group.area}>
                <dt className="mb-2 font-medium">{group.area}</dt>
                <dd>
                  <Tags items={group.items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" index={5} title="education">
          <div className="grid gap-10 sm:grid-cols-[1fr_16rem]">
            <ul className="border-t border-line">
              {education.map((e) => (
                <li key={e.degree} className="flex flex-wrap justify-between gap-x-4 border-b border-line py-3">
                  <span>
                    <span className="font-medium">{e.degree}</span>
                    <span className="block text-[15px] text-ink-2">{e.school}</span>
                  </span>
                  <span className="mono-label text-ink-3">
                    {e.start} → {e.end}
                  </span>
                </li>
              ))}
            </ul>
            <div className="space-y-6 text-[15px]">
              <div>
                <h3 className="mono-label mb-2 text-ink-3">certifications</h3>
                <ul className="space-y-1 text-ink-2">
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mono-label mb-2 text-ink-3">honors</h3>
                <ul className="space-y-1 text-ink-2">
                  {honors.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="resources" index={6} title="writing and videos">
          <ResourceList resources={resources} />
        </Section>

        <SiteFooter />
      </main>
    </>
  )
}
