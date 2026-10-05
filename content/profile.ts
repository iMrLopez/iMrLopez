export const profile = {
  name: "Marny Lopez",
  headline: "Senior software engineer · Founder of MyndsIT",
  shortTitle: "Senior Software Engineer",
  lede: "I build web and mobile products end to end, from React Native apps to Django and NestJS backends, and lately a lot of applied AI. Thirteen years shipping for Cisco, DrChrono, Tone, and the American Kennel Club, plus products of my own.",
  location: "San José, Costa Rica",
  timezone: "UTC−6",
  languages: ["Spanish (native)", "English (professional)"],
  careerStart: 2013,
  availableForWork: true,
  site: "https://www.marnylopez.com",
  /** The one place visitors are sent to get in touch. */
  linkedin: "https://www.linkedin.com/in/marnylopez/",
  github: "https://github.com/iMrLopez",
  youtube: "https://www.youtube.com/@iMrLopez",
  instagram: "https://instagram.com/iimrlopez",
  company: { name: "MyndsIT", href: "https://myndsit.com" },
} as const

/**
 * Private contact details, only rendered client-side on /card.
 * They are never committed: CARD_EMAIL and CARD_PHONE come from the environment
 * (.env.local locally, Actions secrets in CI) and next.config.mjs inlines them
 * reversed and base64-encoded, so they never appear in the static HTML.
 */
export const privateContact = {
  email: process.env.NEXT_PUBLIC_CARD_EMAIL_ENC ?? "",
  phone: process.env.NEXT_PUBLIC_CARD_PHONE_ENC ?? "",
}
