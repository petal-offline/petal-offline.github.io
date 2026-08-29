import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { CONTACT, SITE_URL, STORE_LINKS } from "@/lib/site";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Petal Chan",
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ClearlySimple",
  url: "https://clearlysimple.app",
  email: CONTACT.supportEmail,
  sameAs: [CONTACT.productInstagram],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Petal Chan",
  url: `${SITE_URL}/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  installUrl: [STORE_LINKS.googlePlay, STORE_LINKS.appStore],
  description:
    "Petal Chan is a privacy-first period and cycle tracker for iPhone and Android. It requires no account and does not upload or sync health and cycle records to a Petal Chan health-data server.",
  creator: {
    "@type": "Person",
    "@id": `${SITE_URL}/about/#ayush-mishra`,
    name: "Ayush Mishra",
    url: `${SITE_URL}/about/`,
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Petal Chan | Private Period & Cycle Tracker",
  description:
    "Petal Chan is a privacy-first period and cycle tracker for iPhone and Android. No account or health-data cloud, with a generous free app and one-time Chan+ upgrade.",
  applicationName: "Petal Chan",
  creator: "Ayush Mishra",
  publisher: "ClearlySimple",
  keywords: [
    "Petal Chan",
    "private period tracker",
    "local-first cycle tracker",
    "BBT tracker",
    "LH test logging",
    "cervical fluid tracking",
    "period tracker without subscription",
  ],
  icons: {
    icon: [
      { url: "/petallogo.png", type: "image/png" },
      { url: "/petallogo.ico" },
    ],
    apple: [{ url: "/petallogo.png", type: "image/png" }],
    shortcut: "/petallogo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(gabarito.variable)}>
      <head>
        <meta name="google-site-verification" content="GCTt6tqnnId_1ucNH29R6p2IjAJLgZ0Jy2MftYF6c0Y" />
        <link rel="icon" href="/petallogo.ico" sizes="any" />
        <link rel="alternate" href="android-app://com.slyayush.petal/https/petalchan.com" />
        {[websiteSchema, organizationSchema, softwareAppSchema].map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          />
        ))}
      </head>
      <body className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
