import Link from "next/link";

const exploreLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <Link
              href="/"
              aria-label="5:55 AM home"
              className="inline-flex text-decoration-none"
            >
              <span className="font-display text-4xl leading-none tracking-[-0.04em]">
                5:55 AM
              </span>
            </Link>

            <p className="mt-4 text-small text-stone">
              Independent Web Studio
            </p>

            <p className="mt-8 max-w-xs font-display text-2xl leading-none tracking-[-0.03em] sm:text-3xl">
              Building what matters.
            </p>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 lg:col-start-8">
            <p className="eyebrow">EXPLORE</p>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="text-link" href={link.href}>
                      <span>{link.label}</span>
                      <span aria-hidden="true" className="button-arrow">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-3">
            <p className="eyebrow">GET IN TOUCH</p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <Link className="text-link" href="/contact">
                <span>Start a project</span>
                <span aria-hidden="true" className="button-arrow">
                  →
                </span>
              </Link>

              <a
                className="text-link"
                href="https://github.com/555amowner-bit"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span aria-hidden="true" className="button-arrow">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-5 sm:mt-20">
          <div className="flex flex-col gap-3 text-small text-stone sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 5:55 AM</p>

            <p className="uppercase tracking-[0.14em]">
              05:55 / Ho Chi Minh City
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}