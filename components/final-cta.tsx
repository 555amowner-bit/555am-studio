"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="final-cta-heading"
      className={`final-cta relative overflow-hidden bg-[#08090b] py-12 text-[#f3f1ec] sm:py-16 md:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="final-cta__panel relative isolate overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0d1b2c]">
          <div
            aria-hidden="true"
            className="final-cta__image absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/hero-mountain.png")' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071323]/95 via-[#071323]/75 to-[#071323]/15"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050b13]/45 via-transparent to-[#050b13]/10"
          />
          <div
            aria-hidden="true"
            className="final-cta__vignette pointer-events-none absolute inset-0 -z-10"
          />

          <div className="grid min-h-[17rem] items-center gap-8 px-6 py-10 sm:min-h-[19rem] sm:px-10 sm:py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-12 lg:min-h-[21rem] lg:px-14">
            <div className="final-cta__copy max-w-xl">
              <p className="final-cta__eyebrow mb-4 font-sans text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/70">
                A note from 5:55 AM Studio
              </p>

              <h2
                id="final-cta-heading"
                className="final-cta__title max-w-[14ch] font-display text-[clamp(2.2rem,4.2vw,4rem)] leading-[1.02] tracking-[-0.045em] text-[#f8f6f1]"
              >
                Good things start with
                <br />
                <span className="italic text-white/85">a conversation.</span>
              </h2>

              <p className="final-cta__description mt-5 max-w-sm text-sm leading-6 text-white/75">
                Have a website or web UI project in mind? Let&apos;s shape what
                comes next for your brand.
              </p>

              <Link
                className="final-cta__button mt-6 inline-flex min-h-10 items-center gap-3 rounded-full bg-[#f3f1ec] px-5 py-2.5 font-sans text-xs font-medium text-[#08090b]"
                href="/contact"
              >
                Start a project
                <span aria-hidden="true" className="final-cta__arrow">
                  ↗
                </span>
              </Link>
            </div>

            <div className="final-cta__aside hidden self-stretch md:block">
              <div className="flex h-full flex-col items-end justify-end text-right">
                <p className="final-cta__aside-label font-sans text-[0.625rem] uppercase tracking-[0.16em] text-white/65">
                  Independent by design
                </p>
                <p className="final-cta__aside-title mt-3 max-w-[12ch] font-display text-3xl leading-[1.05] tracking-[-0.04em] text-white/90 lg:text-4xl">
                  Thoughtful work begins with a good conversation.
                </p>
                <span
                  aria-hidden="true"
                  className="final-cta__rule mt-5 block h-px w-16 bg-white/45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .final-cta {
          --final-cta-ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .final-cta__panel {
          isolation: isolate;
          transform: translate3d(0, 0, 0);
          transition:
            border-color 900ms var(--final-cta-ease),
            box-shadow 1100ms var(--final-cta-ease);
        }

        .final-cta__image {
          transform: scale(1.055);
          opacity: 0.78;
          transition:
            transform 2200ms var(--final-cta-ease),
            opacity 1500ms var(--final-cta-ease);
          will-change: transform;
        }

        .final-cta__vignette {
          background: radial-gradient(
            ellipse at 70% 48%,
            transparent 15%,
            rgba(3, 8, 15, 0.12) 72%,
            rgba(3, 8, 15, 0.35) 100%
          );
          opacity: 0.8;
          transition: opacity 1400ms var(--final-cta-ease);
        }

        .final-cta__eyebrow,
        .final-cta__title,
        .final-cta__description,
        .final-cta__button,
        .final-cta__aside-label,
        .final-cta__aside-title,
        .final-cta__rule {
          opacity: 0;
          filter: blur(6px);
          transform: translate3d(0, 22px, 0);
          transition:
            opacity 1000ms var(--final-cta-ease),
            filter 1100ms var(--final-cta-ease),
            transform 1200ms var(--final-cta-ease);
          will-change: opacity, filter, transform;
        }

        .final-cta__eyebrow {
          transform: translate3d(0, 12px, 0);
          transition-delay: 100ms;
        }

        .final-cta__title {
          transition-delay: 190ms;
        }

        .final-cta__description {
          transition-delay: 320ms;
        }

        .final-cta__button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition:
            opacity 1000ms var(--final-cta-ease) 430ms,
            filter 1100ms var(--final-cta-ease) 430ms,
            transform 1200ms var(--final-cta-ease) 430ms,
            background-color 350ms var(--final-cta-ease),
            box-shadow 450ms var(--final-cta-ease);
        }

        .final-cta__button::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: linear-gradient(110deg, #ffffff 0%, #dedbd3 48%, #ffffff 100%);
          opacity: 0;
          transform: translateX(-18%);
          transition:
            opacity 450ms var(--final-cta-ease),
            transform 700ms var(--final-cta-ease);
        }

        .final-cta__button:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .final-cta__aside-label {
          transition-delay: 300ms;
        }

        .final-cta__aside-title {
          transition-delay: 420ms;
        }

        .final-cta__rule {
          transform: scaleX(0);
          transform-origin: right center;
          transition:
            opacity 800ms var(--final-cta-ease) 560ms,
            filter 800ms var(--final-cta-ease) 560ms,
            transform 1000ms var(--final-cta-ease) 560ms;
        }

        .final-cta.is-visible .final-cta__eyebrow,
        .final-cta.is-visible .final-cta__title,
        .final-cta.is-visible .final-cta__description,
        .final-cta.is-visible .final-cta__button,
        .final-cta.is-visible .final-cta__aside-label,
        .final-cta.is-visible .final-cta__aside-title {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .final-cta.is-visible .final-cta__rule {
          opacity: 1;
          filter: blur(0);
          transform: scaleX(1);
        }

        .final-cta.is-visible .final-cta__image {
          transform: scale(1);
          opacity: 1;
        }

        .final-cta.is-visible .final-cta__vignette {
          opacity: 1;
        }

        .final-cta__button:hover,
        .final-cta.is-visible .final-cta__button:hover {
          background-color: #ffffff;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
          transform: translate3d(0, -2px, 0);
        }

        .final-cta__button:focus-visible {
          outline: 2px solid rgba(243, 241, 236, 0.9);
          outline-offset: 4px;
        }

        .final-cta__arrow {
          display: inline-block;
          transition: transform 550ms var(--final-cta-ease);
        }

        .final-cta__button:hover .final-cta__arrow {
          transform: translate3d(3px, -2px, 0);
        }

        .final-cta__panel:hover {
          border-color: rgba(255, 255, 255, 0.14);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 767px) {
          .final-cta__image {
            transform: scale(1.025);
            background-position: 58% center;
          }

          .final-cta__eyebrow,
          .final-cta__title,
          .final-cta__description,
          .final-cta__button {
            filter: none;
            transform: translate3d(0, 14px, 0);
          }

          .final-cta.is-visible .final-cta__eyebrow,
          .final-cta.is-visible .final-cta__title,
          .final-cta.is-visible .final-cta__description,
          .final-cta.is-visible .final-cta__button {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .final-cta__image,
          .final-cta__vignette,
          .final-cta__eyebrow,
          .final-cta__title,
          .final-cta__description,
          .final-cta__button,
          .final-cta__aside-label,
          .final-cta__aside-title,
          .final-cta__rule,
          .final-cta__arrow,
          .final-cta__panel {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
