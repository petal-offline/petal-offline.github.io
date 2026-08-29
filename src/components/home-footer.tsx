"use client";

import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { CONTACT } from "@/lib/site";

export function HomeFooter() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer className="relative w-full overflow-hidden border-t border-pink-200/40 pb-0">
      <div className="relative z-0 mb-8 mt-12 h-40 w-full md:h-64">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/30 via-transparent to-white/30" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text="Privacy+"
            fontSize={isMobile ? 60 : 130}
            className="h-full w-full"
            squareSize={2}
            gridGap={isMobile ? 2 : 3}
            color="#E55B81"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1.25fr_1fr_auto] md:px-12">
        <div className="flex items-start gap-2 text-sm text-zinc-500">
          <Image src="/petallogo.png" alt="" width={20} height={20} className="rounded-xl object-contain opacity-60" />
          <div className="flex flex-col">
            <span>© {new Date().getFullYear()} ClearlySimple. All rights reserved.</span>
            <span className="mt-0.5 text-zinc-500">
              I&apos;m Ayush Mishra. I created and develop Petal Chan. ·{" "}
              <a href={`mailto:${CONTACT.supportEmail}`} className="underline decoration-pink-200 underline-offset-4 transition-colors hover:text-pink-500">
                {CONTACT.supportEmail}
              </a>
            </span>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-5 gap-y-1 text-sm text-zinc-500 md:justify-center">
          <Link href="/features/" className="inline-flex min-h-11 items-center transition-colors hover:text-pink-500">Features & Chan+</Link>
          <Link href="/privacy/" className="inline-flex min-h-11 items-center transition-colors hover:text-pink-500">How privacy works</Link>
          <Link href="/about/" className="inline-flex min-h-11 items-center transition-colors hover:text-pink-500">About</Link>
          <Link href="/reviews/" className="inline-flex min-h-11 items-center transition-colors hover:text-pink-500">Reviews</Link>
          <Link href="/privacypolicy/" className="inline-flex min-h-11 items-center transition-colors hover:text-pink-500">Privacy Policy</Link>
        </nav>

        <a href={CONTACT.productInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm text-zinc-500 transition-colors hover:text-pink-500 md:justify-end">
          Instagram {CONTACT.productInstagramLabel}
        </a>
      </div>
    </footer>
  );
}
