import type { Metadata } from "next";
import { Fraunces, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToHash } from "@/components/ScrollToHash";
import { getSiteUrl } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salta QR — Historia en la calle",
    template: "%s · Salta QR",
  },
  description:
    "Códigos QR en espacios públicos de Salta para acercar historia y memoria. Primera implementación: monumento a Güemes; el proyecto se amplía a la ciudad.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Salta QR",
    title: "Salta QR — Historia en la calle",
    description:
      "Escaneá el QR en la ciudad: empezamos en el monumento a Güemes y sumamos más lugares.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salta QR — Historia en la calle",
    description:
      "Escaneá el QR en la ciudad: empezamos en el monumento a Güemes y sumamos más lugares.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[var(--foreground)]">
        <a href="#contenido-principal" className="skip-link">
          Ir al contenido
        </a>
        <ScrollToHash />
        <SiteHeader />
        <main id="contenido-principal" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
