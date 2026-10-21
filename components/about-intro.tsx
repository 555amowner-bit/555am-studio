"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  {
    number: "01",
    icon: "◌",
    title: "Distinct by Design",
    description:
      "Every interface is shaped around your brand, creating a distinct identity instead of another template-driven website.",
  },
  {
    number: "02",
    icon: "✳",
    title: "Clarity Comes First",
    description:
      "Clear visual hierarchy and intuitive page flows help visitors understand your offer and find the information they need.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Details Make the Difference",
    description:
      "Thoughtful typography, spacing, responsive layouts, and interaction states make every screen feel intentional.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Purposeful Exploration",
    description:
      "We explore visual directions before refining the strongest concept for your brand, audience, and goals.",
  },
  {
    number: "05",
    icon: "◎",
    title: "Made Through Collaboration",
    description:
      "Your feedback is part of the process, helping us make considered decisions together at every important stage.",
  },
  {
    number: "06",
    icon: "◇",
    title: "Designed for the Next Step",
    description:
      "Organized layouts, reusable interface components, and responsive specifications help your development partner bring the design to life.",
  },
] as const;

export function AboutIntro() {
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
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealElements = section.querySelectorAll<HTMLElement>(
      ".about-intro__item, .about-intro__closing",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-intro"
      aria-labelledby="about-intro-heading"
      className={`about-intro editorial-section border-t border-white/10 bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 md:py-28 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="about-intro__heading mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-14">
          <p className="about-intro__eyebrow mb-5 inline-flex items-center rounded-full border border-white/[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.035))] px-5 py-2.5 font-sans text-[0.6875rem] font-medium tracking-[0.015em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_6px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
            Why 5:55 AM
          </p>

          <h2
            id="about-intro-heading"
            className="about-intro__title font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.04] tracking-[-0.05em] text-[#f3f1ec]"
          >
            Small studio. Close collaboration.
            <br />
            <span className="italic text-white/55">
              Care in every detail.
            </span>
          </h2>

          <p className="about-intro__lead mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
            Thoughtful website design built around your brand, your audience,
            and the details that make the experience feel distinctly yours.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <li
              key={principle.number}
              className="about-intro__item min-w-0"
              style={{ transitionDelay: `${100 + index * 115}ms` }}
            >
              <article className="about-intro__card group relative h-full overflow-hidden rounded-[1.35rem] border border-white/[0.09] bg-white/[0.035] p-5 sm:p-6">
                <div className="about-intro__card-glow" aria-hidden="true" />

                <div className="relative flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="about-intro__icon font-display text-2xl leading-none text-white/75"
                  >
                    {principle.icon}
                  </span>
                  <span className="font-sans text-[0.625rem] tracking-[0.14em] text-white/35">
                    {principle.number}
                  </span>
                </div>

                <h3 className="relative mt-5 font-sans text-sm font-medium tracking-[-0.02em] text-[#f3f1ec]">
                  {principle.title}
                </h3>

                <p className="relative mt-2 max-w-[32rem] font-sans text-xs leading-[1.75] text-white/60 sm:text-[0.8125rem]">
                  {principle.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="about-intro__closing mt-10 flex flex-col gap-4 pt-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
              The idea behind the name
            </p>
            <p className="mt-3 max-w-2xl font-display text-2xl leading-tight tracking-[-0.035em] text-[#f3f1ec] sm:text-3xl">
              A fresh start, with intention behind every decision.
            </p>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/60 sm:text-right">
            5:55 AM is a reminder that meaningful work starts with showing up,
            staying curious, and giving the details the attention they deserve.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-intro {
          --about-intro-ease: cubic-bezier(0.22, 1, 0.36, 1);
          isolation: isolate;
        }

        .about-intro__eyebrow,
        .about-intro__title,
        .about-intro__lead,
        .about-intro__item,
        .about-intro__closing {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity 1000ms var(--about-intro-ease),
            transform 1150ms var(--about-intro-ease);
          will-change: opacity, transform;
        }

        .about-intro__eyebrow {
          filter: blur(5px);
          transform: translate3d(0, 12px, 0);
          transition:
            opacity 850ms var(--about-intro-ease),
            filter 950ms var(--about-intro-ease),
            transform 950ms var(--about-intro-ease);
        }

        .about-intro__title {
          filter: blur(8px);
          transform: translate3d(0, 20px, 0);
          transition:
            opacity 1050ms var(--about-intro-ease) 100ms,
            filter 1150ms var(--about-intro-ease) 100ms,
            transform 1200ms var(--about-intro-ease) 100ms;
        }

        .about-intro__lead {
          filter: blur(5px);
          transition:
            opacity 950ms var(--about-intro-ease) 220ms,
            filter 1000ms var(--about-intro-ease) 220ms,
            transform 1050ms var(--about-intro-ease) 220ms;
        }

        .about-intro.is-visible .about-intro__eyebrow,
        .about-intro.is-visible .about-intro__title,
        .about-intro.is-visible .about-intro__lead {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .about-intro__item {
          filter: blur(6px);
          transition:
            opacity 1000ms var(--about-intro-ease),
            filter 1050ms var(--about-intro-ease),
            transform 1150ms var(--about-intro-ease);
          backface-visibility: hidden;
        }

        .about-intro__item.is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .about-intro__closing.is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .about-intro__card {
          isolation: isolate;
          transform: translateZ(0);
          transition:
            background-color 650ms var(--about-intro-ease),
            border-color 650ms var(--about-intro-ease),
            box-shadow 750ms var(--about-intro-ease),
            transform 750ms var(--about-intro-ease);
        }

        .about-intro__card-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          border-radius: inherit;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(255, 255, 255, 0.085),
              transparent 70%
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.035),
              transparent 55%
            );
          opacity: 0;
          transition: opacity 750ms var(--about-intro-ease);
        }

        .about-intro__card:hover {
          transform: translate3d(0, -5px, 0);
          border-color: rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.055);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.22);
        }

        .about-intro__card:hover .about-intro__card-glow {
          opacity: 1;
        }

        .about-intro__icon {
          display: inline-block;
          transform-origin: center;
          transition:
            color 600ms var(--about-intro-ease),
            transform 700ms var(--about-intro-ease);
        }

        .about-intro__card:hover .about-intro__icon {
          color: rgba(243, 241, 236, 1);
          transform: translate3d(0, -2px, 0) rotate(5deg);
        }

        .about-intro__closing {
          transition-delay: 260ms;
        }

        @media (max-width: 767px) {
          .about-intro__eyebrow,
          .about-intro__title,
          .about-intro__lead,
          .about-intro__item,
          .about-intro__closing {
            transform: translate3d(0, 16px, 0);
          }

          .about-intro__eyebrow,
          .about-intro__title,
          .about-intro__lead {
            filter: none;
          }

          .about-intro__card:hover {
            transform: translate3d(0, -2px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-intro__eyebrow,
          .about-intro__title,
          .about-intro__lead,
          .about-intro__item,
          .about-intro__closing {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
            will-change: auto;
          }

          .about-intro__card,
          .about-intro__card-glow,
          .about-intro__icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
