import { Container } from "@/components/ui/container";
import { TEAM } from "@/lib/team-data";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    return (
        <main className="min-h-screen pt-20 md:pt-24 bg-background">
            <Container className="py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-foreground mb-6">
                        Meet Our <span className="text-violet-400">Team</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        The brilliant minds working behind the scenes to make CPC the best community for tech enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member) => (
                        <div key={member.id} className="group relative">
                            <div className="relative overflow-hidden rounded-xl bg-card aspect-[3/4] border border-border group-hover:border-violet-500/50 transition-all duration-300">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-violet-400 border border-violet-500/20">
                                    {member.category}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                                    <p className="text-sm text-violet-400 font-mono mb-4">{member.role}</p>

                                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <a href={member.socials.github} className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
                                        <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
                                        <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}
