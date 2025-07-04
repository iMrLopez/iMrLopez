"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  project: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "Shine delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupHub",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "Working with Shine was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that significantly improved our user engagement.",
    project: "Company Website Redesign",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "Shine's expertise in React and modern web technologies helped us build a complex dashboard that our clients love. His communication throughout the project was outstanding.",
    project: "Analytics Dashboard",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "FinTech Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "The mobile app Shine developed for us has been a huge success. His understanding of user experience and technical implementation is truly impressive.",
    project: "Mobile Banking App",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "HealthTech Pro",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "Shine's ability to translate complex requirements into elegant solutions is remarkable. The healthcare platform he built for us is both powerful and user-friendly.",
    project: "Healthcare Management System",
  },
]

export function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-purple-500/50"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-purple-400" />
                <div className="flex items-center gap-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-zinc-300 mb-6 leading-relaxed">
                "{reviews[currentIndex].review}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentIndex].avatar || "/placeholder.svg"}
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-500/50"
                />
                <div>
                  <div className="font-bold text-white">{reviews[currentIndex].name}</div>
                  <div className="text-zinc-400">{reviews[currentIndex].role}</div>
                  <div className="text-purple-400 text-sm">{reviews[currentIndex].company}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-zinc-500">Project:</div>
                  <div className="text-sm font-medium text-zinc-300">{reviews[currentIndex].project}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevReview}
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-purple-500" : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextReview}
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
