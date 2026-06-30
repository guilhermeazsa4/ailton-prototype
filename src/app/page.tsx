import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Credibilidade } from "@/components/sections/credibilidade";
import { Evento } from "@/components/sections/evento";
import { Sobre } from "@/components/sections/sobre";
import { CtaFinal } from "@/components/sections/cta-final";
import { siteUrl, siteName } from "@/lib/site";

const title = "Ailton Tertuliano | Autor, Palestrante & Mentor";
const description =
  "Uma das principais vozes da gestão condominial brasileira. Autor best-seller, palestrante e mentor de milhares de profissionais.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Ailton Tertuliano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-img.jpg"],
  },
};

// Dados específicos do conteúdo desta página (home)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: `${siteUrl}/images/og-img.jpg`,
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#evento`,
      name: "O evento de lançamento que mudará o jogo",
      description:
        "Evento de lançamento com Ailton Tertuliano sobre gestão condominial.",
      startDate: "2026-07-16T09:00:00-03:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: `${siteUrl}/assets/BannerAilsonArena.webp`,
      location: {
        "@type": "Place",
        name: "Arena da Baixada",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Curitiba",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      },
      organizer: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Evento />
        <Hero />
        <Credibilidade />
        <Sobre />
        <CtaFinal />
      </main>
    </>
  );
}
