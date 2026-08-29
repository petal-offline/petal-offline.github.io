"use client";

import Bucket from "@/components/ui/bucket";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="home-features-heading" className="relative w-full py-16 md:py-24">
      <div className="mb-28 px-5 text-center md:mb-36 md:px-8">
        <h2 id="home-features-heading" className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl">
          Built <span className="text-zinc-400">&quot;Different.&quot;</span>
        </h2>
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Bucket />
      </div>
    </section>
  );
}
