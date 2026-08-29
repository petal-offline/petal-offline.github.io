import type { Metadata } from "next";
import Link from "next/link";
import { Database, Download, LockKeyhole, Receipt, ShieldCheck, Smartphone } from "lucide-react";
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
    description: "A human explanation of Petal Chan’s local-first privacy model.",
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

const essentials = [
  {
    icon: Smartphone,
    title: "No account",
    text: "Core tracking does not need a login, email address, online sync, or a Petal Chan health-data server.",
  },
  {
    icon: Database,
    title: "Records stay local",
    text: "Health and cycle records are stored inside the app on your device. Petal Chan does not upload or sync them to a Petal Chan health-data backend.",
  },
  {
    icon: ShieldCheck,
    title: "No production analytics",
    text: "Production Petal Chan builds do not send analytics events. The app also contains no advertising network.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 text-center md:px-12 md:pb-28 md:pt-24">
          <span className="inline-flex rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold text-pink-500 shadow-sm">
            How privacy works
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Your cycle records are <span className="text-pink-500">not our business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Petal Chan is local-first: no account is required, and your health and cycle records are not uploaded or synced to a Petal Chan health-data server.
          </p>
        </section>

        <section aria-label="Privacy essentials" className="mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-3 md:px-12">
          {essentials.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-pink-200 bg-white/80 p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.text}</p>
              </article>
            );
          })}
        </section>

        <section aria-labelledby="boundaries-heading" className="border-y border-pink-200/60 bg-white/55 py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">Clear boundaries</p>
              <h2 id="boundaries-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What stays private—and what happens when you choose to share.</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-pink-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <Download aria-hidden="true" className="h-5 w-5 text-pink-500" />
                  <h3 className="text-xl font-bold">CSV exports are ordinary files</h3>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600">
                  Petal Chan exports plaintext CSV so you can save or share your history wherever you choose. On phones, the app creates the file in its cache and opens the system share sheet; Petal does not encrypt that file or explicitly delete the cached copy afterward. On the web, it downloads like a normal browser file.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Once a copy leaves Petal Chan, its privacy depends on the destination you select.
                </p>
              </article>

              <article className="rounded-2xl border border-pink-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <Receipt aria-hidden="true" className="h-5 w-5 text-pink-500" />
                  <h3 className="text-xl font-bold">Purchases are separate from health data</h3>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600">
                  Apple or Google handles payment through its storefront. Petal Chan also uses RevenueCat for offerings, purchase handling, entitlement checks, and restores.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  RevenueCat receives purchase and entitlement information needed for those functions—not your menstrual-cycle history.
                </p>
              </article>

              <article className="rounded-2xl border border-pink-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <LockKeyhole aria-hidden="true" className="h-5 w-5 text-pink-500" />
                  <h3 className="text-xl font-bold">What app lock protects</h3>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600">
                  PIN lock helps stop someone from casually opening Petal Chan. Chan+ can add biometric unlock and a privacy screen in the app switcher. PIN verification and related attempt state use your device’s secure storage.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  The lock controls access through the app. It does not separately encrypt the health-record storage or change the privacy of backups and exported files.
                </p>
              </article>

              <article className="rounded-2xl border border-pink-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <Smartphone aria-hidden="true" className="h-5 w-5 text-pink-500" />
                  <h3 className="text-xl font-bold">Device storage and backups</h3>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600">
                  Petal Chan stores health records locally as app data. Those records are not separately encrypted at rest by Petal Chan, so your device passcode and operating-system protections matter.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Android Auto Backup is disabled. Petal Chan does not currently add an explicit exclusion for the health-data store from iOS iCloud backups, so iOS backup behavior depends on your Apple device and account settings.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="questions-heading" className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <div className="text-center">
            <h2 id="questions-heading" className="text-3xl font-bold tracking-tight md:text-4xl">The short answers.</h2>
            <p className="mt-3 text-zinc-500">Because privacy should not need a decoder ring.</p>
          </div>
          <div className="mt-10 divide-y divide-pink-200 overflow-hidden rounded-2xl border border-pink-200 bg-white/80 px-6 shadow-sm md:px-8">
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Does Petal Chan have a health-data cloud?</summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">No. Petal Chan does not operate a health-data backend that receives your period or cycle records.</p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Does Petal Chan use analytics?</summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">No. Production builds do not include analytics or send Petal Chan production analytics events. The formal Privacy Policy explains the development-tooling distinction.</p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Can I delete my records?</summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">Yes. You can reset app data from Petal Chan’s settings. Copies you previously exported or saved elsewhere need to be deleted from those destinations separately.</p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">Does Petal Chan see my biometric data?</summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">No. Face ID, Touch ID, fingerprint, or device face unlock is handled by your operating system. Petal Chan receives only the result needed to unlock the app.</p>
            </details>
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            For the formal details, read the <Link href="/privacypolicy/" className="font-medium text-pink-500 underline decoration-pink-200 underline-offset-4">Privacy Policy</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
