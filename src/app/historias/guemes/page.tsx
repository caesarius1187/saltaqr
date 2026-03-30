import type { Metadata } from "next";
import { GuemesStoriesExperience } from "@/components/stories/GuemesStoriesExperience";

export const metadata: Metadata = {
  title: "Historias — Güemes",
  description:
    "Recorrido corto sobre Martín Miguel de Güemes, al estilo historias: viñetas, gestos y texto grande en el celular.",
};

export default function HistoriasGuemesPage() {
  return <GuemesStoriesExperience />;
}
