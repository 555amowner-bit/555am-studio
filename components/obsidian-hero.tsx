
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function ObsidianHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const background = hero.querySelector<HTMLElement>(
      ".obsidian-hero__background"
    );

    const mountainType = hero.querySelector<HTMLElement>(
      ".obsidian-hero__mountain-type"
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frame = 0;

    const updateHero = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const currentHero = heroRef.current;
        if (!currentHero) return;

        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const rect = currentHero.getBoundingClientRect();

        const rawProgress =
          (viewportHeight - rect.bottom) / (viewportHeight * 0.72);

        const progress = prefersReducedMotion
          ? 0
          : Math.max(0, Math.min(1, rawProgress));

        // Preserve the existing gradient transition.
        const baseHeight = Math.min(
          Math.max(viewportHeight * 0.22, 150),
          260
        );

        const maxHeight = currentHero.offsetHeight;

        const fadeHeight =
          baseHeight + (maxHeight - baseHeight) * progress;

        const fadeOpacity = 0.86 + progress * 0.14;

        currentHero.style.setProperty(
          "--hero-fade-height",
          `${fadeHeight}px`
        );

        currentHero.style.setProperty(
          "--hero-fade-opacity",
          String(fadeOpacity)
        );

        // Preserve the slow mountain parallax.
        if (background && !prefersReducedMotion) {
          const parallaxOffset = Math.max(
            -18,
            Math.min(18, rect.top * -0.018)
          );

          background.style.transform =
            `translate3d(0, ${parallaxOffset}px, 0) scale(1.015)`;
        }

        // Subtle movement for the oversized mountain typography.
        if (mountainType && !prefersReducedMotion) {
          const textOffset = Math.max(
            -20,
            Math.min(20, rect.top * -0.025)
          );

          mountainType.style.transform =
            `translate3d(-50%, ${textOffset}px, 0)`;
        }
      });
    };

    if (!prefersReducedMotion) {
      // Cinematic mountain reveal: blurred and invisible to clear and visible.
      if (background) {
        background.animate(
          [
            {
              opacity: 0,
              filter: "blur(8px)",
            },
            {
              opacity: 1,
              filter: "blur(0px)",
            },
          ],
          {
            duration: 6500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "both",
          }
        );
      }

      // Staggered entrance animation for the existing hero content.
      const entranceElements = [
        hero.querySelector<HTMLElement>(".obsidian-hero__eyebrow"),
        hero.querySelector<HTMLElement>(".obsidian-hero__headline-primary"),
        hero.querySelector<HTMLElement>(".obsidian-hero__headline-secondary"),
        hero.querySelector<HTMLElement>(".obsidian-hero__main > p"),
        hero.querySelector<HTMLElement>(".obsidian-hero__button"),
      ].filter((element): element is HTMLElement => element !== null);

      entranceElements.forEach((element, index) => {
        const isButton = element.classList.contains("obsidian-hero__button");

        element.animate(
          isButton
            ? [{ opacity: 0 }, { opacity: 1 }]
            : [
                {
                  opacity: 0,
                  transform: "translate3d(0, 18px, 0)",
                },
                {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
                },
              ],
          {
            duration: 1600,
            delay: 250 + index * 250,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          }
        );
      });
    }

    updateHero();

    window.addEventListener("scroll", updateHero, { passive: true });
    window.addEventListener("resize", updateHero);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHero);
      window.removeEventListener("resize", updateHero);
    };
  }, []);

  return (
    <section ref={heroRef} className="obsidian-hero">
      <div
        className="obsidian-hero__background"
        aria-hidden="true"
      />

      <div
        className="obsidian-hero__overlay"
        aria-hidden="true"
      />

      <div
        className="obsidian-hero__mountain-type"
        aria-hidden="true"
      >
        5:55 AM
      </div>

      <div className="obsidian-hero__main">
        <span className="obsidian-hero__eyebrow">
          INDEPENDENT DIGITAL DESIGN STUDIO
        </span>

        <h1>
          <span className="obsidian-hero__headline-primary">
            5:55 AM Studio designs
          </span>

          <span className="obsidian-hero__headline-secondary">
            websites with
            <br className="obsidian-hero__headline-break" />
            {" "}character.
          </span>
        </h1>

        <p>
          An independent design studio crafting thoughtful
          <br className="obsidian-hero__desktop-break" />
          web experiences for brands and digital products.
        </p>

        <Link
          href="/services"
          className="obsidian-hero__button"
        >
          <span className="obsidian-hero__button-label">
            Explore Our Services
          </span>
        </Link>
      </div>

      <style jsx>{`
        .obsidian-hero__button {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: translate3d(0, 0, 0) scale(1);
          transition:
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 700ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 450ms ease;
          will-change: transform;
          backface-visibility: hidden;
        }

        .obsidian-hero__button::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 30%,
            rgba(255, 255, 255, 0.72) 50%,
            rgba(255, 255, 255, 0.12) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translate3d(-115%, 0, 0) skewX(-12deg);
          transition: transform 950ms cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .obsidian-hero__button-label {
          position: relative;
          z-index: 1;
          transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .obsidian-hero__button:hover {
          transform: translate3d(0, -5px, 0) scale(1.035);
          box-shadow:
            0 18px 42px rgba(0, 0, 0, 0.32),
            0 0 0 1px rgba(255, 255, 255, 0.14);
        }

        .obsidian-hero__button:hover::before,
        .obsidian-hero__button:focus-visible::before {
          transform: translate3d(115%, 0, 0) skewX(-12deg);
        }

        .obsidian-hero__button:hover .obsidian-hero__button-label {
          transform: translate3d(0, -1px, 0);
        }

        .obsidian-hero__button:active {
          transform: translate3d(0, -1px, 0) scale(0.99);
          transition-duration: 140ms;
        }

        .obsidian-hero__button:focus-visible {
          outline: 2px solid rgba(243, 241, 236, 0.9);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .obsidian-hero__button,
          .obsidian-hero__button::before,
          .obsidian-hero__button-label {
            transition: none !important;
          }

          .obsidian-hero__button:hover,
          .obsidian-hero__button:active {
            transform: none;
            box-shadow: none;
          }

          .obsidian-hero__button:hover::before,
          .obsidian-hero__button:focus-visible::before {
            transform: translate3d(-115%, 0, 0) skewX(-12deg);
          }

          .obsidian-hero__button:hover .obsidian-hero__button-label {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
