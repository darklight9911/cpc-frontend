"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative min-h-auto lg:min-h-[90vh] flex items-start lg:items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-16 lg:pb-0 font-sans">
            {/* Background: Hexagonal Mesh Pattern (SVG Simulation) */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                {/* Hexagon overlay effect (simple radial gradient for now to mimic glow) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse delay-1000" />
            </div>

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >


                    <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] font-heading">
                        Code. <br />
                        <span className="text-gradient">Create.</span> <br />
                        Connect.
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-sans">
                        The Computer and Programming Club of Daffodil International University.
                        A community driven by <span className="text-secondary font-semibold">logic</span>,
                        built on <span className="text-primary font-semibold">passion</span>,
                        and connected by <span className="text-accent font-semibold">innovation</span>.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="font-bold text-primary-foreground shadow-lg shadow-primary/25">
                            Join the Club <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-foreground hover:bg-foreground/10">
                            View Events
                        </Button>
                    </div>


                </motion.div>

                {/* Hero Visual - Custom Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 transform hover:scale-[1.05] transition-transform duration-500 max-w-md mx-auto">
                        <Image
                            src="/hero-image.png"
                            alt="CPC Community"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
                </motion.div>

            </Container>
        </section>
    );
};
