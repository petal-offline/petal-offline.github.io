import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/features/", label: "Features" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-12 md:py-7">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-4"
          aria-label="Petal Chan home"
        >
          <Image
            src="/petallogo.png"
            alt=""
            width={34}
            height={34}
            className="rounded-xl object-contain drop-shadow-[0_0_8px_rgba(229,91,129,0.28)]"
            priority
          />
          <span className="hidden text-lg font-bold tracking-tight text-zinc-900 sm:inline">Petal Chan</span>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-xl px-2.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-white/70 hover:text-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 sm:px-3.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
