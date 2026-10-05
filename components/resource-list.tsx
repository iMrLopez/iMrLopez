import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import type { Resource } from "@/content/types"

function Row({ resource }: { resource: Resource }) {
  return (
    <>
      <span className="mono-label text-ink-3">{resource.kind}</span>
      <span className="flex min-w-0 items-center gap-4">
        {resource.thumbnail && (
          <Image
            src={resource.thumbnail}
            alt=""
            width={96}
            height={54}
            className="hidden shrink-0 rounded border border-line sm:block"
          />
        )}
        <span className="font-medium transition-colors group-hover:text-brand">
          {resource.title}
          <span className="mono-label ml-2 align-middle text-xs font-normal text-ink-3 uppercase">{resource.language}</span>
        </span>
      </span>
      <span className="mono-label inline-flex items-center text-ink-3">
        {resource.year}
        {resource.href && <ArrowUpRight className="size-3" aria-hidden />}
      </span>
    </>
  )
}

const rowClass = "grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[7rem_1fr_auto] sm:items-center"

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <ul className="border-t border-line">
      {resources.map((resource) => (
        <li key={resource.title}>
          {resource.href ? (
            <a href={resource.href} target="_blank" rel="noopener" className={`group ${rowClass}`}>
              <Row resource={resource} />
            </a>
          ) : (
            <div className={rowClass}>
              <Row resource={resource} />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
