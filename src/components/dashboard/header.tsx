"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function Header() {
    const { user } = useAuth(); // We can use the auth context here

    return (
        <div className="flex items-center justify-between p-4 pl-0">
            {/* Mobile Sidebar Toggle would go here */}
            <div className="hidden md:block">
                {/* Spacer or Breadcrumbs */}
            </div>

            <div className="flex items-center gap-x-4 ml-auto">
                <div className="flex flex-col items-end mr-2">
                    <span className="text-sm font-semibold text-white/90">
                        Welcome back, {user?.name?.split(" ")[0] || "User"} 👋
                    </span>
                    <span className="text-xs text-muted-foreground">
                        Ready to crush your goals today?
                    </span>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cpc-blue to-cpc-purple p-[2px]">
                    <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
