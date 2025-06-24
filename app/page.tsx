"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    <>
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid-pattern"></div>
        </div>

        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Glow */}
        <div
          className="cursor-glow"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        {/* Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <main className="min-h-screen bg-black flex items-center px-8 page-container relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className={`space-y-6 sm:space-y-12 text-left max-w-5xl page-transition ${isLoaded ? "loaded" : ""}`}>
            {/* Logo with Advanced Hover Effect */}
            <div className="space-y-4 sm:space-y-8">
              <div className="w-full max-w-md logo-container">
                <div className="logo-wrapper">
                  <Image
                    src="/avelgi-logo-nobg.png"
                    alt="Avelgi Web Development"
                    width={800}
                    height={200}
                    className="w-full h-auto logo-image"
                    priority
                  />
                  <div className="logo-glow"></div>
                </div>
              </div>

              <div className="text-reveal">
                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                  Vítejte na místě, kde se byznysová strategie snoubí s výkonným web developmentem. Jsem webový stratég
                  a developer. Díky kombinaci obchodních znalostí, datové analytiky a moderních technologií stavím
                  digitální řešení, která nejen oslní designem, ale především generují měřitelné výsledky.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            {/* Mobile Layout: 2+1 grid */}
            <div className="sm:hidden buttons-container">
              <div className="space-y-6">
                {/* First row - 2 buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleNavigation("/kdo-jsem")}
                    className="advanced-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Kdo jsem</span>
                    <div className="button-bg"></div>
                    <div className="button-particles"></div>
                  </button>
                  <button
                    onClick={handleNavigation("/co-delam")}
                    className="advanced-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Co dělám</span>
                    <div className="button-bg"></div>
                    <div className="button-particles"></div>
                  </button>
                </div>
                {/* Second row - 1 button */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleNavigation("/kontakt")}
                    className="advanced-button border border-white text-white px-4 py-4 text-sm font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center h-12 relative overflow-hidden"
                  >
                    <span className="button-text relative z-10">Kontakt</span>
                    <div className="button-bg"></div>
                    <div className="button-particles"></div>
                  </button>
                  <div></div>
                </div>
              </div>
            </div>

            {/* Desktop Layout: horizontal */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-8 buttons-container">
              <button
                onClick={handleNavigation("/kdo-jsem")}
                className="advanced-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Kdo jsem</span>
                <div className="button-bg"></div>
                <div className="button-particles"></div>
              </button>
              <button
                onClick={handleNavigation("/co-delam")}
                className="advanced-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Co dělám</span>
                <div className="button-bg"></div>
                <div className="button-particles"></div>
              </button>
              <button
                onClick={handleNavigation("/kontakt")}
                className="advanced-button border border-white text-white px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 text-center flex items-center justify-center min-w-[120px] relative overflow-hidden"
              >
                <span className="button-text relative z-10">Kontakt</span>
                <div className="button-bg"></div>
                <div className="button-particles"></div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
