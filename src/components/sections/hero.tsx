"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const blur = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: "8", label: "Livros publicados" },
  { value: "+300", label: "Palestras realizadas" },
  { value: "+10.000", label: "Profissionais impactados" },
];

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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-electric-tundra" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[20%] w-[600px] h-[600px] rounded-full bg-blue-accent/20 blur-[180px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[400px] rounded-full bg-cyan-accent/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] rounded-full bg-blue-accent/10 blur-[120px]" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full pt-32 pb-40 lg:pt-40 lg:pb-48"
      >
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 xl:gap-24 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <motion.p
              {...blur(0.5)}
              className="text-cyan-accent/80 text-xs sm:text-sm tracking-[0.35em] uppercase mb-8 lg:mb-10"
            >
              Autor &bull; Palestrante &bull; Mentor &bull; Consultor
            </motion.p>

            <motion.h1
              {...blur(0.7)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.08] mb-8 lg:mb-10"
            >
              Uma das principais vozes da gestão condominial{" "}
              <span className="font-serif italic text-cyan-accent text-glow-cyan">
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
              <a href="#livros" className="btn-glass">
                Conhecer os livros
              </a>
            </motion.div>
          </div>

          {/* Right: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] max-w-[520px] ml-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Ailton Tertuliano"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prussian via-prussian/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 via-transparent to-cyan-accent/10 mix-blend-overlay" />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-blue-accent/10 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
          className="mt-20 lg:mt-28 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl px-8 py-6 min-w-[180px] text-center lg:text-left"
            >
              <p className="text-2xl lg:text-3xl font-semibold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
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
