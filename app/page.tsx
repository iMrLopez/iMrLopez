"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Youtube, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { BlogSlider } from "@/components/blog-slider"
import { CourseCard } from "@/components/course-card"
import { VideoCard } from "@/components/video-card"
import { ClientReviews } from "@/components/client-reviews"
import { Pagination } from "@/components/pagination"
import { CodeBackground } from "@/components/code-background"
import { Avatar } from "@/components/avatar"
import { ProjectCardSmall } from "@/components/project-card-small"

export default function Portfolio() {
  const [contentPage, setContentPage] = useState(1)
  const [projectsPage, setProjectsPage] = useState(1)

  const itemsPerPage = 2
  const projectsPerPage = 6 // 3x2 grid per page

  // Sample data arrays
  const allCourses = [
    {
      title: "Curso profesional de JavaScript, de cero a experto en 2022!",
      description:
        "Comprehensive JavaScript course covering fundamentals to advanced concepts. Perfect for developers looking to master modern JavaScript development.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Published",
      students: 0,
      duration: "Self-paced",
      rating: 5.0,
      level: "All Levels",
      url: "https://example.com/course",
      platform: "Publication",
      type: "course" as const,
    },
    {
      title: "Cross-Platform Development Technologies Analysis",
      description:
        "Analysis of existing cross-platform development technologies and proposal for an automated development process applicable to SMEs focused on multi-platform applications.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Research",
      students: 0,
      duration: "Academic",
      rating: 5.0,
      level: "Advanced",
      url: "https://example.com/research",
      platform: "Publication",
      type: "course" as const,
    },
    {
      title: "React Native Development Mastery",
      description:
        "Master React Native development with Expo, TypeScript, and modern mobile development practices. Build production-ready mobile applications.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Certified",
      students: 0,
      duration: "Nanodegree",
      rating: 5.0,
      level: "Intermediate",
      url: "https://example.com/certification",
      platform: "Udacity",
      type: "course" as const,
    },
    {
      title: "Full-Stack Development with NestJS & React",
      description:
        "Complete guide to building scalable full-stack applications using NestJS backend and React frontend with TypeScript and modern development practices.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Expert",
      students: 0,
      duration: "Professional",
      rating: 5.0,
      level: "Advanced",
      url: "https://myndsit.com",
      platform: "MyndsIT",
      type: "course" as const,
    },
  ]

  const allVideos = [
    {
      title: "Next.js 15 - What's New and How to Upgrade",
      description:
        "Explore all the new features in Next.js 15 and learn how to upgrade your existing projects. Complete walkthrough with examples.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 45000,
      likes: 2100,
      duration: "15:32",
      publishedAt: "2024-01-20",
      url: "https://youtube.com/watch?v=example",
      tags: ["Next.js", "React", "Tutorial"],
      platform: "youtube" as const,
      type: "video" as const,
    },
    {
      title: "Building a Full-Stack App with React & Node.js",
      description:
        "Complete tutorial on building a full-stack application from scratch using React, Node.js, and MongoDB. Includes authentication and deployment.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 78000,
      likes: 3500,
      duration: "42:18",
      publishedAt: "2024-01-15",
      url: "https://youtube.com/watch?v=example",
      tags: ["React", "Node.js", "Full-Stack"],
      platform: "youtube" as const,
      type: "video" as const,
    },
    {
      title: "CSS Grid vs Flexbox - When to Use What",
      description:
        "Comprehensive comparison between CSS Grid and Flexbox. Learn when to use each layout method with practical examples and best practices.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 32000,
      likes: 1800,
      duration: "18:45",
      publishedAt: "2024-01-10",
      url: "https://youtube.com/watch?v=example",
      tags: ["CSS", "Layout", "Web Design"],
      platform: "youtube" as const,
      type: "video" as const,
    },
    {
      title: "Quick React Tips",
      description:
        "Short and sweet React tips that will improve your development workflow. Perfect for quick learning sessions.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 25000,
      likes: 1200,
      duration: "0:45",
      publishedAt: "2024-01-08",
      url: "https://instagram.com/reel/example",
      tags: ["React", "Tips", "Quick"],
      platform: "instagram" as const,
      type: "video" as const,
    },
    {
      title: "React Performance Optimization Tips",
      description:
        "Learn advanced React performance optimization techniques including memoization, code splitting, and bundle analysis.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 56000,
      likes: 2800,
      duration: "25:12",
      publishedAt: "2024-01-05",
      url: "https://youtube.com/watch?v=example",
      tags: ["React", "Performance", "Optimization"],
      platform: "youtube" as const,
      type: "video" as const,
    },
    {
      title: "TypeScript Generics Explained Simply",
      description:
        "Master TypeScript generics with simple explanations and practical examples. Make your code more reusable and type-safe.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 41000,
      likes: 2200,
      duration: "20:30",
      publishedAt: "2023-12-28",
      url: "https://youtube.com/watch?v=example",
      tags: ["TypeScript", "Generics", "Tutorial"],
      platform: "youtube" as const,
      type: "video" as const,
    },
  ]

  const allBlogPosts = [
    {
      id: "react-native-expo-guide",
      title: "Building Mobile Apps with React Native and Expo",
      excerpt:
        "Complete guide to developing cross-platform mobile applications using React Native and Expo. Learn best practices for performance and user experience.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      tags: ["React Native", "Expo", "Mobile Development"],
      url: "https://medium.com/@marnylopez/react-native-expo-guide",
    },
    {
      id: "nestjs-scalable-apis",
      title: "Building Scalable APIs with NestJS and TypeScript",
      excerpt:
        "Learn how to create robust, scalable backend APIs using NestJS framework with TypeScript. Includes authentication, validation, and database integration.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-10",
      readTime: "10 min read",
      tags: ["NestJS", "TypeScript", "Backend"],
      url: "https://dev.to/marnylopez/nestjs-scalable-apis",
    },
    {
      id: "django-fastapi-comparison",
      title: "Django vs FastAPI: Choosing the Right Python Framework",
      excerpt:
        "Comprehensive comparison between Django and FastAPI for Python web development. Understand when to use each framework for your projects.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-05",
      readTime: "7 min read",
      tags: ["Django", "FastAPI", "Python"],
      url: "https://hashnode.com/@marnylopez/django-vs-fastapi",
    },
    {
      id: "ai-integration-web-apps",
      title: "Integrating AI into Web Applications with LangChain",
      excerpt:
        "Explore how to enhance web applications with AI capabilities using LangChain and LLM integration. Practical examples for health, fitness, and travel tech.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-28",
      readTime: "12 min read",
      tags: ["AI", "LangChain", "Integration"],
      url: "https://medium.com/@marnylopez/ai-integration-langchain",
    },
    {
      id: "cross-platform-development",
      title: "Cross-Platform Development: Technologies and Best Practices",
      excerpt:
        "Analysis of cross-platform development technologies and automated development processes for SMEs. Based on academic research and industry experience.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-20",
      readTime: "15 min read",
      tags: ["Cross-Platform", "Development", "Research"],
      url: "https://dev.to/marnylopez/cross-platform-development",
    },
    {
      id: "firebase-full-stack",
      title: "Full-Stack Development with Firebase and React",
      excerpt:
        "Build complete web applications using Firebase services with React. Covers authentication, Firestore, cloud functions, and deployment strategies.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-15",
      readTime: "9 min read",
      tags: ["Firebase", "React", "Full-Stack"],
      url: "https://hashnode.com/@marnylopez/firebase-react-fullstack",
    },
  ]

  const allProjects = [
    {
      title: "MyndsIT Platform",
      description: "Comprehensive SaaS platform for delivering cutting-edge web and mobile solutions to clients.",
      tags: ["React", "NestJS", "PostgreSQL", "TypeScript"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://myndsit.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Music Distribution System",
      description: "Advanced music distribution technology platform built with Django and React for Tone.",
      tags: ["Django", "React", "PostgreSQL", "Python"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Helix & Ion Projects",
      description:
        "Performance-optimized calculation systems with Vue.js frontend and Node.js backend for Riparian LLC.",
      tags: ["Vue.js", "Node.js", "Express", "TypeScript"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "AKC Internal Applications",
      description: "REGIS, BRETT and JPM applications with Python microservices and Angular/React frontends.",
      tags: ["Python", "Angular", "React", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Cross-Platform Mobile App",
      description: "React Native application with Expo showcasing cross-platform development best practices.",
      tags: ["React Native", "Expo", "TypeScript", "Firebase"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "AI-Enhanced Web Application",
      description: "Web application integrating LangChain and LLM for health and fitness technology solutions.",
      tags: ["React", "LangChain", "Python", "AI"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Billing Automation System",
      description: "Automated billing processes system built during DXC Technology tenure with RPA integration.",
      tags: ["RPA", "Process Automation", "SCRUM", "Leadership"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Core Banking Application",
      description: "Security subsystem for core banking application at Fiserv with RPGLE and CLLE technologies.",
      tags: ["RPGLE", "CLLE", "Banking", "Security"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management.",
      tags: ["React", "CoinGecko API", "Chart.js", "Redux"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support.",
      tags: ["Next.js", "MDX", "Prisma", "NextAuth"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Music Player",
      description: "Web-based music player with playlist management and audio visualization.",
      tags: ["JavaScript", "Web Audio API", "Canvas", "Local Storage"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with rooms and file sharing capabilities.",
      tags: ["Socket.io", "Node.js", "React", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/iMrLopez",
    },
  ]

  // Combine courses and videos into one array
  const allContent = [...allCourses, ...allVideos]

  // Pagination logic
  const paginateItems = (items: any[], page: number, perPage: number) => {
    const startIndex = (page - 1) * perPage
    return items.slice(startIndex, startIndex + perPage)
  }

  const contentToShow = paginateItems(allContent, contentPage, itemsPerPage)
  const projectsToShow = paginateItems(allProjects, projectsPage, projectsPerPage)

  const totalContentPages = Math.ceil(allContent.length / itemsPerPage)
  const totalProjectsPages = Math.ceil(allProjects.length / projectsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden">
        <CodeBackground />

        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center">
          <div className="space-y-8">
            {/* Avatar */}
            <div className="flex justify-center">
              <Avatar src="/placeholder.svg?height=200&width=200" alt="Marny Lopez" />
            </div>

            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Software Engineer | Web & Mobile Full Stack Development</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500/20 to-accent-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-secondary-400 to-accent-500 bg-300% animate-gradient-shift">
                Marny Lopez
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-[600px]">
              I specialize in building robust, scalable applications across the stack — from intuitive mobile
              experiences to resilient backend systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 border-0 shadow-lg shadow-brand-500/25">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-neutral-700 text-neutral-300 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 bg-transparent"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center">
              <Link href="https://github.com/iMrLopez" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/marnylopez/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:me@marnylopez.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-tertiary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="flex justify-center mt-16">
            <div className="max-w-4xl">
              <GlassmorphicCard>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-success-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-success-400">Available for work</span>
                </div>

                <p className="text-lg text-neutral-300">
                  I specialize in building robust, scalable applications across the stack — from intuitive mobile
                  experiences to resilient backend systems. My tech toolbox includes Frontend technologies like React
                  (Native & Web), Expo, TypeScript, Tailwind, ShadCN, and Backend with NestJS, Django, FastAPI, Firebase
                  Functions, GraphQL, and REST APIs.
                </p>
                <p className="text-lg text-neutral-300 mt-4">
                  I enjoy crafting clean, maintainable codebases, optimizing developer experience, and exploring how AI
                  can enhance real-world applications — especially in health, fitness, energy, and travel tech. I am the
                  founder of MyndsIT, where I deliver cutting-edge solutions to clients and develop my own applications
                  and SaaS products.
                </p>
                <p className="text-lg text-neutral-300 mt-4">
                  When I'm not coding, I'm exploring new technologies, working on AI integration projects, and staying
                  up-to-date with the latest industry trends in web and mobile development.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-500">Name</div>
                    <div className="font-medium">Marny Lopez</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="font-medium">me@marnylopez.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-500">Location</div>
                    <div className="font-medium">San José, Costa Rica</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-500">Experience</div>
                    <div className="font-medium">10+ Years</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/25">
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="GraphQL" level={75} />
            <SkillBadge name="PostgreSQL" level={70} />
            <SkillBadge name="AWS" level={65} />
            <SkillBadge name="Docker" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Courses and Videos Section */}
      <section id="courses" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Courses & Content" subtitle="Learn with me through courses and videos" />

          <div className="mt-16">
            {/* Combined Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentToShow.map((item, index) => {
                if (item.type === "course") {
                  return <CourseCard key={`content-${index}`} {...item} />
                } else {
                  return <VideoCard key={`content-${index}`} {...item} />
                }
              })}
            </div>

            {/* Single Unified Pagination */}
            <Pagination currentPage={contentPage} totalPages={totalContentPages} onPageChange={setContentPage} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-tertiary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {projectsToShow.map((project, index) => (
              <ProjectCardSmall key={index} {...project} />
            ))}
          </div>
          <Pagination currentPage={projectsPage} totalPages={totalProjectsPages} onPageChange={setProjectsPage} />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Latest Blog Posts" subtitle="Thoughts and insights" />

          <div className="mt-16 max-w-6xl mx-auto">
            <BlogSlider posts={allBlogPosts} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-tertiary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Client Reviews" subtitle="What clients say about my work" />

          <div className="mt-16 max-w-4xl mx-auto">
            <ClientReviews />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-tertiary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="font-medium">me@marnylopez.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/marnylopez</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">GitHub</div>
                    <div className="font-medium">github.com/iMrLopez</div>
                  </div>
                </div>
                {/* YouTube and Instagram side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="https://youtube.com/@iMrLopez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-700/30 hover:bg-neutral-700/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                      <Youtube className="h-4 w-4 text-brand-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-neutral-500">YouTube</div>
                      <div className="font-medium text-sm truncate">@iMrLopez</div>
                    </div>
                  </Link>
                  <Link
                    href="https://instagram.com/iimrlopez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-700/30 hover:bg-neutral-700/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                      <Instagram className="h-4 w-4 text-brand-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-neutral-500">Instagram</div>
                      <div className="font-medium text-sm truncate">@iimrlopez</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-500">Marny</span>
              <span className="text-white">Lopez</span>
            </Link>
            <p className="text-sm text-neutral-500 mt-2">
              © {new Date().getFullYear()} Marny Lopez. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/iMrLopez" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/marnylopez/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:me@marnylopez.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-neutral-800/50 hover:bg-brand-500/20 hover:border-brand-500/50 text-neutral-400 hover:text-brand-300 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
