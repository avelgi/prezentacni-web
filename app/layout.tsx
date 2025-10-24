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
  title: "Avelgi Web Development - Webový stratég a developer",
  description:
    "Vítejte na místě, kde se byznysová strategie snoubí s výkonným web developmentem. Jsem webový stratég a developer. Díky kombinaci obchodních znalostí, datové analytiky a moderních technologií stavím digitální řešení, která nejen oslní designem, ale především generují měřitelné výsledky.",
  generator: "v0.dev",
  keywords: [
    "avelgi",
    "web development",
    "webový stratég",
    "developer",
    "tvorba webů",
    "webové stránky",
    "digitální řešení",
    "moderní weby",
  ],
  authors: [{ name: "Avelgi" }],
  creator: "Avelgi Web Development",
  publisher: "Avelgi Web Development",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://avelgi.com",
    siteName: "Avelgi Web Development",
    title: "Avelgi Web Development - Webový stratég a developer",
    description:
      "Moderní weby pro váš byznys. Kombinace obchodních znalostí, datové analytiky a moderních technologií pro měřitelné výsledky.",
    images: [
      {
        url: "https://avelgi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avelgi Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelgi Web Development - Webový stratég a developer",
    description:
      "Moderní weby pro váš byznys. Kombinace obchodních znalostí, datové analytiky a moderních technologií.",
    images: ["https://avelgi.com/og-image.png"],
  },
  alternates: {
    canonical: "https://avelgi.com",
  },
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
