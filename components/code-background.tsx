"use client"

import { useEffect, useState } from "react"

const codeSnippets = [
  "const portfolio = () => {",
  "  return (",
  "    <div className='hero'>",
  "      <h1>Hello World</h1>",
  "    </div>",
  "  )",
  "}",
  "",
  "function createMagic() {",
  "  const skills = ['React', 'Next.js']",
  "  return skills.map(skill => ",
  "    <Skill key={skill} name={skill} />",
  "  )",
  "}",
  "",
  "// Building amazing experiences",
  "export default Portfolio",
]

export function CodeBackground() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const newLines = [...prev]
        const randomIndex = Math.floor(Math.random() * codeSnippets.length)

        if (newLines.includes(randomIndex)) {
          return newLines.filter((line) => line !== randomIndex)
        } else {
          if (newLines.length < 8) {
            newLines.push(randomIndex)
          } else {
            newLines.shift()
            newLines.push(randomIndex)
          }
        }

        return newLines
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-5">
        {codeSnippets.map((line, index) => (
          <div
            key={index}
            className={`absolute text-sm font-mono text-purple-400 transition-all duration-1000 ${
              visibleLines.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{
              top: `${10 + index * 30}px`,
              left: `${20 + (index % 3) * 200}px`,
              animationDelay: `${index * 200}ms`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
