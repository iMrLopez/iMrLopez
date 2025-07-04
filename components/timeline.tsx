"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Palette,
  Server,
  Zap,
  FileCode,
  Layers,
  Monitor,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Technology icon mapping
const techIcons: Record<string, any> = {
  React: Code2,
  TypeScript: FileCode,
  "Next.js": Globe,
  "Node.js": Server,
  JavaScript: Code2,
  Python: Code2,
  PostgreSQL: Database,
  MongoDB: Database,
  AWS: Cloud,
  Docker: Layers,
  Git: GitBranch,
  "Tailwind CSS": Palette,
  GraphQL: Database,
  Redux: Layers,
  Express: Server,
  "React Native": Smartphone,
  "Vue.js": Code2,
  Firebase: Cloud,
  Sass: Palette,
  Webpack: Layers,
  Jest: Zap,
  Cypress: Monitor,
  "HTML/CSS": Globe,
  WordPress: Globe,
  PHP: Server,
  MySQL: Database,
}

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "AWS", "Docker", "Jest"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications using React and TypeScript. Collaborated with designers and backend engineers to deliver high-quality products.",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "PostgreSQL", "Sass", "Webpack", "Cypress"],
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description:
      "Built websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and WordPress.",
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP", "MySQL", "Git", "React", "Vue.js"],
  },
  {
    title: "Intern",
    company: "Startup Hub",
    period: "2016 - 2017",
    description: "Assisted in developing web applications and learned modern web development practices.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Node.js", "MongoDB", "Git", "Express"],
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300 mb-6">{experience.description}</p>

                {/* Technologies Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, techIndex) => {
                      const IconComponent = techIcons[tech] || Code2
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-700/50 border border-zinc-600/50 hover:border-purple-500/50 transition-colors duration-200"
                        >
                          <IconComponent className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-zinc-300">{tech}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
