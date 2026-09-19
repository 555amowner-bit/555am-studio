import Link from "next/link";

function AuraHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border border-border bg-white p-3 sm:p-4"
    >
      <div className="flex aspect-[1.3] flex-col border border-border bg-paper">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 sm:py-4">
          <span className="text-[0.625rem] font-semibold tracking-[0.14em] sm:text-xs">
            AURA SKIN
          </span>

          <div className="flex gap-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-6 sm:text-[0.625rem]">
            <span>Treatments</span>
            <span>Space</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[0.86fr_1.14fr] gap-3 p-3 sm:gap-5 sm:p-5">
          <div className="relative min-h-0 overflow-hidden bg-white">
            <div className="absolute -bottom-[23%] -left-[23%] aspect-square w-[120%] rounded-full border-[clamp(1.5rem,4vw,3.5rem)] border-paper" />

            <div className="absolute left-[20%] top-[14%] h-px w-[60%] bg-border" />

            <div className="absolute left-[20%] top-[14%] h-[55%] w-px bg-border" />

            <div className="absolute bottom-[12%] left-[20%] text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:text-[0.625rem]">
              Light / Balance
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-between py-2 sm:p-4">
            <div>
              <p className="text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
                Skin, simply considered.
              </p>

              <p className="mt-6 max-w-[7ch] font-display text-[clamp(3rem,7vw,7rem)] leading-[0.82] tracking-[-0.06em] text-ink">
                Return to your natural rhythm.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-5">
              <span>Explore treatments</span>
              <span className="text-ink">↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.2] overflow-hidden border border-border bg-paper"
    >
      <div className="absolute left-[9%] top-[11%] h-px w-[82%] bg-border" />

      <div className="absolute left-[9%] top-[11%] h-[78%] w-px bg-border" />

      <div className="absolute left-[17%] top-[24%] h-[48%] w-[36%] bg-white" />

      <div className="absolute left-[24%] top-[31%] h-[31%] w-[22%] border border-border" />

      <div className="absolute -bottom-[16%] right-[4%] aspect-square w-[46%] rounded-full border-[clamp(1.5rem,4vw,3.5rem)] border-white" />

      <div className="absolute right-[11%] top-[18%] max-w-[32%]">
        <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
          Direction 01
        </p>

        <p className="mt-4 font-display text-[clamp(2.25rem,5vw,5rem)] leading-[0.84] tracking-[-0.055em] text-ink">
          Light creates the rhythm.
        </p>
      </div>

      <div className="absolute bottom-[9%] left-[17%] text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:text-[0.625rem]">
        Space / Balance / Restraint
      </div>
    </div>
  );
}

function TreatmentVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border border-border bg-white p-3 sm:p-4"
    >
      <div className="grid aspect-[1.45] grid-cols-[0.88fr_1.12fr] gap-3 border border-border bg-paper p-3 sm:gap-5 sm:p-5">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-[18%] border border-border" />

          <div className="absolute left-[28%] top-[28%] h-[44%] w-px bg-border" />

          <div className="absolute left-[28%] top-[28%] h-px w-[44%] bg-border" />

          <div className="absolute -bottom-[20%] -left-[20%] aspect-square w-[90%] rounded-full border-[clamp(1rem,3vw,2.5rem)] border-paper" />
        </div>

        <div className="flex flex-col justify-between p-2 sm:p-5">
          <div>
            <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
              Treatment flow
            </p>

            <p className="mt-5 max-w-[7ch] font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.82] tracking-[-0.055em] text-ink">
              Simple.
              <br />
              Clear.
              <br />
              Personal.
            </p>
          </div>

          <div className="border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-5">
            Discover → understand → choose
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuraCaseStudy() {
  return (
    <>
      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow">CONCEPT PROJECT</p>

              <h1 className="type-display mt-6 max-w-[7ch] text-ink">
                Aura Skin
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small text-stone">
                <span>Beauty / Web Design</span>
                <span>03 / 03</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-end">
              <p className="text-large max-w-md text-stone">
                Return to your natural rhythm.
              </p>
            </div>

            <div className="col-span-12 mt-4 lg:mt-8">
              <AuraHeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">THE IDEA</p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <h2 className="type-h2 max-w-[11ch]">
                Create space for people to slow down and choose well.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-large text-stone">
                <p>
                  Aura is imagined as a skincare studio where the experience
                  begins before the treatment itself.
                </p>

                <p>
                  The concept avoids visual noise and focuses instead on
                  clarity, calm, and a sense of considered care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">THE DIRECTION</p>

              <p className="mt-6 max-w-xs text-base leading-7 text-stone">
                Light, proportion, and restrained forms carry the visual
                language.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <BalanceVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-7">
              <TreatmentVisual />
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-center">
              <div>
                <p className="eyebrow">THE EXPERIENCE</p>

                <h2 className="type-h2 mt-6 max-w-[9ch]">
                  Clarity before the appointment.
                </h2>

                <p className="mt-8 max-w-md text-large text-stone">
                  The experience is built around helping visitors understand
                  treatments, spaces, and next steps without overwhelming
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow">WHAT WE WANTED IT TO FEEL LIKE.</p>

              <h2 className="type-display mt-6 max-w-[8ch] text-ink">
                A quieter way to choose what feels right.
              </h2>

              <p className="text-large mt-8 max-w-xl text-stone">
                A calm digital experience that gives information room to
                breathe while keeping every important decision close at hand.
              </p>
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="site-container">
          <div className="flex flex-col gap-2 text-small text-stone sm:flex-row sm:items-center sm:justify-between">
            <span>AURA SKIN / CONCEPT</span>
            <span>5:55 AM</span>
          </div>
        </div>
      </section>
    </>
  );
}