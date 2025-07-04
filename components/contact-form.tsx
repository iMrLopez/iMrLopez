"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-300">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-purple-500"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-purple-500"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-zinc-300">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-purple-500"
            placeholder="What's this about?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-zinc-300">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-purple-500 resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
