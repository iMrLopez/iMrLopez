import Link from "next/link"

import { profile } from "@/content/profile"
import { ThemeToggle } from "./theme-toggle"

const nav = [
  { href: "/#work", label: "work" },
  { href: "/#experience", label: "experience" },
  { href: "/#projects", label: "projects" },
  { href: "/#resources", label: "resources" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-semibold tracking-tight">
          marny<span className="text-brand">.</span>lopez
        </Link>
        <nav aria-label="Sections" className="mono-label hidden gap-6 text-ink-2 sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="mono-label rounded-md border border-line px-3 py-1.5 text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
          >
            linkedin ↗
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
