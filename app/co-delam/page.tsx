"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CoDelam() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const handleNavigation = (href: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault()

      // Set transitioning state to show sparks
      setIsTransitioning(true)

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
    <>
      {/* Transition Sparks - Show during page transitions */}
      {isTransitioning && <div className="fire-sparks-transition"></div>}

      <main className="min-h-screen bg-black flex items-center px-8 page-container">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-6 sm:space-y-12 text-left max-w-5xl page-transition">
            {/* Back Button */}
            <div className="mb-6 sm:mb-10">
              <button
                onClick={handleNavigation("/")}
                className="optimized-button border border-white text-white px-6 py-3 text-base font-normal tracking-wide transition-all duration-300 inline-block relative overflow-hidden"
              >
                <span className="button-text relative z-10">Zpět</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
              </button>
            </div>

            {/* Heading */}
            <div className="space-y-4 sm:space-y-8">
              <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Co dělám</h3>

              <div className="space-y-6 sm:space-y-8">
                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">Kombinuji</span> <span className="text-word">hluboké</span>{" "}
                  <span className="text-word">byznysové</span> <span className="text-word">vhledy</span>{" "}
                  <span className="text-word">s</span> <span className="text-word">nejmodernějšími</span>{" "}
                  <span className="text-word">webovými</span> <span className="text-word">technologiemi,</span>{" "}
                  <span className="text-word">abych</span> <span className="text-word">pro</span>{" "}
                  <span className="text-word">vás</span> <span className="text-word">zajistil:</span>
                </p>

                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">
                    <strong>Prezentační</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>weby</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>na</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>míru</strong>
                  </span>{" "}
                  <span className="text-word">–</span> <span className="text-word">silný</span>{" "}
                  <span className="text-word">storytelling,</span> <span className="text-word">jasné</span>{" "}
                  <span className="text-word">call‑to‑action</span> <span className="text-word">a</span>{" "}
                  <span className="text-word">intuitivní</span> <span className="text-word">uživatelská</span>{" "}
                  <span className="text-word">cesta</span> <span className="text-word">vedoucí</span>{" "}
                  <span className="text-word">k</span> <span className="text-word">maximální</span>{" "}
                  <span className="text-word">konverzi.</span>
                </p>

                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">
                    <strong>Tvorbu</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>a</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>optimalizaci</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>Shopify</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>e‑shopů</strong>
                  </span>{" "}
                  <span className="text-word">–</span> <span className="text-word">rychlé,</span>{" "}
                  <span className="text-word">škálovatelné</span> <span className="text-word">řešení</span>{" "}
                  <span className="text-word">s</span> <span className="text-word">plynulým</span>{" "}
                  <span className="text-word">nákupním</span> <span className="text-word">procesem</span>{" "}
                  <span className="text-word">a</span> <span className="text-word">zvýšenou</span>{" "}
                  <span className="text-word">průměrnou</span> <span className="text-word">hodnotou</span>{" "}
                  <span className="text-word">košíku.</span>
                </p>

                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">
                    <strong>Strategický</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>design</strong>
                  </span>{" "}
                  <span className="text-word">–</span> <span className="text-word">analytika</span>{" "}
                  <span className="text-word">cílové</span> <span className="text-word">skupiny,</span>{" "}
                  <span className="text-word">vytváření</span> <span className="text-word">wireframů</span>{" "}
                  <span className="text-word">a</span> <span className="text-word">vizuálních</span>{" "}
                  <span className="text-word">konceptů</span> <span className="text-word">optimalizovaných</span>{" "}
                  <span className="text-word">pro</span> <span className="text-word">prodejní</span>{" "}
                  <span className="text-word">výsledky.</span>
                </p>

                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">
                    <strong>UX</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>audity</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>a</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>vylepšení</strong>
                  </span>{" "}
                  <span className="text-word">–</span> <span className="text-word">zrychlení</span>{" "}
                  <span className="text-word">načítání,</span> <span className="text-word">zlepšení</span>{" "}
                  <span className="text-word">použitelnosti</span> <span className="text-word">a</span>{" "}
                  <span className="text-word">přístupnosti</span> <span className="text-word">pro</span>{" "}
                  <span className="text-word">vyšší</span> <span className="text-word">spokojenost</span>{" "}
                  <span className="text-word">návštěvníků.</span>
                </p>

                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                  <span className="text-word">
                    <strong>Průběžné</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>konzultace</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>a</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>datová</strong>
                  </span>{" "}
                  <span className="text-word">
                    <strong>analytika</strong>
                  </span>{" "}
                  <span className="text-word">–</span> <span className="text-word">sledování</span>{" "}
                  <span className="text-word">klíčových</span> <span className="text-word">metrik</span>{" "}
                  <span className="text-word">a</span> <span className="text-word">doporučení</span>{" "}
                  <span className="text-word">pro</span> <span className="text-word">další</span>{" "}
                  <span className="text-word">rozvoj</span> <span className="text-word">vašeho</span>{" "}
                  <span className="text-word">online</span> <span className="text-word">byznysu.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
