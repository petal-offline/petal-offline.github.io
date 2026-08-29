"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 16 },
    },
};

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={cn(
                "grid w-full gap-4 grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2 | 3;
}

const colSpanMap: Record<number, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
};

const rowSpanMap: Record<number, string> = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
};

export function BentoCard({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
}: BentoCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            className={cn(
                // Base card
                "group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-100/60 backdrop-blur-sm p-6",
                // Hover interaction: lift and glow
                "transform-gpu transition-all duration-300",
                "hover:border-pink-500/30 hover:shadow-[0_0_30px_-8px_rgba(244,114,182,0.2)]",
                "hover:-translate-y-1",
                // Dark inset glow on hover
                "dark:[box-shadow:0_-20px_80px_-20px_#ffffff08_inset]",
                colSpanMap[colSpan],
                rowSpanMap[rowSpan],
                className
            )}
        >
            {children}
            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-pink-500/[.03]" />
        </motion.div>
    );
}
