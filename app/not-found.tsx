import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <section className="w-full border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="type-label">404 / PAGE NOT FOUND</p>

          <div className="mt-8 max-w-3xl">
            <h1 className="type-display text-[clamp(4rem,12vw,9rem)] leading-[0.85]">
              Lost in
              <span className="font-serif italic"> the noise.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-stone md:text-lg">
              The page you&apos;re looking for doesn&apos;t exist or may have
              moved.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-sm font-medium tracking-wide transition-opacity hover:opacity-60"
            >
              Back to home
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}