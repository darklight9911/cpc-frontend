import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Terminal, Github, Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-background pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="relative h-8 w-8">
                                <Image
                                    src="/cpc-logo.png"
                                    alt="CPC Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The most extensive club of Daffodil International University.
                            We explore every field of Computer Science to build the leaders of tomorrow.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Executive Committee</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Alumni</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Wing Activities</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Projects Showcase</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} DIU Computer and Programming Club. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
