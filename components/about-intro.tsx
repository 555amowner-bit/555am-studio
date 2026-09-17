export function AboutIntro() {
  return (
    <section
      id="about-intro"
      aria-labelledby="about-intro-heading"
      className="border-t border-border py-20 sm:py-24 md:py-32"
    >
      <div className="site-container">
        <div className="grid-12 items-start gap-y-14 md:gap-y-0">
          <div className="col-span-12 md:col-span-6">
            <div
              className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden border border-border bg-white p-5 sm:min-h-[25rem] sm:p-7 md:min-h-[31rem] md:p-8"
              aria-hidden="true"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-stone sm:pb-5">
                <span>5:55 AM Studio</span>
                <span>01 / 01</span>
              </div>

              <div className="relative flex flex-1 items-center py-12 sm:py-16">
                <div className="absolute left-0 top-1/2 h-px w-full bg-border" />
                <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-border" />
                <div className="relative w-full">
                  <p className="whitespace-nowrap font-display text-[clamp(3.75rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.075em] text-ink sm:text-[clamp(5rem,9vw,8.5rem)]">
                    05:55 AM
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between border-t border-border pt-4 sm:pt-5">
                <span className="font-sans text-[0.625rem] uppercase tracking-[0.14em] text-stone">
                  A beginning, every morning.
                </span>
                <span className="font-display text-2xl leading-none text-ink">✳</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-1 lg:pl-8">
            <p className="eyebrow">Why 5:55 AM?</p>
            <h2 id="about-intro-heading" className="type-h2 mt-6 max-w-[10ch]">
              A beginning, every morning.
            </h2>

            <div className="mt-8 max-w-[34rem] text-base leading-7 text-stone sm:mt-10">
              <p>5:55 AM is the time I wake up most mornings.</p>
              <p className="mt-5">
                To me, it represents a beginning — a new day, a new opportunity, and the
                beginning of a journey to build something of my own.
              </p>
              <p className="mt-5">That&apos;s where 5:55 AM started.</p>
            </div>

            <div className="mt-12 border-t border-border pt-5 sm:mt-16 sm:pt-6">
              <p className="eyebrow">Built by Charl</p>
              <p className="mt-4 max-w-[31rem] text-base leading-7 text-stone">
                I&apos;m an independent web designer and developer building 5:55 AM around a
                simple belief: listen first, build with purpose, and keep improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
