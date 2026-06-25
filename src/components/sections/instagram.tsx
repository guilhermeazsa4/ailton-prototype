"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

const posts = [
  { label: "Evento", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80" },
  { label: "Livros", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80" },
  { label: "Palestra", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80" },
  { label: "Bastidores", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
  { label: "Comunidade", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80" },
  { label: "Evento", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80" },
  { label: "Livros", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80" },
  { label: "Palestra", img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=600&q=80" },
];

export function Instagram() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 gradient-dark-subtle" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <BlurReveal>
              <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6">
                Instagram
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1]">
                Acompanhe a{" "}
                <span className="font-serif italic text-cyan-accent">
                  jornada
                </span>
                .
              </h2>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.2}>
            <a
              href="#"
              className="flex items-center gap-3 text-white/40 hover:text-cyan-accent transition-colors duration-400 text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2ZM16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73ZM17.5 6.5h.01" />
              </svg>
              <span>@ailtontert</span>
              <ExternalLink size={14} />
            </a>
          </BlurReveal>
        </div>

        {/* Visual mural */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
          {posts.map((post, i) => (
            <BlurReveal key={i} delay={0.06 * i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden border border-white/[0.04] group-hover:border-cyan-accent/15 transition-all duration-500">
                  <img
                    src={post.img}
                    alt={post.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-prussian/20 group-hover:bg-prussian/50 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white/0 group-hover:text-white/70 text-xs tracking-[0.15em] uppercase transition-all duration-500 font-medium">
                      {post.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
