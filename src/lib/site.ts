/**
 * URL pública del sitio (Vercel: definir NEXT_PUBLIC_SITE_URL en el proyecto).
 * Sirve para mapa de QRs y metadata absoluta.
 */
export function getSiteUrl(): string {
  if (typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL.length > 0) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (typeof process.env.VERCEL_URL === "string" && process.env.VERCEL_URL.length > 0) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
