import Link from "next/link";

function NoirHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border border-ink bg-ink p-3 text-paper sm:p-4"
    >
      <div className="flex aspect-[1.3] flex-col border border-stone/50 bg-ink">
        <div className="flex items-center justify-between border-b border-stone/50 px-4 py-3 sm:px-6 sm:py-4">
          <span className="text-[0.625rem] font-semibold tracking-[0.16em] sm:text-xs">
            NOIR / 55
          </span>

          <div className="flex gap-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-6 sm:text-[0.625rem]">
            <span>Services</span>
            <span>Pricing</span>
            <span>Book</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_0.7fr] gap-3 p-3 sm:gap-5 sm:p-5">
          <div className="flex min-h-0 flex-col justify-between border border-stone/50 p-5 sm:p-8">
            <div>
              <p className="text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-stone sm:text-[0.625rem]">
                Cut / Shape / Finish
              </p>

              <p className="mt-6 max-w-[6ch] font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.78] tracking-[-0.05em]">
                Made with intent.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-stone/50 pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-5">
              <span>Our space</span>
              <span className="text-paper">→</span>
            </div>
          </div>

          <div className="grid min-h-0 grid-rows-[1.2fr_0.8fr] gap-3 sm:gap-5">
            <div className="relative overflow-hidden bg-paper">
              <div className="absolute left-[18%] top-[15%] h-px w-[62%] bg-ink" />
              <div className="absolute left-[18%] top-[15%] h-[55%] w-px bg-ink" />

              <div className="absolute bottom-[14%] right-[18%] h-[40%] w-[42%] border border-ink" />

              <span className="absolute bottom-3 left-3 text-[0.5625rem] font-semibold tracking-[0.14em] text-ink sm:bottom-4 sm:left-4">
                01—03
              </span>
            </div>

            <div className="border-t border-stone/50 pt-3 text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-4 sm:text-[0.625rem]">
              A considered ritual
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StructureVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.25] overflow-hidden border border-ink bg-ink p-3 text-paper sm:p-4"
    >
      <div className="absolute inset-[8%] border border-stone/50" />

      <div className="absolute left-[13%] top-[15%] max-w-[44%]">
        <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-stone sm:text-[0.625rem]">
          Direction 01
        </p>

        <p className="mt-4 font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-[0.8] tracking-[-0.05em]">
          Cut.
          <br />
          Shape.
          <br />
          Finish.
        </p>
      </div>

      <div className="absolute bottom-[13%] right-[11%] h-[46%] w-[28%] border border-stone/50">
        <div className="absolute left-[17%] top-[18%] h-px w-[66%] bg-stone" />
        <div className="absolute left-[17%] top-[18%] h-[50%] w-px bg-stone" />
        <div className="absolute bottom-[18%] right-[17%] h-[28%] w-[48%] border border-stone/50" />
      </div>

      <div className="absolute bottom-[8%] left-[13%] text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:text-[0.625rem]">
        Structure / Contrast / Precision
      </div>
    </div>
  );
}

function BookingVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border border-border bg-paper p-3 sm:p-4"
    >
      <div className="grid aspect-[1.45] grid-cols-[1.15fr_0.85fr] gap-3 border border-border bg-white p-3 sm:gap-5 sm:p-5">
        <div className="flex flex-col justify-between bg-ink p-5 text-paper sm:p-8">
          <div>
            <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-stone sm:text-[0.625rem]">
              Booking flow
            </p>

            <p className="mt-5 max-w-[7ch] font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-[0.8] tracking-[-0.05em]">
              Clear path.
            </p>
          </div>

          <div className="border-t border-stone/50 pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
            Services → availability → booking
          </div>
        </div>

        <div className="relative bg-white">
          <div className="absolute left-[18%] top-[14%] h-px w-[64%] bg-border" />
          <div className="absolute left-[18%] top-[14%] h-[52%] w-px bg-border" />

          <div className="absolute right-[18%] top-[30%] h-[34%] w-[42%] border border-border" />

          <div className="absolute bottom-[13%] left-[18%] text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
            One step at a time.
          </div>
        </div>
      </div>
    </div>
  );
}

export function NoirCaseStudy() {
  return (
    <>
      <section className="border-b border-border bg-ink py-24 text-paper sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow text-stone">CONCEPT PROJECT</p>

              <h1 className="type-display !text-paper mt-6 max-w-[7ch]">
                Noir Barber
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small text-stone">
                <span>Grooming / Web Design</span>
                <span>02 / 03</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-end">
              <p className="text-large max-w-md text-stone">
                Made with intent.
              </p>
            </div>

            <div className="col-span-12 mt-4 lg:mt-8">
              <NoirHeroVisual />
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
                A sharper digital presence for a modern barber.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-large text-stone">
                <p>
                  Noir is imagined as a modern barbering experience built
                  around precision, atmosphere, and a clear sense of place.
                </p>

                <p>
                  The concept treats the website as part of the ritual:
                  focused, structured, and easy to move through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink py-24 text-paper sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow text-stone">THE DIRECTION</p>

              <p className="mt-6 max-w-xs text-base leading-7 text-stone">
                The visual language leans into contrast, strong typography,
                and a restrained architectural grid.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <StructureVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-12 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-7">
              <BookingVisual />
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:flex lg:items-center">
              <div>
                <p className="eyebrow">THE EXPERIENCE</p>

                <h2 className="type-h2 mt-6 max-w-[9ch]">
                  A focused path from discovery to booking.
                </h2>

                <p className="mt-8 max-w-md text-large text-stone">
                  The experience is designed around the questions a visitor
                  actually has: what the barber offers, what it feels like,
                  what it costs, and how to book.
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

              <h2 className="type-display mt-6 max-w-[8ch]">
                As considered as the cut itself.
              </h2>

              <p className="text-large mt-8 max-w-xl text-stone">
                A digital experience with structure, restraint, and enough
                character to feel unmistakably Noir.
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
            <span>NOIR BARBER / CONCEPT</span>
            <span>5:55 AM</span>
          </div>
        </div>
      </section>
    </>
  );
}