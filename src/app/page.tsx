import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Proyecto en Salta: códigos QR en espacios públicos para acercar historia y memoria. Primera implementación: monumento a Güemes; próximamente más puntos en la ciudad.",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section
        className="relative overflow-hidden px-5 py-16 text-[var(--hero-cream)] shadow-[inset_0_-32px_48px_-28px_rgba(0,0,0,0.25)] sm:py-20"
        aria-labelledby="hero-title"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--brand-wine-deep)] via-[var(--brand-wine)] to-[#9a3540]"
          aria-hidden
        />
        <div
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--brand-gold)]/15 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-[var(--brand-sky)]/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--brand-gold-bright)] sm:text-base">
            Salta · espacio público · QR
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
            Historia en la calle
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-[var(--hero-cream)]/95 sm:text-2xl">
            Un proyecto para leer la ciudad desde el celular: placas con códigos QR en monumentos y
            otros lugares. Empezamos en el monumento a Güemes; la idea es sumar recorridos en toda
            Salta.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-16">
        <p className="text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
          Cada QR te trae a este sitio: textos claros, con buen contraste y letra grande, pensados
          para quien está de pie, al sol, en la vereda o en la plaza. No hace falta instalar nada
          raro: la cámara o cualquier lector de QR alcanza.
        </p>

        <section
          className="mt-12 rounded-2xl border-2 border-[var(--brand-wine)]/20 bg-[var(--surface-card)] p-6 shadow-[0_8px_30px_rgba(74,18,31,0.08)] sm:p-9"
          aria-labelledby="primera-parada"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-1 shrink-0 rounded-full bg-[var(--brand-gold)]"
              aria-hidden
            />
            <h2
              id="primera-parada"
              className="text-2xl font-bold text-[var(--brand-wine-deep)] sm:text-3xl"
            >
              Primera parada: monumento a Güemes
            </h2>
          </div>
          <p className="mt-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            La primera tanda de códigos acompaña el monumento a Martín Miguel de Güemes. Desde ahí
            podés conocer una biografía divulgativa del general y el contexto del Norte en la guerra
            de independencia. Más adelante sumaremos otros temas y otros barrios.
          </p>
        </section>

        <section
          className="mt-12 rounded-2xl border-2 border-[var(--brand-wine)]/20 bg-[var(--surface-card)] p-6 shadow-[0_8px_30px_rgba(74,18,31,0.08)] sm:p-9"
          aria-labelledby="como-funciona"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-1 shrink-0 rounded-full bg-[var(--brand-gold)]"
              aria-hidden
            />
            <h2
              id="como-funciona"
              className="text-2xl font-bold text-[var(--brand-wine-deep)] sm:text-3xl"
            >
              Cómo funciona
            </h2>
          </div>
          <ol className="mt-8 list-decimal space-y-5 pl-7 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            <li>Abrí la cámara o un lector de QR en tu teléfono.</li>
            <li>Escaneá el código de la placa o del mármol.</li>
            <li>Se abrirá esta página o la sección que corresponda a ese lugar.</li>
          </ol>
        </section>

        <p className="mt-12 text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Los textos son divulgativos y están pensados para el público general; siempre conviene
          contrastarlos con bibliografía y con instituciones locales.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/historias/guemes"
            className="cta-button inline-flex min-h-[3.25rem] items-center justify-center rounded-xl px-10 py-3.5 text-xl font-bold sm:text-2xl"
          >
            Ver historias de Güemes
          </Link>
          <Link
            href="/vida"
            className="secondary-outline-cta inline-flex min-h-[3.25rem] items-center justify-center rounded-xl border-2 border-[var(--brand-wine)]/35 bg-transparent px-10 py-3.5 text-xl font-bold hover:bg-[var(--brand-wine)]/10 sm:text-2xl"
          >
            Biografía completa
          </Link>
        </div>
      </div>
    </div>
  );
}
