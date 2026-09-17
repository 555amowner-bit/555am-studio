import type { ReactNode } from "react";

type Project = {
  number: string;
  name: string;
  category: string;
  preview: ReactNode;
};

function MaisonPreview() {
  return (
    <div
      className="group/preview relative aspect-[1.08] overflow-hidden border border-border bg-white p-2 transition-transform duration-300 ease-out sm:p-3 motion-safe:group-hover/card:scale-[1.012]"
      aria-hidden="true"
    >
      <div className="flex h-full min-h-0 flex-col border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-3 py-3 sm:px-5 sm:py-4">
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.12em] text-ink sm:text-xs">
            MAISON
          </span>
          <div className="flex gap-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-5 sm:text-[0.625rem]">
            <span>Studio</span>
            <span>Services</span>
            <span>Visit</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-0 flex-col justify-between bg-paper p-4 sm:p-7">
            <div>
              <p className="font-sans text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
                Hair / Form / Light
              </p>
              <p className="mt-4 max-w-[8ch] font-display text-[clamp(2rem,5vw,4.75rem)] leading-[0.84] tracking-[-0.055em] text-ink sm:mt-6">
                A slower kind of beautiful.
              </p>
            </div>
            <div className="flex items-end justify-between border-t border-border pt-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-4 sm:text-[0.625rem]">
              <span>Book a visit</span>
              <span className="text-ink">↗</span>
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden bg-stone">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,rgba(247,247,245,0.42)_48%_49%,transparent_49%)]" />
            <div className="absolute -right-[18%] top-[9%] aspect-square w-[78%] rounded-full border-[clamp(1.1rem,3vw,2.5rem)] border-paper/80" />
            <div className="absolute bottom-[12%] left-[13%] aspect-[0.68] w-[39%] bg-paper/85" />
            <div className="absolute bottom-[8%] right-[12%] h-px w-1/2 bg-ink/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NoirPreview() {
  return (
    <div
      className="group/preview relative aspect-[1.16] overflow-hidden border border-ink bg-ink p-2 transition-transform duration-300 ease-out sm:p-3 motion-safe:group-hover/card:scale-[1.012]"
      aria-hidden="true"
    >
      <div className="flex h-full min-h-0 flex-col border border-stone/50 bg-ink text-paper">
        <div className="flex items-center justify-between border-b border-stone/50 px-3 py-3 sm:px-5 sm:py-4">
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.16em] text-paper sm:text-xs">
            NOIR / 55
          </span>
          <div className="flex gap-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-5 sm:text-[0.625rem]">
            <span>Services</span>
            <span>Pricing</span>
            <span>Book</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_0.7fr] gap-3 p-3 sm:gap-5 sm:p-5">
          <div className="flex min-h-0 flex-col justify-between border border-stone/50 p-4 sm:p-6">
            <div>
              <p className="font-sans text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-stone sm:text-[0.625rem]">
                Cut / Shape / Finish
              </p>
              <p className="mt-4 max-w-[6ch] font-display text-[clamp(2.1rem,5.5vw,4.5rem)] uppercase leading-[0.8] tracking-[-0.045em] text-paper sm:mt-6">
                Made with intent.
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-stone/50 pt-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-4 sm:text-[0.625rem]">
              <span>Our space</span>
              <span className="text-paper">→</span>
            </div>
          </div>

          <div className="grid min-h-0 grid-rows-[1.25fr_0.75fr] gap-3 sm:gap-5">
            <div className="relative overflow-hidden bg-paper">
              <div className="absolute inset-x-[18%] top-[14%] h-px bg-ink" />
              <div className="absolute left-[18%] top-[14%] h-[58%] w-px bg-ink" />
              <div className="absolute bottom-[14%] right-[18%] h-[40%] w-[42%] border border-ink" />
              <span className="absolute bottom-3 left-3 font-sans text-[0.5625rem] font-semibold tracking-[0.14em] text-ink sm:bottom-4 sm:left-4 sm:text-[0.625rem]">
                01—03
              </span>
            </div>
            <div className="flex flex-col justify-end border-t border-stone/50 pt-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-4 sm:text-[0.625rem]">
              <span>Classic cut</span>
              <span className="mt-1 text-paper">A considered ritual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuraPreview() {
  return (
    <div
      className="group/preview relative aspect-[1.08] overflow-hidden border border-border bg-white p-2 transition-transform duration-300 ease-out sm:p-3 motion-safe:group-hover/card:scale-[1.012]"
      aria-hidden="true"
    >
      <div className="flex h-full min-h-0 flex-col border border-border bg-paper">
        <div className="flex items-center justify-between border-b border-border px-3 py-3 sm:px-5 sm:py-4">
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.14em] text-ink sm:text-xs">
            AURA SKIN
          </span>
          <div className="flex gap-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:gap-5 sm:text-[0.625rem]">
            <span>Treatments</span>
            <span>Space</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[0.88fr_1.12fr] gap-3 p-3 sm:gap-5 sm:p-5">
          <div className="relative min-h-0 overflow-hidden bg-white">
            <div className="absolute -bottom-[25%] -left-[22%] aspect-square w-[120%] rounded-full border-[clamp(1.5rem,4vw,3.5rem)] border-paper" />
            <div className="absolute left-[20%] top-[13%] h-px w-[60%] bg-border" />
            <div className="absolute left-[20%] top-[13%] h-[55%] w-px bg-border" />
            <div className="absolute bottom-[12%] left-[20%] font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:text-[0.625rem]">
              Light / Balance
            </div>
          </div>

          <div className="flex min-h-0 flex-col justify-between p-2 sm:p-4">
            <div>
              <p className="font-sans text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-stone sm:text-[0.625rem]">
                Skin, simply considered.
              </p>
              <p className="mt-4 max-w-[7ch] font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.84] tracking-[-0.055em] text-ink sm:mt-6">
                Return to your natural rhythm.
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-3 font-sans text-[0.5625rem] uppercase tracking-[0.1em] text-stone sm:pt-4 sm:text-[0.625rem]">
              <span>Explore treatments</span>
              <span className="text-ink">↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ number, name, category, preview }: Project) {
  return (
    <article className="group/card">
      <div>{preview}</div>
      <div className="mt-5 grid grid-cols-[auto_1fr_auto] gap-x-4 border-t border-border pt-4 sm:mt-6 sm:pt-5">
        <span className="font-sans text-[0.6875rem] font-medium tracking-[0.12em] text-stone">
          {number}
        </span>
        <div>
          <h3 className="font-sans text-sm font-semibold tracking-[0.01em] text-ink sm:text-base">
            {name}
          </h3>
          <p className="mt-1 text-small text-stone">{category}</p>
        </div>
        <span className="self-start pt-0.5 font-sans text-[0.625rem] font-semibold tracking-[0.12em] text-stone">
          CONCEPT
        </span>
      </div>
    </article>
  );
}

