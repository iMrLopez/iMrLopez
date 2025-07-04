"use client"

import Image from "next/image"
import { useState } from "react"

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

export function Avatar({ src, alt, size = 200 }: AvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative group">
      <div
        className="relative overflow-hidden rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1"
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={size}
            height={size}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow -z-10 blur-sm"
        style={{ width: size + 8, height: size + 8, top: -4, left: -4 }}
      />
    </div>
  )
}
