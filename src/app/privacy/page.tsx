import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Privacy Works | Petal Chan",
  description:
    "A plain-language explanation of where Petal Chan stores cycle records, accounts, backups, app lock, CSV exports, purchases, and production analytics.",
  alternates: { canonical: `${SITE_URL}/privacy/` },
  openGraph: {
    title: "How Privacy Works | Petal Chan",
    description: "Clear answers about local cycle records, exports, backups, purchases, and app-lock protection.",
    url: `${SITE_URL}/privacy/`,
    type: "website",
    images: [`${SITE_URL}/preview.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Privacy Works | Petal Chan",
    description: "A plain explanation of Petal Chan's local-first privacy model.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Petal Chan", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "How Privacy Works", item: `${SITE_URL}/privacy/` },
  ],
};

const privacyDetails = [
  {
    number: "01",
    title: "Your cycle records",
    text: "I store health and cycle records locally as app data on your device. I do not upload or sync them to a Petal Chan health-data server. The records are not separately encrypted at rest by Petal Chan, so your device passcode and operating-system protections matter.",
  },
  {
    number: "02",
    title: "Exports",
    text: "Petal Chan exports an ordinary plaintext CSV file. On phones, the app creates it in the app cache and opens the system share sheet. I do not encrypt that exported file or explicitly delete the cached copy afterward. Once you send a copy elsewhere, its privacy depends on that destination.",
  },
  {
    number: "03",
    title: "Purchases",
    text: "Apple or Google handles the payment. I use RevenueCat for offerings, purchase handling, entitlement checks, validation, and restores. RevenueCat receives the purchase information needed for those jobs, not your menstrual-cycle history.",
  },
  {
    number: "04",
    title: "App lock",
    text: "PIN lock helps stop someone from casually opening the app. Chan+ can add biometric unlock and an app-switcher privacy screen. I use secure device storage for PIN verification and attempt state, not as the database for your health records.",
  },
  {
    number: "05",
    title: "Backups",
    text: "Android Auto Backup is disabled. On iOS, I do not currently add an explicit iCloud-backup exclusion for the health-data store, so backup behavior depends on your Apple device and account settings.",
  },
  {
    number: "06",
    title: "Analytics and ads",
    text: "Production builds do not send Petal Chan analytics events, and the app contains no advertising network. The formal Privacy Policy explains the development-tooling distinction.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">How privacy works</p>
          <h1 className="mt-5 max-w-5xl text-balance text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
            Privacy is the reason I built it this way.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
            I do not require an account, and I do not run a health-data server that receives your period or cycle records. Here is the complete explanation, without pretending local storage is magic.
          </p>

          <dl className="mt-16 grid border-y border-pink-200 sm:grid-cols-3">
            <div className="py-6 sm:border-r sm:border-pink-200 sm:pr-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Account</dt>
              <dd className="mt-2 text-2xl font-bold">Not required</dd>
            </div>
            <div className="border-t border-pink-200 py-6 sm:border-r sm:border-t-0 sm:px-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Cycle records</dt>
              <dd className="mt-2 text-2xl font-bold">Stored locally</dd>
            </div>
            <div className="border-t border-pink-200 py-6 sm:border-t-0 sm:pl-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Production analytics</dt>
              <dd className="mt-2 text-2xl font-bold">None</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="details-heading" className="border-t border-pink-200 bg-white/45">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">The details</p>
              <h2 id="details-heading" className="mt-4 text-4xl font-bold tracking-tight">What stays where.</h2>
            </div>
            <div className="border-t border-pink-200">
              {privacyDetails.map((detail) => (
                <article key={detail.number} className="grid gap-4 border-b border-pink-200 py-8 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-6">
                  <span className="text-xs font-semibold tabular-nums text-pink-400">{detail.number}</span>
                  <h3 className="text-lg font-bold">{detail.title}</h3>
                  <p className="leading-relaxed text-zinc-500">{detail.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="questions-heading" className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <h2 id="questions-heading" className="text-4xl font-bold tracking-tight">The short answers.</h2>
          <div className="mt-10 border-t border-pink-200">
            <details className="group border-b border-pink-200 py-6">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Does Petal Chan have a health-data cloud?</summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">No. I do not operate a health-data backend that receives your period or cycle records.</p>
            </details>
            <details className="group border-b border-pink-200 py-6">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Can I delete my records?</summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">Yes. You can reset app data from Petal Chan&apos;s settings. Copies you exported or saved elsewhere need to be deleted from those destinations separately.</p>
            </details>
            <details className="group border-b border-pink-200 py-6">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Does Petal Chan see my biometric data?</summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">No. Your operating system handles Face ID, Touch ID, fingerprint, or device face unlock. Petal Chan receives only the result needed to unlock the app.</p>
            </details>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            For the formal details, read the <Link href="/privacypolicy/" className="font-medium text-zinc-900 underline decoration-pink-300 underline-offset-4">Privacy Policy</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
