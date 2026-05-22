"use client";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const PLATFORMS = [
  {
    id: "playstore",
    name: "Google Play",
    subtitle: "18 reviews",
    rating: "5.0",
    showStars: true,
    pixelColors: ["#E55B81", "#EF8BAA", "#F5B8CB"],
    icon: "/play_icon.png",
    iconAlt: "Google Play",
    iconSize: 32,
  },
  {
    id: "appstore",
    name: "App Store",
    subtitle: "1 review",
    rating: "5.0",
    showStars: true,
    pixelColors: ["#8B7FC7", "#A99FD8", "#C8C2E9"],
    icon: "/apple.png",
    iconAlt: "Apple App Store",
    iconSize: 28,
  },
  {
    id: "reddit",
    name: "Reddit",
    subtitle: "11 posts",
    rating: null,
    showStars: false,
    pixelColors: ["#E55B81", "#8B7FC7", "#F5B8CB"],
    icon: null,
    iconAlt: "",
    iconSize: 32,
  },
];

function RedditIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="currentColor" className="text-zinc-200 group-hover:text-[#FF4500]/20 transition-colors duration-300" />
      <path d="M26.5 16a2.5 2.5 0 00-4.24-1.79A12.3 12.3 0 0016 12.5a.5.5 0 00-.49.6l.7 3.5a7.25 7.25 0 01-4.26-1.29A2.5 2.5 0 105.5 17.25a4.93 4.93 0 000 .75C5.5 21.28 10.2 24 16 24s10.5-2.72 10.5-6a4.93 4.93 0 000-.75A2.5 2.5 0 0026.5 16zm-17 3a1.5 1.5 0 111.5 1.5A1.5 1.5 0 019.5 19zm9 4a6.11 6.11 0 01-5 0 .5.5 0 01.41-.91 5.13 5.13 0 004.18 0 .5.5 0 01.41.91zM21 20.5A1.5 1.5 0 1122.5 19 1.5 1.5 0 0121 20.5z" fill="#FF4500"/>
    </svg>
  );
}

export function PlatformReviewCards() {
  return (
    <section className="w-full max-w-4xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
      <p className="text-center text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
        Real reviews from real users
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200/70 border border-zinc-200/70 rounded-2xl overflow-hidden shadow-sm">
        {PLATFORMS.map((platform) => (
          <Link
            key={platform.id}
            href={`/reviews?tab=${platform.id}`}
            className="group relative flex flex-col items-center justify-center gap-3 bg-white hover:bg-white/90 px-6 py-10 transition-all duration-300 cursor-pointer select-none"
          >
            <PixelCanvas
              colors={platform.pixelColors}
              gap={6}
              speed={25}
            />
            {/* Icon */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 group-hover:bg-white border border-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              {platform.icon ? (
                <Image
                  src={platform.icon}
                  alt={platform.iconAlt}
                  width={platform.iconSize}
                  height={platform.iconSize}
                  className="object-contain"
                />
              ) : (
                <RedditIcon />
              )}
            </div>

            {/* Name */}
            <p className="relative z-10 font-bold text-zinc-900 text-base group-hover:text-[#E55B81] transition-colors duration-300">
              {platform.name}
            </p>

            {/* Stars + rating */}
            {platform.showStars && (
              <div className="relative z-10 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-semibold text-zinc-600 ml-1">{platform.rating}</span>
              </div>
            )}

            {/* Subtitle */}
            <p className="relative z-10 text-xs text-zinc-400 group-hover:text-zinc-500 transition-colors">
              {platform.subtitle}
            </p>

            <div className="relative z-10 flex items-center gap-1 text-xs font-medium text-[#E55B81] opacity-0 group-hover:opacity-100 transition-all duration-300 -mt-1">
              Read reviews <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
