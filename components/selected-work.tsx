"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";

type ProjectPreviewProps = {
  name: string;
  number: string;
  title: string;
  href: string;
  treatment: "maison" | "noir" | "aura";
  description: string;
  index: number;
};

function ProjectPreview({
  name,
  number,
  title,
  href,
  treatment,
  description,
  index,
}: ProjectPreviewProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanTilt(media.matches);

    const handleChange = (event: MediaQueryListEvent) => setCanTilt(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!canTilt || event.pointerType !== "mouse") return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 5;
    const rotateX = (0.5 - y) * 4;

    card.style.setProperty("--project-rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--project-rotate-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--project-pointer-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--project-pointer-y", `${(y * 100).toFixed(1)}%`);
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--project-rotate-x", "0deg");
    card.style.setProperty("--project-rotate-y", "0deg");
    card.style.setProperty("--project-pointer-x", "50%");
    card.style.setProperty("--project-pointer-y", "50%");
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        "--project-rotate-x": "0deg",
        "--project-rotate-y": "0deg",
        "--project-pointer-x": "50%",
        "--project-pointer-y": "50%",
        animationDelay: `${index * 110}ms`,
      } as CSSProperties}
      className="group/project relative flex h-full min-w-0 flex-col text-paper [perspective:1400px] [transform:perspective(1400px)_rotateX(var(--project-rotate-x))_rotateY(var(--project-rotate-y))] transition-[transform,opacity] duration-500 ease-out motion-reduce:transform-none"
    >
      <Link
        href={href}
        aria-label={`Explore ${name} concept project`}
        className="cinematic-stage__link relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.12] bg-[#0c0d0f] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition-[border-color,background-color,box-shadow] duration-700 hover:border-white/25 hover:bg-white/[0.035] hover:shadow-[0_32px_100px_rgba(0,0,0,0.48)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-3"
      >
        <div
          aria-hidden="true"
          className="cinematic-stage__light pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover/project:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--project-pointer-x) var(--project-pointer-y), rgba(255,255,255,0.085), transparent 62%)",
          }}
        />

        <div className="cinematic-stage__frame relative flex min-h-[26rem] flex-1 flex-col rounded-[1rem] border border-white/[0.08] p-3 sm:min-h-[31rem] sm:p-4 lg:p-5">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/65">
            <span>{name}</span>
            <span>{number} / 03</span>
          </div>

          <div
            className={`cinematic-stage__visual project-image project-image-${treatment} relative mt-4 flex flex-1 items-end overflow-hidden rounded-[0.75rem] p-3 sm:mt-5 sm:p-4`}
          >
            <div
              className={`cinematic-stage__device project-mobile project-mobile-${treatment} transition-transform duration-1000 ease-out group-hover/project:rotate-[-1deg] group-hover/project:scale-[1.035]`}
              aria-hidden="true"
            >
              <div className="project-mobile-notch" />
              <p>{name}</p>
              <strong>{title}</strong>
              <div className={`project-mobile-photo project-image project-image-${treatment}`} />
              <span>
                Explore <b>→</b>
              </span>
            </div>

            <div
              className="cinematic-stage__title-card relative z-10 max-w-[13rem] border border-white/10 bg-[#08090b]/90 p-4 text-paper shadow-[0_16px_48px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-transform duration-1000 ease-out group-hover/project:translate-x-1 group-hover/project:-translate-y-1 sm:p-5"
            >
              <p className="font-sans text-[0.55rem] font-medium uppercase tracking-[0.13em] text-white/50">
                Concept website
              </p>
              <p className="mt-3 font-display text-[clamp(1.8rem,2.5vw,2.8rem)] leading-[0.88] tracking-[-0.055em]">
                {title}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/20 text-sm text-white/90 transition-[color,background-color,transform] duration-300 group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 group-hover/project:bg-white group-hover/project:text-[#08090b] sm:right-4 sm:top-4"
            >
              ↗
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 font-sans text-[0.58rem] uppercase tracking-[0.13em] text-white/40">
            <span>Desktop + mobile interface</span>
            <span className="shrink-0 text-white/75 transition-colors group-hover/project:text-white">
              Explore ↗
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[auto_minmax(0,1fr)_auto] gap-x-3 px-3 pb-4 pt-5 sm:gap-x-4 sm:px-4 sm:pb-5">
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.13em] text-white/35">
            {number}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <h3 className="font-sans text-sm font-semibold tracking-[0.02em] text-[#f3f1ec]">
                {name}
              </h3>
              <span className="font-sans text-[0.55rem] font-semibold tracking-[0.12em] text-white/35">
                CONCEPT PROJECT
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
          </div>
          <span
            aria-hidden="true"
            className="text-white/45 transition-transform duration-300 group-hover/project:translate-x-1"
          >
            →
          </span>
        </div>
      </Link>
    </article>
  );
}

