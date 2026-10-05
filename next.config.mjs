// Contact details for /card come from the environment and are inlined
// reversed + base64 so they never appear as plain text in the output.
const encode = (value = "") => Buffer.from([...value].reverse().join("")).toString("base64")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages; `next build` writes the site to /dist.
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  // Set by CI from actions/configure-pages: "/<repo>" on *.github.io, "" on the custom domain.
  basePath: process.env.PAGES_BASE_PATH || "",
  // Static hosting has no image optimizer; screenshots are pre-sized by scripts/screenshots.mjs.
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_CARD_EMAIL_ENC: encode(process.env.CARD_EMAIL),
    NEXT_PUBLIC_CARD_PHONE_ENC: encode(process.env.CARD_PHONE),
  },
}

export default nextConfig
