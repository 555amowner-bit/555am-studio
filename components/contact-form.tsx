"use client";

import { FormEvent, useState } from "react";

const inputClassName =
  "mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-base text-ink outline-none placeholder:text-stone focus:border-ink";

const selectClassName =
  "mt-3 w-full appearance-none border-b border-border bg-transparent px-0 py-3 text-base text-ink outline-none focus:border-ink";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "");
    const business = String(formData.get("business") ?? "");
    const email = String(formData.get("email") ?? "");
    const businessType = String(formData.get("businessType") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const websiteStatus = String(formData.get("websiteStatus") ?? "");
    const budget = String(formData.get("budget") ?? "");
    const timeline = String(formData.get("timeline") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `New project inquiry — ${
      business || name || "5:55 AM"
    }`;

    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      "",
      `Business type: ${businessType}`,
      `Project type: ${projectType}`,
      `Current website: ${websiteStatus}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      "What they need:",
      message,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "555amowner@gmail.com");
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    const gmailWindow = window.open(
      gmailUrl.toString(),
      "555am-gmail-compose"
    );

    if (!gmailWindow) {
      setStatus(
        "Gmail could not be opened. Please allow pop-ups for this site and try again."
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setStatus("Gmail opened in a new tab.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div>
        <p className="eyebrow">01 — ABOUT YOU</p>

        <div className="mt-8 grid-12 gap-x-6 gap-y-8">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="name" className="text-small">
              Your name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClassName}
              placeholder="Your name"
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="business" className="text-small">
              Business name *
            </label>

            <input
              id="business"
              name="business"
              type="text"
              autoComplete="organization"
              required
              className={inputClassName}
              placeholder="Business name"
            />
          </div>

          <div className="col-span-12">
            <label htmlFor="email" className="text-small">
              Email address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClassName}
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow">02 — ABOUT YOUR BUSINESS</p>

        <div className="mt-8 space-y-8">
          <div>
            <label htmlFor="businessType" className="text-small">
              What do you do? *
            </label>

            <select
              id="businessType"
              name="businessType"
              required
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Hair Salon">Hair Salon</option>
              <option value="Spa">Spa</option>
              <option value="Nail Studio">Nail Studio</option>
              <option value="Barber">Barber</option>
              <option value="Beauty / Skincare">Beauty / Skincare</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="projectType" className="text-small">
              What do you need? *
            </label>

            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="New website">I need a new website</option>
              <option value="Website redesign">
                I need to redesign my current website
              </option>
              <option value="Landing page">I need a landing page</option>
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="websiteStatus" className="text-small">
              Your current website
            </label>

            <select
              id="websiteStatus"
              name="websiteStatus"
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="No website">I don&apos;t have one</option>
              <option value="Outdated website">
                I have one, but it&apos;s outdated
              </option>
              <option value="Needs improvement">
                I have one and need improvements
              </option>
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow">03 — PROJECT</p>

        <div className="mt-8 space-y-8">
          <div>
            <label htmlFor="budget" className="text-small">
              Budget
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Under 3M">Under 3M₫</option>
              <option value="3M–5M">3–5M₫</option>
              <option value="5M–10M">5–10M₫</option>
              <option value="10M+">10M₫+</option>
              <option value="Not sure">I&apos;m not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="text-small">
              Desired timeline
            </label>

            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1–3 months">1–3 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-small">
              Tell us more *
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${inputClassName} resize-none`}
              placeholder="What would you like your website to help you achieve?"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <button
          type="submit"
          className="button-primary"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          <span>
            {isSubmitting ? "Gmail opened" : "Start the conversation"}
          </span>

          <span aria-hidden="true" className="button-arrow">
            →
          </span>
        </button>

        <p
          aria-live="polite"
          className="text-small mt-4 max-w-md text-stone"
        >
          {status ||
            "Submitting this form will open Gmail with the message prepared for 5:55 AM."}
        </p>
      </div>
    </form>
  );
}