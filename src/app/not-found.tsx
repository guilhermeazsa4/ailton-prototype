import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-gradient-subtle text-xs uppercase tracking-[0.4em]">
        Erro 404
      </p>
      <h1 className="text-3xl font-light text-white sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="max-w-md text-white/60">
        A página que você procura não existe ou foi movida.
      </p>
      <Link href="/" className="btn-cta-primary">
        Voltar para o início
      </Link>
    </main>
  );
}
