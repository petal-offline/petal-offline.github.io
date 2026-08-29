"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const PLATFORMS = [
  {
    id: "playstore",
    name: "Google Play",
    subtitle: "Selected reviews",
    pixelColors: ["#E55B81", "#EF8BAA", "#F5B8CB"],
    icon: "/play_icon.png",
    iconAlt: "Google Play",
    iconHeight: 32,
  },
  {
    id: "appstore",
    name: "App Store",
    subtitle: "Selected reviews",
    pixelColors: ["#8B7FC7", "#A99FD8", "#C8C2E9"],
    icon: "/apple.png",
    iconAlt: "Apple App Store",
    iconHeight: 28,
  },
  {
    id: "reddit",
    name: "Reddit",
    subtitle: "Selected posts",
    pixelColors: ["#E55B81", "#8B7FC7", "#F5B8CB"],
    icon: null,
    iconAlt: "",
    iconHeight: 32,
  },
];

function RedditIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4500" className="group-hover:scale-110 transition-transform">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

export function PlatformReviewCards() {
  return (
    <section className="w-full max-w-4xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
      <p className="text-center text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
        Selected public reviews
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200/70 border border-zinc-200/70 rounded-2xl overflow-hidden shadow-sm">
        {PLATFORMS.map((platform) => (
          <Link
            key={platform.id}
            href={`/reviews/#${platform.id}`}
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
                  width={platform.id === "appstore" ? 842 : 137}
                  height={platform.id === "appstore" ? 1000 : 150}
                  className={`w-auto object-contain ${platform.iconHeight === 28 ? "h-7" : "h-8"} ${platform.id === "appstore" ? "brightness-0" : ""}`}
                />
              ) : (
                <RedditIcon />
              )}
            </div>

            {/* Name */}
            <p className="relative z-10 font-bold text-zinc-900 text-base group-hover:text-pink-500 transition-colors duration-300">
              {platform.name}
            </p>

            {/* Subtitle */}
            <p className="relative z-10 text-xs text-zinc-400 group-hover:text-zinc-500 transition-colors">
              {platform.subtitle}
            </p>

            <div className="relative z-10 flex items-center gap-1 text-xs font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -mt-1">
              Read reviews <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
