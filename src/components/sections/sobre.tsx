"use client";

import Image from "next/image";
import { BlurReveal } from "@/components/blur-reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden pt-16 pb-0 lg:pt-20 lg:pb-0">
      <div className="absolute inset-0 gradient-dark-subtle" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] xl:gap-16">
          <div className="max-w-3xl">
            <BlurReveal>
              <p className="text-gradient-subtle mb-6 text-xs uppercase tracking-[0.4em]">
                Sobre
              </p>
            </BlurReveal>

            <BlurReveal delay={0.1}>
              <h2 className="mb-7 max-w-3xl text-3xl font-light leading-[1.08] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Conhecimento que transforma gestão em{" "}
                <span className="font-bold text-gradient">
                  liderança
                </span>
                .
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.2}>
              <div className="max-w-2xl space-y-5 text-base leading-[1.75] text-white/48 lg:text-lg">
                <p>
                  Ailton Tertuliano é uma das vozes mais atuantes no universo
                  da gestão condominial, reconhecido por unir conhecimento
                  técnico, sensibilidade humana e uma comunicação clara sobre
                  os desafios de liderar comunidades.
                </p>
                <p>
                  Como autor, palestrante, mentor e consultor, tem dedicado sua
                  trajetória a formar profissionais mais preparados para tomar
                  decisões, lidar com conflitos, conduzir equipes e elevar o
                  padrão de gestão em condomínios e administradoras.
                </p>
                <p>
                  Sua missão é traduzir experiência em orientação prática,
                  ajudando síndicos, gestores e líderes a enxergarem a gestão
                  não apenas como uma função operacional, mas como uma
                  responsabilidade que envolve pessoas, patrimônio, ética e
                  visão de futuro.
                </p>
              </div>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.25} className="hidden lg:block">
            <div className="relative -mt-40 ml-auto h-[420px] w-full max-w-[660px]">
              <Image
                src="/images/ailton-sobre-fade.png"
                alt="Ailton Tertuliano"
                width={1280}
                height={1792}
                className="absolute right-0 top-[-560px] z-10 h-auto max-h-[760px] w-auto object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.42)]"
              />
            </div>
          </BlurReveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent to-prussian/80 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent,black_48%)]" />
    </section>
  );
}
