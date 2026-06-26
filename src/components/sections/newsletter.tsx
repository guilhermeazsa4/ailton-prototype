"use client";

import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

export function Newsletter() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 gradient-dark-subtle" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">
        <BlurReveal>
          <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6">
            Newsletter
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-[1.15] mb-4">
            Receba insights exclusivos sobre gestão condominial.
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.2}>
          <p className="text-white/35 text-sm lg:text-base mb-10 max-w-md mx-auto">
            Conteúdo prático direto na sua caixa de entrada. Sem spam, só valor.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.3}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-cyan-accent/30 transition-colors duration-300"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Inscrever-se
              <ArrowRight size={16} />
            </button>
          </form>
        </BlurReveal>
      </div>
    </section>
  );
}
