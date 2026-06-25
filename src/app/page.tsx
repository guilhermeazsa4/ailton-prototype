import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Evento } from "@/components/sections/evento";
import { LivroDestaque } from "@/components/sections/livro-destaque";
import { Acervo } from "@/components/sections/acervo";
import { Impacto } from "@/components/sections/impacto";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Instagram } from "@/components/sections/instagram";
import { CtaFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Evento />
      <LivroDestaque />
      <Acervo />
      <Impacto />
      <Depoimentos />
      <Instagram />
      <CtaFinal />
    </main>
  );
}
