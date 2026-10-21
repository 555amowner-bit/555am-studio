"use client";

import { useEffect, useRef, useState } from "react";

const process = [
  {
    number: "01",
    title: "Discover & Define",
    description:
      "We get to know your brand, audience, and goals, then set a clear direction for the project.",
    image: "/images/maison-concept.png",
    imageAlt: "Editorial beauty studio website concept",
  },
  {
    number: "02",
    title: "Explore & Design",
    description:
      "We turn the brief into visual concepts, responsive layouts, and thoughtful UI, refining together.",
    image: "/images/noir-concept.png",
    imageAlt: "High-contrast barber website concept",
  },
  {
    number: "03",
    title: "Refine & Deliver",
    description:
      "We polish the details and prepare organized designs, components, and guidance for development.",
    image: "/images/aura-concept.png",
    imageAlt: "Calm skincare website concept",
  },
] as const;

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleBlocks, setVisibleBlocks] = useState<Set<string>>(
    () => new Set(),
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const targets = Array.from(
      section.querySelectorAll<HTMLElement>("[data-process-reveal]"),
    );

    const revealAll = () => {
      setVisibleBlocks(new Set(targets.map((target) => target.dataset.processReveal ?? "")));
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => (entry.target as HTMLElement).dataset.processReveal ?? "");

        if (newlyVisible.length > 0) {
          setVisibleBlocks((current) => {
            const next = new Set(current);
            newlyVisible.forEach((key) => next.add(key));
            return next;
          });

          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="editorial-section how-process bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 md:py-28"
    >
      <div className="site-container">
        <div
          data-process-reveal="intro"
          className={`how-process__intro mx-auto mb-12 max-w-2xl text-center sm:mb-14 ${
            visibleBlocks.has("intro") ? "is-visible" : ""
          }`}
        >
          <p className="how-process__eyebrow mb-5 inline-flex items-center rounded-full border border-white/[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.035))] px-5 py-2.5 font-sans text-[0.6875rem] font-medium tracking-[0.015em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_6px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
            Our process
          </p>

          <h2
            id="how-we-work-heading"
            className="how-process__heading mx-auto max-w-[22ch] font-display text-[clamp(2.15rem,4vw,3.5rem)] leading-[1.04] tracking-[-0.045em] text-[#f3f1ec]"
          >
            From <span className="text-white">first idea</span> to{" "}
            <span className="text-white">final interface</span> in three considered steps.
          </h2>

          <p className="how-process__subline mx-auto mt-5 max-w-md text-xs leading-6 text-white/40 sm:text-sm">
            A thoughtful process, from the first conversation to the final handoff.
          </p>
        </div>

        <ol
          aria-label="Three steps in the 5:55 AM design process"
          className="how-process__grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {process.map((item, index) => (
            <li
              key={item.number}
              data-process-reveal={`step-${item.number}`}
              className={`how-process__item min-w-0 ${
                visibleBlocks.has(`step-${item.number}`) ? "is-visible" : ""
              }`}
              style={{ "--process-index": index } as React.CSSProperties}
            >
              <article className="how-process__card group h-full rounded-[1.6rem] border border-white/[0.12] bg-[#111214] p-2 transition-[background-color,border-color,box-shadow,transform] duration-500 hover:border-white/25 hover:bg-[#17181a] hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <div className="how-process__visual relative aspect-[1.2/1] overflow-hidden rounded-[1.15rem] bg-[#111c2b]">
                  <div
                    aria-hidden="true"
                    className="how-process__image absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <div
                    aria-hidden="true"
                    className="how-process__shade absolute inset-0 bg-gradient-to-t from-[#08090b]/45 via-transparent to-[#07101e]/10"
                  />
                  <div
                    aria-hidden="true"
                    className="how-process__image-glint absolute inset-0"
                  />

                  <div className="how-process__meta absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className="how-process__number inline-flex items-center rounded-full border border-white/20 bg-black/25 px-2.5 py-1 font-sans text-[0.625rem] tracking-[0.12em] text-white/85 backdrop-blur-sm">
                      {item.number}
                    </span>
                    <span className="how-process__step-label font-sans text-[0.55rem] uppercase tracking-[0.16em] text-white/0">
                      Step {item.number}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="how-process__corner-mark absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm text-white/80"
                  >
                    ↗
                  </span>
                </div>

                <div className="how-process__copy px-2 pb-3 pt-5 sm:px-2.5 sm:pb-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="how-process__copy-number font-sans text-[0.6rem] tracking-[0.14em] text-white/35">
                      {item.number}
                    </span>
                    <span className="how-process__rule h-px w-7 bg-white/15" />
                    <span className="font-sans text-[0.58rem] uppercase tracking-[0.12em] text-white/35">
                      {index === 0
                        ? "The foundation"
                        : index === 1
                          ? "The direction"
                          : "The finish"}
                    </span>
                  </div>

                  <h3 className="how-process__title font-sans text-[0.9rem] font-medium tracking-[-0.025em] text-[#f3f1ec]">
                    {item.title}
                  </h3>
                  <p className="how-process__description mt-2 max-w-[34rem] font-sans text-xs leading-[1.7] text-white/60 sm:text-[0.8125rem]">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <style jsx>{`
        .how-process {
          --process-ease: cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          isolation: isolate;
        }

        .how-process__intro,
        .how-process__item {
          opacity: 0;
          transform: translate3d(0, 34px, 0);
          filter: blur(9px);
          transition:
            opacity 900ms var(--process-ease),
            transform 1100ms var(--process-ease),
            filter 1000ms var(--process-ease);
        }

        .how-process__heading {
          clip-path: inset(0 0 100% 0);
          transition: clip-path 1200ms var(--process-ease);
        }

        .how-process__subline {
          opacity: 0;
          filter: blur(5px);
          transform: translate3d(0, 16px, 0);
          transition:
            opacity 800ms var(--process-ease) 250ms,
            filter 900ms var(--process-ease) 250ms,
            transform 900ms var(--process-ease) 250ms;
        }

        .how-process__intro.is-visible,
        .how-process__item.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }

        .how-process__intro.is-visible .how-process__heading {
          clip-path: inset(0 0 -5% 0);
        }

        .how-process__intro.is-visible .how-process__subline {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .how-process__item {
          transition-delay: calc(180ms + var(--process-index) * 150ms);
        }

        .how-process__card {
          background-image: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.025),
            transparent 58%
          );
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .how-process__visual {
          isolation: isolate;
          perspective: 1000px;
        }

        .how-process__image {
          transform: scale(1.12) translate3d(0, 1.5%, 0);
          filter: saturate(0.78) brightness(0.76);
          transition:
            transform 1500ms var(--process-ease),
            filter 1100ms var(--process-ease);
          will-change: transform;
        }

        .how-process__item:hover .how-process__image {
          transform: scale(1.055) translate3d(0, 0, 0);
          filter: saturate(0.98) brightness(0.94);
        }

        .how-process__shade {
          opacity: 0.8;
          transition: opacity 800ms var(--process-ease);
        }

        .how-process__item:hover .how-process__shade {
          opacity: 0.45;
        }

        .how-process__image-glint {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255, 255, 255, 0.09) 46%,
            transparent 68%
          );
          opacity: 0;
          transform: translate3d(-45%, 0, 0);
          transition:
            opacity 500ms ease,
            transform 1100ms var(--process-ease);
          pointer-events: none;
        }

        .how-process__item:hover .how-process__image-glint {
          opacity: 1;
          transform: translate3d(45%, 0, 0);
        }

        .how-process__number {
          transition:
            border-color 500ms var(--process-ease),
            background-color 500ms var(--process-ease),
            color 500ms var(--process-ease);
        }

        .how-process__item:hover .how-process__number {
          border-color: rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.48);
          color: #fff;
        }

        .how-process__step-label {
          transition: color 500ms var(--process-ease);
        }

        .how-process__item:hover .how-process__step-label {
          color: rgba(255, 255, 255, 0.68);
        }

        .how-process__corner-mark {
          opacity: 0;
          transform: translate3d(-4px, 4px, 0) rotate(-12deg);
          transition:
            opacity 500ms var(--process-ease),
            transform 600ms var(--process-ease),
            border-color 500ms var(--process-ease);
        }

        .how-process__item:hover .how-process__corner-mark {
          opacity: 1;
          transform: translate3d(0, 0, 0) rotate(0);
          border-color: rgba(255, 255, 255, 0.42);
        }

        .how-process__title {
          transition: transform 650ms var(--process-ease);
        }

        .how-process__item:hover .how-process__title {
          transform: translate3d(3px, 0, 0);
        }

        .how-process__rule {
          width: 1.75rem;
          transform-origin: left center;
          transition:
            width 650ms var(--process-ease),
            background-color 500ms var(--process-ease);
        }

        .how-process__item:hover .how-process__rule {
          width: 2.05rem;
          background-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 767px) {
          .how-process__intro,
          .how-process__item {
            filter: none;
            transform: translate3d(0, 18px, 0);
          }

          .how-process__item {
            transition-delay: calc(80ms + var(--process-index) * 90ms);
          }

          .how-process__image-glint,
          .how-process__corner-mark,
          .how-process__step-label {
            display: none;
          }

          .how-process__image {
            transform: scale(1.035);
            filter: none;
          }

          .how-process__item:hover .how-process__image {
            transform: scale(1.06);
            filter: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .how-process__intro,
          .how-process__item,
          .how-process__heading,
          .how-process__subline,
          .how-process__image,
          .how-process__shade,
          .how-process__image-glint,
          .how-process__number,
          .how-process__step-label,
          .how-process__corner-mark,
          .how-process__title,
          .how-process__rule {
            opacity: 1;
            filter: none;
            clip-path: none;
            transform: none;
            transition: none;
          }

          .how-process__image-glint,
          .how-process__corner-mark,
          .how-process__step-label {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
