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
  metadataBase: new URL("https://avelgi.com"),
  title: {
    default: "Avelgi - Tvorba webových stránek | Web Development | Moderní weby na míru",
    template: "%s | Avelgi Web Development",
  },
  description:
    "Avelgi Web Development - Profesionální tvorba webových stránek a moderních webů na míru. Webový stratég a developer s kombinací obchodních znalostí a datové analytiky. Rychlé, designové weby pro váš byznys.",
  generator: "Next.js",
  applicationName: "Avelgi Web Development",
  keywords: [
    "avelgi",
    "Avelgi",
    "AVELGI",
    "avelgi web development",
    "avelgi web",
    "tvorba webů",
    "tvorba webových stránek",
    "webový stratég",
    "web developer",
    "moderní weby",
    "weby na míru",
    "profesionální weby",
    "webové stránky",
    "digitální řešení",
    "web design",
    "responzivní weby",
    "rychlé weby",
    "SEO optimalizace",
    "webové aplikace",
    "e-commerce",
    "landing page",
    "firemní web",
    "prezentační web",
    "webový marketing",
    "datová analytika",
    "business strategie",
  ],
  authors: [{ name: "Avelgi", url: "https://avelgi.com" }],
  creator: "Avelgi Web Development",
  publisher: "Avelgi Web Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    title: "Avelgi - Tvorba webových stránek | Moderní weby na míru",
    description:
      "Profesionální tvorba webových stránek a moderních webů. Webový stratég a developer pro váš byznys. Rychlé, designové weby s měřitelnými výsledky.",
    images: [
      {
        url: "/avelgi-logo.png",
        width: 1200,
        height: 630,
        alt: "Avelgi Web Development - Tvorba webových stránek",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelgi - Tvorba webových stránek | Moderní weby na míru",
    description: "Profesionální tvorba webových stránek a moderních webů. Webový stratég a developer pro váš byznys.",
    images: ["/avelgi-logo.png"],
    creator: "@avelgi",
  },
  alternates: {
    canonical: "https://avelgi.com",
    languages: {
      "cs-CZ": "https://avelgi.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png" }, { url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "fc26bab488d8cd67",
  },
  category: "technology",
  classification: "Web Development Services",
  other: {
    "google-site-verification": "fc26bab488d8cd67",
    "msvalidate.01": "bing-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://avelgi.com",
    name: "Avelgi Web Development",
    alternateName: ["Avelgi", "AVELGI"],
    url: "https://avelgi.com",
    logo: "https://avelgi.com/avelgi-logo.png",
    image: "https://avelgi.com/avelgi-logo.png",
    description:
      "Profesionální tvorba webových stránek a moderních webů na míru. Webový stratég a developer s kombinací obchodních znalostí a datové analytiky.",
    priceRange: "$$",
    telephone: "+420-XXX-XXX-XXX",
    email: "info@avelgi.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressLocality: "Czech Republic",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "CZ",
    },
    areaServed: {
      "@type": "Country",
      name: "Czech Republic",
    },
    serviceType: [
      "Web Development",
      "Web Design",
      "Tvorba webových stránek",
      "Webový stratég",
      "SEO optimalizace",
      "Responzivní weby",
      "E-commerce",
      "Landing pages",
    ],
    knowsAbout: [
      "Web Development",
      "Web Design",
      "Business Strategy",
      "Data Analytics",
      "SEO",
      "Digital Marketing",
      "Next.js",
      "React",
      "TypeScript",
    ],
    slogan: "Moderní weby, které vydělávají",
    foundingDate: "2024",
    sameAs: [
      "https://avelgi.com",
      // Add social media profiles here when available
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://avelgi.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://avelgi.com",
      },
    ],
  }

  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      </head>
      <body className={`${montserrat.className} bg-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}
