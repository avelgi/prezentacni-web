import type { Metadata } from "next"
import ClientPage from "./clientPage"

export const metadata: Metadata = {
  title: "Avelgi - Tvorba webových stránek | Moderní weby na míru",
  description:
    "Chcete web, který zaujme, vydělává a nezruinuje vás? V Avelgi Web Development vám vytvoříme moderní, rychlý a designový web šitý na míru. Profesionální tvorba webových stránek pro váš byznys.",
  keywords: "avelgi, tvorba webů, webové stránky, moderní weby, web development, webový stratég",
  openGraph: {
    title: "Avelgi - Tvorba webových stránek | Moderní weby na míru",
    description: "Profesionální tvorba webových stránek. Moderní, rychlé weby pro váš byznys.",
    url: "https://avelgi.com",
    type: "website",
  },
}

export default function Page() {
  return <ClientPage />
}
