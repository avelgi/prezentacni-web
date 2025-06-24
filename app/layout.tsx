import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Avelgi Web Development",
  description:
    "Vítejte na místě, kde se byznysová strategie snoubí s výkonným web developmentem. Jsem webový stratég a developer. Díky kombinaci obchodních znalostí, datové analytiky a moderních technologií stavím digitální řešení, která nejen oslní designem, ale především generují měřitelné výsledky.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${montserrat.className} bg-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}
