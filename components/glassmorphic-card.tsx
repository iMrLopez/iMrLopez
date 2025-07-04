"use client"

import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className = "" }: GlassmorphicCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 ${className}`}>
      {children}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  )
}
