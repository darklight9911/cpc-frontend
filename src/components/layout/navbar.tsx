"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b border-white/5",
                scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/70 backdrop-blur-md"
            )}
        >
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative flex h-10 w-10 items-center justify-center">
                        <Image
                            src="/cpc-logo.png"
                            alt="CPC Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className="font-mono font-bold text-lg tracking-tight">
                        DIU<span className="text-emerald-500">CPC</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="cyber" size="sm">
                            Join Club
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-muted-foreground hover:text-emerald-400 py-2 border-l-2 border-transparent hover:border-emerald-500 pl-3 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button variant="cyber" className="w-full">
                                Join Club
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
