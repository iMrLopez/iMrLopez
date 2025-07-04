"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

interface ProjectSliderProps {
  projects: Project[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ProjectSlider({ projects, currentPage, totalPages, onPageChange }: ProjectSliderProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrevious = () => {
    if (currentPage > 1 && !isAnimating) {
      setIsAnimating(true)
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages && !isAnimating) {
      setIsAnimating(true)
      onPageChange(currentPage + 1)
    }
  }

  const handleDotClick = (page: number) => {
    if (page !== currentPage && !isAnimating) {
      setIsAnimating(true)
      onPageChange(page)
    }
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300 ease-in-out ${
            isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {projects.map((project, index) => (
            <div key={`${currentPage}-${index}`} className="transform transition-all duration-300 ease-in-out">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentPage === 1 || isAnimating}
          className="rounded-full bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous projects</span>
        </Button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handleDotClick(page)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                page === currentPage
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                  : "bg-zinc-600 hover:bg-zinc-500"
              } disabled:cursor-not-allowed`}
              aria-label={`Go to page ${page}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentPage === totalPages || isAnimating}
          className="rounded-full bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next projects</span>
        </Button>
      </div>

      {/* Page Indicator */}
      <div className="text-center mt-4">
        <span className="text-sm text-zinc-400">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Touch/Swipe Indicators for Mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-zinc-600 rounded-full"></div>
            <div className="w-1 h-4 bg-zinc-600 rounded-full"></div>
            <div className="w-1 h-4 bg-zinc-600 rounded-full"></div>
          </div>
          <span>Swipe to navigate</span>
        </div>
      </div>
    </div>
  )
}
