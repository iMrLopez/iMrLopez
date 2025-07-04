"use client"

import { motion } from "framer-motion"

interface AvatarProps {
  src?: string
  alt?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Avatar({ src, alt = "Profile", size = "xl" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32 md:w-40 md:h-40",
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm`}
      >
        <img src={src || "/placeholder.svg?height=200&width=200"} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Floating status indicator */}
      <motion.div
        className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white/20 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  )
}
