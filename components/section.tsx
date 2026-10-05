interface SectionProps {
  id: string
  index: number
  title: string
  children: React.ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pt-24">
      <h2
        id={`${id}-title`}
        className="mono-label mb-8 flex items-center gap-3 font-normal text-ink-3 after:h-px after:flex-1 after:bg-line"
      >
        <span className="text-brand">{String(index).padStart(2, "0")}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
