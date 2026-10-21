import Link from "next/link";
import { ScrollStage } from "@/components/scroll-stage";

export function Hero() {
  return (
    <section className="cinema-hero overflow-hidden bg-ink text-paper">
      <div className="site-container relative py-7 sm:py-10 lg:py-14">
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-stone">
          <span>Independent web studio</span>
          <span>Ho Chi Minh City / Remote</span>
        </div>

        <div className="grid-12 relative pt-16 sm:pt-20 lg:min-h-[45rem] lg:pt-24">
          <div className="col-span-12 relative z-10 lg:col-span-7">
            <p className="eyebrow text-stone">01 — Web UI design for local businesses</p>
            <h1 className="cinema-hero-title mt-6 font-display">
              You don&apos;t need more.
              <em>You need what matters.</em>
            </h1>
            <p className="text-large mt-8 max-w-[31rem] text-white/65">
              Thoughtful website interfaces for businesses ready to make their
              next step clearer.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/contact" className="button-light hero-action-hover group">
                Start a project <span className="button-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="text-link text-paper hero-text-link group">
                See the work <span className="button-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 relative mt-14 h-[23rem] sm:h-[31rem] lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:mt-0 lg:h-auto">
            <ScrollStage>
              <div className="hero-orbit hero-orbit-primary" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-secondary" aria-hidden="true" />
              <div className="hero-scene-label hero-scene-label-top" aria-hidden="true">Maison / concept interface</div>
              <div className="hero-window hero-window-back" aria-hidden="true">
                <div className="hero-window-back-top"><span>MAISON / INDEX</span><span>01 — 03</span></div>
                <div className="hero-window-back-image" />
                <div className="hero-window-back-bottom"><span>Hair / Form / Light</span><span>For days that begin again.</span></div>
              </div>
              <div className="hero-window" aria-hidden="true">
                <div className="hero-window-top"><span>MAISON</span><span>01 / 03</span></div>
                <div className="hero-window-image" />
                <div className="hero-window-copy">
                  <p>Hair / Form / Light</p>
                  <strong>A slower kind of beautiful.</strong>
                  <span>Book a visit <b>↗</b></span>
                </div>
              </div>
              <div className="hero-mobile" aria-hidden="true">
                <div className="hero-mobile-notch" />
                <p>MAISON</p>
                <strong>For days that begin again.</strong>
                <div className="hero-mobile-image" />
                <span>Explore <b>→</b></span>
              </div>
              <div className="hero-scene-stamp" aria-hidden="true"><span>05</span><span>55</span></div>
            </ScrollStage>
            <p className="absolute bottom-1 left-0 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-stone lg:-left-24">Concept interface / 01</p>
          </div>
        </div>

        <div className="flex justify-between border-t border-white/15 pt-4 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-stone">
          <span>Listen. Build. Improve.</span>
          <span>Scroll to explore</span>
        </div>
      </div>

      <style jsx>{`
        .hero-action-hover,
        .hero-text-link {
          transition:
            color 400ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 400ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-action-hover:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .hero-action-hover :global(.button-arrow),
        .hero-text-link :global(.button-arrow) {
          display: inline-block;
          transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-action-hover:hover :global(.button-arrow),
        .hero-text-link:hover :global(.button-arrow) {
          transform: translate3d(4px, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-action-hover,
          .hero-text-link,
          .hero-action-hover :global(.button-arrow),
          .hero-text-link :global(.button-arrow) {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
