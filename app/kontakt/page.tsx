"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export default function Kontakt() {
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
              <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Kontakt</h3>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                <span className="text-word">Právě</span> <span className="text-word">teď</span>{" "}
                <span className="text-word">se</span> <span className="text-word">vydejte</span>{" "}
                <span className="text-word">na</span> <span className="text-word">cestu</span>{" "}
                <span className="text-word">k</span> <span className="text-word">vítězství</span>{" "}
                <span className="text-word">v</span> <span className="text-word">digitálním</span>{" "}
                <span className="text-word">světě.</span>
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                <span className="text-word">Kontaktujte</span> <span className="text-word">mě</span>{" "}
                <span className="text-word">na</span> <span className="text-word">emailu</span>{" "}
                <span className="text-word">níže.</span>
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
    </>
  )
}
