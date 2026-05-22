"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
    word: string;
    className?: string;
    duration?: number;
}

const BlurIn = ({ word, className, duration = 0.8 }: BlurInProps) => {
    return (
        <motion.h2
            initial={{ filter: "blur(10px)", opacity: 0, y: 8 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration, ease: "easeOut" }}
            className={cn(
                "font-bold tracking-tight text-zinc-900",
                className
            )}
        >
            {word}
        </motion.h2>
    );
};

export { BlurIn };
