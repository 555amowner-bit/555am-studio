import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Start a Project",
  description:
    "Start a website project with 5:55 AM. Tell us about your business, website needs, budget, and timeline, and we’ll take it from there.",
  openGraph: {
    title: "Start a Project | 5:55 AM",
    description:
      "Start a website project with 5:55 AM. Tell us about your business, website needs, budget, and timeline, and we’ll take it from there.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Start a Project | 5:55 AM",
    description:
      "Start a website project with 5:55 AM. Tell us about your business, website needs, budget, and timeline, and we’ll take it from there.",
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#08090b] text-[#f3f1ec]">
      <section className="relative isolate py-20 sm:py-28 lg:py-32">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="mb-6 inline-flex rounded-full border border-white/20 bg-gradient-to-b from-white/[0.09] to-white/[0.035] px-4 py-2 font-sans text-[0.7rem] font-medium tracking-[0.01em] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                Start a conversation
              </p>

              <h1 className="max-w-[8ch] font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.86] tracking-[-0.065em] text-[#f3f1ec]">
                Tell us
                <br />
                what you
                <br />
                <span className="italic text-white/50">need.</span>
              </h1>

              <p className="mt-8 max-w-md text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                A new website, a better website, or you&apos;re not quite sure
                yet — tell us a little about your business and we&apos;ll take
                it from there.
              </p>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
                  Email
                </p>

                <a
                  className="group mt-4 inline-flex items-center gap-2 text-sm text-[#f3f1ec] transition-colors hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href="mailto:555amowner@gmail.com"
                >
                  <span>555amowner@gmail.com</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-10 hidden border-t border-white/10 pt-5 lg:block">
                <p className="text-[0.625rem] uppercase tracking-[0.16em] text-white/35">
                  5:55 AM Studio
                </p>
                <p className="mt-3 max-w-xs font-display text-2xl leading-tight tracking-[-0.04em] text-white/75">
                  Good things start with a conversation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:p-9">
                <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
                      Project inquiry
                    </p>
                    <h2 className="mt-3 font-display text-2xl tracking-[-0.04em] text-[#f3f1ec] sm:text-3xl">
                      Tell us about your project.
                    </h2>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[0.625rem] text-white/45">
                    01 — 03
                  </span>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}