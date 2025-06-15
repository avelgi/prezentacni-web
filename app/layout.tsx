import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const geist = {
  className: "font-sans",
}

export const metadata: Metadata = {
  title: "Benterud Capital - Finding Fortune's Favour",
  description:
    "Opportunity, like beauty, is in the eye of the beholder. Often times we can see opportunity when we get the terms we desire and you too can see the beauty in the capital we provide.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}
