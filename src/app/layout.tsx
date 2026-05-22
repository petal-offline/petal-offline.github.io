import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// ── All FAQs (shared between JSON-LD and the UI) ────────────────────────────
const allFaqs = [
  {
    q: "What is the offline period tracker?",
    a: "Petal Chan is designed to be the fully offline period tracker. It requires no internet connection, meaning your personal health data is never synced to a cloud or vulnerable to breaches.",
  },
  {
    q: "Are there period trackers that do not steal my data?",
    a: "Yes. Petal Chan is a privacy-first period tracker that stores 100% of your data locally on your device. We have no servers, no logins, and no way to access or sell your data.",
  },
  {
    q: "Is there a period tracker without a subscription?",
    a: "Petal Chan operates on a simple, one-time payment model. There are no recurring monthly subscriptions or hidden paywalls.",
  },
  {
    q: "Can the government or third parties access my tracking data?",
    a: "Because Petal Chan is a fully offline, local-storage app, your data remains exclusively on your phone. Unlike cloud-based apps that can be forced to hand over user records, Petal Chan does not have a database of your information. Your privacy is protected by your device's own security.",
  },
  {
    q: "Do I need an account or email to use Petal Chan?",
    a: "No login, no email, and no account is required. You can open Petal Chan and start tracking your cycle instantly. Remaining completely anonymous is the best way to protect your health data.",
  },
  {
    q: "Is Petal Chan available on Android and iOS?",
    a: "Petal Chan is built for modern smartphones, supporting both Android and iOS devices, ensuring everyone has access to private, secure, and offline cycle tracking.",
  },
];

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Petal Chan",
  url: "https://petalchan.com/",
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Petal Chan - The Offline Period Tracker App",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  installUrl: [
    "https://play.google.com/store/apps/details?id=com.slyayush.petal",
    "https://apps.apple.com/us/app/petal-offline-period-tracker/id6761746225",
  ],
  description:
    "Petal Chan is the offline period tracker app. It is a premium period tracker app available as a one time purchase period tracker app. Designed specially for GenZ with a beautiful, great, modern UI. Petal Chan is a period tracker app with absolutely no data collection. It is fully offline and gives the user the option to delete their data completely in the app. No subscriptions, just the privacy-first period tracker app.",
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    description:
      "Core period tracking is completely free. Premium features available as a one time purchase period tracker app. No subscriptions.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "847",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: "Petal Chan | Private, Offline Period Tracker — No Account, No Cloud",
  description:
    "Petal Chan is a 100% offline period and cycle tracker with BBT tracker, ovulation tracker, and fertility window tracking. No cloud, no accounts, no ads. Secure your data with Face ID. Free with one-time Chan+ upgrade.",
  keywords: [
    "period tracker",
    "offline period tracker",
    "private period tracker",
    "cycle tracker",
    "no cloud period app",
    "period tracking app",
    "menstrual cycle tracker",
    "ovulation tracker",
    "ovulation tracker offline",
    "period app no subscription",
    "Petal Chan",
    "offline period tracker app",
    "premium period tracker app",
    "one time purchase period tracker app",
    "privacy first period tracker",
    "free period tracker no subscription",
    "BBT tracker",
    "basal body temperature tracker",
    "cervical fluid tracker",
    "LH test tracker",
    "fertility window",
    "fertility window app",
    "PMS mood tracker",
    "import from Clue",
    "period tracker no data sharing",
  ],
  icons: {
    icon: [
      { url: "/petallogo.png", type: "image/png" },
      { url: "/petallogo.ico" },
    ],
    apple: [
      { url: "/petallogo.png", type: "image/png" },
    ],
    shortcut: "/petallogo.png",
  },
  openGraph: {
    title: "Petal Chan — Offline Period Tracker",
    description:
      "100% offline period tracker. Your data never leaves your phone. Available on iOS and Android.",
    type: "website",
    siteName: "Petal Chan",
    locale: "en_US",
    url: "https://petalchan.com",
    images: [
      {
        url: "https://petalchan.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Petal Chan – The 100% Offline Period Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petal Chan | The Free, 100% Offline & Privacy-First Period Tracker",
    description:
      "Your body, your data. A secure, fully offline period tracker. No subscriptions, no cloud servers, no data sold.",
    images: ["https://petalchan.com/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://petalchan.com",
  },
};

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(gabarito.variable)}>
      <head>
        <meta
          name="google-site-verification"
          content="GCTt6tqnnId_1ucNH29R6p2IjAJLgZ0Jy2MftYF6c0Y"
        />
        <link rel="icon" href="/petallogo.ico" sizes="any" />
        <link rel="alternate" href="android-app://com.slyayush.petal/https/petalchan.com" />
        {/* JSON-LD Structured Data for Search Engine scraping */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema),
          }}
        />
      </head>
      <body className="antialiased bg-zinc-50 text-zinc-900 min-h-screen overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>

    </html>
  );
}
