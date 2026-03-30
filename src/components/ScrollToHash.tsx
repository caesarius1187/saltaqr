"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToIdFromHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Tras navegación cliente o cambio de hash, desplaza al elemento (QRs con #anclas).
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToIdFromHash();
    window.addEventListener("hashchange", scrollToIdFromHash);
    return () => window.removeEventListener("hashchange", scrollToIdFromHash);
  }, [pathname]);

  return null;
}
