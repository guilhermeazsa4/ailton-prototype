import { Hero } from "@/components/sections/hero";
import { Credibilidade } from "@/components/sections/credibilidade";
import { Evento } from "@/components/sections/evento";
import { Sobre } from "@/components/sections/sobre";
import { CtaFinal } from "@/components/sections/cta-final";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <main>
      <Evento />
      <Hero />
      <Credibilidade />
      <Sobre />
      <CtaFinal />
      <Newsletter />
    </main>
  );
}
