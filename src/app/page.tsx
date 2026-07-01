import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Credibilidade } from "@/components/sections/credibilidade";
import { Evento } from "@/components/sections/evento";
import { LivroDestaque } from "@/components/sections/livro-destaque";
import { CtaFinal } from "@/components/sections/cta-final";
import { siteUrl, siteName } from "@/lib/site";

const title = "Ailton Tertuliano | Autor, Palestrante & Mentor";
const description =
  "Ailton Tertuliano é autor de \"Como Montar o Time dos Sonhos do Condomínio\", palestrante e mentor de síndicos e gestores condominiais em todo o Brasil.";

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
      mentions: { "@id": `${siteUrl}/#livro` },
    },
    {
      "@type": "Book",
      "@id": `${siteUrl}/#livro`,
      name: "Como Montar o Time dos Sonhos do Condomínio",
      alternateName:
        "Um guia tático para escalar, preparar e inspirar uma equipe campeã",
      description:
        "Um guia tático para síndicos e gestores que querem montar equipes de alta performance no condomínio. Ailton Tertuliano mostra como selecionar, preparar e inspirar colaboradores e prestadores.",
      author: { "@id": `${siteUrl}/#person` },
      publisher: {
        "@type": "Organization",
        name: "Haus",
      },
      inLanguage: "pt-BR",
      bookFormat: "https://schema.org/Paperback",
      image: `${siteUrl}/images/CapaPng.webp`,
      url: `${siteUrl}/#livros`,
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
        <LivroDestaque />
        <CtaFinal />
      </main>
    </>
  );
}
