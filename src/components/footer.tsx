import { Mail } from "lucide-react";

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={label}
    >
      <path d={d} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-prussian border-t border-[rgba(0,255,255,0.06)]">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-white font-semibold tracking-[0.25em] text-sm uppercase mb-3">
              Ailton Tertuliano
            </p>
            <p className="text-white/40 text-sm">
              Autor &bull; Palestrante &bull; Mentor &bull; Consultor
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              {
                href: "#",
                label: "Instagram",
                icon: (
                  <SocialIcon
                    label="Instagram"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2ZM16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73ZM17.5 6.5h.01"
                  />
                ),
              },
              {
                href: "#",
                label: "LinkedIn",
                icon: (
                  <SocialIcon
                    label="LinkedIn"
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                  />
                ),
              },
              {
                href: "#",
                label: "YouTube",
                icon: (
                  <SocialIcon
                    label="YouTube"
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z"
                  />
                ),
              },
              {
                href: "#contato",
                label: "Email",
                icon: <Mail size={18} />,
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider-glow mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Ailton Tertuliano. Todos os direitos reservados.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
