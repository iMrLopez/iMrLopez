"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Eye, Heart, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  title: string
  description: string
  thumbnail: string
  views: number
  likes: number
  duration: string
  publishedAt: string
  url: string
  tags: string[]
  platform: "youtube" | "instagram"
}

export function VideoCard({
  title,
  description,
  thumbnail,
  views,
  likes,
  duration,
  publishedAt,
  url,
  tags,
  platform,
}: VideoCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatDuration = (duration: string) => {
    if (platform === "instagram") return "Reel"
    return duration
  }

  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Platform Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            className={`border-0 ${platform === "youtube" ? "bg-red-600" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
          >
            {platform === "youtube" ? "YouTube" : "Instagram"}
          </Badge>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="bg-black/70 text-white border-0">
            {formatDuration(duration)}
          </Badge>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Video Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Video Stats */}
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{formatNumber(views)} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{formatNumber(likes)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Watch Button */}
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Watch {platform === "youtube" ? "on YouTube" : "on Instagram"}
          </Button>
        </Link>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
