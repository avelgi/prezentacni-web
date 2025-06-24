"use client"

import type React from "react"
import { useRouter } from "next/navigation"

export default function KdoJsem() {
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
              className="advanced-button border border-white text-white px-6 py-3 text-base font-normal tracking-wide transition-all duration-300 inline-block relative overflow-hidden"
            >
              <span className="button-text relative z-10">Zpět</span>
              <div className="button-bg"></div>
              <div className="button-particles"></div>
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-4 sm:space-y-8">
            <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Kdo jsem</h3>

            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
              Nejsem "jen" web developer – jsem váš partner pro digitální růst. Během své praxe jsem pochopil, jak
              propojovat obchodní cíle s technickými možnostmi. Pracoval jsem na řadě prezentačních projektů i Shopify
              e‑shopech a každému z nich přinesl výsledky. Mým cílem je přinést do každého projektu strategii, která
              oslovuje a prodává.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
