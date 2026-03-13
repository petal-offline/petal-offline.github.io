"use client";

import { useRef, useEffect } from "react";
import type { ConfettiRef } from "@/components/ui/confetti";
import { Confetti } from "@/components/ui/confetti";
import { BlurIn } from "@/components/ui/blur-in";
import { DottedSurface } from "@/components/ui/dotted-surface";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Policy section config ────────────────────────────────────────────────────
const sections = [
    {
        title: "1. Information We Collect",
        content: null,
        list: [
            { label: "Health Data Access and Local Storage", text: "Petal is a menstrual cycle tracker and therefore accesses and processes Health Data (including cycle dates, symptoms, and personal notes) that you input into the app." },
            { label: "How this data is used and handled", text: "All Health Data is stored 100% locally and offline on your personal device to provide you with cycle predictions and tracking features. We do not transmit, collect, harvest, or share your Health Data with any external servers, cloud services, or third parties." },
        ],
    },
    {
        title: "2. How Your Data Is Stored",
        content: "All information you enter into Petal is stored locally on your device's internal memory. Because the app works entirely offline:",
        list: [
            { label: null, text: "Your data never leaves your phone." },
            { label: null, text: "We (the developers) have no access to your data." },
            { label: null, text: "If you delete the app, your data will be permanently deleted from the device unless you have performed your own system-level backup." },
        ],
    },
    {
        title: "3. Accounts & Cloud Sync",
        content: "Petal operates without user accounts. There is no signup or login process. Consequently, we do not offer cloud synchronization services. This ensures that your sensitive health information is never stored on external servers.",
        list: null,
    },
    {
        title: "4. Third-Party Services",
        content: "To maintain your privacy, Petal contains:",
        list: [
            { label: "No Analytics", text: "We do not use Google Analytics, Firebase, or similar services to track how you use the app." },
            { label: "No Advertising", text: "The app contains no advertising SDKs (Software Development Kits) and displays no ads." },
            { label: "No Tracking", text: "We do not track your behavior across other apps or websites." },
        ],
    },
    {
        title: "5. Notifications",
        content: "Petal may send notifications to your device to remind you of your cycle predictions. These notifications are scheduled locally on your device. No external server triggers these messages.",
        list: null,
    },
    {
        title: "6. Petal Pro & Payments",
        content: "Advanced features are available as a one-time purchase. All transactions are handled securely and anonymously by the official Google Play Store and Apple App Store billing systems. Petal developers never see, collect, or store your real name or payment details.",
        list: null,
        highlight: true,
    },
    {
        title: "7. Children's Privacy",
        content: "Petal is a general audience application. Because we do not collect, store, or process personal data, including from children under the age of 13, the app is designed to be compliant with applicable privacy laws such as COPPA and GDPR.",
        list: null,
    },
    {
        title: "8. Changes to This Privacy Policy",
        content: "We may update our Privacy Policy from time to time. Since we do not collect email addresses, we advise you to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.",
        list: null,
    },
    {
        title: "9. Contact Us",
        content: null,
        contact: "petal.feedback@gmail.com",
        contactPrefix: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:",
        list: null,
    },
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
    const confettiRef = useRef<ConfettiRef>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            confettiRef.current?.fire({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.3 },
                colors: ["#f472b6", "#ec4899", "#fbcfe8", "#ffffff", "#a855f7"],
            });
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">
            <DottedSurface />

            {/* ── Top nav ──────────────────────────────────────────────── */}
            <nav className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-2 flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Petal"
                        width={32}
                        height={32}
                        className="object-contain drop-shadow-[0_0_8px_rgba(244,114,182,0.5)] group-hover:scale-110 transition-transform"
                    />
                    <span className="font-bold text-lg text-zinc-100 tracking-tight">Petal</span>
                </Link>
                <span className="text-zinc-600 text-sm ml-2">/ Privacy Policy</span>
            </nav>

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
                {/* Confetti canvas */}
                <Confetti
                    ref={confettiRef}
                    className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                    manualstart
                />

                {/* Hero content — NO initial opacity:0 so it renders even if JS fails */}
                <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-medium mb-6">
                        🔒 Privacy First — always
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-4 mt-4">
                        We don&apos;t collect<br />
                        <span className="text-pink-400">or sell your data.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-lg mx-auto mt-4">
                        Your health data is yours alone. Petal is built with a privacy-by-design philosophy so your data never leaves your device.
                    </p>
                    <p className="text-zinc-600 text-sm mt-4">Last Updated: March 8, 2026</p>
                </div>
            </div>

            {/* ── Policy Content ───────────────────────────────────────── */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
                {/* Intro paragraph — always visible, no opacity:0 initial */}
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 mb-6">
                    <p className="text-zinc-300 leading-relaxed">
                        Thank you for choosing <strong className="text-zinc-100">Petal</strong>. We believe that your health data is personal and belongs only to you. We have designed our app with a &ldquo;privacy-by-design&rdquo; philosophy, ensuring that your data remains strictly on your device.
                    </p>
                    <p className="text-zinc-300 leading-relaxed mt-4">
                        This Privacy Policy explains how information is handled in the Petal mobile application on Android and iOS. In short:{" "}
                        <strong className="text-pink-400">We do not collect, store, or share your data.</strong>
                    </p>
                </div>

                {/* Sections — whileInView is safe; it only animates FROM visible */}
                <div className="space-y-4">
                    {sections.map((section, i) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            className={`rounded-2xl border backdrop-blur-sm p-6 md:p-8 ${section.highlight
                                    ? "border-pink-500/30 bg-pink-500/5"
                                    : "border-zinc-800/60 bg-zinc-900/50"
                                }`}
                        >
                            <BlurIn
                                word={section.title}
                                className={`text-xl md:text-2xl mb-4 ${section.highlight ? "text-pink-300" : "text-zinc-100"}`}
                                duration={0.6}
                            />

                            {section.content && (
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    {section.content}
                                </p>
                            )}

                            {section.list && (
                                <ul className="space-y-2.5 mt-2">
                                    {section.list.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-zinc-400">
                                            <span className="text-pink-500 mt-1 shrink-0">▸</span>
                                            <span className="leading-relaxed">
                                                {item.label && (
                                                    <strong className="text-zinc-200 font-semibold">
                                                        {item.label}:{" "}
                                                    </strong>
                                                )}
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.contact && (
                                <div className="mt-2">
                                    <p className="text-zinc-300 leading-relaxed mb-3">
                                        {section.contactPrefix}
                                    </p>
                                    <a
                                        href={`mailto:${section.contact}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 font-medium hover:bg-pink-500/25 transition-colors"
                                    >
                                        ✉ {section.contact}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-zinc-800/60 text-center">
                    <p className="text-zinc-600 text-sm">© 2026 Petal. All rights reserved.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-zinc-500 hover:text-pink-400 transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
