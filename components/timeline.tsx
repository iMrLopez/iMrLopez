"use client"

import type React from "react"

import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Code, Database, Globe, Server, GitBranch, Cloud, Monitor, Layers } from "lucide-react"

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
    title: "Senior Full Stack Engineer",
    company: "Cisco",
    location: "San Jose, Costa Rica",
    period: "February 2024 - Present",
    description:
      "Software engineer in React for the SVP team, developing enterprise-level applications and contributing to Cisco's software solutions.",
    technologies: [
      { name: "React", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "Git", icon: GitBranch },
      { name: "Agile", icon: Monitor },
      { name: "Enterprise", icon: Server },
    ],
  },
  {
    title: "Senior Staff Software Engineer",
    company: "Mynds IT (Founder)",
    location: "Alajuela, Costa Rica",
    period: "January 2014 - Present",
    description:
      "Founded MyndsIT to deliver cutting-edge web and mobile solutions. Specialize in full-stack development, creating SaaS applications, and staying current with emerging technologies. Provide innovative solutions that empower businesses in the digital landscape.",
    technologies: [
      { name: "React Native", icon: Code },
      { name: "NestJS", icon: Server },
      { name: "Django", icon: Server },
      { name: "TypeScript", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    title: "Senior Software Development Engineer",
    company: "Tone",
    location: "United States (Remote)",
    period: "June 2022 - February 2024",
    description:
      "Full-Stack Web Developer specializing in Python (Django), SQL (PostgreSQL), and TypeScript (React.js). Advanced music distribution technology with infrastructure support and website optimization.",
    technologies: [
      { name: "Django", icon: Server },
      { name: "React", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "TypeScript", icon: Code },
      { name: "Python", icon: Server },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Senior Full-Stack Web Software Engineer",
    company: "Riparian LLC",
    location: "United States (Remote)",
    period: "March 2020 - May 2022",
    description:
      "Worked on Helix and Ion projects, improving system performance and stability through developmental and architectural changes. Migrated to new Vue.js version and built Node.js applications with Express.js for RESTful APIs.",
    technologies: [
      { name: "Vue.js", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "TypeScript", icon: Code },
      { name: "REST API", icon: Globe },
      { name: "Architecture", icon: Layers },
    ],
  },
  {
    title: "Senior Software Development Engineer",
    company: "American Kennel Club",
    location: "Costa Rica",
    period: "February 2018 - February 2020",
    description:
      "Worked through 3Pillar Global Costa Rica, implementing modifications to internal and external applications (REGIS, BRETT, JPM). Built Python microservices with Angular and React frontends, using MongoDB, Oracle DB, and Redis.",
    technologies: [
      { name: "Python", icon: Server },
      { name: "Angular", icon: Code },
      { name: "React", icon: Code },
      { name: "MongoDB", icon: Database },
      { name: "Oracle", icon: Database },
      { name: "Redis", icon: Database },
    ],
  },
  {
    title: "Software Engineer Team Lead",
    company: "DXC Technology",
    location: "Heredia, Costa Rica",
    period: "January 2017 - July 2017",
    description:
      "Led multinational team across India, Bulgaria, United States, and Costa Rica. Created SCRUM-based team to automate billing processes and implemented RPA technologies. Focused on process automation and team leadership.",
    technologies: [
      { name: "SCRUM", icon: Monitor },
      { name: "RPA", icon: Server },
      { name: "Leadership", icon: Briefcase },
      { name: "Automation", icon: Code },
      { name: "Process", icon: Layers },
      { name: "Billing", icon: Database },
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
