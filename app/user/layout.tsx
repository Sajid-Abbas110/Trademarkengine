"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Bell,
    Search,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    React.useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.user) {
                    setUser(data.user);
                } else {
                    // Not logged in, redirect to login
                    router.push("/login");
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
                router.push("/login");
            }
        }
        fetchUser();
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/login");
    };

    const navItems = [
        { name: "Dashboard", href: "/user", icon: LayoutDashboard },
        { name: "My Trademarks", href: "/user/trademarks", icon: FileText },
        { name: "Settings", href: "/user/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className={cn(
                "bg-slate-900 text-white fixed top-0 left-0 z-30 h-screen overflow-y-auto transition-all duration-300 flex flex-col justify-between",
                isSidebarOpen ? "w-64" : "w-20"
            )}>
                <div>
                    {/* Logo Area */}
                    <div className="h-20 flex items-center justify-center border-b border-slate-800">
                        {isSidebarOpen ? (
                            <Link href="/user" className="flex items-center gap-2 font-bold text-xl">
                                <div className="text-[#ea580c]">
                                    <Settings className="w-8 h-8 fill-current" />
                                </div>
                                <span>trademark</span>
                            </Link>
                        ) : (
                            <div className="text-[#ea580c]">
                                <Settings className="w-8 h-8 fill-current" />
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-2 mt-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-[#ea580c] text-white shadow-lg shadow-orange-900/20"
                                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    )}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    {isSidebarOpen && (
                                        <span className="font-medium whitespace-nowrap">{item.name}</span>
                                    )}
                                    {!isSidebarOpen && (
                                        <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                            {item.name}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User Profile Snippet */}
                <div className="p-4 border-t border-slate-800">
                    <button className={cn(
                        "w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800 transition-colors text-left",
                        !isSidebarOpen && "justify-center"
                    )}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ea580c] to-orange-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                            {user?.name?.[0] || "U"}
                        </div>
                        {isSidebarOpen && (
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-white truncate">{user?.name || "User"}</p>
                                <p className="text-xs text-slate-400 truncate">Client Account</p>
                            </div>
                        )}
                    </button>

                    <button
                        onClick={handleLogout}
                        className={cn(
                            "mt-2 w-full flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-950/20 transition-colors",
                            !isSidebarOpen && "justify-center"
                        )}
                    >
                        <LogOut className="w-5 h-5" />
                        {isSidebarOpen && <span className="text-sm font-medium">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={cn(
                    "flex-1 overflow-auto w-full transition-all duration-300",
                    isSidebarOpen ? "ml-64" : "ml-20"
                )}
            >

                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-20 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-slate-800 capitalize">
                            {pathname?.split("/").pop() || "Dashboard"}
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 transition-all text-slate-900 placeholder:text-slate-400"
                            />
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>

                        <button className="relative text-slate-500 hover:text-[#ea580c] transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
