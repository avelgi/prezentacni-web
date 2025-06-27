"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Wrench, Mail } from "lucide-react"

const serviceCategories = [
  {
    value: "item-1",
    title: "Web development",
    icon: <Code className="h-5 w-5 mr-3 text-red-500" />,
    services: [
      {
        name: "Prezentační web",
        description:
          "Domovská stránka + dalších 0 až 5 stránek. Optimální strukturu webu rádi vymyslíme za vás. Ne vždy platí, že čím více má web stránek, tím lepší je.",
        price: "13 999,- Kč",
      },
      {
        name: "Shopify e-shop",
        description:
          "Kompletní nastavení a design Shopify e-shopu. Od grafiky až po obchodní podmínky a platební bránu. Nabízíme kompletní zřízení provozuschopného Shopify webu od nuly.",
        price: "Po konzultaci",
      },
      {
        name: "E-mail na vlastní doméně",
        description: "Jednorázová platba. Obsluha skrze Gmail prostředí. Bez pravidelných výdajů.",
        price: "899,- Kč",
      },
    ],
  },
  {
    value: "item-2",
    title: "Hosting",
    icon: <Server className="h-5 w-5 mr-3 text-red-500" />,
    services: [
      {
        name: "Webhosting",
        description:
          'Stejně jako vaše auto potřebuje místo k zaparkování, i každý web zobrazovaný na internetu musí někde „parkovat". Toto digitální parkovací místo, zvané webhosting, nabízíme za bezkonkurenční cenu.',
        price: {
          monthly: "299,- Kč / měsíc",
          yearly: "2 999,- Kč / rok",
          savings: "Ušetříte přes 16 %",
        },
      },
    ],
  },
  {
    value: "item-3",
    title: "Údržba a úpravy",
    icon: <Wrench className="h-5 w-5 mr-3 text-red-500" />,
    services: [
      {
        name: "Drobná změna",
        description: "Například změna textového obsahu nebo výměna obrázků.",
        price: "ZDARMA",
      },
      {
        name: "Střední změna",
        description: "Například změna velikosti nebo fontu písma, změna barev, změna velikosti obrázků.",
        price: "299,- Kč",
      },
      {
        name: "Velká změna",
        description: "Například redesign, změna struktury webu, změna pozice obrázků.",
        price: "Po konzultaci",
      },
    ],
  },
]

export default function NaseSluzby() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavigation = (href: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault()
      setIsTransitioning(true)
      const pageContainer = document.querySelector(".page-container")
      if (pageContainer) {
        pageContainer.classList.add("page-exit")
        setTimeout(() => {
          router.push(href)
        }, 800)
      }
    }
  }

  return (
    <>
      {isTransitioning && <div className="fire-sparks-transition"></div>}

      <main className="min-h-screen bg-black flex items-center px-8 page-container">
        <div className="container mx-auto max-w-7xl py-16 sm:py-24">
          <div className="space-y-6 sm:space-y-12 text-left max-w-5xl page-transition">
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

            <div className="space-y-4 sm:space-y-8">
              <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide">Naše služby</h3>
              <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl font-normal">
                Prozkoumejte naši nabídku a&nbsp;objevte, jak můžeme posunout váš byznys na další úroveň.
              </p>
            </div>

            <div className="w-full max-w-5xl">
              <Accordion type="single" collapsible className="w-full">
                {serviceCategories.map((category) => (
                  <AccordionItem key={category.value} value={category.value} className="border-white/20">
                    <AccordionTrigger className="text-xl md:text-2xl font-semibold hover:no-underline py-6 text-white/90 hover:text-white transition-colors">
                      <div className="flex items-center">
                        {category.icon}
                        {category.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {category.services.map((service) => (
                          <Card
                            key={service.name}
                            className="bg-black/20 border border-white/10 rounded-lg shadow-lg transition-all duration-300 flex flex-col"
                          >
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-lg font-bold text-white pr-4">{service.name}</CardTitle>
                                <a
                                  href="mailto:avelgi@avelgi.com"
                                  title="Poptat tuto službu"
                                  className="text-red-500 hover:text-red-400 transition-all duration-300 transform hover:scale-125 flex-shrink-0 p-2 -m-2 relative z-10"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Mail className="h-7 w-7" />
                                </a>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                            </CardContent>
                            <CardFooter className="pt-4">
                              {typeof service.price === "string" ? (
                                <p className="text-base font-semibold text-red-400">{service.price}</p>
                              ) : (
                                <div className="flex flex-col items-start">
                                  <p className="text-base font-semibold text-white/80">{service.price.monthly}</p>
                                  <p className="text-base font-bold text-red-400 mt-1">
                                    {service.price.yearly}
                                    <span className="text-sm font-medium text-white/80 ml-2">
                                      ({service.price.savings})
                                    </span>
                                  </p>
                                </div>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
