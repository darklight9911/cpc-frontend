"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Code2, Globe, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tracks = [
    {
        title: "Competitive Programming",
        description: "Master algorithms, data structures, and problem-solving skills. Compete in ICPC, NCPC, and global contests.",
        icon: Code2,
        color: "text-primary",
        gradient: "from-primary to-primary/50",
        stats: "500+ Solved Problems",
    },
    {
        title: "Web & App Development",
        description: "Build modern, scalable applications using the latest tech stacks like Next.js, React, and Flutter.",
        icon: Globe,
        color: "text-secondary",
        gradient: "from-secondary to-secondary/50",
        stats: "50+ Shipped Projects",
    },
    {
        title: "Machine Learning & AI",
        description: "Explore the frontiers of Artificial Intelligence, innovative models, and data-driven solutions.",
        icon: Cpu,
        color: "text-accent",
        gradient: "from-accent to-accent/50",
        stats: "20+ Research Papers",
    },
];

export const Tracks = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                        Our <span className="text-gradient inline-block pb-1">Tracks</span>
                    </h2>
                    <p className="text-muted-foreground font-sans text-lg">
                        Specialized wings dedicated to mastering specific domains of technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <Card key={index} className="group relative bg-card/40 border-border/10 hover:border-border/20">
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-muted/50 border border-border/10 group-hover:scale-110 transition-transform duration-300">
                                <track.icon className={`h-8 w-8 ${track.color}`} />
                            </div>

                            <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                                {track.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {track.description}
                            </p>

                            <div className={`text-sm font-mono font-bold ${track.color} opacity-80 mb-6`}>
                                {track.stats}
                            </div>

                            <div className="flex items-center text-sm font-medium text-foreground group-hover:translate-x-2 transition-transform cursor-pointer">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};
