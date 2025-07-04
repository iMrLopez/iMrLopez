"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Review {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  review: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Shine delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success. The code quality was outstanding and the project was delivered on time.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Working with Shine was a fantastic experience. He understood our requirements perfectly and delivered a solution that exceeded our expectations. His React and Next.js skills are top-notch.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Shine brought our designs to life with pixel-perfect precision. His ability to translate complex designs into responsive, interactive web applications is remarkable. Highly recommended!",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Shine's expertise in full-stack development helped us launch our MVP ahead of schedule. His problem-solving skills and communication throughout the project were excellent.",
  },
]

export function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextReview, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentReview = reviews[currentIndex]

  return (
    <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Review Card */}
      <div className="relative p-8 rounded-2xl bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50">
        <div className="absolute top-6 left-6 text-purple-400/20">
          <Quote className="h-12 w-12" />
        </div>

        <div className="relative z-10">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < currentReview.rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}`}
              />
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="text-lg text-zinc-300 mb-8 leading-relaxed">"{currentReview.review}"</blockquote>

          {/* Reviewer Info */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={currentReview.avatar || "/placeholder.svg"}
                alt={currentReview.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-white">{currentReview.name}</div>
              <div className="text-sm text-zinc-400">
                {currentReview.role} at {currentReview.company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevReview}
          className="rounded-full bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextReview}
          className="rounded-full bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Auto-play Indicator */}
      <div className="text-center mt-4">
        <span className="text-xs text-zinc-500">
          {isAutoPlaying ? "Auto-playing" : "Paused"} • {currentIndex + 1} of {reviews.length}
        </span>
      </div>
    </div>
  )
}
