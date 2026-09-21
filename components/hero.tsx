import Link from "next/link";

export function Hero() {
  return (
    <main>
      <section className="site-container py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid-12 items-center gap-y-14 lg:gap-y-0">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6">
            <p className="eyebrow">Independent Web Studio</p>

            <h1 className="type-display mt-6 max-w-[9.5ch]">
              You don&apos;t need more. <br />
              You need what matters.
            </h1>

            <p className="text-large mt-8 max-w-[34rem] text-stone">
              We design and build thoughtful websites for local businesses —
              focused on what your customers actually need.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/contact" className="button-primary">
                Start a project{" "}
                <span className="button-arrow" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link href="/work" className="text-link">
                See our work{" "}
                <span className="button-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 xl:col-start-7 xl:col-span-6">
            <div
              className="ml-auto w-full max-w-[36rem] border border-border bg-white p-2 shadow-[0_1rem_3rem_rgba(10,10,10,0.06)] sm:p-3"
              aria-hidden="true"
            >
              <div className="flex h-9 items-center justify-between border-b border-border px-2 sm:px-3">
                <div className="flex gap-1.5">
                  <span className="size-1.5 bg-ink" />
                  <span className="size-1.5 bg-border" />
                  <span className="size-1.5 bg-border" />
                </div>

                <span className="font-sans text-[0.5rem] font-semibold tracking-[0.14em] text-stone">
                  CONCEPT / WEBSITE PREVIEW
                </span>
              </div>

              <div className="grid aspect-[1.08] grid-rows-[auto_1fr] gap-5 px-4 py-5 sm:gap-7 sm:px-7 sm:py-8">
                <div className="flex items-center justify-between border-b border-border pb-3 font-sans text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-ink sm:text-[0.625rem]">
                  <span>Studio name</span>

                  <div className="flex gap-3 text-stone sm:gap-5">
                    <span>About</span>
                    <span>Visit</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="grid min-h-0 grid-cols-5 gap-3 sm:gap-5">
                  <div className="col-span-3 flex min-h-0 flex-col justify-between bg-paper p-4 sm:p-6">
                    <div>
                      <span className="font-sans text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-stone sm:text-[0.625rem]">
                        Local, considered
                      </span>

                      <p className="mt-3 font-display text-[clamp(1.75rem,4.4vw,3.5rem)] leading-[0.88] tracking-[-0.045em] text-ink">
                        Made for a slower pace.
                      </p>
                    </div>

                    <div className="mt-4 h-px w-8 bg-ink" />
                  </div>

                  <div className="col-span-2 grid min-h-0 grid-rows-[1fr_auto] gap-3 sm:gap-5">
                    <div className="relative overflow-hidden bg-ink">
                      <div className="absolute -right-8 top-5 size-24 rounded-full border-[1.25rem] border-paper sm:-right-10 sm:size-36 sm:border-[1.75rem]" />
                      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-stone" />
                    </div>

                    <div className="border-t border-ink pt-2 font-sans text-[0.5rem] uppercase tracking-[0.12em] text-stone sm:text-[0.5625rem]">
                      Details, simply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}