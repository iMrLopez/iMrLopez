"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog-post-card"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  publishedAt: string
  readTime: string
  tags: string[]
}

interface BlogSliderProps {
  posts: BlogPost[]
}

export function BlogSlider({ posts }: BlogSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const goToPost = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextPost, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Get current posts to show (2 at a time)
  const postsToShow = [posts[currentIndex], posts[(currentIndex + 1) % posts.length]]

  return (
    <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {postsToShow.map((post, index) => (
          <div key={`${currentIndex}-${index}`} className="transform transition-all duration-500 ease-in-out">
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPost}
          className="rounded-full bg-neutral-800/50 border-neutral-700 hover:bg-neutral-700"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous posts</span>
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPost(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-brand-500 to-accent-500 scale-110"
                  : "bg-neutral-600 hover:bg-neutral-500"
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPost}
          className="rounded-full bg-neutral-800/50 border-neutral-700 hover:bg-neutral-700"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next posts</span>
        </Button>
      </div>

      {/* Auto-play Indicator */}
      <div className="text-center mt-4">
        <span className="text-xs text-neutral-500">
          {isAutoPlaying ? "Auto-playing" : "Paused"} • {currentIndex + 1} of {posts.length}
        </span>
      </div>
    </div>
  )
}
