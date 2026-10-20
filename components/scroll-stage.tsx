"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollStageProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollStage({ children, className = "" }: ScrollStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!stage || reducedMotion.matches || !finePointer.matches) {
      return;
    }

    let frameId: number | null = null;
    let pointerActive = false;
    let pointerClientX = 0;
    let pointerClientY = 0;

    const updatePosition = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

        const { left, top, width, height } = stage.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - top) / (window.innerHeight + height)),
        );
        const centeredProgress = progress - 0.5;
        const pointerX = pointerActive
          ? Math.max(-1, Math.min(1, (pointerClientX - (left + width / 2)) / (width / 2)))
          : 0;
        const pointerY = pointerActive
          ? Math.max(-1, Math.min(1, (pointerClientY - (top + height / 2)) / (height / 2)))
          : 0;

        stage.style.setProperty(
          "--hero-window-shift",
          `${(centeredProgress * -18).toFixed(2)}px`,
        );
        stage.style.setProperty(
          "--hero-mobile-shift",
          `${(centeredProgress * 28).toFixed(2)}px`,
        );
        stage.style.setProperty(
          "--hero-orbit-shift",
          `${(centeredProgress * -10).toFixed(2)}px`,
        );
        stage.style.setProperty(
          "--hero-orbit-secondary-shift",
          `${(centeredProgress * 6).toFixed(2)}px`,
        );
        stage.style.setProperty(
          "--hero-window-rotate-x",
          `${(pointerY * -1.15).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-window-rotate-y",
          `${(pointerX * 1.6).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-back-rotate-x",
          `${(pointerY * -0.7).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-back-rotate-y",
          `${(pointerX * 1).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-mobile-rotate-x",
          `${(pointerY * 1.4).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-mobile-rotate-y",
          `${(pointerX * -2).toFixed(2)}deg`,
        );
        stage.style.setProperty(
          "--hero-orbit-rotate-y",
          `${(pointerX * 1.2).toFixed(2)}deg`,
        );
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerActive = true;
      pointerClientX = event.clientX;
      pointerClientY = event.clientY;
      updatePosition();
    };

    const resetPointer = () => {
      pointerActive = false;
      updatePosition();
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    stage.addEventListener("pointermove", handlePointerMove, { passive: true });
    stage.addEventListener("pointerleave", resetPointer);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", resetPointer);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div ref={stageRef} className={`hero-stage ${className}`.trim()}>
      {children}
    </div>
  );
}
