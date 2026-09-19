import Link from "next/link";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  href: string;
  theme: "paper" | "ink" | "light";
};

const projects: Project[] = [
  {
    number: "01",
    name: "MAISON HAIR STUDIO",
    category: "Beauty / Web Design",
    description:
      "An editorial direction for a contemporary hair studio, built around atmosphere, clarity, and a slower visual rhythm.",
    href: "/work/maison-hair-studio",
    theme: "paper",
  },
  {
    number: "02",
    name: "NOIR BARBER",
    category: "Grooming / Web Design",
    description:
      "A structured monochrome direction for a modern barber, balancing strong typography with a focused service experience.",
    href: "/work/noir-barber",
    theme: "ink",
  },
  {
    number: "03",
    name: "AURA SKIN",
    category: "Beauty / Web Design",
    description:
      "A calm, image-led concept for a skincare studio with emphasis on space, rhythm, and considered presentation.",
    href: "/work/aura-skin",
    theme: "light",
  },
];

function ProjectVisual({
  name,
  theme,
}: {
  name: string;
  theme: "paper" | "ink" | "light";
}) {
  if (theme === "ink") {
    return (
      <div
        aria-hidden="true"
        className="relative aspect-[1.15] overflow-hidden border border-ink bg-ink p-3 transition-transform duration-300 ease-out sm:p-4"
      >
        <div className="flex h-full flex-col border border-stone/50 bg-ink text-paper">
          <div className="flex items-center justify-between border-b border-stone/50 px-4 py-3 sm:px-5">
            <span className="text-[0.625rem] font-semibold tracking-[0.16em]">
              NOIR / 55
            </span>

            <span className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone">
              Concept
            </span>
          </div>

          <div className="grid flex-1 grid-cols-[1.25fr_0.75fr] gap-4 p-4 sm:gap-6 sm:p-6">
            <div className="flex flex-col justify-between border border-stone/50 p-5 sm:p-7">
              <div>
                <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-stone">
                  Cut / Shape / Finish
                </p>

                <p className="mt-6 max-w-[7ch] font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.8] tracking-[-0.05em]">
                  Made with intent.
                </p>
              </div>

              <div className="border-t border-stone/50 pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
                Our space
              </div>
            </div>

            <div className="grid grid-rows-[1.2fr_0.8fr] gap-4">
              <div className="relative overflow-hidden bg-paper">
                <div className="absolute left-[18%] top-[16%] h-px w-[62%] bg-ink" />
                <div className="absolute left-[18%] top-[16%] h-[54%] w-px bg-ink" />
                <div className="absolute bottom-[15%] right-[18%] h-[38%] w-[42%] border border-ink" />
              </div>

              <div className="border-t border-stone/50 pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
                A considered ritual
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">{name} concept preview</span>
      </div>
    );
  }

  if (theme === "light") {
    return (
      <div
        aria-hidden="true"
        className="relative aspect-[1.1] overflow-hidden border border-border bg-white p-3 sm:p-4"
      >
        <div className="flex h-full flex-col border border-border bg-paper">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
            <span className="text-[0.625rem] font-semibold tracking-[0.14em]">
              AURA SKIN
            </span>

            <span className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone">
              Concept
            </span>
          </div>

          <div className="grid flex-1 grid-cols-[0.9fr_1.1fr] gap-4 p-4 sm:gap-6 sm:p-6">
            <div className="relative overflow-hidden bg-white">
              <div className="absolute -bottom-[20%] -left-[22%] aspect-square w-[120%] rounded-full border-[clamp(1.5rem,4vw,3.5rem)] border-paper" />
              <div className="absolute left-[20%] top-[15%] h-px w-[60%] bg-border" />
              <div className="absolute left-[20%] top-[15%] h-[52%] w-px bg-border" />
            </div>

            <div className="flex flex-col justify-between py-2 sm:py-4">
              <div>
                <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone">
                  Skin, simply considered.
                </p>

                <p className="mt-6 max-w-[8ch] font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.82] tracking-[-0.055em]">
                  Return to your natural rhythm.
                </p>
              </div>

              <div className="border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
                Explore treatments
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">{name} concept preview</span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.1] overflow-hidden border border-border bg-white p-3 sm:p-4"
    >
      <div className="flex h-full flex-col border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
          <span className="text-[0.625rem] font-semibold tracking-[0.12em]">
            MAISON
          </span>

          <span className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone">
            Concept
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between bg-paper p-5 sm:p-7">
            <div>
              <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-stone">
                Hair / Form / Light
              </p>

              <p className="mt-6 max-w-[8ch] font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.82] tracking-[-0.055em]">
                A slower kind of beautiful.
              </p>
            </div>

            <div className="border-t border-border pt-4 text-[0.5625rem] uppercase tracking-[0.1em] text-stone">
              Book a visit
            </div>
          </div>

          <div className="relative overflow-hidden bg-stone">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,rgba(247,247,245,0.42)_48%_49%,transparent_49%)]" />
            <div className="absolute -right-[20%] top-[10%] aspect-square w-[76%] rounded-full border-[clamp(1.1rem,3vw,2.5rem)] border-paper/80" />
            <div className="absolute bottom-[12%] left-[13%] aspect-[0.68] w-[38%] bg-paper/85" />
          </div>
        </div>
      </div>

      <span className="sr-only">{name} concept preview</span>
    </div>
  );
}

export function WorkIndex() {
  return (
    <section className="border-b border-border py-24 sm:py-32 lg:py-40">
      <div className="site-container">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">SELECTED WORK</p>

            <h1 className="type-display mt-6 max-w-[8ch]">
              Work that starts with what matters.
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="text-large max-w-xl text-stone">
              Concept work created to explore thoughtful digital experiences
              for local businesses.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32 lg:mt-36">
          {projects.map((project) => (
            <article key={project.href}>
              <Link
                href={project.href}
                className="group block focus-visible:outline-none"
              >
                <ProjectVisual name={project.name} theme={project.theme} />

                <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 border-t border-border pt-5 sm:mt-7 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                  <span className="text-[0.6875rem] font-medium tracking-[0.12em] text-stone">
                    {project.number}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h2 className="font-sans text-base font-semibold tracking-[0.01em] text-ink sm:text-lg">
                        {project.name}
                      </h2>

                      <span className="text-[0.625rem] font-semibold tracking-[0.12em] text-stone">
                        CONCEPT
                      </span>
                    </div>

                    <p className="mt-2 text-small text-stone">
                      {project.category}
                    </p>

                    <p className="mt-5 max-w-xl text-base leading-7 text-stone">
                      {project.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="self-start text-sm text-stone transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-6 sm:mt-32">
          <p className="text-small text-stone">
            All projects shown here are concept work unless otherwise stated.
          </p>
        </div>
      </div>
    </section>
  );
}