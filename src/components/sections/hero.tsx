"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-prussian" />

      {/* Dramatic glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-blue-accent/15 blur-[200px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-accent/8 blur-[150px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full py-32 lg:py-40"
      >
        <div className="max-w-3xl">
          <motion.p
            {...blur(0.5)}
            className="text-gradient-subtle text-xs sm:text-sm tracking-[0.35em] uppercase mb-8 lg:mb-10"
          >
            Autor &bull; Palestrante &bull; Mentor &bull; Consultor
          </motion.p>

          <motion.h1
            {...blur(0.7)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.08] mb-8 lg:mb-10"
          >
            Uma das principais vozes da gestão condominial{" "}
            <span className="font-serif italic text-gradient">
              brasileira
            </span>
            .
          </motion.h1>

          <motion.p
            {...blur(0.9)}
            className="text-white/45 text-base lg:text-lg leading-relaxed mb-10 lg:mb-14 max-w-lg"
          >
            Transformando a gestão condominial através do conhecimento,
            liderança e uma visão que inspira milhares de profissionais.
          </motion.p>

          <motion.div
            {...blur(1.1)}
            className="flex flex-wrap gap-4"
          >
            <a href="#evento" className="btn-primary">
              Ver próximo evento
              <ArrowRight size={16} />
            </a>
            <a href="#sobre" className="btn-glass">
              Conheça Ailton
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
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
