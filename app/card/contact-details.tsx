"use client"

import { useEffect, useState } from "react"
import { Download, Mail, MessageCircle, Phone, Share2 } from "lucide-react"

import { privateContact, profile } from "@/content/profile"

const decode = (encoded: string) => {
  try {
    return [...atob(encoded)].reverse().join("")
  } catch {
    return ""
  }
}

function vCard(email: string, phone: string) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    "N:Lopez;Marny;;;",
    `TITLE:${profile.shortTitle}`,
    `ORG:${profile.company.name}`,
    email && `EMAIL;TYPE=INTERNET:${email}`,
    phone && `TEL;TYPE=CELL:${phone}`,
    `URL:${profile.site}`,
    `URL:${profile.linkedin}`,
    "ADR;TYPE=WORK:;;;San José;;;Costa Rica",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n")
}

const rowClass =
  "flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm transition-colors hover:border-ink-3"

export function ContactDetails() {
  // Decoded after mount so the values never exist in the prerendered HTML.
  const [contact, setContact] = useState<{ email: string; phone: string } | null>(null)
  const [shared, setShared] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only reveal
    setContact({ email: decode(privateContact.email), phone: decode(privateContact.phone) })
  }, [])

  const saveContact = () => {
    if (!contact) return
    const blob = new Blob([vCard(contact.email, contact.phone)], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const a = Object.assign(document.createElement("a"), { href: url, download: "marny-lopez.vcf" })
    a.click()
    URL.revokeObjectURL(url)
  }

  const share = async () => {
    const data = { title: `${profile.name} · ${profile.shortTitle}`, url: window.location.href }
    if (navigator.share) {
      await navigator.share(data).catch(() => undefined)
    } else {
      await navigator.clipboard.writeText(data.url)
      setShared(true)
    }
  }

  const phoneDigits = contact?.phone.replace(/\D/g, "") ?? ""

  return (
    <div className="space-y-2.5">
      {contact?.email && (
        <a href={`mailto:${contact.email}`} className={rowClass}>
          <Mail className="size-4 text-brand" aria-hidden />
          {contact.email}
        </a>
      )}
      {contact?.phone && (
        <div className="grid grid-cols-2 gap-2.5">
          <a href={`tel:${contact.phone}`} className={rowClass}>
            <Phone className="size-4 text-brand" aria-hidden />
            Call
          </a>
          <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noopener" className={rowClass}>
            <MessageCircle className="size-4 text-brand" aria-hidden />
            WhatsApp
          </a>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2.5 pt-2">
        <button
          type="button"
          onClick={saveContact}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink text-sm font-medium text-bg hover:opacity-85"
        >
          <Download className="size-4" aria-hidden />
          Save contact
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface text-sm font-medium hover:border-ink-3"
        >
          <Share2 className="size-4" aria-hidden />
          {shared ? "Link copied" : "Share"}
        </button>
      </div>
    </div>
  )
}
