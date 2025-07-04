"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, BookOpen, MessageCircle, Menu, X } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#blog", label: "Blog", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: MessageCircle },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 rounded-full px-6 py-3">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.href.substring(1)

              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 right-6 bg-zinc-800/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-4 min-w-[200px]">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href.substring(1)

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
