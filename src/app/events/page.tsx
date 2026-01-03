import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EVENTS } from "@/lib/data";

export default function EventsPage() {
    return (
        <main className="min-h-screen pt-20 md:pt-24 bg-background">
            <Container className="py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Upcoming <span className="text-gradient">Events</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Join our workshops, seminars, and hackathons to level up your skills and connect with the community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EVENTS.map((event) => (
                        <Card key={event.id} className="group overflow-hidden border-border bg-card hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                            <div className={`h-48 w-full ${event.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-accent border border-accent/20">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1 text-accent" /> {event.date}</span>
                                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1 text-accent" /> {event.location}</span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {event.title}
                                </h3>

                                <Button variant="link" className="px-0 text-muted-foreground group-hover:text-accent">
                                    Register Now <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </main>
    );
}
