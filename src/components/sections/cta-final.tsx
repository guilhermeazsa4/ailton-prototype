"use client";

import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="premium-mist-bg relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-prussian via-prussian/85 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-120px] h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-blue-accent/14 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 py-10 sm:px-10 lg:px-20 lg:pb-28 lg:pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-cta relative overflow-hidden rounded-3xl p-10 sm:p-14 lg:p-20">
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
                <a href="#evento" className="btn-cta-primary">
                  Participar do próximo evento
                  <ArrowRight size={20} />
                </a>
                <a href="#livros" className="btn-cta-glass">
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
