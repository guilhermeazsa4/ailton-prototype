import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full bg-prussian text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
