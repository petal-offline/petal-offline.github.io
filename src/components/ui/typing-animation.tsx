"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
}

export function TypingAnimation({
    text,
    duration = 80,
    className,
}: TypingAnimationProps) {
    const characters = Array.from(text);
    const [revealedCharacters, setRevealedCharacters] = useState(characters.length);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) {
            setRevealedCharacters(characters.length);
            return;
        }

        let index = 0;
        setRevealedCharacters(0);
        const typingEffect = setInterval(() => {
            if (index < characters.length) {
                index += 1;
                setRevealedCharacters(index);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [characters.length, duration, shouldReduceMotion, text]);

    return (
        <h1
            aria-label={text}
            className={cn(
                "relative font-display text-left text-4xl font-bold leading-tight tracking-tight drop-shadow-sm",
                className
            )}
        >
            <span aria-hidden="true">
                {characters.map((character, index) => (
                    <span key={`${character}-${index}`} style={{ opacity: index < revealedCharacters ? 1 : 0 }}>
                        {character}
                    </span>
                ))}
            </span>
        </h1>
    );
}
