"use client"

import type React from "react"

import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Code, Database, Globe, Server, GitBranch, Palette, Shield, Cloud, Monitor, Layers } from "lucide-react"

interface Technology {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: Technology[]
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns with TypeScript. Improved application performance by 40% and reduced bundle size by 30%.",
    technologies: [
      { name: "React", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Next.js", icon: Globe },
      { name: "GraphQL", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Server },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and maintained full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with design team to create responsive, accessible user interfaces. Implemented CI/CD pipelines and automated testing.",
    technologies: [
      { name: "React", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Express", icon: Server },
      { name: "Git", icon: GitBranch },
      { name: "Jest", icon: Shield },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Worked closely with designers to implement pixel-perfect designs. Optimized websites for performance and SEO.",
    technologies: [
      { name: "JavaScript", icon: Code },
      { name: "HTML/CSS", icon: Globe },
      { name: "Sass", icon: Palette },
      { name: "jQuery", icon: Code },
      { name: "WordPress", icon: Monitor },
      { name: "Photoshop", icon: Layers },
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebDev Studio",
    location: "Boston, MA",
    period: "2018 - 2019",
    description:
      "Started my professional journey building websites with HTML, CSS, and JavaScript. Learned modern development practices and collaborated with senior developers on various projects.",
    technologies: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Code },
      { name: "Bootstrap", icon: Monitor },
      { name: "PHP", icon: Server },
      { name: "MySQL", icon: Database },
    ],
  },
]

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex gap-8">
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium text-purple-300">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 mb-6 leading-relaxed">{experience.description}</p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, techIndex) => {
                      const IconComponent = tech.icon
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-700/50 border border-zinc-600/50 hover:border-zinc-500/50 transition-colors group"
                        >
                          <IconComponent className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                          <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
