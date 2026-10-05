import { profile } from "@/content/profile"

const links = [
  { label: "linkedin", href: profile.linkedin },
  { label: "github", href: profile.github },
  { label: "youtube", href: profile.youtube },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-32 border-t border-line py-16">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        Have something to build?
        <br />
        <a href={profile.linkedin} target="_blank" rel="noopener" className="text-ink-3 transition-colors hover:text-brand">
          Message me on LinkedIn ↗
        </a>
      </h2>
      <div className="mono-label mt-12 flex flex-wrap justify-between gap-4 text-ink-3">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <nav aria-label="Profiles" className="flex gap-5">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener" className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
