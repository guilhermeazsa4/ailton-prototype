"use client";

import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Electric Tundra gradient */}
      <div className="absolute inset-0 gradient-electric-tundra" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-accent/20 blur-[200px]" />
        <div className="absolute bottom-[20%] left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-accent/10 blur-[150px]" />
        <div className="absolute bottom-[20%] right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-accent/10 blur-[150px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full py-32 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass container */}
          <div className="glass-strong rounded-3xl p-12 sm:p-16 lg:p-24">
            <BlurReveal>
              <p className="text-gradient-subtle text-xs tracking-[0.4em] uppercase mb-8">
                Próximo passo
              </p>
            </BlurReveal>

            <BlurReveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-8">
                Grandes transformações começam com uma{" "}
                <span className="font-bold text-gradient">
                  decisão
                </span>
                .
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.25}>
              <p className="text-white/40 text-base lg:text-lg mb-12 lg:mb-16 max-w-xl mx-auto leading-relaxed">
                Junte-se a milhares de profissionais que já elevaram o padrão da
                gestão condominial.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.35}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#evento" className="btn-giant">
                  Participar do próximo evento
                  <ArrowRight size={20} />
                </a>
                <a href="#livros" className="btn-glass">
                  Conhecer os livros
                </a>
              </div>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
