
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  href: string;
  theme: "paper" | "ink" | "light";
  kind: "client" | "concept";
};

const projects: Project[] = [
  {
    number: "01",
    name: "MAISON HAIR STUDIO",
    category: "Beauty / Web Design",
    description:
      "An editorial direction for a contemporary hair studio, built around atmosphere, clarity, and a slower visual rhythm.",
    href: "/work/maison-hair-studio",
    theme: "paper",
    kind: "concept",
  },
  {
    number: "02",
    name: "NOIR BARBER",
    category: "Grooming / Web Design",
    description:
      "A structured monochrome direction for a modern barber, balancing strong typography with a focused service experience.",
    href: "/work/noir-barber",
    theme: "ink",
    kind: "concept",
  },
  {
    number: "03",
    name: "AURA SKIN",
    category: "Beauty / Web Design",
    description:
      "A calm, image-led concept for a skincare studio with emphasis on space, rhythm, and considered presentation.",
    href: "/work/aura-skin",
    theme: "light",
    kind: "concept",
  },
];

function ProjectVisual({
  name,
  theme,
}: {
  name: string;
  theme: "paper" | "ink" | "light";
}) {
  if (theme === "ink") {
    return (
      <div
        aria-hidden="true"
        className="project-visual relative aspect-[1.08] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#08090b] p-2.5 transition-transform duration-500 ease-out group-hover/project:scale-[1.01] sm:p-3"
      >
        <div className="flex h-full flex-col rounded-[0.65rem] border border-white/10 bg-[#08090b] text-[#f3f1ec]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4">
            <span className="text-[0.55rem] font-semibold tracking-[0.16em]">
              NOIR / 55
            </span>
            <span className="text-[0.5rem] uppercase tracking-[0.12em] text-white/45">
              Concept
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[1.1fr_0.9fr] gap-3 p-3 sm:gap-4 sm:p-4">
            <div className="flex min-h-0 flex-col justify-between border border-white/15 p-3 sm:p-5">
              <div>
                <p className="text-[0.5rem] uppercase tracking-[0.14em] text-white/45">
                  Cut / Shape / Finish
                </p>
                <p className="mt-5 max-w-[7ch] font-display text-[clamp(2rem,3vw,3.7rem)] uppercase leading-[0.82] tracking-[-0.05em]">
                  Made with intent.
                </p>
              </div>
              <div className="border-t border-white/15 pt-3 text-[0.5rem] uppercase tracking-[0.1em] text-white/45">
                Our space
              </div>
            </div>

            <div className="grid min-h-0 grid-rows-[1.2fr_0.8fr] gap-3">
              <div className="project-image-noir relative min-h-0 overflow-hidden rounded-sm bg-white/5">
                <div className="absolute inset-x-[12%] bottom-[12%] border-t border-white/40" />
              </div>
              <div className="border-t border-white/15 pt-3 text-[0.5rem] uppercase tracking-[0.1em] text-white/45">
                A considered ritual
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">{name} concept preview</span>
      </div>
    );
  }

  if (theme === "light") {
    return (
      <div
        aria-hidden="true"
        className="project-visual relative aspect-[1.08] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#f3f1ec] p-2.5 transition-transform duration-500 ease-out group-hover/project:scale-[1.01] sm:p-3"
      >
        <div className="flex h-full flex-col rounded-[0.65rem] border border-black/10 bg-[#f3f1ec]">
          <div className="flex items-center justify-between border-b border-black/10 px-3 py-2.5 sm:px-4">
            <span className="text-[0.55rem] font-semibold tracking-[0.14em] text-[#171717]">
              AURA SKIN
            </span>
            <span className="text-[0.5rem] uppercase tracking-[0.12em] text-black/45">
              Concept
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[0.9fr_1.1fr] gap-3 p-3 sm:gap-4 sm:p-4">
            <div className="project-image-aura relative min-h-0 overflow-hidden rounded-sm bg-white">
              <div className="absolute -bottom-[20%] -left-[22%] aspect-square w-[120%] rounded-full border-[clamp(1.25rem,3vw,3rem)] border-[#f3f1ec]" />
              <div className="absolute left-[20%] top-[15%] h-px w-[60%] bg-black/10" />
              <div className="absolute left-[20%] top-[15%] h-[52%] w-px bg-black/10" />
            </div>

            <div className="flex min-h-0 flex-col justify-between py-2 sm:py-3">
              <div>
                <p className="text-[0.5rem] uppercase tracking-[0.12em] text-black/45">
                  Skin, simply considered.
                </p>
                <p className="mt-5 max-w-[8ch] font-display text-[clamp(1.9rem,3vw,3.7rem)] leading-[0.82] tracking-[-0.055em] text-[#171717]">
                  Return to your natural rhythm.
                </p>
              </div>
              <div className="border-t border-black/10 pt-3 text-[0.5rem] uppercase tracking-[0.1em] text-black/45">
                Explore treatments
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">{name} concept preview</span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="project-visual relative aspect-[1.08] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#f3f1ec] p-2.5 transition-transform duration-500 ease-out group-hover/project:scale-[1.01] sm:p-3"
    >
      <div className="flex h-full flex-col rounded-[0.65rem] border border-black/10 bg-[#f3f1ec]">
        <div className="flex items-center justify-between border-b border-black/10 px-3 py-2.5 sm:px-4">
          <span className="text-[0.55rem] font-semibold tracking-[0.12em] text-[#171717]">
            MAISON
          </span>
          <span className="text-[0.5rem] uppercase tracking-[0.12em] text-black/45">
            Concept
          </span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.08fr_0.92fr]">
          <div className="flex min-h-0 flex-col justify-between bg-[#f3f1ec] p-3 sm:p-5">
            <div>
              <p className="text-[0.5rem] uppercase tracking-[0.12em] text-black/45">
                Hair / Form / Light
              </p>
              <p className="mt-5 max-w-[8ch] font-display text-[clamp(1.9rem,3vw,3.7rem)] leading-[0.82] tracking-[-0.055em] text-[#171717]">
                A slower kind of beautiful.
              </p>
            </div>
            <div className="border-t border-black/10 pt-3 text-[0.5rem] uppercase tracking-[0.1em] text-black/45">
              Book a visit
            </div>
          </div>

          <div className="project-image-maison relative min-h-0 overflow-hidden bg-black/10">
            <div className="absolute inset-x-[12%] bottom-[12%] border-t border-white/65" />
          </div>
        </div>
      </div>
      <span className="sr-only">{name} concept preview</span>
    </div>
  );
}

