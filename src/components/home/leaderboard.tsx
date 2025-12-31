"use client";

import { Container } from "@/components/ui/container";
import { Trophy, Code, Star, Flame } from "lucide-react";

const leaderboardData = [
    { rank: 1, name: "Alexandra Chen", handle: "alex_code", score: 2850, solved: 450, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
    { rank: 2, name: "Marcus Johnson", handle: "marcus_j", score: 2720, solved: 412, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { rank: 3, name: "Sarah Miller", handle: "sarah_dev", score: 2680, solved: 398, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { rank: 4, name: "Dmitry Petrov", handle: "dmitry_v", score: 2540, solved: 365, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry" },
    { rank: 5, name: "Emily Watson", handle: "emily_w", score: 2490, solved: 340, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
];

export const Leaderboard = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 text-accent">
                            <Trophy className="h-5 w-5" />
                            <span className="font-mono text-sm tracking-wider uppercase">Top Performers</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                            Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">Leaderboard</span>
                        </h2>
                    </div>
                </div>

                {/* Dark Table Design */}
                <div className="rounded-xl border border-border/10 bg-card/30 backdrop-blur-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border/10 bg-muted/20">
                                    <th className="p-4 px-6 text-sm font-medium text-muted-foreground font-mono">RANK</th>
                                    <th className="p-4 px-6 text-sm font-medium text-muted-foreground font-mono">DEVELOPER</th>
                                    <th className="p-4 px-6 text-sm font-medium text-muted-foreground font-mono text-right">SOLVED</th>
                                    <th className="p-4 px-6 text-sm font-medium text-muted-foreground font-mono text-right">SCORE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData.map((user, index) => (
                                    <tr
                                        key={user.rank}
                                        className="border-b border-border/10 hover:bg-muted/10 transition-colors group"
                                    >
                                        <td className="p-4 px-6">
                                            <div className={`
                                                flex items-center justify-center w-8 h-8 rounded-lg font-bold font-mono
                                                ${index === 0 ? 'bg-accent/20 text-accent' :
                                                    index === 1 ? 'bg-muted text-muted-foreground' :
                                                        index === 2 ? 'bg-orange-700/20 text-orange-400' : 'text-muted-foreground'}
                                            `}>
                                                {user.rank}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6">
                                            <div className="flex items-center gap-4">
                                                {/* Hexagon Avatar Clip */}
                                                <div className="relative w-10 h-10 bg-muted/50 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                                                    {/* Ideally an image setup, using simple div for now or text */}
                                                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-xs font-bold text-muted-foreground">
                                                        {user.handle[0].toUpperCase()}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">{user.name}</div>
                                                    <div className="text-xs text-muted-foreground font-mono">@{user.handle}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 text-right">
                                            <div className="inline-flex items-center gap-2 text-muted-foreground">
                                                <Code className="h-4 w-4 text-secondary" />
                                                <span>{user.solved}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 text-right">
                                            <div className="inline-flex items-center gap-2 font-bold text-foreground">
                                                <Flame className="h-4 w-4 text-primary" />
                                                <span>{user.score}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    );
};
