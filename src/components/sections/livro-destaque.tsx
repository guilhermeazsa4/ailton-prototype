import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

const BG_SRC = "/images/BannerLaunch.webp";
const BG_ALT =
  "Livro Como Montar o Time dos Sonhos do Condomínio, de Ailton Tertuliano, exposto em evento de lançamento";

export function LivroDestaque() {
  return (
    <section
      id="livros"
      className="premium-mist-bg relative min-h-[70vh] flex items-center overflow-hidden lg:min-h-[85vh]"
    >
      {/* Imagem de fundo — só desktop, no mobile ela vai abaixo do conteúdo */}
      <Image
        src={BG_SRC}
        alt=""
        fill
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />

      {/* Escurece bem o lado direito, deixando o lado esquerdo praticamente limpo (só desktop) */}
      <div className="absolute inset-0 hidden bg-gradient-to-l from-prussian/97 via-prussian/65 via-[40%] to-transparent to-[85%] lg:block" />

      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full py-16 lg:py-32">
        <div className="max-w-2xl mx-auto text-center lg:ml-auto lg:mr-0 lg:text-right">
          <BlurReveal>
            <p className="text-gradient-subtle text-sm font-medium tracking-[0.45em] uppercase mb-6 sm:text-base">
              Lançamento
            </p>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.15] mb-6">
              Como Montar o Time dos Sonhos{" "}
              <span className="font-bold text-gradient">do Condomínio</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-white text-[1.3rem] leading-[1.45] sm:text-[1.68rem] sm:leading-[1.4] lg:text-lg lg:leading-[1.75] mb-10 max-w-xl mx-auto lg:ml-auto lg:mr-0">
              Um guia tático para síndicos e gestores que querem montar
              equipes de alta performance no condomínio. Com visão
              estratégica e linguagem direta, Ailton Tertuliano mostra como
              selecionar, preparar e inspirar colaboradores e prestadores,
              revelando que a excelência na gestão condominial começa por
              quem está na linha de frente todos os dias. Obra que muda.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <a href="#" className="btn-cta-primary">
              Adquirir exemplar
              <ArrowRight size={16} />
            </a>
          </BlurReveal>
        </div>

        {/* Imagem abaixo do conteúdo — mobile e tablet */}
        <div className="relative -mx-6 sm:-mx-10 mt-12 h-[50vh] overflow-hidden rounded-2xl lg:hidden">
          <Image
            src={BG_SRC}
            alt={BG_ALT}
            fill
            sizes="(min-width: 1024px) 0px, 100vw"
            className="object-cover object-[10%_center]"
          />
        </div>
      </div>
    </section>
  );
}
