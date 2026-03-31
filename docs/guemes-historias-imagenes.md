# Imágenes para historias de Güemes — checklist de búsqueda

Documento para ir **encontrando, revisando licencias y nombrando archivos** antes de cargarlos en el sitio. El orden de las viñetas de imagen sigue el flujo texto → imagen del recorrido `/historias/guemes`.

## Cómo usar esto

1. Para cada bloque, probá las **búsquedas sugeridas** (Wikimedia Commons, archivo histórico, museos, fotos propias con permiso).
2. Anotá **fuente**, **licencia** y **enlace** en la tabla de cada viñeta.
3. Guardá el archivo final en **`public/guemes/`** con un nombre claro (sin espacios, idealmente minúsculas y guiones).
4. En el código, en `src/components/stories/guemesSlides.ts`, en la viñeta con el mismo **id**, agregá:

   ```ts
   image: { src: "/guemes/tu-archivo.webp", alt: "Descripción breve y precisa del contenido." },
   ```

5. Marcá el estado con `[ ]` → `[x]` cuando cierre la viñeta.

## Recordatorios rápidos

- **Dominio público / CC** suele ser lo más simple para publicar; leé siempre la ficha de la obra en Commons o el sitio del archivo.
- Si la foto es **tuya**, igual conviene anotar fecha y lugar en las notas.
- El **texto `alt`** debe describir lo que se ve (accesibilidad), no solo el título de la historia.

---

## Viñeta 1 — `intro-img` · Un rostro en la historia

**Tema:** retratos, grabados o el monumento como imagen reconocible de Güemes.

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [x] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- Martín Miguel de Güemes retrato Wikimedia Commons
- Güemes grabado siglo XIX Argentina
- Martín Miguel de Güemes monumento Salta fotografía

---

## Viñeta 2 — `origen-img` · Salta y el mundo colonial

**Tema:** ciudad o región en época colonial / virreinal; mapas antiguos si encajan.

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [x] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- Salta ciudad colonial Virreinato del Río de la Plata mapa
- Salta Argentina siglo XVIII plaza histórica
- Noroeste argentino Virreinato Perú frontera colonial mapa

---

## Viñeta 3 — `1810-img` · Mayo y la ruptura

**Tema:** Cabildo, juntas, iconografía del 25 de Mayo (cuidado con obras recientes con derechos).

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- Revolución de Mayo 1810 Cabildo Buenos Aires grabado
- 25 de mayo 1810 ilustración histórica dominio público
- independencia Argentina 1810 documento iconografía

---

## Viñeta 4 — `norte-img` · Geografía de la guerra

**Tema:** mapas del norte, campañas, movilización militar (época independencia).

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- guerra independencia Argentina norte mapa Alto Perú
- Salta campaña militar independencia ilustración
- Tucumán Salta Jujuy guerra 1810s mapa histórico

---

## Viñeta 5 — `guerra-gaucha-img` · Milicias y campaña

**Tema:** caballería ligera, milicia rural, grabados de época (evitar estereotipos caricaturescos si podés).

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- guerra gaucha ilustración histórica Argentina dominio público
- milicia rural independencia Argentina grabado
- caballería irregular guerra independencia Río de la Plata

---

## Viñeta 6 — `costo-img` · El esfuerzo colectivo

**Tema:** población civil, economía de guerra, reclutamiento (fuentes históricas).

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- pueblo civil guerra independencia Hispanoamérica grabado
- reclutamiento milicias independencia Argentina historia
- sociedad colonial guerra larga ilustración siglo XIX

---

## Viñeta 7 — `herida-img` · Crisis y confrontación

**Tema:** contexto urbano o político del norte (1821); preferí arquitectura/plaza/documento antes que escenas violentas explícitas.

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- Salta 1821 historia militar independencia Argentina
- conflicto político norte argentino independencia grabado
- ciudad colonial plaza iglesia siglo XIX Argentina fotografía histórica

---

## Viñeta 8 — `muerte-img` · Duelo y recuerdo

**Tema:** duelo, iglesia/catedral, grabados de honras fúnebres de época.

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- funeral héroe independencia Hispanoamérica grabado antiguo
- Salta catedral basílica histórica exterior fotografía
- luto ciudad colonial siglo XIX ilustración

---

## Viñeta 9 — `legado-img` · El monumento y la ciudad

**Tema:** monumento a Güemes en Salta, plaza, foto actual con licencia adecuada (propia o Commons).

| Campo | Tu nota |
|--------|---------|
| Estado | [ ] Pendiente · [ ] Elegida · [ ] En el sitio |
| Archivo en repo | `public/guemes/________________` |
| URL / archivo origen | |
| Licencia / crédito | |

**Búsquedas sugeridas**

- monumento Martín Miguel de Güemes Salta fotografía
- plaza Güemes Salta Argentina
- estatua ecuestre Güemes Salta imagen libre

---

## Resumen de ids (para pegar en el código)

| Orden en historia | `id` en `guemesSlides.ts` |
|-------------------|---------------------------|
| 1 | `intro-img` |
| 2 | `origen-img` |
| 3 | `1810-img` |
| 4 | `norte-img` |
| 5 | `guerra-gaucha-img` |
| 6 | `costo-img` |
| 7 | `herida-img` |
| 8 | `muerte-img` |
| 9 | `legado-img` |

Si más adelante cambiás las búsquedas en `guemesSlides.ts`, conviene **actualizar también este documento** para que sigan coincidiendo.
