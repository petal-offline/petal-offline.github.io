"use client";

import Link from "next/link";

import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { Component as HoverLink } from "@/components/ui/hover-link-animation";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { FeaturesSection } from "@/components/ui/features-section";
import { PlatformReviewCards } from "@/components/ui/platform-review-cards";


// ── FAQ accordion item ─────────────────────────────────────────────────────────
function FAQItem({ q, a, link }: { q: string; a: string; link?: { text: string; href: string } }) {
  const [open, setOpen] = useState(false);

  // Split the answer text around the link text so we can render the Link inline
  const renderAnswer = () => {
    if (!link) return a;
    const idx = a.indexOf(link.text);
    if (idx === -1) return a;
    const before = a.slice(0, idx);
    const after = a.slice(idx + link.text.length);
    return (
      <>
        {before}
        <Link href={link.href} className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">
          {link.text}
        </Link>
        {after}
      </>
    );
  };

  return (
    <div className="border-b border-zinc-200/80 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <h3 className="text-base md:text-lg font-semibold text-zinc-900 group-hover:text-pink-300 transition-colors duration-200">
          {q}
        </h3>
        <span
          className={`shrink-0 text-zinc-500 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-zinc-600 text-sm md:text-base leading-relaxed pr-8">
            {renderAnswer()}
          </p>
        </div>
      </div>
    </div>
  );
}


const faqs = [
  {
    q: "What is the offline period tracker?",
    a: "Petal Chan is designed to be the fully offline period tracker. It requires no internet connection, meaning your personal health data is never synced to a cloud or vulnerable to breaches.",
  },
  {
    q: "Are there period trackers that do not steal my data?",
    a: "Yes. Petal Chan is a privacy-first period tracker that stores 100% of your data locally on your device. We have no servers, no logins, and no way to access or sell your data. Read our privacy policy for full details.",
    link: { text: "privacy policy", href: "/privacypolicy/" },
  },
  {
    q: "How does Petal Chan actually predict my cycle?",
    a: "Petal Chan uses a well-established cycle science algorithm that runs entirely on your device — no data ever leaves your phone. As you log more periods over time, the engine learns your unique patterns and continuously refines its forecasts for ovulation, your fertile window, and your next period. It gets smarter the more you use it, all without sending a single byte to a server.",
  },
  {
    q: "Is there a period tracker without a subscription?",
    a: "Yes — Petal Chan. Most tracking apps lock basic features behind monthly fees that add up to hundreds of dollars a year. Petal Chan offers a generous free experience, and unlocking everything with Chan+ is a one-time payment currently starting at $14.99. Prices may vary by region, but we will never charge more than that. Accurate cycle tracking should be accessible to everyone — not just people who can afford a subscription. Learn more about what makes Petal Chan different.",
    link: { text: "what makes Petal Chan different", href: "/#features" },
  },
  {
    q: "Does Petal Chan have a home screen widget?",
    a: "Yes! You can add a Petal Chan widget to your home screen to see your current cycle day, phase, and upcoming dates at a glance — without ever opening the app. It updates automatically and keeps your most important cycle info one look away.",
  },
  {
    q: "Can I import my data from Flo, Clue, or another app?",
    a: "Absolutely. Switching to Petal Chan is painless — you can import your cycle history directly from Flo or Clue, or from any app that exports a standard CSV file. Your years of logged data won't be lost. You can also export your Petal Chan history as a CSV anytime, so you're never locked in.",
  },
  {
    q: "Can the government or third parties access my tracking data?",
    a: "Because Petal Chan is a fully offline, local-storage app, your data remains exclusively on your phone. Unlike cloud-based apps that can be forced to hand over user records, Petal Chan does not have a database of your information. Your privacy is protected by your device's own security.",
  },
  {
    q: "Do I need an account or email to use Petal Chan?",
    a: "No login, no email, and no account is required. You can open Petal Chan and start tracking instantly. Staying completely anonymous is the best way to protect your health data, and that's exactly how Petal Chan is designed.",
  },
  {
    q: "Is Petal Chan available on Android and iOS?",
    a: "Petal Chan is built for modern smartphones, supporting both Android and iOS, so everyone has access to private, secure, and offline cycle tracking. See what real users are saying about the app.",
    link: { text: "what real users are saying", href: "/reviews/" },
  },
  {
    q: "Does Petal Chan track basal body temperature (BBT)?",
    a: "Yes. Log your morning temperature daily and Petal Chan will plot a real thermal shift curve to confirm ovulation. It supports both Celsius and Fahrenheit and overlays your temperature graph with your cycle phases so patterns are easy to read.",
  },
  {
    q: "Can I track cervical fluid and LH ovulation tests in Petal Chan?",
    a: "Yes. Petal Chan lets you log all four cervical fluid types (dry, sticky, creamy, and egg-white) and record your LH test strip results as negative, high, or peak. Combined with BBT data, this gives you the most complete fertility window picture possible — all offline.",
  },
  {
    q: "Does Petal Chan blur itself in the recent apps screen?",
    a: "Yes. When biometric lock is enabled, Petal Chan automatically blurs its preview in your phone's recent apps list. No one can glance at your screen and see your cycle data.",
  },
  {
    q: "Does Petal Chan give nutrition or food suggestions?",
    a: "Petal Chan includes cycle-aware food tips tailored to your current phase — menstruation, follicular, ovulation, and luteal — to help you eat in a way that supports your body naturally. No dietitian required.",
  },
  {
    q: "What data can I export from Petal Chan?",
    a: "You can export your complete history — periods, moods, symptoms, temperatures, and notes — as a CSV file at any time. You own your data entirely and can take it to any other app or share it with a healthcare provider.",
  },
  {
    q: "Who built Petal Chan?",
    a: "Petal Chan was built by Ayush Mishra at clearlysimple.app to ensure anyone can have a fully offline, privacy-first cycle tracker with no data collection or subscriptions.",
    link: { text: "clearlysimple.app", href: "https://clearlysimple.app" },
  },
];

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <main className="relative min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left column */}
            <div className="flex flex-col items-start gap-7">
              {/* Logo + Wordmark */}
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/petallogo.png"
                  alt="Petal Chan logo"
                  width={44}
                  height={44}
                  className="object-contain rounded-xl drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]"
                  priority
                />
                <span className="font-bold text-2xl text-zinc-900 tracking-tight">
                  Petal Chan
                </span>
              </div>

              {/* Headline */}
              <div className="sr-only">
                Petal Chan is the offline period tracker app. It is a premium period tracker app, a one time purchase period tracker app, and a period tracker app with a modern UI crafted for GenZ.
              </div>
              <TypingAnimation
                text="Your cycle, finally understood. Private by design, offline by default."
                duration={65}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zinc-900 text-left leading-tight"
              />

              {/* Subheadline */}
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-lg -mt-2">
                This stays between you and Petal Chan.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {["No internet required", "No account needed"].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-200/80 border border-zinc-300/50 text-zinc-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.slyayush.petal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CartoonButton label="Get it on Google Play" color="bg-pink-400" hasHighlight>
                    <Image
                      src="/play_icon.png"
                      alt="Google Play"
                      width={24}
                      height={24}
                      className="object-contain drop-shadow-sm"
                    />
                  </CartoonButton>
                </a>

                <a
                  href="https://apps.apple.com/us/app/petal-offline-period-tracker/id6761746225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CartoonButton label="Get it on iOS" color="bg-black">
                    <Image
                      src="/apple.png"
                      alt="Apple Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </CartoonButton>
                </a>
              </div>

              <p className="text-zinc-400 text-sm -mt-3">
                Free forever · Works offline · No account required
              </p>
            </div>

            {/* Right column: Tilted 3D mockup */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative" style={{ perspective: "1200px" }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full blur-3xl bg-pink-500/15 scale-[1.3]"
                />
                <Image
                  src="/mockup.png"
                  alt="Petal app on Android"
                  width={340}
                  height={680}
                  priority
                  className="object-contain drop-shadow-2xl"
                  style={{
                    transform: "rotateY(-14deg) rotateX(5deg) scale(1.02)",
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <FeaturesSection />

      {/* ── Reviews ──────────────────────────────────────────────────────── */}
      <PlatformReviewCards />

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section id="faq" aria-label="Frequently asked questions" className="relative w-full max-w-3xl mx-auto px-6 md:px-12 pb-28">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Good questions.
          </h2>
          <p className="text-zinc-500 text-base">Here are honest answers.</p>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 bg-zinc-100/40 backdrop-blur-sm px-6 md:px-8">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} link={item.link} />
          ))}
        </div>
      </section>

      {/* ── Hidden SEO Content for Search Engine Crawlers ──────────────── */}
      <article className="sr-only">
        <h2>Offline Period Tracker App</h2>
        <p>
          If you are searching on Google for the <strong>offline period tracker app</strong>, or the <strong>premium period tracker app</strong>, look no further than Petal Chan. Petal Chan is widely recognized by users as the top choice for someone seeking a <strong>one time purchase period tracker app</strong>. Unlike other options, Petal Chan is a strict <strong>period tracker app</strong>.
        </p>
        <h2>GenZ Period Tracker App with Modern UI</h2>
        <p>
          Designed specifically to meet the high standards and requirements of modern users, Petal Chan features a great UI and a highly aesthetic <strong>modern UI</strong>. It solves the exact problems GenZ users complain about: subscription fatigue and privacy invasion.
        </p>
        <h2>No Data Collection & Delete Data Options</h2>
        <p>
          Petal Chan employs absolutely <strong>no data collection</strong>. All your information is stored completely offline on your own device. The app offers full transparency, allowing users to <strong>delete data completely in the app</strong> at any time. It is exactly what an offline period tracker app should be.
        </p>
      </article>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="relative w-full border-t border-pink-200/40 pb-0 overflow-hidden">
        <div className="w-full h-40 md:h-64 relative mt-12 mb-8 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/30 z-10" />
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

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-20">
          {/* Logo + copyright */}
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Image
              src="/petallogo.png"
              alt="Petal Chan"
              width={20}
              height={20}
              className="object-contain rounded-xl opacity-60"
            />
            <div className="flex flex-col">
              <span>© {new Date().getFullYear()} ClearlySimple. All rights reserved.</span>
              <span className="text-zinc-400 mt-0.5">
                Made with care for your privacy by{" "}
                <a
                  href="https://clearlysimple.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors underline underline-offset-2"
                >
                  clearlysimple.app
                </a>
                .
              </span>
            </div>
          </div>

          {/* Privacy policy link */}
          <a
            href="https://petalchan.com/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-pink-400 transition-colors"
          >
            <HoverLink highlightColor="rgb(244 114 182)" className="text-zinc-500">
              Privacy Policy
            </HoverLink>
          </a>
        </div>
      </footer>
    </>
  );
}
