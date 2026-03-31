export type StorySlideBase = {
  id: string;
  /** Gradiente CSS (fondo tipo historia) */
  gradient: string;
};

export type StoryTextSlide = StorySlideBase & {
  variant: "text";
  title: string;
  lines: string[];
};

export type StoryImageSlide = StorySlideBase & {
  variant: "image";
  title: string;
  /** Pie breve bajo la imagen (puede ir vacío) */
  lines: string[];
  /** Ilustración en `public/guemes/` → `/guemes/archivo.ext` */
  image?: { src: string; alt: string };
  /**
   * Términos para buscar fotos o grabados con licencia adecuada
   * (p. ej. Wikimedia Commons, archivos provinciales, museos).
   */
  imageSearchQueries: string[];
};

export type StorySlide = StoryTextSlide | StoryImageSlide;

/**
 * Orden: texto → imagen → texto → imagen…
 * Completá `image` en cada viñeta `variant: "image"` cuando tengas el archivo en `public/guemes/`.
 */
export const GUEMES_STORY_SLIDES: StorySlide[] = [
  {
    id: "intro-text",
    variant: "text",
    gradient: "linear-gradient(160deg, #4a121f 0%, #6b1c2c 55%, #8b3d45 100%)",
    title: "Martín Miguel de Güemes",
    lines: [
      "Salta, 1785–1821",
      "Una historia en viñetas, al estilo de las historias que mirás en el celular.",
    ],
  },
  {
    id: "intro-img",
    variant: "image",
    gradient: "linear-gradient(150deg, #3d2435 0%, #6b1c2c 50%, #4a121f 100%)",
    title: "Un rostro en la historia",
    lines: ["Retratos y representaciones en grabados, monumentos y archivo."],
    image: { src: "/guemes/intro-img.jpg", alt: "Imagen ilustrativa del retrato o la memoria de Güemes." },
    imageSearchQueries: [
      "Martín Miguel de Güemes retrato Wikimedia Commons",
      "Güemes grabado siglo XIX Argentina",
      "Martín Miguel de Güemes monumento Salta fotografía",
    ],
  },
  {
    id: "origen-text",
    variant: "text",
    gradient: "linear-gradient(165deg, #2a5f6f 0%, #3d7a8c 50%, #1e4a56 100%)",
    title: "Nació en Salta",
    lines: [
      "8 de febrero de 1785.",
      "Creció entre la ciudad, la política de su tiempo y la frontera del Norte.",
    ],
  },
  {
    id: "origen-img",
    variant: "image",
    gradient: "linear-gradient(165deg, #1e4a56 0%, #2a5f6f 55%, #3d7a8c 100%)",
    title: "Salta y el mundo colonial",
    lines: ["La ciudad y la región como escenario político y militar."],
    image: { src: "/guemes/origen-img.jpg", alt: "Salta o la región como escenario colonial y político." },
    imageSearchQueries: [
      "Salta ciudad colonial Virreinato del Río de la Plata mapa",
      "Salta Argentina siglo XVIII plaza histórica",
      "Noroeste argentino Virreinato Perú frontera colonial mapa",
    ],
  },
  {
    id: "1810-text",
    variant: "text",
    gradient: "linear-gradient(155deg, #5c2620 0%, #b84a32 45%, #7a3028 100%)",
    title: "1810 y el cambio de época",
    lines: [
      "La Revolución de Mayo abrió el conflicto con el poder español.",
      "Güemes fue de la generación que pasó del civismo al mando militar.",
    ],
  },
  {
    id: "1810-img",
    variant: "image",
    gradient: "linear-gradient(155deg, #7a3028 0%, #5c2620 50%, #3d1a14 100%)",
    title: "Mayo y la ruptura",
    lines: ["Cabildo, ciudad y primeras juntas."],
    image: { src: "/guemes/1810-img.jpg", alt: "Contexto visual de la Revolución de Mayo y las juntas." },
    imageSearchQueries: [
      "Revolución de Mayo 1810 Cabildo Buenos Aires grabado",
      "25 de mayo 1810 ilustración histórica dominio público",
      "independencia Argentina 1810 documento iconografía",
    ],
  },
  {
    id: "norte-text",
    variant: "text",
    gradient: "linear-gradient(170deg, #3d2435 0%, #6b1c2c 60%, #4a121f 100%)",
    title: "El Norte era otro frente",
    lines: [
      "Alto Perú, milicias, logística dura.",
      "Salta quedó en el corazón de una guerra larga y costosa.",
    ],
  },
  {
    id: "norte-img",
    variant: "image",
    gradient: "linear-gradient(170deg, #4a121f 0%, #3d2435 55%, #2c1810 100%)",
    title: "Geografía de la guerra",
    lines: ["Rutas, sierras y movilización en el Norte."],
    image: { src: "/guemes/norte-img.jpg", alt: "Mapa o escena del frente norte y la campaña militar." },
    imageSearchQueries: [
      "guerra independencia Argentina norte mapa Alto Perú",
      "Salta campaña militar independencia ilustración",
      "Tucumán Salta Jujuy guerra 1810s mapa histórico",
    ],
  },
  {
    id: "guerra-gaucha-text",
    variant: "text",
    gradient: "linear-gradient(145deg, #4a121f 0%, #c6a035 35%, #6b1c2c 100%)",
    title: "La “guerra gaucha”",
    lines: [
      "Entre 1815 y 1821 organizó la defensa con partidas irregulares.",
      "Hostigamiento, rapidez y apoyo popular frente a columnas realistas.",
    ],
  },
  {
    id: "guerra-gaucha-img",
    variant: "image",
    gradient: "linear-gradient(145deg, #6b1c2c 0%, #4a121f 45%, #2c1810 100%)",
    title: "Milicias y campaña",
    lines: ["Caballos, monte y tácticas de resistencia."],
    image: {
      src: "/guemes/guerra-gaucha-img.jpg",
      alt: "Milicias, caballería o campaña en el contexto de la guerra en el Norte.",
    },
    imageSearchQueries: [
      "guerra gaucha ilustración histórica Argentina dominio público",
      "milicia rural independencia Argentina grabado",
      "caballería irregular guerra independencia Río de la Plata",
    ],
  },
  {
    id: "costo-text",
    variant: "text",
    gradient: "linear-gradient(160deg, #1e4a56 0%, #2a5f6f 50%, #0f2f38 100%)",
    title: "Una defensa cara",
    lines: [
      "Tributos, reclutamientos, violencia prolongada.",
      "La sociedad salteña cargó el peso de mantener el frente.",
    ],
  },
  {
    id: "costo-img",
    variant: "image",
    gradient: "linear-gradient(160deg, #0f2f38 0%, #1e4a56 55%, #2a5f6f 100%)",
    title: "El esfuerzo colectivo",
    lines: ["Familias, economía local y sostenimiento de la guerra."],
    image: { src: "/guemes/costo-img.jpg", alt: "Sociedad civil o esfuerzo colectivo durante la guerra." },
    imageSearchQueries: [
      "pueblo civil guerra independencia Hispanoamérica grabado",
      "reclutamiento milicias independencia Argentina historia",
      "sociedad colonial guerra larga ilustración siglo XIX",
    ],
  },
  {
    id: "herida-text",
    variant: "text",
    gradient: "linear-gradient(150deg, #2c1810 0%, #5c2620 55%, #3d1a14 100%)",
    title: "1821",
    lines: [
      "Gravemente herido en medio de la crisis política y militar.",
      "Un episodio que la historiografía sigue analizando con rigor.",
    ],
  },
  {
    id: "herida-img",
    variant: "image",
    gradient: "linear-gradient(150deg, #3d1a14 0%, #2c1810 50%, #1a1410 100%)",
    title: "Crisis y confrontación",
    lines: ["Un momento dramático del poder en el Norte."],
    image: { src: "/guemes/herida-img.jpg", alt: "Contexto urbano o político del norte en torno a 1821." },
    imageSearchQueries: [
      "Salta 1821 historia militar independencia Argentina",
      "conflicto político norte argentino independencia grabado",
      "ciudad colonial plaza iglesia siglo XIX Argentina fotografía histórica",
    ],
  },
  {
    id: "muerte-text",
    variant: "text",
    gradient: "linear-gradient(165deg, #1a1410 0%, #4a121f 70%, #2c1810 100%)",
    title: "17 de junio de 1821",
    lines: ["Murió en Salta.", "Cerró una etapa de liderazgo muy personal en el Norte."],
  },
  {
    id: "muerte-img",
    variant: "image",
    gradient: "linear-gradient(165deg, #2c1810 0%, #1a1410 55%, #4a121f 100%)",
    title: "Duelo y recuerdo",
    lines: ["Honores, entierro y primeras memorias públicas."],
    image: { src: "/guemes/muerte-img.jpg", alt: "Duelo, iglesia o memoria colectiva en Salta." },
    imageSearchQueries: [
      "funeral héroe independencia Hispanoamérica grabado antiguo",
      "Salta catedral basílica histórica exterior fotografía",
      "luto ciudad colonial siglo XIX ilustración",
    ],
  },
  {
    id: "legado-text",
    variant: "text",
    gradient: "linear-gradient(155deg, #6b1c2c 0%, #e4c76b 40%, #8b3d45 100%)",
    title: "Legado",
    lines: [
      "Símbolo de resistencia y vínculo entre ciudad y campaña.",
      "Hoy su figura sigue presente en el calendario, la escuela y el monumento.",
    ],
  },
  {
    id: "legado-img",
    variant: "image",
    gradient: "linear-gradient(155deg, #8b3d45 0%, #6b1c2c 45%, #4a121f 100%)",
    title: "El monumento y la ciudad",
    lines: ["Un lugar de encuentro entre historia y vida cotidiana."],
    image: { src: "/guemes/legado-img.jpg", alt: "Monumento a Güemes y entorno en la ciudad de Salta." },
    imageSearchQueries: [
      "monumento Martín Miguel de Güemes Salta fotografía",
      "plaza Güemes Salta Argentina",
      "estatua ecuestre Güemes Salta imagen libre",
    ],
  },
  {
    id: "cta-text",
    variant: "text",
    gradient: "linear-gradient(145deg, #4a121f 0%, #2a5f6f 55%, #1e4a56 100%)",
    title: "¿Querés profundizar?",
    lines: [
      "En el sitio tenés la biografía completa, con secciones y enlaces para leer con calma.",
      "Tocá abajo cuando termines esta historia.",
    ],
  },
];

/** Resumen para copiar búsquedas fuera del runtime del sitio (por ejemplo en documentación). */
export function guemesImageSearchBySlide(): { id: string; title: string; queries: string[] }[] {
  return GUEMES_STORY_SLIDES.filter((s): s is StoryImageSlide => s.variant === "image").map(
    (s) => ({
      id: s.id,
      title: s.title,
      queries: s.imageSearchQueries,
    }),
  );
}

export const STORY_SLIDE_MS = 6500;
