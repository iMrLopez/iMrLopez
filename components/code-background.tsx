"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Code snippets to display
    const codeSnippets = [
      "const developer = 'Shine';",
      "function createMagic() {",
      "  return innovation;",
      "}",
      "import React from 'react';",
      "export default Portfolio;",
      "const skills = ['JS', 'TS', 'React'];",
      "// Building the future",
      "npm install creativity",
      "git commit -m 'Amazing work'",
      "console.log('Hello World');",
      "async function build() {",
      "  await deploy();",
      "}",
      "<Component />",
      "useState(true)",
      "useEffect(() => {})",
    ]

    // Floating code class
    class FloatingCode {
      x: number
      y: number
      text: string
      opacity: number
      speed: number
      fontSize: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas.width / devicePixelRatio)
        this.y = Math.random() * (canvas.height / devicePixelRatio)
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.opacity = Math.random() * 0.3 + 0.1
        this.speed = Math.random() * 0.5 + 0.2
        this.fontSize = Math.random() * 8 + 10

        // Random purple/pink colors
        const hue = Math.random() * 60 + 270 // 270-330 range
        this.color = `hsla(${hue}, 70%, 60%, ${this.opacity})`
      }

      update() {
        this.y -= this.speed
        this.opacity -= 0.001

        // Reset when it goes off screen or fades out
        if (this.y < -50 || this.opacity <= 0) {
          this.y = canvas.height / devicePixelRatio + 50
          this.x = Math.random() * (canvas.width / devicePixelRatio)
          this.opacity = Math.random() * 0.3 + 0.1
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]

          const hue = Math.random() * 60 + 270
          this.color = `hsla(${hue}, 70%, 60%, ${this.opacity})`
        }
      }

      draw() {
        ctx.save()
        ctx.font = `${this.fontSize}px 'Fira Code', 'Monaco', 'Consolas', monospace`
        ctx.fillStyle = this.color
        ctx.fillText(this.text, this.x, this.y)
        ctx.restore()
      }
    }

    // Create floating code elements
    const floatingCodes: FloatingCode[] = []
    const codeCount = 15

    for (let i = 0; i < codeCount; i++) {
      floatingCodes.push(new FloatingCode())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      floatingCodes.forEach((code) => {
        code.update()
        code.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
