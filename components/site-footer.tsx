"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const exploreLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        // Give the hidden styles a real paint before enabling transitions.
        // This prevents the footer from appearing already visible on first render.
        firstFrame = window.requestAnimationFrame(() => {
          secondFrame = window.requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(footer);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer relative overflow-hidden bg-[#08090b] text-[#f3f1ec] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="site-footer__gradient pointer-events-none absolute inset-0"
      />

      <div className="site-container relative mx-auto max-w-[1280px] px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-12 md:gap-8 lg:gap-10">
          <div className="site-footer__intro md:col-span-6 lg:col-span-6">
            <Link
              href="/"
              aria-label="5:55 AM home"
              className="inline-flex text-decoration-none"
            >
              <span className="site-footer__logo font-display text-4xl leading-none tracking-[-0.06em] text-[#f3f1ec] sm:text-5xl">
                5:55 AM
              </span>
            </Link>

            <p className="site-footer__tagline mt-3 font-sans text-xs tracking-[0.04em] text-white/55">
              Independent Web Studio
            </p>

            <p className="site-footer__statement mt-5 max-w-[12ch] font-display text-[clamp(2.5rem,4.2vw,4.25rem)] leading-[0.9] tracking-[-0.055em] text-[#f3f1ec]">
              Straight to what matters.
            </p>
          </div>

          <div className="site-footer__links grid grid-cols-2 gap-6 md:col-span-6 md:grid-cols-2 md:pt-1 lg:grid-cols-2">
            <div>
              <p className="site-footer__label font-sans text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/45">
                Explore
              </p>

              <nav aria-label="Footer navigation" className="mt-4">
                <ul className="space-y-2.5">
                  {exploreLinks.map((link, index) => (
                    <li
                      key={link.href}
                      className="site-footer__link-item"
                      style={{ "--link-index": index } as CSSProperties}
                    >
                      <Link
                        className="site-footer__link group inline-flex items-center gap-3 text-sm text-white/70"
                        href={link.href}
                      >
                        <span>{link.label}</span>
                        <span
                          aria-hidden="true"
                          className="site-footer__arrow"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="site-footer__contact">
              <p className="site-footer__label font-sans text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/45">
                Get in touch
              </p>

              <div className="mt-4 flex flex-col items-start gap-2.5">
                <Link
                  className="site-footer__link site-footer__contact-link group inline-flex items-center gap-3 text-sm text-white/70"
                  href="/contact"
                  style={{ "--link-index": 4 } as CSSProperties}
                >
                  <span>Start a project</span>
                  <span aria-hidden="true" className="site-footer__arrow">↗</span>
                </Link>

                <a
                  className="site-footer__link site-footer__contact-link group inline-flex items-center gap-3 text-sm text-white/70"
                  href="https://github.com/555amowner-bit"
                  target="_blank"
                  rel="noreferrer"
                  style={{ "--link-index": 5 } as CSSProperties}
                >
                  <span>GitHub</span>
                  <span aria-hidden="true" className="site-footer__arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__meta mt-8 flex flex-col gap-2.5 pt-1 font-sans text-[0.625rem] text-white/45 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 5:55 AM Studio. All rights reserved.</p>
          <p className="uppercase tracking-[0.14em]">
            05:55 / Ho Chi Minh City
          </p>
        </div>
      </div>

      <style jsx global>{`
        .site-footer {
          isolation: isolate;
          --footer-ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-footer,
        .site-footer * {
          box-sizing: border-box;
        }

        .site-footer__gradient {
          z-index: -1;
          background: linear-gradient(
            180deg,
            #08090b 0%,
            #0d0e10 24%,
            #131313 62%,
            #181818 100%
          );
          opacity: 0;
          transition: opacity 1400ms var(--footer-ease);
        }

        .site-footer__intro,
        .site-footer__links,
        .site-footer__meta {
          opacity: 0;
          filter: blur(6px);
          transform: translate3d(0, 22px, 0);
          transition:
            opacity 1000ms var(--footer-ease),
            filter 1100ms var(--footer-ease),
            transform 1150ms var(--footer-ease);
          will-change: opacity, filter, transform;
        }

        .site-footer__intro {
          transition-delay: 70ms;
        }

        .site-footer__links {
          transition-delay: 220ms;
        }

        .site-footer__label {
          opacity: 0;
          filter: blur(4px);
          transform: translate3d(0, 12px, 0);
          transition:
            opacity 750ms var(--footer-ease),
            filter 850ms var(--footer-ease),
            transform 850ms var(--footer-ease);
          transition-delay: calc(250ms + var(--label-index, 0) * 100ms);
        }

        .site-footer__links > div:first-child .site-footer__label {
          --label-index: 0;
        }

        .site-footer__contact .site-footer__label {
          --label-index: 1;
        }

        .site-footer__link-item,
        .site-footer__contact-link {
          opacity: 0;
          filter: blur(3px);
          transform: translate3d(0, 13px, 0);
          transition:
            opacity 800ms var(--footer-ease),
            filter 850ms var(--footer-ease),
            transform 900ms var(--footer-ease),
            color 350ms var(--footer-ease);
          transition-delay: calc(300ms + var(--link-index, 0) * 75ms);
          will-change: opacity, transform;
        }

        .site-footer__gradient {
          opacity: 0;
          transition: opacity 1500ms var(--footer-ease);
        }

        .site-footer__intro,
        .site-footer__links,
        .site-footer__meta,
        .site-footer__label,
        .site-footer__link-item,
        .site-footer__contact-link {
          backface-visibility: hidden;
        }

        .site-footer.is-visible .site-footer__gradient {
          opacity: 1;
        }

        .site-footer.is-visible .site-footer__intro,
        .site-footer.is-visible .site-footer__links,
        .site-footer.is-visible .site-footer__meta {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .site-footer.is-visible .site-footer__label {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .site-footer.is-visible .site-footer__link-item,
        .site-footer.is-visible .site-footer__contact-link {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .site-footer__logo {
          display: inline-block;
          transform-origin: left center;
          transition:
            opacity 450ms var(--footer-ease),
            transform 650ms var(--footer-ease),
            letter-spacing 650ms var(--footer-ease);
        }

        .site-footer__logo:hover {
          transform: translate3d(2px, 0, 0) scale(1.015);
          letter-spacing: -0.045em;
        }

        .site-footer__link {
          position: relative;
          transform: none;
          transform-origin: left center;
          transition:
            color 350ms var(--footer-ease),
            text-shadow 550ms var(--footer-ease);
        }

        .site-footer__link > span:first-child {
          display: inline-block;
          transform: translate3d(0, 0, 0);
          transition:
            transform 450ms var(--footer-ease),
            color 350ms var(--footer-ease);
        }

        .site-footer__link:hover {
          color: #ffffff;
          text-shadow: 0 5px 18px rgba(255, 255, 255, 0.12);
        }

        .site-footer__link:hover > span:first-child {
          transform: translate3d(0, -1px, 0);
        }

        .site-footer__arrow {
          display: inline-block;
          opacity: 0.72;
          transition:
            transform 450ms var(--footer-ease),
            opacity 350ms var(--footer-ease);
        }

        .site-footer__link:hover .site-footer__arrow {
          opacity: 1;
          transform: translate3d(4px, -1px, 0);
        }

        @media (max-width: 767px) {
          .site-footer__intro,
          .site-footer__links,
          .site-footer__label,
          .site-footer__meta,
          .site-footer__link-item,
          .site-footer__contact-link {
            filter: none;
          }

          .site-footer__logo:hover {
            transform: translate3d(2px, 0, 0) scale(1.015);
            letter-spacing: inherit;
          }

          .site-footer__link:hover > span:first-child {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-footer *,
          .site-footer__gradient {
            animation: none !important;
            transition: none !important;
            filter: none !important;
            transform: none !important;
            opacity: 1 !important;
            will-change: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}
