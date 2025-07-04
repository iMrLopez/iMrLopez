"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  "getting-started-with-nextjs": {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build modern web applications with improved performance and developer experience.",
    content: `
      <p>Next.js 15 brings exciting new features and improvements that make building React applications even more enjoyable and efficient. In this comprehensive guide, we'll explore the key updates and learn how to leverage them in your projects.</p>
      
      <h2>What's New in Next.js 15</h2>
      <p>The latest version of Next.js introduces several groundbreaking features:</p>
      
      <ul>
        <li><strong>Improved App Router:</strong> Enhanced performance and better developer experience</li>
        <li><strong>Server Components:</strong> Better integration and optimization</li>
        <li><strong>Streaming:</strong> Improved streaming capabilities for better user experience</li>
        <li><strong>Caching:</strong> More granular control over caching strategies</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 15 project, run the following command:</p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new project with all the latest features and best practices configured out of the box.</p>
      
      <h2>Key Features to Explore</h2>
      <p>Once you have your project set up, here are some key areas to focus on:</p>
      
      <h3>1. App Router</h3>
      <p>The App Router provides a more intuitive way to structure your application with file-based routing that supports layouts, nested routes, and loading states.</p>
      
      <h3>2. Server Components</h3>
      <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance.</p>
      
      <h3>3. Data Fetching</h3>
      <p>Next.js 15 provides powerful data fetching capabilities with built-in caching and revalidation strategies.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 represents a significant step forward in React development, offering improved performance, better developer experience, and more powerful features. Whether you're building a simple website or a complex application, Next.js 15 provides the tools you need to succeed.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    author: {
      name: "Shine Kyaw Kyaw Aung",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  "mastering-typescript": {
    id: "mastering-typescript",
    title: "Mastering TypeScript for React Development",
    excerpt:
      "Deep dive into TypeScript best practices for React applications, including advanced types, generics, and utility types.",
    content: `
      <p>TypeScript has become an essential tool for React developers, providing type safety, better IDE support, and improved code maintainability. In this guide, we'll explore advanced TypeScript techniques specifically for React development.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript brings several benefits to React development:</p>
      
      <ul>
        <li>Type safety prevents runtime errors</li>
        <li>Better IDE support with autocomplete and refactoring</li>
        <li>Improved code documentation through types</li>
        <li>Enhanced team collaboration</li>
      </ul>
      
      <h2>Advanced TypeScript Patterns</h2>
      <p>Let's explore some advanced patterns that will make your React code more robust and maintainable.</p>
      
      <h3>Generic Components</h3>
      <p>Generic components allow you to create reusable components that work with different data types while maintaining type safety.</p>
      
      <h3>Utility Types</h3>
      <p>TypeScript provides several utility types that are particularly useful in React development, such as Partial, Pick, and Omit.</p>
      
      <h2>Best Practices</h2>
      <p>Here are some best practices for using TypeScript with React:</p>
      
      <ul>
        <li>Use strict mode for better type checking</li>
        <li>Define interfaces for props and state</li>
        <li>Leverage union types for component variants</li>
        <li>Use generic constraints for flexible yet safe APIs</li>
      </ul>
    `,
    image: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "JavaScript"],
    author: {
      name: "Shine Kyaw Kyaw Aung",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  // Add more blog posts here...
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container py-6">
          <Link href="/#blog">
            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-zinc-700/50 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
              {post.title}
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-3xl">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-xl mb-12">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <GlassmorphicCard>
              <div
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-code:text-purple-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </GlassmorphicCard>

            {/* Author Bio */}
            <div className="mt-12">
              <GlassmorphicCard>
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{post.author.name}</h3>
                    <p className="text-zinc-400">
                      Software Engineer & Creative Developer passionate about building exceptional digital experiences.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
