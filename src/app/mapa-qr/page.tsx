import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mapa de QRs",
  description: "Referencia interna: URLs por mármol y ancla para grabado de códigos QR.",
  robots: { index: false, follow: false },
};

const ANCHORS = [
  { id: "intro", label: "Introducción" },
  { id: "infancia", label: "Infancia y formación" },
  { id: "independencia", label: "Guerra de independencia" },
  { id: "guerra-en-el-norte", label: "Guerra en el Norte" },
  { id: "muerte", label: "Muerte" },
  { id: "legado", label: "Legado" },
  { id: "para-saber-mas", label: "Para saber más" },
] as const;

export default function MapaQrPage() {
  const base = getSiteUrl();
  const principal = `${base}/`;
  const vida = `${base}/vida`;

  return (
    <div className="flex flex-1 flex-col bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-[var(--brand-wine-deep)] sm:text-5xl">
          Mapa de QRs (equipo)
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
          Usá estas URLs exactas al generar los códigos QR para grabar en mármol. La base del sitio
          sale de{" "}
          <code className="rounded-md border border-[var(--brand-wine)]/25 bg-[var(--surface-warm)] px-2 py-1 text-lg text-[var(--brand-wine-deep)]">
            NEXT_PUBLIC_SITE_URL
          </code>{" "}
          en Vercel (o de la URL de despliegue). Comprobá siempre en producción antes de grabar.
        </p>

        <section className="mt-12" aria-labelledby="qr-principal">
          <h2 id="qr-principal" className="text-3xl font-bold text-[var(--brand-wine-deep)]">
            QR principal (landing)
          </h2>
          <p className="mt-4 text-xl text-[var(--foreground)] sm:text-2xl">
            <span className="font-semibold text-[var(--brand-wine-deep)]">
              Mármol / placa principal:
            </span>
          </p>
          <p className="mt-2 break-all font-mono text-lg text-[var(--muted)] sm:text-xl">
            {principal}
          </p>
        </section>

        <section className="mt-14" aria-labelledby="qr-secciones">
          <h2 id="qr-secciones" className="text-3xl font-bold text-[var(--brand-wine-deep)]">
            QRs por sección (anclas en /vida)
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border-2 border-[var(--brand-wine)]/25 shadow-md">
            <table className="w-full min-w-[32rem] border-collapse text-left text-lg sm:text-xl">
              <caption className="sr-only">Listado de mármoles sugeridos y URL por sección</caption>
              <thead>
                <tr className="bg-[var(--brand-wine)] text-[var(--hero-cream)]">
                  <th
                    scope="col"
                    className="border border-[var(--brand-wine-deep)] px-4 py-3 font-bold"
                  >
                    Uso sugerido
                  </th>
                  <th
                    scope="col"
                    className="border border-[var(--brand-wine-deep)] px-4 py-3 font-bold"
                  >
                    URL completa
                  </th>
                </tr>
              </thead>
              <tbody>
                {ANCHORS.map((row, i) => {
                  const url = `${vida}#${row.id}`;
                  return (
                    <tr
                      key={row.id}
                      className={i % 2 === 0 ? "bg-[var(--surface-card)]" : "bg-[var(--surface-warm)]"}
                    >
                      <td className="border border-[var(--brand-wine)]/20 px-4 py-3 text-[var(--foreground)]">
                        {row.label}{" "}
                        <span className="text-[var(--muted)]">(id: {row.id})</span>
                      </td>
                      <td className="break-all border border-[var(--brand-wine)]/20 px-4 py-3 font-mono text-base text-[var(--muted)] sm:text-lg">
                        {url}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 text-xl text-[var(--foreground)] sm:text-2xl">
          <strong className="text-[var(--brand-wine-deep)]">Corrección de error en QR:</strong>{" "}
          conviene usar nivel alto (por ejemplo H) por suciedad, reflejos en el mármol y desgaste.
        </p>
      </div>
    </div>
  );
}
