"use client";

import Link from "next/link";
import "./services-page.css";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    name: "Launch",
    title: "Make your first impression count.",
    description:
      "A focused landing page for a new business, service, or idea that deserves to be seen clearly.",
    scope: "Landing pages",
    image: "/images/maison-concept.png",
    alt: "Maison Hair Studio website design concept",
    detail: "One clear story. One confident direction.",
  },
  {
    number: "02",
    name: "Grow",
    title: "Give your business room to grow.",
    description:
      "A considered multi-page experience that brings your services, story, and visual identity together.",
    scope: "Multi-page websites",
    image: "/images/noir-concept.png",
    alt: "Noir Barber website design concept",
    detail: "A coherent experience from page to page.",
  },
  {
    number: "03",
    name: "Custom",
    title: "Built around what makes you different.",
    description:
      "A tailored interface for projects with a more distinctive structure, user journey, or set of requirements.",
    scope: "Tailored UI design",
    image: "/images/aura-concept.png",
    alt: "Aura Skin website design concept",
    detail: "A direction shaped by your actual needs.",
  },
] as const;

const capabilities = [
  {
    number: "01",
    title: "Website UI design",
    description:
      "Distinctive, considered interfaces shaped around your brand, audience, and goals.",
    tag: "The foundation",
  },
  {
    number: "02",
    title: "Responsive layouts",
    description:
      "A consistent experience across desktop, tablet, and mobile screens.",
    tag: "Every screen",
  },
  {
    number: "03",
    title: "Visual systems",
    description:
      "Typography, spacing, color, and components working together as one visual language.",
    tag: "The details",
  },
  {
    number: "04",
    title: "Design handoff",
    description:
      "Organized design files and clear interface guidance for your development partner.",
    tag: "Ready to build",
  },
] as const;

const deliverables = [
  {
    number: "01",
    title: "Responsive page layouts",
    description:
      "Page structures and screen layouts for the devices included in the agreed scope.",
  },
  {
    number: "02",
    title: "Interface components",
    description:
      "Reusable visual elements and patterns that help keep the experience coherent.",
  },
  {
    number: "03",
    title: "Visual direction",
    description:
      "A considered approach to typography, color, spacing, imagery, and overall tone.",
  },
  {
    number: "04",
    title: "Design handoff",
    description:
      "Organized design files and relevant guidance to support implementation.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the brief",
    description:
      "We discuss your business, audience, goals, and requirements to define a clear project scope.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Shape the direction",
    description:
      "We explore the visual language and interface layouts, then refine the work around your feedback.",
  },
  {
    number: "03",
    title: "Deliver",
    subtitle: "Prepare the handoff",
    description:
      "We polish the agreed designs and organize the files and guidance needed for the next step.",
  },
] as const;

