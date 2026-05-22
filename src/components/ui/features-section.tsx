"use client";

import Bucket from "@/components/ui/bucket";

export function FeaturesSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-28 md:mb-36 px-5 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Built <span className="text-zinc-400">&quot;Different.&quot;</span>
        </h2>
      </div>

      {/* Bucket feature animation */}
      <div className="px-5 md:px-8 max-w-3xl mx-auto">
        <Bucket />
      </div>
    </section>
  );
}
