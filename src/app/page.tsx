import type { Metadata } from "next";
import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { FeaturesSection } from "@/components/ui/features-section";
import { PlatformReviewCards } from "@/components/ui/platform-review-cards";
import { HomeFaqItem } from "@/components/home-faq-item";
import { HomeFooter } from "@/components/home-footer";
import { JsonLd } from "@/components/json-ld";
import { HOME_FAQS, SITE_URL, STORE_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Petal Chan | Private Period & Cycle Tracker",
  description:
    "Petal Chan is a privacy-first period and cycle tracker for iPhone and Android. No account or health-data cloud, with a generous free app and one-time Chan+ upgrade.",
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Petal Chan | Private Period & Cycle Tracker",
    description: "Private by design, offline by default. Track your cycle without an account or a Petal Chan health-data server.",
    type: "website",
    siteName: "Petal Chan",
    locale: "en_US",
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/preview.png`, width: 1200, height: 630, alt: "Petal Chan period and cycle tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petal Chan | Private Period & Cycle Tracker",
    description: "A local-first cycle tracker with no account, a generous free app, and a one-time Chan+ upgrade.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div className="flex flex-col items-start gap-7">
              <div className="mb-2 flex items-center gap-3">
                <Image
                  src="/petallogo.png"
                  alt="Petal Chan logo"
                  width={44}
                  height={44}
                  className="rounded-xl object-contain drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]"
                  priority
                />
                <span className="text-2xl font-bold tracking-tight text-zinc-900">Petal Chan</span>
              </div>

              <TypingAnimation
                text="Your cycle, finally understood. Private by design, offline by default."
                duration={65}
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zinc-900 text-left leading-tight"
              />

              <p className="-mt-2 max-w-lg text-lg leading-relaxed text-zinc-600 md:text-xl">
                This stays between you and Petal Chan.
              </p>

              <div className="flex flex-wrap gap-2">
                {["No internet required", "No account needed"].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-200/80 border border-zinc-300/50 text-zinc-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <CartoonButton
                  href={STORE_LINKS.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Get it on Google Play"
                  color="bg-pink-400"
                  hasHighlight
                >
                  <Image src="/play_icon.png" alt="" width={137} height={150} className="h-6 w-auto object-contain drop-shadow-sm" />
                </CartoonButton>

                <CartoonButton
                  href={STORE_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Get it on iOS"
                  color="bg-black"
                >
                  <Image src="/apple.png" alt="" width={842} height={1000} className="h-5 w-auto object-contain" />
                </CartoonButton>
              </div>

              <p className="text-zinc-400 text-sm -mt-3">
                Free to use · Works offline · No account required
              </p>
            </div>

            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative" style={{ perspective: "1200px" }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full blur-3xl bg-pink-500/15 scale-[1.3]"
                />
                <Image
                  src="/mockup.png"
                  alt="Petal app on Android"
                  width={1866}
                  height={4039}
                  priority
                  className="h-auto w-[340px] max-w-full object-contain drop-shadow-2xl"
                  style={{
                    transform: "rotateY(-14deg) rotateX(5deg) scale(1.02)",
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* Features */}
      <FeaturesSection />

      {/* Reviews */}
      <PlatformReviewCards />

      {/* FAQ */}
      <section id="faq" aria-label="Frequently asked questions" className="relative w-full max-w-3xl mx-auto px-6 md:px-12 pb-28">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Good questions.
          </h2>
          <p className="text-zinc-500 text-base">I answer these as plainly as I can.</p>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 bg-zinc-100/40 backdrop-blur-sm px-6 md:px-8">
          {HOME_FAQS.map((item) => (
            <HomeFaqItem key={item.q} q={item.q} a={item.a} link={item.link} />
          ))}
        </div>
      </section>
      </main>

      {/* Footer */}
      <HomeFooter />
    </>
  );
}
