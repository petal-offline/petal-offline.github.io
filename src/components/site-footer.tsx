import Image from "next/image";
import Link from "next/link";
import { CONTACT, STORE_LINKS } from "@/lib/site";

const footerLinks = [
  { href: "/features/", label: "Features & Chan+" },
  { href: "/privacy/", label: "How privacy works" },
  { href: "/privacypolicy/", label: "Privacy Policy" },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-pink-200/60 bg-white/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src="/petallogo.png" alt="" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-zinc-900">Petal Chan</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
            A privacy-first period and cycle tracker created and developed by Ayush Mishra.
          </p>
          <a
            href={`mailto:${CONTACT.supportEmail}`}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-pink-500 underline decoration-pink-200 underline-offset-4 hover:text-pink-600"
          >
            {CONTACT.supportEmail}
          </a>
        </div>

        <nav aria-label="Footer navigation" className="grid content-start gap-2 text-sm">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-11 w-fit items-center text-zinc-500 transition-colors hover:text-pink-500">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-zinc-500">
          <p className="font-semibold text-zinc-900">Get Petal Chan</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center hover:text-pink-500">
              Google Play
            </a>
            <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center hover:text-pink-500">
              App Store
            </a>
            <a href={CONTACT.productInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center hover:text-pink-500">
              Instagram {CONTACT.productInstagramLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-pink-200/50 px-6 py-5 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between md:px-12">
        <span>© {new Date().getFullYear()} ClearlySimple. All rights reserved.</span>
        <span>Made with care for your privacy.</span>
      </div>
    </footer>
  );
}
