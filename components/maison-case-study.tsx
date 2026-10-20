import Link from "next/link";

function MaisonHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="soft-frame relative overflow-hidden border border-border bg-white p-3 sm:p-4"
    >
      <div className="flex aspect-[1.25] flex-col border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 sm:py-4">
          <span className="text-[0.625rem] font-semibold tracking-[0.14em] sm:text-xs">
            MAISON
          </span>

          <div className="flex gap-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-6 sm:text-[0.625rem]">
            <span>Studio</span>
            <span>Services</span>
            <span>Visit</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr]">
          <div className="flex min-h-0 flex-col justify-between bg-paper p-6 sm:p-10">
            <div>
              <p className="text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
                Hair / Form / Light
              </p>

              <p className="mt-6 max-w-[7ch] font-display text-[clamp(3rem,7vw,7rem)] leading-[0.82] tracking-[-0.06em]">
                A slower kind of beautiful.
              </p>
            </div>

            <div className="border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-5">
              <div className="flex items-center justify-between">
                <span>Book a visit</span>
                <span className="text-ink">↗</span>
              </div>
            </div>
          </div>

          <div className="project-image-maison relative overflow-hidden bg-stone">
            <div className="absolute inset-x-[9%] bottom-[10%] border-t border-paper/70 pt-3 text-[0.56rem] font-medium uppercase tracking-[0.14em] text-paper">
              Maison / a quieter visit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectionVisual() {
  return (
    <div
      aria-hidden="true"
      className="soft-frame relative aspect-[1.35] overflow-hidden border border-border bg-paper"
    >
      <div className="absolute left-[8%] top-[12%] h-px w-[84%] bg-border" />
      <div className="absolute left-[8%] top-[12%] h-[76%] w-px bg-border" />

      <div className="absolute left-[18%] top-[24%] max-w-[45%]">
        <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
          Direction 01
        </p>

        <p className="mt-4 font-display text-[clamp(2.25rem,5vw,5rem)] leading-[0.84] tracking-[-0.055em]">
          Quiet, but considered.
        </p>
      </div>

      <div className="absolute bottom-[13%] right-[11%] h-[44%] w-[28%] border border-border">
        <div className="absolute left-1/2 top-[20%] h-px w-[52%] -translate-x-1/2 bg-border" />
        <div className="absolute left-1/2 top-[20%] h-[48%] w-px -translate-x-1/2 bg-border" />
      </div>

      <div className="absolute bottom-[8%] left-[18%] text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:text-[0.625rem]">
        Form / Space / Rhythm
      </div>
    </div>
  );
}

function ExperienceVisual() {
  return (
    <div
      aria-hidden="true"
      className="soft-frame relative overflow-hidden border border-border bg-white p-3 sm:p-4"
    >
      <div className="grid aspect-[1.5] grid-cols-[0.72fr_1.28fr] gap-3 border border-border bg-paper p-3 sm:gap-5 sm:p-5">
        <div className="project-image-maison relative overflow-hidden bg-stone">
          <div className="absolute left-[14%] top-[14%] h-px w-[62%] bg-paper/80" />
          <div className="absolute right-[13%] top-[14%] h-[45%] w-px bg-paper/80" />

          <div className="absolute -bottom-[22%] -left-[24%] aspect-square w-[115%] rounded-full border-[clamp(1.25rem,3vw,3rem)] border-paper/80" />
        </div>

        <div className="flex flex-col justify-between p-2 sm:p-5">
          <div>
            <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
              Experience
            </p>

            <p className="mt-5 max-w-[7ch] font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.82] tracking-[-0.055em]">
              Less noise.
              <br />
              More presence.
            </p>
          </div>

          <div className="border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-5">
            A digital space with room to breathe.
          </div>
        </div>
      </div>
    </div>
  );
}

export function MaisonCaseStudy() {
  return (
    <>
      <section className="case-hero case-hero-maison editorial-section overflow-hidden border-b border-border bg-white/45 py-20 sm:py-28 lg:py-32">
        <div className="site-container">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-9">
              <p className="eyebrow">CONCEPT PROJECT</p>

              <h1 className="type-display case-title mt-6 max-w-[8ch]">
                Maison Hair Studio
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small text-stone">
                <span>Beauty / Web Design</span>
                <span>01 / 03</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:flex lg:items-end">
              <p className="text-large max-w-md text-stone lg:border-l lg:border-border lg:pl-5">
                A slower kind of beautiful.
              </p>
            </div>

            <div className="col-span-12 mt-4 lg:col-span-11 lg:col-start-2 lg:mt-12">
              <MaisonHeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">THE IDEA</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <h2 className="type-h2 max-w-[12ch]">
                Give the business room to feel like itself.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-large text-stone">
                <p>
                  Maison is imagined as a contemporary hair studio with a
                  slower visual rhythm — less noise, more atmosphere, and
                  enough space for the work to speak for itself.
                </p>

                <p>
                  The opening pairs a short point of view with a restrained
                  service path, so atmosphere and practical details share the
                  first screen without competing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section border-b border-border bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">THE DIRECTION</p>

              <p className="mt-6 max-w-xs text-base leading-7 text-stone">
                A generous serif headline, fine navigation, and a framed
                service image give the page its pace. The calls to action stay
                in predictable places.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <DirectionVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-7">
              <ExperienceVisual />
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-center">
              <div>
                <p className="eyebrow">THE EXPERIENCE</p>

                <h2 className="type-h2 mt-6 max-w-[9ch]">
                  A digital space with room to breathe.
                </h2>

                <p className="mt-8 max-w-md text-large text-stone">
                  The experience is designed to feel calm and tactile: simple
                  navigation, strong typography, clear services, and enough
                  whitespace to let the studio&apos;s identity come through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section border-b border-border bg-white/45 py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow">WHAT WE WANTED IT TO FEEL LIKE.</p>

              <h2 className="type-display mt-6 max-w-[9ch]">
                Quiet confidence, from the first click.
              </h2>
            </div>

            <div className="col-span-12 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link className="button-primary" href="/contact">
                <span>Start a project</span>
                <span aria-hidden="true" className="button-arrow">
                  →
                </span>
              </Link>

              <Link className="text-link" href="/work">
                <span>Back to work</span>
                <span aria-hidden="true" className="button-arrow">
                  ←
                </span>
              </Link>
              <Link className="text-link" href="/work/noir-barber">
                <span>Next concept: Noir Barber</span>
                <span aria-hidden="true" className="button-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="site-container">
          <div className="flex flex-col gap-2 text-small text-stone sm:flex-row sm:items-center sm:justify-between">
            <span>MAISON HAIR STUDIO / CONCEPT</span>
            <span>5:55 AM</span>
          </div>
        </div>
      </section>
    </>
  );
}
