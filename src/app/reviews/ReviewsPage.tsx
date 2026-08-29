"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { STORE_LINKS } from "@/lib/site";

interface Review { text: string; name: string; role: string; image: string; bgColor?: string; stars: number | null; }

// ── Review Data ───────────────────────────────────────────────────────────────
const PLAY_STORE: Review[] = [
  { text: "The UI is absolutely beautiful, I loved the onboarding and the app's simplicity, and the way it just shows you your cycle day, the widget works great as well, the pro plan is very good prices, though I'd suggest having a cloud sync would be good to not lose data. Overall 5/5.", name: "Ajay Singh", role: "Google Play · April 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#E55B81", stars: 5 },
  { text: "It's a great app for those looking for saving your privacy, everything in the app is well made, and so far I've seen no bugs, would totally recommend it. (my father's id btw 😭)", name: "Dilip Sharma", role: "Google Play · April 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#8B7FC7", stars: 5 },
  { text: "Loved an app created for people to enjoy privacy, was straightforward to use just how I like it. I loved the simplicity and the countdown to next period. Great start.", name: "Mariam Mohammed", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#F5B8CB", stars: 5 },
  { text: "The title says it right, just a period tracker which is private and with good features tbh, love it! And the one time premium is also very affordable.", name: "Manju Mishra", role: "Google Play · March 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#F59E0B", stars: 5 },
  { text: "App is nice and the widget works great, if you could add Google Drive backup that would be awesome!", name: "Anjali", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#10B981", stars: 5 },
  { text: "So far so good. Easy to navigate and informative.", name: "Maria Alvarez", role: "Google Play · April 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#3B82F6", stars: 5 },
  { text: "Clean app overall, its predictions are about accurate but not 100% reliable, better than other apps I tried though.", name: "Arvi", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#6366F1", stars: 5 },
  { text: "Found this on Reddit when it was posted in a group! Absolutely loving it!", name: "Sienna Wilson", role: "Google Play · March 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#E55B81", stars: 5 },
  { text: "Love the concept of a privacy first app like this, all features work incredibly well, I love it so far, would totally recommend getting the Chan+/Pro, it has to support the indie dev 🙏", name: "Anshika Rai", role: "Google Play · April 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#8B7FC7", stars: 5 },
  { text: "Very clean UI.", name: "Akash Kumar", role: "Google Play · April 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#F5B8CB", stars: 5 },
  { text: "Clean and useful UI, would recommend.", name: "Aman Mishra", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#F59E0B", stars: 5 },
  { text: "Very clean UI, has all the info right there. Would love a widget added that counts down on your main screen.", name: "Ashley P", role: "Google Play · March 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#10B981", stars: 5 },
  { text: "Good experience overall, the predictions are almost on spot, and the UI is amazing. 10/10 would recommend! ;)", name: "Ravi Prakash Shukla", role: "Google Play · April 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#3B82F6", stars: 5 },
  { text: "Good period tracker 😀", name: "Devansh Verma", role: "Google Play · March 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#6366F1", stars: 5 },
  { text: "Just waoo.", name: "Alka", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#E55B81", stars: 5 },
  { text: "One of the best period tracking apps I've used, has all the necessary features while being extremely low priced for everything. No ads is the best part!! Been using it for soo long!! The widgets and everything works great.", name: "Notreallymebutmebutnotme", role: "Google Play · May 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#8B7FC7", stars: 5 },
  { text: "Best app.", name: "Shivam Kumar", role: "Google Play · March 2026", image: "/face-smile-svgrepo-com.svg", bgColor: "#F5B8CB", stars: 5 },
];

const APP_STORE: Review[] = [
  { text: "This is one of the best period tracker I've used so far and they have got the privacy perfect, And the UI is shockingly amazing, doesn't feel like an app made by an indie dev, 10/10 would recommend :)", name: "App Store User", role: "App Store · 2026", image: "/face-laugh-svgrepo-com.svg", bgColor: "#F59E0B", stars: 5 },
];

const REDDIT: Review[] = [
  { text: "You can use Petal Chan, it's relatively new but is packed with genuinely useful features, available on both Android and iOS, requires no login, and has no subscriptions. It has a one time unlock for some extra features, which is like the monthly price of Flo premium. I've been using it for more than a month now and it gets updated like every next few weeks or so, so the support is actually good as well.", name: "Possible-Ingenuity25", role: "r/womenintech", image: "/face-smile-svgrepo-com.svg", bgColor: "#10B981", stars: null },
  { text: "I have been using your app for around 2 months now, very excited to update!! I really like the UI it's very cutesey!! Also I got the pro plan!! It's nice that you made it just one time and not a subscription, I'm fed up with Flo!! Don't stop support for the app I really like it! Genuinely impressed by this app.", name: "Possible-Ingenuity25", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#3B82F6", stars: null },
  { text: "The UI is indeed really lovely, and the app is really simple and intuitive, making it really easy to use! Data privacy is a really important topic. You should be able to own your data. Thank you for your work, hope other people give it a try!!", name: "seni82", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#6366F1", stars: null },
  { text: "Love the privacy edge. Great and straightforward. I love things created with people in mind. £7.99 one time fee is modest and great for an app like this. Well done.", name: "emcemayo", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#E55B81", stars: null },
  { text: "I found out about your app through ChatGPT haha. It looks interesting so I downloaded it and wow its niceee. Absolutely love the no ads and one time pay. Price is also affordable 🫶🏻", name: "solarizzy_", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#8B7FC7", stars: null },
  { text: "Looks really good 💜 I love the app. It's easy to use, I love it.", name: "Working_Map4918", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#F5B8CB", stars: null },
  { text: "Downloaded!!! Can't wait to be able to buy the premium version!", name: "Juls_Rayne", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#F59E0B", stars: null },
  { text: "Just got it. So excited to get more in tune with my body!", name: "Numerous_Zebra_4740", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#10B981", stars: null },
  { text: "This is def a lot of work. I love an alternative to Flo and similar bc I know a lot of people who despise the apps. I'll have to look further into it. 👍🏻", name: "ItsThe_____ForMe", role: "r/teenagers", image: "/face-smile-svgrepo-com.svg", bgColor: "#3B82F6", stars: null },
  { text: "You did great on this and your efforts show! Also offline, good job on this! 👏🏻", name: "slyyuh", role: "r/teenagers", image: "/face-laugh-svgrepo-com.svg", bgColor: "#6366F1", stars: null },
  { text: "This sounds really interesting! I'd be interested to know how other people feel about it.", name: "Ribonichigo", role: "r/degoogle", image: "/face-smile-svgrepo-com.svg", bgColor: "#E55B81", stars: null },
];

// ── Review card ───────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
      {review.stars !== null && (
        <div className="flex gap-0.5 mb-2" aria-label={`${review.stars} out of 5 stars`}>
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      )}
      <blockquote className="text-zinc-600 text-sm leading-relaxed m-0 mb-4">
        &quot;{review.text}&quot;
      </blockquote>
      <footer className="flex items-center gap-3">
        <Image src={review.image} alt="" width={36} height={36}
          className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-100 flex-shrink-0" style={{ backgroundColor: review.bgColor, padding: "4px" }} />
        <div>
          <cite className="not-italic font-semibold text-zinc-900 text-sm block">{review.name}</cite>
          <span className="text-xs text-zinc-400">{review.role}</span>
        </div>
      </footer>
    </article>
  );
}

// ── Scrolling column ──────────────────────────────────────────────────────────
function ScrollColumn({ reviews, duration = 20, className }: { reviews: Review[]; duration?: number; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden w-full max-w-xs ${className ?? ""}`} aria-hidden="true" data-nosnippet>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={shouldReduceMotion ? undefined : { duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-4 pb-4"
      >
        {(shouldReduceMotion ? [0] : [0, 1]).map((idx) => (
          <React.Fragment key={idx}>
            {reviews.map((r, i) => <ReviewCard key={`${idx}-${i}`} review={r} />)}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

// ── Platform section ──────────────────────────────────────────────────────────
function PlatformSection({
  id, heading, source, reviews, singleCard = false,
}: { id: string; heading: string; source: string; reviews: Review[]; singleCard?: boolean }) {
  const col1 = reviews.slice(0, Math.ceil(reviews.length / 3));
  const col2 = reviews.slice(Math.ceil(reviews.length / 3), Math.ceil((reviews.length * 2) / 3));
  const col3 = reviews.slice(Math.ceil((reviews.length * 2) / 3));

  return (
    <section
      id={id}
      aria-label={`${heading} reviews`}
      className="scroll-mt-8 mb-24"
    >
      <div className="mb-10 border-t border-pink-200 pt-7 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink-400">{source}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{heading}</h2>
      </div>

      {singleCard ? (
        <div className="max-w-md mx-auto" aria-hidden="true" data-nosnippet>
          <ReviewCard review={reviews[0]} />
        </div>
      ) : (
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[640px] overflow-hidden flex gap-4 justify-center px-4">
          <ScrollColumn reviews={col1} duration={18} />
          {col2.length > 0 && <ScrollColumn reviews={col2} duration={23} className="hidden md:flex" />}
          {col3.length > 0 && <ScrollColumn reviews={col3} duration={21} className="hidden lg:flex" />}
        </div>
      )}

      {/* One static, accessible copy; animated marquee clones are decorative. */}
      <div className="sr-only">
        {reviews.map((r, i) => (
          <div key={i}>
            <span>{r.text}</span>
            <span>{r.name}</span>
            <span>{r.role}</span>
            {r.stars && <span>{r.stars} out of 5 stars</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ReviewsPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg,#FFF5F8 0%,#FFFFFF 50%)" }}>
      <SiteHeader />
      <main>
        {/* Header */}
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center md:pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
            What people are saying
          </h1>
          <p className="text-zinc-500 text-lg">
            Selected public reviews and posts from Google Play, the App Store, and Reddit, in the words people shared. See why people choose{" "}
            <Link href="/" className="text-pink-500 hover:text-pink-600 underline underline-offset-2 transition-colors">Petal Chan</Link>{" "}
            for private cycle tracking.
          </p>
        </header>

        {/* All platform sections */}
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <PlatformSection id="playstore" heading="Google Play Reviews" source="Google Play" reviews={PLAY_STORE} />
          <PlatformSection id="appstore" heading="App Store Review" source="App Store" reviews={APP_STORE} singleCard />
          <PlatformSection id="reddit" heading="Reddit Posts" source="Reddit" reviews={REDDIT} />
        </div>

        {/* CTA */}
        <section aria-label="Download Petal Chan" className="text-center py-16 px-4">
          <p className="text-zinc-500 text-sm mb-5">Ready to try it? Learn <Link href="/privacy/" className="text-pink-500 hover:text-pink-600 underline underline-offset-2 transition-colors">how privacy works</Link> first, if you like.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-pink-600">
              <Image src="/play_icon.png" alt="" width={137} height={150} className="h-[18px] w-auto" /> Google Play
            </a>
            <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800">
              <Image src="/apple.png" alt="" width={842} height={1000} className="h-4 w-auto" /> App Store
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-6">Have questions? Check out our <Link href="/#faq" className="text-pink-500 hover:text-pink-600 underline underline-offset-2 transition-colors">FAQ</Link>.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
