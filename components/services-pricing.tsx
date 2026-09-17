import Link from "next/link";

type Service = {
  number: string;
  name: string;
  price: string;
  description: string;
  details: readonly string[];
  featured?: boolean;
};

const services = [
  {
    number: "01",
    name: "START",
    price: "From 1,500,000₫",
    description: "For businesses that need a focused place to get online.",
    details: [
      "Focused landing page",
      "Responsive design",
      "Clear call to action",
      "Basic SEO setup",
      "Deployment",
    ],
  },
  {
    number: "02",
    name: "BUSINESS",
    price: "From 3,000,000₫",
    description: "For businesses that need a complete, professional web presence.",
    details: [
      "Multi-section business website",
      "Responsive design",
      "Services / menu / gallery",
      "Contact and location",
      "Basic SEO setup",
      "Deployment",
      "Post-launch support",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "CUSTOM",
    price: "From 6,000,000₫",
    description:
      "For businesses with specific requirements that call for a more tailored solution.",
    details: [
      "Tailored design",
      "Advanced sections or flows",
      "Custom integrations where appropriate",
      "More complex content structures",
      "Extended implementation scope",
    ],
  },
] satisfies readonly Service[];

export function ServicesPricing() {
  return (
    <section
      id="services-pricing"
      aria-labelledby="services-pricing-heading"
      className="border-t border-border py-20 sm:py-24 md:py-32"
    >
      <div className="site-container">
        <div className="grid-12 gap-y-8 md:gap-y-0">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">What We Build.</p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5 lg:col-span-6">
            <h2 id="services-pricing-heading" className="type-h2 max-w-[10ch]">
              Simple solutions for real needs.
            </h2>
            <p className="mt-6 max-w-[34rem] text-base leading-7 text-stone sm:mt-7">
              From focused landing pages to fully tailored business websites, we build
              around what your business actually needs.
            </p>
          </div>
        </div>

        <div className="mt-16 grid-12 items-stretch gap-y-12 sm:mt-20 md:mt-24 md:gap-x-8 md:gap-y-0">
          {services.map((service) => (
            <article
              key={service.number}
              className={`group/service col-span-12 border-t border-border pt-5 sm:pt-6 md:col-span-4 md:min-h-[28rem] md:pb-5 ${
                service.featured
                  ? "bg-white md:-mt-4 md:border-x md:border-t-ink md:px-5 md:pt-9"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="font-display text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.85] tracking-[-0.055em] text-ink"
                >
                  {service.number}
                </span>
                <span
                  aria-hidden="true"
                  className="pt-1 font-sans text-sm text-stone opacity-0 transition-opacity duration-200 group-hover/service:opacity-100 motion-reduce:opacity-100"
                >
                  →
                </span>
              </div>

              <h3 className="mt-8 font-sans text-base font-semibold tracking-[0.08em] text-ink transition-transform duration-200 ease-out group-hover/service:translate-x-1 motion-reduce:transform-none sm:mt-10 sm:text-lg">
                {service.name}
              </h3>
              <p className="mt-3 font-sans text-[clamp(1.35rem,2.2vw,2rem)] font-medium leading-[1.1] tracking-[-0.035em] text-ink">
                {service.price}
              </p>
              <p className="mt-5 max-w-[19rem] text-base leading-7 text-stone">
                {service.description}
              </p>

              <ul className="mt-7 space-y-2.5 border-t border-border pt-5 text-small text-ink sm:mt-8 sm:pt-6">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="text-stone">
                      —
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside
          aria-labelledby="website-care-heading"
          className="mt-16 border-y border-border sm:mt-20"
        >
          <div className="grid-12 items-start gap-y-6 py-7 sm:py-8 md:gap-y-0 md:py-9">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">Website Care</p>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                <div>
                  <h3 id="website-care-heading" className="type-h3 max-w-[14ch]">
                    Keep it running. Keep it improving.
                  </h3>
                  <p className="mt-4 max-w-[30rem] text-base leading-7 text-stone">
                    Ongoing updates, fixes, and support after launch.
                  </p>
                </div>
                <p className="font-sans text-lg font-medium leading-tight tracking-[-0.02em] text-ink sm:pt-1 sm:text-right">
                  From 300,000₫ / month
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="mt-12 sm:mt-14">
          <Link href="/contact" className="text-link text-base">
            Let&apos;s talk about what you need <span className="button-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
