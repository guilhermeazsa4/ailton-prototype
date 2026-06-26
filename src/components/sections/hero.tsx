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
      {/* Background — solid, no animations */}
      <div className="absolute inset-0 bg-prussian" />

      {/* Static subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-blue-accent/15 blur-[200px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-accent/8 blur-[150px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

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
            className="text-gradient-subtle mb-5 text-sm font-medium uppercase tracking-[0.32em] sm:text-base"
          >
            Ailton Tertuliano
          </motion.p>

          <motion.h1
            {...blur(0.7)}
            className="mb-7 text-[2.7rem] font-light leading-[1.02] text-white sm:text-[3.375rem] lg:text-[4rem] xl:text-[4.5rem]"
          >
            Uma das principais vozes da{" "}
            <span className="font-bold text-gradient">
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
