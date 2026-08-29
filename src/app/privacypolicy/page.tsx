import type { Metadata } from "next";
import Link from "next/link";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Petal Chan",
  description:
    "Petal Chan’s Privacy Policy explains local health-data storage, accounts, backups, exports, app lock, RevenueCat purchase handling, and production analytics.",
  alternates: { canonical: `${SITE_URL}/privacypolicy/` },
  openGraph: {
    title: "Privacy Policy | Petal Chan",
    description: "The formal privacy details for the Petal Chan app.",
    url: `${SITE_URL}/privacypolicy/`,
    type: "article",
    images: [`${SITE_URL}/preview.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Petal Chan",
    description: "The formal privacy details for the Petal Chan app.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const policySections = [
  {
    title: "1. Information processed by the app",
    paragraphs: [
      "Petal Chan can process information you choose to record, including period dates and flow, cycle settings, symptoms and severity, moods, energy, notes, period-product timers, basal body temperature (BBT), LH test results, cervical-fluid observations, optional profile details, and app preferences.",
      "This health and cycle information is used inside the app to show your calendar and history, calculate estimates, create visualizations, and provide features you select.",
    ],
  },
  {
    title: "2. Local health-data storage",
    paragraphs: [
      "The current Petal Chan app stores health and cycle records locally as JSON using AsyncStorage. Petal Chan does not operate a health-data cloud backend that receives those records, and core tracking does not require an account, online sync, or a Petal Chan health-data server.",
      "Health records are not separately encrypted at rest by Petal Chan. Your device passcode, operating-system security, physical access controls, and backup settings therefore remain important. SQLite or SQLCipher code may exist in development materials, but it is not the current live health-data store.",
    ],
  },
  {
    title: "3. Accounts and health-data transfers",
    paragraphs: [
      "Petal Chan does not require a Petal Chan account, email address, or login for core tracking. The app does not upload or sync your health and cycle records to a Petal Chan health-data server.",
      "Data can leave the app when you choose to import, export, share, back up, or otherwise move it using your device or another service. Those actions are described below.",
    ],
  },
  {
    title: "4. Cycle and fertility estimates",
    paragraphs: [
      "Petal Chan calculates estimates locally using the cycle history and optional signals you record. Added information can update an estimate, but BBT, LH test results, cervical-fluid observations, and other logs do not make ovulation or fertility predictions certain.",
      "Petal Chan is not a medical device, does not provide medical advice, and is not intended to diagnose a condition. It must not be relied on as contraception, to determine safe days, or as guaranteed conception guidance.",
    ],
  },
  {
    title: "5. PIN and biometric app lock",
    paragraphs: [
      "PIN lock helps control access through the Petal Chan interface. PIN verification and related attempt state use the device’s secure storage. If you enable biometric unlock, Face ID, Touch ID, fingerprint, or device face authentication is performed by the operating system; Petal Chan does not receive or store your biometric template.",
      "Chan+ can also obscure the app preview in the app switcher. These controls protect access through the app, but they do not separately encrypt the health-record storage and do not change the privacy of exported files or device backups.",
    ],
  },
  {
    title: "6. Device backups",
    paragraphs: [
      "Android Auto Backup is disabled for Petal Chan. Petal Chan does not currently implement an explicit iOS iCloud-backup exclusion for the health-data storage, so iOS backup behavior depends on your Apple device, operating system, and account settings.",
      "A device or cloud backup is controlled by the relevant operating-system or backup provider. Review those settings if you do not want app data included in a backup.",
    ],
  },
  {
    title: "7. Imports and CSV exports",
    paragraphs: [
      "Imports are processed so the selected information can be added to Petal Chan’s local records. Full CSV export is available so you can take your data with you.",
      "CSV exports are plaintext, ordinary files. On native apps, Petal Chan creates the CSV in app cache and opens the system share sheet. The file is not encrypted by Petal Chan, and the app does not explicitly delete that cached file after the share flow. On the web, the CSV downloads as a normal browser file.",
      "Once you save or share an exported copy outside Petal Chan, that copy is outside the app’s sandbox and its privacy depends on the destination you choose.",
    ],
  },
  {
    title: "8. Chan+ purchases and RevenueCat",
    paragraphs: [
      "Chan+ is a one-time in-app purchase. Apple or Google processes the storefront payment under its own terms and privacy practices. Petal Chan also uses RevenueCat to retrieve offerings, coordinate purchase handling and validation, check Chan+ entitlements, and restore purchases.",
      "RevenueCat may process purchase, storefront, device, and entitlement information needed for those functions. Petal Chan does not send your menstrual-cycle history, BBT logs, symptoms, moods, notes, or other health and cycle records to RevenueCat for purchase handling. Petal Chan’s developer does not receive your full payment-card details.",
    ],
    highlight: true,
  },
  {
    title: "9. Analytics and advertising",
    paragraphs: [
      "Production Petal Chan builds do not use PostHog analytics and do not send Petal Chan production analytics events to PostHog. Code associated with development or tooling is not active in final App Store or Google Play builds.",
      "Petal Chan does not include an advertising network. Purchase and storefront systems may still process the non-health information required to provide purchases and restores, as described above.",
    ],
  },
  {
    title: "10. Deleting data",
    paragraphs: [
      "You can delete health and cycle records by using Reset all data in Petal Chan’s settings. Uninstalling the app removes its local app data subject to your operating system and any backups it maintains.",
      "Resetting or uninstalling Petal Chan does not delete copies you previously exported, shared, downloaded, or stored elsewhere. Those copies must be deleted from their destinations separately.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      `Questions about this policy or Petal Chan’s privacy practices can be sent to ${CONTACT.supportEmail}.`,
    ],
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Petal Chan", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacypolicy/` },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <DottedSurface className="opacity-35" />
      <SiteHeader />

      <main className="relative z-10">
        <header className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Formal privacy details</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Here is exactly what Petal Chan handles.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-600">
            I wrote this policy to explain how the app handles health records, purchases, exports, backups, and access controls.
          </p>
          <p className="mt-4 text-sm text-zinc-400">Last updated: August 29, 2026</p>
          <p className="mt-5 text-sm text-zinc-500">
            Prefer the plain-language version? <Link href="/privacy/" className="font-medium text-pink-500 underline decoration-pink-200 underline-offset-4">Read How Privacy Works</Link>.
          </p>
        </header>

        <div className="mx-auto max-w-6xl border-t border-pink-200 px-6 pb-24 md:px-12">
          {policySections.map((section) => (
            <section
              key={section.title}
              aria-labelledby={`policy-${section.title.split(".")[0]}`}
              className="grid gap-5 border-b border-pink-200 py-10 md:grid-cols-[0.75fr_1.25fr] md:gap-12"
            >
              <h2 id={`policy-${section.title.split(".")[0]}`} className="text-xl font-bold tracking-tight md:text-2xl">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-zinc-600">{paragraph}</p>
                ))}
                {section.title.startsWith("11.") && (
                  <a href={`mailto:${CONTACT.supportEmail}`} className="inline-flex min-h-11 items-center border-b border-pink-300 font-semibold text-zinc-900 transition-colors hover:text-pink-400">
                    {CONTACT.supportEmail}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <div className="relative z-10"><SiteFooter /></div>
    </div>
  );
}
