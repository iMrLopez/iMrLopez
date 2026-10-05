export const education = [
  { school: "Universidad Cenfotec", degree: "Master of Engineering, Software Engineering", start: 2023, end: 2026 },
  { school: "Universidad Cenfotec", degree: "Master of Technology, Artificial Intelligence", start: 2023, end: 2025 },
  { school: "Universidad Técnica Nacional", degree: "Postgraduate degree, Software Engineering", start: 2021, end: 2022 },
  { school: "Universidad Técnica Nacional", degree: "Bachelor of Engineering, Software Engineering", start: 2015, end: 2020 },
] as const

export const certifications = [
  "Building with the Claude API",
  "Flutter Development Using Dart",
  "Google People Management Essentials",
  "Ionic 4.0 Essential Training",
] as const

export const honors = [
  "Cisco CCNA 1, 2, and 3 Discovery, honorific mentions",
  "Cisco IT Essentials, honorific mention",
  "ExpoIngeniería 2013, institutional finalist",
] as const

/** Grouped the way recruiters scan: what I build with, not percentages. */
export const toolbox = [
  { area: "Frontend", items: ["React", "React Native", "Expo", "Next.js", "TypeScript", "Tailwind", "Vue.js", "Angular", "Flutter"] },
  { area: "Backend", items: ["Node.js", "NestJS", "Django", "FastAPI", "Express", "GraphQL", "REST"] },
  { area: "Data and cloud", items: ["PostgreSQL", "Firestore", "Supabase", "MongoDB", "Redis", "Firebase", "Docker", "GitHub Actions"] },
  { area: "AI", items: ["LLM integration", "LangChain", "Transformer models", "Claude API", "OpenAI"] },
] as const
