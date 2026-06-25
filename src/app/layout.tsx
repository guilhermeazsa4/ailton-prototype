import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ailton Tertuliano | Autor, Palestrante & Mentor",
  description:
    "Uma das principais vozes da gestão condominial brasileira. Autor best-seller, palestrante e mentor de milhares de profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full bg-prussian text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
