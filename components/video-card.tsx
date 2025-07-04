"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Eye, ThumbsUp, ExternalLink, Instagram } from "lucide-react"
import { motion } from "framer-motion"

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
  platform?: "youtube" | "instagram"
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
  platform = "youtube",
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const platformConfig = {
    youtube: {
      name: "YouTube",
      color: "bg-red-600/80",
      hoverColor: "bg-red-600",
      buttonText: "Watch on YouTube",
      icon: Play,
    },
    instagram: {
      name: "Instagram",
      color: "bg-gradient-to-r from-purple-600/80 to-pink-600/80",
      hoverColor: "bg-gradient-to-r from-purple-600 to-pink-600",
      buttonText: "Watch on Instagram",
      icon: Instagram,
    },
  }

  const config = platformConfig[platform]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                className={`w-16 h-16 rounded-full ${config.color} backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  isHovered ? `scale-110 ${config.hoverColor}` : "scale-100"
                }`}
              >
                <config.icon className="h-6 w-6 text-white ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-3 right-3 z-20">
              <Badge variant="secondary" className="bg-black/70 backdrop-blur-sm text-white">
                {duration}
              </Badge>
            </div>

            <div className="absolute top-3 left-3 z-20">
              <Badge variant="secondary" className={`${config.color} backdrop-blur-sm text-white`}>
                {config.name}
              </Badge>
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>

            <p className="text-zinc-400 mb-4 flex-grow line-clamp-3">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{formatViews(views)} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{formatViews(likes)}</span>
                </div>
              </div>
              <span>{formatDate(publishedAt)}</span>
            </div>

            <div className="mt-auto pt-4 border-t border-zinc-700/50">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                asChild
              >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {config.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
