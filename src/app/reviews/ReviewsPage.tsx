"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

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
  { text: "The UI is indeed really lovely, and the app is really simple and intuitive, making it really easy to use! Data privacy is a really important topic — you should be able to own your data. Thank you for your work, hope other people give it a try!!", name: "seni82", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#6366F1", stars: null },
  { text: "Love the privacy edge. Great and straightforward. I love things created with people in mind. £7.99 one time fee is modest and great for an app like this — well done.", name: "emcemayo", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#E55B81", stars: null },
  { text: "I found out about your app through ChatGPT haha. It looks interesting so I downloaded it and wow its niceee. Absolutely love the no ads and one time pay. Price is also affordable 🫶🏻", name: "solarizzy_", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#8B7FC7", stars: null },
  { text: "Looks really good 💜 I love the app. It's easy to use, I love it.", name: "Working_Map4918", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#F5B8CB", stars: null },
  { text: "Downloaded!!! Can't wait to be able to buy the premium version!", name: "Juls_Rayne", role: "r/Periods", image: "/face-smile-svgrepo-com.svg", bgColor: "#F59E0B", stars: null },
  { text: "Just got it. So excited to get more in tune with my body!", name: "Numerous_Zebra_4740", role: "r/Periods", image: "/face-laugh-svgrepo-com.svg", bgColor: "#10B981", stars: null },
  { text: "This is def a lot of work. I love an alternative to Flo and similar bc I know a lot of people who despise the apps. I'll have to look further into it. 👍🏻", name: "ItsThe_____ForMe", role: "r/teenagers", image: "/face-smile-svgrepo-com.svg", bgColor: "#3B82F6", stars: null },
  { text: "You did great on this and your efforts show! Also offline, good job on this! 👏🏻", name: "slyyuh", role: "r/teenagers", image: "/face-laugh-svgrepo-com.svg", bgColor: "#6366F1", stars: null },
  { text: "This sounds really interesting! I'd be interested to know how other people feel about it.", name: "Ribonichigo", role: "r/degoogle", image: "/face-smile-svgrepo-com.svg", bgColor: "#E55B81", stars: null },
];

// ── Platform nav cards (pixel hover, scroll-to-section) ───────────────────────
const NAV_PLATFORMS = [
  { id: "playstore",  label: "Google Play", sub: "17 reviews · ⭐ 5.0", pixels: ["#E55B81","#EF8BAA","#F5B8CB"],
    icon: <Image src="/play_icon.png" alt="Google Play" width={28} height={28} className="object-contain" /> },
  { id: "appstore",  label: "App Store",   sub: "1 review · ⭐ 5.0",  pixels: ["#8B7FC7","#A99FD8","#C8C2E9"],
    icon: <Image src="/apple.png"     alt="App Store"   width={26} height={26} className="object-contain brightness-0" /> },
  { id: "reddit",    label: "Reddit",      sub: "11 posts",            pixels: ["#E55B81","#8B7FC7","#F5B8CB"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4500">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ) },
];

function PlatformNavGrid() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="grid grid-cols-3 gap-px bg-zinc-200/60 border border-zinc-200/60 rounded-2xl overflow-hidden max-w-2xl mx-auto mb-20 shadow-sm">
      {NAV_PLATFORMS.map((p) => (
        <button
          key={p.id}
          onClick={() => scrollTo(p.id)}
          aria-label={`Jump to ${p.label} reviews`}
          className="group relative flex flex-col items-center justify-center gap-2.5 bg-white hover:bg-white/95 px-4 py-8 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E55B81]"
        >
          <PixelCanvas colors={p.pixels} gap={6} speed={25} />
          <div className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
            {p.icon}
          </div>
          <p className="relative z-10 font-bold text-sm text-zinc-900 group-hover:text-[#E55B81] transition-colors duration-200">{p.label}</p>
          <p className="relative z-10 text-xs text-zinc-400">{p.sub}</p>
        </button>
      ))}
    </div>
  );
}

// ── Review card ───────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm"
    >
      {review.stars !== null && (
        <div className="flex gap-0.5 mb-2" aria-label={`${review.stars} out of 5 stars`}>
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      )}
      <blockquote itemProp="reviewBody" className="text-zinc-600 text-sm leading-relaxed m-0 mb-4">
        &quot;{review.text}&quot;
      </blockquote>
      <footer className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
        <img src={review.image} alt={review.name} width={36} height={36}
          className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-100 flex-shrink-0" style={{ backgroundColor: review.bgColor, padding: "4px" }} />
        <div>
          <cite className="not-italic font-semibold text-zinc-900 text-sm block" itemProp="name">{review.name}</cite>
          <span className="text-xs text-zinc-400">{review.role}</span>
        </div>
      </footer>
    </article>
  );
}

// ── Scrolling column ──────────────────────────────────────────────────────────
function ScrollColumn({ reviews, duration = 20, className }: { reviews: Review[]; duration?: number; className?: string }) {
  return (
    <div className={`overflow-hidden w-full max-w-xs ${className ?? ""}`} aria-hidden="true">
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-4 pb-4"
      >
        {[0, 1].map((idx) => (
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
  id, heading, badge, reviews, singleCard = false,
}: { id: string; heading: string; badge: string; reviews: Review[]; singleCard?: boolean }) {
  const col1 = reviews.slice(0, Math.ceil(reviews.length / 3));
  const col2 = reviews.slice(Math.ceil(reviews.length / 3), Math.ceil((reviews.length * 2) / 3));
  const col3 = reviews.slice(Math.ceil((reviews.length * 2) / 3));

  return (
    <section
      id={id}
      aria-label={`${heading} reviews`}
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      className="scroll-mt-8 mb-24"
    >
      <meta itemProp="name" content="Petal Chan" />
      <meta itemProp="applicationCategory" content="HealthApplication" />

      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-[#E55B81] border border-pink-100 mb-3">
          {badge}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{heading}</h2>
      </div>

      {singleCard ? (
        <div className="max-w-md mx-auto">
          <ReviewCard review={reviews[0]} />
        </div>
      ) : (
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[640px] overflow-hidden flex gap-4 justify-center px-4">
          <ScrollColumn reviews={col1} duration={18} />
          {col2.length > 0 && <ScrollColumn reviews={col2} duration={23} className="hidden md:flex" />}
          {col3.length > 0 && <ScrollColumn reviews={col3} duration={21} className="hidden lg:flex" />}
        </div>
      )}

      {/* Screen-reader / AI-readable static list (visually hidden) */}
      <div className="sr-only">
        {reviews.map((r, i) => (
          <div key={i} itemScope itemType="https://schema.org/Review">
            <span itemProp="reviewBody">{r.text}</span>
            <span itemProp="author">{r.name}</span>
            {r.stars && <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={String(r.stars)} />
              <meta itemProp="bestRating" content="5" />
            </span>}
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
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#E55B81] transition-colors mb-6">
          <Image src="/petallogo.png" alt="Petal Chan" width={20} height={20} className="rounded-lg" />
          Petal Chan
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
          What people are saying
        </h1>
        <p className="text-zinc-500 text-lg">
          Real reviews from Google Play, App Store, and Reddit. See why users trust{" "}
          <Link href="/" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">Petal Chan</Link>{" "}
          for private cycle tracking.
        </p>
      </header>

      {/* Pixel nav grid */}
      <div className="px-4">
        <PlatformNavGrid />
      </div>

      {/* All platform sections */}
      <main className="max-w-5xl mx-auto px-4">
        <PlatformSection
          id="playstore"
          heading="Google Play Reviews"
          badge="⭐ 5.0 · 17 reviews"
          reviews={PLAY_STORE}
        />
        <PlatformSection
          id="appstore"
          heading="App Store Review"
          badge="⭐ 5.0 · 1 review"
          reviews={APP_STORE}
          singleCard
        />
        <PlatformSection
          id="reddit"
          heading="Reddit Posts"
          badge="11 posts"
          reviews={REDDIT}
        />
      </main>

      {/* CTA */}
      <footer className="text-center py-16 px-4">
        <p className="text-zinc-500 text-sm mb-5">Ready to join them? Learn about our <Link href="/privacypolicy/" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">privacy-first approach</Link>.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://play.google.com/store/apps/details?id=com.slyayush.petal" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#E55B81] text-white font-semibold rounded-xl hover:bg-[#d44d72] transition-colors shadow-sm">
            <Image src="/play_icon.png" alt="" width={18} height={18} /> Google Play
          </a>
          <a href="https://apps.apple.com/us/app/petal-offline-period-tracker/id6761746225" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors shadow-sm">
            <Image src="/apple.png" alt="" width={16} height={16} /> App Store
          </a>
        </div>
        <p className="text-zinc-400 text-sm mt-6">Have questions? Check out our <Link href="/#faq" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">FAQ</Link>.</p>
      </footer>
    </div>
  );
}
