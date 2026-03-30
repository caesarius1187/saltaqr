export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t-4 border-[var(--brand-gold)] bg-[var(--brand-wine-deep)] px-5 py-10 text-[var(--hero-cream)]">
      <div className="mx-auto max-w-3xl text-base leading-relaxed">
        <p className="text-lg font-bold text-[var(--brand-gold-bright)]">
          Proyecto ciudadano de divulgación histórica
        </p>
        <p className="mt-3 text-[var(--hero-cream)]/95">
          Iniciamos en el monumento a Güemes y vamos sumando puntos en toda la ciudad. Textos
          divulgativos, revisables y ampliables con fuentes académicas e instituciones locales.
        </p>
        <p className="mt-6 border-t border-white/15 pt-6 text-[var(--hero-cream)]/80">
          © {year} · Salta, Argentina
        </p>
      </div>
    </footer>
  );
}
