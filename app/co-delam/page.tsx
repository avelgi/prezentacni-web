"use client"

import type React from "react"
import { useRouter } from "next/navigation"

export default function CoDelam() {
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
            <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Co dělám</h3>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                Kombinuji hluboké byznysové vhledy s nejmodernějšími webovými technologiemi, abych pro vás zajistil:
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                <strong>Prezentační weby na míru</strong> – silný storytelling, jasné call‑to‑action a intuitivní
                uživatelská cesta vedoucí k maximální konverzi.
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                <strong>Tvorbu a optimalizaci Shopify e‑shopů</strong> – rychlé, škálovatelné řešení s plynulým nákupním
                procesem a zvýšenou průměrnou hodnotou košíku.
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                <strong>Strategický design</strong> – analytika cílové skupiny, vytváření wireframů a vizuálních
                konceptů optimalizovaných pro prodejní výsledky.
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                <strong>UX audity a vylepšení</strong> – zrychlení načítání, zlepšení použitelnosti a přístupnosti pro
                vyšší spokojenost návštěvníků.
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                <strong>Průběžné konzultace a datová analytika</strong> – sledování klíčových metrik a doporučení pro
                další rozvoj vašeho online byznysu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
