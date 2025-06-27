"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

    // Intersection Observer for scroll-triggered animations (desktop only)
    let observer: IntersectionObserver | null = null

    if (!isMobile) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      }, observerOptions)

      // Observe elements for scroll animations
      setTimeout(() => {
        const animateElements = document.querySelectorAll(".scroll-animate")
        animateElements.forEach((el) => observer?.observe(el))
      }, 100)
    }

    return () => {
      observer?.disconnect()
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
        }, 800)
      }
    }
  }

  return (
    <>
      {/* Transition Sparks - Show during page transitions */}
      {isTransitioning && <div className="fire-sparks-transition"></div>}

      {/* Advanced Background Effects - Reduced for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Mesh - Desktop only */}
        {!isMobile && <div className="gradient-mesh"></div>}

        {/* Animated Grid - Simplified for mobile */}
        <div className={`absolute inset-0 ${isMobile ? "opacity-[0.01]" : "opacity-[0.02]"}`}>
          <div className="grid-pattern"></div>
        </div>

        {/* Morphing Geometric Shapes - Simplified for mobile */}
        <div className={`morphing-shapes ${isMobile ? "mobile-shapes" : ""}`}>
          <div className="morph-shape morph-1"></div>
          <div className="morph-shape morph-2"></div>
          {!isMobile && (
            <>
              <div className="morph-shape morph-3"></div>
              <div className="morph-shape morph-4"></div>
            </>
          )}
        </div>

        {/* Floating Elements - Reduced for mobile */}
        <div className="floating-elements">
          {[...Array(isMobile ? 5 : 20)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={
                {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  "--float-distance": `${10 + Math.random() * (isMobile ? 20 : 40)}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <main ref={containerRef} className="min-h-dvh bg-black flex items-center px-8 page-container relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className={`space-y-6 sm:space-y-12 text-left max-w-5xl page-transition ${isLoaded ? "loaded" : ""}`}>
            {/* Logo with Fire-like Glow Effect */}
            <div className="space-y-4 sm:space-y-8 scroll-animate">
              <div className="w-full max-w-md logo-container">
                <div className={`logo-wrapper ${!isMobile ? "magnetic-element page-load-tilt" : "page-load-tilt"}`}>
                  <Image
                    src="/avelgi-logo-nobg.png"
                    alt="Avelgi Web Development"
                    width={800}
                    height={200}
                    className="w-full h-auto logo-image subtle-fire-glow"
                    priority
                  />
                  <div className="logo-glow"></div>
                  {!isMobile && (
                    <div className="logo-particles">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} className="logo-particle" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-reveal scroll-animate">
                {isMobile ? (
                  // Simple text for mobile
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                    Chcete web, který zaujme, vydělává a&nbsp;nezruinuje vás? V&nbsp;Avelgi Web Development vám
                    vytvoříme moderní, rychlý a&nbsp;designový web šitý na míru, který perfektně funguje na mobilu
                    i&nbsp;počítači – a&nbsp;to jednoduše, rychle a&nbsp;za cenu, jakou u&nbsp;konkurence nenajdete.
                    Získejte profesionální online vizitku, která vám přivede nové zákazníky, zvýší tržby a&nbsp;posune
                    vaše podnikání na novou úroveň. Férový přístup, tah na branku a&nbsp;žádné zbytečné poplatky – jen
                    perfektní weby, které mluví za vše.
                  </p>
                ) : (
                  // Staggered text for desktop
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                    <span className="text-word">Chcete</span> <span className="text-word">web,</span>{" "}
                    <span className="text-word">který</span> <span className="text-word">zaujme,</span>{" "}
                    <span className="text-word">vydělává</span> <span className="text-word">a&nbsp;nezruinuje</span>{" "}
                    <span className="text-word">vás?</span> <span className="text-word">V&nbsp;Avelgi</span>{" "}
                    <span className="text-word">Web</span> <span className="text-word">Development</span>{" "}
                    <span className="text-word">vám</span> <span className="text-word">vytvoříme</span>{" "}
                    <span className="text-word">moderní,</span> <span className="text-word">rychlý</span>{" "}
                    <span className="text-word">a&nbsp;designový</span> <span className="text-word">web</span>{" "}
                    <span className="text-word">šitý</span> <span className="text-word">na</span>{" "}
                    <span className="text-word">míru,</span> <span className="text-word">který</span>{" "}
                    <span className="text-word">perfektně</span> <span className="text-word">funguje</span>{" "}
                    <span className="text-word">na</span> <span className="text-word">mobilu</span>{" "}
                    <span className="text-word">i&nbsp;počítači</span> <span className="text-word">–</span>{" "}
                    <span className="text-word">a&nbsp;to</span> <span className="text-word">jednoduše,</span>{" "}
                    <span className="text-word">rychle</span> <span className="text-word">a&nbsp;za</span>{" "}
                    <span className="text-word">cenu,</span> <span className="text-word">jakou</span>{" "}
                    <span className="text-word">u&nbsp;konkurence</span> <span className="text-word">nenajdete.</span>{" "}
                    <span className="text-word">Získejte</span> <span className="text-word">profesionální</span>{" "}
                    <span className="text-word">online</span> <span className="text-word">vizitku,</span>{" "}
                    <span className="text-word">která</span> <span className="text-word">vám</span>{" "}
                    <span className="text-word">přivede</span> <span className="text-word">nové</span>{" "}
                    <span className="text-word">zákazníky,</span> <span className="text-word">zvýší</span>{" "}
                    <span className="text-word">tržby</span> <span className="text-word">a&nbsp;posune</span>{" "}
                    <span className="text-word">vaše</span> <span className="text-word">podnikání</span>{" "}
                    <span className="text-word">na</span> <span className="text-word">novou</span>{" "}
                    <span className="text-word">úroveň.</span> <span className="text-word">Férový</span>{" "}
                    <span className="text-word">přístup,</span> <span className="text-word">tah</span>{" "}
                    <span className="text-word">na</span> <span className="text-word">branku</span>{" "}
                    <span className="text-word">a&nbsp;žádné</span> <span className="text-word">zbytečné</span>{" "}
                    <span className="text-word">poplatky</span> <span className="text-word">–</span>{" "}
                    <span className="text-word">jen</span> <span className="text-word">perfektní</span>{" "}
                    <span className="text-word">weby,</span> <span className="text-word">které</span>{" "}
                    <span className="text-word">mluví</span> <span className="text-word">za</span>{" "}
                    <span className="text-word">vše.</span>
                  </p>
                )}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            {/* Mobile Layout: 2+1 grid */}
            <div className="sm:hidden buttons-container scroll-animate">
              <div className="space-y-6">
                {/* First row - 2 buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleNavigation("/proc-my")}
                    className="optimized-button mobile-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Proč my?</span>
                    <div className="button-bg-optimized"></div>
                    <div className="button-particles"></div>
                    <div className="button-ripple"></div>
                  </button>
                  <button
                    onClick={handleNavigation("/nase-sluzby")}
                    className="optimized-button mobile-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Naše služby</span>
                    <div className="button-bg-optimized"></div>
                    <div className="button-particles"></div>
                    <div className="button-ripple"></div>
                  </button>
                </div>
                {/* Second row - 1 button */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleNavigation("/kontakt")}
                    className="optimized-button mobile-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Kontakt</span>
                    <div className="button-bg-optimized"></div>
                    <div className="button-particles"></div>
                    <div className="button-ripple"></div>
                  </button>
                  <div></div>
                </div>
              </div>
            </div>

            {/* Desktop Layout: horizontal */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-8 buttons-container scroll-animate">
              <button
                onClick={handleNavigation("/proc-my")}
                className="optimized-button magnetic-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Proč my?</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
                <div className="button-ripple"></div>
              </button>
              <button
                onClick={handleNavigation("/nase-sluzby")}
                className="optimized-button magnetic-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Naše služby</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
                <div className="button-ripple"></div>
              </button>
              <button
                onClick={handleNavigation("/kontakt")}
                className="optimized-button magnetic-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Kontakt</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
                <div className="button-ripple"></div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
