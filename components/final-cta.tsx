export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="site-container">
        <div className="grid-12 items-end gap-y-16">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow">LET&apos;S BUILD SOMETHING.</p>

            <h2
              id="final-cta-heading"
              className="type-display mt-6 max-w-4xl"
            >
              Have something in mind?
            </h2>

            <p className="text-large mt-8 max-w-xl text-stone">
              Tell us what you actually need. We&apos;ll figure out the rest
              together.
            </p>

            <div className="mt-10">
              <a className="button-primary" href="/contact">
                <span>Start a project</span>
                <span aria-hidden="true" className="button-arrow">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <div className="border-t border-border pt-4 lg:ml-auto lg:max-w-xs">
              <p className="text-small uppercase tracking-[0.14em] text-stone">
                05:55 AM
              </p>

              <p className="mt-3 max-w-[18rem] font-display text-2xl leading-none tracking-[-0.03em] sm:text-3xl">
                A beginning, every morning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}