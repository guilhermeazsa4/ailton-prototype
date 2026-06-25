"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BlurReveal } from "@/components/blur-reveal";

const books = [
  { title: "Gestão Condominial de Excelência", year: "2019" },
  { title: "Liderança em Comunidades", year: "2020" },
  { title: "O Síndico Estratégico", year: "2021" },
  { title: "Administração com Propósito", year: "2022" },
  { title: "Condomínios do Futuro", year: "2023" },
  { title: "Gestão Humana", year: "2024" },
];

export function Acervo() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 gradient-dark-subtle" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        <BlurReveal>
          <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6">
            Acervo
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6 max-w-2xl">
            Obras que formam{" "}
            <span className="font-serif italic text-cyan-accent">líderes</span>.
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.15}>
          <p className="text-white/40 text-base lg:text-lg mb-16 lg:mb-24 max-w-xl">
            Cada livro é uma ferramenta de transformação para gestores que
            buscam excelência.
          </p>
        </BlurReveal>

        {/* Books grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {books.map((book, i) => (
            <BlurReveal key={book.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Book cover */}
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-5">
                  <div
                    className="absolute inset-0 border border-white/[0.06] rounded-xl transition-all duration-500 group-hover:border-cyan-accent/20"
                    style={{
                      background: `linear-gradient(135deg,
                        hsl(${230 + i * 8}, 80%, ${12 + i * 3}%) 0%,
                        hsl(${240 + i * 5}, 70%, ${8 + i * 2}%) 100%)`,
                    }}
                  >
                    {/* Spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/25 to-transparent" />

                    {/* Cover content */}
                    <div className="relative h-full flex flex-col justify-between p-5 lg:p-7">
                      <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                        Ailton Tertuliano
                      </p>
                      <div>
                        <h3 className="text-white/90 text-sm lg:text-base font-medium leading-snug mb-2">
                          {book.title}
                        </h3>
                        <p className="text-white/25 text-xs">{book.year}</p>
                      </div>
                    </div>

                    {/* Light reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -inset-2 bg-blue-accent/0 group-hover:bg-blue-accent/8 blur-2xl transition-all duration-500 rounded-xl -z-10" />
                </div>
              </motion.div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
