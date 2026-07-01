"use client";

import Image from "next/image";
import { BlurReveal } from "@/components/blur-reveal";

export function Sobre() {
  return (
    <section id="sobre" className="premium-mist-bg relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-0">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] h-[320px]">
        <div className="absolute left-1/2 top-0 h-[260px] w-[860px] -translate-x-1/2 rounded-full bg-blue-accent/16 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] xl:gap-16">
          <div className="max-w-3xl sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
            <BlurReveal>
              <p className="text-gradient-subtle mb-6 text-sm font-medium uppercase tracking-[0.45em] sm:text-base">
                Sobre
              </p>
            </BlurReveal>

            <BlurReveal delay={0.1}>
              <h2 className="mb-7 max-w-3xl text-[2.1rem] font-light leading-[1.1] text-white sm:mb-16 sm:text-[2.7rem] sm:leading-[1.08] lg:text-5xl xl:text-6xl">
                Conhecimento que transforma gestão em{" "}
                <span className="font-bold text-gradient">
                  liderança
                </span>
                .
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.2}>
              <div className="max-w-2xl space-y-5 text-[1.3rem] leading-[1.45] text-white/80 sm:mx-auto sm:text-[1.68rem] sm:leading-[1.4] lg:mx-0 lg:text-lg lg:leading-[1.75] text-justify lg:text-left">
                <p>
                  Ailton Tertuliano é uma das vozes mais atuantes no universo
                  da gestão condominial, reconhecido por unir conhecimento
                  técnico, sensibilidade humana e uma comunicação clara sobre
                  os desafios de liderar comunidades.
                </p>
                <p>
                  Como autor, palestrante e mentor de síndicos e gestores
                  condominiais, tem dedicado sua trajetória a formar
                  profissionais mais preparados para tomar decisões, lidar com
                  conflitos, conduzir equipes e elevar o padrão de gestão em
                  condomínios e administradoras. Suas palestras corporativas e
                  mentorias individuais já impactaram milhares de profissionais
                  em todo o país.
                </p>
                <p>
                  Sua missão é traduzir experiência em orientação prática,
                  ajudando síndicos, gestores e líderes a enxergarem a gestão
                  não apenas como uma função operacional, mas como uma
                  responsabilidade que envolve pessoas, patrimônio, ética e
                  visão de futuro — a essência da liderança condominial.
                </p>
              </div>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.25} className="hidden lg:block" margin="0px 0px 700px 0px">
            <div className="relative -mt-40 ml-auto h-[220px] w-full max-w-[660px]">
              <div className="pointer-events-none absolute right-6 top-[-500px] h-[620px] w-[520px] rounded-full bg-[#ffd86a]/18 blur-[130px]" />
              <div className="pointer-events-none absolute right-24 top-[-360px] h-[360px] w-[320px] rounded-full bg-[#ffe89a]/12 blur-[90px]" />
              <Image
                src="/images/ailton-sobre-fade.webp"
                alt="Ailton Tertuliano"
                width={1100}
                height={1650}
                sizes="(min-width: 1024px) 507px, 0px"
                className="absolute right-0 top-[-560px] z-10 h-auto max-h-[760px] w-auto object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.42)]"
              />
            </div>
          </BlurReveal>
        </div>

        {/* Foto abaixo do texto — mobile/tablet */}
        <BlurReveal delay={0.25} className="mt-10 lg:hidden" margin="0px 0px 200px 0px">
          <div className="relative mx-auto w-full max-w-[360px]">
            <Image
              src="/images/ailton-sobre-fade.webp"
              alt="Ailton Tertuliano"
              width={1100}
              height={1650}
              sizes="(min-width: 1024px) 0px, 360px"
              className="h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
        </BlurReveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 translate-y-12 bg-gradient-to-b from-transparent via-prussian/80 to-prussian" />
    </section>
  );
}
