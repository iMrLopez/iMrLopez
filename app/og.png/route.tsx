import { ImageResponse } from "next/og"

import { profile } from "@/content/profile"

// Exported as /og.png at build time. A route handler (instead of the
// opengraph-image convention) keeps the .png extension, which GitHub Pages
// needs to serve the right content type.
export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0c0c0e",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#8b9dfe" }}>marnylopez.com</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -5 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 12 }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b6b74" }}>{profile.location}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
