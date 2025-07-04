"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { BlogPostCard } from "@/components/blog-post-card"
import { CourseCard } from "@/components/course-card"
import { VideoCard } from "@/components/video-card"
import { ClientReviews } from "@/components/client-reviews"
import { Pagination } from "@/components/pagination"
import { CodeBackground } from "@/components/code-background"
import { Avatar } from "@/components/avatar"

export default function Portfolio() {
  const [coursesPage, setCoursesPage] = useState(1)
  const [videosPage, setVideosPage] = useState(1)
  const [blogPage, setBlogPage] = useState(1)
  const [projectsPage, setProjectsPage] = useState(1)

  const itemsPerPage = 2

  // Sample data arrays
  const allCourses = [
    {
      title: "Complete React & Next.js Masterclass",
      description:
        "Master modern React development with Next.js, TypeScript, and advanced patterns. Build production-ready applications from scratch.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$99",
      students: 2500,
      duration: "12 hours",
      rating: 4.8,
      level: "Intermediate",
      url: "https://example.com/course",
      platform: "Udemy",
    },
    {
      title: "TypeScript for React Developers",
      description:
        "Learn TypeScript fundamentals and advanced concepts specifically for React development. Improve code quality and developer experience.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$79",
      students: 1800,
      duration: "8 hours",
      rating: 4.9,
      level: "Beginner",
      url: "https://example.com/course",
      platform: "Skillshare",
    },
    {
      title: "Modern CSS & Tailwind CSS",
      description:
        "Master modern CSS techniques, Flexbox, Grid, and Tailwind CSS. Create beautiful, responsive designs with confidence.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$59",
      students: 3200,
      duration: "10 hours",
      rating: 4.7,
      level: "Beginner",
      url: "https://example.com/course",
      platform: "Coursera",
    },
    {
      title: "Advanced JavaScript Patterns",
      description:
        "Deep dive into advanced JavaScript concepts, design patterns, and best practices for professional development.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$89",
      students: 1500,
      duration: "14 hours",
      rating: 4.6,
      level: "Advanced",
      url: "https://example.com/course",
      platform: "Udemy",
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
    },
  ]

  const allBlogPosts = [
    {
      id: "getting-started-with-nextjs",
      title: "Getting Started with Next.js 15",
      excerpt:
        "Explore the latest features in Next.js 15 and learn how to build modern web applications with improved performance and developer experience.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"],
    },
    {
      id: "mastering-typescript",
      title: "Mastering TypeScript for React Development",
      excerpt:
        "Deep dive into TypeScript best practices for React applications, including advanced types, generics, and utility types.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-10",
      readTime: "8 min read",
      tags: ["TypeScript", "React", "JavaScript"],
    },
    {
      id: "css-animations-guide",
      title: "Creating Smooth CSS Animations",
      excerpt:
        "Learn how to create beautiful, performant CSS animations that enhance user experience without compromising performance.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2024-01-05",
      readTime: "6 min read",
      tags: ["CSS", "Animation", "UI/UX"],
    },
    {
      id: "react-performance-optimization",
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize React applications, including memoization, code splitting, and bundle analysis.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-28",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: "building-accessible-components",
      title: "Building Accessible React Components",
      excerpt:
        "A comprehensive guide to creating accessible React components that work for everyone, including ARIA patterns and testing strategies.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-20",
      readTime: "7 min read",
      tags: ["Accessibility", "React", "Web Standards"],
    },
    {
      id: "modern-css-techniques",
      title: "Modern CSS Techniques for 2024",
      excerpt:
        "Explore the latest CSS features including container queries, cascade layers, and new color functions that are changing how we style the web.",
      image: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-12-15",
      readTime: "9 min read",
      tags: ["CSS", "Modern Web", "Frontend"],
    },
  ]

  const allProjects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Stripe, and Prisma.",
      tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation tool using OpenAI's GPT models.",
      tags: ["Next.js", "OpenAI API", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with data visualization.",
      tags: ["React Native", "TypeScript", "D3.js", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with forecasts and historical data.",
      tags: ["React", "Weather API", "Chart.js", "Styled Components"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ]

  // Pagination logic
  const paginateItems = (items: any[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }

  const coursesToShow = paginateItems(allCourses, coursesPage)
  const videosToShow = paginateItems(allVideos, videosPage)
  const blogPostsToShow = paginateItems(allBlogPosts, blogPage)
  const projectsToShow = paginateItems(allProjects, projectsPage)

  const totalCoursesPages = Math.ceil(allCourses.length / itemsPerPage)
  const totalVideosPages = Math.ceil(allVideos.length / itemsPerPage)
  const totalBlogPages = Math.ceil(allBlogPosts.length / itemsPerPage)
  const totalProjectsPages = Math.ceil(allProjects.length / itemsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <CodeBackground />

        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center">
          <div className="space-y-8">
            {/* Avatar */}
            <div className="flex justify-center">
              <Avatar src="/placeholder.svg?height=200&width=200" alt="Shine Kyaw Kyaw Aung" />
            </div>

            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Software Engineer & Creative Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shine Kyaw Kyaw Aung
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:hello@example.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
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
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="flex justify-center mt-16">
            <div className="max-w-4xl">
              <GlassmorphicCard>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">Available for work</span>
                </div>

                <p className="text-lg text-zinc-300">
                  I'm a passionate software engineer with experience building web applications and digital products. I
                  specialize in frontend development with React and Next.js, but I'm also comfortable working with
                  backend technologies.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started with a strong foundation in software development. I've worked with various
                  companies to create intuitive, performant, and accessible digital experiences.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Shine Kyaw Kyaw Aung</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">hello@example.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Myanmar</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Experience</div>
                    <div className="font-medium">5+ Years</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
      <section id="courses" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Courses & Videos" subtitle="Learn with me" />

          {/* Courses */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coursesToShow.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            <Pagination currentPage={coursesPage} totalPages={totalCoursesPages} onPageChange={setCoursesPage} />
          </div>

          {/* Videos */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Latest YouTube Videos & Instagram Reels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videosToShow.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
            <Pagination currentPage={videosPage} totalPages={totalVideosPages} onPageChange={setVideosPage} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projectsToShow.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <Pagination currentPage={projectsPage} totalPages={totalProjectsPages} onPageChange={setProjectsPage} />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Latest Blog Posts" subtitle="Thoughts and insights" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {blogPostsToShow.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <Pagination currentPage={blogPage} totalPages={totalBlogPages} onPageChange={setBlogPage} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Client Reviews" subtitle="What clients say about my work" />

          <div className="mt-16 max-w-4xl mx-auto">
            <ClientReviews />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">hello@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shinekyawkyawaung</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shinekyawkyawaung</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Shine</span>
              <span className="text-white">KKA</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Shine Kyaw Kyaw Aung. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
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
