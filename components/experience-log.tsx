import { ChevronDown } from "lucide-react"

import type { Role } from "@/content/types"
import { formatRange, shortHash } from "@/lib/format"
import { Tags } from "./tags"

function LogEntry({ role }: { role: Role }) {
  const current = !role.end
  return (
    <li className="grid gap-x-6 gap-y-1 border-b border-line py-5 sm:grid-cols-[7rem_1fr]">
      <div className="mono-label flex gap-2 sm:flex-col sm:gap-0.5">
        <span className="text-brand">{shortHash(role.company + role.start)}</span>
        {current && <span className="text-signal">HEAD</span>}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-medium">
            {role.title} <span className="text-ink-3">at</span> {role.company}
            {role.via && <span className="text-ink-3"> via {role.via}</span>}
          </h3>
          <span className="mono-label text-ink-3">{formatRange(role.start, role.end)}</span>
        </div>
        <p className="mt-1 text-[15px] text-ink-2">{role.summary}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-2 marker:text-ink-3">
          {role.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="mt-3">
          <Tags items={role.stack} />
        </div>
      </div>
    </li>
  )
}

/** Recent roles are always visible; older ones fold into a native <details>, so no JS is needed. */
export function ExperienceLog({ roles, visible = 4 }: { roles: Role[]; visible?: number }) {
  const recent = roles.slice(0, visible)
  const earlier = roles.slice(visible)

  return (
    <div className="border-t border-line">
      <ol>
        {recent.map((role) => (
          <LogEntry key={role.company + role.start} role={role} />
        ))}
      </ol>
      {earlier.length > 0 && (
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between border-b border-line py-4 text-ink-2 transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            <span>
              <span className="mono-label mr-4 text-brand">…</span>
              {earlier.length} earlier roles: {earlier.map((r) => r.company).join(", ")}
            </span>
            <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <ol>
            {earlier.map((role) => (
              <LogEntry key={role.company + role.start} role={role} />
            ))}
          </ol>
        </details>
      )}
    </div>
  )
}
