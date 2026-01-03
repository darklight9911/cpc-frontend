import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/lib/project-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-20 md:pt-24 bg-background">
            <Container className="py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Our <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Showcasing innovative solutions and creative applications built by our talented community members.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="group flex flex-col bg-card border border-border rounded-xl overlow-hidden hover:border-primary/50 transition-all duration-300">
                            <div className={`h-48 w-full ${project.image} relative overflow-hidden rounded-t-xl group-hover:brightness-110 transition-all`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <Link href={project.links.github} className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors">
                                        <Github className="h-4 w-4 mr-2" /> Code
                                    </Link>
                                    <Link href={project.links.demo} className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors">
                                        Live Demo <ExternalLink className="h-3 w-3 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}
