"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { servicePlans as services } from "@/data/services";



export function ServicesPricing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(
      section.querySelectorAll<HTMLElement>("[data-services-reveal]"),
    );

    const revealAll = () => {
      setVisible(new Set(targets.map((target) => target.dataset.servicesReveal ?? "")));
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
        const keys = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => (entry.target as HTMLElement).dataset.servicesReveal ?? "");

        if (keys.length) {
          setVisible((current) => {
            const next = new Set(current);
            keys.forEach((key) => next.add(key));
            return next;
          });

          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-pricing"
      aria-labelledby="services-pricing-heading"
      className="services-pricing editorial-section border-t border-white/10 bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 md:py-32"
    >
      <div className="site-container">
        {/* Section heading */}
        <div
          data-services-reveal="intro"
          className={`services-pricing__intro mx-auto max-w-2xl text-center ${visible.has("intro") ? "is-visible" : ""}`}
        >
          <p className="services-pricing__eyebrow mb-5 inline-flex items-center rounded-full border border-white/[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.035))] px-5 py-2.5 font-sans text-[0.6875rem] font-medium tracking-[0.015em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_6px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
            Our services
          </p>

          <h2
            id="services-pricing-heading"
            className="services-pricing__heading font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.055em] text-[#f3f1ec]"
          >
            Thoughtful design.
            <br />
            <span className="italic text-white/65">
              Clear project pricing.
            </span>
          </h2>

          <p className="services-pricing__description mx-auto mt-5 max-w-[34rem] text-sm leading-7 text-white/50 sm:text-base">
            Choose the scope that fits your business. Every project is
            tailored to your needs, with transparent starting prices and
            a clear design handoff.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:mt-16 md:grid-cols-3 md:gap-4 lg:gap-5">
          {services.map((service, index) => (
            <article
              key={service.number}
              data-services-reveal={`card-${service.number}`}
              style={{ "--service-index": index } as CSSProperties}
              className={`services-pricing__card group/service relative flex min-w-0 flex-col rounded-[1.5rem] border p-5 sm:p-6 lg:p-7 ${visible.has(`card-${service.number}`) ? "is-visible" : ""} ${
                service.featured
                  ? "services-pricing__card--featured border-white/25 bg-[#151619]"
                  : "border-white/[0.10] bg-[#0d0e10]"
              }`}
            >
              {/* Card header */}
              <div className="flex min-h-7 items-center justify-between gap-3">
                <span className="font-sans text-xs tracking-[0.13em] text-white/45">
                  {service.number}
                </span>

                {service.featured && (
                  <span className="services-pricing__recommended rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-sans text-[0.625rem] text-white/75">
                    Recommended
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-display text-3xl tracking-[-0.04em] text-[#f3f1ec] sm:text-4xl">
                {service.name}
              </h3>

              <p className="mt-4 font-display text-[clamp(1.65rem,2.5vw,2.25rem)] leading-tight tracking-[-0.045em] text-[#f3f1ec]">
                {service.price}
              </p>

              <p className="mt-4 min-h-[3.5rem] text-sm leading-6 text-white/50">
                {service.description}
              </p>

              {/* Project inquiry button */}
              <Link
                href="/contact"
                className={`services-pricing__cta mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-4 text-sm font-medium ${
                  service.featured
                    ? "bg-[#f3f1ec] text-[#101114] hover:bg-white"
                    : "border border-white/15 bg-white/[0.04] text-[#f3f1ec] hover:bg-white/[0.10]"
                }`}
              >
                {service.featured ? "Discuss Your Project" : "Get Started"}
                <span aria-hidden="true" className="services-pricing__arrow text-base">
                  ↗
                </span>
              </Link>

              {/* Included features */}
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="mb-5 text-[0.625rem] uppercase tracking-[0.16em] text-white/35">
                  What&apos;s included
                </p>

                <ul className="services-pricing__details space-y-3">
                  {service.items.map((detail, detailIndex) => (
                    <li
                      key={detail}
                      style={{ "--detail-index": detailIndex } as CSSProperties}
                      className="services-pricing__detail flex items-start gap-3 text-sm leading-5 text-white/65"
                    >
                      <span
                        aria-hidden="true"
                        className="services-pricing__check mt-0.5 shrink-0 text-white/65"
                      >
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom note */}
              <div className="mt-auto pt-7">
                <p className="border-t border-white/[0.07] pt-4 text-xs leading-5 text-white/35">
                  Final pricing depends on project scope and requirements.
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Design handoff */}
        <aside
          data-services-reveal="handoff"
          aria-labelledby="design-handoff-heading"
          className={`services-pricing__handoff mt-12 rounded-[1.25rem] border border-white/10 bg-[#0d0e10] p-6 sm:mt-16 sm:p-8 md:p-10 ${visible.has("handoff") ? "is-visible" : ""}`}
        >
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
                Included in our approach
              </p>

              <h3
                id="design-handoff-heading"
                className="services-pricing__handoff-title mt-4 font-display text-3xl leading-tight tracking-[-0.045em] text-[#f3f1ec] sm:text-4xl"
              >
                Ready for the next step.
              </h3>
            </div>

            <div>
              <p className="max-w-[35rem] text-sm leading-7 text-white/55 sm:text-base">
                Organized UI layouts, responsive designs, visual systems,
                and interface components prepared for handoff to your
                development partner.
              </p>

              <Link
                href="/contact"
                className="services-pricing__text-link mt-6 inline-flex items-center gap-3 text-sm text-[#f3f1ec]"
              >
                Let&apos;s discuss your requirements
                <span aria-hidden="true" className="services-pricing__arrow">↗</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Custom project inquiry */}
        <div
          data-services-reveal="custom-quote"
          className={`services-pricing__custom mt-10 flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between ${visible.has("custom-quote") ? "is-visible" : ""}`}
        >
          <p className="max-w-lg text-sm leading-6 text-white/45">
            Have a project that doesn&apos;t fit these options? Let&apos;s
            define the right scope together.
          </p>

          <Link
            href="/contact"
            className="services-pricing__custom-cta inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm text-[#f3f1ec]"
          >
            Request a custom quote
            <span aria-hidden="true" className="services-pricing__arrow">↗</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services-pricing {
          --services-ease: cubic-bezier(0.22, 1, 0.36, 1);
          isolation: isolate;
        }

        /* Scroll reveal: calm movement, clear focus, no abrupt clipping. */
        .services-pricing__intro,
        .services-pricing__card,
        .services-pricing__handoff,
        .services-pricing__custom {
          opacity: 0;
          transform: translate3d(0, 28px, 0);
          transition:
            opacity 1050ms var(--services-ease),
            transform 1250ms var(--services-ease);
          will-change: opacity, transform;
        }

        .services-pricing__intro.is-visible,
        .services-pricing__card.is-visible,
        .services-pricing__handoff.is-visible,
        .services-pricing__custom.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .services-pricing__eyebrow {
          opacity: 0;
          filter: blur(5px);
          transform: translate3d(0, 10px, 0);
          transition:
            opacity 800ms var(--services-ease) 80ms,
            filter 900ms var(--services-ease) 80ms,
            transform 950ms var(--services-ease) 80ms;
        }

        .services-pricing__intro.is-visible .services-pricing__eyebrow {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .services-pricing__heading {
          opacity: 0;
          filter: blur(9px);
          transform: translate3d(0, 20px, 0);
          transition:
            opacity 1050ms var(--services-ease) 120ms,
            filter 1150ms var(--services-ease) 120ms,
            transform 1200ms var(--services-ease) 120ms;
        }

        .services-pricing__intro.is-visible .services-pricing__heading {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .services-pricing__heading span {
          display: inline-block;
          transition: color 700ms var(--services-ease);
        }

        .services-pricing__description {
          opacity: 0;
          filter: blur(6px);
          transform: translate3d(0, 14px, 0);
          transition:
            opacity 950ms var(--services-ease) 260ms,
            filter 1000ms var(--services-ease) 260ms,
            transform 1050ms var(--services-ease) 260ms;
        }

        .services-pricing__intro.is-visible .services-pricing__description {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        /* Cards settle in one after another, then respond smoothly to hover. */
        .services-pricing__card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition-property: opacity, transform, filter, background-color, border-color, box-shadow;
          transition-duration: 950ms, 1200ms, 1000ms, 500ms, 500ms, 700ms;
          transition-timing-function: var(--services-ease);
          transition-delay: calc(110ms + var(--service-index) * 145ms);
          background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.025), transparent 58%);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          backface-visibility: hidden;
        }

        .services-pricing__card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          border-radius: inherit;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.075), transparent 68%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.025), transparent 48%);
          opacity: 0;
          transition: opacity 750ms var(--services-ease);
        }

        .services-pricing__card--featured {
          background-color: #151619;
          box-shadow: 0 12px 38px rgba(0, 0, 0, 0.16);
        }

        .services-pricing__card:hover {
          transform: translate3d(0, -5px, 0) scale(1.006);
          border-color: rgba(255, 255, 255, 0.26);
          background-color: #141518;
          box-shadow: 0 22px 58px rgba(0, 0, 0, 0.28);
          transition-delay: 0ms;
        }

        .services-pricing__card:hover::before {
          opacity: 1;
        }

        .services-pricing__card--featured:hover {
          border-color: rgba(255, 255, 255, 0.38);
          background-color: #191a1d;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
        }

        .services-pricing__recommended {
          transition:
            border-color 500ms var(--services-ease),
            background-color 500ms var(--services-ease),
            color 500ms var(--services-ease),
            transform 600ms var(--services-ease);
        }

        .services-pricing__card--featured:hover .services-pricing__recommended {
          border-color: rgba(255, 255, 255, 0.22);
          background-color: rgba(255, 255, 255, 0.11);
          color: #fff;
          transform: translate3d(0, -1px, 0);
        }

        .services-pricing__cta {
          transition:
            color 400ms var(--services-ease),
            background-color 400ms var(--services-ease),
            border-color 400ms var(--services-ease),
            box-shadow 550ms var(--services-ease),
            transform 550ms var(--services-ease);
        }

        .services-pricing__cta:hover {
          transform: translate3d(0, -2px, 0);
        }

        .services-pricing__card:not(.services-pricing__card--featured) .services-pricing__cta:hover {
          border-color: rgba(255, 255, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .services-pricing__card--featured .services-pricing__cta:hover {
          background-color: #fff;
          box-shadow: 0 8px 26px rgba(255, 255, 255, 0.1);
        }

        .services-pricing__arrow {
          display: inline-block;
          transition: transform 500ms var(--services-ease);
        }

        .services-pricing__cta:hover .services-pricing__arrow,
        .services-pricing__text-link:hover .services-pricing__arrow,
        .services-pricing__custom-cta:hover .services-pricing__arrow {
          transform: translate3d(3px, -3px, 0);
        }

        .services-pricing__detail {
          opacity: 0;
          transform: translate3d(0, 6px, 0);
          transition:
            opacity 700ms var(--services-ease),
            transform 750ms var(--services-ease);
          transition-delay: calc(250ms + var(--service-index) * 90ms + var(--detail-index) * 38ms);
        }

        .services-pricing__card.is-visible .services-pricing__detail {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .services-pricing__check {
          transition:
            color 400ms var(--services-ease),
            transform 500ms var(--services-ease);
        }

        .services-pricing__card:hover .services-pricing__check {
          color: rgba(255, 255, 255, 0.95);
          transform: translate3d(1px, 0, 0);
        }

        .services-pricing__handoff {
          transition-delay: 100ms;
          background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.03), transparent 55%);
        }

        .services-pricing__handoff-title {
          transition: transform 700ms var(--services-ease);
        }

        .services-pricing__handoff:hover .services-pricing__handoff-title {
          transform: translate3d(2px, 0, 0);
        }

        .services-pricing__text-link,
        .services-pricing__custom-cta {
          transition:
            color 400ms var(--services-ease),
            background-color 400ms var(--services-ease),
            border-color 400ms var(--services-ease),
            opacity 400ms var(--services-ease);
        }

        .services-pricing__text-link:hover {
          opacity: 1;
          transform: translate3d(2px, 0, 0);
        }

        .services-pricing__text-link {
          transition:
            color 450ms var(--services-ease),
            opacity 450ms var(--services-ease),
            transform 500ms var(--services-ease);
        }

        .services-pricing__custom {
          transition-delay: 140ms;
        }

        .services-pricing__custom-cta {
          position: relative;
          overflow: hidden;
          transition:
            border-color 450ms var(--services-ease),
            background-color 450ms var(--services-ease),
            color 450ms var(--services-ease),
            box-shadow 550ms var(--services-ease),
            transform 550ms var(--services-ease);
        }

        .services-pricing__custom-cta:hover {
          border-color: rgba(255, 255, 255, 0.42);
          background-color: #f3f1ec;
          color: #08090b;
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
        }

        .services-pricing__handoff {
          transition:
            border-color 600ms var(--services-ease),
            background-color 600ms var(--services-ease),
            box-shadow 700ms var(--services-ease),
            transform 700ms var(--services-ease);
        }

        .services-pricing__handoff:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background-color: #111214;
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 767px) {
          .services-pricing__intro,
          .services-pricing__card,
          .services-pricing__handoff,
          .services-pricing__custom {
            transform: translate3d(0, 18px, 0);
          }

          .services-pricing__eyebrow,
          .services-pricing__heading,
          .services-pricing__description {
            filter: none;
          }

          .services-pricing__card {
            transition-delay: calc(80ms + var(--service-index) * 90ms);
          }

          .services-pricing__detail {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-pricing__intro,
          .services-pricing__card,
          .services-pricing__handoff,
          .services-pricing__custom,
          .services-pricing__eyebrow,
          .services-pricing__heading,
          .services-pricing__description,
          .services-pricing__detail,
          .services-pricing__recommended,
          .services-pricing__cta,
          .services-pricing__arrow,
          .services-pricing__check,
          .services-pricing__handoff-title {
            opacity: 1;
            filter: none;
            clip-path: none;
            transform: none;
            transition: none;
          }

          .services-pricing__card::before {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
