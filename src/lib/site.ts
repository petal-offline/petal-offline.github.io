export const SITE_URL = "https://petalchan.com";

export const STORE_LINKS = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.slyayush.petal",
  appStore:
    "https://apps.apple.com/us/app/petal-chan-period-tracker/id6761746225",
} as const;

export const CONTACT = {
  supportEmail: "help@petalchan.com",
  productInstagram: "https://www.instagram.com/trypetalchan/",
  productInstagramLabel: "@trypetalchan",
  creatorInstagram: "https://www.instagram.com/ayushmishraog/",
  creatorInstagramLabel: "@ayushmishraog",
} as const;

export type Availability = "Included" | "Not included" | "Locked" | "All six";

export type FeatureComparisonRow = {
  capability: string;
  free: Availability;
  chanPlus: Availability;
};

export const FEATURE_COMPARISON: FeatureComparisonRow[] = [
  { capability: "Period and flow logging, calendar, and cycle estimates", free: "Included", chanPlus: "Included" },
  { capability: "Basic symptom logging from Calendar", free: "Included", chanPlus: "Included" },
  { capability: "Advanced Daily Log: symptom severity, LH tests, and cervical fluid", free: "Not included", chanPlus: "Included" },
  { capability: "Mood tracking, notes, and multiple entries", free: "Included", chanPlus: "Included" },
  { capability: "Energy tracking", free: "Included", chanPlus: "Included" },
  { capability: "Period-product timers and reminders", free: "Included", chanPlus: "Included" },
  { capability: "BBT logging, history, and graph", free: "Not included", chanPlus: "Included" },
  { capability: "Food and nutrition suggestions", free: "Not included", chanPlus: "Included" },
  { capability: "Food-suggestion notifications", free: "Not included", chanPlus: "Included" },
  { capability: "Home-screen cycle widgets", free: "Locked", chanPlus: "Included" },
  { capability: "PIN app lock", free: "Included", chanPlus: "Included" },
  { capability: "Biometric unlock", free: "Not included", chanPlus: "Included" },
  { capability: "App-switcher privacy screen", free: "Not included", chanPlus: "Included" },
  { capability: "Import", free: "Included", chanPlus: "Included" },
  { capability: "Full CSV export", free: "Included", chanPlus: "Included" },
  { capability: "Standard, Irregular, and Symptom-Only modes", free: "Included", chanPlus: "Included" },
  { capability: "Period-late helper with saved context and history", free: "Included", chanPlus: "Included" },
  { capability: "Monthly and yearly cycle visualizers", free: "Included", chanPlus: "Included" },
  { capability: "Mood year visualizer", free: "Included", chanPlus: "Included" },
  { capability: "BBT visualizer", free: "Not included", chanPlus: "Included" },
  { capability: "English, Spanish, French, German, Portuguese, and Tagalog", free: "All six", chanPlus: "All six" },
  { capability: "Light and dark themes, plus ordinary cycle notifications", free: "Included", chanPlus: "Included" },
];

export type HomeFaq = {
  q: string;
  a: string;
  link?: { text: string; href: string };
};

export const HOME_FAQS: readonly HomeFaq[] = [
  {
    q: "What is Petal Chan?",
    a: "Petal Chan is a privacy-first period and cycle tracker for iPhone and Android. Core tracking works without an account or a Petal Chan health-data server.",
  },
  {
    q: "Where are my cycle records stored?",
    a: "Your health and cycle records are stored locally inside the app on your device. Petal Chan does not upload or sync them to a Petal Chan health-data server.",
    link: { text: "How privacy works", href: "/privacy/" },
  },
  {
    q: "Is Petal Chan free?",
    a: "Yes. The free app includes core cycle tracking, moods, notes, energy, multiple tracking modes, visualizers, PIN protection, imports, full CSV export, all six languages, and ordinary notifications. Chan+ adds deeper logging and privacy conveniences.",
    link: { text: "Compare Free and Chan+", href: "/features/" },
  },
  {
    q: "Is Chan+ a subscription?",
    a: "No. Chan+ is a one-time purchase with no recurring subscription. Every new customer gets a 15-day trial, and the current local price is shown in the App Store or Google Play.",
    link: { text: "See what Chan+ adds", href: "/features/#compare" },
  },
  {
    q: "How do cycle and fertility estimates work?",
    a: "Petal Chan calculates estimates locally from the cycle history you record. Optional BBT, LH test, and cervical-fluid logs can add context, but they cannot make ovulation or fertility predictions certain.",
    link: { text: "How predictions work", href: "/features/#predictions" },
  },
  {
    q: "Can Petal Chan be used as contraception?",
    a: "No. Petal Chan is not a medical device, does not provide medical advice, and should not be used as contraception or to determine safe days.",
    link: { text: "Read the medical-use limits", href: "/features/#medical-use" },
  },
  {
    q: "Who created Petal Chan?",
    a: "Ayush Mishra created and develops Petal Chan. The original idea came from Sly, who wanted a cycle tracker where the person using it stayed in control of their information.",
    link: { text: "About Petal Chan", href: "/about/" },
  },
];
