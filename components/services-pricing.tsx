"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { servicePlans as services } from "@/data/services";



function OdometerPrice({ value, currency }: { value: string; currency: "VND" | "USD" }) {
  return (
    <span
      className="services-pricing__odometer"
      aria-label={value}
      aria-live="polite"
      aria-atomic="true"
    >
      <span aria-hidden="true" className="services-pricing__odometer-track">
        {Array.from(value).map((character, index) => {
          const isDigit = /\d/.test(character);

          return (
            <span
              key={`${currency}-${index}-${character}`}
              className={`services-pricing__odometer-char ${
                isDigit
                  ? "services-pricing__odometer-digit"
                  : "services-pricing__odometer-symbol"
              }`}
              style={
                {
                  "--odometer-index": index,
                } as CSSProperties
              }
            >
              {character === " " ? "\u00a0" : character}
            </span>
          );
        })}
      </span>
    </span>
  );
}

export function ServicesPricing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<Set<string>>(() => new Set());
  const [currency, setCurrency] = useState<"VND" | "USD">("VND");

  // Pricing is configured separately for each market, not calculated from FX.
  const pricingByPlan: Record<string, { VND: string; USD: string }> = {
    START: { VND: "2.500.000₫", USD: "$120" },
    BUSINESS: { VND: "5.000.000₫", USD: "$300" },
    CUSTOM: { VND: "From 10.000.000₫", USD: "From $600" },
  };

  const getPlanPrice = (name: string, fallbackPrice: string) => {
    const key = name.trim().toUpperCase();
    const configuredPrice = pricingByPlan[key]?.[currency];
    if (configuredPrice) {
      return key === "CUSTOM" && currency === "VND"
        ? "From 10.000.000₫"
        : configuredPrice;
    }
    return fallbackPrice;
  };

  const scopeByPlan: Record<
    string,
    { label: string; details: string[]; timeline: string }
  > = {
    START: {
      label: "Project scope",
      details: [
        "1 landing page · up to 8 sections",
        "Desktop + mobile designs",
        "2 revision rounds",
        "Figma design file handoff",
      ],
      timeline: "Estimated: 5–7 business days",
    },
    BUSINESS: {
      label: "Project scope",
      details: [
        "Up to 5 unique website pages",
        "Desktop + mobile designs",
        "Core interface components",
        "3 revision rounds",
        "Figma design file handoff",
      ],
      timeline: "Estimated: 10–15 business days",
    },
    CUSTOM: {
      label: "Project scope",
      details: [
        "Pages and screens defined in the proposal",
        "Desktop + mobile designs",
        "Purpose-built components and a project-specific design system, as scoped",
        "Revision rounds stated in the proposal",
        "Figma design file handoff",
      ],
      timeline: "Timeline confirmed per project",
    },
  };

  const getPlanScope = (name: string) => scopeByPlan[name.trim().toUpperCase()];

  const includedByPlan: Record<string, string[]> = {
    START: [
      "Focused landing page UI layout",
      "Desktop + mobile responsive designs",
      "Clear call-to-action layout",
      "Core interface components",
      "Figma design handoff",
    ],
    BUSINESS: [
      "Up to 5 unique website pages",
      "Desktop + mobile responsive designs",
      "Services, menu, or gallery page layouts",
      "Contact and location page layouts",
      "Consistent visual system and reusable UI components",
      "Figma design handoff",
    ],
    CUSTOM: [
      "Bespoke website UI tailored to project requirements",
      "Advanced page layouts and interaction flows, where required",
      "Purpose-built interface components for unique requirements",
      "Project-specific information architecture and complex content structures, where required",
      "Project-specific design system and detailed handoff",
    ],
  };

  const getIncludedItems = (name: string, fallbackItems: string[]) =>
    includedByPlan[name.trim().toUpperCase()] ?? fallbackItems;

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
      style={
        {
          "--odometer-duration": "900ms",
        } as CSSProperties
      }
      aria-labelledby="services-pricing-heading"
      className="services-pricing editorial-section border-t border-white/10 bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 md:py-32"
    >
      <style>{`
        .services-pricing__currency-indicator {
          transition: transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;\n          backface-visibility: hidden;
        }

        .services-pricing__odometer {
          display: inline-block;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
          perspective: 700px;
        }

        .services-pricing__odometer-track {
          display: inline-flex;
          align-items: baseline;
          white-space: pre;
        }

        .services-pricing__odometer-char {
          display: inline-block;
          transform-origin: 50% 55%;
          backface-visibility: hidden;
        }

        .services-pricing__odometer-digit {
          animation: services-pricing-odometer-flip var(--odometer-duration, 620ms)
            cubic-bezier(0.2, 0.75, 0.25, 1) both;
          animation-delay: calc(min(var(--odometer-index, 0), 9) * 32ms);
        }

        .services-pricing__odometer-symbol {
          animation: services-pricing-odometer-symbol var(--odometer-duration, 620ms)
            cubic-bezier(0.2, 0.75, 0.25, 1) both;
          animation-delay: calc(min(var(--odometer-index, 0), 9) * 24ms);
        }

        @keyframes services-pricing-odometer-flip {
          0% {
            opacity: 0;
            transform: rotateX(-82deg) translateY(0.18em);
            filter: blur(3px);
          }
          55% {
            opacity: 1;
            transform: rotateX(12deg) translateY(-0.025em);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: rotateX(0) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes services-pricing-odometer-symbol {
          0% {
            opacity: 0;
            transform: translateY(0.18em);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-pricing__odometer-char {
            animation: none !important;
          }

          .services-pricing__currency-indicator {
            transition: none !important;
          }
        }
      `}</style>
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

        {/* Currency switcher */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
          <div
            aria-label="Choose pricing currency"
            className="services-pricing__currency-switch relative inline-flex min-w-[13.25rem] items-center gap-1 rounded-full border border-white/10 bg-[#111214] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            role="group"
          >
            <span
              aria-hidden="true"
              className="services-pricing__currency-indicator pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full border-2 border-[#f3f1ec] bg-[#f3f1ec] shadow-[0_1px_8px_rgba(0,0,0,0.22)]"
              style={{
                transform:
                  currency === "USD"
                    ? "translateX(calc(100% + 0.25rem))"
                    : "translateX(0)",
              }}
            />
            {(["VND", "USD"] as const).map((option) => {
              const isActive = currency === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCurrency(option)}
                  className={`relative z-10 min-h-10 flex-1 rounded-full px-5 text-xs font-medium tracking-[0.04em] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? "text-[#08090b]"
                      : "text-white/60 hover:text-[#f3f1ec]"
                  }`}
                >
                  {option === "VND" ? "VND ₫" : "USD $"}
                </button>
              );
            })}
          </div>
          <p className="text-center text-xs leading-5 text-white/35">
            {currency === "VND"
              ? "Pricing for clients in Vietnam."
              : "Pricing for international clients."}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 md:grid-cols-3 md:gap-4 lg:gap-5">
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
                <OdometerPrice
                  value={getPlanPrice(service.name, service.price)}
                  currency={currency}
                />
              </p>

              <p className="mt-4 min-h-[3.5rem] text-sm leading-6 text-white/50">
                {service.description}
              </p>

              {/* Clear deliverables and boundaries for each package */}
              {getPlanScope(service.name) && (
                <div className="services-pricing__scope mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <p className="mb-3 text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
                    {getPlanScope(service.name).label}
                  </p>
                  <ul className="space-y-2.5">
                    {getPlanScope(service.name).details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-xs leading-5 text-white/65"
                      >
                        <span aria-hidden="true" className="mt-[2px] text-white/45">
                          —
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 border-t border-white/[0.08] pt-3 text-[0.6875rem] leading-5 text-white/40">
                    {getPlanScope(service.name).timeline}
                  </p>
                </div>
              )}

              {/* Project inquiry button */}
              <Link
                href="/contact"
                className={`services-pricing__cta mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-4 text-sm font-medium ${
                  service.featured
                    ? "bg-[#f3f1ec] text-[#101114] hover:bg-white"
                    : "border border-white/15 bg-white/[0.04] text-[#f3f1ec] hover:bg-white/[0.10]"
                }`}
              >
                {service.featured || service.name === "CUSTOM" ? "Discuss Your Project" : "Get Started"}
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
                  {getIncludedItems(service.name, service.items).map((detail, detailIndex) => (
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
                  {service.name === "CUSTOM" ? "Final pricing depends on project scope and requirements." : "Listed price applies to the scope outlined above."}
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
      <div className="services-pricing__terms mx-auto mt-12 max-w-5xl rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.625rem] uppercase tracking-[0.18em] text-white/40">
              Before we begin
            </p>
            <h3 className="mt-2 text-lg font-medium tracking-[-0.03em] text-white/90 sm:text-xl">
              Project Terms
            </h3>
          </div>
          <p className="max-w-md text-xs leading-5 text-white/45">
            Clear expectations keep every project focused, collaborative, and on schedule.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-medium text-white/80">Design-only service</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              All packages cover UI design and Figma handoff only. Website development,
              source code, CMS setup, hosting, domain, and third-party integrations are
              not included unless separately agreed in writing.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-white/80">Page and section limits</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              A page means one unique website page, not an individual section or a
              responsive version. START includes one landing page with up to 8 sections.
              BUSINESS includes up to 5 unique pages.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-white/80">Responsive design</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              START and BUSINESS include desktop and mobile designs. Tablet-specific
              layouts are not included by default and can be quoted separately.
              CUSTOM follows the responsive scope stated in its proposal.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-white/80">Revisions and scope changes</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              One revision round means one consolidated list of feedback on the agreed
              design direction. New pages, new features, a major direction change, or
              additional revision rounds may require a separate quote and timeline.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-white/80">Content and assets</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              The client supplies final copy, brand assets, and required project
              materials. Copywriting, photography, illustration, stock assets, fonts,
              or other paid resources are not included unless listed in the proposal.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-white/80">Timeline and handoff</h4>
            <p className="mt-1.5 text-xs leading-5 text-white/50">
              Estimated timelines begin once the required content and agreed initial
              payment are received. Delayed feedback may affect delivery. Final Figma
              files are handed over according to the agreed payment and delivery terms.
            </p>
          </div>
        </div>
      </div>
</section>
  );
}