const projects: Project[] = [
  {
    number: "01",
    name: "MAISON HAIR STUDIO",
    category: "Beauty / Web Design",
    preview: <MaisonPreview />,
  },
  {
    number: "02",
    name: "NOIR BARBER",
    category: "Grooming / Web Design",
    preview: <NoirPreview />,
  },
  {
    number: "03",
    name: "AURA SKIN",
    category: "Beauty / Web Design",
    preview: <AuraPreview />,
  },
];

export function SelectedWork() {
  return (
    <section id="selected-work" className="border-t border-border py-20 sm:py-24 md:py-32">
      <div className="site-container">
        <div className="grid-12 gap-y-8 md:gap-y-0">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <p className="eyebrow">Selected Work</p>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-5">
            <h2 className="type-h2 max-w-[11ch]">A few things we&apos;ve built, explored, and imagined.</h2>
            <p className="mt-6 max-w-[30rem] text-base leading-7 text-stone sm:mt-7 sm:max-w-[30rem]">
              Concept work created to explore how thoughtful digital experiences can help
              local businesses present themselves online.
            </p>
          </div>
        </div>

        <div className="mt-16 grid-12 items-start gap-y-14 sm:mt-20 sm:gap-y-20 md:gap-y-24">
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <ProjectCard {...projects[0]} />
          </div>
          <div className="col-span-12 md:col-span-5 md:mt-20 lg:col-span-5 lg:mt-32">
            <ProjectCard {...projects[1]} />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            <ProjectCard {...projects[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
