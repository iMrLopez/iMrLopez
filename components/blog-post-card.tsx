"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
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

export function BlogPostCard({ id, title, excerpt, image, publishedAt, readTime, tags }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
            <div className="absolute top-3 left-3 z-20">
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-black/50 backdrop-blur-sm text-white text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>

            <p className="text-zinc-400 mb-4 flex-grow line-clamp-3">{excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(2).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-zinc-700/50">
              <Button
                variant="ghost"
                className="w-full justify-between text-zinc-400 hover:text-white hover:bg-zinc-700/50 group/btn"
                asChild
              >
                <Link href={`/blog/${id}`}>
                  Read More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-purple-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
