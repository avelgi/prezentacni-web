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
  const audioContextRef = useRef<AudioContext | null>(null)
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

    // Initialize Web Audio API for desktop only
    const initAudio = () => {
      if (!isMobile) {
        try {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        } catch (e) {
          console.log("Web Audio API not supported")
        }
      }
    }

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

    initAudio()

    return () => {
      observer?.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const playHoverSound = () => {
    if (!isMobile && audioContextRef.current) {
      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContextRef.current.currentTime + 0.1)

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1)

      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + 0.1)
    }
  }

  const handleNavigation = (href: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault()

      // Play click sound (desktop only)
      if (!isMobile && audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        oscillator.frequency.setValueAtTime(600, audioContextRef.current.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContextRef.current.currentTime + 0.2)

        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.02, audioContextRef.current.currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.2)

        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.2)
      }

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

      <main ref={containerRef} className="min-h-screen bg-black flex items-center px-8 page-container relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className={`space-y-6 sm:space-y-12 text-left max-w-5xl page-transition ${isLoaded ? "loaded" : ""}`}>
            {/* Logo with Fire-like Glow Effect */}
            <div className="space-y-4 sm:space-y-8 scroll-animate">
              <div className="w-full max-w-md logo-container">
                <div className={`logo-wrapper ${!isMobile ? "magnetic-element" : ""}`}>
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
                    Vítejte na místě, kde se byznysová strategie snoubí s výkonným web developmentem. Jsem webový
                    stratég a developer. Díky kombinaci obchodních znalostí, datové analytiky a moderních technologií
                    stavím digitální řešení, která nejen oslní designem, ale především generují měřitelné výsledky.
                  </p>
                ) : (
                  // Staggered text for desktop
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal text-stagger">
                    <span className="text-word">Vítejte</span> <span className="text-word">na</span>{" "}
                    <span className="text-word">místě,</span> <span className="text-word">kde</span>{" "}
                    <span className="text-word">se</span> <span className="text-word">byznysová</span>{" "}
                    <span className="text-word">strategie</span> <span className="text-word">snoubí</span>{" "}
                    <span className="text-word">s</span> <span className="text-word">výkonným</span>{" "}
                    <span className="text-word">web</span> <span className="text-word">developmentem.</span>{" "}
                    <span className="text-word">Jsem</span> <span className="text-word">webový</span>{" "}
                    <span className="text-word">stratég</span> <span className="text-word">a</span>{" "}
                    <span className="text-word">developer.</span> <span className="text-word">Díky</span>{" "}
                    <span className="text-word">kombinaci</span> <span className="text-word">obchodních</span>{" "}
                    <span className="text-word">znalostí,</span> <span className="text-word">datové</span>{" "}
                    <span className="text-word">analytiky</span> <span className="text-word">a</span>{" "}
                    <span className="text-word">moderních</span> <span className="text-word">technologií</span>{" "}
                    <span className="text-word">stavím</span> <span className="text-word">digitální</span>{" "}
                    <span className="text-word">řešení,</span> <span className="text-word">která</span>{" "}
                    <span className="text-word">nejen</span> <span className="text-word">oslní</span>{" "}
                    <span className="text-word">designem,</span> <span className="text-word">ale</span>{" "}
                    <span className="text-word">především</span> <span className="text-word">generují</span>{" "}
                    <span className="text-word">měřitelné</span> <span className="text-word">výsledky.</span>
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
                    onClick={handleNavigation("/kdo-jsem")}
                    onMouseEnter={playHoverSound}
                    className="optimized-button mobile-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Kdo jsem</span>
                    <div className="button-bg-optimized"></div>
                    <div className="button-particles"></div>
                    <div className="button-ripple"></div>
                  </button>
                  <button
                    onClick={handleNavigation("/co-delam")}
                    onMouseEnter={playHoverSound}
                    className="optimized-button mobile-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Co dělám</span>
                    <div className="button-bg-optimized"></div>
                    <div className="button-particles"></div>
                    <div className="button-ripple"></div>
                  </button>
                </div>
                {/* Second row - 1 button */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleNavigation("/kontakt")}
                    onMouseEnter={playHoverSound}
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
                onClick={handleNavigation("/kdo-jsem")}
                onMouseEnter={playHoverSound}
                className="optimized-button magnetic-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Kdo jsem</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
                <div className="button-ripple"></div>
              </button>
              <button
                onClick={handleNavigation("/co-delam")}
                onMouseEnter={playHoverSound}
                className="optimized-button magnetic-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Co dělám</span>
                <div className="button-bg-optimized"></div>
                <div className="button-particles"></div>
                <div className="button-ripple"></div>
              </button>
              <button
                onClick={handleNavigation("/kontakt")}
                onMouseEnter={playHoverSound}
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
