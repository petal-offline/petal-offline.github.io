import { Metadata } from "next";
import ReviewsPage from "./ReviewsPage";

export const metadata: Metadata = {
  title: "Reviews | Petal Chan – Period Tracker",
  description:
    "Read real reviews of Petal Chan, the private offline period tracker, from Google Play (5.0 ⭐, 17 reviews), App Store (5.0 ⭐), and Reddit. Users love the privacy-first design, beautiful UI, and one-time payment.",
  keywords: [
    "Petal Chan reviews", "period tracker reviews", "offline period tracker",
    "privacy period app", "Google Play reviews", "App Store reviews",
    "period tracker Reddit", "Petal Chan testimonials",
  ],
  openGraph: {
    title: "Petal Chan Reviews – What Real Users Are Saying",
    description:
      "17 Google Play reviews, App Store reviews, and Reddit posts praising Petal Chan's privacy-first design, beautiful UI, and affordable one-time price.",
    url: "https://petalchan.com/reviews",
    siteName: "Petal Chan",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Petal Chan Reviews", description: "Real reviews from Google Play, App Store, and Reddit." },
  alternates: { canonical: "https://petalchan.com/reviews" },
  robots: { index: true, follow: true },
};

// JSON-LD structured data — makes all review content machine-readable for AI, Google, LLMs
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://petalchan.com/reviews",
      "name": "Petal Chan Reviews",
      "url": "https://petalchan.com/reviews",
      "description": "Real user reviews of Petal Chan period tracker from Google Play, App Store, and Reddit.",
      "inLanguage": "en",
      "isPartOf": { "@type": "WebSite", "url": "https://petalchan.com", "name": "Petal Chan" },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://petalchan.com/#app",
      "name": "Petal Chan – Offline Period Tracker",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "HealthApplication",
      "url": "https://petalchan.com",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "18",
        "ratingCount": "18",
      },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Ajay Singh" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "The UI is absolutely beautiful, I loved the onboarding and the app's simplicity, and the way it just shows you your cycle day, the widget works great as well, the pro plan is very good prices, though I'd suggest having a cloud sync would be good to not lose data. Overall 5/5.", "datePublished": "2026-04-16", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Dilip Sharma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "It's a great app for those looking for saving your privacy, everything in the app is well made, and so far I've seen no bugs, would totally recommend it.", "datePublished": "2026-04-16", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Mariam Mohammed" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Loved an app created for people to enjoy privacy, was straightforward to use just how I like it. I loved the simplicity and the countdown to next period. Great start.", "datePublished": "2026-03-14", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Manju Mishra" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "The title says it right, just a period tracker which is private and with good features tbh, love it! And the one time premium is also very affordable.", "datePublished": "2026-03-20", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Anjali" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "App is nice and the widget works great, if you could add Google Drive backup that would be awesome!", "datePublished": "2026-03-22", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Maria Alvarez" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "So far so good. Easy to navigate and informative.", "datePublished": "2026-04-24", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Sienna Wilson" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Found this on Reddit when it was posted in a group! Absolutely loving it!", "datePublished": "2026-03-25", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Anshika Rai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Love the concept of a privacy first app like this, all features work incredibly well, I love it so far, would totally recommend getting the Chan+/Pro, it has to support the indie dev.", "datePublished": "2026-04-20", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Notreallymebutmebutnotme" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "One of the best period tracking apps I've used, has all the necessary features while being extremely low priced for everything. No ads is the best part!! The widgets and everything works great.", "datePublished": "2026-05-19", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Ravi Prakash Shukla" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Good experience overall, the predictions are almost on spot, and the UI is amazing. 10/10 would recommend!", "datePublished": "2026-04-20", "publisher": { "@type": "Organization", "name": "Google Play" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "App Store User" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "This is one of the best period tracker I've used so far and they have got the privacy perfect, And the UI is shockingly amazing, doesn't feel like an app made by an indie dev, 10/10 would recommend.", "datePublished": "2026-01-01", "publisher": { "@type": "Organization", "name": "Apple App Store" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Possible-Ingenuity25" }, "reviewBody": "Petal Chan is relatively new but packed with genuinely useful features, available on both Android and iOS, requires no login, and has no subscriptions. One time unlock for extra features. Been using it for more than a month — support is actually good.", "publisher": { "@type": "Organization", "name": "Reddit r/womenintech" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "seni82" }, "reviewBody": "The UI is indeed really lovely, and the app is really simple and intuitive. Data privacy is a really important topic — you should be able to own your data. Thank you for your work.", "publisher": { "@type": "Organization", "name": "Reddit r/Periods" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "emcemayo" }, "reviewBody": "Love the privacy edge. Great and straightforward. £7.99 one time fee is modest and great for an app like this — well done.", "publisher": { "@type": "Organization", "name": "Reddit r/Periods" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "solarizzy_" }, "reviewBody": "I found out about your app through ChatGPT haha. It looks interesting so I downloaded it and wow its niceee. Absolutely love the no ads and one time pay. Price is also affordable.", "publisher": { "@type": "Organization", "name": "Reddit r/Periods" } },
      ],
    },
  ],
};

export default function Reviews() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReviewsPage />
    </>
  );
}
