const process = [
  {
    number: "01",
    title: "LISTEN",
    description:
      "Understand the business, the audience, and the problem before deciding what to build.",
    principle: "Ask before adding.",
  },
  {
    number: "02",
    title: "BUILD",
    description: "Turn that understanding into a focused, purposeful digital experience.",
    principle: "Make what matters.",
  },
  {
    number: "03",
    title: "IMPROVE",
    description: "Listen to feedback, learn from the work, and make the next version better.",
    principle: "Better every time.",
  },
] as const;

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="border-t border-border py-20 sm:py-24 md:py-32"
    >
      <div className="site-container">
        <div className="grid-12 gap-y-12 md:gap-y-0">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">How We Work.</p>
            <h2 id="how-we-work-heading" className="type-h2 mt-6 max-w-[9ch]">
              Good work starts with listening.
            </h2>
            <p className="mt-7 max-w-[27rem] text-base leading-7 text-stone">
              We start by understanding what matters to your business, then build around it.
              Every project is a chance to listen, learn, and improve.
            </p>
          </div>

          <ol
            aria-label="How 5:55 AM approaches client work"
            className="col-span-12 md:col-span-8 md:col-start-5"
          >
            {process.map((item) => (
              <li key={item.number} className="group/approach border-t border-border last:border-b">
                <article className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 py-8 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:gap-x-6 sm:py-10 md:grid-cols-[4.5rem_minmax(0,1fr)_auto] md:gap-x-8 md:py-12">
                  <span
                    aria-hidden="true"
                    className="font-display text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.85] tracking-[-0.055em] text-ink"
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold tracking-[0.08em] text-ink motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out group-hover/approach:translate-x-1 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[34rem] text-base leading-7 text-stone">
                      {item.description}
                    </p>
                    <p className="mt-6 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-stone md:hidden">
                      {item.principle}
                    </p>
                  </div>
                  <p className="hidden self-start pt-1 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-stone md:block">
                    {item.principle}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
