import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const navigationLinkClassName =
  "text-sm font-medium text-ink transition-colors hover:text-stone";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-paper">
      <div className="site-container flex min-h-[4.5rem] items-center justify-between md:min-h-20">
        <Link href="/" className="shrink-0" aria-label="5:55 AM home">
          <Image
            src="/brand/logo.png"
            alt="5:55 AM"
            width={1774}
            height={887}
            priority
            sizes="(max-width: 767px) 6rem, 7.5rem"
            className="h-auto w-24 md:w-30"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={navigationLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="button-primary hidden md:inline-flex">
          Start a project <span className="button-arrow" aria-hidden="true">→</span>
        </Link>

        <details className="relative md:hidden">
          <summary className="flex min-h-11 list-none cursor-pointer items-center gap-2 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span>Menu</span>
            <span className="grid w-4 gap-1" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </summary>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+0.5rem)] z-10 w-[calc(100vw-2.5rem)] border border-border bg-paper p-5"
          >
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-ink transition-colors hover:text-stone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="button-primary mt-5 w-full">
              Start a project <span className="button-arrow" aria-hidden="true">→</span>
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
