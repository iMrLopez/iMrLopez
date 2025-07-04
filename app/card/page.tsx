"use client"

import Link from "next/link"
import {
  Mail,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
  Share2,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/avatar"
import { Badge } from "@/components/ui/badge"
import { CodeBackground } from "@/components/code-background"

export default function VCard() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Marny Lopez - Software Engineer",
          text: "Check out my digital business card",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "NestJS",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Firebase",
    "GraphQL",
    "Tailwind CSS",
    "Python",
    "Git",
    "AWS",
    "Docker",
  ]

  const servicesAndExperience = [
    "10+ Years in Software Development",
    "Full-Stack Web Development",
    "Mobile App Development",
    "SaaS Application Development",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Infrastructure Setup",
    "Technical Consulting",
    "Code Review & Optimization",
    "Cross-Platform Development Expert",
    "AI Integration Specialist",
    "Senior Full Stack Engineer",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Code Background Animation */}
      <CodeBackground />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* VCard */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Avatar src="/placeholder.svg?height=120&width=120" alt="Marny Lopez" size={120} />
            </div>

            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Marny Lopez
              </span>
            </h1>

            <p className="text-lg text-zinc-300 mb-2">Senior Full Stack Engineer</p>
            <p className="text-sm text-zinc-400">Founder & CEO at MyndsIT</p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">Available for work</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-purple-400" />
              Contact Information
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="mailto:me@marnylopez.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Mail className="h-4 w-4 text-purple-400" />
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500">Email</div>
                  <div className="text-sm font-medium truncate">me@marnylopez.com</div>
                </div>
              </Link>

              <Link
                href="https://wa.me/50660453526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500">WhatsApp</div>
                  <div className="text-sm font-medium truncate">+506 6045 3526</div>
                </div>
              </Link>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30">
                <MapPin className="h-4 w-4 text-purple-400" />
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500">Location</div>
                  <div className="text-sm font-medium">San José, Costa Rica</div>
                </div>
              </div>

              <Link
                href="https://marnylopez.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Globe className="h-4 w-4 text-purple-400" />
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500">Website</div>
                  <div className="text-sm font-medium truncate">marnylopez.com</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="https://github.com/iMrLopez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Github className="h-4 w-4 text-purple-400" />
                <span className="text-sm">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/marnylopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Linkedin className="h-4 w-4 text-purple-400" />
                <span className="text-sm">LinkedIn</span>
              </Link>

              <Link
                href="https://youtube.com/@iMrLopez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Youtube className="h-4 w-4 text-purple-400" />
                <span className="text-sm">YouTube</span>
              </Link>

              <Link
                href="https://instagram.com/iimrlopez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors group"
              >
                <Instagram className="h-4 w-4 text-purple-400" />
                <span className="text-sm">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-700/50 text-zinc-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services & Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Services & Experience</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {servicesAndExperience.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 border-t border-zinc-700/50">
            <Link href="/#contact">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25">
                Contact Me
              </Button>
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/#projects">
                <Button
                  variant="outline"
                  className="w-full border-zinc-600 text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 bg-transparent"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Projects
                </Button>
              </Link>

              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full border-zinc-600 text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 pt-6 border-t border-zinc-700/50">
            <p className="text-xs text-zinc-500">Specializing in robust, scalable applications across the stack</p>
            <p className="text-xs text-zinc-500 mt-1">From intuitive mobile experiences to resilient backend systems</p>
          </div>
        </div>
      </div>
    </div>
  )
}
