import Link from "next/link";

const services = [
  {
    number: "01",
    name: "START",
    price: "From 1,500,000₫",
    description:
      "For businesses that need a focused website interface.",
    items: [
      "Focused landing page UI layout",
      "Responsive desktop, tablet, and mobile designs",
      "Clear call to action layout",
      "Core interface components",
      "Design handoff",
    ],
  },
  {
    number: "02",
    name: "BUSINESS",
    price: "From 3,000,000₫",
    description:
      "For businesses that need a complete, professional website interface.",
    items: [
      "Multi-section website UI layouts",
      "Responsive desktop, tablet, and mobile designs",
      "Services / menu / gallery layouts",
      "Contact and location layouts",
      "Visual system and interface components",
      "Design handoff",
    ],
  },
  {
    number: "03",
    name: "CUSTOM",
    price: "From 6,000,000₫",
    description:
      "For businesses with specific requirements that call for a more tailored interface.",
    items: [
      "Tailored website UI design",
      "Advanced page layouts or flows",
      "Custom interface components",
      "More complex content structures",
      "Detailed design handoff",
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">SERVICES</p>

              <h1 className="type-display mt-6 max-w-[8ch]">
                Simple solutions for real needs.
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:flex lg:items-end">
              <p className="text-large max-w-md text-stone">
                From focused landing pages to tailored business interfaces, we
                design around what your business actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">WHAT WE BUILD.</p>

              <p className="mt-6 max-w-xs text-base leading-7 text-stone">
                Different businesses need different levels of design support.
                The scope grows with the problem, not the other way around.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-border border-y border-border">
                {services.map((service) => (
                  <article
                    key={service.number}
                    className="py-10 sm:py-12"
                  >
                    <div className="grid-12 gap-y-8">
                      <div className="col-span-12 sm:col-span-2">
                        <span className="font-display text-5xl leading-none tracking-[-0.04em]">
                          {service.number}
                        </span>
                      </div>

                      <div className="col-span-12 sm:col-span-10">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="eyebrow">{service.name}</p>

                            <p className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                              {service.price}
                            </p>
                          </div>
                        </div>

                        <p className="text-large mt-6 max-w-xl text-stone">
                          {service.description}
                        </p>

                        <ul className="mt-8 space-y-3 border-t border-border pt-6">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-base"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.55rem] h-px w-4 shrink-0 bg-stone"
                              />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">DESIGN HANDOFF</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <h2 className="type-h2 max-w-[9ch]">
                Ready for the next step.
              </h2>

              <p className="text-large mt-8 max-w-2xl text-stone">
                You receive organized website UI layouts, responsive designs,
                visual systems, and interface components ready to share with
                your development partner.
              </p>

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <Link className="text-link" href="/contact">
                  <span>Ask about design handoff</span>
                  <span aria-hidden="true" className="button-arrow">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="eyebrow">NOT SURE WHAT YOU NEED?</p>

              <h2 className="type-display mt-6 max-w-[9ch]">
                Tell us what your business actually needs.
              </h2>

              <p className="text-large mt-8 max-w-xl text-stone">
                You do not need to arrive with a complete brief. Start with
                the problem and we&apos;ll figure out the right direction
                together.
              </p>

              <div className="mt-10">
                <Link className="button-primary" href="/contact">
                  <span>Start a conversation</span>
                  <span aria-hidden="true" className="button-arrow">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
