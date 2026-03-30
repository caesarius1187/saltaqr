import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vida de Güemes",
  description:
    "Línea de tiempo divulgativa: infancia, guerra de independencia, defensa del Norte, muerte y legado de Martín Miguel de Güemes.",
};

const sectionTitle =
  "border-l-[6px] border-[var(--brand-gold)] pl-4 text-3xl font-bold text-[var(--brand-wine-deep)] sm:text-4xl";

export default function VidaPage() {
  return (
    <article className="flex flex-1 flex-col bg-[var(--surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:py-16">
        <header className="border-b-2 border-[var(--brand-wine)]/20 pb-10">
          <p className="text-base font-semibold text-[var(--brand-wine)] sm:text-lg">
            <Link href="/historias/guemes">Ver también en formato historias (tipo Instagram)</Link>
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand-terracotta)]">
            Biografía divulgativa
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[var(--brand-wine-deep)] sm:text-5xl">
            La vida de Martín Miguel de Güemes
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            General gaucho salteño, figura clave en la defensa del Norte durante la guerra de
            independencia. Nació en Salta en 1785 y murió en 1821, poco después de ser herido en
            circunstancias que la historiografía ha estudiado con detalle.
          </p>
        </header>

        <nav
          aria-label="Secciones de la biografía"
          className="my-10 rounded-2xl border-2 border-[var(--brand-wine)]/15 bg-[var(--surface-card)] p-6 shadow-[0_6px_24px_rgba(74,18,31,0.07)] sm:p-8"
        >
          <p className="text-lg font-bold text-[var(--brand-wine-deep)] sm:text-xl">
            Saltar a una sección
          </p>
          <ul className="mt-4 grid gap-3 text-lg sm:grid-cols-2 sm:text-xl">
            <li>
              <Link href="#intro">Introducción</Link>
            </li>
            <li>
              <Link href="#infancia">Infancia y formación</Link>
            </li>
            <li>
              <Link href="#independencia">Guerra de independencia</Link>
            </li>
            <li>
              <Link href="#guerra-en-el-norte">Guerra en el Norte</Link>
            </li>
            <li>
              <Link href="#muerte">Muerte</Link>
            </li>
            <li>
              <Link href="#legado">Legado</Link>
            </li>
            <li className="sm:col-span-2">
              <Link href="#para-saber-mas">Para saber más</Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-16 sm:space-y-20">
          <section id="intro" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Introducción</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Martín Miguel de Güemes (1785–1821) es una de las figuras más recordadas del
                proceso independentista en el actual noroeste argentino. Desde Salta organizó y
                lideró fuerzas irregulares —popularmente asociadas al mundo gaucho— que hostigaron
                repetidamente a las columnas realistas y sostuvieron la frontera norte en años de
                extrema inestabilidad.
              </p>
              <p>
                Este texto es una síntesis divulgativa: no reemplaza la lectura de fuentes primarias
                ni el trabajo de historiadores y archivos locales. Su objetivo es orientar al
                visitante del monumento y despertar el interés por la historia regional.
              </p>
            </div>
          </section>

          <section id="infancia" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Infancia y formación</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Nació el 8 de febrero de 1785 en Salta, en el seno de una familia inserta en las
                élites locales. Cursó estudios que lo acercaron a la cultura política de su tiempo y
                tuvo contacto temprano con la realidad fronteriza y militar de la región.
              </p>
              <p>
                En 1810, con la Revolución de Mayo y el proceso que desembocó en el Congreso de
                Tucumán y la declaración de independencia, el mundo político viró hacia el
                enfrentamiento abierto con el poder español. Güemes fue parte de esa generación que
                transitó de la vida civil a responsabilidades militares y de gobierno.
              </p>
            </div>
          </section>

          <section id="independencia" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Guerra de independencia</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Tras 1810, las Provincias Unidas del Río de la Plata atravesaron guerras internas y
                conflictos con fuerzas leales a la monarquía. En el Norte, la logística, el terreno
                y la presencia de pueblos originarios y fronteras con el Alto Perú hicieron del
                teatro salteño un escenario particularmente complejo.
              </p>
              <p>
                Güemes ocupó cargos civiles y militares y participó en operaciones que buscaron
                asegurar el control político y militar del territorio salteño frente a las
                amenazas externas y a las tensiones internas del bando patriota.
              </p>
            </div>
          </section>

          <section id="guerra-en-el-norte" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Guerra en el Norte</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Entre aproximadamente 1815 y 1821, Güemes destacó como organizador de la defensa
                del Norte. Las milicias y partidas bajo su influencia realizaron el llamado{" "}
                <strong className="font-bold text-[var(--brand-wine-deep)]">“guerrilla”</strong> o
                guerra de desgaste: movimientos rápidos, apoyo popular, captación de recursos y
                hostigamiento constante a columnas realistas que intentaban avanzar hacia el sur.
              </p>
              <p>
                Esa estrategia tuvo costos humanos y políticos enormes: la sociedad salteña cargó con
                tributos, reclutamientos y la violencia de una guerra prolongada. Al mismo tiempo,
                contribuyó a frenar ofensivas enemigas y ganó tiempo para el proyecto independentista.
              </p>
              <p>
                Las relaciones con otras autoridades del gobierno central y con líderes regionales
                no fueron lineales: hubo momentos de colaboración y de fricción, tema bien
                documentado en la historiografía.
              </p>
            </div>
          </section>

          <section id="muerte" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Muerte</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                En 1821, en un contexto de crisis política y militar, Güemes fue gravemente herido.
                Murió el 17 de junio de ese año. Las circunstancias exactas del atentado o emboscada
                —y su interpretación— han sido objeto de estudios que van más allá de lo que este
                resumen puede abarcar.
              </p>
              <p>
                Su muerte marcó el final de una etapa de liderazgo personal muy intensa en Salta y
                dejó abiertas preguntas sobre la continuidad de la defensa del Norte.
              </p>
            </div>
          </section>

          <section id="legado" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Legado</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Güemes es símbolo de resistencia popular y de vínculo entre la ciudad, la campaña y
                las milicias gauchas. En Salta su figura se celebra en fechas conmemorativas, en el
                calendario escolar y en el paisaje urbano —incluido el monumento donde podés estar
                leyendo esto.
              </p>
              <p>
                Como todo héroe nacional, su imagen fue reinterpretada a lo largo del siglo XIX y el
                XX según los debates políticos del momento; conviene distinguir entre el personaje
                histórico y los usos posteriores de su memoria.
              </p>
            </div>
          </section>

          <section id="para-saber-mas" tabIndex={-1} className="scroll-mt-24 outline-none">
            <h2 className={sectionTitle}>Para saber más</h2>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
              <p>
                Para profundizar, consultá bibliografía en bibliotecas públicas y universitarias,
                archivos históricos de Salta y material didáctico de museos regionales. Cuando
                agreguemos enlaces oficiales verificados, los publicaremos aquí.
              </p>
              <p>
                <Link href="/">Volver al inicio</Link>
              </p>
            </div>
          </section>
        </div>

        <aside
          className="mt-20 rounded-2xl border-2 border-[var(--brand-wine)]/35 bg-[var(--surface-warm)] p-6 shadow-inner sm:p-8"
          role="note"
        >
          <h2 className="text-2xl font-bold text-[var(--brand-wine-deep)] sm:text-3xl">
            Aviso sobre el texto
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            Este contenido es <strong className="text-[var(--brand-wine-deep)]">divulgativo</strong>{" "}
            y está sujeto a revisión por especialistas, docentes e instituciones locales. Si
            encontrás un error factual o querés proponer una mejora, contactá a quienes mantienen
            este proyecto.
          </p>
        </aside>
      </div>
    </article>
  );
}
