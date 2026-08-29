import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";
import ReviewsPage from "./ReviewsPage";

export const metadata: Metadata = {
  title: "Reviews | Petal Chan",
  description:
    "Read selected Petal Chan reviews and posts from Google Play, the App Store, and Reddit in the words people shared publicly.",
  alternates: { canonical: `${SITE_URL}/reviews/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Reviews | Petal Chan",
    description: "Selected public feedback about Petal Chan from store reviews and Reddit posts.",
    url: `${SITE_URL}/reviews/`,
    siteName: "Petal Chan",
    type: "website",
    images: [`${SITE_URL}/preview.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Petal Chan",
    description: "Selected public feedback from Google Play, the App Store, and Reddit.",
    images: [`${SITE_URL}/preview.png`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/reviews/#webpage`,
      name: "Petal Chan Reviews",
      url: `${SITE_URL}/reviews/`,
      description: "Selected public feedback about Petal Chan from Google Play, the App Store, and Reddit.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Petal Chan", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${SITE_URL}/reviews/` },
      ],
    },
  ],
};

export default function Reviews() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <ReviewsPage />
    </>
  );
}
