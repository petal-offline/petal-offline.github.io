import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Instagram, Mail, Sprout } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Petal Chan | Creator & Story",
  description:
    "Meet Ayush Mishra, creator and developer of Petal Chan, learn how Sly’s original idea began the app, and find official support and social links.",
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
  url: `${SITE_URL}/about/`,
  sameAs: [CONTACT.creatorInstagram],
  jobTitle: "Creator and developer of Petal Chan",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 text-center md:px-12 md:pb-28 md:pt-24">
          <span className="inline-flex rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold text-pink-500 shadow-sm">A small app with a human story</span>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Petal Chan began with <span className="text-pink-500">one thoughtful question.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            What if a cycle tracker treated sensitive information like it truly belonged to the person using it?
          </p>
        </section>

        <section aria-labelledby="origin-heading" className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
          <article className="rounded-[2rem] border border-pink-200 bg-gradient-to-br from-white to-pink-50 p-8 shadow-sm md:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-pink-sm">
              <Heart aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">Where it started</p>
            <h2 id="origin-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">An idea from Sly. Built by Ayush.</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Petal Chan began with a simple idea from Sly. She wanted a cycle tracker that felt genuinely private—one where the person using it stayed in control of their information. She brought the idea to Ayush, who built Petal Chan and has continued shaping, designing, developing, and improving it ever since.
            </p>
          </article>
        </section>

        <section className="border-y border-pink-200/60 bg-white/55 py-24">
          <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2 md:px-12">
            <article className="rounded-2xl border border-pink-200 bg-white p-7 shadow-sm md:p-9">
              <Sprout aria-hidden="true" className="h-6 w-6 text-pink-500" />
              <h2 className="mt-5 text-2xl font-bold">Why “Chan”?</h2>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Chan reflects how we want Petal to feel: like a trusted friend helping you understand and care for your body, while your personal information stays under your control.
              </p>
            </article>

            <article id="creator" className="scroll-mt-8 rounded-2xl border border-pink-200 bg-white p-7 shadow-sm md:p-9">
              <Heart aria-hidden="true" className="h-6 w-6 text-pink-500" />
              <h2 className="mt-5 text-2xl font-bold">Created and developed by Ayush Mishra</h2>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Ayush handles Petal Chan’s product direction, design, development, features, updates, maintenance, and continued evolution. Sly originated the first idea; Ayush has led the product work from there.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="storefront-heading" className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <h2 id="storefront-heading" className="text-3xl font-bold tracking-tight">A small storefront note.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Some App Store or Google Play information may show Aman Mishra because the developer account is held under his name for administrative reasons. Ayush Mishra is the creator and developer of Petal Chan. Aman does not design or develop the app, make product decisions, operate it, or control its roadmap.
          </p>
        </section>

        <section aria-labelledby="long-term-heading" className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
          <div className="rounded-[2rem] bg-zinc-900 p-8 text-white shadow-sm md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-300">Built for the long term</p>
            <h2 id="long-term-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Your tracking should not depend on our server staying awake.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              Petal Chan’s core tracking does not depend on a Petal health-data server. Ayush intends to keep developing and updating it for the long term, with no plans to sell Petal Chan. Your data stays exportable, and Chan+ purchases can be restored through supported storefronts.
            </p>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
          <div className="text-center">
            <h2 id="contact-heading" className="text-3xl font-bold tracking-tight">Talk to a real person.</h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-500">Questions, feedback, or something not working? Reach out.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a href={`mailto:${CONTACT.supportEmail}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
              <Mail aria-hidden="true" className="h-6 w-6 text-pink-500" />
              <span><strong className="block text-zinc-900">Support</strong><span className="text-sm text-zinc-500">{CONTACT.supportEmail}</span></span>
            </a>
            <a href={CONTACT.productInstagram} target="_blank" rel="noopener noreferrer" className="flex min-h-24 items-center gap-4 rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
              <Instagram aria-hidden="true" className="h-6 w-6 text-pink-500" />
              <span><strong className="block text-zinc-900">Official Petal Chan Instagram</strong><span className="text-sm text-zinc-500">{CONTACT.productInstagramLabel}</span></span>
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            Ayush is also on Instagram at <a href={CONTACT.creatorInstagram} target="_blank" rel="noopener noreferrer" className="font-medium text-pink-500 underline decoration-pink-200 underline-offset-4">{CONTACT.creatorInstagramLabel}</a>.
          </p>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Curious about the app itself? <Link href="/features/" className="font-medium text-pink-500 underline decoration-pink-200 underline-offset-4">Explore the features</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
