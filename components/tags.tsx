export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="mono-label rounded border border-line px-1.5 py-px text-xs text-ink-2">
          {item}
        </li>
      ))}
    </ul>
  )
}
