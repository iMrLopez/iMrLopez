import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { experience } from "@/content/experience"
import { education } from "@/content/education"
import { profile } from "@/content/profile"
import "./globals.css"

const description = `${profile.shortTitle} in ${profile.location}. ${profile.lede}`

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} · ${profile.shortTitle}`, template: `%s · ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} · ${profile.shortTitle}`,
    description,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.shortTitle}` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0e" },
  ],
}

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch(e){document.documentElement.dataset.theme="dark"}`

const current = experience.filter((role) => !role.end)

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.site,
  jobTitle: profile.shortTitle,
  description: profile.lede,
  worksFor: current.map((role) => ({ "@type": "Organization", name: role.company })),
  address: { "@type": "PostalAddress", addressLocality: "San José", addressCountry: "CR" },
  alumniOf: [...new Set(education.map((e) => e.school))].map((name) => ({ "@type": "CollegeOrUniversity", name })),
  knowsLanguage: ["es", "en"],
  sameAs: [profile.linkedin, profile.github, profile.youtube],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
