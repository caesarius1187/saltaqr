"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { GUEMES_STORY_SLIDES, STORY_SLIDE_MS } from "./guemesSlides";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function GuemesStoriesExperience() {
  const total = GUEMES_STORY_SLIDES.length;
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const run = () => {
      startRef.current = performance.now();

      const tick = (now: number) => {
        if (document.visibilityState !== "visible") {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const elapsed = now - startRef.current;
        const p = Math.min(100, (elapsed / STORY_SLIDE_MS) * 100);
        setProgress(p);

        if (p >= 100) {
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          setIndex((i) => {
            if (i >= total - 1) return i;
            return i + 1;
          });
          return;
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      setProgress(0);
      rafRef.current = requestAnimationFrame(tick);
    };

    const kickoff = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(kickoff);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [index, reducedMotion, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        window.location.href = "/vida";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const slide = GUEMES_STORY_SLIDES[index];
  const isLast = index === total - 1;

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) {
      if (index < total - 1) goNext();
    } else {
      goPrev();
    }
  };

  return (
    <div
      className="story-root fixed inset-0 z-[200] flex flex-col text-[var(--hero-cream)]"
      role="region"
      aria-roledescription="historia"
      aria-label={`Historia de Güemes, viñeta ${index + 1} de ${total}`}
      style={{ background: slide.gradient }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/15" aria-hidden />

      <div className="relative z-30 flex shrink-0 items-start justify-between gap-3 px-3 pt-3 sm:px-4">
        <div
          className="flex min-w-0 flex-1 gap-1.5 pt-1"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label={`Progreso: ${index + 1} de ${total}`}
        >
          {GUEMES_STORY_SLIDES.map((s, i) => {
            let fill = 0;
            if (i < index) fill = 100;
            else if (i === index) fill = reducedMotion ? 100 : progress;
            return (
              <div
                key={s.id}
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/35"
                aria-hidden
              >
                <div
                  className="h-full rounded-full bg-white/95"
                  style={{ width: `${fill}%` }}
                />
              </div>
            );
          })}
        </div>
        <Link
          href="/vida"
          className="shrink-0 rounded-full bg-black/25 px-4 py-2 text-base font-bold text-white backdrop-blur-sm hover:bg-black/40 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Cerrar historias y volver a la biografía"
        >
          Cerrar
        </Link>
      </div>

      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 z-10 flex">
          <button
            type="button"
            className="h-full w-1/2 cursor-w-resize border-0 bg-transparent p-0"
            aria-label="Viñeta anterior"
            onClick={goPrev}
          />
          <button
            type="button"
            className="h-full w-1/2 cursor-e-resize border-0 bg-transparent p-0"
            aria-label="Viñeta siguiente"
            onClick={() => {
              if (index < total - 1) goNext();
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-10">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
              {slide.title}
            </h1>
            <div className="mt-8 space-y-5 text-xl leading-relaxed text-white/95 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              {slide.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {isLast && (
            <div className="pointer-events-auto mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/vida"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white/95 px-8 py-3 text-lg font-bold text-[var(--brand-wine-deep)] shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Leer biografía completa
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-8 py-3 text-lg font-bold text-white hover:bg-white/15 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ir al inicio
              </Link>
            </div>
          )}

          <p className="mt-6 text-center text-base text-white/80 sm:text-lg">
            Tocá derecha para avanzar · izquierda para volver · deslizá · Esc para salir
          </p>
        </div>
      </div>
    </div>
  );
}
