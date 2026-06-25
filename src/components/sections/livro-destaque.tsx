"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

export function LivroDestaque() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bookY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bookRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section
      ref={sectionRef}
      id="livros"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-section" />

      {/* Ambient glow behind book */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-accent/10 blur-[200px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        <BlurReveal>
          <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6 text-center">
            Lançamento
          </p>
        </BlurReveal>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
          {/* Left: 3D Book mockup */}
          <BlurReveal delay={0.2} className="flex justify-center lg:justify-end">
            <motion.div
              style={{ y: bookY, rotateZ: bookRotate }}
              className="relative"
            >
              {/* Book container with perspective */}
              <div className="relative" style={{ perspective: "1200px" }}>
                <div
                  className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[2/3] rounded-lg overflow-hidden"
                  style={{
                    transform: "rotateY(-12deg) rotateX(4deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Book cover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-accent via-[#0033AA] to-prussian border border-white/10 rounded-lg">
                    {/* Spine shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/30 to-transparent" />

                    {/* Cover content */}
                    <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        <p className="text-cyan-accent/60 text-xs tracking-[0.3em] uppercase mb-3">
                          Ailton Tertuliano
                        </p>
                      </div>

                      <div>
                        <h3 className="text-white text-3xl lg:text-4xl font-serif font-semibold leading-tight mb-3">
                          Síndico Chef
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                          O desafio da gestão da experiência
                        </p>
                      </div>

                      {/* Bottom decorative line */}
                      <div className="w-12 h-px bg-cyan-accent/30" />
                    </div>

                    {/* Light reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-lg" />
                  </div>
                </div>

                {/* Book reflection */}
                <div
                  className="absolute top-full left-0 right-0 h-[100px] opacity-20 blur-sm"
                  style={{
                    transform: "rotateY(-12deg) rotateX(4deg) scaleY(-0.3)",
                    transformStyle: "preserve-3d",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,255,0.3), transparent)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
                  }}
                />

                {/* Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-blue-accent/20 blur-2xl rounded-full" />
              </div>
            </motion.div>
          </BlurReveal>

          {/* Right: Info */}
          <div className="text-center lg:text-left">
            <BlurReveal delay={0.3}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
                Síndico{" "}
                <span className="font-serif italic text-cyan-accent text-glow-cyan">
                  Chef
                </span>
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.4}>
              <p className="text-white/50 text-xl lg:text-2xl font-light mb-8">
                O desafio da gestão da experiência.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.5}>
              <p className="text-white/35 text-base leading-[1.8] mb-10 max-w-lg mx-auto lg:mx-0">
                Uma obra que conecta os princípios da alta gastronomia à gestão
                condominial, mostrando que a excelência está nos detalhes e na
                experiência que entregamos.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.6}>
              <a href="#" className="btn-primary">
                Adquirir exemplar
                <ArrowRight size={16} />
              </a>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
