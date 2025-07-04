"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Users, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  description: string
  image: string
  price: string
  students: number
  duration: string
  rating: number
  level: string
  url: string
  platform: string
}

export function CourseCard({
  title,
  description,
  image,
  price,
  students,
  duration,
  rating,
  level,
  url,
  platform,
}: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/50 text-white border-0">{platform}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            {level}
          </Badge>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">{price}</div>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
