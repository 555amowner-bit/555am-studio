"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPathnameRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    let lenis: Lenis | null = null;
    let animationFrameId = 0;
    let cancelled = false;

    // Disable native scroll restoration so a reload never jumps back to an old offset.
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const startLenis = () => {
      if (cancelled || lenis) return;

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        anchors: true,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        if (!lenis || cancelled) return;
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    };

    startLenis();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameId);
      lenis?.destroy();
      lenisRef.current = null;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (previousPathnameRef.current === null) {
      previousPathnameRef.current = pathname;
      return;
    }

    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;

    // The destination page may be much shorter than the previous page.
    // Reset instantly before paint so Lenis doesn't animate against a changing
    // scroll range (which can cause a hitch when entering short pages like Work).
    const lenis = lenisRef.current;
    lenis?.stop();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    lenis?.resize();
    lenis?.start();
  }, [pathname]);

  return null;
}