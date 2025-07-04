"use client"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{title}</span>
      </h2>
      <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}
