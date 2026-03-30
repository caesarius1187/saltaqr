import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative border-b-4 border-[var(--brand-gold)] bg-[var(--surface)] shadow-sm">
      <div
        className="h-1.5 w-full bg-gradient-to-r from-[var(--brand-wine-deep)] via-[var(--brand-wine)] to-[var(--brand-terracotta)]"
        aria-hidden
      />
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="brand-wordmark text-xl font-bold tracking-tight sm:text-2xl"
        >
          Salta QR
        </Link>
        <nav aria-label="Principal" className="flex flex-wrap gap-5 text-lg font-semibold sm:gap-6">
          <Link href="/">Inicio</Link>
          <Link href="/vida">Vida de Güemes</Link>
          <Link href="/historias/guemes">Historias</Link>
        </nav>
      </div>
    </header>
  );
}
