"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const inputClassName =
  "mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-base text-[#f3f1ec] outline-none transition-colors placeholder:text-white/35 focus:border-[#f3f1ec]/80 focus:ring-0";

const selectClassName =
  "mt-3 w-full cursor-pointer rounded-xl border border-white/12 bg-white/[0.035] px-4 py-3.5 text-base text-[#f3f1ec] outline-none transition-[border-color,background-color,box-shadow] duration-200 hover:border-white/25 hover:bg-white/[0.05] focus:border-[#f3f1ec]/60 focus:bg-white/[0.055] focus:ring-2 focus:ring-white/[0.06]";

const selectStyle = {
  colorScheme: "dark" as const,
  backgroundColor: "#111214",
  color: "#f3f1ec",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [budgetCurrency, setBudgetCurrency] = useState<"VND" | "USD">("VND");
  const [budgetTier, setBudgetTier] = useState("");

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const sections = Array.from(
      form.querySelectorAll<HTMLElement>("[data-contact-reveal]")
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          element.animate(
            [
              { opacity: 0, transform: "translate3d(0, 22px, 0)", filter: "blur(7px)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0)" },
            ],
            {
              duration: 850,
              delay: Number(element.dataset.contactDelay ?? 0),
              easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
              fill: "both",
            }
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
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

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "");
    const business = String(formData.get("business") ?? "");
    const email = String(formData.get("email") ?? "");
    const businessType = String(formData.get("businessType") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const websiteStatus = String(formData.get("websiteStatus") ?? "");
    const budget = String(formData.get("budget") ?? "");
    const timeline = String(formData.get("timeline") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `New project inquiry — ${
      business || name || "5:55 AM"
    }`;

    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      "",
      `Business type: ${businessType}`,
      `Project type: ${projectType}`,
      `Current website: ${websiteStatus}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      "What they need:",
      message,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "555amowner@gmail.com");
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    const gmailWindow = window.open(
      gmailUrl.toString(),
      "555am-gmail-compose"
    );

    if (!gmailWindow) {
      setStatus(
        "Gmail could not be opened. Please allow pop-ups for this site and try again."
      );
      setIsSubmitting(false);
      return;
    }

    const gtag = (
      window as typeof window & {
        gtag?: (
          command: string,
          eventName: string,
          parameters?: Record<string, string>
        ) => void;
      }
    ).gtag;

    gtag?.("event", "generate_lead", {
      lead_source: "contact_form",
    });

    setIsSubmitting(true);
    setStatus("Gmail opened in a new tab.");
  }

  return (
    <>
      <div ref={cursorGlowRef} aria-hidden="true" className="contact-cursor-glow" />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form-card space-y-10 text-[#f3f1ec] sm:space-y-12"
      >
      {/* 01 — ABOUT YOU */}
      <div data-contact-reveal data-contact-delay="40" className="pt-1">
        <p className="eyebrow text-white/50">01 — ABOUT YOU</p>

        <div className="mt-8 grid-12 gap-x-6 gap-y-8">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="name" className="text-small text-white/80">
              Your name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClassName}
              placeholder="Your name"
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="business" className="text-small text-white/80">
              Business name *
            </label>

            <input
              id="business"
              name="business"
              type="text"
              autoComplete="organization"
              required
              className={inputClassName}
              placeholder="Business name"
            />
          </div>

          <div className="col-span-12">
            <label htmlFor="email" className="text-small text-white/80">
              Email address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClassName}
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      {/* 02 — ABOUT YOUR BUSINESS */}
      <div data-contact-reveal data-contact-delay="60" className="border-t border-white/[0.08] pt-7">
        <p className="eyebrow text-white/50">
          02 — ABOUT YOUR BUSINESS
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <label
              htmlFor="businessType"
              className="text-small text-white/80"
            >
              What do you do? *
            </label>

            <select
              id="businessType"
              name="businessType"
              required
              defaultValue=""
              className={selectClassName}
              style={selectStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Hair Salon">Hair Salon</option>
              <option value="Spa">Spa</option>
              <option value="Nail Studio">Nail Studio</option>
              <option value="Barber">Barber</option>
              <option value="Beauty / Skincare">Beauty / Skincare</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="text-small text-white/80"
            >
              What do you need? *
            </label>

            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={selectClassName}
              style={selectStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="New website">I need a new website</option>
              <option value="Website redesign">
                I need to redesign my current website
              </option>
              <option value="Landing page">I need a landing page</option>
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="websiteStatus"
              className="text-small text-white/80"
            >
              Your current website
            </label>

            <select
              id="websiteStatus"
              name="websiteStatus"
              defaultValue=""
              className={selectClassName}
              style={selectStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="No website">I don&apos;t have one</option>
              <option value="Outdated website">
                I have one, but it&apos;s outdated
              </option>
              <option value="Needs improvement">
                I have one and need improvements
              </option>
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>
          </div>
        </div>
      </div>

      {/* 03 — PROJECT */}
      <div data-contact-reveal data-contact-delay="60" className="border-t border-white/[0.08] pt-7">
        <p className="eyebrow text-white/50">03 — PROJECT</p>

        <div className="mt-8 space-y-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <label htmlFor="budget" className="text-small text-white/80">
                Budget
              </label>

              <div
                role="group"
                aria-label="Budget currency"
                className="contact-budget-currency relative inline-flex min-w-[8.5rem] items-center rounded-full border border-white/10 bg-white/[0.035] p-1"
              >
                <span
                  aria-hidden="true"
                  className="contact-budget-currency__indicator pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full border-2 border-[#f3f1ec] bg-[#f3f1ec] shadow-[0_1px_8px_rgba(0,0,0,0.22)]"
                  style={{
                    transform:
                      budgetCurrency === "USD"
                        ? "translateX(calc(100% + 0.25rem))"
                        : "translateX(0)",
                  }}
                />
                <button
                  type="button"
                  aria-pressed={budgetCurrency === "VND"}
                  onClick={() => setBudgetCurrency("VND")}
                  className={`relative z-10 min-h-8 flex-1 rounded-full px-3 text-xs font-medium transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    budgetCurrency === "VND"
                      ? "text-[#08090b]"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  VND ₫
                </button>
                <button
                  type="button"
                  aria-pressed={budgetCurrency === "USD"}
                  onClick={() => setBudgetCurrency("USD")}
                  className={`relative z-10 min-h-8 flex-1 rounded-full px-3 text-xs font-medium transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    budgetCurrency === "USD"
                      ? "text-[#08090b]"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  USD $
                </button>
              </div>
            </div>

            <select
              id="budget"
              name="budget"
              value={budgetTier}
              onChange={(event) => setBudgetTier(event.target.value)}
              className={selectClassName}
              style={selectStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              {budgetCurrency === "VND" ? (
                <>
                  <option value="Under 3M₫">Under 3M₫</option>
                  <option value="3–5M₫">3–5M₫</option>
                  <option value="5–10M₫">5–10M₫</option>
                  <option value="10M₫+">10M₫+</option>
                </>
              ) : (
                <>
                  <option value="Under $120">Under $120</option>
                  <option value="$120–$300">$120–$300</option>
                  <option value="$300–$600">$300–$600</option>
                  <option value="$600+">$600+</option>
                </>
              )}
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>

            <p className="mt-2 text-xs leading-5 text-white/35">
              {budgetCurrency === "VND"
                ? "Budget for clients in Vietnam."
                : "Budget for international clients."}
            </p>
          </div>

          <div>
            <label htmlFor="timeline" className="text-small text-white/80">
              Desired timeline
            </label>

            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={selectClassName}
              style={selectStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="As soon as possible">
                As soon as possible
              </option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1–3 months">1–3 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-small text-white/80">
              Tell us more *
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${inputClassName} resize-none`}
              placeholder="What would you like your website to help you achieve?"
            />
          </div>
        </div>
      </div>

      {/* SUBMIT */}
      <div data-contact-reveal data-contact-delay="80" className="border-t border-white/[0.10] pt-7">
        <button
          type="submit"
          className="group inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-[#f3f1ec] bg-[#f3f1ec] px-5 py-3 text-sm font-medium text-[#08090b] shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_34px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[15rem]"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          <span>
            {isSubmitting ? "Gmail opened" : "Start the conversation"}
          </span>

          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </button>

        <p
          aria-live="polite"
          className="mt-4 max-w-md text-xs leading-5 text-white/45"
        >
          {status ||
            "Submitting this form will open Gmail with the message prepared for 5:55 AM."}
        </p>
      </div>
      </form>
      <style jsx global>{`
        .contact-budget-currency__indicator {
          transition: transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
          backface-visibility: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-budget-currency__indicator {
            transition: none !important;
          }
        }

        .contact-form-card select {
          color-scheme: dark;
        }

        .contact-form-card select option {
          background-color: #111214;
          color: #f3f1ec;
        }

        .contact-form-card select option:disabled {
          color: #8b8b8b;
        }

        .contact-cursor-glow {
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

        @media (hover: none), (pointer: coarse) {
          .contact-cursor-glow { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-cursor-glow { display: none; transition: none; }
        }
      `}</style>
    </>
  );
}