
import Image from "next/image";

export default function Home() {
  const maisonEmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=hello%40maisonhair.studio&su=Maison%20Hair%20Studio%20appointment";

  return (
    <main className="maison-site">
      <header className="maison-header">
        <a href="/" className="maison-logo">
          MAISON
        </a>

        <nav className="maison-nav" aria-label="Main navigation">
          <a href="#philosophy">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#visit">Visit</a>
        </nav>

        <a href="#booking" className="maison-header-cta">
          Book a visit
        </a>
      </header>

      <section className="maison-hero" aria-labelledby="hero-title">
        <div className="maison-hero-copy">
          <p className="maison-eyebrow">HAIR · FORM · LIGHT</p>

          <h1 id="hero-title">
            A slower kind
            <br />
            of beautiful.
          </h1>

          <p className="maison-hero-description">
            A contemporary hair studio shaped around thoughtful cuts,
            considered colour, and the quiet pleasure of taking your time.
          </p>

          <a href="#booking" className="maison-button">
            Book a visit
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="maison-hero-visual">
          <Image
            src="/images/maison-hero.webp"
            alt="Editorial portrait inside the Maison Hair Studio"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className="maison-hero-image"
          />

          <div className="maison-hero-caption" aria-hidden="true">
            <span>01</span>
            <span>STUDIO / HCMC</span>
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="maison-section maison-philosophy"
        aria-labelledby="philosophy-title"
      >
        <div className="maison-section-label">01 / PHILOSOPHY</div>

        <div className="maison-philosophy-content">
          <div className="maison-philosophy-visual">
            <Image
              src="/images/maison-philosophy.webp"
              alt="Warm, sunlit interior of the Maison Hair Studio"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              className="maison-philosophy-image"
            />

            <div className="maison-philosophy-caption" aria-hidden="true">
              <span>02</span>
              <span>SPACE / LIGHT</span>
            </div>
          </div>

          <div className="maison-philosophy-copy">
            <p className="maison-eyebrow">THE MAISON APPROACH</p>

            <h2 id="philosophy-title">
              Beauty does not need
              <br />
              to be rushed.
            </h2>

            <p>
              Maison is built around a simple idea: the best hair work begins
              with attention. We take time to understand your hair, your
              features, and the way you want to feel when you leave.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="maison-section maison-services"
        aria-labelledby="services-title"
      >
        <div className="maison-section-label">02 / SERVICES</div>

        <div className="maison-services-content">
          <div>
            <p className="maison-eyebrow">WHAT WE DO</p>

            <h2 id="services-title">
              Considered work,
              <br />
              without the noise.
            </h2>
          </div>

          <div className="maison-service-list">
            <article className="maison-service-item">
              <span>01</span>

              <div className="maison-service-entry">
                <div className="maison-service-media">
                  <Image
                    src="/images/services/maison-service-haircut.webp"
                    alt="Haircut service at Maison Hair Studio"
                    width={900}
                    height={600}
                    className="maison-service-image"
                  />
                </div>

                <div className="maison-service-copy">
                  <h3>Haircut</h3>
                  <p>
                    Shape, movement, and proportion designed around you.
                  </p>
                </div>
              </div>

              <span aria-hidden="true">↗</span>
            </article>

            <article className="maison-service-item">
              <span>02</span>

              <div className="maison-service-entry">
                <div className="maison-service-media">
                  <Image
                    src="/images/services/maison-service-colour.webp"
                    alt="Colour service at Maison Hair Studio"
                    width={900}
                    height={600}
                    className="maison-service-image"
                  />
                </div>

                <div className="maison-service-copy">
                  <h3>Colour</h3>
                  <p>
                    Natural dimension and considered tones with a softer
                    finish.
                  </p>
                </div>
              </div>

              <span aria-hidden="true">↗</span>
            </article>

            <article className="maison-service-item">
              <span>03</span>

              <div className="maison-service-entry">
                <div className="maison-service-media">
                  <Image
                    src="/images/services/maison-service-styling.webp"
                    alt="Styling service at Maison Hair Studio"
                    width={900}
                    height={600}
                    className="maison-service-image"
                  />
                </div>

                <div className="maison-service-copy">
                  <h3>Styling</h3>
                  <p>
                    Quietly polished styling for days that deserve a little
                    more.
                  </p>
                </div>
              </div>

              <span aria-hidden="true">↗</span>
            </article>

            <article className="maison-service-item">
              <span>04</span>

              <div className="maison-service-entry">
                <div className="maison-service-media">
                  <Image
                    src="/images/services/maison-service-treatments.webp"
                    alt="Treatment service at Maison Hair Studio"
                    width={900}
                    height={600}
                    className="maison-service-image"
                  />
                </div>

                <div className="maison-service-copy">
                  <h3>Treatments</h3>
                  <p>
                    Restorative care focused on softness, strength, and shine.
                  </p>
                </div>
              </div>

              <span aria-hidden="true">↗</span>
            </article>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="maison-section maison-studio"
        aria-labelledby="studio-title"
      >
        <div className="maison-studio-visual">
          <Image
            src="/images/maison-studio.webp"
            alt="Sunlit interior of the Maison Hair Studio"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="maison-studio-image"
          />

          <div className="maison-studio-caption" aria-hidden="true">
            <span>03</span>
            <span>THE SPACE / MAISON</span>
          </div>
        </div>

        <div className="maison-studio-copy">
          <div className="maison-section-label">03 / STUDIO</div>

          <p className="maison-eyebrow">THE SPACE</p>

          <h2 id="studio-title">
            Room to breathe.
            <br />
            Space to become.
          </h2>

          <p>
            Soft light, honest materials, and a slower rhythm create a studio
            that feels intimate from the moment you arrive.
          </p>

          <a href="#visit" className="maison-text-link">
            Discover the studio
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* VISIT — updated section */}
      <section
        id="visit"
        className="maison-section maison-visit"
        aria-labelledby="visit-title"
      >
        <div className="maison-section-label">04 / VISIT</div>

        <div className="maison-visit-grid">
          <div>
            <p className="maison-eyebrow">COME AS YOU ARE</p>

            <h2 id="visit-title">
              Your time
              <br />
              starts here.
            </h2>
          </div>

          <div className="maison-visit-details">
            <div>
              <span className="maison-detail-label">LOCATION</span>

              <div>
                <p>Ho Chi Minh City</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maison+Hair+Studio+Ho+Chi+Minh+City"
                  target="_blank"
                  rel="noreferrer"
                  className="maison-text-link"
                >
                  Get directions
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div>
              <span className="maison-detail-label">HOURS</span>

              <p>
                Tuesday — Saturday
                <br />
                10:00 — 20:00
              </p>
            </div>

            <div>
              <span className="maison-detail-label">APPOINTMENTS</span>

              <div>
                <p>By booking only</p>

                <a href="#booking" className="maison-text-link">
                  Reserve your visit
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div>
              <span className="maison-detail-label">CONTACT</span>

              <a href={maisonEmailUrl} className="maison-text-link">
                hello@maisonhair.studio
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="maison-booking"
        aria-labelledby="booking-title"
      >
        <p className="maison-eyebrow">APPOINTMENTS</p>

        <h2 id="booking-title">
          Make some room
          <br />
          for yourself.
        </h2>

        <a href={maisonEmailUrl} className="maison-button">
          Start a conversation
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="maison-footer">
        <div>
          <span className="maison-logo">MAISON</span>
          <span>Hair Studio</span>
        </div>

        <div>
          <span>Ho Chi Minh City</span>
          <span>© 2026 Maison</span>
        </div>
      </footer>
    </main>
  );
}
