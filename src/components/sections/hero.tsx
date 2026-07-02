"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const blur = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="premium-mist-bg relative flex min-h-[100svh] pt-24 lg:items-center lg:pt-0 overflow-hidden"
    >
      {/* Accent blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.10)_0%,transparent_55%)] blur-[180px]" />
        <div className="absolute -bottom-[15%] -left-[8%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(100,180,255,0.09)_0%,transparent_55%)] blur-[200px]" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.06)_0%,rgba(100,180,255,0.04)_40%,transparent_60%)] blur-[170px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="pointer-events-none absolute right-[clamp(2.5rem,6vw,8rem)] bottom-0 z-[2] hidden lg:block"
      >
        <Image
          src="/images/AiltonHero.webp"
          alt="Ailton Tertuliano, autor e palestrante de gestão condominial"
          width={1715}
          height={1785}
          sizes="(min-width: 1024px) 620px, 0px"
          className="h-auto max-h-[880px] w-auto object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col px-6 pb-10 pt-6 sm:px-10 lg:block lg:px-20 lg:pb-14 lg:pt-28"
      >
        <div className="mx-auto max-w-[760px] text-center lg:mx-0 lg:text-left">
          <motion.p
            {...blur(0.5)}
            className="text-gradient-subtle mb-5 text-sm font-medium uppercase tracking-[0.45em] sm:text-base"
          >
            Ailton Tertuliano
          </motion.p>

          <motion.h1
            {...blur(0.7)}
            className="mb-7 text-[2.7rem] font-light leading-[1.02] text-white sm:text-[3.375rem] lg:text-[4rem] xl:text-[4.5rem] 3xl:text-[5.25rem]"
          >
            Uma das principais vozes da{" "}
            <span className="font-bold text-gradient">
              gestão condominial
            </span>
          </motion.h1>

          <motion.div
            {...blur(0.85)}
            className="mx-auto max-w-2xl space-y-4 text-base font-light leading-relaxed text-white sm:text-lg lg:mx-0"
          >
            <p>
              Ailton Tertuliano é uma das vozes mais atuantes no universo da
              gestão condominial, reconhecido por unir conhecimento técnico,
              sensibilidade humana e uma comunicação clara sobre os desafios
              de liderar comunidades.
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
          </motion.div>

          <motion.div
            {...blur(1.0)}
            className="mt-6 flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-11 h-11" style={{ filter: "drop-shadow(0 0 12px rgba(239,174,4,0.3))" }}>
                <defs>
                  <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffe89a" />
                    <stop offset="50%" stopColor="#efae04" />
                    <stop offset="100%" stopColor="#c28f03" />
                  </linearGradient>
                </defs>
                <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="url(#arrow-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Foto empurrada pro fundo, com respiro mínimo garantido — mobile/tablet */}
        <div className="mt-auto pt-14 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
            className="pointer-events-none mx-auto w-[70vw] max-w-[360px]"
          >
            <Image
              src="/images/AiltonHero.webp"
              alt="Ailton Tertuliano, autor e palestrante de gestão condominial"
              width={1715}
              height={1785}
              sizes="(min-width: 1024px) 0px, 360px"
              className="h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
