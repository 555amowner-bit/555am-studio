import Link from "next/link";

function TimeCard() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border border-border bg-white p-4 sm:p-5"
    >
      <div className="flex aspect-[1.08] flex-col justify-between border border-border bg-paper p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-border pb-4 text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-stone sm:pb-5 sm:text-[0.625rem]">
          <span>5:55 AM STUDIO</span>
          <span>01 / 01</span>
        </div>

        <div className="relative flex flex-1 items-center py-10 sm:py-14">
          <div className="absolute left-0 top-1/2 h-px w-full bg-border" />
          <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-border" />

          <p className="relative w-full whitespace-nowrap font-display text-[clamp(3rem,8vw,7rem)] leading-[0.82] tracking-[-0.075em] text-ink">
            05:55 AM
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.14em] text-stone sm:pt-5 sm:text-[0.625rem]">
          <span>A beginning, every morning.</span>
          <span className="font-display text-xl leading-none text-ink sm:text-2xl">
            ✳
          </span>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow">ABOUT 5:55 AM</p>

              <h1 className="type-display mt-6 max-w-[8ch]">
                A beginning, every morning.
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-end">
              <p className="text-large max-w-md text-stone">
                An independent web studio built around a simple belief:
                listen first, build with purpose, and keep improving.
              </p>
            </div>

            <div className="col-span-12 mt-4 lg:mt-8">
              <TimeCard />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">WHY 5:55 AM?</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <h2 className="type-h2 max-w-[10ch]">
                A new day. A new opportunity.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-large text-stone">
                <p>
                  5:55 AM is the time Charl wakes up most mornings. To him, it
                  represents a beginning — a new day, a new opportunity, and
                  the beginning of a journey to build something of his own.
                </p>

                <p>
                  That idea became the foundation for the studio: start with
                  what matters, make something purposeful, and keep moving
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">HOW WE THINK.</p>

              <p className="mt-6 max-w-xs text-base leading-7 text-stone">
                The same principle shapes the way we approach every project.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-border border-y border-border">
                <article className="py-10 sm:py-12">
                  <div className="grid-12 gap-y-6">
                    <span className="col-span-12 font-display text-5xl leading-none tracking-[-0.04em] sm:col-span-2">
                      01
                    </span>

                    <div className="col-span-12 sm:col-span-10">
                      <p className="eyebrow">LISTEN FIRST.</p>

                      <h2 className="mt-4 max-w-[10ch] font-display text-3xl leading-none tracking-[-0.04em] sm:text-4xl">
                        Understand before adding.
                      </h2>

                      <p className="mt-5 max-w-xl text-base leading-7 text-stone">
                        Start with the business, the audience, and the actual
                        problem before deciding what needs to be built.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="py-10 sm:py-12">
                  <div className="grid-12 gap-y-6">
                    <span className="col-span-12 font-display text-5xl leading-none tracking-[-0.04em] sm:col-span-2">
                      02
                    </span>

                    <div className="col-span-12 sm:col-span-10">
                      <p className="eyebrow">BUILD WITH PURPOSE.</p>

                      <h2 className="mt-4 max-w-[10ch] font-display text-3xl leading-none tracking-[-0.04em] sm:text-4xl">
                        Make what matters.
                      </h2>

                      <p className="mt-5 max-w-xl text-base leading-7 text-stone">
                        Turn that understanding into a focused digital
                        experience with a clear reason for every important
                        element.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="py-10 sm:py-12">
                  <div className="grid-12 gap-y-6">
                    <span className="col-span-12 font-display text-5xl leading-none tracking-[-0.04em] sm:col-span-2">
                      03
                    </span>

                    <div className="col-span-12 sm:col-span-10">
                      <p className="eyebrow">KEEP IMPROVING.</p>

                      <h2 className="mt-4 max-w-[10ch] font-display text-3xl leading-none tracking-[-0.04em] sm:text-4xl">
                        Better every time.
                      </h2>

                      <p className="mt-5 max-w-xl text-base leading-7 text-stone">
                        Learn from the work, listen to feedback, and keep
                        improving the experience after launch.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">BUILT BY CHARL.</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <h2 className="type-h2 max-w-[10ch]">
                One person, one studio, one simple direction.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-large text-stone">
                <p>
                  5:55 AM is an independent web studio built by Charl,
                  bringing web design and development together in one focused
                  practice.
                </p>

                <p>
                  The work is shaped around a simple belief: listen first,
                  build with purpose, and keep improving.
                </p>
              </div>

              <div className="mt-10">
                <Link className="text-link" href="/work">
                  <span>See the work</span>
                  <span aria-hidden="true" className="button-arrow">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="eyebrow">A SIMPLE BELIEF.</p>

              <h2 className="type-display mt-6 max-w-[9ch]">
                Listen first. Build with purpose. Keep improving.
              </h2>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link className="button-primary" href="/contact">
                  <span>Start a project</span>
                  <span aria-hidden="true" className="button-arrow">
                    →
                  </span>
                </Link>

                <Link className="text-link" href="/services">
                  <span>Explore services</span>
                  <span aria-hidden="true" className="button-arrow">
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
          <div className="flex flex-col gap-2 text-small text-stone sm:flex-row sm:items-center sm:justify-between">
            <span>ABOUT 5:55 AM / BUILT BY CHARL</span>
            <span>5:55 AM</span>
          </div>
        </div>
      </section>
    </>
  );
}