export function WorkIndex() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const [cursorGlowMounted, setCursorGlowMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "client" | "concept">("all");

  useEffect(() => {
    setCursorGlowMounted(true);
  }, []);

  useEffect(() => {
    if (!cursorGlowMounted) return;

    const glow = cursorGlowRef.current;
    if (!glow) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      glow.style.setProperty("--cursor-x", `${event.clientX}px`);
      glow.style.setProperty("--cursor-y", `${event.clientY}px`);
      glow.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [cursorGlowMounted]);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.kind === activeFilter;
  });

  const clientProjectCount = projects.filter(
    (project) => project.kind === "client",
  ).length;

  const conceptProjectCount = projects.filter(
    (project) => project.kind === "concept",
  ).length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>("[data-work-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <>
      {cursorGlowMounted &&
        createPortal(
          <div
            ref={cursorGlowRef}
            aria-hidden="true"
            className="work-page-cursor-glow"
          />,
          document.body,
        )}
      <section
      ref={sectionRef}
      aria-labelledby="work-index-heading"
      className="work-index-section bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 lg:py-32"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p
              data-work-reveal
              className="work-reveal mb-5 inline-flex rounded-full border border-white/20 bg-gradient-to-b from-white/[0.09] to-white/[0.035] px-4 py-2 font-sans text-[0.7rem] font-medium tracking-[0.01em] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              Selected work
            </p>

            <p
              data-work-reveal
              className="work-reveal max-w-[18rem] text-sm leading-6 text-white/50"
              style={{ transitionDelay: "100ms", animationDelay: "100ms" }}
            >
              A considered collection of digital experiences, built around
              clarity, atmosphere, and thoughtful presentation.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h1
              id="work-index-heading"
              data-work-reveal
              className="work-reveal max-w-[11ch] font-display text-[clamp(3rem,6.2vw,6.5rem)] leading-[0.9] tracking-[-0.06em] text-[#f3f1ec]"
              style={{ transitionDelay: "140ms", animationDelay: "140ms" }}
            >
              Work that
              <br />
              starts with
              <br />
              <span className="italic text-white/55">what matters.</span>
            </h1>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 py-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {(
              [
                {
                  value: "all",
                  label: "All projects",
                  count: projects.length,
                },
                {
                  value: "client",
                  label: "Client projects",
                  count: clientProjectCount,
                },
                {
                  value: "concept",
                  label: "Concepts",
                  count: conceptProjectCount,
                },
              ] as const
            ).map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-xs font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    isActive
                      ? "border-[#f3f1ec]/30 bg-[#f3f1ec] text-[#08090b]"
                      : "border-white/10 bg-white/[0.025] text-white/60 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-[#f3f1ec]"
                  } motion-reduce:transform-none motion-reduce:transition-none`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[0.65rem] tabular-nums ${
                      isActive ? "text-black/55" : "text-white/35"
                    }`}
                  >
                    {filter.count.toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="font-sans text-xs tracking-[0.08em] text-white/35">
            {filteredProjects.length.toString().padStart(2, "0")}{" "}
            {filteredProjects.length === 1 ? "PROJECT" : "PROJECTS"}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {filteredProjects.map((project, index) => (
              <article
                key={project.href}
                data-work-reveal
                className="work-reveal group/project min-w-0"
                style={{ transitionDelay: `${120 + index * 100}ms`, animationDelay: `${120 + index * 100}ms` }}
              >
                <Link
                  href={project.href}
                  aria-label={`Explore ${project.name} ${project.kind} project`}
                  className="flex h-full flex-col rounded-[1.25rem] border border-white/[0.10] bg-white/[0.02] p-2.5 transition-[border-color,background-color,transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045] hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:p-3"
                >
                  <ProjectVisual
                    name={project.name}
                    theme={project.theme}
                  />

                  <div className="flex flex-1 flex-col px-2 pb-3 pt-5 sm:px-3 sm:pb-4">
                    <div className="flex items-start justify-between gap-3 border-t border-white/10 pt-4">
                      <span className="pt-0.5 font-sans text-[0.65rem] font-medium tracking-[0.13em] text-white/35">
                        {project.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                          <h2 className="font-sans text-sm font-semibold tracking-[0.02em] text-[#f3f1ec]">
                            {project.name}
                          </h2>

                          <span className="font-sans text-[0.55rem] font-semibold tracking-[0.12em] text-white/35">
                            {project.kind === "concept"
                              ? "CONCEPT PROJECT"
                              : "CLIENT PROJECT"}
                          </span>
                        </div>

                        <p className="mt-2 text-xs leading-5 text-white/45">
                          {project.category}
                        </p>

                        <p className="mt-4 text-sm leading-6 text-white/50">
                          {project.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="pt-0.5 text-sm text-white/45 transition-transform duration-300 ease-out group-hover/project:translate-x-1 motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div
            data-work-reveal
            className="work-reveal flex min-h-64 flex-col items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.02] px-6 py-12 text-center"
          >
            <p className="font-display text-3xl tracking-[-0.04em] text-[#f3f1ec]">
              Good work takes intention.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              Client projects will appear here as the studio grows. In the
              meantime, explore the concepts shaping our approach.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("concept")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:border-white/30 hover:text-[#f3f1ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore concepts <span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        <div
          data-work-reveal
          className="work-reveal mt-12 flex flex-col gap-4 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
          style={{ transitionDelay: "180ms", animationDelay: "180ms" }}
        >
          <p className="max-w-lg text-sm leading-6 text-white/40">
            All projects shown here are concept work unless otherwise stated.
          </p>

          <Link
            className="group inline-flex w-fit items-center gap-3 text-sm text-[#f3f1ec] transition-colors hover:text-white/65"
            href="/contact"
          >
            <span>Have a project in mind?</span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .work-reveal {
          opacity: 0;
          filter: blur(6px);
          transform: translate3d(0, 26px, 0);
          transition:
            opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 1000ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform, filter;
        }

        .work-reveal.is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
          animation: work-reveal-enter 1050ms cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: auto;
        }

        @keyframes work-reveal-enter {
          from {
            opacity: 0;
            filter: blur(8px);
            transform: translate3d(0, 30px, 0);
          }
          65% {
            opacity: 1;
            filter: blur(1px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translate3d(0, 0, 0);
          }
        }

        .work-page-cursor-glow {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            420px circle at var(--cursor-x, 50vw) var(--cursor-y, 50vh),
            rgba(243, 241, 236, 0.075),
            rgba(243, 241, 236, 0.025) 34%,
            transparent 68%
          );
          transition: opacity 220ms ease;
          will-change: opacity, background;
        }

        @media (prefers-reduced-motion: reduce) {
          .work-reveal,
          .work-reveal.is-visible {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
            animation: none !important;
            will-change: auto;
          }

          .work-page-cursor-glow {
            display: none;
          }
        }
      `}</style>
      </section>
    </>
  );
}
