"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    label: "LISTEN FIRST",
    title: "Understand before adding.",
    description:
      "Start with your brand, your audience, and what your website needs to achieve. Every design decision begins with understanding the problem.",
    mark: "↗",
  },
  {
    number: "02",
    label: "BUILD WITH PURPOSE",
    title: "Make what matters.",
    description:
      "Create a clear visual hierarchy, thoughtful page structure, and intuitive interactions. Every element should have a reason to be there.",
    mark: "✳",
  },
  {
    number: "03",
    label: "KEEP IMPROVING",
    title: "Better every time.",
    description:
      "Explore, review, and refine. Feedback and careful iteration help turn an initial direction into a more considered design.",
    mark: "↻",
  },
];

function TimeCard() {
  return (
    <div className="about-time-card relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-3 transition-colors duration-[900ms] hover:border-white/20 sm:rounded-[1.5rem] sm:p-4">
      <div className="group relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#0d1118] p-5 sm:min-h-[25rem] sm:p-8 lg:min-h-[29rem] lg:p-10">
        <div
          aria-hidden="true"
          className="about-time-card__image absolute inset-0 bg-[url('/images/hero-mountain.png')] bg-cover bg-center opacity-45 transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#061323]/85 via-[#08090b]/45 to-[#08090b]/90"
        />
        <div className="relative flex items-center justify-between border-b border-white/20 pb-4 text-[0.5625rem] font-semibold uppercase tracking-[0.16em] text-white/60 sm:pb-5 sm:text-[0.625rem]">
          <span>5:55 AM STUDIO</span>
          <span>01 / 01</span>
        </div>

        <div className="relative flex flex-1 items-center py-12 sm:py-16">
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
          <div className="absolute left-1/2 top-1/2 h-[75%] w-px -translate-y-1/2 bg-white/15" />
          <p className="relative font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] tracking-[-0.075em] text-[#f3f1ec]">
            05:55 AM
          </p>
        </div>

        <div className="relative flex items-end justify-between gap-4 border-t border-white/20 pt-4 text-[0.5625rem] uppercase tracking-[0.14em] text-white/55 sm:pt-5 sm:text-[0.625rem]">
          <span>A beginning, every morning.</span>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const hero = page.querySelector<HTMLElement>('section[aria-labelledby="about-heading"]');
    let fadeFrame = 0;
    const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateHeroFade = () => {
      cancelAnimationFrame(fadeFrame);
      fadeFrame = window.requestAnimationFrame(() => {
        if (!hero) return;

        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const rect = hero.getBoundingClientRect();
        const rawProgress = (viewportHeight - rect.bottom) / (viewportHeight * 0.72);
        const progress = reducedMotionPreference.matches
          ? 0
          : Math.max(0, Math.min(1, rawProgress));
        const baseHeight = Math.min(Math.max(viewportHeight * 0.22, 150), 260);
        const fadeHeight = baseHeight + (hero.offsetHeight - baseHeight) * progress;

        hero.style.setProperty("--about-fade-progress", String(progress));
        hero.style.setProperty("--about-fade-height", `${fadeHeight}px`);
      });
    };

    updateHeroFade();
    window.addEventListener("scroll", updateHeroFade, { passive: true });
    window.addEventListener("resize", updateHeroFade);

    // Track the pointer at document level so the spotlight continues over the
    // site header/footer as well as every section of this page.
    const handleDocumentPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const glow = cursorGlowRef.current;
      if (!glow) return;
      glow.style.setProperty("--cursor-x", `${event.clientX}px`);
      glow.style.setProperty("--cursor-y", `${event.clientY}px`);
      glow.style.setProperty("--cursor-opacity", "1");
    };
    const handlePointerLeave = () => {
      cursorGlowRef.current?.style.setProperty("--cursor-opacity", "0");
    };
    window.addEventListener("pointermove", handleDocumentPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    // Prevent the browser from restoring a stale scroll offset on reload.
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const resetScrollFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    const elements = page.querySelectorAll<HTMLElement>("[data-about-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        window.cancelAnimationFrame(resetScrollFrame);
        window.cancelAnimationFrame(fadeFrame);
        window.removeEventListener("scroll", updateHeroFade);
        window.removeEventListener("resize", updateHeroFade);
        window.history.scrollRestoration = previousScrollRestoration;
        window.removeEventListener("pointermove", handleDocumentPointer);
        document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const section = target.closest("section") ?? page;
            const siblingsInReveal = Array.from(
              section.querySelectorAll<HTMLElement>("[data-about-reveal]"),
            );
            const revealIndex = siblingsInReveal.indexOf(target);
            target.style.transitionDelay = `${Math.min(Math.max(0, revealIndex) * 90, 360)}ms`;
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      window.cancelAnimationFrame(resetScrollFrame);
      window.cancelAnimationFrame(fadeFrame);
      window.removeEventListener("scroll", updateHeroFade);
      window.removeEventListener("resize", updateHeroFade);
      window.history.scrollRestoration = previousScrollRestoration;
      window.removeEventListener("pointermove", handleDocumentPointer);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="about-page relative isolate bg-[#08090b] text-[#f3f1ec]"
    >
      <div ref={cursorGlowRef} aria-hidden="true" className="about-page__cursor-glow" />
      <section
        aria-labelledby="about-heading"
        className="relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="about-hero__image absolute inset-0 -z-10 bg-[url('/images/hero-mountain.png')] bg-cover bg-[center_56%]" />
        <div aria-hidden="true" className="about-hero__image-overlay absolute inset-0 -z-10" />
        <div aria-hidden="true" className="about-hero__glow pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden="true" className="about-hero__scroll-fade pointer-events-none absolute bottom-0 left-0 right-0 -z-0" />
        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="about-hero__title lg:col-span-8">
              <p className="about-hero__eyebrow mb-6 inline-flex items-center rounded-full border border-white/[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.035))] px-5 py-2.5 font-sans text-[0.6875rem] font-medium tracking-[0.015em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_6px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
                About 5:55 AM
              </p>
              <h1 id="about-heading" className="max-w-[10ch] font-display text-[clamp(3.75rem,8.5vw,8.5rem)] leading-[0.96] tracking-[-0.06em] text-[#f3f1ec]">
                <span className="about-hero__line about-hero__line--first">A beginning,</span>
                <br />
                <span className="about-hero__line about-hero__line--second italic text-white/75">every morning.</span>
              </h1>
            </div>

            <div className="about-hero__copy lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                An independent web design studio built around a simple belief:
                listen first, build with purpose, and keep improving.
              </p>
              <Link href="/contact" className="about-hero__cta group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#f3f1ec] bg-[#f3f1ec] px-6 py-3 text-sm font-medium text-[#08090b] transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3f1ec]">
                <span>Start a project</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
            </div>

            <div className="about-hero__card lg:col-span-10 lg:col-start-3">
              <TimeCard />
            </div>
          </div>
          <div className="about-hero__scroll mt-10 flex items-center justify-end gap-3 text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-white/45 sm:mt-12">
            <span>Scroll to discover</span>
            <span aria-hidden="true" className="about-hero__scroll-line block h-8 w-px origin-top bg-white/55" />
          </div>
        </div>
        <style jsx global>{`
          .about-page { isolation: isolate; position: relative; }
          .about-page > .about-page__cursor-glow {
            --cursor-x: 50vw;
            --cursor-y: 30vh;
            --cursor-opacity: 0;
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            opacity: var(--cursor-opacity);
            background: radial-gradient(
              34rem circle at var(--cursor-x) var(--cursor-y),
              rgba(220, 215, 202, 0.105) 0%,
              rgba(220, 215, 202, 0.045) 32%,
              transparent 72%
            );
            transition: opacity 500ms ease;
            will-change: background;
          }
          .about-page > section { position: relative; z-index: 1; background-color: transparent; }
          .about-hero__image-overlay {
            background: linear-gradient(
              to bottom,
              rgba(8, 9, 11, 0.76) 0%,
              rgba(8, 9, 11, 0.58) 42%,
              rgba(8, 9, 11, 0.86) 72%,
              #08090b 100%
            );
          }
          .about-hero__scroll-fade {
            height: var(--about-fade-height, 22vh);
            opacity: 1;
            background: linear-gradient(
              to bottom,
              rgba(8, 9, 11, calc(0.28 + var(--about-fade-progress, 0) * 0.32)) 0%,
              rgba(8, 9, 11, calc(0.72 + var(--about-fade-progress, 0) * 0.20)) 52%,
              #08090b 100%
            );
          }
          @media (prefers-reduced-motion: reduce) {
            .about-hero__scroll-fade { height: 22vh; opacity: 1; }
          }
          .about-page article,
          .about-page .about-panel,
          .about-page .about-time-card {
            box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.28), 0 0.2rem 0.55rem rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.025);
            transition: border-color 500ms ease, background-color 500ms ease, box-shadow 500ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .about-page article:hover,
          .about-page .about-panel:hover,
          .about-page .about-time-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.36), 0 0.25rem 0.7rem rgba(0, 0, 0, 0.22), 0 0 1.5rem rgba(243, 241, 236, 0.035), inset 0 1px 0 rgba(255, 255, 255, 0.045);
          }
          @media (hover: none), (pointer: coarse) {
            .about-page > .about-page__cursor-glow { display: none; }
          }
          @media (prefers-reduced-motion: reduce) {
            .about-page > .about-page__cursor-glow { display: none; transition: none; }
            .about-page article, .about-page .about-panel, .about-page .about-time-card { transition: none; }
          }
          .about-hero__image { transform: scale(1.08); animation: about-image-arrive 2.4s cubic-bezier(.16,1,.3,1) both, about-image-breathe 32s ease-in-out 2.4s infinite alternate; }
          .about-hero__glow { background: radial-gradient(ellipse at 72% 48%, rgba(211,139,91,.13), transparent 42%); animation: about-glow-arrive 2.4s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__eyebrow { animation: about-rise 1.15s .18s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__line { display: inline-block; padding-bottom: .12em; margin-bottom: -.12em; animation: about-line-reveal 1.5s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__line--first { animation-delay: .32s; }
          .about-hero__line--second { animation-delay: .62s; }
          .about-hero__copy { animation: about-rise 1.35s .9s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__cta { box-shadow: 0 0 0 rgba(243,241,236,0); transition: transform .5s cubic-bezier(.16,1,.3,1), box-shadow .6s ease, background-color .45s ease; }
          .about-hero__cta:hover { box-shadow: 0 12px 34px rgba(0,0,0,.24), 0 0 28px rgba(243,241,236,.12); }
          .about-hero__card { animation: about-card-arrive 1.7s 1.15s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__scroll { animation: about-rise 1.2s 1.5s cubic-bezier(.16,1,.3,1) both; }
          .about-hero__scroll-line { animation: about-scroll-line 2.4s 1.8s cubic-bezier(.45,0,.55,1) infinite; }
          @keyframes about-image-arrive { from { opacity: .35; transform: scale(1.16) translateY(1.5%); } to { opacity: 1; transform: scale(1.08) translateY(0); } }
          @keyframes about-image-breathe { from { transform: scale(1.08) translateY(0); } to { transform: scale(1.13) translateY(-1%); } }
          @keyframes about-glow-arrive { from { opacity: 0; } to { opacity: 1; } }
          @keyframes about-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes about-line-reveal { from { opacity: 0; transform: translateY(105%) skewY(3deg); clip-path: inset(0 0 100% 0); } to { opacity: 1; transform: translateY(0) skewY(0); clip-path: inset(0 0 -0.12em 0); } }
          @keyframes about-card-arrive { from { opacity: 0; transform: translateY(46px) scale(.985); filter: blur(8px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
          @keyframes about-scroll-line { 0%,100% { transform: scaleY(.45); transform-origin: top; opacity: .45; } 50% { transform: scaleY(1); transform-origin: top; opacity: 1; } }
          @media (prefers-reduced-motion: reduce) { .about-hero__image, .about-hero__glow, .about-hero__eyebrow, .about-hero__line, .about-hero__copy, .about-hero__card, .about-hero__scroll, .about-hero__scroll-line { animation: none !important; transition: none !important; } .about-hero__image { transform: none; } }


        .about-reveal {
          opacity: 0;
          filter: blur(6px);
          transform: translate3d(0, 26px, 0);
          transition:
            opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 1000ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform, filter;
        }

        .about-reveal.is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-reveal.is-visible {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
            will-change: auto;
          }
        }
      
        `}</style>
      </section>

      <section
        aria-labelledby="why-heading"
        className="py-20 sm:py-28 lg:py-36"
      >
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p data-about-reveal className="about-reveal inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.045] px-6 py-3 text-sm font-medium text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.07]">
                WHY 5:55 AM?
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2
                id="why-heading"
                data-about-reveal
                className="about-reveal max-w-[11ch] font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] tracking-[-0.06em]"
              >
                A new day.
                <br />
                <span className="italic text-white/70">A new opportunity.</span>
              </h2>
              <div data-about-reveal className="about-reveal mt-8 max-w-xl space-y-6 text-[0.9375rem] leading-7 text-white/75 sm:max-w-2xl sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  5:55 AM is the time Charl wakes up most mornings. To him, it
                  represents a fresh start — a reminder that meaningful work
                  begins with showing up, staying curious, and taking the first
                  step.
                </p>
                <p>
                  That idea became the foundation of the studio: approach every
                  project with intention, focus on what matters, and keep
                  improving with every decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="principles-heading"
        className="py-20 sm:py-28 lg:py-36"
      >
        <div className="site-container">
          <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p data-about-reveal className="about-reveal mb-5 text-[0.625rem] uppercase tracking-[0.18em] text-white/75">
                HOW WE THINK
              </p>
              <h2
                id="principles-heading"
                data-about-reveal
                className="about-reveal text-[#f3f1ec] max-w-[10ch] font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.9] tracking-[-0.06em]"
              >
                Small studio.
                <br />
                <span className="italic text-white/70">Clear intention.</span>
              </h2>
            </div>
            <p data-about-reveal className="about-reveal max-w-lg text-base leading-7 text-white/75 lg:col-span-5 lg:col-start-8">
              The same principle shapes the way we approach every project:
              understand what matters, make deliberate choices, and keep
              refining the details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group flex min-h-[17rem] flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:min-h-[19rem] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span data-about-reveal className="about-reveal font-display text-3xl text-white/80">
                    {principle.mark}
                  </span>
                  <span data-about-reveal className="about-reveal text-[0.625rem] tracking-[0.16em] text-white/70">
                    {principle.number}
                  </span>
                </div>
                <p data-about-reveal className="about-reveal mt-8 text-[0.625rem] font-medium tracking-[0.15em] text-white/70">
                  {principle.label}
                </p>
                <h3 data-about-reveal className="about-reveal mt-3 max-w-[12ch] font-display text-3xl leading-[1.02] tracking-[-0.04em] text-[#f3f1ec] sm:text-4xl">
                  {principle.title}
                </h3>
                <p data-about-reveal className="about-reveal mt-4 text-sm leading-6 text-white/75">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="founder-heading"
        className="py-20 sm:py-28 lg:py-36"
      >
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <p data-about-reveal className="about-reveal mb-5 text-[0.625rem] uppercase tracking-[0.18em] text-white/75">
                MEET CHARL
              </p>
              <h2
                id="founder-heading"
                data-about-reveal
                className="about-reveal text-[#f3f1ec] max-w-[9ch] font-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.06em]"
              >
                Independent
                <br />
                <span className="italic text-white/70">by design.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="about-panel rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10">
                <p data-about-reveal className="about-reveal text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  I’m Charl, the designer behind 5:55 AM Studio. I focus on
                  website UI design, bringing together visual clarity, purposeful
                  layouts, and careful attention to detail.
                </p>
                <p data-about-reveal className="about-reveal mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  I believe good design should do more than look refined. It
                  should help people understand a brand, navigate information,
                  and take the next step with confidence.
                </p>
                <p data-about-reveal className="about-reveal mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  As I build this studio, I’m committed to asking better
                  questions, making considered design decisions, and treating
                  every project as an opportunity to improve.
                </p>
                <div data-about-reveal className="about-reveal mt-8 border-t border-white/10 pt-6">
                  <Link
                    className="group inline-flex items-center gap-3 text-sm text-[#f3f1ec] transition-colors hover:text-white/75"
                    href="/work"
                  >
                    <span>See the work</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-heading"
        className="py-20 sm:py-28 lg:py-36"
      >
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p data-about-reveal className="about-reveal mb-5 text-[0.625rem] uppercase tracking-[0.18em] text-white/75">
                THE PROCESS
              </p>
              <h2
                id="process-heading"
                data-about-reveal
                className="about-reveal text-[#f3f1ec] max-w-[10ch] font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.06em]"
              >
                A clearer way
                <br />
                <span className="italic text-white/70">to design.</span>
              </h2>
              <p data-about-reveal className="about-reveal mt-6 max-w-sm text-base leading-7 text-white/75">
                A focused, collaborative process — from understanding your goals
                to refining the final interface.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "Align on your brand, audience, and what the website needs to achieve.",
                },
                {
                  number: "02",
                  title: "Explore",
                  description:
                    "Develop a visual direction that fits your business and communicates clearly.",
                },
                {
                  number: "03",
                  title: "Refine",
                  description:
                    "Improve layouts, typography, and responsive details through feedback.",
                },
                {
                  number: "04",
                  title: "Handoff",
                  description:
                    "Organize design files and specifications to support the implementation process.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.15rem] border border-white/10 bg-white/[0.025] p-5 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.045] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span data-about-reveal className="about-reveal font-display text-2xl text-white/80">
                      {step.number}
                    </span>
                    <span data-about-reveal className="about-reveal h-px w-8 bg-white/20" aria-hidden="true" />
                  </div>
                  <h3 data-about-reveal className="about-reveal mt-7 font-display text-2xl tracking-[-0.035em] text-[#f3f1ec] sm:text-3xl">
                    {step.title}
                  </h3>
                  <p data-about-reveal className="about-reveal mt-3 text-sm leading-6 text-white/75">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <p data-about-reveal className="about-reveal mt-7 max-w-2xl text-sm leading-6 text-white/75 lg:ml-auto">
            You work directly with the designer throughout the process, with
            clear communication and considered decisions at every stage.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="site-container">
          <div className="about-panel rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:p-14">
            <p data-about-reveal className="about-reveal mb-6 text-[0.625rem] uppercase tracking-[0.18em] text-white/75">
              A SIMPLE BELIEF
            </p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <h2 data-about-reveal className="about-reveal max-w-[11ch] font-display text-[clamp(3rem,7vw,7rem)] leading-[0.94] tracking-[-0.06em] text-[#f3f1ec] lg:col-span-8">
                Listen first.
                <br />
                <span className="italic text-white/70">Build with purpose.</span>
                <br />
                Keep improving.
              </h2>
              <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-start lg:pb-2">
                <Link
                  data-about-reveal
                  className="about-reveal group inline-flex min-h-12 w-[250px] items-center justify-between gap-5 rounded-full border border-[#f3f1ec] bg-[#f3f1ec] px-5 py-2.5 text-sm font-medium text-[#08090b] shadow-[0_6px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3f1ec]"
                  href="/contact"
                >
                  <span>Start a project</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
                <Link
                  data-about-reveal
                  className="about-reveal group inline-flex min-h-12 w-[250px] items-center justify-between gap-5 rounded-full border border-white/20 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-[#f3f1ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.075] hover:shadow-[0_8px_26px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
                  href="/services"
                >
                  <span>Explore services</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-base leading-none text-white/75 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="site-container">
          <div className="flex flex-col gap-3 text-[0.6875rem] leading-5 tracking-[0.1em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>ABOUT 5:55 AM / BUILT BY CHARL</span>
            <span>05:55 / HO CHI MINH CITY</span>
          </div>
        </div>
      </section>
    </main>
  );
}
