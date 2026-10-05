import type { Project, YearMonth } from "@/content/types"

const year = (value: YearMonth) => value.slice(0, 4)

/** "2022 → 2024", "2024 → now", or "2025" when start and end match. */
export function formatRange(start: YearMonth | number, end?: YearMonth | number, ongoing = end === undefined) {
  const from = year(String(start) as YearMonth)
  if (ongoing) return `${from} → now`
  const to = year(String(end) as YearMonth)
  return from === to ? from : `${from} → ${to}`
}

export const projectRange = (p: Project) => formatRange(p.start, p.end ?? p.start, p.ongoing)

/** Short, stable pseudo commit hash for the experience log (FNV-1a). */
export function shortHash(input: string) {
  let h = 0x811c9dc5
  for (const ch of input) {
    h ^= ch.charCodeAt(0)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7)
}

export const hostname = (url: string) => new URL(url).host.replace(/^www\./, "") + new URL(url).pathname.replace(/\/$/, "")
