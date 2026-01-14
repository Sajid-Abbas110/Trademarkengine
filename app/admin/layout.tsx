"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Package,
    CreditCard,
    Settings,
    Bell,
    Search,
    Menu,
    X,
    LogOut,
    User,
    ChevronRight,
    Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "User Tracking", href: "/admin/users", icon: Users },
    { name: "Order Tracking", href: "/admin/orders", icon: Package },
    { name: "Payment Tracking", href: "/admin/payments", icon: CreditCard },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Auto-open on desktop
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsSidebarOpen(true);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, text: "New order received #TRD-1001", time: "1 hour ago" },
        { id: 2, text: "New order received #TRD-1002", time: "2 hours ago" },
        { id: 3, text: "New order received #TRD-1003", time: "3 hours ago" },
    ]);

    const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.user) {
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Failed to fetch user profile", error);
            }
        };
        fetchUser();
    }, []);

    const handleSignOut = () => {
        router.push("/");
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 transform lg:relative lg:translate-x-0 outline-none",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:w-20"
                )}
            >
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    <div className="p-6 flex items-center justify-between border-b border-slate-800">
                        <Link href="/" className="flex items-center gap-2 group overflow-hidden">
                            <div className="text-[#ea580c] flex-shrink-0">
                                <Settings className="w-8 h-8 fill-current" />
                            </div>
                            {isSidebarOpen && (
                                <span className="text-xl font-bold text-white tracking-tight whitespace-nowrap">
                                    admin <span className="text-slate-400">panel</span>
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden text-slate-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {sidebarLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                                        isActive
                                            ? "bg-[#ea580c] text-white font-bold"
                                            : "hover:bg-slate-800 hover:text-white"
                                    )}
                                >
                                    <Icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-white" : "group-hover:text-[#ea580c]")} />
                                    {isSidebarOpen && <span className="font-medium">{link.name}</span>}
                                    {isActive && isSidebarOpen && <ChevronRight className="w-4 h-4 ml-auto" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-slate-800">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-3 px-3 py-3 w-full rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer group"
                        >
                            <LogOut className="w-5 h-5 group-hover:text-red-500" />
                            {isSidebarOpen && <span className="font-medium">Sign Out</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg hidden lg:flex"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <h1 className="text-lg font-semibold text-slate-800 capitalize">
                            {pathname.split('/').pop() === 'admin' ? 'Dashboard' : pathname.split('/').pop()?.replace('-', ' ')}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="hidden md:flex items-center relative">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-[#ea580c] outline-none text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"
                            >
                                <Bell className="w-6 h-6" />
                                {notifications.length > 0 && (
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                )}
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-200">
                                    <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                                        <h3 className="font-bold text-slate-800">Notifications</h3>
                                        {notifications.length > 0 && (
                                            <button
                                                onClick={clearNotifications}
                                                className="text-xs text-red-500 hover:underline flex items-center gap-1 font-bold"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                                Clear All
                                            </button>
                                        )}
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.length > 0 ? (
                                            notifications.map((notif) => (
                                                <div key={notif.id} className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                                                    <p className="text-sm font-medium text-slate-800">{notif.text}</p>
                                                    <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center text-slate-400 text-sm italic">
                                                No new notifications
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-3 text-center bg-slate-50 border-t border-slate-100">
                                        <button className="text-sm font-semibold text-[#ea580c] hover:underline">View all activity</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Profile */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <div className="hidden lg:block text-right mr-1">
                                    <p className="text-sm font-bold text-slate-800">{user?.name || "Admin User"}</p>
                                    <p className="text-xs text-slate-500 capitalize">{user?.role || "Super Admin"}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <img
                                        src="/images/admin-avatar.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.classList.add('bg-[#ea580c]', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold');
                                            e.currentTarget.parentElement!.innerText = user?.name ? user.name.charAt(0).toUpperCase() : "AU";
                                        }}
                                    />
                                </div>
                            </button>
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-200">
                                    <div className="p-4 border-b border-slate-100">
                                        <p className="text-sm font-bold text-slate-800">{user?.name || "Admin User"}</p>
                                        <p className="text-xs text-slate-500">{user?.email || "admin@trademarkengine.com"}</p>
                                    </div>
                                    <div className="p-2">
                                        <Link href="/admin/settings" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-[#ea580c] transition-colors">
                                            <User className="w-4 h-4" />
                                            <span className="text-sm font-medium">My Profile</span>
                                        </Link>
                                        <Link href="/admin/settings" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-[#ea580c] transition-colors">
                                            <Settings className="w-4 h-4" />
                                            <span className="text-sm font-medium">Settings</span>
                                        </Link>
                                        <hr className="my-2 border-slate-100" />
                                        <button
                                            onClick={handleSignOut}
                                            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors text-left font-bold"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            <span className="text-sm font-medium">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

