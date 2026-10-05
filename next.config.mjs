/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages; `next build` writes the site to /dist.
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  // Set by CI from actions/configure-pages: "/MyPortfolio" on *.github.io, "" on the custom domain.
  basePath: process.env.PAGES_BASE_PATH || "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
