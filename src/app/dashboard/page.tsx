"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Clock, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div className="px-4 lg:px-8 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-card/40 border-white/10 backdrop-blur">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <Target className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Set Questions</p>
                            <h3 className="text-2xl font-bold">8</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card/40 border-white/10 backdrop-blur">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <Zap className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Day Streak</p>
                            <h3 className="text-2xl font-bold">3</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card/40 border-white/10 backdrop-blur">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                            <Clock className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Avg Practice</p>
                            <h3 className="text-2xl font-bold">12m</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card/40 border-white/10 backdrop-blur">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                            <Trophy className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Mastery Score</p>
                            <h3 className="text-2xl font-bold">20</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                {/* Left Column (2/3) */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Hero/Continue Practice Banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 shadow-2xl">
                        <div className="relative z-10 flex flex-col items-start gap-4">
                            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                <Zap className="mr-1 h-3 w-3" /> Recommended for you
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Continue your Math practice</h2>
                                <p className="text-indigo-100 max-w-lg">You're on a roll with Algebra. Complete 2 more sets to unlock the next mastery level.</p>
                            </div>
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-semibold mt-2">
                                Start Practice <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-50" />
                        <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
                    </div>

                    {/* Recent/Mock Exam */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-card/40 border-white/10 hover:bg-card/60 transition-colors cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                        <FileText className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Mock Exam</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Full-length simulation</p>
                                        <span className="text-xs font-medium text-cpc-blue">Start Now &rarr;</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/40 border-white/10 hover:bg-card/60 transition-colors cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                                        <Target className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Vocab Battle</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Compete with friends</p>
                                        <span className="text-xs font-medium text-orange-400">Play Now &rarr;</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                {/* Right Column (1/3) */}
                <div className="space-y-6">
                    <Card className="bg-card/40 border-white/10 h-full min-h-[300px]">
                        <CardHeader>
                            <CardTitle className="text-lg font-medium flex items-center">
                                <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                                Focus Areas
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-[300px]">
                            <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                                <Trophy className="h-8 w-8 text-zinc-600" />
                            </div>
                            <h4 className="font-medium mb-1">No weak spots found!</h4>
                            <p className="text-sm text-muted-foreground">Keep practicing to maintain your streak.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
