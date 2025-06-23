"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Home() {
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
          {/* Logo */}
          <div className="space-y-4 sm:space-y-8">
            <div className="w-full max-w-md">
              <Image
                src="/avelgi-logo.png"
                alt="Avelgi Web Development"
                width={800}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
              Vítejte na místě, kde se byznysová strategie snoubí s výkonným web developmentem. Jsem webový stratég a
              developer. Díky kombinaci obchodních znalostí, datové analytiky a moderních technologií stavím digitální
              řešení, která nejen oslní designem, ale především generují měřitelné výsledky.
            </p>
          </div>

          {/* CTA Buttons */}
          {/* Mobile Layout: 2+1 grid */}
          <div className="sm:hidden">
            <div className="space-y-6">
              {/* First row - 2 buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleNavigation("/kdo-jsem")}
                  className="border border-white text-white px-4 py-4 text-sm font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center h-12"
                >
                  Kdo jsem
                </button>
                <button
                  onClick={handleNavigation("/co-delam")}
                  className="border border-white text-white px-4 py-4 text-sm font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center h-12"
                >
                  Co dělám
                </button>
              </div>
              {/* Second row - 1 button */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleNavigation("/kontakt")}
                  className="border border-white text-white px-4 py-4 text-sm font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center h-12"
                >
                  Kontakt
                </button>
                <div></div>
              </div>
            </div>
          </div>

          {/* Desktop Layout: horizontal */}
          <div className="hidden sm:flex flex-col sm:flex-row gap-8">
            <button
              onClick={handleNavigation("/kdo-jsem")}
              className="border border-white text-white px-8 py-4 text-base font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center min-w-[120px]"
            >
              Kdo jsem
            </button>
            <button
              onClick={handleNavigation("/co-delam")}
              className="border border-white text-white px-8 py-4 text-base font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center min-w-[120px]"
            >
              Co dělám
            </button>
            <button
              onClick={handleNavigation("/kontakt")}
              className="border border-white text-white px-8 py-4 text-base font-normal tracking-wide hover-invert nav-button transition-all duration-300 text-center flex items-center justify-center min-w-[120px]"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
