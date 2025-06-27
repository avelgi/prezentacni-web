"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function KdoJsem() {
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
              <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Proč my?</h3>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                <span className="text-word">Díky</span> <span className="text-word">nám</span>{" "}
                <span className="text-word">může</span> <span className="text-word">mít</span>{" "}
                <span className="text-word">funkční</span> <span className="text-word">web</span>{" "}
                <span className="text-word">opravdu</span> <span className="text-word">každý</span>{" "}
                <span className="text-word">–</span> <span className="text-word">jednoduše</span>{" "}
                <span className="text-word">a&nbsp;za</span> <span className="text-word">cenu,</span>{" "}
                <span className="text-word">o&nbsp;které</span> <span className="text-word">si</span>{" "}
                <span className="text-word">u&nbsp;konkurence</span> <span className="text-word">můžete</span>{" "}
                <span className="text-word">leda</span> <span className="text-word">tak</span>{" "}
                <span className="text-word">nechat</span> <span className="text-word">zdát.</span>{" "}
                <span className="text-word">Sestavujeme</span> <span className="text-word">digitální</span>{" "}
                <span className="text-word">řešení,</span> <span className="text-word">která</span>{" "}
                <span className="text-word">vám</span> <span className="text-word">vydrží</span>{" "}
                <span className="text-word">navěky.</span> <span className="text-word">Vytváříme</span>{" "}
                <span className="text-word">přehledné,</span> <span className="text-word">moderní</span>{" "}
                <span className="text-word">a&nbsp;rychlé</span> <span className="text-word">weby,</span>{" "}
                <span className="text-word">vzhledově</span> <span className="text-word">šité</span>{" "}
                <span className="text-word">na</span> <span className="text-word">míru</span>{" "}
                <span className="text-word">identitě</span> <span className="text-word">vašeho</span>{" "}
                <span className="text-word">podnikání.</span> <span className="text-word">Skvěle</span>{" "}
                <span className="text-word">vypadají</span> <span className="text-word">jak</span>{" "}
                <span className="text-word">na</span> <span className="text-word">mobilu,</span>{" "}
                <span className="text-word">tak</span> <span className="text-word">na</span>{" "}
                <span className="text-word">desktopu.</span> <span className="text-word">Vaše</span>{" "}
                <span className="text-word">vlastní</span> <span className="text-word">stránka</span>{" "}
                <span className="text-word">je</span> <span className="text-word">vizitkou,</span>{" "}
                <span className="text-word">díky</span> <span className="text-word">které</span>{" "}
                <span className="text-word">nabyde</span> <span className="text-word">vaše</span>{" "}
                <span className="text-word">podnikání</span> <span className="text-word">zcela</span>{" "}
                <span className="text-word">nových</span> <span className="text-word">rozměrů.</span>{" "}
                <span className="text-word">Firmy</span> <span className="text-word">i&nbsp;živnostníci</span>{" "}
                <span className="text-word">s&nbsp;námi</span> <span className="text-word">zvyšují</span>{" "}
                <span className="text-word">tržby,</span> <span className="text-word">působí</span>{" "}
                <span className="text-word">na</span> <span className="text-word">zákazníky</span>{" "}
                <span className="text-word">seriózně</span> <span className="text-word">a&nbsp;pravidelně</span>{" "}
                <span className="text-word">oslovují</span> <span className="text-word">nové.</span>
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                <span className="text-word">S&nbsp;námi</span> <span className="text-word">nezažijete</span>{" "}
                <span className="text-word">nic</span> <span className="text-word">než</span>{" "}
                <span className="text-word">profesionální,</span> <span className="text-word">lidský</span>{" "}
                <span className="text-word">a&nbsp;vstřícný</span> <span className="text-word">přístup.</span>{" "}
                <span className="text-word">Tvoříme</span> <span className="text-word">vždy</span>{" "}
                <span className="text-word">právě</span> <span className="text-word">to,</span>{" "}
                <span className="text-word">co</span> <span className="text-word">si</span>{" "}
                <span className="text-word">vy,</span> <span className="text-word">náš</span>{" "}
                <span className="text-word">klient,</span> <span className="text-word">přejete</span>{" "}
                <span className="text-word">–</span> <span className="text-word">zcela</span>{" "}
                <span className="text-word">transparentně</span> <span className="text-word">a&nbsp;bez</span>{" "}
                <span className="text-word">zbytečných</span> <span className="text-word">prodlev</span>{" "}
                <span className="text-word">či</span> <span className="text-word">komplikací.</span>{" "}
                <span className="text-word">S&nbsp;námi</span> <span className="text-word">nikdy</span>{" "}
                <span className="text-word">neztratíte</span> <span className="text-word">čas</span>{" "}
                <span className="text-word">ani</span> <span className="text-word">peníze:</span>{" "}
                <span className="text-word">předem</span> <span className="text-word">naprosto</span>{" "}
                <span className="text-word">přesně</span> <span className="text-word">víte,</span>{" "}
                <span className="text-word">kolik</span> <span className="text-word">a&nbsp;kdy</span>{" "}
                <span className="text-word">zaplatíte.</span> <span className="text-word">Zviditelněte</span>{" "}
                <span className="text-word">se</span> <span className="text-word">před</span>{" "}
                <span className="text-word">konkurencí</span> <span className="text-word">a&nbsp;začněte</span>{" "}
                <span className="text-word">se</span> <span className="text-word">radovat</span>{" "}
                <span className="text-word">z&nbsp;výsledků</span> <span className="text-word">už</span>{" "}
                <span className="text-word">dnes.</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
