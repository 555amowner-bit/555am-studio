import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Start a Project",
  description:
    "Tell 5:55 AM what your business needs and start a conversation.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid-12 gap-y-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow">START A CONVERSATION.</p>

              <h1 className="type-display mt-6 max-w-3xl">
                Tell us what you need.
              </h1>

              <p className="text-large mt-8 max-w-xl text-stone">
                A new website, a better website, or you&apos;re not quite sure
                yet — tell us a little about your business and we&apos;ll take
                it from there.
              </p>

              <div className="mt-10 border-t border-border pt-5">
                <p className="eyebrow">EMAIL</p>

                <a
                  className="text-link mt-4"
                  href="mailto:555amowner@gmail.com"
                >
                  <span>555amowner@gmail.com</span>
                  <span aria-hidden="true" className="button-arrow">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}