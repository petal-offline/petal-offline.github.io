import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Petal Chan | Creator & Story",
  description:
    "Meet Ayush Mishra, creator and developer of Petal Chan, learn how Sly's original idea began the app, and find official support and social links.",
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: "About Petal Chan | Creator & Story",
    description: "The small, human story behind Petal Chan and the people who shaped it.",
    url: `${SITE_URL}/about/`,
    type: "website",
    images: [`${SITE_URL}/preview.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Petal Chan | Creator & Story",
    description: "The small, human story behind Petal Chan.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Petal Chan", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about/` },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about/#ayush-mishra`,
  name: "Ayush Mishra",
  url: CONTACT.portfolio,
  sameAs: [CONTACT.portfolio, CONTACT.creatorInstagram],
  jobTitle: "Creator and developer of Petal Chan",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      <SiteHeader />

      <main>
        <section id="creator" className="scroll-mt-8 mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">About Petal Chan</p>
          <div>
            <h1 className="text-balance text-6xl font-bold leading-[0.98] tracking-tight md:text-8xl">Hi, I&apos;m Ayush.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              I created Petal Chan and I handle its product direction, design, development, features, updates, and maintenance.
            </p>
          </div>
        </section>

        <section aria-labelledby="origin-heading" className="border-y border-pink-200 bg-white/45">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Where it started</p>
              <h2 id="origin-heading" className="mt-4 text-4xl font-bold tracking-tight">An idea from Sly. Built by me.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
              <p>
                Sly wanted a cycle tracker where the person using it stayed in control of sensitive information. She brought that idea to me, and I turned it into Petal Chan.
              </p>
              <p>
                I have shaped, designed, developed, and maintained the app since then. Sly deserves credit for the original idea. I am responsible for the product itself and where it goes next.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <div className="grid border-y border-pink-200 md:grid-cols-2">
            <article className="py-10 md:border-r md:border-pink-200 md:pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-400">Why “Chan”?</p>
              <h2 className="mt-4 text-3xl font-bold">A name that feels like a friend.</h2>
              <p className="mt-5 leading-relaxed text-zinc-500">
                I chose Chan because I wanted Petal to feel like a trusted friend helping you understand and care for your body, while your personal information stays under your control.
              </p>
            </article>
            <article className="border-t border-pink-200 py-10 md:border-t-0 md:pl-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-400">A storefront note</p>
              <h2 className="mt-4 text-3xl font-bold">Why another name may appear.</h2>
              <p className="mt-5 leading-relaxed text-zinc-500">
                Some App Store or Google Play information may show Aman Mishra because the developer account is held under his name for administrative reasons. I am the creator and developer. Aman does not design, develop, operate, or direct Petal Chan.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="long-term-heading" className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Built for the long term</p>
            <h2 id="long-term-heading" className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your tracking should not depend on my server staying awake.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70">
              Core tracking does not depend on a Petal health-data server. I plan to keep developing and updating the app, and I have no plans to sell it. Your data stays exportable, and Chan+ purchases can be restored through supported storefronts.
            </p>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">Contact</p>
              <h2 id="contact-heading" className="mt-4 text-4xl font-bold tracking-tight">Talk to me.</h2>
            </div>
            <div className="border-t border-pink-200 text-lg font-semibold">
              <a href={`mailto:${CONTACT.supportEmail}`} className="flex min-h-16 items-center justify-between border-b border-pink-200 py-4 transition-colors hover:text-pink-400">
                <span>Support</span><span className="text-sm font-normal text-zinc-500">{CONTACT.supportEmail}</span>
              </a>
              <a href={CONTACT.productInstagram} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between border-b border-pink-200 py-4 transition-colors hover:text-pink-400">
                <span>Petal Chan on Instagram</span><span className="text-sm font-normal text-zinc-500">{CONTACT.productInstagramLabel}</span>
              </a>
              <a href={CONTACT.creatorInstagram} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between border-b border-pink-200 py-4 transition-colors hover:text-pink-400">
                <span>My Instagram</span><span className="text-sm font-normal text-zinc-500">{CONTACT.creatorInstagramLabel}</span>
              </a>
              <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between border-b border-pink-200 py-4 transition-colors hover:text-pink-400">
                <span>My portfolio</span><span className="text-sm font-normal text-zinc-500">{CONTACT.portfolioLabel}</span>
              </a>
            </div>
          </div>
          <p className="mt-10 text-sm text-zinc-500">
            Curious about the app itself? <Link href="/features/" className="font-medium text-zinc-900 underline decoration-pink-300 underline-offset-4">See what I built into it</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
