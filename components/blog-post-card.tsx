"use client"

import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPostCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  publishedAt: string
  readTime: string
  tags: string[]
}

export function BlogPostCard({ id, title, excerpt, publishedAt, readTime, tags }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <article className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 cursor-pointer">
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </article>
    </Link>
  )
}
