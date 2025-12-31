import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const EVENTS = [
    {
        id: 1,
        title: "Hackathon 2024: Cyber Future",
        date: "Dec 25, 2024",
        location: "DIU Auditorium",
        category: "Competition",
        image: "bg-gradient-to-br from-emerald-900 to-slate-900",
    },
    {
        id: 2,
        title: "AI Workshop: Generative Art",
        date: "Jan 10, 2025",
        location: "Lab 404",
        category: "Workshop",
        image: "bg-gradient-to-br from-violet-900 to-slate-900",
    },
    {
        id: 3,
        title: "Tech Talk: Career in DevOps",
        date: "Jan 15, 2025",
        location: "Virtual",
        category: "Seminar",
        image: "bg-gradient-to-br from-blue-900 to-slate-900",
    },
];

export const RecentEvents = () => {
    return (
        <section className="py-24 bg-background/50">
            <Container>
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold font-spaceGrotesk text-foreground">Upcoming Events</h2>
                        <p className="text-muted-foreground mt-2">Join our latest workshops, seminars, and competitions.</p>
                    </div>
                    <Link href="/events">
                        <Button variant="ghost" className="hidden md:inline-flex">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {EVENTS.map((event) => (
                        <Card key={event.id} className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500">
                            <div className={`h-48 w-full ${event.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-emerald-400 border border-emerald-500/20">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {event.date}</span>
                                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {event.location}</span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>

                                <Button variant="link" className="px-0 text-muted-foreground group-hover:text-primary">
                                    Register Now <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/events">
                        <Button variant="ghost">
                            View All Events <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};
