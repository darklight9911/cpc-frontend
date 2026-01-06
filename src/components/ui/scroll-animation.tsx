"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    variant?: "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left";
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
}

export function ScrollAnimation({
    children,
    className,
    variant = "fade-up",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px", amount: 0.2 },
}: ScrollAnimationProps) {
    const getVariants = () => {
        switch (variant) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case "scale-up":
                return {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                };
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                };
            case "slide-left":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                };
            default:
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={getVariants()}
            transition={{ duration, ease: "easeOut", delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
