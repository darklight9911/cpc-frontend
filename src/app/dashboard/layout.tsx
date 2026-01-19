"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // If finished loading and no user, redirect
        if (!isLoading && !user) {
            router.push("/auth/login");
        }
    }, [isLoading, user, router]);

    if (!isMounted || isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black">
                <Loader2 className="h-8 w-8 animate-spin text-cpc-blue" />
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect via useEffect
    }

    return (
        <div className="h-full relative bg-black">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72 pb-10">
                <Header />
                {children}
            </main>
        </div>
    );
}
