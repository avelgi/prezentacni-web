"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Kontakt() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [emailHovered, setEmailHovered] = useState(false)

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

  const handleEmailClick = async (e: React.MouseEvent) => {
    // This function now only handles copying to the clipboard.
    // The default mailto action is handled by the <a> tag.
    try {
      await navigator.clipboard.writeText("avelgi@avelgi.com")
      setEmailCopied(true)

      // Reset after 2 seconds
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = "avelgi@avelgi.com"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
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
                <span className="text-word">k&nbsp;vítězství</span> <span className="text-word">v&nbsp;digitálním</span>{" "}
                <span className="text-word">světě.</span>
              </p>

              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                <span className="text-word">Kontaktujte</span> <span className="text-word">nás</span>{" "}
                <span className="text-word">na</span> <span className="text-word">emailu</span>{" "}
                <span className="text-word">níže.</span>
              </p>
            </div>

            {/* Advanced Email Button */}
            <div className="py-4">
              <div className="relative inline-block">
                <a
                  href="mailto:avelgi@avelgi.com"
                  onClick={handleEmailClick}
                  onMouseEnter={() => setEmailHovered(true)}
                  onMouseLeave={() => setEmailHovered(false)}
                  className="advanced-email-button group relative inline-block"
                >
                  <span className="email-text">avelgi@avelgi.com</span>

                  {/* Advanced Background Effects */}
                  <div className="email-bg-layer-1"></div>
                  <div className="email-bg-layer-2"></div>
                  <div className="email-bg-layer-3"></div>

                  {/* Particle System */}
                  <div className="email-particles">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="email-particle"
                        style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
                      />
                    ))}
                  </div>

                  {/* Scanning Line Effect */}
                  <div className="email-scan-line"></div>

                  {/* Holographic Border */}
                  <div className="email-holo-border"></div>

                  {/* Success State */}
                  {emailCopied && (
                    <div className="email-success-overlay">
                      <span className="success-text">Zkopírováno!</span>
                      <div className="success-particles">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="success-particle" />
                        ))}
                      </div>
                    </div>
                  )}
                </a>

                {/* Tooltip */}
                <div className={`email-tooltip ${emailHovered ? "visible" : ""}`}>
                  Kliknutím zkopírujete a&nbsp;otevřete email
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
