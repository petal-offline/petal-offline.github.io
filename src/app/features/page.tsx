import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  ClipboardList,
  Download,
  HeartPulse,
  Languages,
  LineChart,
  LockKeyhole,
  Thermometer,
  X,
} from "lucide-react";
import Bucket from "@/components/ui/bucket";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FEATURE_COMPARISON, SITE_URL, type Availability } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features & Chan+ | Petal Chan",
  description:
    "See what is free in Petal Chan, what Chan+ adds, how the 15-day trial and one-time purchase work, and how cycle estimates should be interpreted.",
  alternates: { canonical: `${SITE_URL}/features/` },
  openGraph: {
    title: "Features & Chan+ | Petal Chan",
    description: "A generous free cycle tracker with deeper logging and privacy conveniences in Chan+.",
    url: `${SITE_URL}/features/`,
    type: "website",
    images: [`${SITE_URL}/preview.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features & Chan+ | Petal Chan",
    description: "Compare the free app with the one-time Chan+ upgrade.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const featureGroups = [
  {
    icon: CalendarDays,
    title: "Your everyday cycle",
    text: "Log periods and flow, see your calendar and estimates, and choose Standard, Irregular, or Symptom-Only mode.",
  },
  {
    icon: HeartPulse,
    title: "How you feel",
    text: "Keep moods, notes, energy, basic symptoms, and multiple entries together without losing the human part of tracking.",
  },
  {
    icon: ClipboardList,
    title: "Deeper daily context",
    text: "Chan+ adds symptom severity, LH test results, cervical-fluid logging, and the Advanced Daily Log.",
  },
  {
    icon: Thermometer,
    title: "BBT patterns",
    text: "Chan+ includes BBT logging, history, a graph, and a visualizer so temperature patterns are easier to notice.",
  },
  {
    icon: LineChart,
    title: "Patterns over time",
    text: "Monthly and yearly cycle views, a mood-year visualizer, and the period-late helper make your history useful.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy controls",
    text: "PIN protection is free. Chan+ adds biometric unlock and an app-switcher privacy screen.",
  },
  {
    icon: Download,
    title: "No lock-in",
    text: "Import compatible data and export your full record as CSV in the free app whenever you choose.",
  },
  {
    icon: Languages,
    title: "Made to feel at home",
    text: "All six languages, light and dark themes, ordinary cycle notifications, and product timers are included for everyone.",
  },
];

function AvailabilityCell({ value }: { value: Availability }) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700">
        <Check aria-hidden="true" className="h-4 w-4 text-pink-400" /> Included
      </span>
    );
  }

  if (value === "Not included") {
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-400">
        <X aria-hidden="true" className="h-4 w-4" /> Not included
      </span>
    );
  }

  return <span className="font-medium text-zinc-700">{value}</span>;
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Petal Chan", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Features & Chan+", item: `${SITE_URL}/features/` },
  ],
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-14 px-6 py-20 md:px-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Free and Chan+</p>
            <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
              The free app is the real app.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              I built the free version to stand on its own. Chan+ is there if you want deeper logs, BBT, widgets, and a few extra privacy controls.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
              <a href="#compare" className="border-b border-pink-300 pb-1 text-zinc-900 transition-colors hover:text-pink-400">See the full comparison</a>
              <Link href="/privacy/" className="border-b border-zinc-300 pb-1 text-zinc-500 transition-colors hover:text-zinc-900">How I handle privacy</Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-2xl lg:translate-y-8">
            <Bucket />
          </div>
        </section>

        <section aria-labelledby="feature-heading" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">What is inside</p>
              <h2 id="feature-heading" className="mt-4 text-4xl font-bold tracking-tight">I kept the useful parts close.</h2>
            </div>
            <div className="border-t border-pink-200">
              {featureGroups.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="grid gap-4 border-b border-pink-200 py-7 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-6">
                    <div className="flex items-center gap-3 text-pink-400">
                      <span className="text-xs font-semibold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="chan-plus-heading" className="border-y border-pink-300 bg-pink-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div aria-hidden="true" className="select-none text-[clamp(5rem,14vw,12rem)] font-bold leading-none tracking-[-0.08em] text-white/65">
              CHAN+
            </div>
            <div className="max-w-2xl pb-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">Every new customer</p>
              <h2 id="chan-plus-heading" className="mt-4 text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
                15 days to try it. One payment if you keep it.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-700">
                I made Chan+ a one-time purchase, not a subscription. Your local App Store or Google Play listing shows the current price for your country or region.
              </p>
              <p className="mt-6 border-t border-zinc-900/15 pt-5 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-700">
                Advanced Daily Log · BBT · Widgets · Biometric unlock · Privacy screen · Food suggestions
              </p>
            </div>
          </div>
        </section>

        <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-8 mx-auto max-w-6xl px-6 py-24 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Free vs Chan+</p>
            <h2 id="compare-heading" className="mt-4 text-4xl font-bold tracking-tight">Everything, line by line.</h2>
            <p className="mt-4 text-zinc-500">Free is not a preview. Chan+ simply gives you more ways to log and protect the details.</p>
          </div>
          <table className="mt-12 block w-full border-collapse border-y border-pink-200 text-left text-sm md:table">
            <caption className="sr-only">Features included in the free version of Petal Chan and in Chan+</caption>
            <thead className="sr-only md:not-sr-only md:table-header-group">
              <tr className="border-b border-pink-200">
                <th scope="col" className="px-2 py-5 text-base font-bold">Capability</th>
                <th scope="col" className="w-44 px-5 py-5 text-base font-bold">Free</th>
                <th scope="col" className="w-44 px-5 py-5 text-base font-bold text-pink-400">Chan+</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {FEATURE_COMPARISON.map((row) => (
                <tr key={row.capability} className="block border-b border-pink-200 p-4 last:border-0 md:table-row md:p-0">
                  <th scope="row" className="block pb-3 text-base font-semibold text-zinc-700 md:table-cell md:px-2 md:py-4 md:text-sm md:font-medium">{row.capability}</th>
                  <td className="flex items-center justify-between gap-4 py-1 md:table-cell md:w-44 md:px-5 md:py-4">
                    <span aria-hidden="true" className="font-medium text-zinc-500 md:hidden">Free</span>
                    <AvailabilityCell value={row.free} />
                  </td>
                  <td className="flex items-center justify-between gap-4 py-1 md:table-cell md:w-44 md:px-5 md:py-4">
                    <span aria-hidden="true" className="font-medium text-pink-400 md:hidden">Chan+</span>
                    <AvailabilityCell value={row.chanPlus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="predictions" aria-labelledby="predictions-heading" className="scroll-mt-8 border-y border-pink-200 bg-white/45">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <article className="px-6 py-20 md:border-r md:border-pink-200 md:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">How predictions work</p>
              <h2 id="predictions-heading" className="mt-4 text-3xl font-bold tracking-tight">Helpful estimates, not certainty.</h2>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Petal Chan calculates cycle and fertility estimates locally from the history you record. BBT, LH tests, and cervical-fluid logs can add context, but none of them makes an ovulation or fertility prediction certain.
              </p>
            </article>
            <article id="medical-use" className="scroll-mt-8 px-6 py-20 md:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Medical use</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">I built a tracker, not a medical device.</h2>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Petal Chan does not provide medical advice and is not intended to diagnose a condition. Do not rely on it as contraception, to determine “safe days,” or as guaranteed conception guidance.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <h2 className="text-3xl font-bold">Want the privacy details?</h2>
          <p className="mt-3 max-w-xl text-zinc-500">I explain where records live, what app lock protects, and what happens when you export.</p>
          <Link href="/privacy/" className="mt-6 inline-flex min-h-11 items-center border-b border-pink-300 font-semibold text-zinc-900 transition-colors hover:text-pink-400">
            Read how privacy works
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
