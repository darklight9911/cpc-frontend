"use client";

import { Container } from "@/components/ui/container";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

import { TEAM } from "@/lib/team-data";

const TEAM_PREVIEW = TEAM.slice(0, 4);

export const TeamPreview = () => {
    return (
        <section className="py-24 border-t border-border bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-foreground mb-4">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Executive Committee</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The dedicated team working behind the scenes to bring you the best tech events and workshops.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_PREVIEW.map((member) => (
                        <div key={member.id} className="group relative">
                            <div className="relative overflow-hidden rounded-xl bg-card aspect-[3/4] border border-border group-hover:border-violet-500/50 transition-all duration-300">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                                    <p className="text-sm text-violet-400 font-mono mb-4">{member.role}</p>

                                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <a href={member.socials.github} className="text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /></a>
                                        <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
                                        <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground"><Twitter className="h-4 w-4" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
