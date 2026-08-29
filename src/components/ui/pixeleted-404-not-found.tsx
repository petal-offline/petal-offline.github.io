import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import Image from "next/image";
import { DottedSurface } from "@/components/ui/dotted-surface";

interface Error404Props {
    postcardImage?: string;
    postcardAlt?: string;
    curvedTextTop?: string;
    curvedTextBottom?: string;
    heading?: string;
    subtext?: string;
    backButtonLabel?: string;
    backButtonHref?: string;
}

export function Error404({
    postcardImage = "/mockup.png", // Using the existing app mockup
    postcardAlt = "Petal App Mockup",
    curvedTextTop = "The Privacy-First",
    curvedTextBottom = "Period Tracker",
    heading = "(404) Looks like the page you're looking for got lost somewhere.",
    subtext = "But hey, even the unexpected detours lead somewhere.",
    backButtonLabel = "Back to Home",
    backButtonHref = "/",
}: Error404Props) {
    return (
        <main className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
            {/* Background layer */}
            <DottedSurface />

            <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-24">
                    <svg
                        className="absolute -top-20 -left-12 w-[160px] h-[160px] pointer-events-none z-20 animate-[spin_20s_linear_infinite]"
                        viewBox="0 0 140 140"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                                fill="transparent"
                            />
                        </defs>
                        <text
                            className="text-[11px] fill-zinc-700 font-serif uppercase drop-shadow-md"
                            style={{ fontWeight: 600, letterSpacing: "0.15em" }}
                        >
                            <textPath href="#circlePath" startOffset="0%">
                                {curvedTextTop} • {curvedTextBottom} •
                            </textPath>
                        </text>
                    </svg>

                    <div className="relative z-10">
                        <div className="relative p-2 shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-300 bg-zinc-200 border border-zinc-300 rounded-xl">
                            <div className="relative overflow-hidden bg-zinc-100 rounded-lg flex items-center justify-center p-4">
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 z-0 rounded-full blur-2xl bg-pink-500/20 scale-[1.2]"
                                />
                                <Image
                                    src={postcardImage}
                                    alt={postcardAlt}
                                    width={1866}
                                    height={4039}
                                    className="h-[280px] w-auto max-w-[200px] object-contain relative z-10 -rotate-2"
                                />
                            </div>
                        </div>

                        {/* Postal cancellation marks modified for dark theme */}
                        <svg
                            className="absolute -right-16 top-1/2 -translate-y-1/2 w-28 h-20"
                            viewBox="0 0 100 60"
                        >
                            <path
                                d="M 10 15 Q 20 10 30 15 Q 40 20 50 15 Q 60 10 70 15 Q 80 20 90 15"
                                stroke="#f472b6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.4"
                            />
                            <path
                                d="M 10 25 Q 20 20 30 25 Q 40 30 50 25 Q 60 20 70 25 Q 80 30 90 25"
                                stroke="#f472b6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.4"
                            />
                            <path
                                d="M 10 35 Q 20 30 30 35 Q 40 40 50 35 Q 60 30 70 35 Q 80 40 90 35"
                                stroke="#f472b6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.4"
                            />
                        </svg>
                    </div>
                </div>

                <div className="text-center max-w-2xl px-6">
                    <h1
                        className="mb-6 text-balance font-mono text-4xl font-bold leading-tight text-zinc-900 md:text-5xl"
                    >
                        {heading}
                    </h1>
                    <p className="text-zinc-600 text-base md:text-lg mb-10 font-sans">
                        {subtext}
                    </p>

                    <CartoonButton href={backButtonHref} label={backButtonLabel} color="bg-zinc-700">
                        <ArrowRight className="w-5 h-5 text-white transition-colors" />
                    </CartoonButton>
                </div>
            </div>
        </main>
    );
}
