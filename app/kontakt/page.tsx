"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Instagram } from "lucide-react"

export default function Kontakt() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault()

      // Add exit animation class
      const pageContainer = document.querySelector(".page-container")
      if (pageContainer) {
        pageContainer.classList.add("page-exit")

        // Navigate after animation completes
        setTimeout(() => {
          router.push(href)
        }, 800) // Match the animation duration
      }
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center px-8 page-container">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-6 sm:space-y-12 text-left max-w-5xl page-transition">
          {/* Back Button */}
          <div className="mb-6 sm:mb-10">
            <button
              onClick={handleNavigation("/")}
              className="border border-white text-white px-6 py-3 text-base font-normal tracking-wide hover-invert nav-button transition-all duration-300 inline-block"
            >
              Zpět
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-4 sm:space-y-8">
            <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Kontakt</h3>

            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
              Právě teď se vydejte na cestu k vítězství v digitálním světě.
            </p>

            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
              Kontaktujte mě na emailu níže.
            </p>
          </div>

          {/* Email */}
          <div>
            <a
              href="mailto:avelgi@avelgi.com"
              className="text-white text-base md:text-lg font-bold hover:text-white/70 transition-colors underline"
            >
              avelgi@avelgi.com
            </a>
          </div>

          {/* Instagram */}
          <div>
            <a
              href="https://www.instagram.com/avelgi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-white/70 transition-colors duration-300"
            >
              <Instagram size={24} className="stroke-current stroke-2" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
