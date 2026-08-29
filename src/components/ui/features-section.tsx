"use client";

import Bucket from "@/components/ui/bucket";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="home-features-heading" className="relative w-full py-16 md:py-24">
      {/* Header */}
      <div className="mb-20 px-5 text-center md:mb-28 md:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">A lot of care in one little app</p>
        <h2 id="home-features-heading" className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl">
          Built <span className="text-zinc-400">different.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
          Log the everyday essentials for free, then go deeper with Chan+ if BBT, LH tests, cervical fluid, widgets, or biometric privacy feel useful to you.
        </p>
      </div>

      {/* Bucket feature animation */}
      <div className="px-5 md:px-8 max-w-3xl mx-auto">
        <Bucket />
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-4 px-6 md:grid-cols-3 md:px-12">
        <article className="rounded-2xl border border-pink-200/70 bg-white/75 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900">Generous from day one</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">Periods, moods, notes, energy, multiple modes, visualizers, PIN lock, imports, full CSV export, and all six languages are free.</p>
        </article>
        <article className="rounded-2xl border border-pink-200/70 bg-white/75 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900">Chan+ goes deeper</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">Advanced Daily Log, BBT, LH tests, cervical fluid, widgets, biometric unlock, nutrition ideas, and extra visual context.</p>
        </article>
        <article className="rounded-2xl border border-pink-200/70 bg-white/75 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900">One payment, not another bill</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">Every new customer gets a 15-day Chan+ trial. After that, Chan+ is a one-time purchase at the price shown by your local store.</p>
        </article>
      </div>

      <div className="mt-8 text-center">
        <Link href="/features/" className="inline-flex min-h-11 items-center rounded-xl border border-pink-200 bg-white px-5 py-3 font-semibold text-pink-500 shadow-sm transition-colors hover:bg-pink-50">
          Compare Free and Chan+
        </Link>
      </div>
    </section>
  );
}
