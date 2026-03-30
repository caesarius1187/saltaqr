export type StorySlide = {
  id: string;
  /** Gradiente CSS (fondo tipo historia) */
  gradient: string;
  title: string;
  lines: string[];
};

export const GUEMES_STORY_SLIDES: StorySlide[] = [
  {
    id: "intro",
    gradient: "linear-gradient(160deg, #4a121f 0%, #6b1c2c 55%, #8b3d45 100%)",
    title: "Martín Miguel de Güemes",
    lines: ["Salta, 1785–1821", "Una historia en viñetas, al estilo de las historias que mirás en el celular."],
  },
  {
    id: "origen",
    gradient: "linear-gradient(165deg, #2a5f6f 0%, #3d7a8c 50%, #1e4a56 100%)",
    title: "Nació en Salta",
    lines: [
      "8 de febrero de 1785.",
      "Creció entre la ciudad, la política de su tiempo y la frontera del Norte.",
    ],
  },
  {
    id: "1810",
    gradient: "linear-gradient(155deg, #5c2620 0%, #b84a32 45%, #7a3028 100%)",
    title: "1810 y el cambio de época",
    lines: [
      "La Revolución de Mayo abrió el conflicto con el poder español.",
      "Güemes fue de la generación que pasó del civismo al mando militar.",
    ],
  },
  {
    id: "norte",
    gradient: "linear-gradient(170deg, #3d2435 0%, #6b1c2c 60%, #4a121f 100%)",
    title: "El Norte era otro frente",
    lines: [
      "Alto Perú, milicias, logística dura.",
      "Salta quedó en el corazón de una guerra larga y costosa.",
    ],
  },
  {
    id: "guerra-gaucha",
    gradient: "linear-gradient(145deg, #4a121f 0%, #c6a035 35%, #6b1c2c 100%)",
    title: "La “guerra gaucha”",
    lines: [
      "Entre 1815 y 1821 organizó la defensa con partidas irregulares.",
      "Hostigamiento, rapidez y apoyo popular frente a columnas realistas.",
    ],
  },
  {
    id: "costo",
    gradient: "linear-gradient(160deg, #1e4a56 0%, #2a5f6f 50%, #0f2f38 100%)",
    title: "Una defensa cara",
    lines: [
      "Tributos, reclutamientos, violencia prolongada.",
      "La sociedad salteña cargó el peso de mantener el frente.",
    ],
  },
  {
    id: "herida",
    gradient: "linear-gradient(150deg, #2c1810 0%, #5c2620 55%, #3d1a14 100%)",
    title: "1821",
    lines: [
      "Gravemente herido en medio de la crisis política y militar.",
      "Un episodio que la historiografía sigue analizando con rigor.",
    ],
  },
  {
    id: "muerte",
    gradient: "linear-gradient(165deg, #1a1410 0%, #4a121f 70%, #2c1810 100%)",
    title: "17 de junio de 1821",
    lines: ["Murió en Salta.", "Cerró una etapa de liderazgo muy personal en el Norte."],
  },
  {
    id: "legado",
    gradient: "linear-gradient(155deg, #6b1c2c 0%, #e4c76b 40%, #8b3d45 100%)",
    title: "Legado",
    lines: [
      "Símbolo de resistencia y vínculo entre ciudad y campaña.",
      "Hoy su figura sigue presente en el calendario, la escuela y el monumento.",
    ],
  },
  {
    id: "cta",
    gradient: "linear-gradient(145deg, #4a121f 0%, #2a5f6f 55%, #1e4a56 100%)",
    title: "¿Querés profundizar?",
    lines: [
      "En el sitio tenés la biografía completa, con secciones y enlaces para leer con calma.",
      "Tocá abajo cuando termines esta historia.",
    ],
  },
];

export const STORY_SLIDE_MS = 6500;