const projects = [
  {
    name: "MAISON HAIR STUDIO",
    number: "01",
    title: "A slower kind of beautiful.",
    href: "/work/maison-hair-studio",
    treatment: "maison" as const,
    description:
      "Warm, editorial beauty art direction shaped around a thoughtful studio visit.",
  },
  {
    name: "NOIR BARBER",
    number: "02",
    title: "Made with intent.",
    href: "/work/noir-barber",
    treatment: "noir" as const,
    description:
      "A high-contrast grooming experience with discipline in every detail.",
  },
  {
    name: "AURA SKIN",
    number: "03",
    title: "Return to your natural rhythm.",
    href: "/work/aura-skin",
    treatment: "aura" as const,
    description:
      "A calm skincare concept where the information has as much room as the mood.",
  },
];

export function SelectedWork() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const section = document.getElementById("selected-work");
    if (!section) return;

    const revealElements = section.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-project-index])"
    );
    const projectElements = section.querySelectorAll<HTMLElement>("[data-project-index]");

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      setVisibleProjects(projects.map((_, index) => index));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.projectIndex);
            if (Number.isInteger(index)) {
              setVisibleProjects((current) =>
                current.includes(index) ? current : [...current, index]
              );
            }
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -3% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    projectElements.forEach((element) => projectObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      projectObserver.disconnect();
    };
  }, [reducedMotion]);

  const updateTrackState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const nextProgress =
      maxScroll <= 1 ? 0 : Math.max(0, Math.min(1, track.scrollLeft / maxScroll));
    setProgress(nextProgress);

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-project-card]"));
    if (!cards.length) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(center - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateTrackState();
    track.addEventListener("scroll", updateTrackState, { passive: true });
    window.addEventListener("resize", updateTrackState);

    return () => {
      track.removeEventListener("scroll", updateTrackState);
      window.removeEventListener("resize", updateTrackState);
    };
  }, [updateTrackState]);

  const goToProject = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-project-card]"));
    const target = cards[index];
    if (!target) return;

    const trackRect = track.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetLeft =
      track.scrollLeft +
      targetRect.left -
      trackRect.left -
      (track.clientWidth - target.clientWidth) / 2;

    track.scrollTo({
      left: Math.max(0, Math.min(targetLeft, track.scrollWidth - track.clientWidth)),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const goPrevious = () => goToProject(Math.max(0, activeIndex - 1));
  const goNext = () => goToProject(Math.min(projects.length - 1, activeIndex + 1));

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="relative overflow-hidden bg-[#08090b] py-20 text-[#f3f1ec] sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-white/[0.025] blur-[100px]"
      />
      <div className="site-container relative">
        <div data-reveal className="selected-work-reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.035))] px-5 py-2.5 font-sans text-[0.6875rem] font-medium tracking-[0.015em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_6px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
            Selected work
          </p>

          <h2
            id="selected-work-heading"
            className="font-display text-[clamp(2.6rem,5.2vw,4.8rem)] leading-[0.98] tracking-[-0.055em] text-[#f3f1ec]"
          >
            Websites with
            <br />
            <span className="italic text-white/55">a point of view.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[34rem] text-sm leading-7 text-white/50 sm:text-base">
            Three considered directions for businesses with something worth
            making clear. Each concept explores a distinct visual identity,
            shaped around the brand it represents.
          </p>
        </div>

        <div data-reveal className="selected-work-reveal cinematic-stage__controls mt-10 flex items-center justify-between gap-4 sm:mt-14">
          <div className="flex items-center gap-3">
            <p className="font-sans text-[0.6rem] uppercase tracking-[0.16em] text-white/35">
              <span className="text-white/80">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-white/20">/</span>
              {String(projects.length).padStart(2, "0")} projects
            </p>
            <span className="hidden items-center gap-2 font-sans text-[0.55rem] uppercase tracking-[0.14em] text-white/25 md:inline-flex">
              <span aria-hidden="true" className="inline-block h-px w-5 bg-white/25" />
              Drag to explore
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-lg text-white/80 transition-[background-color,border-color,color,opacity] duration-300 hover:border-white/40 hover:bg-white hover:text-[#08090b] disabled:cursor-not-allowed disabled:opacity-25"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-lg text-white/80 transition-[background-color,border-color,color,opacity] duration-300 hover:border-white/40 hover:bg-white hover:text-[#08090b] disabled:cursor-not-allowed disabled:opacity-25"
            >
              →
            </button>
          </div>
        </div>

        <div data-reveal className="selected-work-reveal mb-4 flex items-center justify-between gap-3">
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
            Independent digital design · 2026
          </p>
          <p className="hidden font-sans text-[0.55rem] uppercase tracking-[0.18em] text-white/30 sm:block">
            Selected direction <span className="ml-2 text-white/65">{projects[activeIndex].number}</span>
          </p>
        </div>

        <div
          ref={trackRef}
          aria-label="Selected projects gallery"
          role="region"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goPrevious();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              goNext();
            }
          }}
          className="selected-work-track mt-5 flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain scroll-smooth pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          style={{
            scrollBehavior: reducedMotion ? "auto" : "smooth",
            scrollPaddingInline: "0px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.number}
              data-project-card
              data-project-index={index}
              data-active={activeIndex === index}
              className={`selected-work-slide cinematic-stage__slide w-full min-w-0 shrink-0 snap-center ${activeIndex === index ? "is-active" : ""} ${visibleProjects.includes(index) ? "is-visible" : ""}`}
            >
              <ProjectPreview {...project} index={index} />
            </div>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Project {activeIndex + 1} of {projects.length}: {projects[activeIndex].name}
        </p>

        <div data-reveal className="selected-work-reveal flex items-center gap-4 border-t border-white/10 pt-5">
          <div
            className="relative h-px flex-1 overflow-hidden bg-white/10"
            role="progressbar"
            aria-label="Gallery progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div
              className="absolute inset-y-0 left-0 bg-[#f3f1ec] transition-[width] duration-150"
              style={{ width: `${activeIndex === projects.length - 1 ? 100 : Math.max(8, progress * 100)}%` }}
            />
          </div>
          <span className="min-w-[2.5rem] text-right font-sans text-[0.58rem] tracking-[0.12em] text-white/40">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div data-reveal className="selected-work-reveal mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-white/40">
            These are concept projects created to explore visual direction and
            interface design.
          </p>
          <Link
            className="group inline-flex w-fit items-center gap-3 text-sm text-[#f3f1ec] transition-colors hover:text-white/65"
            href="/work"
          >
            <span>View all work</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .selected-work-reveal {
          opacity: 0;
          transform: translate3d(0, 34px, 0);
          filter: blur(7px);
          clip-path: inset(0 0 8% 0);
          transition:
            opacity 1050ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 1150ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 1150ms cubic-bezier(0.16, 1, 0.3, 1),
            clip-path 1150ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }

        .selected-work-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
          clip-path: inset(0 0 0 0);
        }

        .cinematic-stage__controls.is-visible {
          transition-delay: 130ms;
        }

        .cinematic-stage__slide {
          opacity: 0.42;
          transform: scale(0.955) translate3d(0, 18px, 0);
          transform-origin: center center;
          transition:
            opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 1250ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 1000ms cubic-bezier(0.16, 1, 0.3, 1);
          filter: saturate(0.72) brightness(0.78);
          will-change: opacity, transform, filter;
        }

        .cinematic-stage__slide.is-visible {
          opacity: 0.72;
          filter: saturate(0.88) brightness(0.9);
        }

        .cinematic-stage__slide.is-active {
          opacity: 1;
          transform: scale(1) translate3d(0, 0, 0);
          filter: saturate(1) brightness(1);
        }

        :global(.cinematic-stage__link) {
          isolation: isolate;
          transform: translateZ(0);
          transition:
            border-color 700ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 700ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.cinematic-stage__frame) {
          transform: translateZ(0);
          transition: border-color 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.cinematic-stage__visual) {
          clip-path: inset(7% 4% 5% 4% round 12px);
          opacity: 0;
          transform: scale(0.91) translate3d(0, 30px, 0);
          filter: blur(10px) brightness(0.82);
          transition:
            clip-path 1300ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 1400ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 1300ms cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 100ms;
          will-change: clip-path, opacity, transform, filter;
        }

        .cinematic-stage__slide.is-visible :global(.cinematic-stage__visual) {
          opacity: 1;
          clip-path: inset(0 0 0 0 round 12px);
          transform: scale(1) translate3d(0, 0, 0);
          filter: blur(0) brightness(1);
        }

        .cinematic-stage__slide.is-active :global(.cinematic-stage__visual) {
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        :global(.cinematic-stage__device) {
          transition:
            transform 1200ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 1000ms cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 28px 38px rgba(0, 0, 0, 0.24));
        }

        .cinematic-stage__slide.is-active :global(.cinematic-stage__device) {
          transform: translate3d(0, -5px, 24px) rotate(-1deg) scale(1.025);
        }

        :global(.cinematic-stage__title-card) {
          opacity: 0;
          transform: translate3d(-18px, 18px, 42px);
          filter: blur(5px);
          transition:
            opacity 900ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 1100ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 1000ms cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 280ms;
        }

        .cinematic-stage__slide.is-visible :global(.cinematic-stage__title-card) {
          opacity: 1;
          transform: translate3d(0, 0, 42px);
          filter: blur(0);
        }

        :global(.cinematic-stage__light) {
          background:
            radial-gradient(
              480px circle at var(--project-pointer-x) var(--project-pointer-y),
              rgba(255, 255, 255, 0.12),
              transparent 64%
            );
        }

        .selected-work-track {
          scroll-behavior: ${reducedMotion ? "auto" : "smooth"};
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          perspective: 1400px;
        }

        .selected-work-track::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .cinematic-stage__slide {
            opacity: 1;
            transform: none;
            filter: none;
          }

          :global(.cinematic-stage__visual) {
            clip-path: inset(0 round 12px);
            opacity: 1;
            transform: none;
            filter: none;
            transition-duration: 700ms;
          }

          :global(.cinematic-stage__title-card) {
            opacity: 1;
            transform: none;
            filter: none;
            transition-duration: 600ms;
          }

          .cinematic-stage__slide.is-active :global(.cinematic-stage__device) {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .selected-work-reveal,
          .cinematic-stage__slide,
          :global(.cinematic-stage__visual),
          :global(.cinematic-stage__device),
          :global(.cinematic-stage__title-card),
          :global(.cinematic-stage__link),
          :global(.cinematic-stage__frame) {
            opacity: 1;
            transform: none;
            filter: none;
            clip-path: none;
            transition: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
