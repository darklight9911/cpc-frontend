"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BlurText from "@/components/ui/blur-text";

export const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20 font-sans">
            {/* Background Image & Overlay */}
            <div className="absolute inset-x-0 bottom-0 top-16 md:top-20 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="CPC Hero Background"
                    fill
                    className="object-cover object-center brightness-110 dark:brightness-100"
                    priority
                    quality={90}
                />
                {/* Professional Overlay: Gradient for depth + Dark overlay for text contrast */}
                {/* Professional Overlay: Gradient for depth + Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent z-10" />
                {/* Left-to-Right Fade for Text Readability vs Faces */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent z-10" />
            </div>

            <Container className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Block 1: Headlines */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-1 flex flex-col justify-center text-center lg:text-left"
                >
                    <div className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] font-heading drop-shadow-lg">
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
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
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

                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-xl leading-relaxed font-sans mt-6 mx-auto lg:mx-0 drop-shadow-md">
                        The Computer and Programming Club of Daffodil International University.
                        A community driven by <span className="text-blue-300 font-semibold">logic</span>,
                        built on <span className="text-purple-300 font-semibold">passion</span>,
                        and connected by <span className="text-pink-300 font-semibold">innovation</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                        <Button size="lg" className="font-bold bg-white text-black hover:bg-gray-200 border-none shadow-lg transition-transform hover:scale-105">
                            Join the Club <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-transform hover:scale-105">
                            View Events
                        </Button>
                    </div>
                </motion.div>

                {/* Block 2: Hero Content/Image side - optional if we want to keep the floating element or remove it since we have a bg now. 
                    Given the new bg is a full photo, the old floating 3D hero image might be redundant or cluttering. 
                    I'll hide the old side image to let the background shine as per "standard and compact" request, 
                    or maybe keep just floating decorative elements?
                    Let's comment out the old distinct image block and just center the text or keep the text content focused.
                    Actually, user said "use this image as background ... adjust it based on the theme". 
                    Often hero sections with full bg text are centered or left aligned. 
                    I will keep the grid but leave the right side for visual balance if needed, or remove it.
                    Let's remove the specific "hero-image.png" block to avoid double imagery.
                */}
                <div className="hidden lg:block relative h-[400px] w-full">
                    {/* kept empty for spacing or can add floating glass cards later. 
                        For now, let's just let the text take focus or center it if desired.
                        But to be safe, I'll keep the column but maybe remove the explicit image 
                        and just have some nice abstract glows or nothing to let the background image show through.
                    */}
                </div>
            </Container>
        </section>
    );
};
