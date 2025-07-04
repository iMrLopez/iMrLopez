"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Users, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

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
  const [isHovered, setIsHovered] = useState(false)

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
              <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white">
                {platform}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 z-20">
              <Badge variant="secondary" className="bg-green-500/80 backdrop-blur-sm text-white">
                {price}
              </Badge>
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                {level}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-zinc-400">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{rating}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>

            <p className="text-zinc-400 mb-4 flex-grow line-clamp-3">{description}</p>

            <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-zinc-700/50">
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                asChild
              >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  Enroll Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
