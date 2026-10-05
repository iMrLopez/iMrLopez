// Captures project screenshots into public/projects/ for every project that
// has both a `site` and a `screenshot` path in content/projects.ts.
//
//   pnpm screenshots            all projects
//   pnpm screenshots travelix   only the given slugs
//
// Uses the locally installed Chrome (playwright-core, no browser download).
// Set CHROME_PATH to point at another Chromium binary.
import { mkdir } from "node:fs/promises"
import { dirname, join } from "node:path"
import { chromium } from "playwright-core"

import { projects } from "../content/projects"

// Screenshots composed by hand (e.g. from app store images) that a page capture would overwrite.
const manual = new Set(["orvis"])

const only = new Set(process.argv.slice(2))
const targets = projects.filter(
  (p) => p.site && p.screenshot && (only.size ? only.has(p.slug) : !manual.has(p.slug)),
)

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" },
)
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
  colorScheme: "light",
  reducedMotion: "reduce",
})

let failed = 0
for (const project of targets) {
  const out = join(process.cwd(), "public", project.screenshot!)
  const page = await context.newPage()
  try {
    await page.goto(project.site!, { waitUntil: "networkidle", timeout: 30_000 })
    await page.waitForTimeout(1500) // let fonts, hero images and entry animations settle
    await mkdir(dirname(out), { recursive: true })
    await page.screenshot({ path: out, type: "jpeg", quality: 82 })
    console.log(`✓ ${project.slug} → public${project.screenshot}`)
  } catch (error) {
    failed++
    console.error(`✗ ${project.slug}: ${(error as Error).message.split("\n")[0]}`)
  } finally {
    await page.close()
  }
}

await browser.close()
process.exit(failed ? 1 : 0)