export function ServicesPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(() => new Set());
  const [activeService, setActiveService] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);


  useEffect(() => {
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
    return () => {
      window.removeEventListener("pointermove", handleDocumentPointer);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setVisibleItems(new Set(targets.map((node) => node.dataset.reveal ?? "")));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entered = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => (entry.target as HTMLElement).dataset.reveal ?? "");

        if (entered.length) {
          setVisibleItems((previous) => {
            const next = new Set(previous);
            entered.forEach((key) => next.add(key));
            return next;
          });
          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const reveal = (key: string) => (visibleItems.has(key) ? "is-visible" : "");

  return (
    <main
      ref={pageRef}
      className="services-page bg-[#08090b] text-[#f3f1ec]"
    >
      <div
        ref={cursorGlowRef}
        aria-hidden="true"
        className="svc-page__cursor-glow"
      />
      {/* HERO */}
      <section
        aria-labelledby="services-title"
        className="svc-hero relative isolate"
      >
        <div
          className="svc-hero__field relative"
        >
          <div className="site-container relative z-10">
            <div className="svc-hero__topline">
              <span className="svc-hero__eyebrow-pill">Our services</span>
            </div>

            <div className="svc-hero__layout">
              <div
                data-reveal="hero-title"
                className={`svc-reveal svc-hero__copy ${reveal("hero-title")}`}
              >
                <p className="svc-kicker">Digital presence, considered.</p>
                <h1 id="services-title" className="svc-display svc-hero__title">
                  Design that
                  <br />
                  <span>moves you</span>
                  <em>.</em>
                </h1>
                <div className="svc-hero__under">
                  <span className="svc-hero__rule" />
                  <span>Intentional by design. Personal by nature.</span>
                </div>
              </div>

              <div
                data-reveal="hero-note"
                className={`svc-reveal svc-hero__note ${reveal("hero-note")}`}
              >
                <p>
                  We create thoughtful website interfaces that bring clarity
                  to your brand and turn your next step into a more confident
                  digital experience.
                </p>
                <div className="svc-hero__actions">
                  <Link href="/contact" className="svc-hero__primary">
                    <span>Start a project</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <Link href="#service-options" className="svc-hero__secondary">
                    Explore services <span aria-hidden="true">↓</span>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* INTRO / CAPABILITIES */}
      <section
        id="capabilities"
        aria-labelledby="capabilities-title"
        className="svc-section svc-capabilities"
      >
        <div className="site-container">
          <div className="svc-section-head">
            <div
              data-reveal="cap-title"
              className={`svc-reveal ${reveal("cap-title")}`}
            >
              <p className="svc-eyebrow">What we bring to the table</p>
              <h2 id="capabilities-title" className="svc-display svc-heading">
                The craft behind
                <br />
                <span>the feeling.</span>
              </h2>
            </div>
            <p
              data-reveal="cap-intro"
              className={`svc-reveal svc-section-head__note ${reveal("cap-intro")}`}
            >
              Great UI is not decoration. It is a system of decisions that
              makes your business easier to understand, easier to trust, and
              easier to remember.
            </p>
          </div>

          <div className="svc-cap-grid">
            {capabilities.map((item, index) => (
              <article
                key={item.number}
                data-reveal={`cap-${item.number}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`svc-reveal svc-cap-card ${reveal(`cap-${item.number}`)}`}
              >
                <div className="svc-cap-card__top">
                  <span>{item.number}</span>
                  <span>{item.tag}</span>
                </div>
                <div className="svc-cap-card__symbol" aria-hidden="true">
                  {index === 0 ? "↗" : index === 1 ? "⌘" : index === 2 ? "◌" : "↳"}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="svc-cap-card__line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICE SELECTOR */}
      <section
        id="service-options"
        aria-labelledby="service-options-title"
        className="svc-section svc-options"
      >
        <div className="site-container">
          <div className="svc-section-head svc-section-head--options">
            <div
              data-reveal="options-title"
              className={`svc-reveal ${reveal("options-title")}`}
            >
              <p className="svc-eyebrow">A starting point, not a template</p>
              <h2 id="service-options-title" className="svc-display svc-heading">
                Find your
                <br />
                <span>direction.</span>
              </h2>
            </div>
            <p
              data-reveal="options-intro"
              className={`svc-reveal svc-section-head__note ${reveal("options-intro")}`}
            >
              Every project is different. Explore these three directions and
              we will shape the right scope around your goals.
            </p>
          </div>

          <div className="svc-option-tabs" role="tablist" aria-label="Service options">
            <span
              className="svc-option-tabs__indicator"
              aria-hidden="true"
              style={{ transform: `translateX(${activeService * 100}%)` }}
            />
            {services.map((item, index) => (
              <button
                key={item.number}
                id={`service-tab-${item.number}`}
                type="button"
                role="tab"
                aria-selected={activeService === index}
                aria-controls="service-detail"
                onClick={() => setActiveService(index)}
                className={`svc-option-tab ${activeService === index ? "is-active" : ""}`}
              >
                <span>{item.number}</span>
                <span>{item.name}</span>
                <span aria-hidden="true">{activeService === index ? "↗" : "+"}</span>
              </button>
            ))}
          </div>

          <div
            id="service-detail"
            role="tabpanel"
            aria-labelledby={`service-tab-${services[activeService].number}`}
            className="svc-option-detail"
          >
            <div className="svc-option-visual">
              {services.map((item, index) => (
                <div
                  key={item.number}
                  aria-hidden={activeService !== index}
                  className={`svc-option-visual__panel ${activeService === index ? "is-active" : ""}`}
                  style={{ backgroundImage: `url("${item.image}")` }}
                >
                  <div className="svc-option-visual__shade" />
                  <span className="svc-option-visual__index">{item.number} / 03</span>
                  <span className="svc-option-visual__scope">{item.scope}</span>
                  <span className="svc-option-visual__watermark" aria-hidden="true">
                    5:55
                  </span>
                </div>
              ))}
              <div className="svc-option-visual__counter">
                0{activeService + 1}<span> — 03</span>
              </div>
            </div>

              <div key={activeService} className="svc-option-copy">
                <p className="svc-eyebrow">{services[activeService].name} / UI design</p>
                <h3 className="svc-display svc-option-copy__title">
                  {services[activeService].title}
                </h3>
                <p className="svc-option-copy__description">
                  {services[activeService].description}
                </p>
                <p className="svc-option-copy__detail">
                  <span aria-hidden="true">✳</span>
                  {services[activeService].detail}
                </p>
                <Link href="/contact" className="svc-pill-link">
                  <span>Discuss this direction</span>
                  <span aria-hidden="true">↗</span>
                </Link>
                <div className="svc-option-progress" aria-hidden="true">
                  <span style={{ width: `${((activeService + 1) / services.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* DELIVERABLES */}
      <section
        aria-labelledby="deliverables-title"
        className="svc-section svc-deliverables"
      >
        <div className="site-container svc-deliverables__layout">
          <div
            data-reveal="deliverables-intro"
            className={`svc-reveal svc-deliverables__intro ${reveal("deliverables-intro")}`}
          >
            <p className="svc-eyebrow">Clear scope. Considered handoff.</p>
            <h2 id="deliverables-title" className="svc-display svc-heading">
              Good work,
              <br />
              <span>well delivered.</span>
            </h2>
            <p>
              You should know what you are receiving before the project
              begins. We agree on deliverables together, based on the actual
              needs and scope of your project.
            </p>
            <Link href="/contact" className="svc-underlined-link">
              Ask about your project <span aria-hidden="true">↗</span>
            </Link>
            <div className="svc-deliverables__stamp" aria-hidden="true">
              <span>5:55</span>
              <small>DESIGN STUDIO</small>
            </div>
          </div>

          <div className="svc-deliverables__list">
            {deliverables.map((item, index) => (
              <article
                key={item.number}
                data-reveal={`deliverable-${item.number}`}
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`svc-reveal svc-deliverable ${reveal(`deliverable-${item.number}`)}`}
              >
                <span className="svc-deliverable__number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="svc-deliverable__arrow" aria-hidden="true">↗</span>
              </article>
            ))}
            <p className="svc-scope-note">
              Website development, backend functionality, hosting, and ongoing
              maintenance are not included unless separately agreed.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        aria-labelledby="process-title"
        className="svc-section svc-process"
      >
        <div className="site-container">
          <div
            data-reveal="process-intro"
            className={`svc-reveal svc-process__intro ${reveal("process-intro")}`}
          >
            <p className="svc-eyebrow">From brief to handoff</p>
            <h2 id="process-title" className="svc-display svc-heading">
              Thoughtful work
              <br />
              <span>takes intention.</span>
            </h2>
            <p>
              A clear, collaborative process keeps the work focused and the
              decisions connected to your goals.
            </p>
          </div>

          <ol className="svc-process-grid">
            {process.map((item, index) => (
              <li
                key={item.number}
                data-reveal={`process-${item.number}`}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`svc-reveal svc-process-card ${reveal(`process-${item.number}`)}`}
              >
                <div className="svc-process-card__top">
                  <span>{item.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="svc-process-card__subtitle">{item.subtitle}</p>
                <h3 className="svc-display">{item.title}</h3>
                <p className="svc-process-card__description">{item.description}</p>
                <span className="svc-process-card__track" aria-hidden="true">
                  <i style={{ transitionDelay: `${index * 150}ms` }} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="svc-section svc-faq"
      >
        <div className="site-container svc-faq__layout">
          <div
            data-reveal="faq-intro"
            className={`svc-reveal ${reveal("faq-intro")}`}
          >
            <p className="svc-eyebrow">A few useful things to know</p>
            <h2 id="faq-title" className="svc-display svc-heading">
              Before we
              <br />
              <span>get started.</span>
            </h2>
          </div>
          <div className="svc-faq-list">
            {[
              {
                question: "Do you build the website too?",
                answer:
                  "Our focus is website UI design. Development, backend functionality, hosting, and maintenance are outside the standard design scope unless we explicitly agree otherwise.",
              },
              {
                question: "What if I am not sure what I need yet?",
                answer:
                  "That is completely fine. Start with your business, audience, and what you want the website to achieve. We can discuss the requirements and define a suitable scope together.",
              },
              {
                question: "What will I receive at the end?",
                answer:
                  "Deliverables depend on the agreed scope, but can include responsive page layouts, interface components, visual direction, and organized design files for handoff.",
              },
              {
                question: "How do we begin?",
                answer:
                  "Send us a short note about your project through the contact page. You do not need a complete brief to start the conversation.",
              },
            ].map((item, index) => (
              <article
                key={item.question}
                data-reveal={`faq-${index}`}
                className={`svc-reveal svc-faq-item ${reveal(`faq-${index}`)} ${faqOpen === index ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={faqOpen === index}
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="svc-faq-item__trigger"
                >
                  <span className="svc-faq-item__number">0{index + 1}</span>
                  <span>{item.question}</span>
                  <span className="svc-faq-item__toggle" aria-hidden="true">
                    {faqOpen === index ? "−" : "+"}
                  </span>
                </button>
                <div className="svc-faq-item__answer">
                  <div><p>{item.answer}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="svc-closing relative isolate overflow-hidden">
        <div className="svc-closing__orbit" aria-hidden="true"><span /><span /></div>
        <div className="site-container relative z-10">
          <div className="svc-closing__topline">
            <span className="svc-eyebrow">Your next chapter starts here</span>
            <span className="svc-index">5:55 AM / STUDIO</span>
          </div>
          <div className="svc-closing__layout">
            <div
              data-reveal="closing-title"
              className={`svc-reveal ${reveal("closing-title")}`}
            >
              <h2 className="svc-display svc-closing__title">
                Let&apos;s make
                <br />
                <span>it matter.</span>
              </h2>
            </div>
            <div
              data-reveal="closing-copy"
              className={`svc-reveal svc-closing__copy ${reveal("closing-copy")}`}
            >
              <p>
                You do not need every answer before you begin. Tell us what
                you are building, and we will find a thoughtful direction
                together.
              </p>
              <Link href="/contact" className="svc-cta">
                <span>Start a conversation</span>
                <span className="svc-cta__icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
