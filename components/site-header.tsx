
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isWorkPage = pathname === "/work";
  const isServicesPage = pathname === "/services";
  const isDarkPage = isHomePage || isWorkPage || pathname === "/about" || pathname === "/contact";
  const isOverlayPage = isDarkPage || isServicesPage;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 16);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const headerClassName = isServicesPage
    ? isScrolled
      ? "fixed inset-x-0 top-0 border-b border-white/[0.08] bg-[#08090b]/75 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
      : "fixed inset-x-0 top-0 border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
    : isDarkPage
      ? isScrolled
        ? "fixed inset-x-0 top-0 border-b border-white/[0.08] bg-[#08090b]/10 shadow-none backdrop-blur-md"
        : "fixed inset-x-0 top-0 border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
      : "sticky top-0 border-b border-border/80 bg-paper/95 backdrop-blur-sm";

  const navigationLinkClassName = isOverlayPage
    ? "text-sm font-medium text-white/90 transition-colors hover:text-white"
    : "text-sm font-medium text-ink transition-colors hover:text-stone";

  const actionClassName = isOverlayPage
    ? "hidden min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/95 px-5 text-sm font-medium text-[#08090b] transition-colors duration-200 hover:bg-white md:inline-flex"
    : "button-primary hidden rounded-full md:inline-flex";

  return (
    <header
      className={`${headerClassName} z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] ${isServicesPage ? "duration-500" : "duration-300"}`}
    >
      <div className="site-container flex min-h-[4.5rem] items-center justify-between md:min-h-20">
        <Link
          href="/"
          className="shrink-0"
          aria-label="5:55 AM home"
        >
          <Image
            src="/brand/logo.png"
            alt="5:55 AM"
            width={1774}
            height={887}
            priority
            sizes="(max-width: 767px) 6rem, 7.5rem"
            className={`h-auto w-24 transition-transform duration-300 ease-out hover:scale-[1.02] md:w-30 ${
              isOverlayPage ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`site-header__nav-link group relative py-2 ${navigationLinkClassName} ${pathname === item.href ? "is-active" : ""}`}
            >
              <span className="site-header__nav-label">{item.label}</span>
              <span
                aria-hidden="true"
                className="site-header__nav-indicator absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current"
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`site-header__action group ${actionClassName}`}
        >
          <span className="site-header__action-label">Start a project</span>
          <span aria-hidden="true" className="site-header__action-arrow inline-block">→</span>
        </Link>

        <details className="group relative md:hidden">
          <summary
            className={`flex min-h-11 list-none cursor-pointer items-center gap-2 text-sm font-medium [&::-webkit-details-marker]:hidden ${
              isOverlayPage ? "text-white" : "text-ink"
            }`}
          >
            <span>Menu</span>
            <span className="grid w-4 gap-1" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </summary>

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className={`absolute right-0 top-[calc(100%+0.5rem)] z-10 w-[calc(100vw-2.5rem)] rounded-2xl border p-5 shadow-[0_1rem_3rem_rgba(0,0,0,0.2)] backdrop-blur-xl ${
              isOverlayPage
                ? "border-white/10 bg-[#08090b]/90 text-white"
                : "border-border bg-paper/95 text-ink"
            }`}
          >
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between py-3 text-base font-medium transition-colors duration-300 ${
                      isOverlayPage
                        ? "text-white/85 hover:text-white"
                        : "text-ink hover:text-stone"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="site-header__mobile-arrow inline-block opacity-45 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`site-header__mobile-action group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium transition-all duration-500 ${
                isOverlayPage
                  ? "border-white/15 bg-white text-[#08090b] hover:bg-white/90"
                  : "border-ink bg-ink text-white hover:bg-ink/85"
              }`}
            >
              Start a project
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </nav>
        </details>
      </div>

      <style jsx global>{`
        .site-header__nav-link {
          perspective: 700px;
          transform-style: preserve-3d;
          -webkit-tap-highlight-color: transparent;
        }

        .site-header__nav-label {
          display: inline-block;
          position: relative;
          transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          transition:
            transform 560ms cubic-bezier(0.16, 1, 0.3, 1),
            color 420ms ease,
            text-shadow 560ms ease,
            filter 560ms ease;
          will-change: transform;
        }

        .site-header__nav-link::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0.1rem -0.5rem;
          border-radius: 0.45rem;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.17) 0%,
            rgba(255, 255, 255, 0.07) 42%,
            transparent 76%
          );
          opacity: 0;
          transform: translate3d(0, 7px, -18px) scale(0.75);
          transition:
            opacity 450ms ease,
            transform 560ms cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .site-header__nav-indicator {
          transition: transform 560ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .site-header__nav-link:hover,
        .site-header__nav-link:focus-visible,
        .site-header__nav-link.is-active {
          color: #ffffff;
        }

        .site-header__nav-link:hover .site-header__nav-label,
        .site-header__nav-link:focus-visible .site-header__nav-label,
        .site-header__nav-link.is-active .site-header__nav-label {
          transform: translate3d(0, -7px, 24px) rotateX(-14deg) scale(1.1);
          color: #ffffff;
          text-shadow:
            0 1px 0 rgba(255, 255, 255, 0.3),
            0 5px 0 rgba(255, 255, 255, 0.055),
            0 9px 20px rgba(255, 255, 255, 0.32);
          filter: brightness(1.15);
        }

        .site-header__nav-link:hover::before,
        .site-header__nav-link:focus-visible::before,
        .site-header__nav-link.is-active::before {
          opacity: 1;
          transform: translate3d(0, 0, -3px) scale(1);
        }

        .site-header__nav-link:hover .site-header__nav-indicator,
        .site-header__nav-link:focus-visible .site-header__nav-indicator,
        .site-header__nav-link.is-active .site-header__nav-indicator {
          transform: scaleX(1);
        }

        .site-header__action {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transform: translate3d(0, 0, 0) scale(1);
          box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          transition:
            background-color 420ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 420ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 560ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
            color 350ms ease;
          will-change: transform;
        }

        .site-header__action::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -65%;
          bottom: -65%;
          left: -42%;
          width: 30%;
          border-radius: 999px;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 35%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.2) 65%,
            transparent 100%
          );
          opacity: 0;
          transform: translate3d(-180%, 0, 0) skewX(-18deg);
          transition:
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 280ms ease;
          pointer-events: none;
        }

        .site-header__action::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -1px;
          border-radius: inherit;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(255, 255, 255, 0.28),
            transparent 72%
          );
          opacity: 0;
          transition: opacity 450ms ease;
          pointer-events: none;
        }

        .site-header__action:hover,
        .site-header__action:focus-visible {
          transform: translate3d(0, -3px, 0) scale(1.025);
          background-color: #ffffff;
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow:
            0 10px 24px rgba(0, 0, 0, 0.2),
            0 0 26px rgba(255, 255, 255, 0.12);
        }

        .site-header__action:hover::before,
        .site-header__action:focus-visible::before {
          opacity: 1;
          transform: translate3d(520%, 0, 0) skewX(-18deg);
        }

        .site-header__action:hover::after,
        .site-header__action:focus-visible::after {
          opacity: 1;
        }

        .site-header__action-label {
          position: relative;
          transition:
            transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
            letter-spacing 450ms ease;
        }

        .site-header__action:hover .site-header__action-label,
        .site-header__action:focus-visible .site-header__action-label {
          transform: translate3d(-1px, 0, 0);
          letter-spacing: 0.005em;
        }

        .site-header__action-arrow {
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header__action:hover .site-header__action-arrow,
        .site-header__action:focus-visible .site-header__action-arrow {
          transform: translate3d(5px, 0, 0);
        }

        .site-header__mobile-action {
          transition:
            background-color 400ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header__mobile-action:hover {
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);
        }

        @media (hover: none) {
          .site-header__nav-link::before {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header__nav-label,
          .site-header__nav-indicator,
          .site-header__nav-link::before,
          .site-header__action,
          .site-header__action::before,
          .site-header__action::after,
          .site-header__action-label,
          .site-header__action-arrow,
          .site-header__mobile-action,
          .site-header__mobile-arrow {
            transition: none !important;
          }

          .site-header__nav-link:hover .site-header__nav-label,
          .site-header__nav-link:focus-visible .site-header__nav-label,
          .site-header__nav-link.is-active .site-header__nav-label {
            transform: none;
            text-shadow: none;
            filter: none;
          }

          .site-header__nav-link:hover::before,
          .site-header__nav-link:focus-visible::before {
            opacity: 0;
          }

          .site-header__action:hover,
          .site-header__action:focus-visible,
          .site-header__mobile-action:hover {
            transform: none;
            box-shadow: none;
          }

          .site-header__action:hover::before,
          .site-header__action:focus-visible::before,
          .site-header__action:hover::after,
          .site-header__action:focus-visible::after {
            opacity: 0;
            transform: none;
          }

          .site-header__action:hover .site-header__action-arrow,
          .site-header__action:focus-visible .site-header__action-arrow {
            transform: none;
          }
        }
      `}</style>
    </header>
  );
}
