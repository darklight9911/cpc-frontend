"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
    const pathname = usePathname();

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
                "fixed top-0 z-50 w-full transition-all duration-300 border-b border-white/5 shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
                scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/70 backdrop-blur-md"
            )}
        >
            <Container className="flex h-16 md:h-20 items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <div className="relative flex h-14 w-14 md:h-20 md:w-20 items-center justify-center">
                        <Image
                            src="/cpc-logo.png"
                            alt="CPC Logo"
                            width={80}
                            height={80}
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group h-9 flex items-center",
                                    pathname === link.href ? "text-secondary" : "text-muted-foreground hover:text-secondary"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all",
                                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <div className="flex items-center gap-2">
                            <Button
                                variant={pathname === "/auth/login" ? "cyber" : "ghost"}
                                size="sm"
                                asChild
                            >
                                <Link href="/auth/login">Login</Link>
                            </Button>
                            <Button
                                variant={pathname === "/auth/register" ? "cyber" : pathname === "/auth/login" ? "ghost" : "cyber"}
                                size="sm"
                                asChild
                            >
                                <Link href="/auth/register">Register</Link>
                            </Button>
                        </div>
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
                                    className="text-sm font-medium text-muted-foreground hover:text-secondary py-2 border-l-2 border-transparent hover:border-secondary pl-3 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                <Button variant={pathname === "/auth/login" ? "cyber" : "ghost"} asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/auth/login">Login</Link>
                                </Button>
                                <Button variant={pathname === "/auth/register" ? "cyber" : pathname === "/auth/login" ? "ghost" : "cyber"} asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/auth/register">Register</Link>
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
