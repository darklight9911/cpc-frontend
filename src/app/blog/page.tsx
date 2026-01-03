import { Container } from "@/components/ui/container";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-20 md:pt-24 bg-background">
            <Container className="py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-foreground mb-6">
                        Latest <span className="text-pink-400">Insights</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Articles, tutorials, and updates from the CPC team and community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="group flex flex-col bg-card border border-border rounded-xl overlow-hidden hover:border-pink-500/50 transition-all duration-300">
                            <div className={`h-48 w-full ${post.image} relative overflow-hidden rounded-t-xl`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur text-pink-400 border-pink-500/20 hover:bg-background/90">
                                    {post.category}
                                </Badge>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-pink-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                    <span className="flex items-center text-sm text-muted-foreground">
                                        <User className="h-3 w-3 mr-2 text-pink-400" /> {post.author}
                                    </span>
                                    <Button variant="link" className="px-0 text-pink-400 group-hover:text-pink-300">
                                        Read More <ArrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}
