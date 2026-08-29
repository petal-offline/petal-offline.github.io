import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  ClipboardList,
  Download,
  CircleAlert,
  HeartPulse,
  Languages,
  LineChart,
  LockKeyhole,
  Sparkles,
  Thermometer,
  X,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FEATURE_COMPARISON, SITE_URL, STORE_LINKS, type Availability } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features & Chan+ | Petal Chan",
  description:
    "See what is free in Petal Chan, what Chan+ adds, how the 15-day trial and one-time purchase work, and how cycle estimates should be interpreted.",
  alternates: { canonical: `${SITE_URL}/features/` },
  openGraph: {
    title: "Features & Chan+ | Petal Chan",
    description: "A generous free cycle tracker, with deeper logging and privacy conveniences in Chan+.",
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
    text: "Log periods and flow, see your calendar and estimates, and use Standard, Irregular, or Symptom-Only mode.",
  },
  {
    icon: HeartPulse,
    title: "How you feel",
    text: "Keep moods, notes, energy, basic symptoms, and multiple entries together without losing the human part of tracking.",
  },
  {
    icon: ClipboardList,
    title: "Deeper daily context",
    text: "Chan+ adds the Advanced Daily Log with symptom severity, LH test results, and cervical-fluid logging.",
  },
  {
    icon: Thermometer,
    title: "BBT patterns",
    text: "Chan+ includes BBT logging, history, a graph, and the BBT visualizer so temperature patterns are easier to notice.",
  },
  {
    icon: LineChart,
    title: "Patterns over time",
    text: "Monthly and yearly cycle views, a mood-year visualizer, the period-late helper, and saved context make history useful.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy controls",
    text: "PIN protection is free. Chan+ adds biometric unlock and an app-switcher privacy screen for a little more discretion.",
  },
  {
    icon: Download,
    title: "No lock-in",
    text: "Import from Flo, Clue, or a compatible CSV, then export the full record as CSV in the free app. Your data should be able to travel when you choose.",
  },
  {
    icon: Languages,
    title: "Made to feel at home",
    text: "English, Spanish, French, German, Portuguese, and Tagalog—plus light and dark themes, ordinary cycle notifications, and product timers—are included for everyone.",
  },
];

function AvailabilityCell({ value }: { value: Availability }) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700">
        <Check aria-hidden="true" className="h-4 w-4 text-pink-500" /> Included
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
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 text-center md:px-12 md:pb-28 md:pt-24">
          <span className="inline-flex rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold text-pink-500 shadow-sm">
            Free, with a little more when you want it
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            The essentials stay free. <span className="text-pink-500">Chan+ goes deeper.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Petal Chan includes substantial cycle tracking for free. Chan+ adds deeper body signals, extra visual context, widgets, nutrition ideas, and biometric privacy conveniences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-4">
              View on Google Play
            </a>
            <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-4">
              View on the App Store
            </a>
          </div>
        </section>

        <section aria-labelledby="feature-heading" className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">A fuller picture</p>
            <h2 id="feature-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Track the details that matter to you.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureGroups.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-pink-200/70 bg-white/80 p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="chan-plus-heading" className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-pink-200 bg-gradient-to-br from-white to-pink-50 shadow-sm">
            <div className="grid gap-10 p-7 md:grid-cols-[1.25fr_0.75fr] md:p-12">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-pink-sm">
                  <Sparkles aria-hidden="true" className="h-6 w-6" />
                </div>
                <h2 id="chan-plus-heading" className="mt-5 text-3xl font-bold tracking-tight">Meet Chan+.</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
                  Try every Chan+ feature for 15 days as a new customer. If it feels right, Chan+ is one payment—not a recurring subscription.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Pricing varies by storefront, country, and region. Your local App Store or Google Play listing shows the current price.
                </p>
              </div>
              <div className="grid content-center gap-3 rounded-2xl border border-pink-200 bg-white/80 p-6">
                <p className="text-sm font-semibold text-pink-500">Every new customer</p>
                <p className="text-4xl font-bold tracking-tight">15-day trial</p>
                <p className="text-sm leading-relaxed text-zinc-500">Then one payment if you choose Chan+. No monthly bill and no subscription to cancel.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-8 border-y border-pink-200/60 bg-white/55 py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">Free vs Chan+</p>
              <h2 id="compare-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The complete comparison.</h2>
              <p className="mt-4 text-zinc-600">Free is a real tracker, not a preview. Chan+ is there when you want more detail.</p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-sm">
              <table className="block w-full border-collapse text-left text-sm md:table">
                <caption className="sr-only">Features included in the free version of Petal Chan and in Chan+</caption>
                <thead className="sr-only md:not-sr-only md:table-header-group">
                  <tr className="border-b border-pink-200 bg-pink-50/70">
                    <th scope="col" className="px-5 py-4 text-base font-bold">Capability</th>
                    <th scope="col" className="w-44 px-5 py-4 text-base font-bold">Free</th>
                    <th scope="col" className="w-44 px-5 py-4 text-base font-bold text-pink-500">Chan+</th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {FEATURE_COMPARISON.map((row) => (
                    <tr key={row.capability} className="block border-b border-pink-100 p-5 last:border-0 md:table-row md:p-0">
                      <th scope="row" className="block pb-3 text-base font-semibold text-zinc-700 md:table-cell md:px-5 md:py-4 md:text-sm md:font-medium">{row.capability}</th>
                      <td className="flex items-center justify-between gap-4 py-1 md:table-cell md:w-44 md:px-5 md:py-4">
                        <span aria-hidden="true" className="font-medium text-zinc-500 md:hidden">Free</span>
                        <AvailabilityCell value={row.free} />
                      </td>
                      <td className="flex items-center justify-between gap-4 py-1 md:table-cell md:w-44 md:px-5 md:py-4">
                        <span aria-hidden="true" className="font-medium text-pink-500 md:hidden">Chan+</span>
                        <AvailabilityCell value={row.chanPlus} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="predictions" aria-labelledby="predictions-heading" className="scroll-mt-8 mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-2 md:px-12">
          <article className="rounded-[2rem] border border-pink-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">How predictions work</p>
            <h2 id="predictions-heading" className="mt-3 text-3xl font-bold tracking-tight">Helpful estimates, not certainty.</h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Petal Chan calculates cycle and fertility estimates locally from the cycle history you record. As you add information, those estimates can update using what is available.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              BBT can help you notice temperature patterns that may be consistent with ovulation. LH test results and cervical-fluid logs can add context too, but none of these signals makes ovulation or fertility predictions certain.
            </p>
          </article>

          <article id="medical-use" className="scroll-mt-8 rounded-[2rem] border border-zinc-200 bg-zinc-900 p-7 text-white shadow-sm md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <CircleAlert aria-hidden="true" className="h-6 w-6 text-pink-300" />
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">For personal tracking—not medical use.</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Petal Chan is not a medical device, does not provide medical advice, and is not intended to diagnose a condition. Do not rely on it as contraception, to determine “safe days,” or as guaranteed conception guidance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              If a symptom or cycle change worries you, a qualified healthcare professional can help you interpret it.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center md:px-12">
          <h2 className="text-3xl font-bold">Want to understand the privacy side too?</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-500">See where records live, what the app lock protects, and what happens when you export.</p>
          <Link href="/privacy/" className="mt-6 inline-flex min-h-11 items-center rounded-xl border border-pink-200 bg-white px-5 py-3 font-semibold text-pink-500 shadow-sm hover:bg-pink-50">
            How privacy works
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
