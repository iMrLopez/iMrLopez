"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardSmallProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCardSmall({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardSmallProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 text-xs px-2 py-1"
            >
              <Eye className="h-3 w-3 mr-1" />
              Demo
            </Button>
          </Link>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 text-xs px-2 py-1"
            >
              <Github className="h-3 w-3 mr-1" />
              Code
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 2).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50 text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 2 && (
            <Badge variant="secondary" className="bg-zinc-700/50 text-zinc-300 text-xs px-2 py-0.5">
              +{tags.length - 2}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xs py-1.5"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Demo
            </Button>
          </Link>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="border-zinc-600 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent text-xs py-1.5 px-2"
            >
              <Github className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
