"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Image from "next/image";
import BlurText from "@/components/ui/blur-text";

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

            <Container className="relative z-10 grid grid-cols-2 gap-4 lg:gap-12 items-center">
                {/* Block 1: Headlines (Left on Mobile, Top-Left on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-1 lg:col-span-1 order-1 flex flex-col justify-center"
                >
                    <div className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] font-heading">
                        <div>
                            <BlurText
                                text="Code."
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                className="inline-block"
                            />
                        </div>
                        <div>
                            <BlurText
                                text="Create."
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                className="inline-block text-gradient"
                                animationFrom={{ opacity: 0, y: -20 }}
                                animationTo={{ opacity: 1, y: 0 }}
                            />
                        </div>
                        <div>
                            <BlurText
                                text="Connect."
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                className="inline-block"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Block 2: Hero Image (Right on Mobile, Right on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block col-span-1 lg:col-span-1 lg:row-span-2 order-2"
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

                {/* Block 3: Content & Buttons (Bottom on Mobile, Bottom-Left on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="col-span-2 lg:col-span-1 order-3 space-y-8"
                >
                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-sans mt-4 lg:mt-0">
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

            </Container>
        </section>
    );
};
