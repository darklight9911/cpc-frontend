"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Trophy,
    Users,
    Activity,
    BookOpen,
    Target,
    Zap,
    FileText,
    type LucideIcon
} from "lucide-react";

interface Route {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
}

const routes: Route[] = [
    {
        label: "Overview",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Leaderboard",
        icon: Trophy,
        href: "/dashboard/leaderboard",
        color: "text-yellow-500",
    },
    {
        label: "Connections",
        icon: Users,
        href: "/dashboard/connections",
        color: "text-pink-500",
    },
    {
        label: "Performance",
        icon: Activity,
        href: "/dashboard/performance",
        color: "text-emerald-500",
    },
    {
        label: "Learn",
        icon: BookOpen,
        href: "/dashboard/learn",
        color: "text-blue-500",
    },
    {
        label: "Practice",
        icon: Target,
        href: "/dashboard/practice",
        color: "text-violet-500",
    },
    {
        label: "Quiz",
        icon: Zap,
        href: "/dashboard/quiz",
        color: "text-orange-500",
    },
    {
        label: "Mock Test",
        icon: FileText,
        href: "/dashboard/mock-test",
        color: "text-red-500",
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white overflow-y-auto border-r border-white/10">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        {/* Logo placeholder - using text for now or existing image if available */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cpc-blue to-cpc-red rounded-lg opacity-80" />
                    </div>
                    <h1 className="text-2xl font-bold font-mono">
                        CPC
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
