"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { GUEMES_STORIES_AUDIO } from "./guemesStoriesAudio";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const storyRootRef = useRef<HTMLDivElement | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const showMusicControl = GUEMES_STORIES_AUDIO.src.length > 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = GUEMES_STORIES_AUDIO.volume;
    el.loop = true;
  }, []);

  /** Autoplay al abrir historias; si el navegador lo bloquea, el primer toque en la pantalla intenta de nuevo. */
  useEffect(() => {
    const el = audioRef.current;
    const root = storyRootRef.current;
    if (!el || !showMusicControl) return;

    let cancelled = false;
    let removeFallback: (() => void) | null = null;

    const tryPlay = () => {
      if (cancelled) return;
      void el.play().then(() => setMusicOn(true)).catch(() => {
        if (cancelled || !root) return;
        const onFirstPointer = () => {
          if (cancelled) return;
          void el.play().then(() => setMusicOn(true)).catch(() => {});
        };
        root.addEventListener("pointerdown", onFirstPointer, { capture: true, once: true });
        removeFallback = () => root.removeEventListener("pointerdown", onFirstPointer, true);
      });
    };

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) tryPlay();
    else el.addEventListener("canplay", tryPlay, { once: true });

    return () => {
      cancelled = true;
      el.removeEventListener("canplay", tryPlay);
      removeFallback?.();
    };
  }, [showMusicControl]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !showMusicControl) return;
    return () => {
      el.pause();
    };
  }, [showMusicControl]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !showMusicControl) return;
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        el.pause();
      } else if (musicOn) {
        void el.play().catch(() => setMusicOn(false));
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [musicOn, showMusicControl]);

  const toggleMusic = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (musicOn) {
      el.pause();
      setMusicOn(false);
      return;
    }
    void el.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
  }, [musicOn]);

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
      if (showMusicControl && (e.key === "m" || e.key === "M")) {
        e.preventDefault();
        toggleMusic();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, showMusicControl, toggleMusic]);

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
      ref={storyRootRef}
      className="story-root fixed inset-0 z-[200] flex flex-col text-[var(--hero-cream)]"
      role="region"
      aria-roledescription="historia"
      aria-label={`Historia de Güemes, viñeta ${index + 1} de ${total}`}
      style={{ background: slide.gradient }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {showMusicControl ? (
        <audio
          ref={audioRef}
          src={GUEMES_STORIES_AUDIO.src}
          preload="auto"
          loop
          aria-hidden
          className="sr-only"
        />
      ) : null}

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
        <div className="flex shrink-0 items-center gap-2">
          {showMusicControl ? (
            <button
              type="button"
              onClick={toggleMusic}
              className="rounded-full bg-black/25 px-3 py-2 text-white backdrop-blur-sm hover:bg-black/40 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-pressed={musicOn}
              aria-label={musicOn ? "Silenciar música de fondo" : "Activar música de fondo"}
            >
              {musicOn ? (
                <span className="flex items-center gap-2 text-base font-bold">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  <span className="hidden sm:inline">Sonido</span>
                </span>
              ) : (
                <span className="flex items-center gap-2 text-base font-bold">
                  <svg
                    className="h-5 w-5 shrink-0 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  <span className="hidden sm:inline">Música</span>
                </span>
              )}
            </button>
          ) : null}
          <Link
            href="/vida"
            className="shrink-0 rounded-full bg-black/25 px-4 py-2 text-base font-bold text-white backdrop-blur-sm hover:bg-black/40 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Cerrar historias y volver a la biografía"
          >
            Cerrar
          </Link>
        </div>
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
          <div
            className={
              slide.variant === "image"
                ? "flex min-h-0 flex-1 flex-col justify-center gap-5"
                : "flex flex-1 flex-col justify-center"
            }
          >
            <h1
              className={
                slide.variant === "image"
                  ? "font-[family-name:var(--font-display)] text-2xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl"
                  : "font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl"
              }
            >
              {slide.title}
            </h1>
            {slide.variant === "image" && slide.image && (
              <div
                className="relative mx-auto aspect-[4/3] w-full max-h-[min(52vh,420px)] max-w-2xl shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/20"
                aria-hidden={slide.image.alt === ""}
              >
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, 42rem"
                  priority={index <= 2}
                />
              </div>
            )}
            {slide.lines.length > 0 && (
              <div
                className={
                  slide.variant === "image"
                    ? "space-y-3 text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl"
                    : "mt-8 space-y-5 text-xl leading-relaxed text-white/95 sm:text-2xl md:text-[1.65rem] md:leading-snug"
                }
              >
                {slide.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            )}
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
