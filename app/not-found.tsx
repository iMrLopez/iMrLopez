import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <p className="mono-label text-brand">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist</h1>
        <Link href="/" className="mono-label mt-6 inline-block text-ink-2 hover:text-ink">
          ← back to marnylopez.com
        </Link>
      </div>
    </main>
  )
}
