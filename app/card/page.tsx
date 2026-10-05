import type { Metadata } from "next"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { profile } from "@/content/profile"
import { ContactDetails } from "./contact-details"

// Shared in person (QR code); kept out of search results.
export const metadata: Metadata = {
  title: "Card",
  robots: { index: false, follow: false, nocache: true },
}

const profiles = [
  { label: "linkedin", href: profile.linkedin },
  { label: "github", href: profile.github },
  { label: "youtube", href: profile.youtube },
  { label: "instagram", href: profile.instagram },
]

export default function CardPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-bg/90 p-6 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="grid size-16 place-items-center rounded-xl border border-line bg-surface text-xl font-semibold tracking-tighter text-brand">
            ML
          </div>
          <ThemeToggle />
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="text-ink-2">{profile.headline}</p>
        <p className="mono-label mt-2 text-ink-3">{profile.location}</p>
        {profile.availableForWork && (
          <p className="mono-label mt-3 inline-flex items-center gap-2 text-ink-2">
            <span className="size-1.5 rounded-full bg-signal ring-4 ring-signal/20" aria-hidden />
            available for new work
          </p>
        )}

        <div className="mt-6">
          <ContactDetails />
        </div>

        <nav aria-label="Profiles" className="mono-label mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-line pt-5 text-ink-2">
          {profiles.map((p) => (
            <a key={p.label} href={p.href} target="_blank" rel="noopener" className="hover:text-brand">
              {p.label}
            </a>
          ))}
        </nav>

        <Link href="/" className="mono-label mt-5 block text-center text-ink-3 hover:text-ink">
          marnylopez.com →
        </Link>
      </div>
    </main>
  )
}
