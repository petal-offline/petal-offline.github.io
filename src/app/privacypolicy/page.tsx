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
        title: "1. Data Accessed and Processed (Local Only)",
        content: "To provide accurate predictions and insights, the Petal Chan app processes the following information locally on your device:",
        list: [
            { label: "Menstrual Cycle Data", text: "Last period start date, average cycle length, and period duration." },
            { label: "Health & Fitness Data", text: "Common symptoms (e.g., cramps, headaches, bloating), mood, energy levels, sleep quality, stress levels, and activity levels." },
            { label: "Personal & Medical History", text: "Age range, birth control methods, and pregnancy history (all optional)." },
            { label: "Customization", text: "An optional display name." },
        ],
    },
    {
        title: "2. How Your Data is Used",
        content: "This data is used exclusively within the app to calculate cycle predictions, display your personal calendar, and provide personalized cycle-aware food and energy suggestions.",
        list: null,
    },
    {
        title: "3. Strictly Local Storage (No Collection)",
        content: "Your data never leaves your device. No accounts, no cloud. The developer does not collect, transmit, sync, or store any of your personal or health data on external servers. Because we do not have access to your data, we cannot and do not share or sell it to any third parties.",
        list: null,
    },
    {
        title: "4. Data Deletion",
        content: "You are in complete control of your data. You can instantly delete all health and cycle data by tapping \"Reset all data\" in the app's Settings menu, or by simply uninstalling the application from your device.",
        list: null,
    },
    {
        title: "5. Third-Party Services & Analytics",
        content: "Petal Chan contains zero analytics tracking (e.g., no Firebase, no Google Analytics) and zero advertising networks.",
        list: null,
    },
    {
        title: "6. Petal Pro & Payments",
        content: "Advanced features are available as a one-time purchase. All transactions are handled securely by the official Google Play Store and Apple App Store billing systems. Petal Chan developers never see, collect, or store your real name or payment details.",
        list: null,
        highlight: true,
    },
    {
        title: "7. Biometric Authentication (Face ID / Touch ID / Fingerprint)",
        content: "Petal offers optional biometric authentication, Face ID and Touch ID on iOS, and fingerprint or face unlock on Android, to protect access to your data. We never collect, see, or store any biometric data. Authentication is handled entirely by your device's operating system (Apple's Secure Enclave on iOS, Android's BiometricPrompt API on Android). Your biometric data never leaves your device and is never accessible to Petal or its developers.",
        list: null,
    },
    {
        title: "8. Contact Us",
        content: null,
        contact: "petal.feedback@gmail.com",
        contactPrefix: "If you have questions regarding your privacy, contact us at:",
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
        <div className="relative min-h-screen bg-zinc-50 overflow-x-hidden">
            <DottedSurface />

            {/* ── Top nav ──────────────────────────────────────────────── */}
            <nav className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-2 flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/petallogo.png"
                        alt="Petal"
                        width={32}
                        height={32}
                        className="object-contain drop-shadow-[0_0_8px_rgba(244,114,182,0.5)] group-hover:scale-110 transition-transform"
                    />
                    <span className="font-bold text-lg text-zinc-900 tracking-tight">Petal Chan</span>
                </Link>
                <span className="text-zinc-400 text-sm ml-2">/ Privacy Policy</span>
            </nav>

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <main>
            <div className="relative z-10 max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
                {/* Confetti canvas */}
                <Confetti
                    ref={confettiRef}
                    className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                    manualstart={true}
                />

                {/* Hero content — NO initial opacity:0 so it renders even if JS fails */}
                <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-medium mb-6">
                        Privacy First — always
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-4 mt-4">
                        Your data stays on<br />
                        <span className="text-pink-400">your device.</span>
                    </h1>
                    <p className="text-zinc-600 text-lg max-w-lg mx-auto mt-4">
                        Your health data is yours alone. Petal Chan is built with a privacy-by-design philosophy so your data never leaves your device.
                    </p>
                    <p className="text-zinc-400 text-sm mt-4">Last Updated: April 9, 2026</p>
                </div>
            </div>

            {/* ── Policy Content ───────────────────────────────────────── */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
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
                                    : "border-zinc-200/60 bg-zinc-100/50"
                                }`}
                        >
                            <BlurIn
                                word={section.title}
                                className={`text-xl md:text-2xl mb-4 ${section.highlight ? "text-pink-300" : "text-zinc-900"}`}
                                duration={0.6}
                            />

                            {section.content && (
                                <p className="text-zinc-700 leading-relaxed mb-4">
                                    {section.content}
                                </p>
                            )}

                            {section.title.startsWith("2.") && (
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Discover all the <Link href="/#features" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">features Petal Chan offers</Link> — all running locally on your device.
                                </p>
                            )}

                            {section.title.startsWith("6.") && (
                                <p className="text-zinc-500 text-sm leading-relaxed mt-2">
                                    See what users say about the value of Chan+ in our <Link href="/reviews/" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">reviews</Link>.
                                </p>
                            )}

                            {section.list && (
                                <ul className="space-y-2.5 mt-2">
                                    {section.list.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-zinc-600">
                                            <span className="text-pink-500 mt-1 shrink-0">▸</span>
                                            <span className="leading-relaxed">
                                                {item.label && (
                                                    <strong className="text-zinc-800 font-semibold">
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
                                    <p className="text-zinc-700 leading-relaxed mb-3">
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
                <div className="mt-12 pt-8 border-t border-zinc-200/60 text-center">
                    <p className="text-zinc-400 text-sm">© 2026 Petal Chan. All rights reserved.</p>
                    <p className="text-zinc-500 text-sm mt-4">Still have questions? Visit our <Link href="/#faq" className="text-pink-400 hover:text-pink-500 underline underline-offset-2 transition-colors">FAQ</Link> for answers.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-zinc-500 hover:text-pink-400 transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
            </main>
        </div>
    );
}
