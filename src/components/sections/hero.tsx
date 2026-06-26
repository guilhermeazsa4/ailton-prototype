"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const blur = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
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
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-prussian" />
      <div className="hero-premium-bg absolute inset-0 z-[1]" />
      <div className="hero-premium-sheen absolute inset-0 z-[1]" />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="hero-breath-orb hero-breath-orb-one absolute top-[-18%] right-[-8%] h-[760px] w-[980px] rounded-full" />
        <div className="hero-breath-orb hero-breath-orb-two absolute bottom-[-30%] left-[-14%] h-[560px] w-[920px] rounded-full" />
        <div className="hero-wave hero-wave-one" />
        <div className="hero-wave hero-wave-two" />
        <div className="hero-wave hero-wave-three" />
        <div className="hero-wave hero-wave-four" />
      </div>

      <div className="absolute inset-0 z-[1] noise pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: 70, filter: "blur(16px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="pointer-events-none absolute right-[clamp(3rem,7vw,9rem)] bottom-0 z-[2] hidden w-[clamp(540px,42vw,760px)] lg:block"
      >
        <Image
          src="/images/ailton-hero.png"
          alt="Ailton Tertuliano"
          width={1600}
          height={2048}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1800px] px-6 pb-16 pt-28 sm:px-10 lg:px-20 lg:pb-14 lg:pt-28"
      >
        <div className="max-w-[760px] text-center lg:text-left">
          <motion.p
            {...blur(0.5)}
            className="mb-5 bg-[linear-gradient(90deg,#8a6a32_0%,#d2b26a_45%,#7a5a25_100%)] bg-clip-text text-sm font-medium uppercase tracking-[0.32em] text-transparent drop-shadow-[0_0_14px_rgba(210,178,106,0.22)] sm:text-base"
          >
            Ailton Tertuliano
          </motion.p>

          <motion.h1
            {...blur(0.7)}
            className="mb-7 text-5xl font-light leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-[5rem]"
          >
            Uma das principais vozes da{" "}
            <span className="-ml-2 block overflow-visible bg-[linear-gradient(105deg,#765421_0%,#d7b86d_34%,#f1dc9c_52%,#9a7332_76%,#6d4c1d_100%)] bg-clip-text px-2 pb-2 font-serif text-[1.02em] font-normal italic leading-[1.02] text-transparent drop-shadow-[0_0_18px_rgba(215,184,109,0.28)]">
              gestão condominial
            </span>
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/20" />
        </motion.div>
      </motion.div>

    </section>
  );
}
