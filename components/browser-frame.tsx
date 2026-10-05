import Image from "next/image"

import { hostname } from "@/lib/format"

interface BrowserFrameProps {
  url?: string
  screenshot?: string
  alt: string
  priority?: boolean
}

/** Minimal browser chrome around a project screenshot, or a monogram when there isn't one. */
export function BrowserFrame({ url, screenshot, alt, priority }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden border-b border-line bg-brand-soft">
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface px-3">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-2 rounded-full bg-line" />
        ))}
        <span className="mono-label ml-2 truncate text-[11px] text-ink-3">{url ? hostname(url) : "private"}</span>
      </div>
      <div className="relative aspect-[16/10]">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden className="grid h-full place-items-center text-5xl font-semibold tracking-tighter text-brand/30">
            {alt.slice(0, 2)}
          </div>
        )}
      </div>
    </div>
  )
}
