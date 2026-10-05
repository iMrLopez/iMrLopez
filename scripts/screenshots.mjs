#!/usr/bin/env node
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
import { fileURLToPath } from "node:url"
import { chromium } from "playwright-core"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

// content/projects.ts is TypeScript; Node 22.6+ strips types natively, older
// versions fall back to a lightweight regex read of the fields we need.
async function loadProjects() {
  try {
    const mod = await import(join(root, "content/projects.ts"))
    return mod.projects
  } catch {
    const { readFile } = await import("node:fs/promises")
    const src = await readFile(join(root, "content/projects.ts"), "utf8")
    return [...src.matchAll(/slug: "([^"]+)"[\s\S]*?(?=slug: "|$)/g)].map(([block, slug]) => ({
      slug,
      site: block.match(/site: "([^"]+)"/)?.[1],
      screenshot: block.match(/screenshot: "([^"]+)"/)?.[1],
    }))
  }
}

const only = new Set(process.argv.slice(2))
const targets = (await loadProjects()).filter(
  (p) => p.site && p.screenshot && (only.size === 0 || only.has(p.slug)),
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
  const out = join(root, "public", project.screenshot)
  const page = await context.newPage()
  try {
    await page.goto(project.site, { waitUntil: "networkidle", timeout: 30_000 })
    await page.waitForTimeout(1500) // let fonts, hero images and entry animations settle
    await mkdir(dirname(out), { recursive: true })
    await page.screenshot({ path: out, type: "jpeg", quality: 82 })
    console.log(`✓ ${project.slug} → public${project.screenshot}`)
  } catch (error) {
    failed++
    console.error(`✗ ${project.slug}: ${error.message.split("\n")[0]}`)
  } finally {
    await page.close()
  }
}

await browser.close()
process.exit(failed ? 1 : 0)
