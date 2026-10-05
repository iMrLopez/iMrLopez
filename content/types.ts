/** "YYYY-MM" or "YYYY". Omit `end` for ongoing work. */
export type YearMonth = `${number}-${string}` | `${number}`

export interface Link {
  label: string
  href: string
}

export interface Role {
  company: string
  /** Shown in brackets after the company, e.g. a consulting firm. */
  via?: string
  title: string
  location?: string
  start: YearMonth
  end?: YearMonth
  summary: string
  highlights: string[]
  stack: string[]
}

export interface Project {
  slug: string
  name: string
  summary: string
  start: number
  end?: number
  /** Omit for ongoing projects; set `ongoing` explicitly to show "→". */
  ongoing?: boolean
  /** Employer or brand the work was done for. */
  org?: string
  role?: string
  stack: string[]
  /** Public URL of the running product. */
  site?: string
  /** Only for public repositories. Private repos must not be linked. */
  repo?: string
  /** Extra links such as app store listings. */
  links?: Link[]
  /** Path under /public, produced by `pnpm screenshots`. */
  screenshot?: string
  featured?: boolean
  /** Case-study paragraphs; projects with details get their own page. */
  details?: string[]
}

export interface Resource {
  kind: "video" | "course" | "paper"
  title: string
  year?: number
  language: "en" | "es"
  href?: string
  thumbnail?: string
}
