"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
        {/* Skill Name */}
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors">{name}</h3>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            />
          </div>

          {/* Percentage Display */}
          <motion.div
            className="absolute -top-8 right-0 text-sm font-medium text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {level}%
          </motion.div>
        </div>

        {/* Skill Level Indicator */}
        <div className="mt-3 text-center">
          <span className="text-xs text-zinc-500 font-medium">
            {level >= 90 ? "Expert" : level >= 75 ? "Advanced" : level >= 60 ? "Intermediate" : "Beginner"}
          </span>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}
