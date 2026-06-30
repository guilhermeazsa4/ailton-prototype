import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { siteUrl, siteName } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ailton Tertuliano | Autor, Palestrante & Mentor",
    template: `%s | ${siteName}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
};

// Dados que valem para o site inteiro (independem da página específica)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ailton Tertuliano",
      url: siteUrl,
      image: `${siteUrl}/images/ailton-hero.webp`,
      jobTitle: "Autor, Palestrante, Mentor e Consultor",
      description:
        "Autor best-seller, palestrante e mentor de síndicos e gestores condominiais. Referência em liderança, gestão de conflitos e administração condominial no Brasil.",
      sameAs: ["https://instagram.com/ailtontertuliano"],
      knowsAbout: [
        "Gestão condominial",
        "Liderança condominial",
        "Mentoria para síndicos",
        "Administração de condomínios",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Palestras e Mentoria em Gestão Condominial",
      serviceType: "Palestras, mentoria e consultoria em gestão condominial",
      description:
        "Palestras corporativas, mentorias individuais e consultoria para síndicos, gestores e administradoras de condomínios em todo o Brasil.",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: "BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full bg-prussian text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
